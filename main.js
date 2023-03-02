/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ":root {\n  --view-size: calc(100vw / 3);\n  --square-size: calc(var(--view-size) / 10);\n  --water-color: #e6eefb;\n  --grid-lines: 0.5px solid rgb(104, 104, 104);\n  --miss: white;\n  --hit: rgb(255, 133, 133);\n}\n\n.menu {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  background-color: #fff;\n  z-index: 100;\n}\n\n.board-square.selection-hover-bad {\n  background-color: rgb(246, 109, 109);\n}\n\n.field-wrap {\n  display: flex;\n  flex-direction: column;\n}\n\n.player-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.board {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  position: relative;\n}\n\n.blind {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n\n.placer-bg {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n\n.place-map > .selection-hover {\n  background-color: rgb(143, 255, 143);\n}\n\n.info {\n  height: var(--view-size);\n  width: calc(var(--view-size) * 0.5);\n  border: var(--grid-lines);\n  border-radius: 3px;\n}\n\n.map {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.own-board {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.board-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.board-square.ship-unhit {\n  background-color: var(--water-color);\n}\n\n.board-square.ship-hit {\n  background-color: red;\n}\n\n.board-square.ship-sunk {\n  background-color: #ff6565;\n}\n\n.board-square.board-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-hit {\n  background-color: red;\n}\n\n.map-square.map-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-sunk {\n  background-color: #ff6565;\n}\n\n.ship {\n  position: absolute;\n  border: 2px solid rgb(69, 69, 69);\n  background-color: rgba(50, 50, 50, 0.25);\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,4BAA4B;EAC5B,0CAA0C;EAC1C,sBAAsB;EACtB,4CAA4C;EAC5C,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,wBAAwB;EACxB,mCAAmC;EACnC,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,iCAAiC;EACjC,wCAAwC;EACxC,kBAAkB;EAClB,sBAAsB;AACxB",
            sourcesContent: [
              ":root {\n  --view-size: calc(100vw / 3);\n  --square-size: calc(var(--view-size) / 10);\n  --water-color: #e6eefb;\n  --grid-lines: 0.5px solid rgb(104, 104, 104);\n  --miss: white;\n  --hit: rgb(255, 133, 133);\n}\n\n.menu {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  background-color: #fff;\n  z-index: 100;\n}\n\n.board-square.selection-hover-bad {\n  background-color: rgb(246, 109, 109);\n}\n\n.field-wrap {\n  display: flex;\n  flex-direction: column;\n}\n\n.player-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.board {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  position: relative;\n}\n\n.blind {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n\n.placer-bg {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n\n.place-map > .selection-hover {\n  background-color: rgb(143, 255, 143);\n}\n\n.info {\n  height: var(--view-size);\n  width: calc(var(--view-size) * 0.5);\n  border: var(--grid-lines);\n  border-radius: 3px;\n}\n\n.map {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.own-board {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.board-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.board-square.ship-unhit {\n  background-color: var(--water-color);\n}\n\n.board-square.ship-hit {\n  background-color: red;\n}\n\n.board-square.ship-sunk {\n  background-color: #ff6565;\n}\n\n.board-square.board-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-hit {\n  background-color: red;\n}\n\n.map-square.map-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-sunk {\n  background-color: #ff6565;\n}\n\n.ship {\n  position: absolute;\n  border: 2px solid rgb(69, 69, 69);\n  background-color: rgba(50, 50, 50, 0.25);\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        "use strict";

        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }

              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        "use strict";

        var memo = {};
        /* istanbul ignore next  */

        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }

          target.appendChild(style);
        }

        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        "use strict";

        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }

        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";

        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }

        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
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
            },
          };
        }

        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/DOMUpdate.js":
      /*!**************************!*\
  !*** ./src/DOMUpdate.js ***!
  \**************************/
      /***/ (module) => {
        /* eslint-disable no-use-before-define */
        const map = document.querySelector(".map");
        const ownBoard = document.querySelector(".own-board");
        const info = document.querySelector(".info");
        const turnText = document.querySelector(".turn-text");
        const moveText = document.querySelector(".move-text");
        const blind = document.querySelector(".blind");

        const update = (() => {
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
            const squares = document.querySelectorAll(
              "div.place-map>div.board-square"
            );

            squares.forEach((square) => {
              square.addEventListener("mouseover", () => {
                const coord = JSON.parse(
                  square.getAttribute("data-board-coord")
                );

                // using direction parameter to determine which direction to show ships
                const secondary = direction;
                const rootIndex = Math.abs(direction - 1);

                const root = coord[rootIndex];
                const shadow = [];

                const extent = root + length;

                const rotateBtn = document.querySelector(".rotate");
                const startBtn = document.querySelector(".start-btn");

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
                  board.checkPathEmpty(
                    root,
                    coord[secondary],
                    length,
                    direction
                  )
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
                      makePlaceable(
                        player,
                        board,
                        4,
                        boardDiv,
                        direction,
                        false
                      );
                    } else if (length === 4) {
                      makePlaceable(
                        player,
                        board,
                        3,
                        boardDiv,
                        direction,
                        true
                      );
                    } else if (length === 3 && repeat) {
                      makePlaceable(
                        player,
                        board,
                        3,
                        boardDiv,
                        direction,
                        false
                      );
                    } else if (length === 3 && !repeat) {
                      makePlaceable(
                        player,
                        board,
                        2,
                        boardDiv,
                        direction,
                        true
                      );
                    } else if (length === 2 && repeat) {
                      makePlaceable(
                        player,
                        board,
                        2,
                        boardDiv,
                        direction,
                        false
                      );
                    } else if (length === 2 && !repeat) {
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

                _drawOwnBoard(oppBoard, placeMap);
                makePlaceable(opp, oppBoard, 5, placeMap, 1, false);
                drawAllShips(oppBoard, placeMap);
                oppPlaced = true;
              } else if (!opp.com) {
                _drawBlind(player, gameboard, opp, oppBoard);
              } else {
                oppBoard.placeRandom();
                drawBoard(player.map, gameboard);
                makeClickable(player, gameboard, opp, oppBoard);
                blind.style.visibility = "hidden";
                placerBg.style.visibility = "hidden";
                turnText.textContent = `${player.playerName}'s turn`;
              }
            });

            _drawOwnBoard(gameboard, placeMap);
            makePlaceable(player, gameboard, 5, placeMap, 1, false);

            drawAllShips(gameboard, placeMap);
          }

          function drawShip(start, end, length, boardDiv) {
            const ship = document.createElement("div");
            ship.classList.add("ship");

            const squareSize = 100 / 30;
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

          function _drawPassButton(
            player,
            playerBoard,
            opponent,
            opponentBoard
          ) {
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
              const coord = JSON.parse(
                square.getAttribute("data-map-coord")
              ).reverse();

              square.addEventListener("click", () => {
                const result = player.attack(opponentBoard, coord);

                // redraw map in order to remove listeners
                if (
                  result !== "Invalid attack: square has already been attacked"
                ) {
                  moveText.textContent = result;

                  if (result === "All ships have been sunk.") {
                    drawBoard(player.map, playerBoard);
                    _writeTurn(player, true);
                  } else if (player.com === false) {
                    drawBoard(player.map, playerBoard);
                    _drawPassButton(
                      opponent,
                      opponentBoard,
                      player,
                      playerBoard
                    );
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

        /***/
      },

    /***/ "./src/gameboard.js":
      /*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
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

        /***/
      },

    /***/ "./src/player.js":
      /*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/ships.js":
      /*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
      /***/ (module) => {
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

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
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
    /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./style.css */ "./src/style.css");

    const gameboard = __webpack_require__(
      /*! ./gameboard */ "./src/gameboard.js"
    );
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

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET01VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS12aWV3LXNpemU6IGNhbGMoMTAwdncgLyAzKTtcXG4gIC0tc3F1YXJlLXNpemU6IGNhbGModmFyKC0tdmlldy1zaXplKSAvIDEwKTtcXG4gIC0td2F0ZXItY29sb3I6ICNlNmVlZmI7XFxuICAtLWdyaWQtbGluZXM6IDAuNXB4IHNvbGlkIHJnYigxMDQsIDEwNCwgMTA0KTtcXG4gIC0tbWlzczogd2hpdGU7XFxuICAtLWhpdDogcmdiKDI1NSwgMTMzLCAxMzMpO1xcbn1cXG5cXG4ubWVudSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLnNlbGVjdGlvbi1ob3Zlci1iYWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMTA5LCAxMDkpO1xcbn1cXG5cXG4uZmllbGQtd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBsYXllci1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ibGluZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnBsYWNlci1iZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnBsYWNlLW1hcCA+IC5zZWxlY3Rpb24taG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MywgMjU1LCAxNDMpO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBoZWlnaHQ6IHZhcigtLXZpZXctc2l6ZSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS12aWV3LXNpemUpICogMC41KTtcXG4gIGJvcmRlcjogdmFyKC0tZ3JpZC1saW5lcyk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5tYXAge1xcbiAgaGVpZ2h0OiB2YXIoLS12aWV3LXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXZpZXctc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWFwLXNxdWFyZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ncmlkLWxpbmVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm93bi1ib2FyZCB7XFxuICBoZWlnaHQ6IHZhcigtLXZpZXctc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tdmlldy1zaXplKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1zaXplKTtcXG4gIGJvcmRlcjogdmFyKC0tZ3JpZC1saW5lcyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC11bmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLnNoaXAtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NTY1O1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLmJvYXJkLW1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbi5tYXAtc3F1YXJlLm1hcC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWFwLXNxdWFyZS5tYXAtbWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLm1hcC1zcXVhcmUubWFwLXN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjU2NTtcXG59XFxuXFxuLnNoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDY5LCA2OSwgNjkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAwLjI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsMENBQTBDO0VBQzFDLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7RUFDNUMsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQ0FBbUM7RUFDbkMseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS12aWV3LXNpemU6IGNhbGMoMTAwdncgLyAzKTtcXG4gIC0tc3F1YXJlLXNpemU6IGNhbGModmFyKC0tdmlldy1zaXplKSAvIDEwKTtcXG4gIC0td2F0ZXItY29sb3I6ICNlNmVlZmI7XFxuICAtLWdyaWQtbGluZXM6IDAuNXB4IHNvbGlkIHJnYigxMDQsIDEwNCwgMTA0KTtcXG4gIC0tbWlzczogd2hpdGU7XFxuICAtLWhpdDogcmdiKDI1NSwgMTMzLCAxMzMpO1xcbn1cXG5cXG4ubWVudSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLnNlbGVjdGlvbi1ob3Zlci1iYWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMTA5LCAxMDkpO1xcbn1cXG5cXG4uZmllbGQtd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBsYXllci1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ibGluZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnBsYWNlci1iZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnBsYWNlLW1hcCA+IC5zZWxlY3Rpb24taG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MywgMjU1LCAxNDMpO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBoZWlnaHQ6IHZhcigtLXZpZXctc2l6ZSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS12aWV3LXNpemUpICogMC41KTtcXG4gIGJvcmRlcjogdmFyKC0tZ3JpZC1saW5lcyk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5tYXAge1xcbiAgaGVpZ2h0OiB2YXIoLS12aWV3LXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXZpZXctc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWFwLXNxdWFyZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ncmlkLWxpbmVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm93bi1ib2FyZCB7XFxuICBoZWlnaHQ6IHZhcigtLXZpZXctc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tdmlldy1zaXplKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1zaXplKTtcXG4gIGJvcmRlcjogdmFyKC0tZ3JpZC1saW5lcyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC11bmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLnNoaXAtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NTY1O1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLmJvYXJkLW1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbi5tYXAtc3F1YXJlLm1hcC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWFwLXNxdWFyZS5tYXAtbWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLm1hcC1zcXVhcmUubWFwLXN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjU2NTtcXG59XFxuXFxuLnNoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDY5LCA2OSwgNjkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAwLjI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5jb25zdCBtYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hcFwiKTtcbmNvbnN0IG93bkJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd24tYm9hcmRcIik7XG5jb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuY29uc3QgdHVyblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR1cm4tdGV4dFwiKTtcbmNvbnN0IG1vdmVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3ZlLXRleHRcIik7XG5jb25zdCBibGluZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxpbmRcIik7XG5cbmNvbnN0IHVwZGF0ZSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIF93cml0ZVR1cm4ocGxheWVyLCBvdmVyKSB7XG4gICAgaWYgKG92ZXIpIHtcbiAgICAgIHR1cm5UZXh0LnRleHRDb250ZW50ID0gYEdhbWUgb3Zlci4gJHtwbGF5ZXIucGxheWVyTmFtZX0gd2lucy5gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0dXJuVGV4dC50ZXh0Q29udGVudCA9IGAke3BsYXllci5wbGF5ZXJOYW1lfSdzIHR1cm5gO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VQbGFjZWFibGUoXG4gICAgcGxheWVyLFxuICAgIGJvYXJkLFxuICAgIGxlbmd0aCxcbiAgICBib2FyZERpdixcbiAgICBkaXJlY3Rpb24sXG4gICAgcmVwZWF0ID0gZmFsc2VcbiAgKSB7XG4gICAgY29uc3QgY3VycmVudEJvYXJkID0gYm9hcmREaXY7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYucGxhY2UtbWFwPmRpdi5ib2FyZC1zcXVhcmVcIik7XG5cbiAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZCA9IEpTT04ucGFyc2Uoc3F1YXJlLmdldEF0dHJpYnV0ZShcImRhdGEtYm9hcmQtY29vcmRcIikpO1xuXG4gICAgICAgIC8vIHVzaW5nIGRpcmVjdGlvbiBwYXJhbWV0ZXIgdG8gZGV0ZXJtaW5lIHdoaWNoIGRpcmVjdGlvbiB0byBzaG93IHNoaXBzXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeSA9IGRpcmVjdGlvbjtcbiAgICAgICAgY29uc3Qgcm9vdEluZGV4ID0gTWF0aC5hYnMoZGlyZWN0aW9uIC0gMSk7XG5cbiAgICAgICAgY29uc3Qgcm9vdCA9IGNvb3JkW3Jvb3RJbmRleF07XG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGV4dGVudCA9IHJvb3QgKyBsZW5ndGg7XG5cbiAgICAgICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGVcIik7XG4gICAgICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idG5cIik7XG5cbiAgICAgICAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgY3VycmVudEJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICBfZHJhd093bkJvYXJkKGJvYXJkLCBib2FyZERpdik7XG5cbiAgICAgICAgICBtYWtlUGxhY2VhYmxlKFxuICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgYm9hcmQsXG4gICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICBib2FyZERpdixcbiAgICAgICAgICAgIE1hdGguYWJzKGRpcmVjdGlvbiAtIDEpLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgKTtcbiAgICAgICAgICBkcmF3QWxsU2hpcHMoYm9hcmQsIGJvYXJkRGl2KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGV4dGVudCA8IDExICYmXG4gICAgICAgICAgYm9hcmQuY2hlY2tQYXRoRW1wdHkocm9vdCwgY29vcmRbc2Vjb25kYXJ5XSwgbGVuZ3RoLCBkaXJlY3Rpb24pXG4gICAgICAgICkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSByb290OyBpIDwgcm9vdCArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBsZXQgc2hhZG93ZWQ7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgc2hhZG93ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1ib2FyZC1jb29yZD1cIlske2l9LCAke2Nvb3JkWzFdfV1cIl1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGFkb3dlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWJvYXJkLWNvb3JkPVwiWyR7Y29vcmRbMF19LCAke2l9XVwiXWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hhZG93LnB1c2goc2hhZG93ZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNoYWRvdy5mb3JFYWNoKChzaGFkb3dlZCkgPT4ge1xuICAgICAgICAgICAgc2hhZG93ZWQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvbi1ob3ZlclwiKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGFkb3cuZm9yRWFjaCgoc2hhZG93ZWQpID0+IHtcbiAgICAgICAgICAgICAgc2hhZG93ZWQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGlvbi1ob3ZlclwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZW5kO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgIGVuZCA9IFtjb29yZFtyb290SW5kZXhdICsgKGxlbmd0aCAtIDEpLCBjb29yZFtzZWNvbmRhcnldXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVuZCA9IFtjb29yZFtzZWNvbmRhcnldLCBjb29yZFtyb290SW5kZXhdICsgKGxlbmd0aCAtIDEpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29vcmQucmV2ZXJzZSgpO1xuICAgICAgICAgICAgZW5kLnJldmVyc2UoKTtcblxuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKGxlbmd0aCwgY29vcmQsIGVuZCk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRCb2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBfZHJhd093bkJvYXJkKGJvYXJkLCBib2FyZERpdik7XG4gICAgICAgICAgICBkcmF3QWxsU2hpcHMoYm9hcmQsIGJvYXJkRGl2KTtcblxuICAgICAgICAgICAgaWYgKGxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgICBtYWtlUGxhY2VhYmxlKHBsYXllciwgYm9hcmQsIDQsIGJvYXJkRGl2LCBkaXJlY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgIG1ha2VQbGFjZWFibGUocGxheWVyLCBib2FyZCwgMywgYm9hcmREaXYsIGRpcmVjdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMyAmJiByZXBlYXQpIHtcbiAgICAgICAgICAgICAgbWFrZVBsYWNlYWJsZShwbGF5ZXIsIGJvYXJkLCAzLCBib2FyZERpdiwgZGlyZWN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMyAmJiAhcmVwZWF0KSB7XG4gICAgICAgICAgICAgIG1ha2VQbGFjZWFibGUocGxheWVyLCBib2FyZCwgMiwgYm9hcmREaXYsIGRpcmVjdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMiAmJiByZXBlYXQpIHtcbiAgICAgICAgICAgICAgbWFrZVBsYWNlYWJsZShwbGF5ZXIsIGJvYXJkLCAyLCBib2FyZERpdiwgZGlyZWN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMiAmJiAhcmVwZWF0KSB7XG4gICAgICAgICAgICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gcm9vdDsgaSA8IDEwICYmIGkgPCByb290ICsgbGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgICAgICBsZXQgc2hhZG93ZWQ7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgc2hhZG93ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1ib2FyZC1jb29yZD1cIlske2l9LCAke2Nvb3JkWzFdfV1cIl1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGFkb3dlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWJvYXJkLWNvb3JkPVwiWyR7Y29vcmRbMF19LCAke2l9XVwiXWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hhZG93LnB1c2goc2hhZG93ZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNoYWRvdy5mb3JFYWNoKChzaGFkb3dlZCkgPT4ge1xuICAgICAgICAgICAgc2hhZG93ZWQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvbi1ob3Zlci1iYWRcIik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2hhZG93LmZvckVhY2goKHNoYWRvd2VkKSA9PiB7XG4gICAgICAgICAgICAgIHNoYWRvd2VkLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3Rpb24taG92ZXItYmFkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1NoaXBQbGFjZXIocGxheWVyLCBnYW1lYm9hcmQsIG9wcCwgb3BwQm9hcmQpIHtcbiAgICBibGluZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgYmxpbmQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgY29uc3QgcGxhY2VyQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYWNlckJnLmNsYXNzTGlzdC5hZGQoXCJwbGFjZXItYmdcIik7XG4gICAgcGxhY2VyQmcuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGJsaW5kLmFwcGVuZENoaWxkKHBsYWNlckJnKTtcblxuICAgIGNvbnN0IHBsYWNlbWVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwbGFjZW1lbnRUZXh0LmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnQtdGV4dFwiKTtcbiAgICBwbGFjZW1lbnRUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyLnBsYXllck5hbWV9OiBwbGFjZSB5b3VyIHNoaXBzYDtcbiAgICBwbGFjZXJCZy5hcHBlbmRDaGlsZChwbGFjZW1lbnRUZXh0KTtcblxuICAgIGNvbnN0IHBsYWNlTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGFjZU1hcC5jbGFzc0xpc3QuYWRkKFwib3duLWJvYXJkXCIpO1xuICAgIHBsYWNlTWFwLmNsYXNzTGlzdC5hZGQoXCJwbGFjZS1tYXBcIik7XG4gICAgcGxhY2VyQmcuYXBwZW5kQ2hpbGQocGxhY2VNYXApO1xuXG4gICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByb3RhdGVCdG4uY2xhc3NMaXN0LmFkZChcInJvdGF0ZVwiKTtcbiAgICByb3RhdGVCdG4udGV4dENvbnRlbnQgPSBcIlJvdGF0ZVwiO1xuXG4gICAgcGxhY2VyQmcuYXBwZW5kQ2hpbGQocm90YXRlQnRuKTtcblxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwic3RhcnQtYnRuXCIpO1xuICAgIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJFbmQgUGxhY2VtZW50c1wiO1xuICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXG4gICAgcGxhY2VyQmcuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuXG4gICAgbGV0IG9wcFBsYWNlZCA9IGZhbHNlO1xuXG4gICAgLy8gYnV0dG9uIHdpbGwgZWl0aGVyIHNldCB1cCB0aGUgc2hpcCBwbGFjZXIgZm9yIHAyIG9yIHN0YXJ0IHRoZSBnYW1lXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghb3BwLmNvbSAmJiAhb3BwUGxhY2VkKSB7XG4gICAgICAgIHBsYWNlTWFwLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICAvLyBjbG9uZSByb3RhdGUgYnV0dG9uIGluIG9yZGVyIHRvIHJlbW92ZSBsaXN0ZW5lcnNcbiAgICAgICAgY29uc3Qgcm90YXRlQ2xvbmUgPSByb3RhdGVCdG4uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBwbGFjZXJCZy5yZXBsYWNlQ2hpbGQocm90YXRlQ2xvbmUsIHJvdGF0ZUJ0bik7XG5cbiAgICAgICAgX2RyYXdPd25Cb2FyZChvcHBCb2FyZCwgcGxhY2VNYXApO1xuICAgICAgICBtYWtlUGxhY2VhYmxlKG9wcCwgb3BwQm9hcmQsIDUsIHBsYWNlTWFwLCAxLCBmYWxzZSk7XG4gICAgICAgIGRyYXdBbGxTaGlwcyhvcHBCb2FyZCwgcGxhY2VNYXApO1xuICAgICAgICBvcHBQbGFjZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICghb3BwLmNvbSkge1xuICAgICAgICBfZHJhd0JsaW5kKHBsYXllciwgZ2FtZWJvYXJkLCBvcHAsIG9wcEJvYXJkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wcEJvYXJkLnBsYWNlUmFuZG9tKCk7XG4gICAgICAgIGRyYXdCb2FyZChwbGF5ZXIubWFwLCBnYW1lYm9hcmQpO1xuICAgICAgICBtYWtlQ2xpY2thYmxlKHBsYXllciwgZ2FtZWJvYXJkLCBvcHAsIG9wcEJvYXJkKTtcbiAgICAgICAgYmxpbmQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHBsYWNlckJnLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB0dXJuVGV4dC50ZXh0Q29udGVudCA9IGAke3BsYXllci5wbGF5ZXJOYW1lfSdzIHR1cm5gO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RyYXdPd25Cb2FyZChnYW1lYm9hcmQsIHBsYWNlTWFwKTtcbiAgICBtYWtlUGxhY2VhYmxlKHBsYXllciwgZ2FtZWJvYXJkLCA1LCBwbGFjZU1hcCwgMSwgZmFsc2UpO1xuXG4gICAgZHJhd0FsbFNoaXBzKGdhbWVib2FyZCwgcGxhY2VNYXApO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1NoaXAoc3RhcnQsIGVuZCwgbGVuZ3RoLCBib2FyZERpdikge1xuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG5cbiAgICBjb25zdCBzcXVhcmVTaXplID0gMTAwIC8gMzA7XG4gICAgbGV0IGhlaWdodCA9IDE7XG4gICAgbGV0IHdpZHRoID0gMTtcblxuICAgIGlmIChlbmRbMF0gLSBzdGFydFswXSA+IDApIHtcbiAgICAgIGhlaWdodCA9IGxlbmd0aCAqIHNxdWFyZVNpemU7XG4gICAgICB3aWR0aCA9IHNxdWFyZVNpemU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoID0gbGVuZ3RoICogc3F1YXJlU2l6ZTtcbiAgICAgIGhlaWdodCA9IHNxdWFyZVNpemU7XG4gICAgfVxuXG4gICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9dndgO1xuICAgIHNoaXAuc3R5bGUud2lkdGggPSBgJHt3aWR0aH12d2A7XG5cbiAgICBzaGlwLnN0eWxlLmJvdHRvbSA9IGAke3NxdWFyZVNpemUgKiBzdGFydFswXX12d2A7XG4gICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7c3F1YXJlU2l6ZSAqIHN0YXJ0WzFdfXZ3YDtcblxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKHNoaXApO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0FsbFNoaXBzKGJvYXJkLCBib2FyZERpdikge1xuICAgIGJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGRyYXdTaGlwKHNoaXAuc3RhcnQsIHNoaXAuZW5kLCBzaGlwLmxlbmd0aCwgYm9hcmREaXYpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RyYXdNYXAocGxheWVyTWFwKSB7XG4gICAgcGxheWVyTWFwXG4gICAgICAuc2xpY2UoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSA5IC0gaW5kZXg7XG5cbiAgICAgICAgcm93LmZvckVhY2goKHNxdWFyZSwgc3F1YXJlSW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2xJbmRleCA9IHNxdWFyZUluZGV4ICUgMTA7XG5cbiAgICAgICAgICBjb25zdCBtYXBTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWFwLXNxdWFyZVwiKTtcblxuICAgICAgICAgIG1hcFNxdWFyZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcImRhdGEtbWFwLWNvb3JkXCIsXG4gICAgICAgICAgICBgWyR7Y29sSW5kZXh9LCAke3Jvd0luZGV4fV1gXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChzcXVhcmUpIHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgICAgbWFwU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtYXAtaGl0XCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzcXVhcmUgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICAgIG1hcFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWFwLW1pc3NcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZSA9PT0gXCJzdW5rXCIpIHtcbiAgICAgICAgICAgICAgbWFwU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtYXAtc3Vua1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXAuYXBwZW5kQ2hpbGQobWFwU3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kcmF3T3duQm9hcmQocGxheWVyQm9hcmQsIGJvYXJkRGl2KSB7XG4gICAgcGxheWVyQm9hcmQuYm9hcmRcbiAgICAgIC5zbGljZSgpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByb3dJbmRleCA9IDkgLSBpbmRleDtcblxuICAgICAgICByb3cuZm9yRWFjaCgoc3F1YXJlLCBzcXVhcmVJbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbEluZGV4ID0gc3F1YXJlSW5kZXggJSAxMDtcblxuICAgICAgICAgIGNvbnN0IGJvYXJkU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBib2FyZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtc3F1YXJlXCIpO1xuXG4gICAgICAgICAgYm9hcmRTcXVhcmUuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJkYXRhLWJvYXJkLWNvb3JkXCIsXG4gICAgICAgICAgICBgWyR7Y29sSW5kZXh9LCAke3Jvd0luZGV4fV1gXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgc3F1YXJlIGlzIGVtcHR5LlxuICAgICAgICAgIC8vIGlmIG5vdCwgYWRkIGNsYXNzIHRvIGl0XG4gICAgICAgICAgaWYgKHNxdWFyZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcXVhcmUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZS5pc0hpdCkge1xuICAgICAgICAgICAgICAgIGlmIChzcXVhcmUuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgYm9hcmRTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXAtc3Vua1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYm9hcmRTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXAtaGl0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib2FyZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcC11bmhpdFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzcXVhcmUgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICAgIGJvYXJkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1taXNzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGJvYXJkU3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdCb2FyZChwbGF5ZXJNYXAsIHBsYXllckJvYXJkKSB7XG4gICAgbWFwLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBvd25Cb2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBfZHJhd01hcChwbGF5ZXJNYXApO1xuICAgIF9kcmF3T3duQm9hcmQocGxheWVyQm9hcmQsIG93bkJvYXJkKTtcbiAgICBkcmF3QWxsU2hpcHMocGxheWVyQm9hcmQsIG93bkJvYXJkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kcmF3UGFzc0J1dHRvbihwbGF5ZXIsIHBsYXllckJvYXJkLCBvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCkge1xuICAgIGNvbnN0IHBhc3NCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHBhc3NCdXR0b24uY2xhc3NMaXN0LmFkZChcInBhc3MtYnV0dG9uXCIpO1xuICAgIHBhc3NCdXR0b24udGV4dENvbnRlbnQgPSBcIlBhc3MgdHVyblwiO1xuXG4gICAgaW5mby5hcHBlbmRDaGlsZChwYXNzQnV0dG9uKTtcblxuICAgIHBhc3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghcGxheWVyLmNvbSkge1xuICAgICAgICBfZHJhd0JsaW5kKHBsYXllciwgcGxheWVyQm9hcmQsIG9wcG9uZW50LCBvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgcGFzc0J1dHRvbi5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhc3NCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIF93cml0ZVR1cm4ocGxheWVyLCBmYWxzZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIF9wYXNzVHVybihwbGF5ZXIsIHBsYXllckJvYXJkLCBvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfZHJhd0JsaW5kKHBsYXllciwgcGxheWVyQm9hcmQsIG9wcG9uZW50LCBvcHBvbmVudEJvYXJkKSB7XG4gICAgYmxpbmQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGJsaW5kLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblxuICAgIGNvbnN0IHBhc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFzc1RleHQuY2xhc3NMaXN0LmFkZChcInBhc3MtdGV4dFwiKTtcbiAgICBwYXNzVGV4dC50ZXh0Q29udGVudCA9IGBQYXNzIHRoZSBkZXZpY2UgdG8gJHtwbGF5ZXIucGxheWVyTmFtZX1gO1xuXG4gICAgY29uc3QgdHVybkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdHVybkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQmVnaW4gVHVyblwiO1xuXG4gICAgYmxpbmQuYXBwZW5kQ2hpbGQocGFzc1RleHQpO1xuICAgIGJsaW5kLmFwcGVuZENoaWxkKHR1cm5CdXR0b24pO1xuXG4gICAgdHVybkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgX3Bhc3NUdXJuKHBsYXllciwgcGxheWVyQm9hcmQsIG9wcG9uZW50LCBvcHBvbmVudEJvYXJkKTtcbiAgICAgIGJsaW5kLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Bhc3NUdXJuKHBsYXllciwgcGxheWVyQm9hcmQsIG9wcG9uZW50LCBvcHBvbmVudEJvYXJkKSB7XG4gICAgaWYgKHBsYXllci5jb20gPT09IGZhbHNlKSB7XG4gICAgICBkcmF3Qm9hcmQocGxheWVyLm1hcCwgcGxheWVyQm9hcmQpO1xuICAgICAgbWFrZUNsaWNrYWJsZShwbGF5ZXIsIHBsYXllckJvYXJkLCBvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCk7XG4gICAgICBfd3JpdGVUdXJuKHBsYXllciwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuY29tTW92ZShvcHBvbmVudEJvYXJkKTtcbiAgICAgIGRyYXdCb2FyZChvcHBvbmVudC5tYXAsIG9wcG9uZW50Qm9hcmQpO1xuICAgICAgX3dyaXRlVHVybihvcHBvbmVudCwgZmFsc2UpO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSBcIkFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cIikge1xuICAgICAgICBfd3JpdGVUdXJuKHBsYXllciwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWtlQ2xpY2thYmxlKG9wcG9uZW50LCBvcHBvbmVudEJvYXJkLCBwbGF5ZXIsIHBsYXllckJvYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQ2xpY2thYmxlKHBsYXllciwgcGxheWVyQm9hcmQsIG9wcG9uZW50LCBvcHBvbmVudEJvYXJkKSB7XG4gICAgY29uc3QgbWFwU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFwLXNxdWFyZVwiKTtcblxuICAgIG1hcFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBjb25zdCBjb29yZCA9IEpTT04ucGFyc2Uoc3F1YXJlLmdldEF0dHJpYnV0ZShcImRhdGEtbWFwLWNvb3JkXCIpKS5yZXZlcnNlKCk7XG5cbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYXR0YWNrKG9wcG9uZW50Qm9hcmQsIGNvb3JkKTtcblxuICAgICAgICAvLyByZWRyYXcgbWFwIGluIG9yZGVyIHRvIHJlbW92ZSBsaXN0ZW5lcnNcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gXCJJbnZhbGlkIGF0dGFjazogc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWRcIikge1xuICAgICAgICAgIG1vdmVUZXh0LnRleHRDb250ZW50ID0gcmVzdWx0O1xuXG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXCIpIHtcbiAgICAgICAgICAgIGRyYXdCb2FyZChwbGF5ZXIubWFwLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICBfd3JpdGVUdXJuKHBsYXllciwgdHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuY29tID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZHJhd0JvYXJkKHBsYXllci5tYXAsIHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgIF9kcmF3UGFzc0J1dHRvbihvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCwgcGxheWVyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9wYXNzVHVybihvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCwgcGxheWVyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vdmVUZXh0LnRleHRDb250ZW50ID0gYCR7cmVzdWx0fS4gVHJ5IGEgZGlmZmVyZW50IHNxdWFyZS5gO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZHJhd0JvYXJkLFxuICAgIG1ha2VDbGlja2FibGUsXG4gICAgZHJhd1NoaXAsXG4gICAgZHJhd1NoaXBQbGFjZXIsXG4gIH07XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcbiIsImNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9zaGlwc1wiKTtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIChmdW5jdGlvbiBfY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCkuZmlsbChudWxsKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgLy8gc3RhcnQgPSBbbGVmdCwgYm90dG9tXSwgZW5kID0gW3JpZ2h0LCB0b3BdXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChsZW5ndGgsIHN0YXJ0LCBlbmQpIHtcbiAgICBjb25zdCBzcXVhcmVzID0gWy4uLnN0YXJ0LCAuLi5lbmRdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNxdWFyZXNbaV0gPiAxMCB8fCBzcXVhcmVzW2ldIDwgMCkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobGVuZ3RoKTtcbiAgICBzaGlwcy5wdXNoKHtcbiAgICAgIHNoaXA6IG5ld1NoaXAsXG4gICAgICBsZW5ndGgsXG4gICAgICBzdGFydCxcbiAgICAgIGVuZCxcbiAgICB9KTtcblxuICAgIGZvciAobGV0IHJvdyA9IHN0YXJ0WzBdOyBlbmRbMF0gLSByb3cgPj0gMDsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IHN0YXJ0WzFdOyBlbmRbMV0gLSBjb2wgPj0gMDsgY29sICs9IDEpIHtcbiAgICAgICAgLy8gVGhlIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzcXVhcmUgbXVzdCBoYXZlIGFcbiAgICAgICAgLy8gc2hhbGxvdyBjb3B5IG9mIHRoZSBzaGlwIGluIG9yZGVyIHRvIHRyYWNrIHdoZXRoZXIgdGhlIHNoaXAgaGFzIGJlZW4gc3Vua1xuICAgICAgICBib2FyZFtyb3ddW2NvbF0gPSB7XG4gICAgICAgICAgc2hpcDogbmV3U2hpcCxcbiAgICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiU2hpcCBwbGFjZWRcIjtcbiAgfVxuXG4gIC8vIGRpcmVjdGlvbjogMCA9IHZlcnRpY2FsLCAxID0gaG9yaXpvbnRhbFxuICBmdW5jdGlvbiBjaGVja1BhdGhFbXB0eShtYWluLCBzZWNvbmRhcnksIGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgZm9yIChsZXQgaSA9IG1haW47IGkgPCBtYWluICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW3NlY29uZGFyeV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYm9hcmRbc2Vjb25kYXJ5XVtpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBfbWFrZVJhbmRvbVBsYWNlbWVudChsZW5ndGgpIHtcbiAgICBjb25zdCByYW5kb21TcXVhcmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xuICAgIGNvbnN0IHNlY29uZGFyeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIC8vIDAgPSB2ZXJ0aWNhbCwgMSA9IGhvcml6b250YWxcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICAgIGlmIChjaGVja1BhdGhFbXB0eShyYW5kb21TcXVhcmUsIHNlY29uZGFyeSwgbGVuZ3RoLCBkaXJlY3Rpb24pKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgIHBsYWNlU2hpcChcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgW3JhbmRvbVNxdWFyZSwgc2Vjb25kYXJ5XSxcbiAgICAgICAgICBbcmFuZG9tU3F1YXJlICsgKGxlbmd0aCAtIDEpLCBzZWNvbmRhcnldXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZVNoaXAoXG4gICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgIFtzZWNvbmRhcnksIHJhbmRvbVNxdWFyZV0sXG4gICAgICAgICAgW3NlY29uZGFyeSwgcmFuZG9tU3F1YXJlICsgKGxlbmd0aCAtIDEpXVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfbWFrZVJhbmRvbVBsYWNlbWVudChsZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlUmFuZG9tKCkge1xuICAgIF9tYWtlUmFuZG9tUGxhY2VtZW50KDUpO1xuICAgIF9tYWtlUmFuZG9tUGxhY2VtZW50KDQpO1xuICAgIF9tYWtlUmFuZG9tUGxhY2VtZW50KDMpO1xuICAgIF9tYWtlUmFuZG9tUGxhY2VtZW50KDMpO1xuICAgIF9tYWtlUmFuZG9tUGxhY2VtZW50KDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FsbFN1bmsoKSB7XG4gICAgbGV0IHN1bmsgPSB0cnVlO1xuXG4gICAgYm9hcmQuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgIGlmIChzcXVhcmUgJiYgdHlwZW9mIHNxdWFyZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlmIChzcXVhcmUuaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzdW5rID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdW5rO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgIGNvbnN0IGF0dGFja1NxdWFyZSA9IGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV07XG5cbiAgICBpZiAoIWF0dGFja1NxdWFyZSkge1xuICAgICAgYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IFwibWlzc1wiO1xuXG4gICAgICByZXR1cm4gXCJNaXNzXCI7XG4gICAgfVxuICAgIGlmIChhdHRhY2tTcXVhcmUgPT09IFwibWlzc1wiKSB7XG4gICAgICByZXR1cm4gXCJJbnZhbGlkIGF0dGFjazogc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWRcIjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGF0dGFja1NxdWFyZSA9PT0gXCJvYmplY3RcIiAmJiBhdHRhY2tTcXVhcmUuaXNIaXQpIHtcbiAgICAgIHJldHVybiBcIkludmFsaWQgYXR0YWNrOiBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZFwiO1xuICAgIH1cblxuICAgIGF0dGFja1NxdWFyZS5pc0hpdCA9IHRydWU7XG5cbiAgICBjb25zdCBoaXRNc2cgPSBhdHRhY2tTcXVhcmUuc2hpcC5oaXQoKTtcblxuICAgIGlmIChfYWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4gXCJBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpdE1zZztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcGxhY2VSYW5kb20sXG4gICAgc2hpcHMsXG4gICAgY2hlY2tQYXRoRW1wdHksXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVib2FyZDtcbiIsImNvbnN0IHBsYXllciA9IChjb20sIG5hbWUgPSBcIlBsYXllciAxXCIpID0+IHtcbiAgY29uc3QgbWFwID0gW107XG4gIGxldCBwbGF5ZXJOYW1lID0gbmFtZTtcblxuICBpZiAoY29tKSB7XG4gICAgcGxheWVyTmFtZSA9IFwiQ29tcHV0ZXJcIjtcbiAgfVxuXG4gIChmdW5jdGlvbiBfY3JlYXRlTWFwKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgbWFwW2ldID0gbmV3IEFycmF5KDEwKS5maWxsKG51bGwpO1xuICAgIH1cbiAgfSkoKTtcblxuICBmdW5jdGlvbiBfY2hlY2tTdW5rKHRhcmdldEJvYXJkLCBjb29yZCkge1xuICAgIGNvbnN0IHRhcmdldFNxdWFyZSA9IHRhcmdldEJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV07XG5cbiAgICBpZiAodGFyZ2V0U3F1YXJlICYmIHR5cGVvZiB0YXJnZXRTcXVhcmUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmICh0YXJnZXRTcXVhcmUuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBfdXBkYXRlU3Vua2VuKHRhcmdldEJvYXJkKSB7XG4gICAgbWFwLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgIGlmIChfY2hlY2tTdW5rKHRhcmdldEJvYXJkLCBbcm93SW5kZXgsIGNvbEluZGV4XSkpIHtcbiAgICAgICAgICBtYXBbcm93SW5kZXhdW2NvbEluZGV4XSA9IFwic3Vua1wiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFjayh0YXJnZXRCb2FyZCwgdGFyZ2V0U3F1YXJlKSB7XG4gICAgY29uc3QgYXR0YWNrTXNnID0gdGFyZ2V0Qm9hcmQucmVjZWl2ZUF0dGFjayh0YXJnZXRTcXVhcmUpO1xuXG4gICAgaWYgKGF0dGFja01zZyA9PT0gXCJNaXNzXCIpIHtcbiAgICAgIG1hcFt0YXJnZXRTcXVhcmVbMF1dW3RhcmdldFNxdWFyZVsxXV0gPSBhdHRhY2tNc2cudG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKGF0dGFja01zZyA9PT0gXCJIaXRcIikge1xuICAgICAgbWFwW3RhcmdldFNxdWFyZVswXV1bdGFyZ2V0U3F1YXJlWzFdXSA9IFwiaGl0XCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGF0dGFja01zZyA9PT0gXCJZb3Ugc3VuayBteSBiYXR0bGVzaGlwXCIgfHxcbiAgICAgIGF0dGFja01zZyA9PT0gXCJBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXCJcbiAgICApIHtcbiAgICAgIG1hcFt0YXJnZXRTcXVhcmVbMF1dW3RhcmdldFNxdWFyZVsxXV0gPSBcInN1bmtcIjtcbiAgICB9XG5cbiAgICBfdXBkYXRlU3Vua2VuKHRhcmdldEJvYXJkLmJvYXJkKTtcblxuICAgIHJldHVybiBhdHRhY2tNc2c7XG4gIH1cblxuICAvLyBsaXN0IG9mIGxlZ2FsIG1vdmVzIHdoaWNoIGlzIHVwZGF0ZWQgZXZlcnkgdGltZSBjb21Nb3ZlIGlzIGNhbGxlZFxuICBjb25zdCBfbGVnYWxNb3ZlcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgbW92ZUxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wgKz0gMSkge1xuICAgICAgICBtb3ZlTGlzdC5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb3ZlTGlzdDtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBjb21Nb3ZlKHRhcmdldEJvYXJkKSB7XG4gICAgLy8gY2hvb3NlIHJvdyBhbmQgY29sdW1uIG9mIGF0dGFja2VkIHNxdWFyZSByYW5kb21seVxuXG4gICAgY29uc3QgbW92ZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX2xlZ2FsTW92ZXMubGVuZ3RoKTtcbiAgICBjb25zdCBhdHRhY2tTcXVhcmUgPSBfbGVnYWxNb3Zlc1ttb3ZlSW5kZXhdO1xuICAgIF9sZWdhbE1vdmVzLnNwbGljZShtb3ZlSW5kZXgsIDEpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXR0YWNrKHRhcmdldEJvYXJkLCBhdHRhY2tTcXVhcmUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1hcCxcbiAgICBhdHRhY2ssXG4gICAgY29tTW92ZSxcbiAgICBjb20sXG4gICAgcGxheWVyTmFtZSxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGxheWVyO1xuIiwiY29uc3Qgc2hpcCA9IChsZW5ndGgpID0+IHtcbiAgbGV0IF9oaXRzID0gMDtcblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgaWYgKF9oaXRzID49IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGl0KCkge1xuICAgIF9oaXRzICs9IDE7XG5cbiAgICBpZiAoaXNTdW5rKCkpIHtcbiAgICAgIHJldHVybiBcIllvdSBzdW5rIG15IGJhdHRsZXNoaXBcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJIaXRcIjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGdhbWVib2FyZCA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcbmNvbnN0IHBsYXllciA9IHJlcXVpcmUoXCIuL3BsYXllclwiKTtcbmNvbnN0IHVwZGF0ZSA9IHJlcXVpcmUoXCIuL0RPTVVwZGF0ZVwiKTtcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbmNvbnN0IHAxTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDEtbmFtZVwiKTtcbmNvbnN0IHAyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDItbmFtZVwiKTtcbmNvbnN0IEFJY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AyLWNvbVwiKTtcbmNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydC1idXR0b25cIik7XG5cbkFJY2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHAyTmFtZS5jbGFzc0xpc3QuY29udGFpbnMoXCJuYW1lLWRpc2FibGVkXCIpKSB7XG4gICAgcDJOYW1lLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIHAyTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwibmFtZS1kaXNhYmxlZFwiKTtcbiAgICBwMk5hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQbGF5ZXIgMlwiKTtcbiAgfSBlbHNlIHtcbiAgICBwMk5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWUtZGlzYWJsZWRcIik7XG4gICAgcDJOYW1lLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIG51bGwpO1xuICAgIHAyTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkNvbXB1dGVyXCIpO1xuICB9XG59KTtcblxuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBtZW51LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXG4gIGxldCBwMTtcbiAgbGV0IHAyO1xuXG4gIGNvbnN0IHAxQm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgY29uc3QgcDJCb2FyZCA9IGdhbWVib2FyZCgpO1xuXG4gIGlmICghcDFOYW1lLnZhbHVlKSB7XG4gICAgcDEgPSBwbGF5ZXIoZmFsc2UsIFwiUGxheWVyIDFcIik7XG4gIH0gZWxzZSB7XG4gICAgcDEgPSBwbGF5ZXIoZmFsc2UsIHAxTmFtZS52YWx1ZSk7XG4gIH1cblxuICBpZiAoQUljaGVjay5jaGVja2VkKSB7XG4gICAgcDIgPSBwbGF5ZXIodHJ1ZSk7XG4gIH0gZWxzZSBpZiAoIXAyTmFtZS52YWx1ZSkge1xuICAgIHAyID0gcGxheWVyKGZhbHNlLCBcIlBsYXllciAyXCIpO1xuICB9IGVsc2Uge1xuICAgIHAyID0gcGxheWVyKGZhbHNlLCBwMk5hbWUudmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlLmRyYXdTaGlwUGxhY2VyKHAxLCBwMUJvYXJkLCBwMiwgcDJCb2FyZCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
