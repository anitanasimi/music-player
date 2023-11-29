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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MusicPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction MusicPlayer(music) {\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handlePlayPause = ()=>{\n        if (audioRef.current) {\n            if (isPlaying) {\n                audioRef.current.pause();\n            } else {\n                audioRef.current.play();\n            }\n        }\n        setIsPlaying(!isPlaying);\n    };\n    const handleSeek = (event)=>{\n        if (audioRef.current) {\n            audioRef.current.currentTime = audioRef.current.duration / 100 * Number(event.target.value);\n            setProgress(Number(event.target.value));\n        }\n    };\n    const handleDelete = ()=>{\n        fetch(\"/api/delete-music\", {\n            method: \"DELETE\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                id: music.id\n            })\n        }).then((response)=>{\n            const contentType = response.headers.get(\"content-type\");\n            if (contentType && contentType.indexOf(\"application/json\") !== -1) {\n                return response.json().then((data)=>{\n                    if (data === \"ok\") {\n                        alert(\"done\");\n                        window.location.href = \"/playlist\";\n                    }\n                });\n            } else {\n                return response.text().then((text)=>{\n                    if (text === \"ok\") {\n                        alert(\"done\");\n                        window.location.href = \"/playlist\";\n                    }\n                });\n            }\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const audio = audioRef.current;\n        if (!audio) return;\n        const handleTimeUpdate = ()=>{\n            setProgress(audio.currentTime / audio.duration * 100);\n        };\n        audio.addEventListener(\"timeupdate\", handleTimeUpdate);\n        return ()=>{\n            audio.removeEventListener(\"timeupdate\", handleTimeUpdate);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center h-screen w-screen bg-pink-500 p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full\",\n                src: \"./mocking-bird.jpg\",\n                alt: \"Music Logo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"uppercase tracking-wide text-sm text-indigo-500 font-semibold\",\n                                children: \"Music Player\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"block mt-1 text-lg leading-tight font-medium text-black hover:underline\",\n                                children: [\n                                    music.title,\n                                    \" - \",\n                                    music.artist\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 mx-1\",\n                                    onClick: handlePlayPause,\n                                    children: isPlaying ? \"❚❚\" : \"▶\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                min: \"0\",\n                                max: \"100\",\n                                value: progress,\n                                onChange: handleSeek,\n                                className: \"w-full h-2 bg-pink-200 rounded-full mt-4 cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioRef,\n                                src: music.url\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-red-500 hover:bg-red-600 text-white rounded-full p-2 mx-1\",\n                                    onClick: handleDelete,\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\components\\\\DynamicMusicPlayer.tsx\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, this);\n}\n_s(MusicPlayer, \"vpdHXqpJlYNkYvlYAL2AcFBod84=\");\n_c = MusicPlayer;\nvar _c;\n$RefreshReg$(_c, \"MusicPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRHluYW1pY011c2ljUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFb0Q7QUFHckMsU0FBU0csWUFBWUMsS0FBWTs7SUFDNUMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNUyxXQUFXUiw2Q0FBTUEsQ0FBbUI7SUFFMUMsTUFBTVMsa0JBQWtCO1FBQ3BCLElBQUlELFNBQVNFLE9BQU8sRUFBRTtZQUNsQixJQUFJTixXQUFXO2dCQUNYSSxTQUFTRSxPQUFPLENBQUNDLEtBQUs7WUFDMUIsT0FBTztnQkFDSEgsU0FBU0UsT0FBTyxDQUFDRSxJQUFJO1lBQ3pCO1FBQ0o7UUFDQVAsYUFBYSxDQUFDRDtJQUNsQjtJQUVBLE1BQU1TLGFBQWEsQ0FBQ0M7UUFDaEIsSUFBSU4sU0FBU0UsT0FBTyxFQUFFO1lBQ2xCRixTQUFTRSxPQUFPLENBQUNLLFdBQVcsR0FBRyxTQUFVTCxPQUFPLENBQUNNLFFBQVEsR0FBRyxNQUFPQyxPQUFPSCxNQUFNSSxNQUFNLENBQUNDLEtBQUs7WUFDNUZaLFlBQVlVLE9BQU9ILE1BQU1JLE1BQU0sQ0FBQ0MsS0FBSztRQUN6QztJQUNKO0lBR0EsTUFBTUMsZUFBZTtRQUNqQkMsTUFBTSxxQkFBcUI7WUFDdkJDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQkMsSUFBSXhCLE1BQU13QixFQUFFO1lBQ2hCO1FBQ0osR0FDS0MsSUFBSSxDQUFDQyxDQUFBQTtZQUNGLE1BQU1DLGNBQWNELFNBQVNOLE9BQU8sQ0FBQ1EsR0FBRyxDQUFDO1lBQ3pDLElBQUlELGVBQWVBLFlBQVlFLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHO2dCQUMvRCxPQUFPSCxTQUFTSSxJQUFJLEdBQUdMLElBQUksQ0FBQ00sQ0FBQUE7b0JBQ3hCLElBQUlBLFNBQVMsTUFBTTt3QkFDZkMsTUFBTTt3QkFDTkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7b0JBQzNCO2dCQUNKO1lBQ0osT0FBTztnQkFDSCxPQUFPVCxTQUFTVSxJQUFJLEdBQUdYLElBQUksQ0FBQ1csQ0FBQUE7b0JBQ3hCLElBQUlBLFNBQVMsTUFBTTt3QkFDZkosTUFBTTt3QkFDTkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7b0JBQzNCO2dCQUNKO1lBQ0o7UUFDSixHQUNDRSxLQUFLLENBQUMsQ0FBQ0M7WUFDSkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBO1FBQzVCO0lBQ1I7SUFHQXhDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTTBDLFFBQVFuQyxTQUFTRSxPQUFPO1FBQzlCLElBQUksQ0FBQ2lDLE9BQU87UUFFWixNQUFNQyxtQkFBbUI7WUFDckJyQyxZQUFZLE1BQU9RLFdBQVcsR0FBRzRCLE1BQU0zQixRQUFRLEdBQUk7UUFDdkQ7UUFFQTJCLE1BQU1FLGdCQUFnQixDQUFDLGNBQWNEO1FBRXJDLE9BQU87WUFDSEQsTUFBTUcsbUJBQW1CLENBQUMsY0FBY0Y7UUFDNUM7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFJRCxXQUFVO2dCQUFTRSxLQUFJO2dCQUFxQkMsS0FBSTs7Ozs7OzBCQUNyRCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFnRTs7Ozs7OzBDQUMvRSw4REFBQ0Q7Z0NBQUlDLFdBQVU7O29DQUEyRTdDLE1BQU1pRCxLQUFLO29DQUFDO29DQUFJakQsTUFBTWtELE1BQU07Ozs7Ozs7MENBQ3RILDhEQUFDTjtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ007b0NBQU9OLFdBQVU7b0NBQWlFTyxTQUFTOUM7OENBQ3ZGTCxZQUFZLE9BQU87Ozs7Ozs7Ozs7OzBDQUc1Qiw4REFBQ29EO2dDQUFNQyxNQUFLO2dDQUFRQyxLQUFJO2dDQUFJQyxLQUFJO2dDQUFNeEMsT0FBT2I7Z0NBQVVzRCxVQUFVL0M7Z0NBQVltQyxXQUFVOzs7Ozs7MENBQ3ZGLDhEQUFDTDtnQ0FBTWtCLEtBQUtyRDtnQ0FBVTBDLEtBQUsvQyxNQUFNMkQsR0FBRzs7Ozs7OzBDQUNwQyw4REFBQ2Y7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNNO29DQUNHTixXQUFVO29DQUNWTyxTQUFTbkM7OENBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU3QjtHQXRHd0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0R5bmFtaWNNdXNpY1BsYXllci50c3g/MWJkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNdXNpYyB9IGZyb20gJ0AvbGliL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE11c2ljUGxheWVyKG11c2ljOiBNdXNpYykge1xyXG4gICAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQbGF5UGF1c2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1ZGlvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGlzUGxheWluZykge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWVrID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGlmIChhdWRpb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSAoYXVkaW9SZWYuY3VycmVudC5kdXJhdGlvbiAvIDEwMCkgKiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3MoTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaCgnL2FwaS9kZWxldGUtbXVzaWMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGlkOiBtdXNpYy5pZCwgLy8gcmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgaWQgb3IgZGF0YSB5b3UgbmVlZCB0byBzZW5kXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnZG9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3BsYXlsaXN0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dCA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2RvbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wbGF5bGlzdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvID0gYXVkaW9SZWYuY3VycmVudDtcclxuICAgICAgICBpZiAoIWF1ZGlvKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVRpbWVVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzKChhdWRpby5jdXJyZW50VGltZSAvIGF1ZGlvLmR1cmF0aW9uKSAqIDEwMCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIGhhbmRsZVRpbWVVcGRhdGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBhdWRpby5yZW1vdmVFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgaGFuZGxlVGltZVVwZGF0ZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW4gYmctcGluay01MDAgcC01XCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsXCIgc3JjPVwiLi9tb2NraW5nLWJpcmQuanBnXCIgYWx0PVwiTXVzaWMgTG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgbXgtYXV0byBiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gbWQ6bWF4LXctMnhsIG0tNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNtIHRleHQtaW5kaWdvLTUwMCBmb250LXNlbWlib2xkXCI+TXVzaWMgUGxheWVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMSB0ZXh0LWxnIGxlYWRpbmctdGlnaHQgZm9udC1tZWRpdW0gdGV4dC1ibGFjayBob3Zlcjp1bmRlcmxpbmVcIj57bXVzaWMudGl0bGV9IC0ge211c2ljLmFydGlzdH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwIGhvdmVyOmJnLXBpbmstNjAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHAtMiBteC0xXCIgb25DbGljaz17aGFuZGxlUGxheVBhdXNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNQbGF5aW5nID8gJ+KdmuKdmicgOiAn4pa2J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17cHJvZ3Jlc3N9IG9uQ2hhbmdlPXtoYW5kbGVTZWVrfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yIGJnLXBpbmstMjAwIHJvdW5kZWQtZnVsbCBtdC00IGN1cnNvci1wb2ludGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9SZWZ9IHNyYz17bXVzaWMudXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgcC0yIG14LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIk11c2ljUGxheWVyIiwibXVzaWMiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiYXVkaW9SZWYiLCJoYW5kbGVQbGF5UGF1c2UiLCJjdXJyZW50IiwicGF1c2UiLCJwbGF5IiwiaGFuZGxlU2VlayIsImV2ZW50IiwiY3VycmVudFRpbWUiLCJkdXJhdGlvbiIsIk51bWJlciIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRGVsZXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnRlbnRUeXBlIiwiZ2V0IiwiaW5kZXhPZiIsImpzb24iLCJkYXRhIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0ZXh0IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJhdWRpbyIsImhhbmRsZVRpbWVVcGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsInRpdGxlIiwiYXJ0aXN0IiwiYnV0dG9uIiwib25DbGljayIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsIm9uQ2hhbmdlIiwicmVmIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DynamicMusicPlayer.tsx\n"));

/***/ })

});