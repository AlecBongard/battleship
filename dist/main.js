/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Rubik_Iso/RubikIso-Regular.ttf */ "./src/fonts/Rubik_Iso/RubikIso-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PT_Sans_Narrow/PTSansNarrow-Regular.ttf */ "./src/fonts/PT_Sans_Narrow/PTSansNarrow-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PT_Sans_Narrow/PTSansNarrow-Bold.ttf */ "./src/fonts/PT_Sans_Narrow/PTSansNarrow-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face{\n  font-family: 'Rubik Iso';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'PT Sans Narrow';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face{\n  font-family: 'PT Sans Narrow';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n  font-style: bold;\n}\n\n:root {\n  --view-size: calc(50vw / 3);\n  --square-size: calc(var(--view-size) / 10);\n  --water-color: #e6eefb;\n  --grid-lines: 0.5px solid rgb(104, 104, 104);\n  --miss: white;\n  --hit: rgb(255, 133, 133);\n  --frame-width: 60vw;\n  --frame-height: 75vh;\n}\n\nbody{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-repeat: repeat;\n  font-family: 'PT Sans Narrow';\n}\n\n.board-wrap{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height:100%;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.frame{\n  box-sizing: border-box;\n  height: var(--frame-height);\n  width: var(--frame-width);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  position: relative;\n  background-color: white;\n}\n\n.menu {\n  height: var(--frame-height);\n  width: var(--frame-width);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  background-color: #fff;\n  z-index: 100;\n}\n\n.title{\n  width:min-content;\n}\n\n.title-text{\n  overflow: hidden;\n  font-family: 'Rubik Iso';\n  width: 0 auto;\n  font-size: 64px;\n  animation: typing 1.5s steps(15, end);\n}\n\n@keyframes typing{\n  from {width: 0}\n  to {width: 100%}\n}\n\n.board-square.selection-hover-bad {\n  background-color: rgb(246, 109, 109);\n}\n\n.field-wrap {\n  display: flex;\n  flex-direction: column;\n}\n\n.player-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.board {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 50%;\n  position: relative;\n}\n\n.blind {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n\n.placer-bg {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n\n.place-map > .selection-hover {\n  background-color: rgb(143, 255, 143);\n}\n\n.info {\n  height: 10%;\n  width: 75%;\n  border: var(--grid-lines);\n  border-radius: 3px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.map {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.own-board {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.board-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.board-square.ship-unhit {\n  background-color: var(--water-color);\n}\n\n.board-square.ship-hit {\n  background-color: red;\n}\n\n.board-square.ship-sunk {\n  background-color: #ff6565;\n}\n\n.board-square.board-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-hit {\n  background-color: red;\n}\n\n.map-square.map-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-sunk {\n  background-color: #ff6565;\n}\n\n.ship {\n  position: absolute;\n  border: 2px solid rgb(69, 69, 69);\n  background-color: rgba(50, 50, 50, 0.25);\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAkD;EAClD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,4CAAyD;EACzD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,4CAAsD;EACtD,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,0CAA0C;EAC1C,sBAAsB;EACtB,4CAA4C;EAC5C,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,WAAW;EACX,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,2BAA2B;EAC3B,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;EAC3B,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,aAAa;EACb,eAAe;EACf,qCAAqC;AACvC;;AAEA;EACE,MAAM,QAAQ;EACd,IAAI,WAAW;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;EACX,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,UAAU;EACV,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,iCAAiC;EACjC,wCAAwC;EACxC,kBAAkB;EAClB,sBAAsB;AACxB","sourcesContent":["@font-face{\n  font-family: 'Rubik Iso';\n  src: url('./fonts/Rubik_Iso/RubikIso-Regular.ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'PT Sans Narrow';\n  src: url(./fonts/PT_Sans_Narrow/PTSansNarrow-Regular.ttf);\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face{\n  font-family: 'PT Sans Narrow';\n  src: url(./fonts/PT_Sans_Narrow/PTSansNarrow-Bold.ttf);\n  font-weight: 700;\n  font-style: bold;\n}\n\n:root {\n  --view-size: calc(50vw / 3);\n  --square-size: calc(var(--view-size) / 10);\n  --water-color: #e6eefb;\n  --grid-lines: 0.5px solid rgb(104, 104, 104);\n  --miss: white;\n  --hit: rgb(255, 133, 133);\n  --frame-width: 60vw;\n  --frame-height: 75vh;\n}\n\nbody{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-repeat: repeat;\n  font-family: 'PT Sans Narrow';\n}\n\n.board-wrap{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height:100%;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.frame{\n  box-sizing: border-box;\n  height: var(--frame-height);\n  width: var(--frame-width);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  position: relative;\n  background-color: white;\n}\n\n.menu {\n  height: var(--frame-height);\n  width: var(--frame-width);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  background-color: #fff;\n  z-index: 100;\n}\n\n.title{\n  width:min-content;\n}\n\n.title-text{\n  overflow: hidden;\n  font-family: 'Rubik Iso';\n  width: 0 auto;\n  font-size: 64px;\n  animation: typing 1.5s steps(15, end);\n}\n\n@keyframes typing{\n  from {width: 0}\n  to {width: 100%}\n}\n\n.board-square.selection-hover-bad {\n  background-color: rgb(246, 109, 109);\n}\n\n.field-wrap {\n  display: flex;\n  flex-direction: column;\n}\n\n.player-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.board {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 50%;\n  position: relative;\n}\n\n.blind {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n\n.placer-bg {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n\n.place-map > .selection-hover {\n  background-color: rgb(143, 255, 143);\n}\n\n.info {\n  height: 10%;\n  width: 75%;\n  border: var(--grid-lines);\n  border-radius: 3px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.map {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.own-board {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.board-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.board-square.ship-unhit {\n  background-color: var(--water-color);\n}\n\n.board-square.ship-hit {\n  background-color: red;\n}\n\n.board-square.ship-sunk {\n  background-color: #ff6565;\n}\n\n.board-square.board-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-hit {\n  background-color: red;\n}\n\n.map-square.map-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-sunk {\n  background-color: #ff6565;\n}\n\n.ship {\n  position: absolute;\n  border: 2px solid rgb(69, 69, 69);\n  background-color: rgba(50, 50, 50, 0.25);\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMUpdate.js":
/*!**************************!*\
  !*** ./src/DOMUpdate.js ***!
  \**************************/
/***/ ((module) => {

/* eslint-disable no-use-before-define */
const map = document.querySelector(".map");
const ownBoard = document.querySelector(".own-board");
const info = document.querySelector(".info");
const turnText = document.querySelector(".turn-text");
const moveText = document.querySelector(".move-text");
const blind = document.querySelector(".blind");



const update = (() => {
  const squareSize = 50 / 30;

  function _writeTurn(player, over) {
    if (over) {
      turnText.textContent = `Game over. ${player.playerName} wins.`;
    } else {
      turnText.textContent = `${player.playerName}'s turn`;
    }
  }

  function makePlaceable(
    player,
    board,
    length,
    boardDiv,
    direction,
    repeat = false
  ) {
    const currentBoard = boardDiv;
    const squares = document.querySelectorAll("div.place-map>div.board-square");

    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        const coord = JSON.parse(square.getAttribute("data-board-coord"));

        // using direction parameter to determine which direction to show ships
        const secondary = direction;
        const rootIndex = Math.abs(direction - 1);

        const root = coord[rootIndex];
        const shadow = [];

        const extent = root + length;

        const rotateBtn = document.querySelector(".rotate");
        const startBtn = document.querySelector(".start-btn");

        rotateBtn.style.visibility = "visible";

        rotateBtn.addEventListener("click", () => {
          currentBoard.textContent = "";
          _drawOwnBoard(board, boardDiv);

          makePlaceable(
            player,
            board,
            length,
            boardDiv,
            Math.abs(direction - 1),
            repeat
          );
          drawAllShips(board, boardDiv);
        });

        if (
          extent < 11 &&
          board.checkPathEmpty(root, coord[secondary], length, direction)
        ) {
          for (let i = root; i < root + length; i += 1) {
            let shadowed;

            if (direction === 1) {
              shadowed = document.querySelector(
                `[data-board-coord="[${i}, ${coord[1]}]"]`
              );
            } else {
              shadowed = document.querySelector(
                `[data-board-coord="[${coord[0]}, ${i}]"]`
              );
            }

            shadow.push(shadowed);
          }

          shadow.forEach((shadowed) => {
            shadowed.classList.add("selection-hover");
          });

          square.addEventListener("mouseleave", () => {
            shadow.forEach((shadowed) => {
              shadowed.classList.remove("selection-hover");
            });
          });

          square.addEventListener("click", () => {
            let end;

            if (direction === 1) {
              end = [coord[rootIndex] + (length - 1), coord[secondary]];
            } else {
              end = [coord[secondary], coord[rootIndex] + (length - 1)];
            }

            coord.reverse();
            end.reverse();

            board.placeShip(length, coord, end);

            currentBoard.textContent = "";
            _drawOwnBoard(board, boardDiv);
            drawAllShips(board, boardDiv);

            if (length === 5) {
              makePlaceable(player, board, 4, boardDiv, direction, false);
            } else if (length === 4) {
              makePlaceable(player, board, 3, boardDiv, direction, true);
            } else if (length === 3 && repeat) {
              makePlaceable(player, board, 3, boardDiv, direction, false);
            } else if (length === 3 && !repeat) {
              makePlaceable(player, board, 2, boardDiv, direction, true);
            } else if (length === 2 && repeat) {
              makePlaceable(player, board, 2, boardDiv, direction, false);
            } else if (length === 2 && !repeat) {
              rotateBtn.style.visibility = "hidden";
              startBtn.style.visibility = "visible";
            }
          });
        } else {
          for (let i = root; i < 10 && i < root + length - 1; i += 1) {
            let shadowed;

            if (direction === 1) {
              shadowed = document.querySelector(
                `[data-board-coord="[${i}, ${coord[1]}]"]`
              );
            } else {
              shadowed = document.querySelector(
                `[data-board-coord="[${coord[0]}, ${i}]"]`
              );
            }

            shadow.push(shadowed);
          }

          shadow.forEach((shadowed) => {
            shadowed.classList.add("selection-hover-bad");
          });

          square.addEventListener("mouseleave", () => {
            shadow.forEach((shadowed) => {
              shadowed.classList.remove("selection-hover-bad");
            });
          });
        }
      });
    });
  }

  function drawShipPlacer(player, gameboard, opp, oppBoard) {
    blind.textContent = "";
    blind.style.visibility = "visible";

    const placerBg = document.createElement("div");
    placerBg.classList.add("placer-bg");
    placerBg.style.visibility = "visible";
    blind.appendChild(placerBg);

    const placementText = document.createElement("p");
    placementText.classList.add("placement-text");
    placementText.textContent = `${player.playerName}: place your ships`;
    placerBg.appendChild(placementText);

    const placeMap = document.createElement("div");
    placeMap.classList.add("own-board");
    placeMap.classList.add("place-map");
    placerBg.appendChild(placeMap);

    const rotateBtn = document.createElement("button");
    rotateBtn.classList.add("rotate");
    rotateBtn.textContent = "Rotate";

    placerBg.appendChild(rotateBtn);

    const startBtn = document.createElement("button");
    startBtn.classList.add("start-btn");
    startBtn.textContent = "End Placements";
    startBtn.style.visibility = "hidden";

    placerBg.appendChild(startBtn);

    let oppPlaced = false;

    // button will either set up the ship placer for p2 or start the game
    startBtn.addEventListener("click", () => {
      if (!opp.com && !oppPlaced) {
        placeMap.textContent = "";

        // clone rotate button in order to remove listeners
        const rotateClone = rotateBtn.cloneNode(true);
        placerBg.replaceChild(rotateClone, rotateBtn);
        placementText.textContent = `${opp.playerName}: place your ships`;
        _drawOwnBoard(oppBoard, placeMap);
        makePlaceable(opp, oppBoard, 5, placeMap, 1, false);
        drawAllShips(oppBoard, placeMap);

        oppPlaced = true;
        startBtn.style.visibility = "hidden";
      } else if (!opp.com) {
        _drawBlind(player, gameboard, opp, oppBoard);
        placerBg.removeChild(startBtn);
      } else {
        oppBoard.placeRandom();
        drawBoard(player.map, gameboard);
        makeClickable(player, gameboard, opp, oppBoard);
        blind.style.visibility = "hidden";
        placerBg.style.visibility = "hidden";
        turnText.textContent = `${player.playerName}'s turn`;
        placerBg.removeChild(startBtn);
      }
    });

    _drawOwnBoard(gameboard, placeMap);
    makePlaceable(player, gameboard, 5, placeMap, 1, false);

    drawAllShips(gameboard, placeMap);
  }

  function drawShip(start, end, length, boardDiv) {
    const ship = document.createElement("div");
    ship.classList.add("ship");

    
    let height = 1;
    let width = 1;

    if (end[0] - start[0] > 0) {
      height = length * squareSize;
      width = squareSize;
    } else {
      width = length * squareSize;
      height = squareSize;
    }

    ship.style.height = `${height}vw`;
    ship.style.width = `${width}vw`;

    ship.style.bottom = `${squareSize * start[0]}vw`;
    ship.style.left = `${squareSize * start[1]}vw`;

    boardDiv.appendChild(ship);
  }

  function drawAllShips(board, boardDiv) {
    board.ships.forEach((ship) => {
      drawShip(ship.start, ship.end, ship.length, boardDiv);
    });
  }

  function _drawMap(playerMap) {
    playerMap
      .slice()
      .reverse()
      .forEach((row, index) => {
        const rowIndex = 9 - index;

        row.forEach((square, squareIndex) => {
          const colIndex = squareIndex % 10;

          const mapSquare = document.createElement("div");
          mapSquare.classList.add("map-square");

          mapSquare.setAttribute(
            "data-map-coord",
            `[${colIndex}, ${rowIndex}]`
          );

          if (square) {
            if (square === "hit") {
              mapSquare.classList.add("map-hit");
            } else if (square === "miss") {
              mapSquare.classList.add("map-miss");
            } else if (square === "sunk") {
              mapSquare.classList.add("map-sunk");
            }
          }

          map.appendChild(mapSquare);
        });
      });
  }

  function _drawOwnBoard(playerBoard, boardDiv) {
    playerBoard.board
      .slice()
      .reverse()
      .forEach((row, index) => {
        const rowIndex = 9 - index;

        row.forEach((square, squareIndex) => {
          const colIndex = squareIndex % 10;

          const boardSquare = document.createElement("div");
          boardSquare.classList.add("board-square");

          boardSquare.setAttribute(
            "data-board-coord",
            `[${colIndex}, ${rowIndex}]`
          );

          // check whether square is empty.
          // if not, add class to it
          if (square) {
            if (typeof square === "object") {
              if (square.isHit) {
                if (square.ship.isSunk()) {
                  boardSquare.classList.add("ship-sunk");
                } else {
                  boardSquare.classList.add("ship-hit");
                }
              } else {
                boardSquare.classList.add("ship-unhit");
              }
            } else if (square === "miss") {
              boardSquare.classList.add("board-miss");
            }
          }

          boardDiv.appendChild(boardSquare);
        });
      });
  }

  function drawBoard(playerMap, playerBoard) {
    map.textContent = "";
    ownBoard.textContent = "";

    _drawMap(playerMap);
    _drawOwnBoard(playerBoard, ownBoard);
    drawAllShips(playerBoard, ownBoard);
  }

  function _drawPassButton(player, playerBoard, opponent, opponentBoard) {
    const passButton = document.createElement("button");
    passButton.classList.add("pass-button");
    passButton.textContent = "Pass turn";

    info.appendChild(passButton);

    passButton.addEventListener("click", () => {
      if (!player.com) {
        _drawBlind(player, playerBoard, opponent, opponentBoard);
        passButton.remove();
      } else {
        passButton.remove();
        _writeTurn(player, false);
        setTimeout(() => {
          _passTurn(player, playerBoard, opponent, opponentBoard);
        }, 300);
      }
    });
  }

  function _drawBlind(player, playerBoard, opponent, opponentBoard) {
    blind.textContent = "";
    blind.style.visibility = "visible";

    const passText = document.createElement("p");
    passText.classList.add("pass-text");
    passText.textContent = `Pass the device to ${player.playerName}`;

    const turnButton = document.createElement("button");
    turnButton.textContent = "Begin Turn";

    blind.appendChild(passText);
    blind.appendChild(turnButton);

    turnButton.addEventListener("click", () => {
      _passTurn(player, playerBoard, opponent, opponentBoard);
      blind.style.visibility = "hidden";
    });
  }

  function _passTurn(player, playerBoard, opponent, opponentBoard) {
    if (player.com === false) {
      drawBoard(player.map, playerBoard);
      makeClickable(player, playerBoard, opponent, opponentBoard);
      _writeTurn(player, false);
    } else {
      const result = player.comMove(opponentBoard);
      drawBoard(opponent.map, opponentBoard);
      _writeTurn(opponent, false);

      if (result === "All ships have been sunk.") {
        _writeTurn(player, true);
      } else {
        makeClickable(opponent, opponentBoard, player, playerBoard);
      }
    }
  }

  function makeClickable(player, playerBoard, opponent, opponentBoard) {
    const mapSquares = document.querySelectorAll(".map-square");

    mapSquares.forEach((square) => {
      const coord = JSON.parse(square.getAttribute("data-map-coord")).reverse();

      square.addEventListener("click", () => {
        const result = player.attack(opponentBoard, coord);

        // redraw map in order to remove listeners
        if (result !== "Invalid attack: square has already been attacked") {
          moveText.textContent = result;

          if (result === "All ships have been sunk.") {
            drawBoard(player.map, playerBoard);
            _writeTurn(player, true);
          } else if (player.com === false) {
            drawBoard(player.map, playerBoard);
            _drawPassButton(opponent, opponentBoard, player, playerBoard);
          } else {
            _passTurn(opponent, opponentBoard, player, playerBoard);
          }
        } else {
          moveText.textContent = `${result}. Try a different square.`;
        }
      });
    });
  }

  return {
    drawBoard,
    makeClickable,
    drawShip,
    drawShipPlacer,
  };
})();

