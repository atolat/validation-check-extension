# validation-check-extension
Chrome Extension to check validation scripts.

-Download extension (Click on "Clone or Download", select "Download Zip"), unzip

-Go to chrome extensions and enable developer mode

-Load unpacked extension

-Create new validation scripts in the extension folder

-To test scripts, add script to manifest.json

```
 "js": ["jquery-3.2.1.min.js","statusreportval.js","validationtest1.js",...],
 ```
-Reload extension, check console for error logs.
