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
          ":root {\n  --view-size: calc(100vw / 3);\n  --square-size: calc(var(--view-size) / 10);\n  --water-color: #e6eefb;\n  --grid-lines: 0.5px solid rgb(104, 104, 104);\n  --miss: white;\n  --hit: rgb(255, 133, 133);\n}\n\n.board {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  position: relative;\n}\n\n.info{\n  height: var(--view-size);\n  width: calc(var(--view-size)*0.5);\n  border: var(--grid-lines);\n  border-radius: 3px;\n}\n\n.map {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.own-board {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.board-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.board-square.ship-unhit {\n  background-color: var(--water-color);\n}\n\n.board-square.ship-hit {\n  background-color: red;\n}\n\n.board-square.ship-sunk {\n  background-color: #ff6565;\n}\n\n.board-square.board-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-hit {\n  background-color: red;\n}\n\n.map-square.map-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-sunk {\n  background-color: #ff6565;\n}\n\n.ship {\n  position: absolute;\n  border: 2px solid rgb(69, 69, 69);\n  background-color: rgba(50, 50, 50, 0.25);\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,4BAA4B;EAC5B,0CAA0C;EAC1C,sBAAsB;EACtB,4CAA4C;EAC5C,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;EACjC,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,iCAAiC;EACjC,wCAAwC;EACxC,kBAAkB;EAClB,sBAAsB;AACxB",
            sourcesContent: [
              ":root {\n  --view-size: calc(100vw / 3);\n  --square-size: calc(var(--view-size) / 10);\n  --water-color: #e6eefb;\n  --grid-lines: 0.5px solid rgb(104, 104, 104);\n  --miss: white;\n  --hit: rgb(255, 133, 133);\n}\n\n.board {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  position: relative;\n}\n\n.info{\n  height: var(--view-size);\n  width: calc(var(--view-size)*0.5);\n  border: var(--grid-lines);\n  border-radius: 3px;\n}\n\n.map {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.own-board {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.board-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.board-square.ship-unhit {\n  background-color: var(--water-color);\n}\n\n.board-square.ship-hit {\n  background-color: red;\n}\n\n.board-square.ship-sunk {\n  background-color: #ff6565;\n}\n\n.board-square.board-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-hit {\n  background-color: red;\n}\n\n.map-square.map-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-sunk {\n  background-color: #ff6565;\n}\n\n.ship {\n  position: absolute;\n  border: 2px solid rgb(69, 69, 69);\n  background-color: rgba(50, 50, 50, 0.25);\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n",
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

        const update = (() => {
          function _writeTurn(player, over) {
            if (over) {
              turnText.textContent = `Game over. ${player.playerName} wins.`;
            } else {
              turnText.textContent = `${player.playerName}'s turn`;
            }
          }

          function drawShip(start, end, length) {
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

            ownBoard.appendChild(ship);
          }

          function drawAllShips(board) {
            board.ships.forEach((ship) => {
              drawShip(ship.start, ship.end, ship.length);
            });
          }

          function drawBoard(playerMap, playerBoard) {
            map.textContent = "";
            ownBoard.textContent = "";

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

                  ownBoard.appendChild(boardSquare);
                });
              });

            drawAllShips(playerBoard);
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
              _passTurn(player, playerBoard, opponent, opponentBoard);
              passButton.remove();
            });
          }

          function _passTurn(player, playerBoard, opponent, opponentBoard) {
            if (player.com === false) {
              drawBoard(player.map, playerBoard.board);
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
                }
              });
            });
          }

          return {
            drawBoard,
            makeClickable,
            drawShip,
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
          function _checkPathEmpty(main, secondary, length, direction) {
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

            if (_checkPathEmpty(randomSquare, secondary, length, direction)) {
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

    const info = document.querySelector("info");

    const p1 = player(false, "p1");
    const p1Board = gameboard();
    const p2 = player(true);
    const p2Board = gameboard();

    // game.placeShips(p1Board);
    // game.placeShips(p2Board);
    p1Board.placeRandom();
    p2Board.placeRandom();

    update.drawBoard(p1.map, p1Board);

    update.makeClickable(p1, p1Board, p2, p2Board);
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNoSkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQyx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3ZGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCOztBQUVyQixrQkFBa0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2QyxlQUFlLG1CQUFPLENBQUMsaUNBQVU7QUFDakMsZUFBZSxtQkFBTyxDQUFDLHVDQUFhOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET01VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS12aWV3LXNpemU6IGNhbGMoMTAwdncgLyAzKTtcXG4gIC0tc3F1YXJlLXNpemU6IGNhbGModmFyKC0tdmlldy1zaXplKSAvIDEwKTtcXG4gIC0td2F0ZXItY29sb3I6ICNlNmVlZmI7XFxuICAtLWdyaWQtbGluZXM6IDAuNXB4IHNvbGlkIHJnYigxMDQsIDEwNCwgMTA0KTtcXG4gIC0tbWlzczogd2hpdGU7XFxuICAtLWhpdDogcmdiKDI1NSwgMTMzLCAxMzMpO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbmZve1xcbiAgaGVpZ2h0OiB2YXIoLS12aWV3LXNpemUpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tdmlldy1zaXplKSowLjUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ncmlkLWxpbmVzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm1hcCB7XFxuICBoZWlnaHQ6IHZhcigtLXZpZXctc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tdmlldy1zaXplKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5tYXAtc3F1YXJlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IHZhcigtLXNxdWFyZS1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtc2l6ZSk7XFxuICBib3JkZXI6IHZhcigtLWdyaWQtbGluZXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ub3duLWJvYXJkIHtcXG4gIGhlaWdodDogdmFyKC0tdmlldy1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS12aWV3LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ncmlkLWxpbmVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZS5zaGlwLXVuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWNvbG9yKTtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZS5zaGlwLWhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC1zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY1NjU7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuYm9hcmQtbWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLm1hcC1zcXVhcmUubWFwLWhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5tYXAtc3F1YXJlLm1hcC1taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MpO1xcbn1cXG5cXG4ubWFwLXNxdWFyZS5tYXAtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NTY1O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNjksIDY5LCA2OSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QiwwQ0FBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLDRDQUE0QztFQUM1QyxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyx3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXZpZXctc2l6ZTogY2FsYygxMDB2dyAvIDMpO1xcbiAgLS1zcXVhcmUtc2l6ZTogY2FsYyh2YXIoLS12aWV3LXNpemUpIC8gMTApO1xcbiAgLS13YXRlci1jb2xvcjogI2U2ZWVmYjtcXG4gIC0tZ3JpZC1saW5lczogMC41cHggc29saWQgcmdiKDEwNCwgMTA0LCAxMDQpO1xcbiAgLS1taXNzOiB3aGl0ZTtcXG4gIC0taGl0OiByZ2IoMjU1LCAxMzMsIDEzMyk7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmluZm97XFxuICBoZWlnaHQ6IHZhcigtLXZpZXctc2l6ZSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS12aWV3LXNpemUpKjAuNSk7XFxuICBib3JkZXI6IHZhcigtLWdyaWQtbGluZXMpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubWFwIHtcXG4gIGhlaWdodDogdmFyKC0tdmlldy1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS12aWV3LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1hcC1zcXVhcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1zaXplKTtcXG4gIGJvcmRlcjogdmFyKC0tZ3JpZC1saW5lcyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5vd24tYm9hcmQge1xcbiAgaGVpZ2h0OiB2YXIoLS12aWV3LXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXZpZXctc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IHZhcigtLXNxdWFyZS1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtc2l6ZSk7XFxuICBib3JkZXI6IHZhcigtLWdyaWQtbGluZXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLnNoaXAtdW5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItY29sb3IpO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLnNoaXAtaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZS5zaGlwLXN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjU2NTtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZS5ib2FyZC1taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MpO1xcbn1cXG5cXG4ubWFwLXNxdWFyZS5tYXAtaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1hcC1zcXVhcmUubWFwLW1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbi5tYXAtc3F1YXJlLm1hcC1zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY1NjU7XFxufVxcblxcbi5zaGlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig2OSwgNjksIDY5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgMC4yNSk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuY29uc3QgbWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXBcIik7XG5jb25zdCBvd25Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3duLWJvYXJkXCIpO1xuY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbmNvbnN0IHR1cm5UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dXJuLXRleHRcIik7XG5cbmNvbnN0IHVwZGF0ZSA9ICgoKSA9PiB7XG5cbiAgZnVuY3Rpb24gX3dyaXRlVHVybihwbGF5ZXIsIG92ZXIpe1xuICAgIGlmKG92ZXIpe1xuICAgICAgdHVyblRleHQudGV4dENvbnRlbnQgPSBgR2FtZSBvdmVyLiAke3BsYXllci5wbGF5ZXJOYW1lfSB3aW5zLmA7XG4gICAgfWVsc2V7XG4gICAgICB0dXJuVGV4dC50ZXh0Q29udGVudCA9IGAke3BsYXllci5wbGF5ZXJOYW1lfSdzIHR1cm5gXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1NoaXAoc3RhcnQsIGVuZCwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcblxuICAgIGNvbnN0IHNxdWFyZVNpemUgPSAxMDAgLyAzMDtcbiAgICBsZXQgaGVpZ2h0ID0gMTtcbiAgICBsZXQgd2lkdGggPSAxO1xuXG4gICAgaWYgKGVuZFswXSAtIHN0YXJ0WzBdID4gMCkge1xuICAgICAgaGVpZ2h0ID0gbGVuZ3RoICogc3F1YXJlU2l6ZTtcbiAgICAgIHdpZHRoID0gc3F1YXJlU2l6ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2lkdGggPSBsZW5ndGggKiBzcXVhcmVTaXplO1xuICAgICAgaGVpZ2h0ID0gc3F1YXJlU2l6ZTtcbiAgICB9XG5cbiAgICBzaGlwLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH12d2A7XG4gICAgc2hpcC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXZ3YDtcblxuICAgIHNoaXAuc3R5bGUuYm90dG9tID0gYCR7c3F1YXJlU2l6ZSAqIHN0YXJ0WzBdfXZ3YDtcbiAgICBzaGlwLnN0eWxlLmxlZnQgPSBgJHtzcXVhcmVTaXplICogc3RhcnRbMV19dndgO1xuXG4gICAgb3duQm9hcmQuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3QWxsU2hpcHMoYm9hcmQpIHtcbiAgICBib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBkcmF3U2hpcChzaGlwLnN0YXJ0LCBzaGlwLmVuZCwgc2hpcC5sZW5ndGgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0JvYXJkKHBsYXllck1hcCwgcGxheWVyQm9hcmQpIHtcbiAgICBtYXAudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG93bkJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIHBsYXllck1hcFxuICAgICAgLnNsaWNlKClcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gOSAtIGluZGV4O1xuXG4gICAgICAgIHJvdy5mb3JFYWNoKChzcXVhcmUsIHNxdWFyZUluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29sSW5kZXggPSBzcXVhcmVJbmRleCAlIDEwO1xuXG4gICAgICAgICAgY29uc3QgbWFwU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXBTcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1hcC1zcXVhcmVcIik7XG5cbiAgICAgICAgICBtYXBTcXVhcmUuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJkYXRhLW1hcC1jb29yZFwiLFxuICAgICAgICAgICAgYFske2NvbEluZGV4fSwgJHtyb3dJbmRleH1dYFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoc3F1YXJlKSB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgICAgIG1hcFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWFwLWhpdFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlID09PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgICBtYXBTcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1hcC1taXNzXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzcXVhcmUgPT09IFwic3Vua1wiKSB7XG4gICAgICAgICAgICAgIG1hcFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWFwLXN1bmtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWFwLmFwcGVuZENoaWxkKG1hcFNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBwbGF5ZXJCb2FyZC5ib2FyZFxuICAgICAgLnNsaWNlKClcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gOSAtIGluZGV4O1xuXG4gICAgICAgIHJvdy5mb3JFYWNoKChzcXVhcmUsIHNxdWFyZUluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29sSW5kZXggPSBzcXVhcmVJbmRleCAlIDEwO1xuXG4gICAgICAgICAgY29uc3QgYm9hcmRTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGJvYXJkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1zcXVhcmVcIik7XG5cbiAgICAgICAgICBib2FyZFNxdWFyZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcImRhdGEtYm9hcmQtY29vcmRcIixcbiAgICAgICAgICAgIGBbJHtjb2xJbmRleH0sICR7cm93SW5kZXh9XWBcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy8gY2hlY2sgd2hldGhlciBzcXVhcmUgaXMgZW1wdHkuXG4gICAgICAgICAgLy8gaWYgbm90LCBhZGQgY2xhc3MgdG8gaXRcbiAgICAgICAgICBpZiAoc3F1YXJlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNxdWFyZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICBpZiAoc3F1YXJlLmlzSGl0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICBib2FyZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdW5rXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBib2FyZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1oaXRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvYXJkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXVuaGl0XCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICAgICAgYm9hcmRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImJvYXJkLW1pc3NcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3duQm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRTcXVhcmUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgZHJhd0FsbFNoaXBzKHBsYXllckJvYXJkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kcmF3UGFzc0J1dHRvbihwbGF5ZXIsIHBsYXllckJvYXJkLCBvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCl7XG4gICAgY29uc3QgcGFzc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcGFzc0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGFzcy1idXR0b25cIik7XG4gICAgcGFzc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiUGFzcyB0dXJuXCI7XG5cbiAgICBpbmZvLmFwcGVuZENoaWxkKHBhc3NCdXR0b24pO1xuXG4gICAgcGFzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgIF9wYXNzVHVybihwbGF5ZXIsIHBsYXllckJvYXJkLCBvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCk7XG4gICAgICBwYXNzQnV0dG9uLnJlbW92ZSgpO1xuICAgIH0pXG4gIH1cblxuXG4gIGZ1bmN0aW9uIF9wYXNzVHVybihwbGF5ZXIsIHBsYXllckJvYXJkLCBvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCkge1xuXG4gICAgaWYgKHBsYXllci5jb20gPT09IGZhbHNlKSB7XG4gICAgICBkcmF3Qm9hcmQocGxheWVyLm1hcCwgcGxheWVyQm9hcmQuYm9hcmQpO1xuICAgICAgbWFrZUNsaWNrYWJsZShwbGF5ZXIsIHBsYXllckJvYXJkLCBvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCk7XG4gICAgICBfd3JpdGVUdXJuKHBsYXllciwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuY29tTW92ZShvcHBvbmVudEJvYXJkKTtcbiAgICAgIGRyYXdCb2FyZChvcHBvbmVudC5tYXAsIG9wcG9uZW50Qm9hcmQpO1xuICAgICAgX3dyaXRlVHVybihvcHBvbmVudCwgZmFsc2UpO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSBcIkFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cIikge1xuICAgICAgICBfd3JpdGVUdXJuKHBsYXllciwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWtlQ2xpY2thYmxlKG9wcG9uZW50LCBvcHBvbmVudEJvYXJkLCBwbGF5ZXIsIHBsYXllckJvYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQ2xpY2thYmxlKHBsYXllciwgcGxheWVyQm9hcmQsIG9wcG9uZW50LCBvcHBvbmVudEJvYXJkKSB7XG4gICAgY29uc3QgbWFwU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFwLXNxdWFyZVwiKTtcblxuICAgIG1hcFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBjb25zdCBjb29yZCA9IEpTT04ucGFyc2Uoc3F1YXJlLmdldEF0dHJpYnV0ZShcImRhdGEtbWFwLWNvb3JkXCIpKS5yZXZlcnNlKCk7XG5cbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYXR0YWNrKG9wcG9uZW50Qm9hcmQsIGNvb3JkKTtcblxuICAgICAgICAvLyByZWRyYXcgbWFwIGluIG9yZGVyIHRvIHJlbW92ZSBsaXN0ZW5lcnNcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gXCJJbnZhbGlkIGF0dGFjazogc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWRcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlwiKSB7XG4gICAgICAgICAgICBkcmF3Qm9hcmQocGxheWVyLm1hcCwgcGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgX3dyaXRlVHVybihwbGF5ZXIsIHRydWUpO1xuICAgICAgICAgIH0gZWxzZSBpZihwbGF5ZXIuY29tID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgIGRyYXdCb2FyZChwbGF5ZXIubWFwLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICAgIF9kcmF3UGFzc0J1dHRvbihvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCwgcGxheWVyLCBwbGF5ZXJCb2FyZClcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBfcGFzc1R1cm4ob3Bwb25lbnQsIG9wcG9uZW50Qm9hcmQsIHBsYXllciwgcGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZHJhd0JvYXJkLFxuICAgIG1ha2VDbGlja2FibGUsXG4gICAgZHJhd1NoaXAsXG4gIH07XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcbiIsImNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9zaGlwc1wiKTtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIChmdW5jdGlvbiBfY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCkuZmlsbChudWxsKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgLy8gc3RhcnQgPSBbbGVmdCwgYm90dG9tXSwgZW5kID0gW3JpZ2h0LCB0b3BdXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChsZW5ndGgsIHN0YXJ0LCBlbmQpIHtcbiAgICBjb25zdCBzcXVhcmVzID0gWy4uLnN0YXJ0LCAuLi5lbmRdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNxdWFyZXNbaV0gPiAxMCB8fCBzcXVhcmVzW2ldIDwgMCkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobGVuZ3RoKTtcbiAgICBzaGlwcy5wdXNoKHtcbiAgICAgIHNoaXA6IG5ld1NoaXAsXG4gICAgICBsZW5ndGgsXG4gICAgICBzdGFydCxcbiAgICAgIGVuZCxcbiAgICB9KTtcblxuICAgIGZvciAobGV0IHJvdyA9IHN0YXJ0WzBdOyBlbmRbMF0gLSByb3cgPj0gMDsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IHN0YXJ0WzFdOyBlbmRbMV0gLSBjb2wgPj0gMDsgY29sICs9IDEpIHtcbiAgICAgICAgLy8gVGhlIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzcXVhcmUgbXVzdCBoYXZlIGFcbiAgICAgICAgLy8gc2hhbGxvdyBjb3B5IG9mIHRoZSBzaGlwIGluIG9yZGVyIHRvIHRyYWNrIHdoZXRoZXIgdGhlIHNoaXAgaGFzIGJlZW4gc3Vua1xuICAgICAgICBib2FyZFtyb3ddW2NvbF0gPSB7XG4gICAgICAgICAgc2hpcDogbmV3U2hpcCxcbiAgICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiU2hpcCBwbGFjZWRcIjtcbiAgfVxuXG4gIC8vIGRpcmVjdGlvbjogMCA9IHZlcnRpY2FsLCAxID0gaG9yaXpvbnRhbFxuICBmdW5jdGlvbiBfY2hlY2tQYXRoRW1wdHkobWFpbiwgc2Vjb25kYXJ5LCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIGZvciAobGV0IGkgPSBtYWluOyBpIDwgbWFpbiArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtzZWNvbmRhcnldKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkW3NlY29uZGFyeV1baV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gX21ha2VSYW5kb21QbGFjZW1lbnQobGVuZ3RoKSB7XG4gICAgY29uc3QgcmFuZG9tU3F1YXJlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKTtcbiAgICBjb25zdCBzZWNvbmRhcnkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAvLyAwID0gdmVydGljYWwsIDEgPSBob3Jpem9udGFsXG4gICAgY29uc3QgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICBpZiAoX2NoZWNrUGF0aEVtcHR5KHJhbmRvbVNxdWFyZSwgc2Vjb25kYXJ5LCBsZW5ndGgsIGRpcmVjdGlvbikpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgcGxhY2VTaGlwKFxuICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICBbcmFuZG9tU3F1YXJlLCBzZWNvbmRhcnldLFxuICAgICAgICAgIFtyYW5kb21TcXVhcmUgKyAobGVuZ3RoIC0gMSksIHNlY29uZGFyeV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlU2hpcChcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgW3NlY29uZGFyeSwgcmFuZG9tU3F1YXJlXSxcbiAgICAgICAgICBbc2Vjb25kYXJ5LCByYW5kb21TcXVhcmUgKyAobGVuZ3RoIC0gMSldXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF9tYWtlUmFuZG9tUGxhY2VtZW50KGxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VSYW5kb20oKSB7XG4gICAgX21ha2VSYW5kb21QbGFjZW1lbnQoNSk7XG4gICAgX21ha2VSYW5kb21QbGFjZW1lbnQoNCk7XG4gICAgX21ha2VSYW5kb21QbGFjZW1lbnQoMyk7XG4gICAgX21ha2VSYW5kb21QbGFjZW1lbnQoMyk7XG4gICAgX21ha2VSYW5kb21QbGFjZW1lbnQoMik7XG4gIH1cblxuICBmdW5jdGlvbiBfYWxsU3VuaygpIHtcbiAgICBsZXQgc3VuayA9IHRydWU7XG5cbiAgICBib2FyZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgaWYgKHNxdWFyZSAmJiB0eXBlb2Ygc3F1YXJlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgaWYgKHNxdWFyZS5pc0hpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1bms7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgY29uc3QgYXR0YWNrU3F1YXJlID0gYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXTtcblxuICAgIGlmICghYXR0YWNrU3F1YXJlKSB7XG4gICAgICBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gXCJtaXNzXCI7XG5cbiAgICAgIHJldHVybiBcIk1pc3NcIjtcbiAgICB9XG4gICAgaWYgKGF0dGFja1NxdWFyZSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybiBcIkludmFsaWQgYXR0YWNrOiBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZFwiO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXR0YWNrU3F1YXJlID09PSBcIm9iamVjdFwiICYmIGF0dGFja1NxdWFyZS5pc0hpdCkge1xuICAgICAgcmV0dXJuIFwiSW52YWxpZCBhdHRhY2s6IHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkXCI7XG4gICAgfVxuXG4gICAgYXR0YWNrU3F1YXJlLmlzSGl0ID0gdHJ1ZTtcblxuICAgIGNvbnN0IGhpdE1zZyA9IGF0dGFja1NxdWFyZS5zaGlwLmhpdCgpO1xuXG4gICAgaWYgKF9hbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiBcIkFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gaGl0TXNnO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBwbGFjZVJhbmRvbSxcbiAgICBzaGlwcyxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkO1xuIiwiY29uc3QgcGxheWVyID0gKGNvbSwgbmFtZT1cIlBsYXllciAxXCIpID0+IHtcbiAgY29uc3QgbWFwID0gW107XG4gIGxldCBwbGF5ZXJOYW1lID0gbmFtZTtcblxuICBpZihjb20pe1xuICAgIHBsYXllck5hbWUgPSBcIkNvbXB1dGVyXCI7XG4gIH1cblxuICAoZnVuY3Rpb24gX2NyZWF0ZU1hcCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIG1hcFtpXSA9IG5ldyBBcnJheSgxMCkuZmlsbChudWxsKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gX2NoZWNrU3Vuayh0YXJnZXRCb2FyZCwgY29vcmQpIHtcbiAgICBjb25zdCB0YXJnZXRTcXVhcmUgPSB0YXJnZXRCb2FyZFtjb29yZFswXV1bY29vcmRbMV1dO1xuXG4gICAgaWYgKHRhcmdldFNxdWFyZSAmJiB0eXBlb2YgdGFyZ2V0U3F1YXJlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBpZiAodGFyZ2V0U3F1YXJlLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gX3VwZGF0ZVN1bmtlbih0YXJnZXRCb2FyZCkge1xuICAgIG1hcC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICBpZiAoX2NoZWNrU3Vuayh0YXJnZXRCb2FyZCwgW3Jvd0luZGV4LCBjb2xJbmRleF0pKSB7XG4gICAgICAgICAgbWFwW3Jvd0luZGV4XVtjb2xJbmRleF0gPSBcInN1bmtcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2sodGFyZ2V0Qm9hcmQsIHRhcmdldFNxdWFyZSkge1xuICAgIGNvbnN0IGF0dGFja01zZyA9IHRhcmdldEJvYXJkLnJlY2VpdmVBdHRhY2sodGFyZ2V0U3F1YXJlKTtcblxuICAgIGlmIChhdHRhY2tNc2cgPT09IFwiTWlzc1wiKSB7XG4gICAgICBtYXBbdGFyZ2V0U3F1YXJlWzBdXVt0YXJnZXRTcXVhcmVbMV1dID0gYXR0YWNrTXNnLnRvTG93ZXJDYXNlKCk7XG4gICAgfSBlbHNlIGlmIChhdHRhY2tNc2cgPT09IFwiSGl0XCIpIHtcbiAgICAgIG1hcFt0YXJnZXRTcXVhcmVbMF1dW3RhcmdldFNxdWFyZVsxXV0gPSBcImhpdFwiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBhdHRhY2tNc2cgPT09IFwiWW91IHN1bmsgbXkgYmF0dGxlc2hpcFwiIHx8XG4gICAgICBhdHRhY2tNc2cgPT09IFwiQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlwiXG4gICAgKSB7XG4gICAgICBtYXBbdGFyZ2V0U3F1YXJlWzBdXVt0YXJnZXRTcXVhcmVbMV1dID0gXCJzdW5rXCI7XG4gICAgfVxuXG4gICAgX3VwZGF0ZVN1bmtlbih0YXJnZXRCb2FyZC5ib2FyZCk7XG5cbiAgICByZXR1cm4gYXR0YWNrTXNnO1xuICB9XG5cbiAgLy8gbGlzdCBvZiBsZWdhbCBtb3ZlcyB3aGljaCBpcyB1cGRhdGVkIGV2ZXJ5IHRpbWUgY29tTW92ZSBpcyBjYWxsZWRcbiAgY29uc3QgX2xlZ2FsTW92ZXMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1vdmVMaXN0ID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sICs9IDEpIHtcbiAgICAgICAgbW92ZUxpc3QucHVzaChbcm93LCBjb2xdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW92ZUxpc3Q7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gY29tTW92ZSh0YXJnZXRCb2FyZCkge1xuICAgIC8vIGNob29zZSByb3cgYW5kIGNvbHVtbiBvZiBhdHRhY2tlZCBzcXVhcmUgcmFuZG9tbHlcblxuICAgIGNvbnN0IG1vdmVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9sZWdhbE1vdmVzLmxlbmd0aCk7XG4gICAgY29uc3QgYXR0YWNrU3F1YXJlID0gX2xlZ2FsTW92ZXNbbW92ZUluZGV4XTtcbiAgICBfbGVnYWxNb3Zlcy5zcGxpY2UobW92ZUluZGV4LCAxKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF0dGFjayh0YXJnZXRCb2FyZCwgYXR0YWNrU3F1YXJlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtYXAsXG4gICAgYXR0YWNrLFxuICAgIGNvbU1vdmUsXG4gICAgY29tLFxuICAgIHBsYXllck5hbWUsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllcjtcbiIsImNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGxldCBfaGl0cyA9IDA7XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGlmIChfaGl0cyA+PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICBfaGl0cyArPSAxO1xuXG4gICAgaWYgKGlzU3VuaygpKSB7XG4gICAgICByZXR1cm4gXCJZb3Ugc3VuayBteSBiYXR0bGVzaGlwXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiSGl0XCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBnYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG5jb25zdCBwbGF5ZXIgPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5jb25zdCB1cGRhdGUgPSByZXF1aXJlKFwiLi9ET01VcGRhdGVcIik7XG5cbmNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5mb1wiKTtcblxuY29uc3QgcDEgPSBwbGF5ZXIoZmFsc2UsIFwicDFcIik7XG5jb25zdCBwMUJvYXJkID0gZ2FtZWJvYXJkKCk7XG5jb25zdCBwMiA9IHBsYXllcih0cnVlKTtcbmNvbnN0IHAyQm9hcmQgPSBnYW1lYm9hcmQoKTtcblxuLy8gZ2FtZS5wbGFjZVNoaXBzKHAxQm9hcmQpO1xuLy8gZ2FtZS5wbGFjZVNoaXBzKHAyQm9hcmQpO1xucDFCb2FyZC5wbGFjZVJhbmRvbSgpO1xucDJCb2FyZC5wbGFjZVJhbmRvbSgpO1xuXG51cGRhdGUuZHJhd0JvYXJkKHAxLm1hcCwgcDFCb2FyZCk7XG5cbnVwZGF0ZS5tYWtlQ2xpY2thYmxlKHAxLCBwMUJvYXJkLCBwMiwgcDJCb2FyZCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