module.exports = update;


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__(/*! ./ships */ "./src/ships.js");

const gameboard = () => {
  const board = [];
  const ships = [];

  (function _createBoard() {
    for (let i = 0; i < 10; i += 1) {
      board[i] = new Array(10).fill(null);
    }
  })();

  // start = [left, bottom], end = [right, top]
  function placeShip(length, start, end) {
    const squares = [...start, ...end];
    for (let i = 0; i < squares.length; i += 1) {
      if (squares[i] > 10 || squares[i] < 0) {
        return "Invalid ship placement";
      }
    }

    const newShip = ship(length);
    ships.push({
      ship: newShip,
      length,
      start,
      end,
    });

    for (let row = start[0]; end[0] - row >= 0; row += 1) {
      for (let col = start[1]; end[1] - col >= 0; col += 1) {
        // The object containing information about the square must have a
        // shallow copy of the ship in order to track whether the ship has been sunk
        board[row][col] = {
          ship: newShip,
          isHit: false,
        };
      }
    }

    return "Ship placed";
  }

  // direction: 0 = vertical, 1 = horizontal
  function checkPathEmpty(main, secondary, length, direction) {
    for (let i = main; i < main + length; i += 1) {
      if (direction === 0) {
        if (board[i][secondary]) {
          return false;
        }
      } else if (board[secondary][i]) {
        return false;
      }
    }

    return true;
  }

  function _makeRandomPlacement(length) {
    const randomSquare = Math.floor(Math.random() * length);
    const secondary = Math.floor(Math.random() * 10);

    // 0 = vertical, 1 = horizontal
    const direction = Math.floor(Math.random() * 2);

    if (checkPathEmpty(randomSquare, secondary, length, direction)) {
      if (direction === 0) {
        placeShip(
          length,
          [randomSquare, secondary],
          [randomSquare + (length - 1), secondary]
        );
      } else {
        placeShip(
          length,
          [secondary, randomSquare],
          [secondary, randomSquare + (length - 1)]
        );
      }
    } else {
      _makeRandomPlacement(length);
    }
  }

  function placeRandom() {
    _makeRandomPlacement(5);
    _makeRandomPlacement(4);
    _makeRandomPlacement(3);
    _makeRandomPlacement(3);
    _makeRandomPlacement(2);
  }

  function _allSunk() {
    let sunk = true;

    board.forEach((row) => {
      row.forEach((square) => {
        if (square && typeof square === "object") {
          if (square.isHit === false) {
            sunk = false;
          }
        }
      });
    });

    return sunk;
  }

  function receiveAttack(coord) {
    const attackSquare = board[coord[0]][coord[1]];

    if (!attackSquare) {
      board[coord[0]][coord[1]] = "miss";

      return "Miss";
    }
    if (attackSquare === "miss") {
      return "Invalid attack: square has already been attacked";
    }

    if (typeof attackSquare === "object" && attackSquare.isHit) {
      return "Invalid attack: square has already been attacked";
    }

    attackSquare.isHit = true;

    const hitMsg = attackSquare.ship.hit();

    if (_allSunk()) {
      return "All ships have been sunk.";
    }

    return hitMsg;
  }

  return {
    board,
    placeShip,
    receiveAttack,
    placeRandom,
    ships,
    checkPathEmpty,
  };
};

