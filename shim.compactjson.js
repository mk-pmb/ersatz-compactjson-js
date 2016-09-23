/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function () {
  function cj(x) {
    x = JSON.stringify(x, null, 2);
    x = x.replace(/(\n\s*|$)/g, '\r$1\r');

    // merge opening brackets
    x = x.replace(/(\{|\[)\r\n +\r/g, '$1 ');

    // merge closing brackets
    x = x.replace(/\r\n *\r(\]|\})/g, ' $1');

    // merge flat value lines
    x = x.replace(/,\r(\n\s*)\r((?:"\w+":|) *(?:\[|\{))/g, ',$1$2');
    x = x.replace(/(["\*-Z_-z],)[\r\n]+ *(?=\r)/g, '$1 ');

    x = cj.ersatzLineWrap(x);
    x = x.replace(/\r/g, '');
    return x;
  }

  cj.ersatzLineWrap = (function () {
    var elw = function ersatzLineWrap(s) {
      do {
        elw.had = false;
        s = s.replace(elw.rx, elw.rpl);
      } while (elw.had);
      return s;
    };
    elw.rx = /(^|\n)[\S \t\r]{72}\S*\r/g;
    elw.rpl = function (m) {
      elw.had = true;
      return m.replace(/\s+$/, '\n' + m.match(/^[\r\n]*([ \t]*)/)[1]);
    };
    return elw;
  }());

  return function ersatzCompactJson(x) { return cj(x); };
}());
