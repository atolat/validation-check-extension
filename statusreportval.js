/*
This Script has been composed in an object oriented pattern. There are easier workarounds to achieve the same results (simple monolithic field validations using only if-else clause blocks, without any objects). Using this approach, the script can be scaled to accomodate multiple foreign attributes/resources. 
*/


//Global Obj that holds all the callbacks
var _val_global = {};
console.log('start');




//Get Tooltip resources from AWS

/*Use jquery's .get function to make a http get request to obtain the resources for the tooltips. These resources currently reside in S3 in JSON format::

{
    "tooltips": {
        "tooltip1_url": "https://d2qhvajt3imc89.cloudfront.net/customers/Excers/Schedule+status.png"
        , "tooltip2_url": "https://d2qhvajt3imc89.cloudfront.net/customers/Excers/Schedule+status.png"
        , "tooltip3_url": "https://d2qhvajt3imc89.cloudfront.net/customers/Excers/Scope+Status.png"
        , "tooltip4_url": "https://d2qhvajt3imc89.cloudfront.net/customers/Excers/Cost+and+Effort+status.png"
    }
    , "video": {
        "video1_url": "https://www.youtube.com/embed/qUzeyk4Upsg"
    }
    , "pdf": {
        "pdf1_url": "https://s3-us-west-2.amazonaws.com/excershelpdemo/resources/how-to-create-a-status_report.pdf"
    }
    , "bucket": {
        "name": "help-config-bucket"
    }
    , "singlebutton": "submit"
    , "bucket_name": "help-config-bucket"
}

The get request on success will return the 'data' object. The URLs to the resources are obtained from this object using standard object property access notation.
*/

$(document).ready(function () {
    $.get("https://s3-us-west-2.amazonaws.com/helpdemoresources/test/obj.json", function (data, status) {
        window.tooltip1_url = data.tooltips.tooltip1_url;
        window.tooltip2_url = data.tooltips.tooltip2_url;
        window.tooltip3_url = data.tooltips.tooltip3_url;
        window.tooltip4_url = data.tooltips.tooltip4_url;
    });
});




//Setting up the object for adding buttons at page level.
/*
The page settings object will hold references to all buttons/tooltips and their properties (url/hash, position, id, etc).
*/
window._val_global['page_settings'] = {};

window._val_global.z_refresh = true;

//Reapply page settings periodically
/*
This function will periodically repply all the page settings (re-add buttons/tooltips) to the current scope by invoking the apply_page_settings function every 1000ms. This is required because clarity tends to remove foreign added elements from the DOM. 
*/
window._val_global.apply_page_settings = function () {
    var self_help_applied;
    $.each(window._val_global['page_settings'], function (name, settings) {
        if (window.location.hash.indexOf(settings.hash) != -1) {
            window._val_global.init_page(name, settings);
            if (settings.self_help) {
                self_help_applied = true;
            }
        }
    });

    window.setTimeout(function () {
        window._val_global.apply_page_settings();
    }, 1000);

};

window._val_global.apply_page_settings();



//For flow segmentation -- Not Required
window._val_global.equals = function (one, two) {
    if (!one) {
        if (!two) {
            return true;
        } else {
            return false;
        }
    } else {
        if (!two) {
            return false;
        } else {
            return one == two;
        }
    }
}



//CSS for the tooltips associated with the "?" icons/buttons.--Can be reused directly!

var toolTipCss = '<style>\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    \r\n    \/* Position the tooltip *\/\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: -5px;\r\n    right: 105%;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n}\r\n<\/style>';

//CSS for "?" button, includes some animations, hover function definitions.--Can be reused directly!

var buttonCss = '<style>\r\n.button-hov { \r\n display: inline-block;\r\n position: absolute;\r\n right: 20px; inline-block;\r\n border-radius: 84px;\r\n background-color: #1c9a1a;\r\n border: 1px solid #1c9a1a;\r\n color: #FFFFFF;\r\n text-align: center;\r\n font-size: 10px;\r\n padding: 4px 6px 4px 6px;\r\n cursor: pointer;\r\n margin: 4px 10px 0px 0px;\r\n}\r\n#check {position: relative;z-index: 10000;fill: none;stroke: green;stroke-width: 20;stroke-linecap: round;stroke-dasharray: 180;stroke-dashoffset: 180;  animation: draw 2s 1 ease;}@keyframes draw {  to {    stroke-dashoffset: 0;  }}<\/style>';




