/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/meat_bg.jpg */ \"./src/assets/meat_bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com\n*/\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n::before,\n::after {\n  --tw-content: '';\n}\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \\`sans\\` font-family by default.\n5. Use the user's configured \\`sans\\` font-feature-settings by default.\n6. Use the user's configured \\`sans\\` font-variation-settings by default.\n*/\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \\`html\\` so users can set them as a class directly on the \\`html\\` element.\n*/\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n/*\nRemove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/*\n1. Use the user's configured \\`mono\\` font family by default.\n2. Correct the odd \\`em\\` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/*\nPrevent \\`sub\\` and \\`sup\\` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n/*\nRemove the additional \\`:invalid\\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \\`inherit\\` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n/*\nSet the default cursor for buttons.\n*/\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n/*\n1. Make replaced elements \\`display: block\\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \\`vertical-align: middle\\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n*, ::before, ::after{\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n::backdrop{\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.mx-10{\n  margin-left: 2.5rem;\n  margin-right: 2.5rem;\n}\n.my-10{\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n}\n.flex{\n  display: flex;\n}\n.h-full{\n  height: 100%;\n}\n.w-\\\\[500px\\\\]{\n  width: 500px;\n}\n.w-full{\n  width: 100%;\n}\n.min-w-\\\\[400px\\\\]{\n  min-width: 400px;\n}\n.flex-col{\n  flex-direction: column;\n}\n.items-center{\n  align-items: center;\n}\n.justify-center{\n  justify-content: center;\n}\n.justify-around{\n  justify-content: space-around;\n}\n.space-x-16 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse: 0;\n  margin-right: calc(4rem * 0);\n  margin-right: calc(4rem * var(--tw-space-x-reverse));\n  margin-left: calc(4rem * (1 - 0));\n  margin-left: calc(4rem * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(4rem * calc(1 - 0));\n  margin-left: calc(4rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-32 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse: 0;\n  margin-right: calc(8rem * 0);\n  margin-right: calc(8rem * var(--tw-space-x-reverse));\n  margin-left: calc(8rem * (1 - 0));\n  margin-left: calc(8rem * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(8rem * calc(1 - 0));\n  margin-left: calc(8rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-12 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(3rem * (1 - 0));\n  margin-top: calc(3rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(3rem * calc(1 - 0));\n  margin-top: calc(3rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(3rem * 0);\n  margin-bottom: calc(3rem * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * (1 - 0));\n  margin-top: calc(1rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(1rem * calc(1 - 0));\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * 0);\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.space-y-5 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.25rem * (1 - 0));\n  margin-top: calc(1.25rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(1.25rem * calc(1 - 0));\n  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.25rem * 0);\n  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\n}\n.space-y-8 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2rem * (1 - 0));\n  margin-top: calc(2rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(2rem * calc(1 - 0));\n  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2rem * 0);\n  margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n}\n.self-end{\n  align-self: flex-end;\n}\n.rounded-lg{\n  border-radius: 0.5rem;\n}\n.border{\n  border-width: 1px;\n}\n.border-black{\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 0, 0, 1);\n  border-color: rgba(0, 0, 0, var(--tw-border-opacity));\n}\n.bg-\\\\[\\\\#630A1066\\\\]{\n  background-color: rgba(99,10,16,0.4);\n}\n.bg-\\\\[\\\\#911F27\\\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(145, 31, 39, 1);\n  background-color: rgba(145, 31, 39, var(--tw-bg-opacity));\n}\n.bg-\\\\[\\\\#FACE7F\\\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(250, 206, 127, 1);\n  background-color: rgba(250, 206, 127, var(--tw-bg-opacity));\n}\n.bg-\\\\[\\\\#FCF0C8\\\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(252, 240, 200, 1);\n  background-color: rgba(252, 240, 200, var(--tw-bg-opacity));\n}\n.p-3{\n  padding: 0.75rem;\n}\n.p-5{\n  padding: 1.25rem;\n}\n.p-6{\n  padding: 1.5rem;\n}\n.px-12{\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n.px-8{\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-3{\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.pb-0{\n  padding-bottom: 0px;\n}\n.text-left{\n  text-align: left;\n}\n.text-3xl{\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl{\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-5xl{\n  font-size: 3rem;\n  line-height: 1;\n}\n.text-xl{\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-bold{\n  font-weight: 700;\n}\n.text-\\\\[\\\\#911F27\\\\]{\n  --tw-text-opacity: 1;\n  color: rgba(145, 31, 39, 1);\n  color: rgba(145, 31, 39, var(--tw-text-opacity));\n}\n.text-\\\\[\\\\#FCF0C8\\\\]{\n  --tw-text-opacity: 1;\n  color: rgba(252, 240, 200, 1);\n  color: rgba(252, 240, 200, var(--tw-text-opacity));\n}\n.text-black{\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, 1);\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.shadow-lg{\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.filter{\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\n\n#content {\n    font-family: 'GFS Didot', serif;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n\n}\n\n.tabs>* {\n    cursor: pointer;\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n    transition-delay: 100ms;\n    transition-duration: 200ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tabs>*:hover{\n  --tw-translate-y: -0.25rem;\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), -0.25rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.1) scaleY(1.1);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@media (min-width: 768px){\n  .md\\\\:flex-row{\n    flex-direction: row;\n  }\n  .md\\\\:space-x-32 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-x-reverse: 0;\n    margin-right: calc(8rem * 0);\n    margin-right: calc(8rem * var(--tw-space-x-reverse));\n    margin-left: calc(8rem * (1 - 0));\n    margin-left: calc(8rem * (1 - var(--tw-space-x-reverse)));\n    margin-left: calc(8rem * calc(1 - 0));\n    margin-left: calc(8rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_page/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact_page.js":
/*!*****************************!*\
  !*** ./src/contact_page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_map_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/map.jpeg */ \"./src/assets/map.jpeg\");\n\n\n\nfunction createContactPage() {\n    var contactPageContainer = document.createElement('div');\n    contactPageContainer.classList.add(\"max-w\", \"min-w-[400px]\", \"mx-10\", \"p-3\", \"flex\", \"flex-col\", \"items-center\", \"space-y-5\", \"border\", \"border-6\", \"border-black\", \"bg-[#630A1066]\");\n\n    var header = document.createElement('div');\n    header.classList.add(\"text-3xl\")\n    header.textContent = \"Contact Us !\"\n    contactPageContainer.append(header);\n\n    var info = document.createElement('div');\n    info.classList.add(\"w-full\", \"flex\", \"flex-col\", \"justify-center\", \"items-center\", \"space-y-12\");\n\n    var p1 = document.createElement('p');\n    p1.classList.add(\"text-xl\");\n    p1.innerHTML = \"Phone : +990 11 12 312 <br> Email : Butcher@meat.com\";\n\n    var loc = new Image();\n    loc.src = _assets_map_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    loc.style.width = \"300px\";\n\n    info.append(p1, loc);\n\n\n    contactPageContainer.append(info);\n    return contactPageContainer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://restaurant_page/./src/contact_page.js?");