module.exports = gameboard;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

const player = (com, name = "Player 1") => {
  const map = [];
  let playerName = name;

  if (com) {
    playerName = "Computer";
  }

  (function _createMap() {
    for (let i = 0; i < 10; i += 1) {
      map[i] = new Array(10).fill(null);
    }
  })();

  function _checkSunk(targetBoard, coord) {
    const targetSquare = targetBoard[coord[0]][coord[1]];

    if (targetSquare && typeof targetSquare === "object") {
      if (targetSquare.ship.isSunk()) {
        return true;
      }
    }

    return false;
  }

  function _updateSunken(targetBoard) {
    map.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (_checkSunk(targetBoard, [rowIndex, colIndex])) {
          map[rowIndex][colIndex] = "sunk";
        }
      });
    });
  }

  function attack(targetBoard, targetSquare) {
    const attackMsg = targetBoard.receiveAttack(targetSquare);

    if (attackMsg === "Miss") {
      map[targetSquare[0]][targetSquare[1]] = attackMsg.toLowerCase();
    } else if (attackMsg === "Hit") {
      map[targetSquare[0]][targetSquare[1]] = "hit";
    } else if (
      attackMsg === "You sunk my battleship" ||
      attackMsg === "All ships have been sunk."
    ) {
      map[targetSquare[0]][targetSquare[1]] = "sunk";
    }

    _updateSunken(targetBoard.board);

    return attackMsg;
  }

  // list of legal moves which is updated every time comMove is called
  const _legalMoves = (() => {
    const moveList = [];
    for (let row = 0; row < 10; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        moveList.push([row, col]);
      }
    }

    return moveList;
  })();

  function comMove(targetBoard) {
    // choose row and column of attacked square randomly

    const moveIndex = Math.floor(Math.random() * _legalMoves.length);
    const attackSquare = _legalMoves[moveIndex];
    _legalMoves.splice(moveIndex, 1);

    const result = attack(targetBoard, attackSquare);
    return result;
  }

  return {
    map,
    attack,
    comMove,
    com,
    playerName,
  };
};

module.exports = player;


/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((module) => {

const ship = (length) => {
  let _hits = 0;

  function isSunk() {
    if (_hits >= length) {
      return true;
    }

    return false;
  }

  function hit() {
    _hits += 1;

    if (isSunk()) {
      return "You sunk my battleship";
    }

    return "Hit";
  }

  return {
    hit,
    isSunk,
  };
};

module.exports = ship;


/***/ }),

/***/ "./src/fonts/PT_Sans_Narrow/PTSansNarrow-Bold.ttf":
/*!********************************************************!*\
  !*** ./src/fonts/PT_Sans_Narrow/PTSansNarrow-Bold.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6c0b55dfa0028e0768af.ttf";

/***/ }),

/***/ "./src/fonts/PT_Sans_Narrow/PTSansNarrow-Regular.ttf":
/*!***********************************************************!*\
  !*** ./src/fonts/PT_Sans_Narrow/PTSansNarrow-Regular.ttf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "68e86cce5b8c98f6305b.ttf";

/***/ }),

/***/ "./src/fonts/Rubik_Iso/RubikIso-Regular.ttf":
/*!**************************************************!*\
  !*** ./src/fonts/Rubik_Iso/RubikIso-Regular.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d5094e4572c98e06cb4c.ttf";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 			"main": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
const player = __webpack_require__(/*! ./player */ "./src/player.js");
const update = __webpack_require__(/*! ./DOMUpdate */ "./src/DOMUpdate.js");

const menu = document.querySelector(".menu");
const p1Name = document.querySelector("#p1-name");
const p2Name = document.querySelector("#p2-name");
const AIcheck = document.querySelector("#p2-com");
const startBtn = document.querySelector("#start-button");


AIcheck.addEventListener("click", () => {
  if (p2Name.classList.contains("name-disabled")) {
    p2Name.removeAttribute("disabled");
    p2Name.classList.remove("name-disabled");
    p2Name.setAttribute("placeholder", "Player 2");
  } else {
    p2Name.classList.add("name-disabled");
    p2Name.setAttribute("disabled", null);
    p2Name.setAttribute("placeholder", "Computer");
  }
});