/*
Standard jquery button definition, this will dictate the id assigned to the button element. This function will also take in the button attributes (click function, class, parent selector) which is passed in at invocation from sub-objects of the 'page settings' object. 
*/

// "Validate" button
window._val_global.add_button = function (name, button, parentSelector, action) {
    var validate_id = "wfx_" + name + "_validate";
    if (document.getElementById(validate_id)) {
        return;
    }
    var validate = $('<button/>', {
        html: button
        , class: 'ppm_button button'
        , click: action
        , id: validate_id
    });
    $(parentSelector).append(validate);
};


// "Report Status" Tooltip/ "?" icon
window._val_global.add_button_report_status = function (name, img, parentSelector) {
    var report_status_id = "wfx_" + name + "_report_status";
    if (document.getElementById(report_status_id)) {
        return;
    }
    var report_status = $('<button/>', {
        text: "?"
        , style: "vertical-align:middle"
        , class: 'button-hov'
        , id: report_status_id
    });
    $(report_status).append(toolTipCss).append(buttonCss).addClass("tooltip").append(' <span class="tooltiptext"><img src="' + img + '" /></span>');

    $(parentSelector).append(report_status);
};


// "Schedule Status" Tooltip
window._val_global.add_button_schedule_status = function (name, img, parentSelector) {
    var schedule_status_id = "wfx_" + name + "_schedule_status";
    if (document.getElementById(schedule_status_id)) {
        return;
    }
    var schedule_status = $('<button/>', {
        text: "?"
        , style: "vertical-align:middle"
        , class: 'button-hov'
        , id: schedule_status_id
    });
    $(schedule_status).append(toolTipCss).append(buttonCss).addClass("tooltip").append(' <span class="tooltiptext"><img src="' + img + '" /></span>');

    $(parentSelector).append(schedule_status);
};


// Scope Status Tooltip
window._val_global.add_button_scope_status = function (name, img, parentSelector) {
    var scope_status_id = "wfx_" + name + "_scope_status";
    if (document.getElementById(scope_status_id)) {
        return;
    }
    var scope_status = $('<button/>', {
        text: "?"
        , style: "vertical-align:middle"
        , class: 'button-hov'
        , id: scope_status_id
    });
    $(scope_status).append(toolTipCss).append(buttonCss).addClass("tooltip").append(' <span class="tooltiptext"><img src="' + img + '" /></span>');

    $(parentSelector).append(scope_status);
};


// "Cost & Effort" Tooltip
window._val_global.add_button_ce_status = function (name, img, parentSelector) {
    var ce_status_id = "wfx_" + name + "_ce_status";
    if (document.getElementById(ce_status_id)) {
        return;
    }
    var ce_status = $('<button/>', {
        text: "?"
        , style: "vertical-align:middle"
        , class: 'button-hov'
        , id: ce_status_id
    });
    $(ce_status).append(toolTipCss).append(buttonCss).addClass("tooltip").append(' <span class="tooltiptext"><img src="' + img + '" /></span>');

    $(parentSelector).append(ce_status);
};


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/



//Loads _val_global and its properties on Page init
/*
This function is invoked in apply_page_settings 
*/
window._val_global.init_page = function (name, settings) {

    // Validate button addition.
    console.log("Tracking...");

    if (settings.validate) {
        window._val_global.add_button(name, "Validate", settings.button_bar, settings.validate);
    }

    //Report Status tooltip addition.

    window._val_global.add_button_report_status(name, window.tooltip1_url, settings.button_bar_one);

    //Schedule Status tooltip addition.

    window._val_global.add_button_schedule_status(name, window.tooltip2_url, settings.button_bar_two);

    //Scope Status tooltip addition.

    window._val_global.add_button_scope_status(name, window.tooltip3_url, settings.button_bar_three);

    //Cost & Effect Status tooltip addition.

    window._val_global.add_button_ce_status(name, window.tooltip4_url, settings.button_bar_four);
    
    //Add any other script here that you need to re-apply to page periodically...

};