/***/ }),

/***/ "./src/contact_tab.js":
/*!****************************!*\
  !*** ./src/contact_tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nvar contactTab = document.createElement('div');\nfunction getContactTab() {\n    contactTab.textContent = \"Contact\";\n    return contactTab;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getContactTab);\n\n//# sourceURL=webpack://restaurant_page/./src/contact_tab.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction createFooter() {\n\n    var footer = document.createElement('div');\n    footer.classList.add(\"w-full\", \"py-3\", \"self-end\", \"flex\", \"justify-center\", \"items-center\", \"bg-[#911F27]\");\n    footer.textContent = \"CopyRights\"\n    return footer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n//# sourceURL=webpack://restaurant_page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_ox_head_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/ox_head.svg */ \"./src/assets/ox_head.svg\");\n/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home_tab */ \"./src/home_tab.js\");\n/* harmony import */ var _menu_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu_tab */ \"./src/menu_tab.js\");\n/* harmony import */ var _contact_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact_tab */ \"./src/contact_tab.js\");\n\n\n\n\n\n\nfunction createHeaders() {\n    var header = document.createElement('div');\n    header.classList.add(\"w-full\", \"p-6\", \"pb-0\", \"flex\", \"flex-col\", \"items-center\", \"space-y-5\", \"bg-[#911F27]\");\n\n    var title = document.createElement('div');\n    title.classList.add(\"text-5xl\", \"font-bold\");\n    title.textContent = \"Butcher's Restaurant\"\n\n    var logo = new Image();\n    logo.src = _assets_ox_head_svg__WEBPACK_IMPORTED_MODULE_1__;\n    logo.style.width = '8rem';\n\n\n    var tabs = document.createElement('div');\n    tabs.classList.add(\"tabs\", \"w-full\", \"flex\", \"items-center\", \"justify-center\", \"space-x-16\", \"bg-[#FCF0C8]\", \"p-5\", \"text-xl\", \"text-[#911F27]\");\n    tabs.append((0,_home_tab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    tabs.append((0,_menu_tab__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    tabs.append((0,_contact_tab__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n    header.append(logo, title, tabs);\n\n    return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeaders);\n\n//# sourceURL=webpack://restaurant_page/./src/header.js?");

