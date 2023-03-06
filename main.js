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
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
          );
        // Imports

        var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/Rubik_Iso/RubikIso-Regular.ttf */ "./src/fonts/Rubik_Iso/RubikIso-Regular.ttf"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_URL_IMPORT_1___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/PT_Sans_Narrow/PTSansNarrow-Regular.ttf */ "./src/fonts/PT_Sans_Narrow/PTSansNarrow-Regular.ttf"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_URL_IMPORT_2___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/PT_Sans_Narrow/PTSansNarrow-Bold.ttf */ "./src/fonts/PT_Sans_Narrow/PTSansNarrow-Bold.ttf"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_URL_IMPORT_3___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./imgs/bg_tile.png */ "./src/imgs/bg_tile.png"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        var ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___
          );
        var ___CSS_LOADER_URL_REPLACEMENT_1___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_1___
          );
        var ___CSS_LOADER_URL_REPLACEMENT_2___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_2___
          );
        var ___CSS_LOADER_URL_REPLACEMENT_3___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_3___
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '@font-face {\n  font-family: "Rubik Iso";\n  src: url(' +
            ___CSS_LOADER_URL_REPLACEMENT_0___ +
            ');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "PT Sans Narrow";\n  src: url(' +
            ___CSS_LOADER_URL_REPLACEMENT_1___ +
            ');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "PT Sans Narrow";\n  src: url(' +
            ___CSS_LOADER_URL_REPLACEMENT_2___ +
            ');\n  font-weight: 700;\n  font-style: bold;\n}\n\n@media screen and (max-width: 1000px){\n\n  .menu .title-text{\n    font-size: 10vw;\n  }\n\n  .player-form .name-wrap{\n    flex-direction: column;\n  }\n\n  .field-wrap{\n    margin-bottom: 10px;\n  }\n\n  .frame{\n    --frame-width: 80%;\n    --frame-height: 90%;\n    width: 80%;\n  }\n\n  .map{\n    margin-top: 25px;\n    margin-bottom: 25px;\n  }\n\n  .board{\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    --view-size: calc(90vh / 3);\n    --square-size: calc(var(--view-size) / 10);\n  }\n\n  .frame .info{\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    width: 100%;\n  }\n}\n\n:root {\n  --view-size: calc(50vw / 3);\n  --square-size: calc(var(--view-size) / 10);\n  --water-color: #e6eefb;\n  --grid-lines: 0.5px solid rgb(104, 104, 104);\n  --miss: white;\n  --hit: rgb(255, 133, 133);\n  --frame-width: 60vw;\n  --frame-height: 65vh;\n}\n\nbody {\n  background-repeat: repeat;\n  font-family: "PT Sans Narrow";\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  background: url(' +
            ___CSS_LOADER_URL_REPLACEMENT_3___ +
            ');\n  overflow: hidden;\n}\n\n.board-wrap {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.frame {\n  box-sizing: border-box;\n  height: var(--frame-height);\n  width: var(--frame-width);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-color: white;\n}\n\n.menu {\n  height: var(--frame-height);\n  width: var(--frame-width);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  background-color: #fff;\n  z-index: 100;\n}\n\n.title {\n  width: min-content;\n}\n\n.title-text {\n  overflow: hidden;\n  font-family: "Rubik Iso";\n  width: 0 auto;\n  font-size: 64px;\n  animation: typing 1.5s steps(15, end);\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n.board-square.selection-hover-bad {\n  background-color: rgb(246, 109, 109);\n}\n\n.field-wrap {\n  display: flex;\n  flex-direction: column;\n  margin-right: 25px;\n}\n\n.p2-wrap {\n  display: flex;\n  flex-direction: column;\n}\n\n.player-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 50%;\n  position: relative;\n}\n\n.blind {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n\n.placer-bg {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  margin: 10px;\n}\n\n.place-map > .selection-hover {\n  background-color: rgb(143, 255, 143);\n}\n\n.info {\n  height: 10%;\n  width: 75%;\n  display: flex;\n  flex: 0;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.turn-wrap {\n  width: 33%;\n  display: flex;\n  justify-content: center;\n}\n\n.move-wrap {\n  width: 33%;\n  display: flex;\n  justify-content: center;\n}\n\n.btn-wrap {\n  width: 33%;\n  display: flex;\n  justify-content: center;\n}\n\n.map {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.own-board {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.board-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.board-square.ship-unhit {\n  background-color: var(--water-color);\n}\n\n.board-square.ship-hit {\n  background-color: red;\n}\n\n.board-square.ship-sunk {\n  background-color: #ff6565;\n}\n\n.board-square.board-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-hit {\n  background-color: red;\n}\n\n.map-square.map-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-sunk {\n  background-color: #ff6565;\n}\n\n.ship {\n  position: absolute;\n  border: 2px solid rgb(69, 69, 69);\n  background-color: rgba(50, 50, 50, 0.25);\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n\n.rotate {\n  margin: 10px;\n}\n\n#start-button {\n  border: var(--grid-lines);\n  border-radius: 3px;\n  background-color: rgb(252, 252, 252);\n  color: black;\n  cursor: pointer;\n  width: 25%;\n  min-width: max-content;\n  min-height: max-content;\n  height: 25px;\n}\n\n#start-button:hover {\n  background-color: #ff6565;\n  color: white;\n}\n\n.name-wrap {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,wBAAwB;EACxB,4CAAkD;EAClD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,4CAAyD;EACzD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,4CAAsD;EACtD,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;EAEE;IACE,eAAe;EACjB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;IAClB,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,2BAA2B;IAC3B,0CAA0C;EAC5C;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,WAAW;EACb;AACF;;AAEA;EACE,2BAA2B;EAC3B,0CAA0C;EAC1C,sBAAsB;EACtB,4CAA4C;EAC5C,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,6BAA6B;EAC7B,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,mDAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,2BAA2B;EAC3B,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;EAC3B,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,aAAa;EACb,eAAe;EACf,qCAAqC;AACvC;;AAEA;EACE;IACE,QAAQ;EACV;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;EACX,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,UAAU;EACV,aAAa;EACb,OAAO;EACP,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,iCAAiC;EACjC,wCAAwC;EACxC,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,oCAAoC;EACpC,YAAY;EACZ,eAAe;EACf,UAAU;EACV,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,mBAAmB;AACrB",
            sourcesContent: [
              '@font-face {\n  font-family: "Rubik Iso";\n  src: url("./fonts/Rubik_Iso/RubikIso-Regular.ttf");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "PT Sans Narrow";\n  src: url(./fonts/PT_Sans_Narrow/PTSansNarrow-Regular.ttf);\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "PT Sans Narrow";\n  src: url(./fonts/PT_Sans_Narrow/PTSansNarrow-Bold.ttf);\n  font-weight: 700;\n  font-style: bold;\n}\n\n@media screen and (max-width: 1000px){\n\n  .menu .title-text{\n    font-size: 10vw;\n  }\n\n  .player-form .name-wrap{\n    flex-direction: column;\n  }\n\n  .field-wrap{\n    margin-bottom: 10px;\n  }\n\n  .frame{\n    --frame-width: 80%;\n    --frame-height: 90%;\n    width: 80%;\n  }\n\n  .map{\n    margin-top: 25px;\n    margin-bottom: 25px;\n  }\n\n  .board{\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    --view-size: calc(90vh / 3);\n    --square-size: calc(var(--view-size) / 10);\n  }\n\n  .frame .info{\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    width: 100%;\n  }\n}\n\n:root {\n  --view-size: calc(50vw / 3);\n  --square-size: calc(var(--view-size) / 10);\n  --water-color: #e6eefb;\n  --grid-lines: 0.5px solid rgb(104, 104, 104);\n  --miss: white;\n  --hit: rgb(255, 133, 133);\n  --frame-width: 60vw;\n  --frame-height: 65vh;\n}\n\nbody {\n  background-repeat: repeat;\n  font-family: "PT Sans Narrow";\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  background: url("./imgs/bg_tile.png");\n  overflow: hidden;\n}\n\n.board-wrap {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.frame {\n  box-sizing: border-box;\n  height: var(--frame-height);\n  width: var(--frame-width);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-color: white;\n}\n\n.menu {\n  height: var(--frame-height);\n  width: var(--frame-width);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  background-color: #fff;\n  z-index: 100;\n}\n\n.title {\n  width: min-content;\n}\n\n.title-text {\n  overflow: hidden;\n  font-family: "Rubik Iso";\n  width: 0 auto;\n  font-size: 64px;\n  animation: typing 1.5s steps(15, end);\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n.board-square.selection-hover-bad {\n  background-color: rgb(246, 109, 109);\n}\n\n.field-wrap {\n  display: flex;\n  flex-direction: column;\n  margin-right: 25px;\n}\n\n.p2-wrap {\n  display: flex;\n  flex-direction: column;\n}\n\n.player-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.board {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 50%;\n  position: relative;\n}\n\n.blind {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n\n.placer-bg {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  margin: 10px;\n}\n\n.place-map > .selection-hover {\n  background-color: rgb(143, 255, 143);\n}\n\n.info {\n  height: 10%;\n  width: 75%;\n  display: flex;\n  flex: 0;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.turn-wrap {\n  width: 33%;\n  display: flex;\n  justify-content: center;\n}\n\n.move-wrap {\n  width: 33%;\n  display: flex;\n  justify-content: center;\n}\n\n.btn-wrap {\n  width: 33%;\n  display: flex;\n  justify-content: center;\n}\n\n.map {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.own-board {\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.board-square {\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: var(--grid-lines);\n  background-color: var(--water-color);\n  border-radius: 3px;\n}\n\n.board-square.ship-unhit {\n  background-color: var(--water-color);\n}\n\n.board-square.ship-hit {\n  background-color: red;\n}\n\n.board-square.ship-sunk {\n  background-color: #ff6565;\n}\n\n.board-square.board-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-hit {\n  background-color: red;\n}\n\n.map-square.map-miss {\n  background-color: var(--miss);\n}\n\n.map-square.map-sunk {\n  background-color: #ff6565;\n}\n\n.ship {\n  position: absolute;\n  border: 2px solid rgb(69, 69, 69);\n  background-color: rgba(50, 50, 50, 0.25);\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n\n.rotate {\n  margin: 10px;\n}\n\n#start-button {\n  border: var(--grid-lines);\n  border-radius: 3px;\n  background-color: rgb(252, 252, 252);\n  color: black;\n  cursor: pointer;\n  width: 25%;\n  min-width: max-content;\n  min-height: max-content;\n  height: 25px;\n}\n\n#start-button:hover {\n  background-color: #ff6565;\n  color: white;\n}\n\n.name-wrap {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n}\n',
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

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
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
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
              '"'
            );
          }
          return url;
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
        const turnText = document.querySelector(".turn-text");
        const moveText = document.querySelector(".move-text");
        const blind = document.querySelector(".blind");
        const btnWrap = document.querySelector(".btn-wrap");
        const info = document.querySelector(".info");

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
            startBtn.addEventListener("click", (e) => {
              e.preventDefault();

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
            const maxWidth = window.matchMedia("(max-width: 1000px)");
            let squareSize;

            if (maxWidth.matches) {
              squareSize = 90 / 30;
            } else {
              squareSize = 50 / 30;
            }

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

            if (maxWidth.matches) {
              ship.style.height = `${height}vh`;
              ship.style.width = `${width}vh`;

              ship.style.bottom = `${squareSize * start[0]}vh`;
              ship.style.left = `${squareSize * start[1]}vh`;
            } else {
              ship.style.height = `${height}vw`;
              ship.style.width = `${width}vw`;

              ship.style.bottom = `${squareSize * start[0]}vw`;
              ship.style.left = `${squareSize * start[1]}vw`;
            }

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

            btnWrap.appendChild(passButton);

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
            info.style.visibility = "hidden";
            map.style.visibility = "hidden";
            ownBoard.style.visibility = "hidden";

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
              info.style.visibility = "visible";
              map.style.visibility = "visible";
              ownBoard.style.visibility = "visible";
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
              moveText.textContent = `${player.playerName}: ${result}`;

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
                  moveText.textContent = `${player.playerName}: ${result}`;

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

    /***/ "./src/fonts/PT_Sans_Narrow/PTSansNarrow-Bold.ttf":
      /*!********************************************************!*\
  !*** ./src/fonts/PT_Sans_Narrow/PTSansNarrow-Bold.ttf ***!
  \********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__.p + "6c0b55dfa0028e0768af.ttf";

        /***/
      },

    /***/ "./src/fonts/PT_Sans_Narrow/PTSansNarrow-Regular.ttf":
      /*!***********************************************************!*\
  !*** ./src/fonts/PT_Sans_Narrow/PTSansNarrow-Regular.ttf ***!
  \***********************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__.p + "68e86cce5b8c98f6305b.ttf";

        /***/
      },

    /***/ "./src/fonts/Rubik_Iso/RubikIso-Regular.ttf":
      /*!**************************************************!*\
  !*** ./src/fonts/Rubik_Iso/RubikIso-Regular.ttf ***!
  \**************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__.p + "d5094e4572c98e06cb4c.ttf";

        /***/
      },

    /***/ "./src/imgs/bg_tile.png":
      /*!******************************!*\
  !*** ./src/imgs/bg_tile.png ***!
  \******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__.p + "a3dafbe530d7d1c9f406.png";

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
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
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
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
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
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length)
          scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
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
        p2Name.setAttribute("placeholder", "Player Two");
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
        p1 = player(false, "Player One");
      } else {
        p1 = player(false, p1Name.value);
      }

      if (AIcheck.checked) {
        p2 = player(true);
      } else if (!p2Name.value) {
        p2 = player(false, "Player Two");
      } else {
        p2 = player(false, p2Name.value);
      }

      update.drawShipPlacer(p1, p1Board, p2, p2Board);
    });
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNqSkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQyx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3ZGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCOztBQUVyQixrQkFBa0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2QyxlQUFlLG1CQUFPLENBQUMsaUNBQVU7QUFDakMsZUFBZSxtQkFBTyxDQUFDLHVDQUFhOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTVVwZGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SdWJpa19Jc28vUnViaWtJc28tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BUX1NhbnNfTmFycm93L1BUU2Fuc05hcnJvdy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvUFRfU2Fuc19OYXJyb3cvUFRTYW5zTmFycm93LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2JnX3RpbGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrIElzb1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUFQgU2FucyBOYXJyb3dcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBUIFNhbnMgTmFycm93XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBib2xkO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpe1xcblxcbiAgLm1lbnUgLnRpdGxlLXRleHR7XFxuICAgIGZvbnQtc2l6ZTogMTB2dztcXG4gIH1cXG5cXG4gIC5wbGF5ZXItZm9ybSAubmFtZS13cmFwe1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmZpZWxkLXdyYXB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuXFxuICAuZnJhbWV7XFxuICAgIC0tZnJhbWUtd2lkdGg6IDgwJTtcXG4gICAgLS1mcmFtZS1oZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5tYXB7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICB9XFxuXFxuICAuYm9hcmR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLS12aWV3LXNpemU6IGNhbGMoOTB2aCAvIDMpO1xcbiAgICAtLXNxdWFyZS1zaXplOiBjYWxjKHZhcigtLXZpZXctc2l6ZSkgLyAxMCk7XFxuICB9XFxuXFxuICAuZnJhbWUgLmluZm97XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuOnJvb3Qge1xcbiAgLS12aWV3LXNpemU6IGNhbGMoNTB2dyAvIDMpO1xcbiAgLS1zcXVhcmUtc2l6ZTogY2FsYyh2YXIoLS12aWV3LXNpemUpIC8gMTApO1xcbiAgLS13YXRlci1jb2xvcjogI2U2ZWVmYjtcXG4gIC0tZ3JpZC1saW5lczogMC41cHggc29saWQgcmdiKDEwNCwgMTA0LCAxMDQpO1xcbiAgLS1taXNzOiB3aGl0ZTtcXG4gIC0taGl0OiByZ2IoMjU1LCAxMzMsIDEzMyk7XFxuICAtLWZyYW1lLXdpZHRoOiA2MHZ3O1xcbiAgLS1mcmFtZS1oZWlnaHQ6IDY1dmg7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUFQgU2FucyBOYXJyb3dcXFwiO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYm9hcmQtd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnJhbWUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogdmFyKC0tZnJhbWUtaGVpZ2h0KTtcXG4gIHdpZHRoOiB2YXIoLS1mcmFtZS13aWR0aCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51IHtcXG4gIGhlaWdodDogdmFyKC0tZnJhbWUtaGVpZ2h0KTtcXG4gIHdpZHRoOiB2YXIoLS1mcmFtZS13aWR0aCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi50aXRsZSB7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi50aXRsZS10ZXh0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrIElzb1xcXCI7XFxuICB3aWR0aDogMCBhdXRvO1xcbiAgZm9udC1zaXplOiA2NHB4O1xcbiAgYW5pbWF0aW9uOiB0eXBpbmcgMS41cyBzdGVwcygxNSwgZW5kKTtcXG59XFxuXFxuQGtleWZyYW1lcyB0eXBpbmcge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLmJvYXJkLXNxdWFyZS5zZWxlY3Rpb24taG92ZXItYmFkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDEwOSwgMTA5KTtcXG59XFxuXFxuLmZpZWxkLXdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxufVxcblxcbi5wMi13cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGxheWVyLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJsaW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ucGxhY2VyLWJnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMTAwO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucGxhY2UtbWFwID4gLnNlbGVjdGlvbi1ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQzLCAyNTUsIDE0Myk7XFxufVxcblxcbi5pbmZvIHtcXG4gIGhlaWdodDogMTAlO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnR1cm4td3JhcCB7XFxuICB3aWR0aDogMzMlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubW92ZS13cmFwIHtcXG4gIHdpZHRoOiAzMyU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5idG4td3JhcCB7XFxuICB3aWR0aDogMzMlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFwIHtcXG4gIGhlaWdodDogdmFyKC0tdmlldy1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS12aWV3LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1hcC1zcXVhcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1zaXplKTtcXG4gIGJvcmRlcjogdmFyKC0tZ3JpZC1saW5lcyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5vd24tYm9hcmQge1xcbiAgaGVpZ2h0OiB2YXIoLS12aWV3LXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXZpZXctc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IHZhcigtLXNxdWFyZS1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtc2l6ZSk7XFxuICBib3JkZXI6IHZhcigtLWdyaWQtbGluZXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLnNoaXAtdW5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItY29sb3IpO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLnNoaXAtaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZS5zaGlwLXN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjU2NTtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZS5ib2FyZC1taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MpO1xcbn1cXG5cXG4ubWFwLXNxdWFyZS5tYXAtaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1hcC1zcXVhcmUubWFwLW1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbi5tYXAtc3F1YXJlLm1hcC1zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY1NjU7XFxufVxcblxcbi5zaGlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig2OSwgNjksIDY5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgMC4yNSk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3N0YXJ0LWJ1dHRvbiB7XFxuICBib3JkZXI6IHZhcigtLWdyaWQtbGluZXMpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDI1JTtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuI3N0YXJ0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NTY1O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmFtZS13cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQWtEO0VBQ2xELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNENBQXlEO0VBQ3pELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNENBQXNEO0VBQ3RELGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUU7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwwQ0FBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLDRDQUE0QztFQUM1QyxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1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QVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWsgSXNvXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1J1YmlrX0lzby9SdWJpa0lzby1SZWd1bGFyLnR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBUIFNhbnMgTmFycm93XFxcIjtcXG4gIHNyYzogdXJsKC4vZm9udHMvUFRfU2Fuc19OYXJyb3cvUFRTYW5zTmFycm93LVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQVCBTYW5zIE5hcnJvd1xcXCI7XFxuICBzcmM6IHVybCguL2ZvbnRzL1BUX1NhbnNfTmFycm93L1BUU2Fuc05hcnJvdy1Cb2xkLnR0Zik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogYm9sZDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcXG5cXG4gIC5tZW51IC50aXRsZS10ZXh0e1xcbiAgICBmb250LXNpemU6IDEwdnc7XFxuICB9XFxuXFxuICAucGxheWVyLWZvcm0gLm5hbWUtd3JhcHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5maWVsZC13cmFwe1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLmZyYW1le1xcbiAgICAtLWZyYW1lLXdpZHRoOiA4MCU7XFxuICAgIC0tZnJhbWUtaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAubWFwe1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgfVxcblxcbiAgLmJvYXJke1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC0tdmlldy1zaXplOiBjYWxjKDkwdmggLyAzKTtcXG4gICAgLS1zcXVhcmUtc2l6ZTogY2FsYyh2YXIoLS12aWV3LXNpemUpIC8gMTApO1xcbiAgfVxcblxcbiAgLmZyYW1lIC5pbmZve1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbjpyb290IHtcXG4gIC0tdmlldy1zaXplOiBjYWxjKDUwdncgLyAzKTtcXG4gIC0tc3F1YXJlLXNpemU6IGNhbGModmFyKC0tdmlldy1zaXplKSAvIDEwKTtcXG4gIC0td2F0ZXItY29sb3I6ICNlNmVlZmI7XFxuICAtLWdyaWQtbGluZXM6IDAuNXB4IHNvbGlkIHJnYigxMDQsIDEwNCwgMTA0KTtcXG4gIC0tbWlzczogd2hpdGU7XFxuICAtLWhpdDogcmdiKDI1NSwgMTMzLCAxMzMpO1xcbiAgLS1mcmFtZS13aWR0aDogNjB2dztcXG4gIC0tZnJhbWUtaGVpZ2h0OiA2NXZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICBmb250LWZhbWlseTogXFxcIlBUIFNhbnMgTmFycm93XFxcIjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1ncy9iZ190aWxlLnBuZ1xcXCIpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJvYXJkLXdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZyYW1lIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IHZhcigtLWZyYW1lLWhlaWdodCk7XFxuICB3aWR0aDogdmFyKC0tZnJhbWUtd2lkdGgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudSB7XFxuICBoZWlnaHQ6IHZhcigtLWZyYW1lLWhlaWdodCk7XFxuICB3aWR0aDogdmFyKC0tZnJhbWUtd2lkdGgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpayBJc29cXFwiO1xcbiAgd2lkdGg6IDAgYXV0bztcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIGFuaW1hdGlvbjogdHlwaW5nIDEuNXMgc3RlcHMoMTUsIGVuZCk7XFxufVxcblxcbkBrZXlmcmFtZXMgdHlwaW5nIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2VsZWN0aW9uLWhvdmVyLWJhZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAxMDksIDEwOSk7XFxufVxcblxcbi5maWVsZC13cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4ucDItd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBsYXllci1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ibGluZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnBsYWNlci1iZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnBsYWNlLW1hcCA+IC5zZWxlY3Rpb24taG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MywgMjU1LCAxNDMpO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIHdpZHRoOiA3NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50dXJuLXdyYXAge1xcbiAgd2lkdGg6IDMzJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1vdmUtd3JhcCB7XFxuICB3aWR0aDogMzMlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYnRuLXdyYXAge1xcbiAgd2lkdGg6IDMzJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1hcCB7XFxuICBoZWlnaHQ6IHZhcigtLXZpZXctc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tdmlldy1zaXplKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5tYXAtc3F1YXJlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IHZhcigtLXNxdWFyZS1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtc2l6ZSk7XFxuICBib3JkZXI6IHZhcigtLWdyaWQtbGluZXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ub3duLWJvYXJkIHtcXG4gIGhlaWdodDogdmFyKC0tdmlldy1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS12aWV3LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLXNpemUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ncmlkLWxpbmVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZS5zaGlwLXVuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWNvbG9yKTtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZS5zaGlwLWhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuc2hpcC1zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY1NjU7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUuYm9hcmQtbWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLm1hcC1zcXVhcmUubWFwLWhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5tYXAtc3F1YXJlLm1hcC1taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MpO1xcbn1cXG5cXG4ubWFwLXNxdWFyZS5tYXAtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NTY1O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNjksIDY5LCA2OSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNzdGFydC1idXR0b24ge1xcbiAgYm9yZGVyOiB2YXIoLS1ncmlkLWxpbmVzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAyNSU7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbiNzdGFydC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjU2NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hbWUtd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmNvbnN0IG1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFwXCIpO1xuY29uc3Qgb3duQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93bi1ib2FyZFwiKTtcbmNvbnN0IHR1cm5UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dXJuLXRleHRcIik7XG5jb25zdCBtb3ZlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW92ZS10ZXh0XCIpO1xuY29uc3QgYmxpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsaW5kXCIpO1xuY29uc3QgYnRuV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXdyYXBcIik7XG5jb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuXG5jb25zdCB1cGRhdGUgPSAoKCkgPT4ge1xuXG4gIGZ1bmN0aW9uIF93cml0ZVR1cm4ocGxheWVyLCBvdmVyKSB7XG4gICAgaWYgKG92ZXIpIHtcbiAgICAgIHR1cm5UZXh0LnRleHRDb250ZW50ID0gYEdhbWUgb3Zlci4gJHtwbGF5ZXIucGxheWVyTmFtZX0gd2lucy5gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0dXJuVGV4dC50ZXh0Q29udGVudCA9IGAke3BsYXllci5wbGF5ZXJOYW1lfSdzIHR1cm5gO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VQbGFjZWFibGUoXG4gICAgcGxheWVyLFxuICAgIGJvYXJkLFxuICAgIGxlbmd0aCxcbiAgICBib2FyZERpdixcbiAgICBkaXJlY3Rpb24sXG4gICAgcmVwZWF0ID0gZmFsc2VcbiAgKSB7XG4gICAgY29uc3QgY3VycmVudEJvYXJkID0gYm9hcmREaXY7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYucGxhY2UtbWFwPmRpdi5ib2FyZC1zcXVhcmVcIik7XG5cbiAgICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZVwiKTtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnRuXCIpO1xuXG4gICAgcm90YXRlQnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblxuICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY3VycmVudEJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIF9kcmF3T3duQm9hcmQoYm9hcmQsIGJvYXJkRGl2KTtcblxuICAgICAgbWFrZVBsYWNlYWJsZShcbiAgICAgICAgcGxheWVyLFxuICAgICAgICBib2FyZCxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBib2FyZERpdixcbiAgICAgICAgTWF0aC5hYnMoZGlyZWN0aW9uIC0gMSksXG4gICAgICAgIHJlcGVhdFxuICAgICAgKTtcbiAgICAgIGRyYXdBbGxTaGlwcyhib2FyZCwgYm9hcmREaXYpO1xuICAgIH0pO1xuXG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBKU09OLnBhcnNlKHNxdWFyZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJvYXJkLWNvb3JkXCIpKTtcblxuICAgICAgICAvLyB1c2luZyBkaXJlY3Rpb24gcGFyYW1ldGVyIHRvIGRldGVybWluZSB3aGljaCBkaXJlY3Rpb24gdG8gc2hvdyBzaGlwc1xuICAgICAgICBjb25zdCBzZWNvbmRhcnkgPSBkaXJlY3Rpb247XG4gICAgICAgIGNvbnN0IHJvb3RJbmRleCA9IE1hdGguYWJzKGRpcmVjdGlvbiAtIDEpO1xuXG4gICAgICAgIGNvbnN0IHJvb3QgPSBjb29yZFtyb290SW5kZXhdO1xuICAgICAgICBjb25zdCBzaGFkb3cgPSBbXTtcblxuICAgICAgICBjb25zdCBleHRlbnQgPSByb290ICsgbGVuZ3RoO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBleHRlbnQgPCAxMSAmJlxuICAgICAgICAgIGJvYXJkLmNoZWNrUGF0aEVtcHR5KHJvb3QsIGNvb3JkW3NlY29uZGFyeV0sIGxlbmd0aCwgZGlyZWN0aW9uKVxuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gcm9vdDsgaSA8IHJvb3QgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgbGV0IHNoYWRvd2VkO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgIHNoYWRvd2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtYm9hcmQtY29vcmQ9XCJbJHtpfSwgJHtjb29yZFsxXX1dXCJdYFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hhZG93ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1ib2FyZC1jb29yZD1cIlske2Nvb3JkWzBdfSwgJHtpfV1cIl1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNoYWRvdy5wdXNoKHNoYWRvd2VkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzaGFkb3cuZm9yRWFjaCgoc2hhZG93ZWQpID0+IHtcbiAgICAgICAgICAgIHNoYWRvd2VkLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Rpb24taG92ZXJcIik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2hhZG93LmZvckVhY2goKHNoYWRvd2VkKSA9PiB7XG4gICAgICAgICAgICAgIHNoYWRvd2VkLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3Rpb24taG92ZXJcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGVuZDtcblxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICBlbmQgPSBbY29vcmRbcm9vdEluZGV4XSArIChsZW5ndGggLSAxKSwgY29vcmRbc2Vjb25kYXJ5XV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmQgPSBbY29vcmRbc2Vjb25kYXJ5XSwgY29vcmRbcm9vdEluZGV4XSArIChsZW5ndGggLSAxKV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvb3JkLnJldmVyc2UoKTtcbiAgICAgICAgICAgIGVuZC5yZXZlcnNlKCk7XG5cbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChsZW5ndGgsIGNvb3JkLCBlbmQpO1xuXG4gICAgICAgICAgICBjdXJyZW50Qm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgX2RyYXdPd25Cb2FyZChib2FyZCwgYm9hcmREaXYpO1xuICAgICAgICAgICAgZHJhd0FsbFNoaXBzKGJvYXJkLCBib2FyZERpdik7XG5cbiAgICAgICAgICAgIGlmIChsZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgICAgbWFrZVBsYWNlYWJsZShwbGF5ZXIsIGJvYXJkLCA0LCBib2FyZERpdiwgZGlyZWN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICBtYWtlUGxhY2VhYmxlKHBsYXllciwgYm9hcmQsIDMsIGJvYXJkRGl2LCBkaXJlY3Rpb24sIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDMgJiYgcmVwZWF0KSB7XG4gICAgICAgICAgICAgIG1ha2VQbGFjZWFibGUocGxheWVyLCBib2FyZCwgMywgYm9hcmREaXYsIGRpcmVjdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDMgJiYgIXJlcGVhdCkge1xuICAgICAgICAgICAgICBtYWtlUGxhY2VhYmxlKHBsYXllciwgYm9hcmQsIDIsIGJvYXJkRGl2LCBkaXJlY3Rpb24sIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDIgJiYgcmVwZWF0KSB7XG4gICAgICAgICAgICAgIG1ha2VQbGFjZWFibGUocGxheWVyLCBib2FyZCwgMiwgYm9hcmREaXYsIGRpcmVjdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDIgJiYgIXJlcGVhdCkge1xuICAgICAgICAgICAgICByb3RhdGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gcm9vdDsgaSA8IDEwICYmIGkgPCByb290ICsgbGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgICAgICBsZXQgc2hhZG93ZWQ7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgc2hhZG93ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1ib2FyZC1jb29yZD1cIlske2l9LCAke2Nvb3JkWzFdfV1cIl1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGFkb3dlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWJvYXJkLWNvb3JkPVwiWyR7Y29vcmRbMF19LCAke2l9XVwiXWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hhZG93LnB1c2goc2hhZG93ZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNoYWRvdy5mb3JFYWNoKChzaGFkb3dlZCkgPT4ge1xuICAgICAgICAgICAgc2hhZG93ZWQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvbi1ob3Zlci1iYWRcIik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2hhZG93LmZvckVhY2goKHNoYWRvd2VkKSA9PiB7XG4gICAgICAgICAgICAgIHNoYWRvd2VkLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3Rpb24taG92ZXItYmFkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1NoaXBQbGFjZXIocGxheWVyLCBnYW1lYm9hcmQsIG9wcCwgb3BwQm9hcmQpIHtcbiAgICBibGluZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgYmxpbmQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgY29uc3QgcGxhY2VyQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYWNlckJnLmNsYXNzTGlzdC5hZGQoXCJwbGFjZXItYmdcIik7XG4gICAgcGxhY2VyQmcuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGJsaW5kLmFwcGVuZENoaWxkKHBsYWNlckJnKTtcblxuICAgIGNvbnN0IHBsYWNlbWVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwbGFjZW1lbnRUZXh0LmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnQtdGV4dFwiKTtcbiAgICBwbGFjZW1lbnRUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyLnBsYXllck5hbWV9OiBwbGFjZSB5b3VyIHNoaXBzYDtcbiAgICBwbGFjZXJCZy5hcHBlbmRDaGlsZChwbGFjZW1lbnRUZXh0KTtcblxuICAgIGNvbnN0IHBsYWNlTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGFjZU1hcC5jbGFzc0xpc3QuYWRkKFwib3duLWJvYXJkXCIpO1xuICAgIHBsYWNlTWFwLmNsYXNzTGlzdC5hZGQoXCJwbGFjZS1tYXBcIik7XG4gICAgcGxhY2VyQmcuYXBwZW5kQ2hpbGQocGxhY2VNYXApO1xuXG4gICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByb3RhdGVCdG4uY2xhc3NMaXN0LmFkZChcInJvdGF0ZVwiKTtcbiAgICByb3RhdGVCdG4udGV4dENvbnRlbnQgPSBcIlJvdGF0ZVwiO1xuXG4gICAgcGxhY2VyQmcuYXBwZW5kQ2hpbGQocm90YXRlQnRuKTtcblxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwic3RhcnQtYnRuXCIpO1xuICAgIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJFbmQgUGxhY2VtZW50c1wiO1xuICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXG4gICAgcGxhY2VyQmcuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuXG4gICAgbGV0IG9wcFBsYWNlZCA9IGZhbHNlO1xuXG4gICAgLy8gYnV0dG9uIHdpbGwgZWl0aGVyIHNldCB1cCB0aGUgc2hpcCBwbGFjZXIgZm9yIHAyIG9yIHN0YXJ0IHRoZSBnYW1lXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghb3BwLmNvbSAmJiAhb3BwUGxhY2VkKSB7XG4gICAgICAgIHBsYWNlTWFwLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICAvLyBjbG9uZSByb3RhdGUgYnV0dG9uIGluIG9yZGVyIHRvIHJlbW92ZSBsaXN0ZW5lcnNcbiAgICAgICAgY29uc3Qgcm90YXRlQ2xvbmUgPSByb3RhdGVCdG4uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBwbGFjZXJCZy5yZXBsYWNlQ2hpbGQocm90YXRlQ2xvbmUsIHJvdGF0ZUJ0bik7XG4gICAgICAgIHBsYWNlbWVudFRleHQudGV4dENvbnRlbnQgPSBgJHtvcHAucGxheWVyTmFtZX06IHBsYWNlIHlvdXIgc2hpcHNgO1xuICAgICAgICBfZHJhd093bkJvYXJkKG9wcEJvYXJkLCBwbGFjZU1hcCk7XG4gICAgICAgIG1ha2VQbGFjZWFibGUob3BwLCBvcHBCb2FyZCwgNSwgcGxhY2VNYXAsIDEsIGZhbHNlKTtcbiAgICAgICAgZHJhd0FsbFNoaXBzKG9wcEJvYXJkLCBwbGFjZU1hcCk7XG5cbiAgICAgICAgb3BwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICB9IGVsc2UgaWYgKCFvcHAuY29tKSB7XG4gICAgICAgIF9kcmF3QmxpbmQocGxheWVyLCBnYW1lYm9hcmQsIG9wcCwgb3BwQm9hcmQpO1xuICAgICAgICBwbGFjZXJCZy5yZW1vdmVDaGlsZChzdGFydEJ0bik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHBCb2FyZC5wbGFjZVJhbmRvbSgpO1xuICAgICAgICBkcmF3Qm9hcmQocGxheWVyLm1hcCwgZ2FtZWJvYXJkKTtcbiAgICAgICAgbWFrZUNsaWNrYWJsZShwbGF5ZXIsIGdhbWVib2FyZCwgb3BwLCBvcHBCb2FyZCk7XG4gICAgICAgIGJsaW5kLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBwbGFjZXJCZy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdHVyblRleHQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIucGxheWVyTmFtZX0ncyB0dXJuYDtcbiAgICAgICAgcGxhY2VyQmcucmVtb3ZlQ2hpbGQoc3RhcnRCdG4pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RyYXdPd25Cb2FyZChnYW1lYm9hcmQsIHBsYWNlTWFwKTtcbiAgICBtYWtlUGxhY2VhYmxlKHBsYXllciwgZ2FtZWJvYXJkLCA1LCBwbGFjZU1hcCwgMSwgZmFsc2UpO1xuXG4gICAgZHJhd0FsbFNoaXBzKGdhbWVib2FyZCwgcGxhY2VNYXApO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1NoaXAoc3RhcnQsIGVuZCwgbGVuZ3RoLCBib2FyZERpdikge1xuICAgIGNvbnN0IG1heFdpZHRoID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDAwcHgpXCIpO1xuICAgIGxldCBzcXVhcmVTaXplO1xuXG4gICAgaWYobWF4V2lkdGgubWF0Y2hlcyl7XG4gICAgICBzcXVhcmVTaXplID0gOTAgLyAzMDtcbiAgICB9ZWxzZXtcbiAgICAgIHNxdWFyZVNpemUgPSA1MCAvIDMwO1xuICAgfVxuXG4gICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcblxuICAgIGxldCBoZWlnaHQgPSAxO1xuICAgIGxldCB3aWR0aCA9IDE7XG5cbiAgICBpZiAoZW5kWzBdIC0gc3RhcnRbMF0gPiAwKSB7XG4gICAgICBoZWlnaHQgPSBsZW5ndGggKiBzcXVhcmVTaXplO1xuICAgICAgd2lkdGggPSBzcXVhcmVTaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWR0aCA9IGxlbmd0aCAqIHNxdWFyZVNpemU7XG4gICAgICBoZWlnaHQgPSBzcXVhcmVTaXplO1xuICAgIH1cblxuICAgIGlmKG1heFdpZHRoLm1hdGNoZXMpe1xuICAgICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9dmhgO1xuICAgICAgc2hpcC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXZoYDtcblxuICAgICAgc2hpcC5zdHlsZS5ib3R0b20gPSBgJHtzcXVhcmVTaXplICogc3RhcnRbMF19dmhgO1xuICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7c3F1YXJlU2l6ZSAqIHN0YXJ0WzFdfXZoYDtcbiAgICB9ZWxzZXtcbiAgICAgIHNoaXAuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXZ3YDtcbiAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBgJHt3aWR0aH12d2A7XG5cbiAgICAgIHNoaXAuc3R5bGUuYm90dG9tID0gYCR7c3F1YXJlU2l6ZSAqIHN0YXJ0WzBdfXZ3YDtcbiAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke3NxdWFyZVNpemUgKiBzdGFydFsxXX12d2A7XG4gICB9XG5cbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChzaGlwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdBbGxTaGlwcyhib2FyZCwgYm9hcmREaXYpIHtcbiAgICBib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBkcmF3U2hpcChzaGlwLnN0YXJ0LCBzaGlwLmVuZCwgc2hpcC5sZW5ndGgsIGJvYXJkRGl2KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kcmF3TWFwKHBsYXllck1hcCkge1xuICAgIHBsYXllck1hcFxuICAgICAgLnNsaWNlKClcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gOSAtIGluZGV4O1xuXG4gICAgICAgIHJvdy5mb3JFYWNoKChzcXVhcmUsIHNxdWFyZUluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29sSW5kZXggPSBzcXVhcmVJbmRleCAlIDEwO1xuXG4gICAgICAgICAgY29uc3QgbWFwU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXBTcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1hcC1zcXVhcmVcIik7XG5cbiAgICAgICAgICBtYXBTcXVhcmUuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJkYXRhLW1hcC1jb29yZFwiLFxuICAgICAgICAgICAgYFske2NvbEluZGV4fSwgJHtyb3dJbmRleH1dYFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoc3F1YXJlKSB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgICAgIG1hcFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWFwLWhpdFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlID09PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgICBtYXBTcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1hcC1taXNzXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzcXVhcmUgPT09IFwic3Vua1wiKSB7XG4gICAgICAgICAgICAgIG1hcFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWFwLXN1bmtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWFwLmFwcGVuZENoaWxkKG1hcFNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfZHJhd093bkJvYXJkKHBsYXllckJvYXJkLCBib2FyZERpdikge1xuICAgIHBsYXllckJvYXJkLmJvYXJkXG4gICAgICAuc2xpY2UoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSA5IC0gaW5kZXg7XG5cbiAgICAgICAgcm93LmZvckVhY2goKHNxdWFyZSwgc3F1YXJlSW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2xJbmRleCA9IHNxdWFyZUluZGV4ICUgMTA7XG5cbiAgICAgICAgICBjb25zdCBib2FyZFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgYm9hcmRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXNxdWFyZVwiKTtcblxuICAgICAgICAgIGJvYXJkU3F1YXJlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwiZGF0YS1ib2FyZC1jb29yZFwiLFxuICAgICAgICAgICAgYFske2NvbEluZGV4fSwgJHtyb3dJbmRleH1dYFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHNxdWFyZSBpcyBlbXB0eS5cbiAgICAgICAgICAvLyBpZiBub3QsIGFkZCBjbGFzcyB0byBpdFxuICAgICAgICAgIGlmIChzcXVhcmUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3F1YXJlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgIGlmIChzcXVhcmUuaXNIaXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgIGJvYXJkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN1bmtcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGJvYXJkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWhpdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9hcmRTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXAtdW5oaXRcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlID09PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgICBib2FyZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtbWlzc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2FyZERpdi5hcHBlbmRDaGlsZChib2FyZFNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3Qm9hcmQocGxheWVyTWFwLCBwbGF5ZXJCb2FyZCkge1xuICAgIFxuICAgIG1hcC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgb3duQm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgX2RyYXdNYXAocGxheWVyTWFwKTtcbiAgICBfZHJhd093bkJvYXJkKHBsYXllckJvYXJkLCBvd25Cb2FyZCk7XG4gICAgZHJhd0FsbFNoaXBzKHBsYXllckJvYXJkLCBvd25Cb2FyZCk7XG4gIH1cblxuICBmdW5jdGlvbiBfZHJhd1Bhc3NCdXR0b24ocGxheWVyLCBwbGF5ZXJCb2FyZCwgb3Bwb25lbnQsIG9wcG9uZW50Qm9hcmQpIHtcbiAgICBjb25zdCBwYXNzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwYXNzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwYXNzLWJ1dHRvblwiKTtcbiAgICBwYXNzQnV0dG9uLnRleHRDb250ZW50ID0gXCJQYXNzIHR1cm5cIjtcblxuICAgIGJ0bldyYXAuYXBwZW5kQ2hpbGQocGFzc0J1dHRvbik7XG5cbiAgICBwYXNzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIXBsYXllci5jb20pIHtcbiAgICAgICAgX2RyYXdCbGluZChwbGF5ZXIsIHBsYXllckJvYXJkLCBvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCk7XG4gICAgICAgIHBhc3NCdXR0b24ucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXNzQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICBfd3JpdGVUdXJuKHBsYXllciwgZmFsc2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBfcGFzc1R1cm4ocGxheWVyLCBwbGF5ZXJCb2FyZCwgb3Bwb25lbnQsIG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RyYXdCbGluZChwbGF5ZXIsIHBsYXllckJvYXJkLCBvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCkge1xuICAgIGJsaW5kLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBibGluZC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgaW5mby5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBtYXAuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgb3duQm9hcmQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgICBjb25zdCBwYXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhc3NUZXh0LmNsYXNzTGlzdC5hZGQoXCJwYXNzLXRleHRcIik7XG4gICAgcGFzc1RleHQudGV4dENvbnRlbnQgPSBgUGFzcyB0aGUgZGV2aWNlIHRvICR7cGxheWVyLnBsYXllck5hbWV9YDtcblxuICAgIGNvbnN0IHR1cm5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHR1cm5CdXR0b24udGV4dENvbnRlbnQgPSBcIkJlZ2luIFR1cm5cIjtcblxuICAgIGJsaW5kLmFwcGVuZENoaWxkKHBhc3NUZXh0KTtcbiAgICBibGluZC5hcHBlbmRDaGlsZCh0dXJuQnV0dG9uKTtcblxuICAgIHR1cm5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIF9wYXNzVHVybihwbGF5ZXIsIHBsYXllckJvYXJkLCBvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCk7XG4gICAgICBibGluZC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIGluZm8uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgbWFwLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIG93bkJvYXJkLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9wYXNzVHVybihwbGF5ZXIsIHBsYXllckJvYXJkLCBvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCkge1xuICAgIGlmIChwbGF5ZXIuY29tID09PSBmYWxzZSkge1xuICAgICAgZHJhd0JvYXJkKHBsYXllci5tYXAsIHBsYXllckJvYXJkKTtcbiAgICAgIG1ha2VDbGlja2FibGUocGxheWVyLCBwbGF5ZXJCb2FyZCwgb3Bwb25lbnQsIG9wcG9uZW50Qm9hcmQpO1xuICAgICAgX3dyaXRlVHVybihwbGF5ZXIsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmNvbU1vdmUob3Bwb25lbnRCb2FyZCk7XG4gICAgICBkcmF3Qm9hcmQob3Bwb25lbnQubWFwLCBvcHBvbmVudEJvYXJkKTtcbiAgICAgIF93cml0ZVR1cm4ob3Bwb25lbnQsIGZhbHNlKTtcbiAgICAgIG1vdmVUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyLnBsYXllck5hbWV9OiAke3Jlc3VsdH1gO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSBcIkFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cIikge1xuICAgICAgICBfd3JpdGVUdXJuKHBsYXllciwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWtlQ2xpY2thYmxlKG9wcG9uZW50LCBvcHBvbmVudEJvYXJkLCBwbGF5ZXIsIHBsYXllckJvYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQ2xpY2thYmxlKHBsYXllciwgcGxheWVyQm9hcmQsIG9wcG9uZW50LCBvcHBvbmVudEJvYXJkKSB7XG4gICAgY29uc3QgbWFwU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFwLXNxdWFyZVwiKTtcblxuICAgIG1hcFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBjb25zdCBjb29yZCA9IEpTT04ucGFyc2Uoc3F1YXJlLmdldEF0dHJpYnV0ZShcImRhdGEtbWFwLWNvb3JkXCIpKS5yZXZlcnNlKCk7XG5cbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYXR0YWNrKG9wcG9uZW50Qm9hcmQsIGNvb3JkKTtcblxuICAgICAgICAvLyByZWRyYXcgbWFwIGluIG9yZGVyIHRvIHJlbW92ZSBsaXN0ZW5lcnNcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gXCJJbnZhbGlkIGF0dGFjazogc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWRcIikge1xuICAgICAgICAgIG1vdmVUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyLnBsYXllck5hbWV9OiAke3Jlc3VsdH1gO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXCIpIHtcbiAgICAgICAgICAgIGRyYXdCb2FyZChwbGF5ZXIubWFwLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICBfd3JpdGVUdXJuKHBsYXllciwgdHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuY29tID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZHJhd0JvYXJkKHBsYXllci5tYXAsIHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgIF9kcmF3UGFzc0J1dHRvbihvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCwgcGxheWVyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9wYXNzVHVybihvcHBvbmVudCwgb3Bwb25lbnRCb2FyZCwgcGxheWVyLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vdmVUZXh0LnRleHRDb250ZW50ID0gYCR7cmVzdWx0fS4gVHJ5IGEgZGlmZmVyZW50IHNxdWFyZS5gO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZHJhd0JvYXJkLFxuICAgIG1ha2VDbGlja2FibGUsXG4gICAgZHJhd1NoaXAsXG4gICAgZHJhd1NoaXBQbGFjZXIsXG4gIH07XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcbiIsImNvbnN0IHNoaXAgPSByZXF1aXJlKFwiLi9zaGlwc1wiKTtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIChmdW5jdGlvbiBfY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCkuZmlsbChudWxsKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgLy8gc3RhcnQgPSBbbGVmdCwgYm90dG9tXSwgZW5kID0gW3JpZ2h0LCB0b3BdXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChsZW5ndGgsIHN0YXJ0LCBlbmQpIHtcbiAgICBjb25zdCBzcXVhcmVzID0gWy4uLnN0YXJ0LCAuLi5lbmRdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNxdWFyZXNbaV0gPiAxMCB8fCBzcXVhcmVzW2ldIDwgMCkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobGVuZ3RoKTtcbiAgICBzaGlwcy5wdXNoKHtcbiAgICAgIHNoaXA6IG5ld1NoaXAsXG4gICAgICBsZW5ndGgsXG4gICAgICBzdGFydCxcbiAgICAgIGVuZCxcbiAgICB9KTtcblxuICAgIGZvciAobGV0IHJvdyA9IHN0YXJ0WzBdOyBlbmRbMF0gLSByb3cgPj0gMDsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IHN0YXJ0WzFdOyBlbmRbMV0gLSBjb2wgPj0gMDsgY29sICs9IDEpIHtcbiAgICAgICAgLy8gVGhlIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzcXVhcmUgbXVzdCBoYXZlIGFcbiAgICAgICAgLy8gc2hhbGxvdyBjb3B5IG9mIHRoZSBzaGlwIGluIG9yZGVyIHRvIHRyYWNrIHdoZXRoZXIgdGhlIHNoaXAgaGFzIGJlZW4gc3Vua1xuICAgICAgICBib2FyZFtyb3ddW2NvbF0gPSB7XG4gICAgICAgICAgc2hpcDogbmV3U2hpcCxcbiAgICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiU2hpcCBwbGFjZWRcIjtcbiAgfVxuXG4gIC8vIGRpcmVjdGlvbjogMCA9IHZlcnRpY2FsLCAxID0gaG9yaXpvbnRhbFxuICBmdW5jdGlvbiBjaGVja1BhdGhFbXB0eShtYWluLCBzZWNvbmRhcnksIGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgZm9yIChsZXQgaSA9IG1haW47IGkgPCBtYWluICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW3NlY29uZGFyeV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYm9hcmRbc2Vjb25kYXJ5XVtpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBfbWFrZVJhbmRvbVBsYWNlbWVudChsZW5ndGgpIHtcbiAgICBjb25zdCByYW5kb21TcXVhcmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xuICAgIGNvbnN0IHNlY29uZGFyeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIC8vIDAgPSB2ZXJ0aWNhbCwgMSA9IGhvcml6b250YWxcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICAgIGlmIChjaGVja1BhdGhFbXB0eShyYW5kb21TcXVhcmUsIHNlY29uZGFyeSwgbGVuZ3RoLCBkaXJlY3Rpb24pKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgIHBsYWNlU2hpcChcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgW3JhbmRvbVNxdWFyZSwgc2Vjb25kYXJ5XSxcbiAgICAgICAgICBbcmFuZG9tU3F1YXJlICsgKGxlbmd0aCAtIDEpLCBzZWNvbmRhcnldXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZVNoaXAoXG4gICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgIFtzZWNvbmRhcnksIHJhbmRvbVNxdWFyZV0sXG4gICAgICAgICAgW3NlY29uZGFyeSwgcmFuZG9tU3F1YXJlICsgKGxlbmd0aCAtIDEpXVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfbWFrZVJhbmRvbVBsYWNlbWVudChsZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlUmFuZG9tKCkge1xuICAgIF9tYWtlUmFuZG9tUGxhY2VtZW50KDUpO1xuICAgIF9tYWtlUmFuZG9tUGxhY2VtZW50KDQpO1xuICAgIF9tYWtlUmFuZG9tUGxhY2VtZW50KDMpO1xuICAgIF9tYWtlUmFuZG9tUGxhY2VtZW50KDMpO1xuICAgIF9tYWtlUmFuZG9tUGxhY2VtZW50KDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FsbFN1bmsoKSB7XG4gICAgbGV0IHN1bmsgPSB0cnVlO1xuXG4gICAgYm9hcmQuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgIGlmIChzcXVhcmUgJiYgdHlwZW9mIHNxdWFyZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlmIChzcXVhcmUuaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzdW5rID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdW5rO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgIGNvbnN0IGF0dGFja1NxdWFyZSA9IGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV07XG5cbiAgICBpZiAoIWF0dGFja1NxdWFyZSkge1xuICAgICAgYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IFwibWlzc1wiO1xuXG4gICAgICByZXR1cm4gXCJNaXNzXCI7XG4gICAgfVxuICAgIGlmIChhdHRhY2tTcXVhcmUgPT09IFwibWlzc1wiKSB7XG4gICAgICByZXR1cm4gXCJJbnZhbGlkIGF0dGFjazogc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWRcIjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGF0dGFja1NxdWFyZSA9PT0gXCJvYmplY3RcIiAmJiBhdHRhY2tTcXVhcmUuaXNIaXQpIHtcbiAgICAgIHJldHVybiBcIkludmFsaWQgYXR0YWNrOiBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZFwiO1xuICAgIH1cblxuICAgIGF0dGFja1NxdWFyZS5pc0hpdCA9IHRydWU7XG5cbiAgICBjb25zdCBoaXRNc2cgPSBhdHRhY2tTcXVhcmUuc2hpcC5oaXQoKTtcblxuICAgIGlmIChfYWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4gXCJBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpdE1zZztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcGxhY2VSYW5kb20sXG4gICAgc2hpcHMsXG4gICAgY2hlY2tQYXRoRW1wdHksXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVib2FyZDtcbiIsImNvbnN0IHBsYXllciA9IChjb20sIG5hbWUgPSBcIlBsYXllciAxXCIpID0+IHtcbiAgY29uc3QgbWFwID0gW107XG4gIGxldCBwbGF5ZXJOYW1lID0gbmFtZTtcblxuICBpZiAoY29tKSB7XG4gICAgcGxheWVyTmFtZSA9IFwiQ29tcHV0ZXJcIjtcbiAgfVxuXG4gIChmdW5jdGlvbiBfY3JlYXRlTWFwKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgbWFwW2ldID0gbmV3IEFycmF5KDEwKS5maWxsKG51bGwpO1xuICAgIH1cbiAgfSkoKTtcblxuICBmdW5jdGlvbiBfY2hlY2tTdW5rKHRhcmdldEJvYXJkLCBjb29yZCkge1xuICAgIGNvbnN0IHRhcmdldFNxdWFyZSA9IHRhcmdldEJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV07XG5cbiAgICBpZiAodGFyZ2V0U3F1YXJlICYmIHR5cGVvZiB0YXJnZXRTcXVhcmUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmICh0YXJnZXRTcXVhcmUuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBfdXBkYXRlU3Vua2VuKHRhcmdldEJvYXJkKSB7XG4gICAgbWFwLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgIGlmIChfY2hlY2tTdW5rKHRhcmdldEJvYXJkLCBbcm93SW5kZXgsIGNvbEluZGV4XSkpIHtcbiAgICAgICAgICBtYXBbcm93SW5kZXhdW2NvbEluZGV4XSA9IFwic3Vua1wiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFjayh0YXJnZXRCb2FyZCwgdGFyZ2V0U3F1YXJlKSB7XG4gICAgY29uc3QgYXR0YWNrTXNnID0gdGFyZ2V0Qm9hcmQucmVjZWl2ZUF0dGFjayh0YXJnZXRTcXVhcmUpO1xuXG4gICAgaWYgKGF0dGFja01zZyA9PT0gXCJNaXNzXCIpIHtcbiAgICAgIG1hcFt0YXJnZXRTcXVhcmVbMF1dW3RhcmdldFNxdWFyZVsxXV0gPSBhdHRhY2tNc2cudG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKGF0dGFja01zZyA9PT0gXCJIaXRcIikge1xuICAgICAgbWFwW3RhcmdldFNxdWFyZVswXV1bdGFyZ2V0U3F1YXJlWzFdXSA9IFwiaGl0XCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGF0dGFja01zZyA9PT0gXCJZb3Ugc3VuayBteSBiYXR0bGVzaGlwXCIgfHxcbiAgICAgIGF0dGFja01zZyA9PT0gXCJBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXCJcbiAgICApIHtcbiAgICAgIG1hcFt0YXJnZXRTcXVhcmVbMF1dW3RhcmdldFNxdWFyZVsxXV0gPSBcInN1bmtcIjtcbiAgICB9XG5cbiAgICBfdXBkYXRlU3Vua2VuKHRhcmdldEJvYXJkLmJvYXJkKTtcblxuICAgIHJldHVybiBhdHRhY2tNc2c7XG4gIH1cblxuICAvLyBsaXN0IG9mIGxlZ2FsIG1vdmVzIHdoaWNoIGlzIHVwZGF0ZWQgZXZlcnkgdGltZSBjb21Nb3ZlIGlzIGNhbGxlZFxuICBjb25zdCBfbGVnYWxNb3ZlcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgbW92ZUxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wgKz0gMSkge1xuICAgICAgICBtb3ZlTGlzdC5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb3ZlTGlzdDtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBjb21Nb3ZlKHRhcmdldEJvYXJkKSB7XG4gICAgLy8gY2hvb3NlIHJvdyBhbmQgY29sdW1uIG9mIGF0dGFja2VkIHNxdWFyZSByYW5kb21seVxuXG4gICAgY29uc3QgbW92ZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX2xlZ2FsTW92ZXMubGVuZ3RoKTtcbiAgICBjb25zdCBhdHRhY2tTcXVhcmUgPSBfbGVnYWxNb3Zlc1ttb3ZlSW5kZXhdO1xuICAgIF9sZWdhbE1vdmVzLnNwbGljZShtb3ZlSW5kZXgsIDEpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXR0YWNrKHRhcmdldEJvYXJkLCBhdHRhY2tTcXVhcmUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1hcCxcbiAgICBhdHRhY2ssXG4gICAgY29tTW92ZSxcbiAgICBjb20sXG4gICAgcGxheWVyTmFtZSxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGxheWVyO1xuIiwiY29uc3Qgc2hpcCA9IChsZW5ndGgpID0+IHtcbiAgbGV0IF9oaXRzID0gMDtcblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgaWYgKF9oaXRzID49IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGl0KCkge1xuICAgIF9oaXRzICs9IDE7XG5cbiAgICBpZiAoaXNTdW5rKCkpIHtcbiAgICAgIHJldHVybiBcIllvdSBzdW5rIG15IGJhdHRsZXNoaXBcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJIaXRcIjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBnYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG5jb25zdCBwbGF5ZXIgPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5jb25zdCB1cGRhdGUgPSByZXF1aXJlKFwiLi9ET01VcGRhdGVcIik7XG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5jb25zdCBwMU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AxLW5hbWVcIik7XG5jb25zdCBwMk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AyLW5hbWVcIik7XG5jb25zdCBBSWNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMi1jb21cIik7XG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnQtYnV0dG9uXCIpO1xuXG5BSWNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChwMk5hbWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmFtZS1kaXNhYmxlZFwiKSkge1xuICAgIHAyTmFtZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICBwMk5hbWUuY2xhc3NMaXN0LnJlbW92ZShcIm5hbWUtZGlzYWJsZWRcIik7XG4gICAgcDJOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiUGxheWVyIFR3b1wiKTtcbiAgfSBlbHNlIHtcbiAgICBwMk5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWUtZGlzYWJsZWRcIik7XG4gICAgcDJOYW1lLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIG51bGwpO1xuICAgIHAyTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkNvbXB1dGVyXCIpO1xuICB9XG59KTtcblxuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBtZW51LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXG4gIGxldCBwMTtcbiAgbGV0IHAyO1xuXG4gIGNvbnN0IHAxQm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgY29uc3QgcDJCb2FyZCA9IGdhbWVib2FyZCgpO1xuXG4gIGlmICghcDFOYW1lLnZhbHVlKSB7XG4gICAgcDEgPSBwbGF5ZXIoZmFsc2UsIFwiUGxheWVyIE9uZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBwMSA9IHBsYXllcihmYWxzZSwgcDFOYW1lLnZhbHVlKTtcbiAgfVxuXG4gIGlmIChBSWNoZWNrLmNoZWNrZWQpIHtcbiAgICBwMiA9IHBsYXllcih0cnVlKTtcbiAgfSBlbHNlIGlmICghcDJOYW1lLnZhbHVlKSB7XG4gICAgcDIgPSBwbGF5ZXIoZmFsc2UsIFwiUGxheWVyIFR3b1wiKTtcbiAgfSBlbHNlIHtcbiAgICBwMiA9IHBsYXllcihmYWxzZSwgcDJOYW1lLnZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZS5kcmF3U2hpcFBsYWNlcihwMSwgcDFCb2FyZCwgcDIsIHAyQm9hcmQpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