//Validate button click action -- All the logic for the validation goes here...

var status_report_validate = function () {

    //Standard regex pattern matching to check date format
    var str = document.querySelector('[maxlength="80"]').value;
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    var res = date_regex.test(str.substring(14)) && str.includes('Week Ending');
    
    /*
    Valtips are the warning icons that appear near each box. The following CSS defines the content that goes into the tooltip (hover over !). There will be one unique valtip for each field that requires validation
    */
    var valtip_one = $("<warn1/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Enter Report Name in Correct Format: "Week Ending - MM/DD/YYYY"</msg>'
    }).append('<style>\r\nwarn1.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn1.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn1:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_two = $("<warn2/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Schedule status is required.</msg>'
    }).append('<style>\r\nwarn2.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn2.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn2:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_three = $("<warn3/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Variance Explanation is required when status is not On-Track.</msg>'
    }).append('<style>\r\nwarn3.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn3.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn3:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_four = $("<warn4/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Scope Status is Required.</msg>'
    }).append('<style>\r\nwarn4.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn4.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn4:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_five = $("<warn5/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Variance Explanation is required when status is not On-Track.</msg>'
    }).append('<style>\r\nwarn5.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn5.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn5:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_six = $("<warn6/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Cost & Effort Status is Required.</msg>'
    }).append('<style>\r\nwarn6.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn6.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn6:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_seven = $("<warn7/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Variance Explanation is required when status is not On-Track.</msg>'
    }).append('<style>\r\nwarn7.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn7.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn7:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');
    
    
    
/*
Grab each field that requires validation using their CSS selectors and store them as vars.
*/   
    var repname = $('[maxlength="80"]');
    var schedule_status = $('[name="cop_schedule_status"]');
    var schedule_exp = $('[name="cop_schedule_exp"]');
    var scope_status = $('[name="cop_scope_status"]');
    var scope_exp = $('[name="cop_scope_exp"]');
    var costeffort_status = $('[name="cop_cost_eft_status"]');
    var costeffort_exp = $('[name="cop_effort_exp"]');


    //Validation Blocks, in each block, make sure you check if a tick or warn already exists and then proceed with validation logic.
    if (res == false) {
        $('tick1').remove();
        if (!($('warn1').length)) {
            //Adding the blinky red borders to a field!!
            repname = repname.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            repname = repname.after(valtip_one);
        }

    } else {
        $('warn1').remove();
        //Removing the blinky border
        repname = repname.removeClass("animation");
        if (!($('tick1').length)) {
    
            //Adding a tick to the field if it passes the validation check.
            repname.after('<tick1><font color="blue">&nbsp;&nbsp;&nbsp;&#10004<font></tick1>');
        }

    }


    if ((document.querySelector('[name="cop_schedule_status"]').selectedIndex == 0)) {
        $('tick2').remove();
        if (!($('warn2').length)) {
            schedule_status = schedule_status.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            schedule_status = schedule_status.after(valtip_two);
        }
    } else {
        $('warn2').remove();
        schedule_status = schedule_status.removeClass("animation");
        if (!($('tick2').length)) {
            //schedule_status = schedule_status.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            schedule_status.after('<tick2><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick2>');
        }
    }

    if ((document.querySelector('[name="cop_schedule_status"]').selectedIndex != 1) && document.querySelector('[name="cop_schedule_exp"]').value.length == 0) {
        $('tick3').remove();
        if (!($('warn3').length)) {
            schedule_exp = schedule_exp.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            schedule_exp = schedule_exp.after(valtip_three);
        }
    } else {
        $('warn3').remove();
        schedule_exp = schedule_exp.removeClass("animation");
        if (!($('tick3').length)) {
            //schedule_exp = schedule_exp.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            schedule_exp.after('<tick3><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick3>');
        }
    }


    if ((document.querySelector('[name="cop_scope_status"]').selectedIndex == 0)) {
        $('tick4').remove();
        if (!($('warn4').length)) {
            scope_status = scope_status.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            scope_status = scope_status.after(valtip_four);
        }

    } else {
        $('warn4').remove();
        scope_status = scope_status.removeClass("animation");
        if (!($('tick4').length)) {
            //scope_status = scope_status.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            scope_status.after('<tick4><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick4>');
        }
    }


    if ((document.querySelector('[name="cop_scope_status"]').selectedIndex != 1) && document.querySelector('[name="cop_scope_exp"]').value.length == 0) {
        $('tick5').remove();
        if (!($('warn5').length)) {
            scope_exp = scope_exp.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            scope_exp = scope_exp.after(valtip_five);
        }
    } else {
        $('warn5').remove();
        scope_exp = scope_exp.removeClass("animation");
        if (!($('tick5').length)) {
            //scope_exp = scope_exp.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            scope_exp.after('<tick5><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick5>');
        }
    }

    if ((document.querySelector('[name="cop_cost_eft_status"]').selectedIndex == 0)) {
        $('tick6').remove();
        if (!($('warn6').length)) {
            costeffort_status = costeffort_status.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            costeffort_status = costeffort_status.after(valtip_six);
        }

    } else {
        $('warn6').remove();
        costeffort_status = costeffort_status.removeClass("animation");
        if (!($('tick6').length)) {
            //costeffort_status = costeffort_status.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            costeffort_status.after('<tick6><font color="blue">&nbsp;&nbsp;&nbsp;&#10004<font></tick6>');
        }
    }


    if ((document.querySelector('[name="cop_cost_eft_status"]').selectedIndex != 1) && document.querySelector('[name="cop_effort_exp"]').value.length == 0) {
        $('tick7').remove();
        if (!($('warn7').length)) {
            costeffort_exp = costeffort_exp.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            costeffort_exp = costeffort_exp.after(valtip_seven);
        }

    } else {
        $('warn7').remove();
        costeffort_exp = costeffort_exp.removeClass("animation");
        if (!($('tick7').length)) {
            //costeffort_exp = costeffort_exp.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            costeffort_exp.after('<tick7><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick7>');
        }
    }

};