/***/ }),

/***/ "./src/home_page.js":
/*!**************************!*\
  !*** ./src/home_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_s1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/s1.jpg */ \"./src/assets/s1.jpg\");\n/* harmony import */ var _assets_s2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/s2.jpg */ \"./src/assets/s2.jpg\");\n/* harmony import */ var _assets_s3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/s3.jpg */ \"./src/assets/s3.jpg\");\n\n\n\n\n\nfunction createHomePage() {\n    var homePageContainer = document.createElement('div');\n    homePageContainer.classList.add(\"max-w\", \"min-w-[400px]\", \"mx-10\", \"py-3\", \"px-12\", \"flex\", \"flex-col\", \"items-center\", \"space-y-8\", \"border\", \"border-6\", \"border-black\", \"bg-[#630A1066]\");\n\n    var header = document.createElement('div');\n    header.classList.add(\"text-4xl\")\n    header.textContent = \"100% Natural Meat\"\n    homePageContainer.append(header);\n\n    var sectionOne = document.createElement('div');\n    sectionOne.classList.add(\"w-full\", \"flex\", \"flex-col\", \"justify-around\", \"items-center\", \"space-y-4\", \"md:flex-row\", \"md:space-x-32\");\n\n    var p1 = document.createElement('p');\n    p1.classList.add(\"text-3xl\");\n    p1.innerHTML = \"Pure Filaments\";\n\n    var image1 = new Image();\n    image1.src = _assets_s1_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    image1.classList.add(\"rounded-lg\", \"shadow-lg\");\n    image1.style.width = '300px';\n\n    sectionOne.append(p1, image1);\n\n\n    var sectionTwo = document.createElement('div');\n    sectionTwo.classList.add(\"w-full\", \"flex\", \"flex-col\", \"justify-around\", \"items-center\", \"space-y-4\", \"md:flex-row\", \"md:space-x-32\");\n\n    var p2 = document.createElement('p');\n    p2.classList.add(\"text-3xl\");\n    p2.innerHTML = \"Tasty Muscles\";\n\n    var image2 = new Image();\n    image2.src = _assets_s1_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    image2.classList.add(\"rounded-lg\", \"shadow-lg\");\n    image2.style.width = '300px';\n\n    sectionTwo.append(p2, image2);\n\n\n    var sectionThree = document.createElement('div');\n    sectionThree.classList.add(\"w-full\", \"flex\", \"flex-col\", \"justify-around\", \"items-center\", \"space-y-4\", \"md:flex-row\", \"md:space-x-32\");\n\n    var p3 = document.createElement('p');\n    p3.classList.add(\"text-3xl\");\n    p3.innerHTML = \"Delicate Fibers\";\n\n    var image3 = new Image();\n    image3.src = _assets_s2_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    image3.classList.add(\"rounded-lg\", \"shadow-lg\");\n    image3.style.width = '300px';\n\n    sectionThree.append(p3, image3);\n\n\n    homePageContainer.append(sectionOne, sectionTwo, sectionThree);\n    return homePageContainer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n//# sourceURL=webpack://restaurant_page/./src/home_page.js?");

/***/ }),

/***/ "./src/home_tab.js":
/*!*************************!*\
  !*** ./src/home_tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nvar homeTab = document.createElement('div');\nfunction getHomeTab() {\n    homeTab.textContent = \"Home\";\n    return homeTab;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHomeTab);\n\n//# sourceURL=webpack://restaurant_page/./src/home_tab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _web_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-skeleton */ \"./src/web-skeleton.js\");\n\n\n\n(0,_web_skeleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu_page.js":
