/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

//+
var compactJson = require('ersatz-compactjson'),
  data = require('./package.json'),
  jsonText = compactJson(data);
console.log(jsonText);
//-
