# validation-check-extension
Chrome Extension to check validation scripts.

-Download extension (Click on "Clone or Download", select "Download Zip"), unzip

-Go to chrome extensions and enable developer mode

-Load unpacked extension

-Create new validation scripts in the extension folder

-To test scripts, add script to manifest.json.

-Add all dependencies here, eg. jquery library.
```
 "js": ["jquery-3.2.1.min.js","statusreportval.js","validationtest1.js",...],
 ```
-Modify "matches" parameter to match your local clarity instance url.
```
"matches": [ "*://localhost:8080/*" ]
```
-Reload extension, check console for error logs.
