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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"(app-pages-browser)/./app/add-music/actions.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst AddMusicPage = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [artist, setArtist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleSubmit = async (e)=>{\n        var _signedURLResult_success;\n        e.preventDefault();\n        const signedURLResult = await (0,_actions__WEBPACK_IMPORTED_MODULE_3__.getSignedURL)();\n        if (signedURLResult.failure) {\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.redirect)(\"/api/auth/signin?callbackUrl=/add-music\");\n        }\n        const url = (_signedURLResult_success = signedURLResult.success) === null || _signedURLResult_success === void 0 ? void 0 : _signedURLResult_success.url;\n        console.log(signedURLResult);\n        if (!title) {\n            alert(\"Enter Title of music\");\n            return;\n        }\n        if (!artist) {\n            alert(\"Enter Artist\");\n            return;\n        }\n        if (file) {\n            if (![\n                \"audio/mpeg\",\n                \"audio/wav\",\n                \"audio/ogg\"\n            ].includes(file.type)) {\n                alert(\"Invalid file type. Please select an audio file.\");\n                return;\n            }\n            if (file.size > 20 * 1024 * 1024) {\n                alert(\"File size exceeds 20MB\");\n                return;\n            }\n        } else {\n            alert(\"No file selected. Please choose an audio file to proceed.\");\n            return;\n        }\n        const res = await fetch(\"/api/add-music\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: \"\"\n        }).then((response)=>{\n            const contentType = response.headers.get(\"content-type\");\n            if (contentType && contentType.indexOf(\"application/json\") !== -1) {\n                return response.json().then((data)=>{\n                    if (data === \"ok\") {\n                        alert(\"done\");\n                        setTitle(\"\");\n                        setArtist(\"\");\n                        setFile(\"\");\n                        window.location.href = \"/playlist\";\n                    }\n                });\n            } else {\n                return response.text().then((text)=>{\n                    if (text === \"ok\") {\n                        alert(\"done\");\n                        setTitle(\"\");\n                        setArtist(\"\");\n                        setFile(\"\");\n                        window.location.href = \"/playlist\";\n                    }\n                });\n            }\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        });\n        const { data } = await res.json();\n        alert({\n            data\n        });\n        if (data === \"ok\") {\n            setTitle(\"\");\n            setArtist(\"\");\n            setFile(\"\");\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.redirect)(\"/playlist\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center h-auto bg-gray-200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-gray-700 text-sm font-bold mb-2\",\n                            htmlFor: \"title\",\n                            children: \"Music Title\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            required: true,\n                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                            id: \"title\",\n                            type: \"text\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-gray-700 text-sm font-bold mb-2\",\n                            htmlFor: \"artist\",\n                            children: \"Artist\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            required: true,\n                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                            id: \"artist\",\n                            type: \"text\",\n                            value: artist,\n                            onChange: (e)=>setArtist(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-gray-700 text-sm font-bold mb-2\",\n                            htmlFor: \"file\",\n                            children: \"Music File\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                            id: \"file\",\n                            type: \"file\",\n                            onChange: (e)=>{\n                                var _e_target_files;\n                                return e.target.files && setFile((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-light text-slate-500\",\n                            children: \"Please ensure that the selected audio file is no larger than 20MB.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                        type: \"submit\",\n                        children: \"Add Music\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n            lineNumber: 93,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AddMusicPage, \"CsqzYcXZU547qSyN5gx1aKTVpYg=\");\n_c = AddMusicPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddMusicPage);\nvar _c;\n$RefreshReg$(_c, \"AddMusicPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZGQtbXVzaWMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTBDO0FBQ1Y7QUFDTTtBQUV0QyxNQUFNRyxlQUFlOztJQUNqQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBYztJQUU5QyxNQUFNUyxlQUFlLE9BQU9DO1lBT1pDO1FBTlpELEVBQUVFLGNBQWM7UUFFaEIsTUFBTUQsa0JBQWtCLE1BQU1WLHNEQUFZQTtRQUMxQyxJQUFHVSxnQkFBZ0JFLE9BQU8sRUFBQztZQUN2QmQseURBQVFBLENBQUM7UUFDYjtRQUNBLE1BQU1lLE9BQU1ILDJCQUFBQSxnQkFBZ0JJLE9BQU8sY0FBdkJKLCtDQUFBQSx5QkFBeUJHLEdBQUc7UUFDeENFLFFBQVFDLEdBQUcsQ0FBQ047UUFFWixJQUFHLENBQUNSLE9BQU07WUFDTmUsTUFBTTtZQUNGO1FBQ1I7UUFFQSxJQUFHLENBQUNiLFFBQU87WUFDUGEsTUFBTTtZQUNGO1FBQ1I7UUFFQSxJQUFJWCxNQUFNO1lBQ04sSUFBSSxDQUFDO2dCQUFDO2dCQUFjO2dCQUFhO2FBQVksQ0FBQ1ksUUFBUSxDQUFDWixLQUFLYSxJQUFJLEdBQUc7Z0JBQy9ERixNQUFNO2dCQUNOO1lBQ0o7WUFDQSxJQUFJWCxLQUFLYyxJQUFJLEdBQUcsS0FBSyxPQUFPLE1BQU07Z0JBQzlCSCxNQUFNO2dCQUNOO1lBQ0o7UUFDSixPQUFPO1lBQ0hBLE1BQU07WUFDTjtRQUNKO1FBRUEsTUFBTUksTUFBTSxNQUFNQyxNQUFNLGtCQUFrQjtZQUN0Q0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLGdCQUFnQjtZQUNwQjtZQUNBQyxNQUFNO1FBRVYsR0FBR0MsSUFBSSxDQUFDQyxDQUFBQTtZQUNKLE1BQU1DLGNBQWNELFNBQVNILE9BQU8sQ0FBQ0ssR0FBRyxDQUFDO1lBQ3pDLElBQUlELGVBQWVBLFlBQVlFLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHO2dCQUMvRCxPQUFPSCxTQUFTSSxJQUFJLEdBQUdMLElBQUksQ0FBQ00sQ0FBQUE7b0JBQ3hCLElBQUlBLFNBQVMsTUFBTTt3QkFDZmYsTUFBTTt3QkFDTmQsU0FBUzt3QkFDVEUsVUFBVTt3QkFDVkUsUUFBUTt3QkFDUjBCLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO29CQUMzQjtnQkFDSjtZQUNKLE9BQU87Z0JBQ0gsT0FBT1IsU0FBU1MsSUFBSSxHQUFHVixJQUFJLENBQUNVLENBQUFBO29CQUN4QixJQUFJQSxTQUFTLE1BQU07d0JBQ2ZuQixNQUFNO3dCQUNOZCxTQUFTO3dCQUNURSxVQUFVO3dCQUNWRSxRQUFRO3dCQUNSMEIsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7b0JBQzNCO2dCQUNKO1lBQ0o7UUFDSixHQUNLRSxLQUFLLENBQUMsQ0FBQ0M7WUFDSnZCLFFBQVF1QixLQUFLLENBQUMsVUFBVUE7UUFDNUI7UUFFSixNQUFNLEVBQUVOLElBQUksRUFBRSxHQUFHLE1BQU1YLElBQUlVLElBQUk7UUFDL0JkLE1BQU07WUFBRWU7UUFBSztRQUNiLElBQUlBLFNBQVMsTUFBTTtZQUNmN0IsU0FBUztZQUNURSxVQUFVO1lBQ1ZFLFFBQVE7WUFDUlQseURBQVFBLENBQUM7UUFDYjtJQUNKO0lBRUEscUJBQ0ksOERBQUN5QztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDQztZQUFLQyxVQUFVbEM7WUFBY2dDLFdBQVU7OzhCQUNwQyw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRzs0QkFBTUgsV0FBVTs0QkFBNkNJLFNBQVE7c0NBQVE7Ozs7OztzQ0FHOUUsOERBQUNDOzRCQUFNQyxRQUFROzRCQUFDTixXQUFVOzRCQUE2SE8sSUFBRzs0QkFBUTVCLE1BQUs7NEJBQU82QixPQUFPOUM7NEJBQU8rQyxVQUFVLENBQUN4QyxJQUFNTixTQUFTTSxFQUFFeUMsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7OEJBRXhPLDhEQUFDVDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNHOzRCQUFNSCxXQUFVOzRCQUE2Q0ksU0FBUTtzQ0FBUzs7Ozs7O3NDQUcvRSw4REFBQ0M7NEJBQU1DLFFBQVE7NEJBQUNOLFdBQVU7NEJBQTZITyxJQUFHOzRCQUFTNUIsTUFBSzs0QkFBTzZCLE9BQU81Qzs0QkFBUTZDLFVBQVUsQ0FBQ3hDLElBQU1KLFVBQVVJLEVBQUV5QyxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFFM08sOERBQUNUO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0c7NEJBQU1ILFdBQVU7NEJBQTZDSSxTQUFRO3NDQUFPOzs7Ozs7c0NBRzdFLDhEQUFDQzs0QkFBTUwsV0FBVTs0QkFDYk8sSUFBRzs0QkFDSDVCLE1BQUs7NEJBQ0w4QixVQUFVLENBQUN4QztvQ0FBZ0NBO3VDQUExQkEsRUFBRXlDLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJNUMsU0FBUUUsa0JBQUFBLEVBQUV5QyxNQUFNLENBQUNDLEtBQUssY0FBZDFDLHNDQUFBQSxlQUFnQixDQUFDLEVBQUU7Ozs7Ozs7c0NBQ2xFLDhEQUFDMkM7NEJBQUtaLFdBQVU7c0NBQTRCOzs7Ozs7Ozs7Ozs7OEJBRWhELDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ2E7d0JBQU9iLFdBQVU7d0JBQStHckIsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uSztHQXJITWxCO0tBQUFBO0FBdUhOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZGQtbXVzaWMvcGFnZS50c3g/N2JiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtnZXRTaWduZWRVUkx9IGZyb20gXCIuL2FjdGlvbnNcIlxyXG5cclxuY29uc3QgQWRkTXVzaWNQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYXJ0aXN0LCBzZXRBcnRpc3RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2lnbmVkVVJMUmVzdWx0ID0gYXdhaXQgZ2V0U2lnbmVkVVJMKCk7XHJcbiAgICAgICAgaWYoc2lnbmVkVVJMUmVzdWx0LmZhaWx1cmUpe1xyXG4gICAgICAgICAgICByZWRpcmVjdChcIi9hcGkvYXV0aC9zaWduaW4/Y2FsbGJhY2tVcmw9L2FkZC1tdXNpY1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cmwgPSBzaWduZWRVUkxSZXN1bHQuc3VjY2Vzcz8udXJsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNpZ25lZFVSTFJlc3VsdCk7IFxyXG5cclxuICAgICAgICBpZighdGl0bGUpe1xyXG4gICAgICAgICAgICBhbGVydCgnRW50ZXIgVGl0bGUgb2YgbXVzaWMnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFhcnRpc3Qpe1xyXG4gICAgICAgICAgICBhbGVydCgnRW50ZXIgQXJ0aXN0Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICBpZiAoIVsnYXVkaW8vbXBlZycsICdhdWRpby93YXYnLCAnYXVkaW8vb2dnJ10uaW5jbHVkZXMoZmlsZS50eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2Ugc2VsZWN0IGFuIGF1ZGlvIGZpbGUuJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IDIwICogMTAyNCAqIDEwMjQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdGaWxlIHNpemUgZXhjZWVkcyAyME1CJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnTm8gZmlsZSBzZWxlY3RlZC4gUGxlYXNlIGNob29zZSBhbiBhdWRpbyBmaWxlIHRvIHByb2NlZWQuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2FkZC1tdXNpYycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IFwiXCIsXHJcblxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnZG9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpdGxlKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJ0aXN0KCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmlsZSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcGxheWxpc3RcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dCA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnZG9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpdGxlKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJ0aXN0KCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmlsZSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcGxheWxpc3RcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBhbGVydCh7IGRhdGEgfSk7XHJcbiAgICAgICAgaWYgKGRhdGEgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgc2V0VGl0bGUoJycpO1xyXG4gICAgICAgICAgICBzZXRBcnRpc3QoJycpO1xyXG4gICAgICAgICAgICBzZXRGaWxlKCcnKTtcclxuICAgICAgICAgICAgcmVkaXJlY3QoXCIvcGxheWxpc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1hdXRvIGJnLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbSBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCBweC04IHB0LTYgcGItOCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE11c2ljIFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIiBpZD1cInRpdGxlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImFydGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnRpc3RcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIGlkPVwiYXJ0aXN0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT17YXJ0aXN0fSBvbkNoYW5nZT17KGUpID0+IHNldEFydGlzdChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwiZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNdXNpYyBGaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZS50YXJnZXQuZmlsZXMgJiYgc2V0RmlsZShlLnRhcmdldC5maWxlcz8uWzBdKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWxpZ2h0IHRleHQtc2xhdGUtNTAwXCI+UGxlYXNlIGVuc3VyZSB0aGF0IHRoZSBzZWxlY3RlZCBhdWRpbyBmaWxlIGlzIG5vIGxhcmdlciB0aGFuIDIwTUIuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgTXVzaWNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRNdXNpY1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJyZWRpcmVjdCIsInVzZVN0YXRlIiwiZ2V0U2lnbmVkVVJMIiwiQWRkTXVzaWNQYWdlIiwidGl0bGUiLCJzZXRUaXRsZSIsImFydGlzdCIsInNldEFydGlzdCIsImZpbGUiLCJzZXRGaWxlIiwiaGFuZGxlU3VibWl0IiwiZSIsInNpZ25lZFVSTFJlc3VsdCIsInByZXZlbnREZWZhdWx0IiwiZmFpbHVyZSIsInVybCIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJpbmNsdWRlcyIsInR5cGUiLCJzaXplIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnRlbnRUeXBlIiwiZ2V0IiwiaW5kZXhPZiIsImpzb24iLCJkYXRhIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidGV4dCIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInJlcXVpcmVkIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiZmlsZXMiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/add-music/page.tsx\n"));

/***/ })

});