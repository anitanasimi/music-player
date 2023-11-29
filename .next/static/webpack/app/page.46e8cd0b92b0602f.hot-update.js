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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MusicPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction MusicPlayer() {\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handlePlayPause = ()=>{\n        if (audioRef.current) {\n            if (isPlaying) {\n                audioRef.current.pause();\n            } else {\n                audioRef.current.play();\n            }\n        }\n        setIsPlaying(!isPlaying);\n    };\n    const handleSeek = (event)=>{\n        if (audioRef.current) {\n            audioRef.current.currentTime = audioRef.current.duration / 100 * Number(event.target.value);\n            setProgress(Number(event.target.value));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const audio = audioRef.current;\n        if (!audio) return;\n        const handleTimeUpdate = ()=>{\n            setProgress(audio.currentTime / audio.duration * 100);\n        };\n        audio.addEventListener(\"timeupdate\", handleTimeUpdate);\n        return ()=>{\n            audio.removeEventListener(\"timeupdate\", handleTimeUpdate);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center h-auto bg-pink-500 rounded-xl p-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"uppercase tracking-wide text-sm text-indigo-500 font-semibold\",\n                            children: \"Music Player\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"block mt-1 text-lg leading-tight font-medium text-black hover:underline\",\n                            children: \"Mockingbird: Eminem - tiktok version\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center mt-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 mx-1\",\n                                onClick: handlePlayPause,\n                                children: isPlaying ? \"❚❚\" : \"▶\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"range\",\n                            min: \"0\",\n                            max: \"100\",\n                            value: progress,\n                            onChange: handleSeek,\n                            className: \"w-full h-2 bg-pink-200 rounded-full mt-4 cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                            ref: audioRef,\n                            src: \"./Mockingbird.mp3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n                lineNumber: 47,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DefaultMusicPlayer.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(MusicPlayer, \"vpdHXqpJlYNkYvlYAL2AcFBod84=\");\n_c = MusicPlayer;\nvar _c;\n$RefreshReg$(_c, \"MusicPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRGVmYXVsdE11c2ljUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFb0Q7QUFFckMsU0FBU0c7O0lBQ3BCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTVEsV0FBV1AsNkNBQU1BLENBQW1CO0lBRTFDLE1BQU1RLGtCQUFrQjtRQUNwQixJQUFJRCxTQUFTRSxPQUFPLEVBQUU7WUFDbEIsSUFBSU4sV0FBVztnQkFDWEksU0FBU0UsT0FBTyxDQUFDQyxLQUFLO1lBQzFCLE9BQU87Z0JBQ0hILFNBQVNFLE9BQU8sQ0FBQ0UsSUFBSTtZQUN6QjtRQUNKO1FBQ0FQLGFBQWEsQ0FBQ0Q7SUFDbEI7SUFFQSxNQUFNUyxhQUFhLENBQUNDO1FBQ2hCLElBQUlOLFNBQVNFLE9BQU8sRUFBRTtZQUNsQkYsU0FBU0UsT0FBTyxDQUFDSyxXQUFXLEdBQUcsU0FBVUwsT0FBTyxDQUFDTSxRQUFRLEdBQUcsTUFBT0MsT0FBT0gsTUFBTUksTUFBTSxDQUFDQyxLQUFLO1lBQzVGWixZQUFZVSxPQUFPSCxNQUFNSSxNQUFNLENBQUNDLEtBQUs7UUFDekM7SUFDSjtJQUdBakIsZ0RBQVNBLENBQUM7UUFDTixNQUFNa0IsUUFBUVosU0FBU0UsT0FBTztRQUM5QixJQUFJLENBQUNVLE9BQU87UUFFWixNQUFNQyxtQkFBbUI7WUFDckJkLFlBQVksTUFBT1EsV0FBVyxHQUFHSyxNQUFNSixRQUFRLEdBQUk7UUFDdkQ7UUFFQUksTUFBTUUsZ0JBQWdCLENBQUMsY0FBY0Q7UUFFckMsT0FBTztZQUNIRCxNQUFNRyxtQkFBbUIsQ0FBQyxjQUFjRjtRQUM1QztJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FBZ0U7Ozs7OztzQ0FDL0UsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUEwRTs7Ozs7O3NDQUN6Riw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNDO2dDQUFPRCxXQUFVO2dDQUFpRUUsU0FBU2xCOzBDQUN2RkwsWUFBWSxPQUFPOzs7Ozs7Ozs7OztzQ0FHNUIsOERBQUN3Qjs0QkFBTUMsTUFBSzs0QkFBUUMsS0FBSTs0QkFBSUMsS0FBSTs0QkFBTVosT0FBT2I7NEJBQVUwQixVQUFVbkI7NEJBQVlZLFdBQVU7Ozs7OztzQ0FDdkYsOERBQUNMOzRCQUFNYSxLQUFLekI7NEJBQVUwQixLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEQ7R0ExRHdCL0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWZhdWx0TXVzaWNQbGF5ZXIudHN4P2E3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE11c2ljUGxheWVyKCkge1xyXG4gICAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQbGF5UGF1c2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1ZGlvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGlzUGxheWluZykge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWVrID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGlmIChhdWRpb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSAoYXVkaW9SZWYuY3VycmVudC5kdXJhdGlvbiAvIDEwMCkgKiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3MoTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvID0gYXVkaW9SZWYuY3VycmVudDtcclxuICAgICAgICBpZiAoIWF1ZGlvKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVRpbWVVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzKChhdWRpby5jdXJyZW50VGltZSAvIGF1ZGlvLmR1cmF0aW9uKSAqIDEwMCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIGhhbmRsZVRpbWVVcGRhdGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBhdWRpby5yZW1vdmVFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgaGFuZGxlVGltZVVwZGF0ZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1hdXRvIGJnLXBpbmstNTAwIHJvdW5kZWQteGwgcC0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbXgtYXV0byBiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gbWQ6bWF4LXctMnhsIG0tNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNtIHRleHQtaW5kaWdvLTUwMCBmb250LXNlbWlib2xkXCI+TXVzaWMgUGxheWVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMSB0ZXh0LWxnIGxlYWRpbmctdGlnaHQgZm9udC1tZWRpdW0gdGV4dC1ibGFjayBob3Zlcjp1bmRlcmxpbmVcIj5Nb2NraW5nYmlyZDogRW1pbmVtIC0gdGlrdG9rIHZlcnNpb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwIGhvdmVyOmJnLXBpbmstNjAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHAtMiBteC0xXCIgb25DbGljaz17aGFuZGxlUGxheVBhdXNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNQbGF5aW5nID8gJ+KdmuKdmicgOiAn4pa2J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17cHJvZ3Jlc3N9IG9uQ2hhbmdlPXtoYW5kbGVTZWVrfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yIGJnLXBpbmstMjAwIHJvdW5kZWQtZnVsbCBtdC00IGN1cnNvci1wb2ludGVyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXVkaW8gcmVmPXthdWRpb1JlZn0gc3JjPVwiLi9Nb2NraW5nYmlyZC5tcDNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJNdXNpY1BsYXllciIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJhdWRpb1JlZiIsImhhbmRsZVBsYXlQYXVzZSIsImN1cnJlbnQiLCJwYXVzZSIsInBsYXkiLCJoYW5kbGVTZWVrIiwiZXZlbnQiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJhdWRpbyIsImhhbmRsZVRpbWVVcGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJtaW4iLCJtYXgiLCJvbkNoYW5nZSIsInJlZiIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DefaultMusicPlayer.tsx\n"));

/***/ })

});