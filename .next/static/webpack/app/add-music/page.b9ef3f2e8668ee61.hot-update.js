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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"(app-pages-browser)/./app/add-music/actions.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst AddMusicPage = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [artist, setArtist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const computeSHA256 = async (file)=>{\n        const buffer = await file.arrayBuffer();\n        const hashBuffer = await crypto.subtle.digest(\"SHA-256\", buffer);\n        const hashArray = Array.from(new Uint8Array(hashBuffer));\n        const hashHex = hashArray.map((b)=>b.toString(16).padStart(2, \"0\")).join(\"\");\n        return hashHex;\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!title) {\n            alert(\"Enter Title of music\");\n            return;\n        }\n        if (!artist) {\n            alert(\"Enter Artist\");\n            return;\n        }\n        if (file) {\n            let musicInfo = {};\n            musicInfo.title = title;\n            musicInfo.artist = artist;\n            const checksum = await computeSHA256(file);\n            const signedURLResult = await (0,_actions__WEBPACK_IMPORTED_MODULE_2__.createMusic)(file.type, file.size, checksum, musicInfo);\n            if (signedURLResult.failure !== undefined) {\n                alert(signedURLResult.failure);\n                return;\n            }\n            const { url, musicId } = signedURLResult.success;\n            console.log(url);\n            // upload file\n            await fetch(url, {\n                method: \"PUT\",\n                body: file,\n                headers: {\n                    \"Content-Type\": (file === null || file === void 0 ? void 0 : file.type) || \"application/octet-stream\"\n                }\n            });\n            alert(\"done!\");\n            setTitle(\"\");\n            setArtist(\"\");\n        } else {\n            alert(\"No file selected. Please choose an audio file to proceed.\");\n            return;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center h-auto bg-gray-200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-gray-700 text-sm font-bold mb-2\",\n                            htmlFor: \"title\",\n                            children: \"Music Title\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            required: true,\n                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                            id: \"title\",\n                            type: \"text\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-gray-700 text-sm font-bold mb-2\",\n                            htmlFor: \"artist\",\n                            children: \"Artist\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            required: true,\n                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                            id: \"artist\",\n                            type: \"text\",\n                            value: artist,\n                            onChange: (e)=>setArtist(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-gray-700 text-sm font-bold mb-2\",\n                            htmlFor: \"file\",\n                            children: \"Music File\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                            id: \"file\",\n                            type: \"file\",\n                            accept: \"audio/*\",\n                            onChange: (e)=>{\n                                var _e_target_files;\n                                return e.target.files && setFile((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-light text-slate-500\",\n                            children: \"Please ensure that the selected audio file is no larger than 20MB.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                        type: \"submit\",\n                        children: \"Add Music\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n            lineNumber: 73,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Pc\\\\Desktop\\\\project\\\\music-player\\\\music-player-app\\\\app\\\\add-music\\\\page.tsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AddMusicPage, \"CsqzYcXZU547qSyN5gx1aKTVpYg=\");\n_c = AddMusicPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddMusicPage);\nvar _c;\n$RefreshReg$(_c, \"AddMusicPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZGQtbXVzaWMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVnQztBQUNPO0FBR3ZDLE1BQU1FLGVBQWU7O0lBQ2pCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFjO0lBRTlDLE1BQU1TLGdCQUFnQixPQUFPRjtRQUN6QixNQUFNRyxTQUFTLE1BQU1ILEtBQUtJLFdBQVc7UUFDckMsTUFBTUMsYUFBYSxNQUFNQyxPQUFPQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxXQUFXTDtRQUN6RCxNQUFNTSxZQUFZQyxNQUFNQyxJQUFJLENBQUMsSUFBSUMsV0FBV1A7UUFDNUMsTUFBTVEsVUFBVUosVUFDWEssR0FBRyxDQUFDLENBQUNDLElBQU1BLEVBQUVDLFFBQVEsQ0FBQyxJQUFJQyxRQUFRLENBQUMsR0FBRyxNQUN0Q0MsSUFBSSxDQUFDO1FBQ1YsT0FBT0w7SUFDWDtJQUdBLE1BQU1NLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSSxDQUFDekIsT0FBTztZQUNSMEIsTUFBTTtZQUNOO1FBQ0o7UUFFQSxJQUFJLENBQUN4QixRQUFRO1lBQ1R3QixNQUFNO1lBQ047UUFDSjtRQUVBLElBQUl0QixNQUFNO1lBRU4sSUFBSXVCLFlBQVksQ0FBQztZQUNqQkEsVUFBVTNCLEtBQUssR0FBR0E7WUFDbEIyQixVQUFVekIsTUFBTSxHQUFHQTtZQUVuQixNQUFNMEIsV0FBVyxNQUFNdEIsY0FBY0Y7WUFDckMsTUFBTXlCLGtCQUFrQixNQUFNL0IscURBQVdBLENBQUNNLEtBQUswQixJQUFJLEVBQUUxQixLQUFLMkIsSUFBSSxFQUFFSCxVQUFTRDtZQUN6RSxJQUFJRSxnQkFBZ0JHLE9BQU8sS0FBS0MsV0FBVztnQkFDdkNQLE1BQU1HLGdCQUFnQkcsT0FBTztnQkFDN0I7WUFDSjtZQUNBLE1BQU0sRUFBRUUsR0FBRyxFQUFHQyxPQUFPLEVBQUUsR0FBR04sZ0JBQWdCTyxPQUFPO1lBQ2pEQyxRQUFRQyxHQUFHLENBQUNKO1lBRVosY0FBYztZQUNkLE1BQU1LLE1BQU1MLEtBQUs7Z0JBQ2JNLFFBQVE7Z0JBQ1JDLE1BQU1yQztnQkFDTnNDLFNBQVM7b0JBQ0wsZ0JBQWdCdEMsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNMEIsSUFBSSxLQUFJO2dCQUNsQztZQUNKO1lBRUFKLE1BQU07WUFDTnpCLFNBQVM7WUFDVEUsVUFBVTtRQUNkLE9BQU87WUFDSHVCLE1BQU07WUFDTjtRQUNKO0lBR0o7SUFFQSxxQkFDSSw4REFBQ2lCO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQUtDLFVBQVV2QjtZQUFjcUIsV0FBVTs7OEJBQ3BDLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNHOzRCQUFNSCxXQUFVOzRCQUE2Q0ksU0FBUTtzQ0FBUTs7Ozs7O3NDQUc5RSw4REFBQ0M7NEJBQU1DLFFBQVE7NEJBQUNOLFdBQVU7NEJBQTZITyxJQUFHOzRCQUFRckIsTUFBSzs0QkFBT3NCLE9BQU9wRDs0QkFBT3FELFVBQVUsQ0FBQzdCLElBQU12QixTQUFTdUIsRUFBRThCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzhCQUV4Tyw4REFBQ1Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRzs0QkFBTUgsV0FBVTs0QkFBNkNJLFNBQVE7c0NBQVM7Ozs7OztzQ0FHL0UsOERBQUNDOzRCQUFNQyxRQUFROzRCQUFDTixXQUFVOzRCQUE2SE8sSUFBRzs0QkFBU3JCLE1BQUs7NEJBQU9zQixPQUFPbEQ7NEJBQVFtRCxVQUFVLENBQUM3QixJQUFNckIsVUFBVXFCLEVBQUU4QixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFFM08sOERBQUNUO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0c7NEJBQU1ILFdBQVU7NEJBQTZDSSxTQUFRO3NDQUFPOzs7Ozs7c0NBRzdFLDhEQUFDQzs0QkFBTUwsV0FBVTs0QkFDYk8sSUFBRzs0QkFDSHJCLE1BQUs7NEJBQ0x5QixRQUFPOzRCQUNQRixVQUFVLENBQUM3QjtvQ0FBZ0NBO3VDQUExQkEsRUFBRThCLE1BQU0sQ0FBQ0UsS0FBSyxJQUFJbkQsU0FBUW1CLGtCQUFBQSxFQUFFOEIsTUFBTSxDQUFDRSxLQUFLLGNBQWRoQyxzQ0FBQUEsZUFBZ0IsQ0FBQyxFQUFFOzs7Ozs7O3NDQUNsRSw4REFBQ2lDOzRCQUFLYixXQUFVO3NDQUE0Qjs7Ozs7Ozs7Ozs7OzhCQUVoRCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNjO3dCQUFPZCxXQUFVO3dCQUErR2QsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uSztHQWxHTS9CO0tBQUFBO0FBb0dOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZGQtbXVzaWMvcGFnZS50c3g/N2JiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlTXVzaWMgfSBmcm9tIFwiLi9hY3Rpb25zXCJcclxuaW1wb3J0IHsgTXVzaWNJbmZvIH0gZnJvbSBcIkAvbGliL3R5cGVzXCJcclxuXHJcbmNvbnN0IEFkZE11c2ljUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2FydGlzdCwgc2V0QXJ0aXN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlPEZpbGUgfCBudWxsPihudWxsKTtcclxuXHJcbiAgICBjb25zdCBjb21wdXRlU0hBMjU2ID0gYXN5bmMgKGZpbGU6IEZpbGUpID0+IHtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XHJcbiAgICAgICAgY29uc3QgaGFzaEJ1ZmZlciA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KFwiU0hBLTI1NlwiLCBidWZmZXIpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hBcnJheSA9IEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoaGFzaEJ1ZmZlcikpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hIZXggPSBoYXNoQXJyYXlcclxuICAgICAgICAgICAgLm1hcCgoYikgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpKVxyXG4gICAgICAgICAgICAuam9pbihcIlwiKTtcclxuICAgICAgICByZXR1cm4gaGFzaEhleDtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aXRsZSkge1xyXG4gICAgICAgICAgICBhbGVydCgnRW50ZXIgVGl0bGUgb2YgbXVzaWMnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFhcnRpc3QpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0VudGVyIEFydGlzdCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZmlsZSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IG11c2ljSW5mbyA9IHt9IGFzIE11c2ljSW5mbztcclxuICAgICAgICAgICAgbXVzaWNJbmZvLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgIG11c2ljSW5mby5hcnRpc3QgPSBhcnRpc3Q7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGVja3N1bSA9IGF3YWl0IGNvbXB1dGVTSEEyNTYoZmlsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZ25lZFVSTFJlc3VsdCA9IGF3YWl0IGNyZWF0ZU11c2ljKGZpbGUudHlwZSwgZmlsZS5zaXplLCBjaGVja3N1bSxtdXNpY0luZm8pO1xyXG4gICAgICAgICAgICBpZiAoc2lnbmVkVVJMUmVzdWx0LmZhaWx1cmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoc2lnbmVkVVJMUmVzdWx0LmZhaWx1cmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgbXVzaWNJZCB9ID0gc2lnbmVkVVJMUmVzdWx0LnN1Y2Nlc3M7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGxvYWQgZmlsZVxyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgICAgIGJvZHk6IGZpbGUsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogZmlsZT8udHlwZSB8fCBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgYWxlcnQoJ2RvbmUhJylcclxuICAgICAgICAgICAgc2V0VGl0bGUoJycpO1xyXG4gICAgICAgICAgICBzZXRBcnRpc3QoJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdObyBmaWxlIHNlbGVjdGVkLiBQbGVhc2UgY2hvb3NlIGFuIGF1ZGlvIGZpbGUgdG8gcHJvY2VlZC4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1hdXRvIGJnLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbSBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCBweC04IHB0LTYgcGItOCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE11c2ljIFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIiBpZD1cInRpdGxlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImFydGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnRpc3RcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIGlkPVwiYXJ0aXN0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT17YXJ0aXN0fSBvbkNoYW5nZT17KGUpID0+IHNldEFydGlzdChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwiZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNdXNpYyBGaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImF1ZGlvLypcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGUudGFyZ2V0LmZpbGVzICYmIHNldEZpbGUoZS50YXJnZXQuZmlsZXM/LlswXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LXNsYXRlLTUwMFwiPlBsZWFzZSBlbnN1cmUgdGhhdCB0aGUgc2VsZWN0ZWQgYXVkaW8gZmlsZSBpcyBubyBsYXJnZXIgdGhhbiAyME1CLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIE11c2ljXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTXVzaWNQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjcmVhdGVNdXNpYyIsIkFkZE11c2ljUGFnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJhcnRpc3QiLCJzZXRBcnRpc3QiLCJmaWxlIiwic2V0RmlsZSIsImNvbXB1dGVTSEEyNTYiLCJidWZmZXIiLCJhcnJheUJ1ZmZlciIsImhhc2hCdWZmZXIiLCJjcnlwdG8iLCJzdWJ0bGUiLCJkaWdlc3QiLCJoYXNoQXJyYXkiLCJBcnJheSIsImZyb20iLCJVaW50OEFycmF5IiwiaGFzaEhleCIsIm1hcCIsImIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwibXVzaWNJbmZvIiwiY2hlY2tzdW0iLCJzaWduZWRVUkxSZXN1bHQiLCJ0eXBlIiwic2l6ZSIsImZhaWx1cmUiLCJ1bmRlZmluZWQiLCJ1cmwiLCJtdXNpY0lkIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJyZXF1aXJlZCIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImFjY2VwdCIsImZpbGVzIiwic3BhbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/add-music/page.tsx\n"));

/***/ })

});