console.log('loaded script');
var _val_global = {};
console.log('start');
//Onblur Validations
//var str = document.querySelector('[maxlength="80"]').value;
//var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
//var res = date_regex.test(str.substring(14)) && str.includes('Week Ending');
window._val_global.valtip_one = $("<warn1/>", {
    'class': 'tooltips'
    , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Enter Report Name in Correct Format: "Week Ending - MM/DD/YYYY"</msg>'
}).append('<style>\r\nwarn1.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn1.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn1:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

window._val_global.valtip_two = $("<warn2/>", {
    'class': 'tooltips'
    , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Schedule status is required.</msg>'
}).append('<style>\r\nwarn2.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn2.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn2:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

window._val_global.valtip_three = $("<warn3/>", {
    'class': 'tooltips'
    , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Variance Explanation is required when status is not On-Track.</msg>'
}).append('<style>\r\nwarn3.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn3.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn3:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

window._val_global.valtip_four = $("<warn4/>", {
    'class': 'tooltips'
    , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Scope Status is Required.</msg>'
}).append('<style>\r\nwarn4.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn4.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn4:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

window._val_global.valtip_five = $("<warn5/>", {
    'class': 'tooltips'
    , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Variance Explanation is required when status is not On-Track.</msg>'
}).append('<style>\r\nwarn5.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn5.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn5:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

window._val_global.valtip_six = $("<warn6/>", {
    'class': 'tooltips'
    , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Cost & Effort Status is Required.</msg>'
}).append('<style>\r\nwarn6.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn6.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn6:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

window._val_global.valtip_seven = $("<warn7/>", {
    'class': 'tooltips'
    , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Variance Explanation is required when status is not On-Track.</msg>'
}).append('<style>\r\nwarn7.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn7.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn7:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');


window._val_global.repname = $('[maxlength="80"]');
window._val_global.schedule_status = $('[name="cop_schedule_status"]');
window._val_global.schedule_exp = $('[name="cop_schedule_exp"]');
window._val_global.scope_status = $('[name="cop_scope_status"]');
window._val_global.scope_exp = $('[name="cop_scope_exp"]');
window._val_global.costeffort_status = $('[name="cop_cost_eft_status"]');
window._val_global.costeffort_exp = $('[name="cop_effort_exp"]');

//1...
$('[maxlength="80"]').blur(function () {
    console.log('lost focus');
    var str = document.querySelector('[maxlength="80"]').value;
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    var res = date_regex.test(str.substring(14)) && str.includes('Week Ending');
    if (res == false) {
        $('tick1').remove();
        if (!($('warn1').length)) {
            repname = repname.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            repname = repname.after(valtip_one);
        }

    } else {
        $('warn1').remove();
        repname = repname.removeClass("animation");
        if (!($('tick1').length)) {
            //repname = repname.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            repname.after('<tick1><font color="blue">&nbsp;&nbsp;&nbsp;&#10004<font></tick1>');
        }

    }



});

//2...
$('[name="cop_schedule_status"]').blur(function () {
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
});

//3...
$('[name="cop_schedule_exp"]').blur(function () {
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
});

//4...
$('[name="cop_scope_status"]').blur(function () {
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
});

//5...
$('[name="cop_scope_exp"]').blur(function () {
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
});

//6...
$('[name="cop_cost_eft_status"]').blur(function () {
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

});

//7...
$('[name="cop_effort_exp"]').blur(function () {

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
});