"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/add-music/page",{

/***/ "(app-pages-browser)/./app/add-music/page.tsx":
/*!********************************!*\
  !*** ./app/add-music/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"(app-pages-browser)/./app/add-music/actions.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst AddMusicPage = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [artist, setArtist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleSubmit = async (e)=>{\n        var _signedURLResult_success;\n        e.preventDefault();\n        const signedURLResult = await (0,_actions__WEBPACK_IMPORTED_MODULE_3__.getSignedURL)();\n        if (signedURLResult.failure !== undefined) {\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.redirect)(\"/api/auth/signin?callbackUrl=/add-music\");\n        }\n        const url = (_signedURLResult_success = signedURLResult.success) === null || _signedURLResult_success === void 0 ? void 0 : _signedURLResult_success.url;\n        console.log(signedURLResult);\n        if (!title) {\n            alert(\"Enter Title of music\");\n            return;\n        }\n        if (!artist) {\n            alert(\"Enter Artist\");\n            return;\n        }\n        if (file) {\n            if (![\n                \"audio/mpeg\",\n                \"audio/wav\",\n                \"audio/ogg\"\n            ].includes(file.type)) {\n                alert(\"Invalid file type. Please select an audio file.\");\n                return;\n            }\n            if (file.size > 20 * 1024 * 1024) {\n                alert(\"File size exceeds 20MB\");\n                return;\n            }\n        } else {\n            alert(\"No file selected. Please choose an audio file to proceed.\");\n            return;\n        }\n        const res = await fetch(\"/api/add-music\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: \"\"\n        }).then((response)=>{\n            const contentType = response.headers.get(\"content-type\");\n            if (contentType && contentType.indexOf(\"application/json\") !== -1) {\n                return response.json().then((data)=>{\n                    if (data === \"ok\") {\n                        alert(\"done\");\n                        setTitle(\"\");\n                        setArtist(\"\");\n                        setFile(\"\");\n                        window.location.href = \"/playlist\";\n                    }\n                });\n            } else {\n                return response.text().then((text)=>{\n                    if (text === \"ok\") {\n                        alert(\"done\");\n                        setTitle(\"\");\n                        setArtist(\"\");\n                        setFile(\"\");\n                        window.location.href = \"/playlist\";\n                    }\n                });\n            }\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        });\n        const { data } = await res.json();\n        alert({\n            data\n        });\n        if (data === \"ok\") {\n            setTitle(\"\");\n            setArtist(\"\");\n            setFile(\"\");\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.redirect)(\"/playlist\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center h-auto bg-gray-200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-gray-700 text-sm font-bold mb-2\",\n                            htmlFor: \"title\",\n                            children: \"Music Title\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            required: true,\n                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                            id: \"title\",\n                            type: \"text\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-gray-700 text-sm font-bold mb-2\",\n                            htmlFor: \"artist\",\n                            children: \"Artist\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            required: true,\n                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                            id: \"artist\",\n                            type: \"text\",\n                            value: artist,\n                            onChange: (e)=>setArtist(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-gray-700 text-sm font-bold mb-2\",\n                            htmlFor: \"file\",\n                            children: \"Music File\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                            id: \"file\",\n                            type: \"file\",\n                            onChange: (e)=>{\n                                var _e_target_files;\n                                return e.target.files && setFile((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-light text-slate-500\",\n                            children: \"Please ensure that the selected audio file is no larger than 20MB.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                        type: \"submit\",\n                        children: \"Add Music\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n            lineNumber: 93,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AddMusicPage, \"CsqzYcXZU547qSyN5gx1aKTVpYg=\");\n_c = AddMusicPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddMusicPage);\nvar _c;\n$RefreshReg$(_c, \"AddMusicPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZGQtbXVzaWMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTBDO0FBQ1Y7QUFDTTtBQUV0QyxNQUFNRyxlQUFlOztJQUNqQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBYztJQUU5QyxNQUFNUyxlQUFlLE9BQU9DO1lBT1pDO1FBTlpELEVBQUVFLGNBQWM7UUFFaEIsTUFBTUQsa0JBQWtCLE1BQU1WLHNEQUFZQTtRQUMxQyxJQUFHVSxnQkFBZ0JFLE9BQU8sS0FBS0MsV0FBVTtZQUNyQ2YseURBQVFBLENBQUM7UUFDYjtRQUNBLE1BQU1nQixPQUFNSiwyQkFBQUEsZ0JBQWdCSyxPQUFPLGNBQXZCTCwrQ0FBQUEseUJBQXlCSSxHQUFHO1FBQ3hDRSxRQUFRQyxHQUFHLENBQUNQO1FBRVosSUFBRyxDQUFDUixPQUFNO1lBQ05nQixNQUFNO1lBQ0Y7UUFDUjtRQUVBLElBQUcsQ0FBQ2QsUUFBTztZQUNQYyxNQUFNO1lBQ0Y7UUFDUjtRQUVBLElBQUlaLE1BQU07WUFDTixJQUFJLENBQUM7Z0JBQUM7Z0JBQWM7Z0JBQWE7YUFBWSxDQUFDYSxRQUFRLENBQUNiLEtBQUtjLElBQUksR0FBRztnQkFDL0RGLE1BQU07Z0JBQ047WUFDSjtZQUNBLElBQUlaLEtBQUtlLElBQUksR0FBRyxLQUFLLE9BQU8sTUFBTTtnQkFDOUJILE1BQU07Z0JBQ047WUFDSjtRQUNKLE9BQU87WUFDSEEsTUFBTTtZQUNOO1FBQ0o7UUFFQSxNQUFNSSxNQUFNLE1BQU1DLE1BQU0sa0JBQWtCO1lBQ3RDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU07UUFFVixHQUFHQyxJQUFJLENBQUNDLENBQUFBO1lBQ0osTUFBTUMsY0FBY0QsU0FBU0gsT0FBTyxDQUFDSyxHQUFHLENBQUM7WUFDekMsSUFBSUQsZUFBZUEsWUFBWUUsT0FBTyxDQUFDLHdCQUF3QixDQUFDLEdBQUc7Z0JBQy9ELE9BQU9ILFNBQVNJLElBQUksR0FBR0wsSUFBSSxDQUFDTSxDQUFBQTtvQkFDeEIsSUFBSUEsU0FBUyxNQUFNO3dCQUNmZixNQUFNO3dCQUNOZixTQUFTO3dCQUNURSxVQUFVO3dCQUNWRSxRQUFRO3dCQUNSMkIsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7b0JBQzNCO2dCQUNKO1lBQ0osT0FBTztnQkFDSCxPQUFPUixTQUFTUyxJQUFJLEdBQUdWLElBQUksQ0FBQ1UsQ0FBQUE7b0JBQ3hCLElBQUlBLFNBQVMsTUFBTTt3QkFDZm5CLE1BQU07d0JBQ05mLFNBQVM7d0JBQ1RFLFVBQVU7d0JBQ1ZFLFFBQVE7d0JBQ1IyQixPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztvQkFDM0I7Z0JBQ0o7WUFDSjtRQUNKLEdBQ0tFLEtBQUssQ0FBQyxDQUFDQztZQUNKdkIsUUFBUXVCLEtBQUssQ0FBQyxVQUFVQTtRQUM1QjtRQUVKLE1BQU0sRUFBRU4sSUFBSSxFQUFFLEdBQUcsTUFBTVgsSUFBSVUsSUFBSTtRQUMvQmQsTUFBTTtZQUFFZTtRQUFLO1FBQ2IsSUFBSUEsU0FBUyxNQUFNO1lBQ2Y5QixTQUFTO1lBQ1RFLFVBQVU7WUFDVkUsUUFBUTtZQUNSVCx5REFBUUEsQ0FBQztRQUNiO0lBQ0o7SUFFQSxxQkFDSSw4REFBQzBDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQUtDLFVBQVVuQztZQUFjaUMsV0FBVTs7OEJBQ3BDLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNHOzRCQUFNSCxXQUFVOzRCQUE2Q0ksU0FBUTtzQ0FBUTs7Ozs7O3NDQUc5RSw4REFBQ0M7NEJBQU1DLFFBQVE7NEJBQUNOLFdBQVU7NEJBQTZITyxJQUFHOzRCQUFRNUIsTUFBSzs0QkFBTzZCLE9BQU8vQzs0QkFBT2dELFVBQVUsQ0FBQ3pDLElBQU1OLFNBQVNNLEVBQUUwQyxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFFeE8sOERBQUNUO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0c7NEJBQU1ILFdBQVU7NEJBQTZDSSxTQUFRO3NDQUFTOzs7Ozs7c0NBRy9FLDhEQUFDQzs0QkFBTUMsUUFBUTs0QkFBQ04sV0FBVTs0QkFBNkhPLElBQUc7NEJBQVM1QixNQUFLOzRCQUFPNkIsT0FBTzdDOzRCQUFROEMsVUFBVSxDQUFDekMsSUFBTUosVUFBVUksRUFBRTBDLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzhCQUUzTyw4REFBQ1Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRzs0QkFBTUgsV0FBVTs0QkFBNkNJLFNBQVE7c0NBQU87Ozs7OztzQ0FHN0UsOERBQUNDOzRCQUFNTCxXQUFVOzRCQUNiTyxJQUFHOzRCQUNINUIsTUFBSzs0QkFDTDhCLFVBQVUsQ0FBQ3pDO29DQUFnQ0E7dUNBQTFCQSxFQUFFMEMsTUFBTSxDQUFDQyxLQUFLLElBQUk3QyxTQUFRRSxrQkFBQUEsRUFBRTBDLE1BQU0sQ0FBQ0MsS0FBSyxjQUFkM0Msc0NBQUFBLGVBQWdCLENBQUMsRUFBRTs7Ozs7OztzQ0FDbEUsOERBQUM0Qzs0QkFBS1osV0FBVTtzQ0FBNEI7Ozs7Ozs7Ozs7Ozs4QkFFaEQsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDYTt3QkFBT2IsV0FBVTt3QkFBK0dyQixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25LO0dBckhNbkI7S0FBQUE7QUF1SE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FkZC1tdXNpYy9wYWdlLnRzeD83YmI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2dldFNpZ25lZFVSTH0gZnJvbSBcIi4vYWN0aW9uc1wiXHJcblxyXG5jb25zdCBBZGRNdXNpY1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFthcnRpc3QsIHNldEFydGlzdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBzaWduZWRVUkxSZXN1bHQgPSBhd2FpdCBnZXRTaWduZWRVUkwoKTtcclxuICAgICAgICBpZihzaWduZWRVUkxSZXN1bHQuZmFpbHVyZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmVkaXJlY3QoXCIvYXBpL2F1dGgvc2lnbmluP2NhbGxiYWNrVXJsPS9hZGQtbXVzaWNcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXJsID0gc2lnbmVkVVJMUmVzdWx0LnN1Y2Nlc3M/LnVybDtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaWduZWRVUkxSZXN1bHQpOyBcclxuXHJcbiAgICAgICAgaWYoIXRpdGxlKXtcclxuICAgICAgICAgICAgYWxlcnQoJ0VudGVyIFRpdGxlIG9mIG11c2ljJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighYXJ0aXN0KXtcclxuICAgICAgICAgICAgYWxlcnQoJ0VudGVyIEFydGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgaWYgKCFbJ2F1ZGlvL21wZWcnLCAnYXVkaW8vd2F2JywgJ2F1ZGlvL29nZyddLmluY2x1ZGVzKGZpbGUudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIGZpbGUgdHlwZS4gUGxlYXNlIHNlbGVjdCBhbiBhdWRpbyBmaWxlLicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWxlLnNpemUgPiAyMCAqIDEwMjQgKiAxMDI0KSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnRmlsZSBzaXplIGV4Y2VlZHMgMjBNQicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ05vIGZpbGUgc2VsZWN0ZWQuIFBsZWFzZSBjaG9vc2UgYW4gYXVkaW8gZmlsZSB0byBwcm9jZWVkLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9hZGQtbXVzaWMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBcIlwiLFxyXG5cclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2RvbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFydGlzdCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbGUoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3BsYXlsaXN0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2RvbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFydGlzdCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbGUoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3BsYXlsaXN0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgYWxlcnQoeyBkYXRhIH0pO1xyXG4gICAgICAgIGlmIChkYXRhID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgIHNldFRpdGxlKCcnKTtcclxuICAgICAgICAgICAgc2V0QXJ0aXN0KCcnKTtcclxuICAgICAgICAgICAgc2V0RmlsZSgnJyk7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0KFwiL3BsYXlsaXN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtYXV0byBiZy1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQgcHgtOCBwdC02IHBiLTggbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNdXNpYyBUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJhcnRpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJ0aXN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIiBpZD1cImFydGlzdFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2FydGlzdH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRBcnRpc3QoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTXVzaWMgRmlsZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGUudGFyZ2V0LmZpbGVzICYmIHNldEZpbGUoZS50YXJnZXQuZmlsZXM/LlswXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LXNsYXRlLTUwMFwiPlBsZWFzZSBlbnN1cmUgdGhhdCB0aGUgc2VsZWN0ZWQgYXVkaW8gZmlsZSBpcyBubyBsYXJnZXIgdGhhbiAyME1CLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIE11c2ljXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTXVzaWNQYWdlO1xyXG4iXSwibmFtZXMiOlsicmVkaXJlY3QiLCJ1c2VTdGF0ZSIsImdldFNpZ25lZFVSTCIsIkFkZE11c2ljUGFnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJhcnRpc3QiLCJzZXRBcnRpc3QiLCJmaWxlIiwic2V0RmlsZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJzaWduZWRVUkxSZXN1bHQiLCJwcmV2ZW50RGVmYXVsdCIsImZhaWx1cmUiLCJ1bmRlZmluZWQiLCJ1cmwiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiaW5jbHVkZXMiLCJ0eXBlIiwic2l6ZSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb250ZW50VHlwZSIsImdldCIsImluZGV4T2YiLCJqc29uIiwiZGF0YSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRleHQiLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJyZXF1aXJlZCIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwic3BhbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/add-music/page.tsx\n"));

/***/ })

});