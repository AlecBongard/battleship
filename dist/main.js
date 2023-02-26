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
          ":root {\n  --view-size: calc(100vw / 3);\n  --square-size: calc(var(--view-size) / 10);\n  --water-color: #e6eefb;\n  --grid-lines: 0.5px solid black;\n  --miss: white;\n}\n\n.board {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  position: relative;\n}\n\n.map {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.own-board {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.board-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.board-square.ship-unhit {\n  background-color: var(--water-color);\n}\n\n.board-square.ship-hit {\n  background-color: red;\n}\n\n.board-square.ship-sunk {\n  background-color: #ff6565;\n}\n\n.board-square.board-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-hit {\n  background-color: red;\n}\n\n.map-square.map-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-sunk {\n  background-color: #ff6565;\n}\n\n.ship {\n  position: absolute;\n  border: 2px solid rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,4BAA4B;EAC5B,0CAA0C;EAC1C,sBAAsB;EACtB,+BAA+B;EAC/B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,qCAAqC;EACrC,kBAAkB;EAClB,sBAAsB;AACxB",
            sourcesContent: [
              ":root {\n  --view-size: calc(100vw / 3);\n  --square-size: calc(var(--view-size) / 10);\n  --water-color: #e6eefb;\n  --grid-lines: 0.5px solid black;\n  --miss: white;\n}\n\n.board {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  position: relative;\n}\n\n.map {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.own-board {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.board-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.board-square.ship-unhit {\n  background-color: var(--water-color);\n}\n\n.board-square.ship-hit {\n  background-color: red;\n}\n\n.board-square.ship-sunk {\n  background-color: #ff6565;\n}\n\n.board-square.board-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-hit {\n  background-color: red;\n}\n\n.map-square.map-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-sunk {\n  background-color: #ff6565;\n}\n\n.ship {\n  position: absolute;\n  border: 2px solid rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n",
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

        const update = (() => {
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

          function _passTurn(player, playerBoard, opponent, opponentBoard) {
            if (player.com === false) {
              drawBoard(player.map, playerBoard.board);
              makeClickable(player, playerBoard, opponent, opponentBoard);
            } else {
              const result = player.comMove(opponentBoard);

              drawBoard(opponent.map, opponentBoard);

              if (result === "All ships have been sunk.") {
                console.log("game over");
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
                    console.log("game over");
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

    /***/ "./src/game.js":
      /*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
      /***/ (module) => {
        const game = (() => {
          function placeShips(board) {
            board.placeShip(6, [4, 0], [9, 0]);
            board.placeShip(2, [0, 2], [1, 2]);
            board.placeShip(3, [9, 2], [9, 4]);
            board.placeShip(2, [5, 3], [5, 4]);
            board.placeShip(4, [0, 4], [0, 7]);
            board.placeShip(2, [0, 9], [1, 9]);
            board.placeShip(2, [9, 6], [9, 7]);
            board.placeShip(3, [5, 7], [7, 7]);
            board.placeShip(3, [3, 7], [3, 9]);
            board.placeShip(4, [6, 9], [9, 9]);
          }

          return {
            placeShips,
          };
        })();

        module.exports = game;

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
        const player = (com) => {
          const map = [];

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
    const game = __webpack_require__(/*! ./game */ "./src/game.js");

    const p1 = player(false);
    const p1Board = gameboard();
    const p2 = player(true);
    const p2Board = gameboard();

    game.placeShips(p1Board);
    game.placeShips(p2Board);

    update.drawBoard(p1.map, p1Board);

    update.makeClickable(p1, p1Board, p2, p2Board);
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQyx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjs7QUFFckIsa0JBQWtCLG1CQUFPLENBQUMsdUNBQWE7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLGlDQUFVO0FBQ2pDLGVBQWUsbUJBQU8sQ0FBQyx1Q0FBYTtBQUNwQyxhQUFhLG1CQUFPLENBQUMsNkJBQVE7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NVXBkYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXZpZXctc2l6ZTogY2FsYygxMDB2dyAvIDMpO1xcbiAgLS1zcXVhcmUtc2l6ZTogY2FsYyh2YXIoLS12aWV3LXNpemUpIC8gMTApO1xcbiAgLS13YXRlci1jb2xvcjogI2U2ZWVmYjtcXG4gIC0tZ3JpZC1saW5lczogMC41cHggc29saWQgYmxhY2s7XFxuICAtLW1pc3M6IHdoaXRlO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tYXAge1xcbiAgaGVpZ2h0OiB2YXIoLS12aWV3LXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXZpZXctc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWFwLXNxdWFyZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ncmlkLWxpbmVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm93bi1ib2FyZCB7XFxuICBoZWlnaHQ6IHZhcigtLXZpZXctc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tdmlldy1zaXplKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1zaXplKTtcXG4gIGJvcmRlcjogdmFyKC0tZ3JpZC1saW5lcyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC11bmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLnNoaXAtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NTY1O1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLmJvYXJkLW1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbi5tYXAtc3F1YXJlLm1hcC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWFwLXNxdWFyZS5tYXAtbWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLm1hcC1zcXVhcmUubWFwLXN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjU2NTtcXG59XFxuXFxuLnNoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsMENBQTBDO0VBQzFDLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXZpZXctc2l6ZTogY2FsYygxMDB2dyAvIDMpO1xcbiAgLS1zcXVhcmUtc2l6ZTogY2FsYyh2YXIoLS12aWV3LXNpemUpIC8gMTApO1xcbiAgLS13YXRlci1jb2xvcjogI2U2ZWVmYjtcXG4gIC0tZ3JpZC1saW5lczogMC41cHggc29saWQgYmxhY2s7XFxuICAtLW1pc3M6IHdoaXRlO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tYXAge1xcbiAgaGVpZ2h0OiB2YXIoLS12aWV3LXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXZpZXctc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWFwLXNxdWFyZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ncmlkLWxpbmVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm93bi1ib2FyZCB7XFxuICBoZWlnaHQ6IHZhcigtLXZpZXctc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tdmlldy1zaXplKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1zaXplKTtcXG4gIGJvcmRlcjogdmFyKC0tZ3JpZC1saW5lcyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC11bmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLnNoaXAtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NTY1O1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLmJvYXJkLW1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbi5tYXAtc3F1YXJlLm1hcC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWFwLXNxdWFyZS5tYXAtbWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLm1hcC1zcXVhcmUubWFwLXN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjU2NTtcXG59XFxuXFxuLnNoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5jb25zdCBtYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hcFwiKTtcbmNvbnN0IG93bkJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd24tYm9hcmRcIik7XG5cbmNvbnN0IHVwZGF0ZSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGRyYXdTaGlwKHN0YXJ0LCBlbmQsIGxlbmd0aCkge1xuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG5cbiAgICBjb25zdCBzcXVhcmVTaXplID0gMTAwIC8gMzA7XG4gICAgbGV0IGhlaWdodCA9IDE7XG4gICAgbGV0IHdpZHRoID0gMTtcblxuICAgIGlmKGVuZFswXSAtICBzdGFydFswXSA+IDApe1xuICAgICAgaGVpZ2h0ID0gbGVuZ3RoICogc3F1YXJlU2l6ZTtcbiAgICAgIHdpZHRoID0gc3F1YXJlU2l6ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHdpZHRoID0gbGVuZ3RoKnNxdWFyZVNpemU7XG4gICAgICBoZWlnaHQgPSBzcXVhcmVTaXplO1xuICAgIH1cblxuICAgIHNoaXAuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXZ3YDtcbiAgICBzaGlwLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9dndgO1xuXG4gICAgc2hpcC5zdHlsZS5ib3R0b20gPSBgJHtzcXVhcmVTaXplICogc3RhcnRbMF19dndgO1xuICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke3NxdWFyZVNpemUgKiBzdGFydFsxXX12d2A7XG5cbiAgICBvd25Cb2FyZC5hcHBlbmRDaGlsZChzaGlwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdBbGxTaGlwcyhib2FyZCkge1xuICAgIGJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGRyYXdTaGlwKHNoaXAuc3RhcnQsIHNoaXAuZW5kLCBzaGlwLmxlbmd0aCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3Qm9hcmQocGxheWVyTWFwLCBwbGF5ZXJCb2FyZCkge1xuICAgIG1hcC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgb3duQm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgcGxheWVyTWFwXG4gICAgICAuc2xpY2UoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSA5IC0gaW5kZXg7XG5cbiAgICAgICAgcm93LmZvckVhY2goKHNxdWFyZSwgc3F1YXJlSW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2xJbmRleCA9IHNxdWFyZUluZGV4ICUgMTA7XG5cbiAgICAgICAgICBjb25zdCBtYXBTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWFwLXNxdWFyZVwiKTtcblxuICAgICAgICAgIG1hcFNxdWFyZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcImRhdGEtbWFwLWNvb3JkXCIsXG4gICAgICAgICAgICBgWyR7Y29sSW5kZXh9LCAke3Jvd0luZGV4fV1gXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChzcXVhcmUpIHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgICAgbWFwU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtYXAtaGl0XCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzcXVhcmUgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICAgIG1hcFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWFwLW1pc3NcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZSA9PT0gXCJzdW5rXCIpIHtcbiAgICAgICAgICAgICAgbWFwU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtYXAtc3Vua1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXAuYXBwZW5kQ2hpbGQobWFwU3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIHBsYXllckJvYXJkLmJvYXJkXG4gICAgICAuc2xpY2UoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSA5IC0gaW5kZXg7XG5cbiAgICAgICAgcm93LmZvckVhY2goKHNxdWFyZSwgc3F1YXJlSW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2xJbmRleCA9IHNxdWFyZUluZGV4ICUgMTA7XG5cbiAgICAgICAgICBjb25zdCBib2FyZFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgYm9hcmRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXNxdWFyZVwiKTtcblxuICAgICAgICAgIGJvYXJkU3F1YXJlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwiZGF0YS1ib2FyZC1jb29yZFwiLFxuICAgICAgICAgICAgYFske2NvbEluZGV4fSwgJHtyb3dJbmRleH1dYFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHNxdWFyZSBpcyBlbXB0eS5cbiAgICAgICAgICAvLyBpZiBub3QsIGFkZCBjbGFzcyB0byBpdFxuICAgICAgICAgIGlmIChzcXVhcmUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3F1YXJlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgIGlmIChzcXVhcmUuaXNIaXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgIGJvYXJkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN1bmtcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGJvYXJkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWhpdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9hcmRTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXAtdW5oaXRcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlID09PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgICBib2FyZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtbWlzc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvd25Cb2FyZC5hcHBlbmRDaGlsZChib2FyZFNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBkcmF3QWxsU2hpcHMocGxheWVyQm9hcmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Bhc3NUdXJuKHBsYXllciwgcGxheWVyQm9hcmQsIG9wcG9uZW50LCBvcHBvbmVudEJvYXJkKSB7XG4gICAgaWYgKHBsYXllci5jb20gPT09IGZhbHNlKSB7XG4gICAgICBkcmF3Qm9hcmQocGxheWVyLm1hcCwgcGxheWVyQm9hcmQuYm9hcmQpO1xuICAgICAgbWFrZUNsaWNrYWJsZShwbGF5ZXIsIHBsYXllckJvYXJkLCBvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5jb21Nb3ZlKG9wcG9uZW50Qm9hcmQpO1xuXG4gICAgICBkcmF3Qm9hcmQob3Bwb25lbnQubWFwLCBvcHBvbmVudEJvYXJkKTtcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gXCJBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIG92ZXJcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWtlQ2xpY2thYmxlKG9wcG9uZW50LCBvcHBvbmVudEJvYXJkLCBwbGF5ZXIsIHBsYXllckJvYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQ2xpY2thYmxlKHBsYXllciwgcGxheWVyQm9hcmQsIG9wcG9uZW50LCBvcHBvbmVudEJvYXJkKSB7XG4gICAgY29uc3QgbWFwU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFwLXNxdWFyZVwiKTtcblxuICAgIG1hcFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBjb25zdCBjb29yZCA9IEpTT04ucGFyc2Uoc3F1YXJlLmdldEF0dHJpYnV0ZShcImRhdGEtbWFwLWNvb3JkXCIpKS5yZXZlcnNlKCk7XG5cbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYXR0YWNrKG9wcG9uZW50Qm9hcmQsIGNvb3JkKTtcblxuICAgICAgICAvLyByZWRyYXcgbWFwIGluIG9yZGVyIHRvIHJlbW92ZSBsaXN0ZW5lcnNcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gXCJJbnZhbGlkIGF0dGFjazogc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWRcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlwiKSB7XG4gICAgICAgICAgICBkcmF3Qm9hcmQocGxheWVyLm1hcCwgcGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIG92ZXJcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9wYXNzVHVybihvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCwgcGxheWVyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZHJhd0JvYXJkLFxuICAgIG1ha2VDbGlja2FibGUsXG4gICAgZHJhd1NoaXAsXG4gIH07XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcbiIsImNvbnN0IGdhbWUgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBwbGFjZVNoaXBzKGJvYXJkKSB7XG4gICAgYm9hcmQucGxhY2VTaGlwKDYsIFs0LCAwXSwgWzksIDBdKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoMiwgWzAsIDJdLCBbMSwgMl0pO1xuICAgIGJvYXJkLnBsYWNlU2hpcCgzLCBbOSwgMl0sIFs5LCA0XSk7XG4gICAgYm9hcmQucGxhY2VTaGlwKDIsIFs1LCAzXSwgWzUsIDRdKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoNCwgWzAsIDRdLCBbMCwgN10pO1xuICAgIGJvYXJkLnBsYWNlU2hpcCgyLCBbMCwgOV0sIFsxLCA5XSk7XG4gICAgYm9hcmQucGxhY2VTaGlwKDIsIFs5LCA2XSwgWzksIDddKTtcbiAgICBib2FyZC5wbGFjZVNoaXAoMywgWzUsIDddLCBbNywgN10pO1xuICAgIGJvYXJkLnBsYWNlU2hpcCgzLCBbMywgN10sIFszLCA5XSk7XG4gICAgYm9hcmQucGxhY2VTaGlwKDQsIFs2LCA5XSwgWzksIDldKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwcyxcbiAgfTtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZTtcbiIsImNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9zaGlwc1wiKTtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIChmdW5jdGlvbiBfY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCkuZmlsbChudWxsKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgLy8gc3RhcnQgPSBbbGVmdCwgYm90dG9tXSwgZW5kID0gW3JpZ2h0LCB0b3BdXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChsZW5ndGgsIHN0YXJ0LCBlbmQpIHtcbiAgICBjb25zdCBzcXVhcmVzID0gWy4uLnN0YXJ0LCAuLi5lbmRdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNxdWFyZXNbaV0gPiAxMCB8fCBzcXVhcmVzW2ldIDwgMCkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobGVuZ3RoKTtcbiAgICBzaGlwcy5wdXNoKHtcbiAgICAgIHNoaXA6IG5ld1NoaXAsXG4gICAgICBsZW5ndGgsXG4gICAgICBzdGFydCxcbiAgICAgIGVuZCxcbiAgICB9KTtcblxuICAgIGZvciAobGV0IHJvdyA9IHN0YXJ0WzBdOyBlbmRbMF0gLSByb3cgPj0gMDsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IHN0YXJ0WzFdOyBlbmRbMV0gLSBjb2wgPj0gMDsgY29sICs9IDEpIHtcbiAgICAgICAgLy8gVGhlIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzcXVhcmUgbXVzdCBoYXZlIGFcbiAgICAgICAgLy8gc2hhbGxvdyBjb3B5IG9mIHRoZSBzaGlwIGluIG9yZGVyIHRvIHRyYWNrIHdoZXRoZXIgdGhlIHNoaXAgaGFzIGJlZW4gc3Vua1xuICAgICAgICBib2FyZFtyb3ddW2NvbF0gPSB7XG4gICAgICAgICAgc2hpcDogbmV3U2hpcCxcbiAgICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiU2hpcCBwbGFjZWRcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hbGxTdW5rKCkge1xuICAgIGxldCBzdW5rID0gdHJ1ZTtcblxuICAgIGJvYXJkLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICBpZiAoc3F1YXJlICYmIHR5cGVvZiBzcXVhcmUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpZiAoc3F1YXJlLmlzSGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc3VuayA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VuaztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICBjb25zdCBhdHRhY2tTcXVhcmUgPSBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dO1xuXG4gICAgaWYgKCFhdHRhY2tTcXVhcmUpIHtcbiAgICAgIGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSBcIm1pc3NcIjtcblxuICAgICAgcmV0dXJuIFwiTWlzc1wiO1xuICAgIH1cbiAgICBpZiAoYXR0YWNrU3F1YXJlID09PSBcIm1pc3NcIikge1xuICAgICAgcmV0dXJuIFwiSW52YWxpZCBhdHRhY2s6IHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkXCI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhdHRhY2tTcXVhcmUgPT09IFwib2JqZWN0XCIgJiYgYXR0YWNrU3F1YXJlLmlzSGl0KSB7XG4gICAgICByZXR1cm4gXCJJbnZhbGlkIGF0dGFjazogc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWRcIjtcbiAgICB9XG5cbiAgICBhdHRhY2tTcXVhcmUuaXNIaXQgPSB0cnVlO1xuXG4gICAgY29uc3QgaGl0TXNnID0gYXR0YWNrU3F1YXJlLnNoaXAuaGl0KCk7XG5cbiAgICBpZiAoX2FsbFN1bmsoKSkge1xuICAgICAgcmV0dXJuIFwiQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlwiO1xuICAgIH1cblxuICAgIHJldHVybiBoaXRNc2c7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHNoaXBzLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmQ7XG4iLCJjb25zdCBwbGF5ZXIgPSAoY29tKSA9PiB7XG4gIGNvbnN0IG1hcCA9IFtdO1xuXG4gIChmdW5jdGlvbiBfY3JlYXRlTWFwKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgbWFwW2ldID0gbmV3IEFycmF5KDEwKS5maWxsKG51bGwpO1xuICAgIH1cbiAgfSkoKTtcblxuICBmdW5jdGlvbiBfY2hlY2tTdW5rKHRhcmdldEJvYXJkLCBjb29yZCkge1xuICAgIGNvbnN0IHRhcmdldFNxdWFyZSA9IHRhcmdldEJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV07XG5cbiAgICBpZiAodGFyZ2V0U3F1YXJlICYmIHR5cGVvZiB0YXJnZXRTcXVhcmUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmICh0YXJnZXRTcXVhcmUuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBfdXBkYXRlU3Vua2VuKHRhcmdldEJvYXJkKSB7XG4gICAgbWFwLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgIGlmIChfY2hlY2tTdW5rKHRhcmdldEJvYXJkLCBbcm93SW5kZXgsIGNvbEluZGV4XSkpIHtcbiAgICAgICAgICBtYXBbcm93SW5kZXhdW2NvbEluZGV4XSA9IFwic3Vua1wiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFjayh0YXJnZXRCb2FyZCwgdGFyZ2V0U3F1YXJlKSB7XG4gICAgY29uc3QgYXR0YWNrTXNnID0gdGFyZ2V0Qm9hcmQucmVjZWl2ZUF0dGFjayh0YXJnZXRTcXVhcmUpO1xuXG4gICAgaWYgKGF0dGFja01zZyA9PT0gXCJNaXNzXCIpIHtcbiAgICAgIG1hcFt0YXJnZXRTcXVhcmVbMF1dW3RhcmdldFNxdWFyZVsxXV0gPSBhdHRhY2tNc2cudG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKGF0dGFja01zZyA9PT0gXCJIaXRcIikge1xuICAgICAgbWFwW3RhcmdldFNxdWFyZVswXV1bdGFyZ2V0U3F1YXJlWzFdXSA9IFwiaGl0XCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGF0dGFja01zZyA9PT0gXCJZb3Ugc3VuayBteSBiYXR0bGVzaGlwXCIgfHxcbiAgICAgIGF0dGFja01zZyA9PT0gXCJBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXCJcbiAgICApIHtcbiAgICAgIG1hcFt0YXJnZXRTcXVhcmVbMF1dW3RhcmdldFNxdWFyZVsxXV0gPSBcInN1bmtcIjtcbiAgICB9XG5cbiAgICBfdXBkYXRlU3Vua2VuKHRhcmdldEJvYXJkLmJvYXJkKTtcblxuICAgIHJldHVybiBhdHRhY2tNc2c7XG4gIH1cblxuICAvLyBsaXN0IG9mIGxlZ2FsIG1vdmVzIHdoaWNoIGlzIHVwZGF0ZWQgZXZlcnkgdGltZSBjb21Nb3ZlIGlzIGNhbGxlZFxuICBjb25zdCBfbGVnYWxNb3ZlcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgbW92ZUxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wgKz0gMSkge1xuICAgICAgICBtb3ZlTGlzdC5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb3ZlTGlzdDtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBjb21Nb3ZlKHRhcmdldEJvYXJkKSB7XG4gICAgLy8gY2hvb3NlIHJvdyBhbmQgY29sdW1uIG9mIGF0dGFja2VkIHNxdWFyZSByYW5kb21seVxuXG4gICAgY29uc3QgbW92ZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX2xlZ2FsTW92ZXMubGVuZ3RoKTtcbiAgICBjb25zdCBhdHRhY2tTcXVhcmUgPSBfbGVnYWxNb3Zlc1ttb3ZlSW5kZXhdO1xuICAgIF9sZWdhbE1vdmVzLnNwbGljZShtb3ZlSW5kZXgsIDEpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXR0YWNrKHRhcmdldEJvYXJkLCBhdHRhY2tTcXVhcmUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1hcCxcbiAgICBhdHRhY2ssXG4gICAgY29tTW92ZSxcbiAgICBjb20sXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllcjtcbiIsImNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGxldCBfaGl0cyA9IDA7XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGlmIChfaGl0cyA+PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICBfaGl0cyArPSAxO1xuXG4gICAgaWYgKGlzU3VuaygpKSB7XG4gICAgICByZXR1cm4gXCJZb3Ugc3VuayBteSBiYXR0bGVzaGlwXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiSGl0XCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBnYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG5jb25zdCBwbGF5ZXIgPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5jb25zdCB1cGRhdGUgPSByZXF1aXJlKFwiLi9ET01VcGRhdGVcIik7XG5jb25zdCBnYW1lID0gcmVxdWlyZShcIi4vZ2FtZVwiKTtcblxuY29uc3QgcDEgPSBwbGF5ZXIoZmFsc2UpO1xuY29uc3QgcDFCb2FyZCA9IGdhbWVib2FyZCgpO1xuY29uc3QgcDIgPSBwbGF5ZXIodHJ1ZSk7XG5jb25zdCBwMkJvYXJkID0gZ2FtZWJvYXJkKCk7XG5cbmdhbWUucGxhY2VTaGlwcyhwMUJvYXJkKTtcbmdhbWUucGxhY2VTaGlwcyhwMkJvYXJkKTtcblxudXBkYXRlLmRyYXdCb2FyZChwMS5tYXAsIHAxQm9hcmQpO1xuXG51cGRhdGUubWFrZUNsaWNrYWJsZShwMSwgcDFCb2FyZCwgcDIsIHAyQm9hcmQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
