"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/dezalgo";
exports.ids = ["vendor-chunks/dezalgo"];
exports.modules = {

/***/ "(rsc)/./node_modules/dezalgo/dezalgo.js":
/*!*****************************************!*\
  !*** ./node_modules/dezalgo/dezalgo.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar wrappy = __webpack_require__(/*! wrappy */ \"(rsc)/./node_modules/wrappy/wrappy.js\");\nmodule.exports = wrappy(dezalgo);\nvar asap = __webpack_require__(/*! asap */ \"(rsc)/./node_modules/asap/asap.js\");\nfunction dezalgo(cb) {\n    var sync = true;\n    asap(function() {\n        sync = false;\n    });\n    return function zalgoSafe() {\n        var args = arguments;\n        var me = this;\n        if (sync) asap(function() {\n            cb.apply(me, args);\n        });\n        else cb.apply(me, args);\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGV6YWxnby9kZXphbGdvLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxTQUFTQyxtQkFBT0EsQ0FBQztBQUNyQkMsT0FBT0MsT0FBTyxHQUFHSCxPQUFPSTtBQUV4QixJQUFJQyxPQUFPSixtQkFBT0EsQ0FBQztBQUVuQixTQUFTRyxRQUFTRSxFQUFFO0lBQ2xCLElBQUlDLE9BQU87SUFDWEYsS0FBSztRQUNIRSxPQUFPO0lBQ1Q7SUFFQSxPQUFPLFNBQVNDO1FBQ2QsSUFBSUMsT0FBT0M7UUFDWCxJQUFJQyxLQUFLLElBQUk7UUFDYixJQUFJSixNQUNGRixLQUFLO1lBQ0hDLEdBQUdNLEtBQUssQ0FBQ0QsSUFBSUY7UUFDZjthQUVBSCxHQUFHTSxLQUFLLENBQUNELElBQUlGO0lBQ2pCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdXNpYy1wbGF5ZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RlemFsZ28vZGV6YWxnby5qcz9lYzA1Il0sInNvdXJjZXNDb250ZW50IjpbInZhciB3cmFwcHkgPSByZXF1aXJlKCd3cmFwcHknKVxubW9kdWxlLmV4cG9ydHMgPSB3cmFwcHkoZGV6YWxnbylcblxudmFyIGFzYXAgPSByZXF1aXJlKCdhc2FwJylcblxuZnVuY3Rpb24gZGV6YWxnbyAoY2IpIHtcbiAgdmFyIHN5bmMgPSB0cnVlXG4gIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgIHN5bmMgPSBmYWxzZVxuICB9KVxuXG4gIHJldHVybiBmdW5jdGlvbiB6YWxnb1NhZmUoKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHNcbiAgICB2YXIgbWUgPSB0aGlzXG4gICAgaWYgKHN5bmMpXG4gICAgICBhc2FwKGZ1bmN0aW9uKCkge1xuICAgICAgICBjYi5hcHBseShtZSwgYXJncylcbiAgICAgIH0pXG4gICAgZWxzZVxuICAgICAgY2IuYXBwbHkobWUsIGFyZ3MpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ3cmFwcHkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlemFsZ28iLCJhc2FwIiwiY2IiLCJzeW5jIiwiemFsZ29TYWZlIiwiYXJncyIsImFyZ3VtZW50cyIsIm1lIiwiYXBwbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/dezalgo/dezalgo.js\n");

/***/ })

};
;