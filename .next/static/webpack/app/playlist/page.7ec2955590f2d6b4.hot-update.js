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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MusicPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction MusicPlayer(music) {\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handlePlayPause = ()=>{\n        if (audioRef.current) {\n            if (isPlaying) {\n                audioRef.current.pause();\n            } else {\n                audioRef.current.play();\n            }\n        }\n        setIsPlaying(!isPlaying);\n    };\n    const handleSeek = (event)=>{\n        if (audioRef.current) {\n            audioRef.current.currentTime = audioRef.current.duration / 100 * Number(event.target.value);\n            setProgress(Number(event.target.value));\n        }\n    };\n    const handleDelete = ()=>{\n        fetch(\"/api/delete-music\", {\n            method: \"DELETE\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                id: music.id\n            })\n        }).then((response)=>{\n            const contentType = response.headers.get(\"content-type\");\n            if (contentType && contentType.indexOf(\"application/json\") !== -1) {\n                return response.json().then((data)=>{\n                    if (data === \"ok\") {\n                        alert(\"done\");\n                        window.location.href = \"/playlist\";\n                    }\n                });\n            } else {\n                return response.text().then((text)=>{\n                    if (text === \"ok\") {\n                        alert(\"done\");\n                        window.location.href = \"/playlist\";\n                    }\n                });\n            }\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const audio = audioRef.current;\n        if (!audio) return;\n        const handleTimeUpdate = ()=>{\n            setProgress(audio.currentTime / audio.duration * 100);\n        };\n        audio.addEventListener(\"timeupdate\", handleTimeUpdate);\n        return ()=>{\n            audio.removeEventListener(\"timeupdate\", handleTimeUpdate);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center h-64 w-64 bg-pink-500 rounded-xl p-2 m-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"music-image\",\n                        style: {\n                            backgroundImage: \"url(./mocking-bird.jpg)\",\n                            height: \"200px\",\n                            backgroundSize: \"cover\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"uppercase tracking-wide text-sm text-indigo-500 font-semibold\",\n                                children: \"Music Player\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"block mt-1 text-lg leading-tight font-medium text-black hover:underline\",\n                                children: [\n                                    music.title,\n                                    \" - \",\n                                    music.artist\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 mx-1\",\n                                    onClick: handlePlayPause,\n                                    children: isPlaying ? \"❚❚\" : \"▶\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                min: \"0\",\n                                max: \"100\",\n                                value: progress,\n                                onChange: handleSeek,\n                                className: \"w-full h-2 bg-pink-200 rounded-full mt-4 cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioRef,\n                                src: music.url\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-red-500 hover:bg-red-600 text-white rounded-full p-2 mx-1\",\n                                    onClick: handleDelete,\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n            lineNumber: 81,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, this);\n}\n_s(MusicPlayer, \"vpdHXqpJlYNkYvlYAL2AcFBod84=\");\n_c = MusicPlayer;\nvar _c;\n$RefreshReg$(_c, \"MusicPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRHluYW1pY011c2ljUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFb0Q7QUFHckMsU0FBU0csWUFBWUMsS0FBWTs7SUFDNUMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNUyxXQUFXUiw2Q0FBTUEsQ0FBbUI7SUFFMUMsTUFBTVMsa0JBQWtCO1FBQ3BCLElBQUlELFNBQVNFLE9BQU8sRUFBRTtZQUNsQixJQUFJTixXQUFXO2dCQUNYSSxTQUFTRSxPQUFPLENBQUNDLEtBQUs7WUFDMUIsT0FBTztnQkFDSEgsU0FBU0UsT0FBTyxDQUFDRSxJQUFJO1lBQ3pCO1FBQ0o7UUFDQVAsYUFBYSxDQUFDRDtJQUNsQjtJQUVBLE1BQU1TLGFBQWEsQ0FBQ0M7UUFDaEIsSUFBSU4sU0FBU0UsT0FBTyxFQUFFO1lBQ2xCRixTQUFTRSxPQUFPLENBQUNLLFdBQVcsR0FBRyxTQUFVTCxPQUFPLENBQUNNLFFBQVEsR0FBRyxNQUFPQyxPQUFPSCxNQUFNSSxNQUFNLENBQUNDLEtBQUs7WUFDNUZaLFlBQVlVLE9BQU9ILE1BQU1JLE1BQU0sQ0FBQ0MsS0FBSztRQUN6QztJQUNKO0lBR0EsTUFBTUMsZUFBZTtRQUNqQkMsTUFBTSxxQkFBcUI7WUFDdkJDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQkMsSUFBSXhCLE1BQU13QixFQUFFO1lBQ2hCO1FBQ0osR0FDS0MsSUFBSSxDQUFDQyxDQUFBQTtZQUNGLE1BQU1DLGNBQWNELFNBQVNOLE9BQU8sQ0FBQ1EsR0FBRyxDQUFDO1lBQ3pDLElBQUlELGVBQWVBLFlBQVlFLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHO2dCQUMvRCxPQUFPSCxTQUFTSSxJQUFJLEdBQUdMLElBQUksQ0FBQ00sQ0FBQUE7b0JBQ3hCLElBQUlBLFNBQVMsTUFBTTt3QkFDZkMsTUFBTTt3QkFDTkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7b0JBQzNCO2dCQUNKO1lBQ0osT0FBTztnQkFDSCxPQUFPVCxTQUFTVSxJQUFJLEdBQUdYLElBQUksQ0FBQ1csQ0FBQUE7b0JBQ3hCLElBQUlBLFNBQVMsTUFBTTt3QkFDZkosTUFBTTt3QkFDTkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7b0JBQzNCO2dCQUNKO1lBQ0o7UUFDSixHQUNDRSxLQUFLLENBQUMsQ0FBQ0M7WUFDSkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBO1FBQzVCO0lBQ1I7SUFHQXhDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTTBDLFFBQVFuQyxTQUFTRSxPQUFPO1FBQzlCLElBQUksQ0FBQ2lDLE9BQU87UUFFWixNQUFNQyxtQkFBbUI7WUFDckJyQyxZQUFZLE1BQU9RLFdBQVcsR0FBRzRCLE1BQU0zQixRQUFRLEdBQUk7UUFDdkQ7UUFFQTJCLE1BQU1FLGdCQUFnQixDQUFDLGNBQWNEO1FBRXJDLE9BQU87WUFDSEQsTUFBTUcsbUJBQW1CLENBQUMsY0FBY0Y7UUFDNUM7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDbkIsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7d0JBQWNDLE9BQU87NEJBQUNDLGlCQUFpQjs0QkFBMkJDLFFBQVE7NEJBQVNDLGdCQUFnQjt3QkFBTzs7Ozs7O2tDQUN6SCw4REFBQ0w7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBZ0U7Ozs7OzswQ0FDL0UsOERBQUNEO2dDQUFJQyxXQUFVOztvQ0FBMkU3QyxNQUFNa0QsS0FBSztvQ0FBQztvQ0FBSWxELE1BQU1tRCxNQUFNOzs7Ozs7OzBDQUN0SCw4REFBQ1A7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNPO29DQUFPUCxXQUFVO29DQUFpRVEsU0FBUy9DOzhDQUN2RkwsWUFBWSxPQUFPOzs7Ozs7Ozs7OzswQ0FHNUIsOERBQUNxRDtnQ0FBTUMsTUFBSztnQ0FBUUMsS0FBSTtnQ0FBSUMsS0FBSTtnQ0FBTXpDLE9BQU9iO2dDQUFVdUQsVUFBVWhEO2dDQUFZbUMsV0FBVTs7Ozs7OzBDQUN2Riw4REFBQ0w7Z0NBQU1tQixLQUFLdEQ7Z0NBQVV1RCxLQUFLNUQsTUFBTTZELEdBQUc7Ozs7OzswQ0FDcEMsOERBQUNqQjtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ087b0NBQ0dQLFdBQVU7b0NBQ1ZRLFNBQVNwQzs4Q0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3JCO0dBdkd3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRHluYW1pY011c2ljUGxheWVyLnRzeD8xYmQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE11c2ljIH0gZnJvbSAnQC9saWIvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXVzaWNQbGF5ZXIobXVzaWM6IE11c2ljKSB7XHJcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBsYXlQYXVzZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYXVkaW9SZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBpZiAoaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlZWsgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgaWYgKGF1ZGlvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IChhdWRpb1JlZi5jdXJyZW50LmR1cmF0aW9uIC8gMTAwKSAqIE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzcyhOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCcvYXBpL2RlbGV0ZS1tdXNpYycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IG11c2ljLmlkLCAvLyByZXBsYWNlIHdpdGggdGhlIGFjdHVhbCBpZCBvciBkYXRhIHlvdSBuZWVkIHRvIHNlbmRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdkb25lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcGxheWxpc3RcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0ID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnZG9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3BsYXlsaXN0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXVkaW8gPSBhdWRpb1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGlmICghYXVkaW8pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlVGltZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3MoKGF1ZGlvLmN1cnJlbnRUaW1lIC8gYXVkaW8uZHVyYXRpb24pICogMTAwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgaGFuZGxlVGltZVVwZGF0ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGF1ZGlvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBoYW5kbGVUaW1lVXBkYXRlKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTY0IHctNjQgYmctcGluay01MDAgcm91bmRlZC14bCBwLTIgbS0zXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbWQgb3ZlcmZsb3ctaGlkZGVuIG1kOm1heC13LTJ4bCBtLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdXNpYy1pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiAndXJsKC4vbW9ja2luZy1iaXJkLmpwZyknLCBoZWlnaHQ6ICcyMDBweCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc20gdGV4dC1pbmRpZ28tNTAwIGZvbnQtc2VtaWJvbGRcIj5NdXNpYyBQbGF5ZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMSB0ZXh0LWxnIGxlYWRpbmctdGlnaHQgZm9udC1tZWRpdW0gdGV4dC1ibGFjayBob3Zlcjp1bmRlcmxpbmVcIj57bXVzaWMudGl0bGV9IC0ge211c2ljLmFydGlzdH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcGluay01MDAgaG92ZXI6YmctcGluay02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgcC0yIG14LTFcIiBvbkNsaWNrPXtoYW5kbGVQbGF5UGF1c2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNQbGF5aW5nID8gJ+KdmuKdmicgOiAn4pa2J31cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17cHJvZ3Jlc3N9IG9uQ2hhbmdlPXtoYW5kbGVTZWVrfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yIGJnLXBpbmstMjAwIHJvdW5kZWQtZnVsbCBtdC00IGN1cnNvci1wb2ludGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBzcmM9e211c2ljLnVybH0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNjAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHAtMiBteC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiTXVzaWNQbGF5ZXIiLCJtdXNpYyIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJhdWRpb1JlZiIsImhhbmRsZVBsYXlQYXVzZSIsImN1cnJlbnQiLCJwYXVzZSIsInBsYXkiLCJoYW5kbGVTZWVrIiwiZXZlbnQiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEZWxldGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwidGhlbiIsInJlc3BvbnNlIiwiY29udGVudFR5cGUiLCJnZXQiLCJpbmRleE9mIiwianNvbiIsImRhdGEiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRleHQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImF1ZGlvIiwiaGFuZGxlVGltZVVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsInRpdGxlIiwiYXJ0aXN0IiwiYnV0dG9uIiwib25DbGljayIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsIm9uQ2hhbmdlIiwicmVmIiwic3JjIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DynamicMusicPlayer.tsx\n"));

/***/ })

});