startBtn.addEventListener("click", (e) => {
  e.preventDefault();

  menu.style.visibility = "hidden";

  let p1;
  let p2;

  const p1Board = gameboard();
  const p2Board = gameboard();

  if (!p1Name.value) {
    p1 = player(false, "Player 1");
  } else {
    p1 = player(false, p1Name.value);
  }

  if (AIcheck.checked) {
    p2 = player(true);
  } else if (!p2Name.value) {
    p2 = player(false, "Player 2");
  } else {
    p2 = player(false, p2Name.value);
  }

  update.drawShipPlacer(p1, p1Board, p2, p2Board);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDakpBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEMsd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRXJCLGtCQUFrQixtQkFBTyxDQUFDLHVDQUFhO0FBQ3ZDLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqQyxlQUFlLG1CQUFPLENBQUMsdUNBQWE7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTVVwZGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SdWJpa19Jc28vUnViaWtJc28tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BUX1NhbnNfTmFycm93L1BUU2Fuc05hcnJvdy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvUFRfU2Fuc19OYXJyb3cvUFRTYW5zTmFycm93LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNle1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpayBJc28nO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1BUIFNhbnMgTmFycm93JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2V7XFxuICBmb250LWZhbWlseTogJ1BUIFNhbnMgTmFycm93JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBib2xkO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXZpZXctc2l6ZTogY2FsYyg1MHZ3IC8gMyk7XFxuICAtLXNxdWFyZS1zaXplOiBjYWxjKHZhcigtLXZpZXctc2l6ZSkgLyAxMCk7XFxuICAtLXdhdGVyLWNvbG9yOiAjZTZlZWZiO1xcbiAgLS1ncmlkLWxpbmVzOiAwLjVweCBzb2xpZCByZ2IoMTA0LCAxMDQsIDEwNCk7XFxuICAtLW1pc3M6IHdoaXRlO1xcbiAgLS1oaXQ6IHJnYigyNTUsIDEzMywgMTMzKTtcXG4gIC0tZnJhbWUtd2lkdGg6IDYwdnc7XFxuICAtLWZyYW1lLWhlaWdodDogNzV2aDtcXG59XFxuXFxuYm9keXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgZm9udC1mYW1pbHk6ICdQVCBTYW5zIE5hcnJvdyc7XFxufVxcblxcbi5ib2FyZC13cmFwe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDoxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnJhbWV7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiB2YXIoLS1mcmFtZS1oZWlnaHQpO1xcbiAgd2lkdGg6IHZhcigtLWZyYW1lLXdpZHRoKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudSB7XFxuICBoZWlnaHQ6IHZhcigtLWZyYW1lLWhlaWdodCk7XFxuICB3aWR0aDogdmFyKC0tZnJhbWUtd2lkdGgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4udGl0bGV7XFxuICB3aWR0aDptaW4tY29udGVudDtcXG59XFxuXFxuLnRpdGxlLXRleHR7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpayBJc28nO1xcbiAgd2lkdGg6IDAgYXV0bztcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIGFuaW1hdGlvbjogdHlwaW5nIDEuNXMgc3RlcHMoMTUsIGVuZCk7XFxufVxcblxcbkBrZXlmcmFtZXMgdHlwaW5ne1xcbiAgZnJvbSB7d2lkdGg6IDB9XFxuICB0byB7d2lkdGg6IDEwMCV9XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2VsZWN0aW9uLWhvdmVyLWJhZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAxMDksIDEwOSk7XFxufVxcblxcbi5maWVsZC13cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGxheWVyLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmxpbmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wbGFjZXItYmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wbGFjZS1tYXAgPiAuc2VsZWN0aW9uLWhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDMsIDI1NSwgMTQzKTtcXG59XFxuXFxuLmluZm8ge1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB3aWR0aDogNzUlO1xcbiAgYm9yZGVyOiB2YXIoLS1ncmlkLWxpbmVzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYXAge1xcbiAgaGVpZ2h0OiB2YXIoLS12aWV3LXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXZpZXctc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWFwLXNxdWFyZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ncmlkLWxpbmVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm93bi1ib2FyZCB7XFxuICBoZWlnaHQ6IHZhcigtLXZpZXctc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tdmlldy1zaXplKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1zaXplKTtcXG4gIGJvcmRlcjogdmFyKC0tZ3JpZC1saW5lcyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC11bmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLnNoaXAtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NTY1O1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLmJvYXJkLW1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbi5tYXAtc3F1YXJlLm1hcC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWFwLXNxdWFyZS5tYXAtbWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLm1hcC1zcXVhcmUubWFwLXN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjU2NTtcXG59XFxuXFxuLnNoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDY5LCA2OSwgNjkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAwLjI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQWtEO0VBQ2xELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNENBQXlEO0VBQ3pELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2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ZmFjZXtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgSXNvJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL1J1YmlrX0lzby9SdWJpa0lzby1SZWd1bGFyLnR0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1BUIFNhbnMgTmFycm93JztcXG4gIHNyYzogdXJsKC4vZm9udHMvUFRfU2Fuc19OYXJyb3cvUFRTYW5zTmFycm93LVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2V7XFxuICBmb250LWZhbWlseTogJ1BUIFNhbnMgTmFycm93JztcXG4gIHNyYzogdXJsKC4vZm9udHMvUFRfU2Fuc19OYXJyb3cvUFRTYW5zTmFycm93LUJvbGQudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBib2xkO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXZpZXctc2l6ZTogY2FsYyg1MHZ3IC8gMyk7XFxuICAtLXNxdWFyZS1zaXplOiBjYWxjKHZhcigtLXZpZXctc2l6ZSkgLyAxMCk7XFxuICAtLXdhdGVyLWNvbG9yOiAjZTZlZWZiO1xcbiAgLS1ncmlkLWxpbmVzOiAwLjVweCBzb2xpZCByZ2IoMTA0LCAxMDQsIDEwNCk7XFxuICAtLW1pc3M6IHdoaXRlO1xcbiAgLS1oaXQ6IHJnYigyNTUsIDEzMywgMTMzKTtcXG4gIC0tZnJhbWUtd2lkdGg6IDYwdnc7XFxuICAtLWZyYW1lLWhlaWdodDogNzV2aDtcXG59XFxuXFxuYm9keXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgZm9udC1mYW1pbHk6ICdQVCBTYW5zIE5hcnJvdyc7XFxufVxcblxcbi5ib2FyZC13cmFwe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDoxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnJhbWV7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiB2YXIoLS1mcmFtZS1oZWlnaHQpO1xcbiAgd2lkdGg6IHZhcigtLWZyYW1lLXdpZHRoKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudSB7XFxuICBoZWlnaHQ6IHZhcigtLWZyYW1lLWhlaWdodCk7XFxuICB3aWR0aDogdmFyKC0tZnJhbWUtd2lkdGgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4udGl0bGV7XFxuICB3aWR0aDptaW4tY29udGVudDtcXG59XFxuXFxuLnRpdGxlLXRleHR7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpayBJc28nO1xcbiAgd2lkdGg6IDAgYXV0bztcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIGFuaW1hdGlvbjogdHlwaW5nIDEuNXMgc3RlcHMoMTUsIGVuZCk7XFxufVxcblxcbkBrZXlmcmFtZXMgdHlwaW5ne1xcbiAgZnJvbSB7d2lkdGg6IDB9XFxuICB0byB7d2lkdGg6IDEwMCV9XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2VsZWN0aW9uLWhvdmVyLWJhZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAxMDksIDEwOSk7XFxufVxcblxcbi5maWVsZC13cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGxheWVyLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmxpbmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wbGFjZXItYmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wbGFjZS1tYXAgPiAuc2VsZWN0aW9uLWhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDMsIDI1NSwgMTQzKTtcXG59XFxuXFxuLmluZm8ge1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB3aWR0aDogNzUlO1xcbiAgYm9yZGVyOiB2YXIoLS1ncmlkLWxpbmVzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYXAge1xcbiAgaGVpZ2h0OiB2YXIoLS12aWV3LXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXZpZXctc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWFwLXNxdWFyZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ncmlkLWxpbmVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm93bi1ib2FyZCB7XFxuICBoZWlnaHQ6IHZhcigtLXZpZXctc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tdmlldy1zaXplKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1zaXplKTtcXG4gIGJvcmRlcjogdmFyKC0tZ3JpZC1saW5lcyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC11bmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLnNoaXAtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NTY1O1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLmJvYXJkLW1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbi5tYXAtc3F1YXJlLm1hcC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWFwLXNxdWFyZS5tYXAtbWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLm1hcC1zcXVhcmUubWFwLXN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjU2NTtcXG59XFxuXFxuLnNoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDY5LCA2OSwgNjkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAwLjI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuY29uc3QgbWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXBcIik7XG5jb25zdCBvd25Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3duLWJvYXJkXCIpO1xuY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbmNvbnN0IHR1cm5UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dXJuLXRleHRcIik7XG5jb25zdCBtb3ZlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW92ZS10ZXh0XCIpO1xuY29uc3QgYmxpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsaW5kXCIpO1xuXG5cblxuY29uc3QgdXBkYXRlID0gKCgpID0+IHtcbiAgY29uc3Qgc3F1YXJlU2l6ZSA9IDUwIC8gMzA7XG5cbiAgZnVuY3Rpb24gX3dyaXRlVHVybihwbGF5ZXIsIG92ZXIpIHtcbiAgICBpZiAob3Zlcikge1xuICAgICAgdHVyblRleHQudGV4dENvbnRlbnQgPSBgR2FtZSBvdmVyLiAke3BsYXllci5wbGF5ZXJOYW1lfSB3aW5zLmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR1cm5UZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyLnBsYXllck5hbWV9J3MgdHVybmA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVBsYWNlYWJsZShcbiAgICBwbGF5ZXIsXG4gICAgYm9hcmQsXG4gICAgbGVuZ3RoLFxuICAgIGJvYXJkRGl2LFxuICAgIGRpcmVjdGlvbixcbiAgICByZXBlYXQgPSBmYWxzZVxuICApIHtcbiAgICBjb25zdCBjdXJyZW50Qm9hcmQgPSBib2FyZERpdjtcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5wbGFjZS1tYXA+ZGl2LmJvYXJkLXNxdWFyZVwiKTtcblxuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gSlNPTi5wYXJzZShzcXVhcmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1ib2FyZC1jb29yZFwiKSk7XG5cbiAgICAgICAgLy8gdXNpbmcgZGlyZWN0aW9uIHBhcmFtZXRlciB0byBkZXRlcm1pbmUgd2hpY2ggZGlyZWN0aW9uIHRvIHNob3cgc2hpcHNcbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5ID0gZGlyZWN0aW9uO1xuICAgICAgICBjb25zdCByb290SW5kZXggPSBNYXRoLmFicyhkaXJlY3Rpb24gLSAxKTtcblxuICAgICAgICBjb25zdCByb290ID0gY29vcmRbcm9vdEluZGV4XTtcbiAgICAgICAgY29uc3Qgc2hhZG93ID0gW107XG5cbiAgICAgICAgY29uc3QgZXh0ZW50ID0gcm9vdCArIGxlbmd0aDtcblxuICAgICAgICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZVwiKTtcbiAgICAgICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ0blwiKTtcblxuICAgICAgICByb3RhdGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGN1cnJlbnRCb2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgX2RyYXdPd25Cb2FyZChib2FyZCwgYm9hcmREaXYpO1xuXG4gICAgICAgICAgbWFrZVBsYWNlYWJsZShcbiAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgIGJvYXJkLFxuICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgYm9hcmREaXYsXG4gICAgICAgICAgICBNYXRoLmFicyhkaXJlY3Rpb24gLSAxKSxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICk7XG4gICAgICAgICAgZHJhd0FsbFNoaXBzKGJvYXJkLCBib2FyZERpdik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBleHRlbnQgPCAxMSAmJlxuICAgICAgICAgIGJvYXJkLmNoZWNrUGF0aEVtcHR5KHJvb3QsIGNvb3JkW3NlY29uZGFyeV0sIGxlbmd0aCwgZGlyZWN0aW9uKVxuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gcm9vdDsgaSA8IHJvb3QgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgbGV0IHNoYWRvd2VkO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgIHNoYWRvd2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtYm9hcmQtY29vcmQ9XCJbJHtpfSwgJHtjb29yZFsxXX1dXCJdYFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hhZG93ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1ib2FyZC1jb29yZD1cIlske2Nvb3JkWzBdfSwgJHtpfV1cIl1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNoYWRvdy5wdXNoKHNoYWRvd2VkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzaGFkb3cuZm9yRWFjaCgoc2hhZG93ZWQpID0+IHtcbiAgICAgICAgICAgIHNoYWRvd2VkLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Rpb24taG92ZXJcIik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2hhZG93LmZvckVhY2goKHNoYWRvd2VkKSA9PiB7XG4gICAgICAgICAgICAgIHNoYWRvd2VkLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3Rpb24taG92ZXJcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGVuZDtcblxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICBlbmQgPSBbY29vcmRbcm9vdEluZGV4XSArIChsZW5ndGggLSAxKSwgY29vcmRbc2Vjb25kYXJ5XV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmQgPSBbY29vcmRbc2Vjb25kYXJ5XSwgY29vcmRbcm9vdEluZGV4XSArIChsZW5ndGggLSAxKV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvb3JkLnJldmVyc2UoKTtcbiAgICAgICAgICAgIGVuZC5yZXZlcnNlKCk7XG5cbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChsZW5ndGgsIGNvb3JkLCBlbmQpO1xuXG4gICAgICAgICAgICBjdXJyZW50Qm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgX2RyYXdPd25Cb2FyZChib2FyZCwgYm9hcmREaXYpO1xuICAgICAgICAgICAgZHJhd0FsbFNoaXBzKGJvYXJkLCBib2FyZERpdik7XG5cbiAgICAgICAgICAgIGlmIChsZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgICAgbWFrZVBsYWNlYWJsZShwbGF5ZXIsIGJvYXJkLCA0LCBib2FyZERpdiwgZGlyZWN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICBtYWtlUGxhY2VhYmxlKHBsYXllciwgYm9hcmQsIDMsIGJvYXJkRGl2LCBkaXJlY3Rpb24sIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDMgJiYgcmVwZWF0KSB7XG4gICAgICAgICAgICAgIG1ha2VQbGFjZWFibGUocGxheWVyLCBib2FyZCwgMywgYm9hcmREaXYsIGRpcmVjdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDMgJiYgIXJlcGVhdCkge1xuICAgICAgICAgICAgICBtYWtlUGxhY2VhYmxlKHBsYXllciwgYm9hcmQsIDIsIGJvYXJkRGl2LCBkaXJlY3Rpb24sIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDIgJiYgcmVwZWF0KSB7XG4gICAgICAgICAgICAgIG1ha2VQbGFjZWFibGUocGxheWVyLCBib2FyZCwgMiwgYm9hcmREaXYsIGRpcmVjdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDIgJiYgIXJlcGVhdCkge1xuICAgICAgICAgICAgICByb3RhdGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gcm9vdDsgaSA8IDEwICYmIGkgPCByb290ICsgbGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgICAgICBsZXQgc2hhZG93ZWQ7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgc2hhZG93ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1ib2FyZC1jb29yZD1cIlske2l9LCAke2Nvb3JkWzFdfV1cIl1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGFkb3dlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWJvYXJkLWNvb3JkPVwiWyR7Y29vcmRbMF19LCAke2l9XVwiXWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hhZG93LnB1c2goc2hhZG93ZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNoYWRvdy5mb3JFYWNoKChzaGFkb3dlZCkgPT4ge1xuICAgICAgICAgICAgc2hhZG93ZWQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvbi1ob3Zlci1iYWRcIik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2hhZG93LmZvckVhY2goKHNoYWRvd2VkKSA9PiB7XG4gICAgICAgICAgICAgIHNoYWRvd2VkLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3Rpb24taG92ZXItYmFkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1NoaXBQbGFjZXIocGxheWVyLCBnYW1lYm9hcmQsIG9wcCwgb3BwQm9hcmQpIHtcbiAgICBibGluZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgYmxpbmQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgY29uc3QgcGxhY2VyQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYWNlckJnLmNsYXNzTGlzdC5hZGQoXCJwbGFjZXItYmdcIik7XG4gICAgcGxhY2VyQmcuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGJsaW5kLmFwcGVuZENoaWxkKHBsYWNlckJnKTtcblxuICAgIGNvbnN0IHBsYWNlbWVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwbGFjZW1lbnRUZXh0LmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnQtdGV4dFwiKTtcbiAgICBwbGFjZW1lbnRUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyLnBsYXllck5hbWV9OiBwbGFjZSB5b3VyIHNoaXBzYDtcbiAgICBwbGFjZXJCZy5hcHBlbmRDaGlsZChwbGFjZW1lbnRUZXh0KTtcblxuICAgIGNvbnN0IHBsYWNlTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGFjZU1hcC5jbGFzc0xpc3QuYWRkKFwib3duLWJvYXJkXCIpO1xuICAgIHBsYWNlTWFwLmNsYXNzTGlzdC5hZGQoXCJwbGFjZS1tYXBcIik7XG4gICAgcGxhY2VyQmcuYXBwZW5kQ2hpbGQocGxhY2VNYXApO1xuXG4gICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByb3RhdGVCdG4uY2xhc3NMaXN0LmFkZChcInJvdGF0ZVwiKTtcbiAgICByb3RhdGVCdG4udGV4dENvbnRlbnQgPSBcIlJvdGF0ZVwiO1xuXG4gICAgcGxhY2VyQmcuYXBwZW5kQ2hpbGQocm90YXRlQnRuKTtcblxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwic3RhcnQtYnRuXCIpO1xuICAgIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJFbmQgUGxhY2VtZW50c1wiO1xuICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXG4gICAgcGxhY2VyQmcuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuXG4gICAgbGV0IG9wcFBsYWNlZCA9IGZhbHNlO1xuXG4gICAgLy8gYnV0dG9uIHdpbGwgZWl0aGVyIHNldCB1cCB0aGUgc2hpcCBwbGFjZXIgZm9yIHAyIG9yIHN0YXJ0IHRoZSBnYW1lXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghb3BwLmNvbSAmJiAhb3BwUGxhY2VkKSB7XG4gICAgICAgIHBsYWNlTWFwLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICAvLyBjbG9uZSByb3RhdGUgYnV0dG9uIGluIG9yZGVyIHRvIHJlbW92ZSBsaXN0ZW5lcnNcbiAgICAgICAgY29uc3Qgcm90YXRlQ2xvbmUgPSByb3RhdGVCdG4uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBwbGFjZXJCZy5yZXBsYWNlQ2hpbGQocm90YXRlQ2xvbmUsIHJvdGF0ZUJ0bik7XG4gICAgICAgIHBsYWNlbWVudFRleHQudGV4dENvbnRlbnQgPSBgJHtvcHAucGxheWVyTmFtZX06IHBsYWNlIHlvdXIgc2hpcHNgO1xuICAgICAgICBfZHJhd093bkJvYXJkKG9wcEJvYXJkLCBwbGFjZU1hcCk7XG4gICAgICAgIG1ha2VQbGFjZWFibGUob3BwLCBvcHBCb2FyZCwgNSwgcGxhY2VNYXAsIDEsIGZhbHNlKTtcbiAgICAgICAgZHJhd0FsbFNoaXBzKG9wcEJvYXJkLCBwbGFjZU1hcCk7XG5cbiAgICAgICAgb3BwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB9IGVsc2UgaWYgKCFvcHAuY29tKSB7XG4gICAgICAgIF9kcmF3QmxpbmQocGxheWVyLCBnYW1lYm9hcmQsIG9wcCwgb3BwQm9hcmQpO1xuICAgICAgICBwbGFjZXJCZy5yZW1vdmVDaGlsZChzdGFydEJ0bik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHBCb2FyZC5wbGFjZVJhbmRvbSgpO1xuICAgICAgICBkcmF3Qm9hcmQocGxheWVyLm1hcCwgZ2FtZWJvYXJkKTtcbiAgICAgICAgbWFrZUNsaWNrYWJsZShwbGF5ZXIsIGdhbWVib2FyZCwgb3BwLCBvcHBCb2FyZCk7XG4gICAgICAgIGJsaW5kLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBwbGFjZXJCZy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdHVyblRleHQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIucGxheWVyTmFtZX0ncyB0dXJuYDtcbiAgICAgICAgcGxhY2VyQmcucmVtb3ZlQ2hpbGQoc3RhcnRCdG4pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RyYXdPd25Cb2FyZChnYW1lYm9hcmQsIHBsYWNlTWFwKTtcbiAgICBtYWtlUGxhY2VhYmxlKHBsYXllciwgZ2FtZWJvYXJkLCA1LCBwbGFjZU1hcCwgMSwgZmFsc2UpO1xuXG4gICAgZHJhd0FsbFNoaXBzKGdhbWVib2FyZCwgcGxhY2VNYXApO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1NoaXAoc3RhcnQsIGVuZCwgbGVuZ3RoLCBib2FyZERpdikge1xuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG5cbiAgICBcbiAgICBsZXQgaGVpZ2h0ID0gMTtcbiAgICBsZXQgd2lkdGggPSAxO1xuXG4gICAgaWYgKGVuZFswXSAtIHN0YXJ0WzBdID4gMCkge1xuICAgICAgaGVpZ2h0ID0gbGVuZ3RoICogc3F1YXJlU2l6ZTtcbiAgICAgIHdpZHRoID0gc3F1YXJlU2l6ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2lkdGggPSBsZW5ndGggKiBzcXVhcmVTaXplO1xuICAgICAgaGVpZ2h0ID0gc3F1YXJlU2l6ZTtcbiAgICB9XG5cbiAgICBzaGlwLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH12d2A7XG4gICAgc2hpcC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXZ3YDtcblxuICAgIHNoaXAuc3R5bGUuYm90dG9tID0gYCR7c3F1YXJlU2l6ZSAqIHN0YXJ0WzBdfXZ3YDtcbiAgICBzaGlwLnN0eWxlLmxlZnQgPSBgJHtzcXVhcmVTaXplICogc3RhcnRbMV19dndgO1xuXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3QWxsU2hpcHMoYm9hcmQsIGJvYXJkRGl2KSB7XG4gICAgYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgZHJhd1NoaXAoc2hpcC5zdGFydCwgc2hpcC5lbmQsIHNoaXAubGVuZ3RoLCBib2FyZERpdik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfZHJhd01hcChwbGF5ZXJNYXApIHtcbiAgICBwbGF5ZXJNYXBcbiAgICAgIC5zbGljZSgpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByb3dJbmRleCA9IDkgLSBpbmRleDtcblxuICAgICAgICByb3cuZm9yRWFjaCgoc3F1YXJlLCBzcXVhcmVJbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbEluZGV4ID0gc3F1YXJlSW5kZXggJSAxMDtcblxuICAgICAgICAgIGNvbnN0IG1hcFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFwU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtYXAtc3F1YXJlXCIpO1xuXG4gICAgICAgICAgbWFwU3F1YXJlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwiZGF0YS1tYXAtY29vcmRcIixcbiAgICAgICAgICAgIGBbJHtjb2xJbmRleH0sICR7cm93SW5kZXh9XWBcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHNxdWFyZSkge1xuICAgICAgICAgICAgaWYgKHNxdWFyZSA9PT0gXCJoaXRcIikge1xuICAgICAgICAgICAgICBtYXBTcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1hcC1oaXRcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICAgICAgbWFwU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtYXAtbWlzc1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlID09PSBcInN1bmtcIikge1xuICAgICAgICAgICAgICBtYXBTcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1hcC1zdW5rXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hcC5hcHBlbmRDaGlsZChtYXBTcXVhcmUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RyYXdPd25Cb2FyZChwbGF5ZXJCb2FyZCwgYm9hcmREaXYpIHtcbiAgICBwbGF5ZXJCb2FyZC5ib2FyZFxuICAgICAgLnNsaWNlKClcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gOSAtIGluZGV4O1xuXG4gICAgICAgIHJvdy5mb3JFYWNoKChzcXVhcmUsIHNxdWFyZUluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29sSW5kZXggPSBzcXVhcmVJbmRleCAlIDEwO1xuXG4gICAgICAgICAgY29uc3QgYm9hcmRTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGJvYXJkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1zcXVhcmVcIik7XG5cbiAgICAgICAgICBib2FyZFNxdWFyZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcImRhdGEtYm9hcmQtY29vcmRcIixcbiAgICAgICAgICAgIGBbJHtjb2xJbmRleH0sICR7cm93SW5kZXh9XWBcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy8gY2hlY2sgd2hldGhlciBzcXVhcmUgaXMgZW1wdHkuXG4gICAgICAgICAgLy8gaWYgbm90LCBhZGQgY2xhc3MgdG8gaXRcbiAgICAgICAgICBpZiAoc3F1YXJlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNxdWFyZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICBpZiAoc3F1YXJlLmlzSGl0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICBib2FyZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdW5rXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBib2FyZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1oaXRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvYXJkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXVuaGl0XCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICAgICAgYm9hcmRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImJvYXJkLW1pc3NcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoYm9hcmRTcXVhcmUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0JvYXJkKHBsYXllck1hcCwgcGxheWVyQm9hcmQpIHtcbiAgICBtYXAudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG93bkJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIF9kcmF3TWFwKHBsYXllck1hcCk7XG4gICAgX2RyYXdPd25Cb2FyZChwbGF5ZXJCb2FyZCwgb3duQm9hcmQpO1xuICAgIGRyYXdBbGxTaGlwcyhwbGF5ZXJCb2FyZCwgb3duQm9hcmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RyYXdQYXNzQnV0dG9uKHBsYXllciwgcGxheWVyQm9hcmQsIG9wcG9uZW50LCBvcHBvbmVudEJvYXJkKSB7XG4gICAgY29uc3QgcGFzc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcGFzc0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGFzcy1idXR0b25cIik7XG4gICAgcGFzc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiUGFzcyB0dXJuXCI7XG5cbiAgICBpbmZvLmFwcGVuZENoaWxkKHBhc3NCdXR0b24pO1xuXG4gICAgcGFzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFwbGF5ZXIuY29tKSB7XG4gICAgICAgIF9kcmF3QmxpbmQocGxheWVyLCBwbGF5ZXJCb2FyZCwgb3Bwb25lbnQsIG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICBwYXNzQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFzc0J1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgX3dyaXRlVHVybihwbGF5ZXIsIGZhbHNlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgX3Bhc3NUdXJuKHBsYXllciwgcGxheWVyQm9hcmQsIG9wcG9uZW50LCBvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kcmF3QmxpbmQocGxheWVyLCBwbGF5ZXJCb2FyZCwgb3Bwb25lbnQsIG9wcG9uZW50Qm9hcmQpIHtcbiAgICBibGluZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgYmxpbmQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgY29uc3QgcGFzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXNzVGV4dC5jbGFzc0xpc3QuYWRkKFwicGFzcy10ZXh0XCIpO1xuICAgIHBhc3NUZXh0LnRleHRDb250ZW50ID0gYFBhc3MgdGhlIGRldmljZSB0byAke3BsYXllci5wbGF5ZXJOYW1lfWA7XG5cbiAgICBjb25zdCB0dXJuQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0dXJuQnV0dG9uLnRleHRDb250ZW50ID0gXCJCZWdpbiBUdXJuXCI7XG5cbiAgICBibGluZC5hcHBlbmRDaGlsZChwYXNzVGV4dCk7XG4gICAgYmxpbmQuYXBwZW5kQ2hpbGQodHVybkJ1dHRvbik7XG5cbiAgICB0dXJuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBfcGFzc1R1cm4ocGxheWVyLCBwbGF5ZXJCb2FyZCwgb3Bwb25lbnQsIG9wcG9uZW50Qm9hcmQpO1xuICAgICAgYmxpbmQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfcGFzc1R1cm4ocGxheWVyLCBwbGF5ZXJCb2FyZCwgb3Bwb25lbnQsIG9wcG9uZW50Qm9hcmQpIHtcbiAgICBpZiAocGxheWVyLmNvbSA9PT0gZmFsc2UpIHtcbiAgICAgIGRyYXdCb2FyZChwbGF5ZXIubWFwLCBwbGF5ZXJCb2FyZCk7XG4gICAgICBtYWtlQ2xpY2thYmxlKHBsYXllciwgcGxheWVyQm9hcmQsIG9wcG9uZW50LCBvcHBvbmVudEJvYXJkKTtcbiAgICAgIF93cml0ZVR1cm4ocGxheWVyLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5jb21Nb3ZlKG9wcG9uZW50Qm9hcmQpO1xuICAgICAgZHJhd0JvYXJkKG9wcG9uZW50Lm1hcCwgb3Bwb25lbnRCb2FyZCk7XG4gICAgICBfd3JpdGVUdXJuKG9wcG9uZW50LCBmYWxzZSk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IFwiQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlwiKSB7XG4gICAgICAgIF93cml0ZVR1cm4ocGxheWVyLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ha2VDbGlja2FibGUob3Bwb25lbnQsIG9wcG9uZW50Qm9hcmQsIHBsYXllciwgcGxheWVyQm9hcmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VDbGlja2FibGUocGxheWVyLCBwbGF5ZXJCb2FyZCwgb3Bwb25lbnQsIG9wcG9uZW50Qm9hcmQpIHtcbiAgICBjb25zdCBtYXBTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYXAtc3F1YXJlXCIpO1xuXG4gICAgbWFwU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkID0gSlNPTi5wYXJzZShzcXVhcmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXAtY29vcmRcIikpLnJldmVyc2UoKTtcblxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5hdHRhY2sob3Bwb25lbnRCb2FyZCwgY29vcmQpO1xuXG4gICAgICAgIC8vIHJlZHJhdyBtYXAgaW4gb3JkZXIgdG8gcmVtb3ZlIGxpc3RlbmVyc1xuICAgICAgICBpZiAocmVzdWx0ICE9PSBcIkludmFsaWQgYXR0YWNrOiBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZFwiKSB7XG4gICAgICAgICAgbW92ZVRleHQudGV4dENvbnRlbnQgPSByZXN1bHQ7XG5cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBcIkFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cIikge1xuICAgICAgICAgICAgZHJhd0JvYXJkKHBsYXllci5tYXAsIHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgIF93cml0ZVR1cm4ocGxheWVyLCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5jb20gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkcmF3Qm9hcmQocGxheWVyLm1hcCwgcGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgX2RyYXdQYXNzQnV0dG9uKG9wcG9uZW50LCBvcHBvbmVudEJvYXJkLCBwbGF5ZXIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Bhc3NUdXJuKG9wcG9uZW50LCBvcHBvbmVudEJvYXJkLCBwbGF5ZXIsIHBsYXllckJvYXJkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW92ZVRleHQudGV4dENvbnRlbnQgPSBgJHtyZXN1bHR9LiBUcnkgYSBkaWZmZXJlbnQgc3F1YXJlLmA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkcmF3Qm9hcmQsXG4gICAgbWFrZUNsaWNrYWJsZSxcbiAgICBkcmF3U2hpcCxcbiAgICBkcmF3U2hpcFBsYWNlcixcbiAgfTtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXBkYXRlO1xuIiwiY29uc3Qgc2hpcCA9IHJlcXVpcmUoXCIuL3NoaXBzXCIpO1xuXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gW107XG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgKGZ1bmN0aW9uIF9jcmVhdGVCb2FyZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGJvYXJkW2ldID0gbmV3IEFycmF5KDEwKS5maWxsKG51bGwpO1xuICAgIH1cbiAgfSkoKTtcblxuICAvLyBzdGFydCA9IFtsZWZ0LCBib3R0b21dLCBlbmQgPSBbcmlnaHQsIHRvcF1cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKGxlbmd0aCwgc3RhcnQsIGVuZCkge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBbLi4uc3RhcnQsIC4uLmVuZF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc3F1YXJlc1tpXSA+IDEwIHx8IHNxdWFyZXNbaV0gPCAwKSB7XG4gICAgICAgIHJldHVybiBcIkludmFsaWQgc2hpcCBwbGFjZW1lbnRcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBuZXdTaGlwID0gc2hpcChsZW5ndGgpO1xuICAgIHNoaXBzLnB1c2goe1xuICAgICAgc2hpcDogbmV3U2hpcCxcbiAgICAgIGxlbmd0aCxcbiAgICAgIHN0YXJ0LFxuICAgICAgZW5kLFxuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgcm93ID0gc3RhcnRbMF07IGVuZFswXSAtIHJvdyA+PSAwOyByb3cgKz0gMSkge1xuICAgICAgZm9yIChsZXQgY29sID0gc3RhcnRbMV07IGVuZFsxXSAtIGNvbCA+PSAwOyBjb2wgKz0gMSkge1xuICAgICAgICAvLyBUaGUgb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNxdWFyZSBtdXN0IGhhdmUgYVxuICAgICAgICAvLyBzaGFsbG93IGNvcHkgb2YgdGhlIHNoaXAgaW4gb3JkZXIgdG8gdHJhY2sgd2hldGhlciB0aGUgc2hpcCBoYXMgYmVlbiBzdW5rXG4gICAgICAgIGJvYXJkW3Jvd11bY29sXSA9IHtcbiAgICAgICAgICBzaGlwOiBuZXdTaGlwLFxuICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gXCJTaGlwIHBsYWNlZFwiO1xuICB9XG5cbiAgLy8gZGlyZWN0aW9uOiAwID0gdmVydGljYWwsIDEgPSBob3Jpem9udGFsXG4gIGZ1bmN0aW9uIGNoZWNrUGF0aEVtcHR5KG1haW4sIHNlY29uZGFyeSwgbGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICBmb3IgKGxldCBpID0gbWFpbjsgaSA8IG1haW4gKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgICBpZiAoYm9hcmRbaV1bc2Vjb25kYXJ5XSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChib2FyZFtzZWNvbmRhcnldW2ldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9tYWtlUmFuZG9tUGxhY2VtZW50KGxlbmd0aCkge1xuICAgIGNvbnN0IHJhbmRvbVNxdWFyZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XG4gICAgY29uc3Qgc2Vjb25kYXJ5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgLy8gMCA9IHZlcnRpY2FsLCAxID0gaG9yaXpvbnRhbFxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgaWYgKGNoZWNrUGF0aEVtcHR5KHJhbmRvbVNxdWFyZSwgc2Vjb25kYXJ5LCBsZW5ndGgsIGRpcmVjdGlvbikpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgcGxhY2VTaGlwKFxuICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICBbcmFuZG9tU3F1YXJlLCBzZWNvbmRhcnldLFxuICAgICAgICAgIFtyYW5kb21TcXVhcmUgKyAobGVuZ3RoIC0gMSksIHNlY29uZGFyeV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlU2hpcChcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgW3NlY29uZGFyeSwgcmFuZG9tU3F1YXJlXSxcbiAgICAgICAgICBbc2Vjb25kYXJ5LCByYW5kb21TcXVhcmUgKyAobGVuZ3RoIC0gMSldXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF9tYWtlUmFuZG9tUGxhY2VtZW50KGxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VSYW5kb20oKSB7XG4gICAgX21ha2VSYW5kb21QbGFjZW1lbnQoNSk7XG4gICAgX21ha2VSYW5kb21QbGFjZW1lbnQoNCk7XG4gICAgX21ha2VSYW5kb21QbGFjZW1lbnQoMyk7XG4gICAgX21ha2VSYW5kb21QbGFjZW1lbnQoMyk7XG4gICAgX21ha2VSYW5kb21QbGFjZW1lbnQoMik7XG4gIH1cblxuICBmdW5jdGlvbiBfYWxsU3VuaygpIHtcbiAgICBsZXQgc3VuayA9IHRydWU7XG5cbiAgICBib2FyZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgaWYgKHNxdWFyZSAmJiB0eXBlb2Ygc3F1YXJlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaWYgKHNxdWFyZS5pc0hpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1bms7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgY29uc3QgYXR0YWNrU3F1YXJlID0gYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXTtcblxuICAgIGlmICghYXR0YWNrU3F1YXJlKSB7XG4gICAgICBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gXCJtaXNzXCI7XG5cbiAgICAgIHJldHVybiBcIk1pc3NcIjtcbiAgICB9XG4gICAgaWYgKGF0dGFja1NxdWFyZSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybiBcIkludmFsaWQgYXR0YWNrOiBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZFwiO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXR0YWNrU3F1YXJlID09PSBcIm9iamVjdFwiICYmIGF0dGFja1NxdWFyZS5pc0hpdCkge1xuICAgICAgcmV0dXJuIFwiSW52YWxpZCBhdHRhY2s6IHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkXCI7XG4gICAgfVxuXG4gICAgYXR0YWNrU3F1YXJlLmlzSGl0ID0gdHJ1ZTtcblxuICAgIGNvbnN0IGhpdE1zZyA9IGF0dGFja1NxdWFyZS5zaGlwLmhpdCgpO1xuXG4gICAgaWYgKF9hbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiBcIkFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gaGl0TXNnO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBwbGFjZVJhbmRvbSxcbiAgICBzaGlwcyxcbiAgICBjaGVja1BhdGhFbXB0eSxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkO1xuIiwiY29uc3QgcGxheWVyID0gKGNvbSwgbmFtZSA9IFwiUGxheWVyIDFcIikgPT4ge1xuICBjb25zdCBtYXAgPSBbXTtcbiAgbGV0IHBsYXllck5hbWUgPSBuYW1lO1xuXG4gIGlmIChjb20pIHtcbiAgICBwbGF5ZXJOYW1lID0gXCJDb21wdXRlclwiO1xuICB9XG5cbiAgKGZ1bmN0aW9uIF9jcmVhdGVNYXAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBtYXBbaV0gPSBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCk7XG4gICAgfVxuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIF9jaGVja1N1bmsodGFyZ2V0Qm9hcmQsIGNvb3JkKSB7XG4gICAgY29uc3QgdGFyZ2V0U3F1YXJlID0gdGFyZ2V0Qm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXTtcblxuICAgIGlmICh0YXJnZXRTcXVhcmUgJiYgdHlwZW9mIHRhcmdldFNxdWFyZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgaWYgKHRhcmdldFNxdWFyZS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF91cGRhdGVTdW5rZW4odGFyZ2V0Qm9hcmQpIHtcbiAgICBtYXAuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKF9jaGVja1N1bmsodGFyZ2V0Qm9hcmQsIFtyb3dJbmRleCwgY29sSW5kZXhdKSkge1xuICAgICAgICAgIG1hcFtyb3dJbmRleF1bY29sSW5kZXhdID0gXCJzdW5rXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNrKHRhcmdldEJvYXJkLCB0YXJnZXRTcXVhcmUpIHtcbiAgICBjb25zdCBhdHRhY2tNc2cgPSB0YXJnZXRCb2FyZC5yZWNlaXZlQXR0YWNrKHRhcmdldFNxdWFyZSk7XG5cbiAgICBpZiAoYXR0YWNrTXNnID09PSBcIk1pc3NcIikge1xuICAgICAgbWFwW3RhcmdldFNxdWFyZVswXV1bdGFyZ2V0U3F1YXJlWzFdXSA9IGF0dGFja01zZy50b0xvd2VyQ2FzZSgpO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrTXNnID09PSBcIkhpdFwiKSB7XG4gICAgICBtYXBbdGFyZ2V0U3F1YXJlWzBdXVt0YXJnZXRTcXVhcmVbMV1dID0gXCJoaXRcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgYXR0YWNrTXNnID09PSBcIllvdSBzdW5rIG15IGJhdHRsZXNoaXBcIiB8fFxuICAgICAgYXR0YWNrTXNnID09PSBcIkFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cIlxuICAgICkge1xuICAgICAgbWFwW3RhcmdldFNxdWFyZVswXV1bdGFyZ2V0U3F1YXJlWzFdXSA9IFwic3Vua1wiO1xuICAgIH1cblxuICAgIF91cGRhdGVTdW5rZW4odGFyZ2V0Qm9hcmQuYm9hcmQpO1xuXG4gICAgcmV0dXJuIGF0dGFja01zZztcbiAgfVxuXG4gIC8vIGxpc3Qgb2YgbGVnYWwgbW92ZXMgd2hpY2ggaXMgdXBkYXRlZCBldmVyeSB0aW1lIGNvbU1vdmUgaXMgY2FsbGVkXG4gIGNvbnN0IF9sZWdhbE1vdmVzID0gKCgpID0+IHtcbiAgICBjb25zdCBtb3ZlTGlzdCA9IFtdO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCArPSAxKSB7XG4gICAgICAgIG1vdmVMaXN0LnB1c2goW3JvdywgY29sXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmVMaXN0O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGNvbU1vdmUodGFyZ2V0Qm9hcmQpIHtcbiAgICAvLyBjaG9vc2Ugcm93IGFuZCBjb2x1bW4gb2YgYXR0YWNrZWQgc3F1YXJlIHJhbmRvbWx5XG5cbiAgICBjb25zdCBtb3ZlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfbGVnYWxNb3Zlcy5sZW5ndGgpO1xuICAgIGNvbnN0IGF0dGFja1NxdWFyZSA9IF9sZWdhbE1vdmVzW21vdmVJbmRleF07XG4gICAgX2xlZ2FsTW92ZXMuc3BsaWNlKG1vdmVJbmRleCwgMSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhdHRhY2sodGFyZ2V0Qm9hcmQsIGF0dGFja1NxdWFyZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFwLFxuICAgIGF0dGFjayxcbiAgICBjb21Nb3ZlLFxuICAgIGNvbSxcbiAgICBwbGF5ZXJOYW1lLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXI7XG4iLCJjb25zdCBzaGlwID0gKGxlbmd0aCkgPT4ge1xuICBsZXQgX2hpdHMgPSAwO1xuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBpZiAoX2hpdHMgPj0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgX2hpdHMgKz0gMTtcblxuICAgIGlmIChpc1N1bmsoKSkge1xuICAgICAgcmV0dXJuIFwiWW91IHN1bmsgbXkgYmF0dGxlc2hpcFwiO1xuICAgIH1cblxuICAgIHJldHVybiBcIkhpdFwiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGdhbWVib2FyZCA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcbmNvbnN0IHBsYXllciA9IHJlcXVpcmUoXCIuL3BsYXllclwiKTtcbmNvbnN0IHVwZGF0ZSA9IHJlcXVpcmUoXCIuL0RPTVVwZGF0ZVwiKTtcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbmNvbnN0IHAxTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDEtbmFtZVwiKTtcbmNvbnN0IHAyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDItbmFtZVwiKTtcbmNvbnN0IEFJY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AyLWNvbVwiKTtcbmNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydC1idXR0b25cIik7XG5cblxuQUljaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAocDJOYW1lLmNsYXNzTGlzdC5jb250YWlucyhcIm5hbWUtZGlzYWJsZWRcIikpIHtcbiAgICBwMk5hbWUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgcDJOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJuYW1lLWRpc2FibGVkXCIpO1xuICAgIHAyTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlBsYXllciAyXCIpO1xuICB9IGVsc2Uge1xuICAgIHAyTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZS1kaXNhYmxlZFwiKTtcbiAgICBwMk5hbWUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgbnVsbCk7XG4gICAgcDJOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiQ29tcHV0ZXJcIik7XG4gIH1cbn0pO1xuXG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIG1lbnUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgbGV0IHAxO1xuICBsZXQgcDI7XG5cbiAgY29uc3QgcDFCb2FyZCA9IGdhbWVib2FyZCgpO1xuICBjb25zdCBwMkJvYXJkID0gZ2FtZWJvYXJkKCk7XG5cbiAgaWYgKCFwMU5hbWUudmFsdWUpIHtcbiAgICBwMSA9IHBsYXllcihmYWxzZSwgXCJQbGF5ZXIgMVwiKTtcbiAgfSBlbHNlIHtcbiAgICBwMSA9IHBsYXllcihmYWxzZSwgcDFOYW1lLnZhbHVlKTtcbiAgfVxuXG4gIGlmIChBSWNoZWNrLmNoZWNrZWQpIHtcbiAgICBwMiA9IHBsYXllcih0cnVlKTtcbiAgfSBlbHNlIGlmICghcDJOYW1lLnZhbHVlKSB7XG4gICAgcDIgPSBwbGF5ZXIoZmFsc2UsIFwiUGxheWVyIDJcIik7XG4gIH0gZWxzZSB7XG4gICAgcDIgPSBwbGF5ZXIoZmFsc2UsIHAyTmFtZS52YWx1ZSk7XG4gIH1cblxuICB1cGRhdGUuZHJhd1NoaXBQbGFjZXIocDEsIHAxQm9hcmQsIHAyLCBwMkJvYXJkKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9