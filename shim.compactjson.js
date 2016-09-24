/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function () {
  var cj;

  cj = function cj(x, opt) {
    opt = (opt || false);

    x = JSON.stringify(x, (opt.serializer || null), 2);
    x = x.replace(/(\n\s*|$)/g, '\r$1\r');

    // merge opening brackets
    x = x.replace(/(\{|\[)\r\n +\r/g, '$1 ');

    // merge closing brackets
    x = x.replace(/\r\n *\r(\]|\})/g, ' $1');

    // merge flat value lines
    x = x.replace(/,\r(\n\s*)\r((?:"\w+":|) *(?:\[|\{))/g, ',$1$2');
    x = x.replace(/(["\*-Z_-z],)[\r\n]+ *(?=\r)/g, '$1 ');

    if (opt.ersLW) {
      x = opt.ersLW(x, { width: opt.width, indent: '  ',
        splitAtRgx: /(,)(\s*)(?=\r)/ });
    }
    if (opt.lineWrap) { x = opt.lineWrap(x, opt.lineWrapOpts); }
    x = x.replace(/\r/g, '');

    if (opt.ersLW) { x = opt.ersLW.unwrap(x, opt.unwrap); }
    return x;
  };










  return function ersatzCompactJson(x, opt) { return cj(x, opt); };
}());
