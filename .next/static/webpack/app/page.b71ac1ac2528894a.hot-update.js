"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/DefaultMusicPlayer.tsx":
/*!*******************************************!*\
  !*** ./components/DefaultMusicPlayer.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MusicPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction MusicPlayer() {\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handlePlayPause = ()=>{\n        setIsPlaying(!isPlaying);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center h-auto bg-pink-500\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"uppercase tracking-wide text-sm text-indigo-500 font-semibold\",\n                            children: \"Music Player\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"block mt-1 text-lg leading-tight font-medium text-black hover:underline\",\n                            children: \"Enjoy your favorite tunes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-2 text-gray-500\",\n                            children: \"Song Title: Artist Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 mx-1\",\n                                    children: \"‹\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handlePlayPause,\n                                    className: \"bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 mx-1\",\n                                    children: isPlaying ? \"❚❚\" : \"▶\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 mx-1\",\n                                    children: \"›\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(MusicPlayer, \"dxr5RgzQJlMZkbQdHY9iHZ+FF0w=\");\n_c = MusicPlayer;\nvar _c;\n$RefreshReg$(_c, \"MusicPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRGVmYXVsdE11c2ljUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFaUM7QUFFbEIsU0FBU0M7O0lBQ3BCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNSSxrQkFBa0I7UUFDcEJELGFBQWEsQ0FBQ0Q7SUFDbEI7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQWdFOzs7Ozs7c0NBQy9FLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FBMEU7Ozs7OztzQ0FDekYsOERBQUNDOzRCQUFFRCxXQUFVO3NDQUFxQjs7Ozs7O3NDQUNsQyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRTtvQ0FBT0YsV0FBVTs4Q0FBaUU7Ozs7Ozs4Q0FHbkYsOERBQUNFO29DQUFPQyxTQUFTTDtvQ0FBaUJFLFdBQVU7OENBQ3ZDSixZQUFZLE9BQU87Ozs7Ozs4Q0FFeEIsOERBQUNNO29DQUFPRixXQUFVOzhDQUFpRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVS9HO0dBaEN3Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWZhdWx0TXVzaWNQbGF5ZXIudHN4P2E3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXVzaWNQbGF5ZXIoKSB7XHJcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBsYXlQYXVzZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLWF1dG8gYmctcGluay01MDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiBtZDptYXgtdy0yeGwgbS00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc20gdGV4dC1pbmRpZ28tNTAwIGZvbnQtc2VtaWJvbGRcIj5NdXNpYyBQbGF5ZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBtdC0xIHRleHQtbGcgbGVhZGluZy10aWdodCBmb250LW1lZGl1bSB0ZXh0LWJsYWNrIGhvdmVyOnVuZGVybGluZVwiPkVuam95IHlvdXIgZmF2b3JpdGUgdHVuZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWdyYXktNTAwXCI+U29uZyBUaXRsZTogQXJ0aXN0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1waW5rLTUwMCBob3ZlcjpiZy1waW5rLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBwLTIgbXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBsYXlQYXVzZX0gY2xhc3NOYW1lPVwiYmctcGluay01MDAgaG92ZXI6YmctcGluay02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgcC0yIG14LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNQbGF5aW5nID8gJ+KdmuKdmicgOiAn4pa2J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1waW5rLTUwMCBob3ZlcjpiZy1waW5rLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBwLTIgbXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAulxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTXVzaWNQbGF5ZXIiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJoYW5kbGVQbGF5UGF1c2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DefaultMusicPlayer.tsx\n"));

/***/ })

});