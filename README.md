
<!--#echo json="package.json" key="name" underline="=" -->
ersatz-compactjson
==================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Shim: Render compact JSON even if you cannot use compactjson (for whatever
reason, including management decisions).
<!--/#echo -->


Usage
-----

<!--#include file="usage.js" start="//+" stop="//-" code="javascript" -->
<!--#verbatim lncnt="6" -->
```javascript
var compactJson = require('ersatz-compactjson'),
  data = require('./package.json'),
  jsonText = compactJson(data);
console.log(jsonText);
```


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
