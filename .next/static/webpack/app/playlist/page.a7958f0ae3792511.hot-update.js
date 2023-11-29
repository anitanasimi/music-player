"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/playlist/page",{

/***/ "(app-pages-browser)/./components/DynamicMusicPlayer.tsx":
/*!*******************************************!*\
  !*** ./components/DynamicMusicPlayer.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MusicPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction MusicPlayer(music) {\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handlePlayPause = ()=>{\n        if (audioRef.current) {\n            if (isPlaying) {\n                audioRef.current.pause();\n            } else {\n                audioRef.current.play();\n            }\n        }\n        setIsPlaying(!isPlaying);\n    };\n    const handleSeek = (event)=>{\n        if (audioRef.current) {\n            audioRef.current.currentTime = audioRef.current.duration / 100 * Number(event.target.value);\n            setProgress(Number(event.target.value));\n        }\n    };\n    const handleDelete = ()=>{\n        fetch(\"/api/delete-music\", {\n            method: \"DELETE\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                id: music.id\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            console.log(data);\n            if (data.message === \"ok\") {\n            // handle successful deletion here, e.g., remove item from state\n            }\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const audio = audioRef.current;\n        if (!audio) return;\n        const handleTimeUpdate = ()=>{\n            setProgress(audio.currentTime / audio.duration * 100);\n        };\n        audio.addEventListener(\"timeupdate\", handleTimeUpdate);\n        return ()=>{\n            audio.removeEventListener(\"timeupdate\", handleTimeUpdate);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-auto w-auto bg-pink-500 rounded-xl p-2 m-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"uppercase tracking-wide text-sm text-indigo-500 font-semibold\",\n                            children: \"Music Player\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"block mt-1 text-lg leading-tight font-medium text-black hover:underline\",\n                            children: [\n                                music.title,\n                                \" - \",\n                                music.artist\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center mt-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 mx-1\",\n                                onClick: handlePlayPause,\n                                children: isPlaying ? \"❚❚\" : \"▶\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"range\",\n                            min: \"0\",\n                            max: \"100\",\n                            value: progress,\n                            onChange: handleSeek,\n                            className: \"w-full h-2 bg-pink-200 rounded-full mt-4 cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                            ref: audioRef,\n                            src: music.url\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center mt-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-red-500 hover:bg-red-600 text-white rounded-full p-2 mx-1\",\n                                onClick: handleDelete,\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n            lineNumber: 71,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_s(MusicPlayer, \"vpdHXqpJlYNkYvlYAL2AcFBod84=\");\n_c = MusicPlayer;\nvar _c;\n$RefreshReg$(_c, \"MusicPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRHluYW1pY011c2ljUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFb0Q7QUFHckMsU0FBU0csWUFBWUMsS0FBWTs7SUFDNUMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNUyxXQUFXUiw2Q0FBTUEsQ0FBbUI7SUFFMUMsTUFBTVMsa0JBQWtCO1FBQ3BCLElBQUlELFNBQVNFLE9BQU8sRUFBRTtZQUNsQixJQUFJTixXQUFXO2dCQUNYSSxTQUFTRSxPQUFPLENBQUNDLEtBQUs7WUFDMUIsT0FBTztnQkFDSEgsU0FBU0UsT0FBTyxDQUFDRSxJQUFJO1lBQ3pCO1FBQ0o7UUFDQVAsYUFBYSxDQUFDRDtJQUNsQjtJQUVBLE1BQU1TLGFBQWEsQ0FBQ0M7UUFDaEIsSUFBSU4sU0FBU0UsT0FBTyxFQUFFO1lBQ2xCRixTQUFTRSxPQUFPLENBQUNLLFdBQVcsR0FBRyxTQUFVTCxPQUFPLENBQUNNLFFBQVEsR0FBRyxNQUFPQyxPQUFPSCxNQUFNSSxNQUFNLENBQUNDLEtBQUs7WUFDNUZaLFlBQVlVLE9BQU9ILE1BQU1JLE1BQU0sQ0FBQ0MsS0FBSztRQUN6QztJQUNKO0lBR0EsTUFBTUMsZUFBZTtRQUNqQkMsTUFBTSxxQkFBcUI7WUFDdkJDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQkMsSUFBSXhCLE1BQU13QixFQUFFO1lBQ2hCO1FBQ0osR0FDS0MsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBO1lBQ0ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixJQUFJQSxLQUFLRyxPQUFPLEtBQUssTUFBTTtZQUN2QixnRUFBZ0U7WUFDcEU7UUFDSixHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7WUFDSkosUUFBUUksS0FBSyxDQUFDLFVBQVVBO1FBQzVCO0lBQ1I7SUFJQW5DLGdEQUFTQSxDQUFDO1FBQ04sTUFBTW9DLFFBQVE3QixTQUFTRSxPQUFPO1FBQzlCLElBQUksQ0FBQzJCLE9BQU87UUFFWixNQUFNQyxtQkFBbUI7WUFDckIvQixZQUFZLE1BQU9RLFdBQVcsR0FBR3NCLE1BQU1yQixRQUFRLEdBQUk7UUFDdkQ7UUFFQXFCLE1BQU1FLGdCQUFnQixDQUFDLGNBQWNEO1FBRXJDLE9BQU87WUFDSEQsTUFBTUcsbUJBQW1CLENBQUMsY0FBY0Y7UUFDNUM7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDbkIsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUFnRTs7Ozs7O3NDQUcvRSw4REFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUNWdkMsTUFBTXdDLEtBQUs7Z0NBQUM7Z0NBQUl4QyxNQUFNeUMsTUFBTTs7Ozs7OztzQ0FFakMsOERBQUNIOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDRztnQ0FDR0gsV0FBVTtnQ0FDVkksU0FBU3JDOzBDQUVSTCxZQUFZLE9BQU87Ozs7Ozs7Ozs7O3NDQUc1Qiw4REFBQzJDOzRCQUNHQyxNQUFLOzRCQUNMQyxLQUFJOzRCQUNKQyxLQUFJOzRCQUNKL0IsT0FBT2I7NEJBQ1A2QyxVQUFVdEM7NEJBQ1Y2QixXQUFVOzs7Ozs7c0NBRWQsOERBQUNMOzRCQUFNZSxLQUFLNUM7NEJBQVU2QyxLQUFLbEQsTUFBTW1ELEdBQUc7Ozs7OztzQ0FDcEMsOERBQUNiOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDRztnQ0FDR0gsV0FBVTtnQ0FDVkksU0FBUzFCOzBDQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdyQjtHQTFHd0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0R5bmFtaWNNdXNpY1BsYXllci50c3g/MWJkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNdXNpYyB9IGZyb20gJ0AvbGliL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE11c2ljUGxheWVyKG11c2ljOiBNdXNpYykge1xyXG4gICAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQbGF5UGF1c2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1ZGlvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGlzUGxheWluZykge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWVrID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGlmIChhdWRpb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSAoYXVkaW9SZWYuY3VycmVudC5kdXJhdGlvbiAvIDEwMCkgKiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3MoTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaCgnL2FwaS9kZWxldGUtbXVzaWMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGlkOiBtdXNpYy5pZCwgLy8gcmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgaWQgb3IgZGF0YSB5b3UgbmVlZCB0byBzZW5kXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgc3VjY2Vzc2Z1bCBkZWxldGlvbiBoZXJlLCBlLmcuLCByZW1vdmUgaXRlbSBmcm9tIHN0YXRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IGF1ZGlvUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKCFhdWRpbykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVUaW1lVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzcygoYXVkaW8uY3VycmVudFRpbWUgLyBhdWRpby5kdXJhdGlvbikgKiAxMDApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBoYW5kbGVUaW1lVXBkYXRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgYXVkaW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIGhhbmRsZVRpbWVVcGRhdGUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1hdXRvIHctYXV0byBiZy1waW5rLTUwMCByb3VuZGVkLXhsIHAtMiBtLTJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbXgtYXV0byBiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gbWQ6bWF4LXctMnhsIG0tNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNtIHRleHQtaW5kaWdvLTUwMCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTXVzaWMgUGxheWVyXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMSB0ZXh0LWxnIGxlYWRpbmctdGlnaHQgZm9udC1tZWRpdW0gdGV4dC1ibGFjayBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bXVzaWMudGl0bGV9IC0ge211c2ljLmFydGlzdH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcGluay01MDAgaG92ZXI6YmctcGluay02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgcC0yIG14LTFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUGxheVBhdXNlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzUGxheWluZyA/ICfinZrinZonIDogJ+KWtid9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTAwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2dyZXNzfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2Vla30gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMiBiZy1waW5rLTIwMCByb3VuZGVkLWZ1bGwgbXQtNCBjdXJzb3ItcG9pbnRlclwiIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBzcmM9e211c2ljLnVybH0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBwLTIgbXgtMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJNdXNpY1BsYXllciIsIm11c2ljIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsImF1ZGlvUmVmIiwiaGFuZGxlUGxheVBhdXNlIiwiY3VycmVudCIsInBhdXNlIiwicGxheSIsImhhbmRsZVNlZWsiLCJldmVudCIsImN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZURlbGV0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnJvciIsImF1ZGlvIiwiaGFuZGxlVGltZVVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJhcnRpc3QiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwibWluIiwibWF4Iiwib25DaGFuZ2UiLCJyZWYiLCJzcmMiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DynamicMusicPlayer.tsx\n"));

/***/ })

});