/*!**************************!*\
  !*** ./src/menu_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction createMenuPage() {\n    var menuPageContainer = document.createElement('div');\n    menuPageContainer.classList.add(\"w-[500px]\", \"mx-10\", \"p-3\", \"px-8\", \"flex\", \"flex-col\", \"items-center\", \"space-y-5\", \"border\", \"border-6\", \"border-black\", \"bg-[#FACE7F]\", \"text-black\", \"text-left\");\n\n    var header1 = document.createElement('div');\n    header1.classList.add(\"text-3xl\")\n    header1.textContent = \"Specials\";\n\n    var specials = document.createElement('div');\n    specials.classList.add(\"w-full\", \"flex\", \"justify-center\", \"items-center\", \"space-x-32\");\n\n    var p1 = document.createElement('p');\n    p1.classList.add(\"text-xl\");\n    p1.innerHTML = \"Entrecôte .................................................. 10$ <br> Vindaloo ................................................... 30$ <br>Picadillo .................................................... 15$ <br>Anticuchos ................................................ 20$ <br>Beef Wellington ........................................ 40$ <br>Beef bourguignon ..................................... 35$ <br>Spaghetti and Meatballs ............................ 10$ <br>\";\n\n    specials.append(p1);\n\n    var header2 = document.createElement('div');\n    header2.classList.add(\"text-3xl\")\n    header2.textContent = \"Sides\";\n\n    var sides = document.createElement('div');\n    sides.classList.add(\"w-full\", \"flex\", \"justify-center\", \"items-center\", \"space-x-32\");\n\n    var p2 = document.createElement('p');\n    p2.classList.add(\"text-xl\");\n    p2.innerHTML = \"Entrecôte .................................................. 10$ <br> Vindaloo ................................................... 30$ <br>Picadillo .................................................... 15$ <br>Anticuchos ................................................ 20$ <br>Beef Wellington ........................................ 40$ <br>Beef bourguignon ..................................... 35$ <br>Spaghetti and Meatballs ............................ 10$ <br>\";\n\n\n    sides.append(p2);\n\n\n    menuPageContainer.append(header1, specials, header2, sides);\n    return menuPageContainer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page.js?");

/***/ }),

/***/ "./src/menu_tab.js":
/*!*************************!*\
  !*** ./src/menu_tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nvar menuTab = document.createElement('div');\nfunction getMenuTab() {\n    menuTab.textContent = \"Menu\";\n    return menuTab;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMenuTab);\n\n//# sourceURL=webpack://restaurant_page/./src/menu_tab.js?");

/***/ }),

/***/ "./src/web-skeleton.js":
/*!*****************************!*\
  !*** ./src/web-skeleton.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home_tab */ \"./src/home_tab.js\");\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home_page */ \"./src/home_page.js\");\n/* harmony import */ var _menu_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu_tab */ \"./src/menu_tab.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu_page */ \"./src/menu_page.js\");\n/* harmony import */ var _contact_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact_tab */ \"./src/contact_tab.js\");\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact_page */ \"./src/contact_page.js\");\n\n\n\n\n\n\n\n\n\n\nfunction createSkeleton() {\n    var homeTabIsClicked = true;\n    var content = document.getElementById('content');\n    var main = document.createElement('main');\n\n    main.classList.add(\"flex\", \"my-10\", \"flex-col\", \"items-center\", \"space-y-12\", \"text-[#FCF0C8]\", \"h-full\");\n    main.append((0,_home_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n    content.append((0,_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    content.append(main);\n    content.append((0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    //  if hometab is clicked reder the home page\n    (0,_home_tab__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().addEventListener('click', function () {\n        if (!homeTabIsClicked) {\n            main.textContent = \"\";\n            main.append((0,_home_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n            homeTabIsClicked = true;\n        }\n    });\n    (0,_menu_tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().addEventListener('click', function () {\n\n        main.textContent = \"\";\n        main.append((0,_menu_page__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n        homeTabIsClicked = false;\n    });\n    (0,_contact_tab__WEBPACK_IMPORTED_MODULE_7__[\"default\"])().addEventListener('click', function () {\n        main.textContent = \"\";\n        main.append((0,_contact_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"])());\n        homeTabIsClicked = false;\n\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSkeleton);\n\n\n//# sourceURL=webpack://restaurant_page/./src/web-skeleton.js?");

/***/ }),

/***/ "./src/assets/map.jpeg":
/*!*****************************!*\
  !*** ./src/assets/map.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"map.jpeg\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/map.jpeg?");

/***/ }),

/***/ "./src/assets/meat_bg.jpg":
/*!********************************!*\
  !*** ./src/assets/meat_bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"meat_bg.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/meat_bg.jpg?");

/***/ }),

/***/ "./src/assets/ox_head.svg":
/*!********************************!*\
  !*** ./src/assets/ox_head.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ox_head.svg\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/ox_head.svg?");

/***/ }),

/***/ "./src/assets/s1.jpg":
/*!***************************!*\
  !*** ./src/assets/s1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"s1.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/s1.jpg?");

/***/ }),

/***/ "./src/assets/s2.jpg":
/*!***************************!*\
  !*** ./src/assets/s2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"s2.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/s2.jpg?");

/***/ }),

/***/ "./src/assets/s3.jpg":
/*!***************************!*\
  !*** ./src/assets/s3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"s3.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/assets/s3.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;