/*
All the attributes for the buttons/tooltips go here. 
hash: Which page should the button/tooltip appear on??
button_bar: Where should the button/tooltip be placed on that page??
vaidate: Which function will be invoked on clicking the button??
*/

// Validate one button for New status report.
window._val_global['page_settings']['create_status_report'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar": "#ppm_workspace_bb .ppm_button_bar,form .ppm_button_bar"
    , "validate": status_report_validate
};


// Validate two button for Existing status report.
window._val_global['page_settings']['update_status_report'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar": "#ppm_workspace_bb .ppm_button_bar,form .ppm_button_bar"
    , "validate": status_report_validate
};

// Report Status button for New Status Report.
window._val_global['page_settings']['report_status_one'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar_one": "[title = 'Status Report']"
};

// Report Status button for Existing Status Report.
window._val_global['page_settings']['report_status_two'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar_one": "[title = 'Status Report']"
};


// Schedule Status button for New Status Report.
window._val_global['page_settings']['schedule_status_one'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar_two": "[title = 'Schedule']"

};

// Schedule Status button for Existing Status Report.
window._val_global['page_settings']['schedule_status_two'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar_two": "[title = 'Schedule']"

};


// Scope Status button for New Status Report.
window._val_global['page_settings']['scope_status_one'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar_three": "[title = 'Scope']"

};


// Scope Status button for Existing Status Report.
window._val_global['page_settings']['scope_status_two'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar_three": "[title = 'Scope']"

};


// Cost & Effort Status button for New Status Report.
window._val_global['page_settings']['cost_and_effort_status_one'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar_four": "[title = 'Cost and Effort']"

};

// Cost & Effort Status button for Existing Status Report.
window._val_global['page_settings']['cost_and_effort_status_two'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar_four": "[title = 'Cost and Effort']"

};



