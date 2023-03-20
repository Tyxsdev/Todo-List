/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    box-sizing: border-box;\n    --color-one: #edd5b4;\n    --color-two: #72716f;\n    --color-three: #471482;\n    --color-four: #d1cad9;\n    --color-five: #db4439;\n    --transition-one: all 0.3s ease-in-out;\n    --transition-two: all 0.1s ease-in-out;\n}\n\nbody {\n    background-color: var(--color-one);\n}\n\nheader {\n    display: grid;\n    place-content: center;\n    font-family: 'Tilt Neon', cursive;\n}\n\nmain {\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.project-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n    border-right: 2px solid black;\n}\n\n.header-project {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    transition: var(--transition-one);\n    border-bottom: 2px solid black;\n}\n\n.header-project:hover {\n    background-color: var(--color-two);\n}\n\n.header-project h3 {\n    grid-column: 2 / 4;\n    font-size: 1.4rem;\n}\n\n.material-symbols-outlined {\n    justify-self: end;\n    align-self: center;\n    transition: var(--transition-two);\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.material-symbols-outlined:hover {\n    scale: 1.3;\n    color: var(--color-three);\n}\n\n.new-project {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    gap: 1rem;\n    grid-auto-rows: 1fr;\n}\n\n.project {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid black;\n}\n\n.title {\n    grid-column: 2 / 4;\n    transition: all 0.2s ease-in-out;\n}\n\n.options {\n    justify-self: end;\n}\n\n.title:hover {\n    text-decoration: underline;\n    font-size: 1.5rem;\n}\n\n.test-project {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 30vh;\n    width: 600px;\n    background-color: var(--color-four);\n    padding: 1rem;\n    border-radius: 10px;\n    border: 2px solid var(--color-three);\n    display: none;\n}\n\n.edit-project {\n    width: 30rem;\n    height: 10rem;\n    position: absolute;\n    top: 20%;\n    left: 10%;\n    background-color: var(--color-four);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n    border-radius: 10px;\n    border: 2px solid var(--color-three);\n}\n\n.test-project h2 {\n    display: inline;\n}\n\n.edit-project h2 {\n    align-self: center;\n    grid-row: 1 / 2;\n    margin: 0;\n}\n\n\n.close-one {\n    position: absolute;\n    right: 1rem;\n}\n\n.close-two {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.test-project form,\n.edit-project form {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    font-family: 'Tilt Neon', cursive;\n}\n\nform label {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n}\n\nform input {\n    border-radius: 5px;\n    outline: none;\n    border: 2px solid var(--color-three);\n}\n\n#color {\n    border: 0;\n    padding: 0;\n}\n\nbutton {\n    font-family: 'Tilt Neon', cursive;\n    font-size: 1rem;\n    width: fit-content;\n    padding: 0.3rem 1.5rem;\n    border-radius: 15px;\n    border: 2px solid var(--color-three);\n    background-color: black;\n    color: white;\n}\n\n.faded {\n    opacity: 20%;\n    pointer-events: none;\n}\n\n.error {\n    display: none;\n    margin-top: 0;\n    color: var(--color-five);\n}\n\n.hidden-tab {\n    display: none;\n}\n\n.list-container {\n    background-color: #db4439;\n    grid-column: 2 / 3;\n}\n\n.form-first {\n    grid-row: 1 / 2;\n}\n\n.form-second {\n    grid-row: 2 / 3;\n}\n\n.delete,\n.done {\n    grid-row: 3 / 4;\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,oBAAoB;IACpB,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;IACrB,sCAAsC;IACtC,sCAAsC;AAC1C;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,iCAAiC;IACjC,8BAA8B;AAClC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,iCAAiC;IACjC;;;;;AAKJ;;AAEA;IACI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,kCAAkC;IAClC,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,OAAO;IACP,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,SAAS;AACb;;;AAGA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,kCAAkC;IAClC,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;IACpC,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,eAAe;AACnB","sourcesContent":[":root {\n    box-sizing: border-box;\n    --color-one: #edd5b4;\n    --color-two: #72716f;\n    --color-three: #471482;\n    --color-four: #d1cad9;\n    --color-five: #db4439;\n    --transition-one: all 0.3s ease-in-out;\n    --transition-two: all 0.1s ease-in-out;\n}\n\nbody {\n    background-color: var(--color-one);\n}\n\nheader {\n    display: grid;\n    place-content: center;\n    font-family: 'Tilt Neon', cursive;\n}\n\nmain {\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.project-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n    border-right: 2px solid black;\n}\n\n.header-project {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    transition: var(--transition-one);\n    border-bottom: 2px solid black;\n}\n\n.header-project:hover {\n    background-color: var(--color-two);\n}\n\n.header-project h3 {\n    grid-column: 2 / 4;\n    font-size: 1.4rem;\n}\n\n.material-symbols-outlined {\n    justify-self: end;\n    align-self: center;\n    transition: var(--transition-two);\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.material-symbols-outlined:hover {\n    scale: 1.3;\n    color: var(--color-three);\n}\n\n.new-project {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    gap: 1rem;\n    grid-auto-rows: 1fr;\n}\n\n.project {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid black;\n}\n\n.title {\n    grid-column: 2 / 4;\n    transition: all 0.2s ease-in-out;\n}\n\n.options {\n    justify-self: end;\n}\n\n.title:hover {\n    text-decoration: underline;\n    font-size: 1.5rem;\n}\n\n.test-project {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 30vh;\n    width: 600px;\n    background-color: var(--color-four);\n    padding: 1rem;\n    border-radius: 10px;\n    border: 2px solid var(--color-three);\n    display: none;\n}\n\n.edit-project {\n    width: 30rem;\n    height: 10rem;\n    position: absolute;\n    top: 20%;\n    left: 10%;\n    background-color: var(--color-four);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n    border-radius: 10px;\n    border: 2px solid var(--color-three);\n}\n\n.test-project h2 {\n    display: inline;\n}\n\n.edit-project h2 {\n    align-self: center;\n    grid-row: 1 / 2;\n    margin: 0;\n}\n\n\n.close-one {\n    position: absolute;\n    right: 1rem;\n}\n\n.close-two {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.test-project form,\n.edit-project form {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    font-family: 'Tilt Neon', cursive;\n}\n\nform label {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n}\n\nform input {\n    border-radius: 5px;\n    outline: none;\n    border: 2px solid var(--color-three);\n}\n\n#color {\n    border: 0;\n    padding: 0;\n}\n\nbutton {\n    font-family: 'Tilt Neon', cursive;\n    font-size: 1rem;\n    width: fit-content;\n    padding: 0.3rem 1.5rem;\n    border-radius: 15px;\n    border: 2px solid var(--color-three);\n    background-color: black;\n    color: white;\n}\n\n.faded {\n    opacity: 20%;\n    pointer-events: none;\n}\n\n.error {\n    display: none;\n    margin-top: 0;\n    color: var(--color-five);\n}\n\n.hidden-tab {\n    display: none;\n}\n\n.list-container {\n    background-color: #db4439;\n    grid-column: 2 / 3;\n}\n\n.form-first {\n    grid-row: 1 / 2;\n}\n\n.form-second {\n    grid-row: 2 / 3;\n}\n\n.delete,\n.done {\n    grid-row: 3 / 4;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/domCache.js":
/*!*************************!*\
  !*** ./src/domCache.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateDom": () => (/* binding */ CreateDom),
/* harmony export */   "domElements": () => (/* binding */ domElements)
/* harmony export */ });
function domCache() {
  const mainContainer = document.querySelector('.container');
  const hiddenContainer = document.querySelector('.hidden-container');
  const projectsContainer = document.querySelector('.project-container');
  const hiddenProject = document.querySelector('.test-project');
  const newProjectButton = document.querySelector('.plus');
  const newProjectContainer = document.querySelector('.new-project');
  const createProject = document.querySelector('#create-project');
  const closeNewProject = document.querySelector('.close-one');
  const errorMessage = document.querySelector('.error');
  const general = document.querySelector('.general');
  const proOptions = document.querySelector('.pro-options-button');
  function refreshList() {
    const listNode = document.querySelectorAll('.list-container');
    const listContainer = [...listNode];
    return listContainer;
  }
  const name = document.querySelector('#name');
  const color = document.querySelector('#color');
  return {
    hiddenProject,
    hiddenContainer,
    newProjectButton,
    mainContainer,
    createProject,
    closeNewProject,
    projectsContainer,
    newProjectContainer,
    errorMessage,
    general,
    refreshList,
    name,
    color,
    proOptions,
  };
}

const domElements = domCache();

const CreateDom = {
  makeDiv() {
    const div = document.createElement('div');
    return div;
  },
  makeA() {
    const a = document.createElement('a');
    return a;
  },
  makeH2() {
    const h2 = document.createElement('h2');
    return h2;
  },
  makeOptionsSVG() {
    const svg = document.createElement('span');
    svg.classList.add('material-symbols-outlined');
    svg.classList.add('options');
    svg.textContent = 'more_vert';
    return svg;
  },
  makeCloseSVG() {
    const svg = document.createElement('span');
    svg.classList.add('material-symbols-outlined');
    svg.classList.add('close-two');
    svg.textContent = 'close';
    return svg;
  },
  makeButton() {
    const button = document.createElement('button');
    return button;
  },
  makeForm() {
    const form = document.createElement('form');
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const colorLabel = nameLabel.cloneNode();
    const colorInput = nameInput.cloneNode();
    const done = this.makeButton();
    const firstDiv = this.makeDiv();
    const secondDiv = this.makeDiv();
    form.setAttribute('action', '#');
    form.setAttribute('method', 'post');
    nameLabel.setAttribute('for', 'name');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('id', 'name');
    colorLabel.setAttribute('for', 'color');
    nameLabel.setAttribute('for', 'name');
    colorInput.setAttribute('type', 'color');
    colorInput.setAttribute('name', 'color');
    colorInput.setAttribute('id', 'color');
    nameLabel.textContent = 'Change name';
    colorLabel.textContent = 'Change color';
    done.setAttribute('type', 'submit');
    done.textContent = 'Done';
    done.classList.add('done');
    firstDiv.appendChild(nameLabel);
    firstDiv.appendChild(nameInput);
    secondDiv.appendChild(colorLabel);
    secondDiv.appendChild(colorInput);
    firstDiv.classList.add('form-first');
    secondDiv.classList.add('form-second');
    form.appendChild(firstDiv);
    form.appendChild(secondDiv);
    form.appendChild(done);
    return form;
  },
  makeDelete() {
    const button = document.createElement('button');
    button.textContent = 'delete';
    return button;
  },
};




/***/ }),

/***/ "./src/generalEvents.js":
/*!******************************!*\
  !*** ./src/generalEvents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCloseEvent": () => (/* binding */ addCloseEvent),
/* harmony export */   "close": () => (/* binding */ close),
/* harmony export */   "toggleFaded": () => (/* binding */ toggleFaded)
/* harmony export */ });
/* harmony import */ var _domCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCache */ "./src/domCache.js");


function addCloseEvent(elem) {
  elem.addEventListener('click', close);
}

function close(e) {
  toggleFaded();
  e.currentTarget.parentNode.style.display = 'none';
}

function toggleFaded() {
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.mainContainer.classList.toggle('faded');
}




/***/ }),

/***/ "./src/popoutProject.js":
/*!******************************!*\
  !*** ./src/popoutProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjectPanel": () => (/* binding */ displayProjectPanel),
/* harmony export */   "links": () => (/* binding */ links),
/* harmony export */   "projectArray": () => (/* binding */ projectArray)
/* harmony export */ });
/* harmony import */ var _domCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCache.js */ "./src/domCache.js");
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.js */ "./src/tabs.js");
/* harmony import */ var _generalEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generalEvents.js */ "./src/generalEvents.js");
/* harmony import */ var _projectOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectOptions */ "./src/projectOptions.js");





const links = [];
links.push(_domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.general);
let count = 0;

const projectArray = [];

class CreateProjectObject {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  setIndex() {
    this.indexSet = count;
    count += 1;
  }
}

const defaultProject = new CreateProjectObject('General', 'black');
projectArray.push(defaultProject);
defaultProject.setIndex();
_domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.createProject.addEventListener('click', getValues);
(0,_generalEvents_js__WEBPACK_IMPORTED_MODULE_2__.addCloseEvent)(_domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.closeNewProject);
_domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.proOptions.addEventListener('click', _projectOptions__WEBPACK_IMPORTED_MODULE_3__.displayOptions);

function handdleLinks(div) {
  links.push(div);
}

function getValues(e) {
  e.preventDefault();
  const projectCreated = handdleNewProject();
  addProject(projectCreated);
  _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.name.value = '';
  _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.color.value = '';
}

function handdleNewProject() {
  const newProject = new CreateProjectObject(
    _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.name.value,
    _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.color.value
  );
  projectArray.push(newProject);
  newProject.setIndex();
  return newProject;
}

function addProject(projectCreated) {
  if (projectCreated.name === '') {
    _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.errorMessage.style.display = 'block';
    return;
  }
  const div = _domCache_js__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeDiv();
  const a = _domCache_js__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeA();
  const svg = _domCache_js__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeOptionsSVG();
  svg.addEventListener('click', _projectOptions__WEBPACK_IMPORTED_MODULE_3__.displayOptions);
  a.textContent = projectCreated.name;
  a.style.color = projectCreated.color;
  a.classList.add('title');
  div.classList.add('project');
  div.dataset.index = projectCreated.indexSet;
  div.appendChild(a);
  div.appendChild(svg);
  _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.newProjectContainer.appendChild(div);
  handdleLinks(div);
  (0,_tabs_js__WEBPACK_IMPORTED_MODULE_1__.generateNewTab)(links);
  defaultDisplay();
}

function defaultDisplay() {
  _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.errorMessage.style.display = 'none';
  _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.hiddenProject.style.display = 'none';
  (0,_generalEvents_js__WEBPACK_IMPORTED_MODULE_2__.toggleFaded)();
}

function displayProjectPanel() {
  _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.hiddenProject.style.display = 'block';
  (0,_generalEvents_js__WEBPACK_IMPORTED_MODULE_2__.toggleFaded)();
}




/***/ }),

/***/ "./src/projectOptions.js":
/*!*******************************!*\
  !*** ./src/projectOptions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayOptions": () => (/* binding */ displayOptions)
/* harmony export */ });
/* harmony import */ var _domCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCache */ "./src/domCache.js");
/* harmony import */ var _generalEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalEvents */ "./src/generalEvents.js");
/* harmony import */ var _popoutProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popoutProject */ "./src/popoutProject.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");





function displayOptions(e) {
  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.toggleFaded)();
  const { index } = e.currentTarget.parentElement.dataset;
  const projectTarget = findTargetProject(index);
  const div = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeDiv();
  const closeSVG = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeCloseSVG();
  const newForm = editDiv(div, closeSVG, projectTarget);
  setDelete(newForm, e, div);
  changeOptions(newForm, e, projectTarget, index, div);
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.hiddenContainer.appendChild(div);
}

function findTargetProject(index) {
  const target = _popoutProject__WEBPACK_IMPORTED_MODULE_2__.projectArray.filter(
    (project) => Number(project.indexSet) === Number(index)
  );

  return target;
}

function editDiv(div, closeSVG, project) {
  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.addCloseEvent)(closeSVG);
  const h2 = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeH2();
  h2.textContent = project[0].name;
  const newForm = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeForm();
  const deleteButton = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeDelete();
  deleteButton.classList.add('delete');
  div.classList.add('edit-project');
  newForm.appendChild(deleteButton);
  div.appendChild(h2);
  div.appendChild(closeSVG);
  div.appendChild(newForm);
  return newForm;
}

function changeOptions(node, event, target, index, container) {
  const newName = node.querySelector('#name');
  const newColor = node.querySelector('#color');
  const changeButton = node.querySelector('button');
  changeButton.originalDiv = event.currentTarget.parentElement;
  changeButton.popoutDiv = container;
  changeButton.originalProject = target;
  changeButton.originalIndex = index;
  changeButton.newColor = newColor;
  changeButton.newName = newName;
  changeButton.addEventListener('click', updateValues);
}

function updateValues(e) {
  e.preventDefault();
  const newValues = {
    name: e.target.newName.value,
    color: e.target.newColor.value,
  };
  const a = e.target.originalDiv.querySelector('a');
  const { originalIndex } = e.target;
  updateDiv(a, newValues, originalIndex);
  e.target.popoutDiv.style.display = 'none';
}

function updateDiv(elem, obj, i) {
  if (obj.name !== '') {
    elem.textContent = obj.name;
    _popoutProject__WEBPACK_IMPORTED_MODULE_2__.projectArray[i].name = obj.name;
  }
  elem.style.color = obj.color;
  _popoutProject__WEBPACK_IMPORTED_MODULE_2__.projectArray[i].color = obj.color;
  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.toggleFaded)();
}

function setDelete(node, event, container) {
  const deleteButton = node.querySelector('.delete');
  deleteButton.originalDiv = event.currentTarget.parentElement;
  deleteButton.popoutDiv = container;
  deleteButton.addEventListener('click', deleteProject);
}

function deleteProject(e) {
  e.preventDefault();
  const projectIndex = e.target.originalDiv.dataset.index;
  e.target.originalDiv.remove();
  e.target.popoutDiv.style.display = 'none';
  _tabs__WEBPACK_IMPORTED_MODULE_3__.allTabs.forEach((tab) => {
    if (tab.dataset.index === projectIndex) {
      const tabSelected = tab.dataset.index;
      tab.remove();
      (0,_tabs__WEBPACK_IMPORTED_MODULE_3__.displayNextTab)(tabSelected);
    }
  });

  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.toggleFaded)();
}


/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTabs": () => (/* binding */ allTabs),
/* harmony export */   "displayNextTab": () => (/* binding */ displayNextTab),
/* harmony export */   "generateNewTab": () => (/* binding */ generateNewTab)
/* harmony export */ });
/* harmony import */ var _domCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCache */ "./src/domCache.js");


let allTabs;
refreshTabs();

function generateNewTab(links) {
  for (let i = 0; i < links.length; i += 1) {
    if (links[i] && links.length === i + 1) {
      const div = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeDiv();
      div.classList.add('list-container');
      div.textContent = `${i}`;
      div.dataset.index = i;
      _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.mainContainer.appendChild(div);
    }
  }
  displayLastTab();
  setEvent(links);
}

function displayLastTab() {
  refreshTabs();
  hideAllTabs();
  allTabs[allTabs.length - 1].classList.remove('hidden-tab');
}

function setEvent(links) {
  links.forEach((link) => link.addEventListener('click', selectListToDisplay));
}

function selectListToDisplay(e) {
  const targetIndex = e.currentTarget.dataset.index;
  refreshTabs();
  hideAllTabs();
  const selectedTab = allTabs.filter(
    (tab) => tab.dataset.index === targetIndex
  );
  selectedTab[0].classList.remove('hidden-tab');
}

function refreshTabs() {
  allTabs = _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.refreshList();
}

function hideAllTabs() {
  allTabs.forEach((tab) => tab.classList.add('hidden-tab'));
}

function displayNextTab(deleted) {
  const indexDeleted = allTabs.findIndex(
    (tab) => Number(tab.dataset.index) === Number(deleted)
  );
  allTabs.forEach((tab) => {
    if (Number(tab.dataset.index) === Number(deleted) + 1) {
      tab.classList.remove('hidden-tab');
    }
  });
  const removed = allTabs.splice(indexDeleted, 1);
}




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _popoutProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popoutProject */ "./src/popoutProject.js");
/* harmony import */ var _domCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domCache.js */ "./src/domCache.js");




_domCache_js__WEBPACK_IMPORTED_MODULE_2__.domElements.newProjectButton.addEventListener('click', _popoutProject__WEBPACK_IMPORTED_MODULE_1__.displayProjectPanel);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDa0M7QUFDVjs7QUFFNUMsdUZBQTZDLFVBQVUsK0RBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dlbmVyYWxFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BvcG91dFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RPcHRpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1jb2xvci1vbmU6ICNlZGQ1YjQ7XFxuICAgIC0tY29sb3ItdHdvOiAjNzI3MTZmO1xcbiAgICAtLWNvbG9yLXRocmVlOiAjNDcxNDgyO1xcbiAgICAtLWNvbG9yLWZvdXI6ICNkMWNhZDk7XFxuICAgIC0tY29sb3ItZml2ZTogI2RiNDQzOTtcXG4gICAgLS10cmFuc2l0aW9uLW9uZTogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIC0tdHJhbnNpdGlvbi10d286IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLW9uZSk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdHdvKTtcXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0IGgzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXR3byk7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAgICAgJ0ZJTEwnIDAsXFxuICAgICAgICAnd2dodCcgNDAwLFxcbiAgICAgICAgJ0dSQUQnIDAsXFxuICAgICAgICAnb3BzeicgNDhcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIge1xcbiAgICBzY2FsZTogMS4zO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRpdGxlOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDMwdmg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdCB7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbi50ZXN0LXByb2plY3QgaDIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5lZGl0LXByb2plY3QgaDIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4uY2xvc2Utb25lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLmNsb3NlLXR3byB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IGZvcm0sXFxuLmVkaXQtcHJvamVjdCBmb3JtIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG59XFxuXFxuZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuI2NvbG9yIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mYWRlZCB7XFxuICAgIG9wYWNpdHk6IDIwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1maXZlKTtcXG59XFxuXFxuLmhpZGRlbi10YWIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0NDM5O1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbi5mb3JtLWZpcnN0IHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uZm9ybS1zZWNvbmQge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5kZWxldGUsXFxuLmRvbmUge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0QyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGlDQUFpQztJQUNqQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakM7Ozs7O0FBS0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtLWNvbG9yLW9uZTogI2VkZDViNDtcXG4gICAgLS1jb2xvci10d286ICM3MjcxNmY7XFxuICAgIC0tY29sb3ItdGhyZWU6ICM0NzE0ODI7XFxuICAgIC0tY29sb3ItZm91cjogI2QxY2FkOTtcXG4gICAgLS1jb2xvci1maXZlOiAjZGI0NDM5O1xcbiAgICAtLXRyYW5zaXRpb24tb25lOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgLS10cmFuc2l0aW9uLXR3bzogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oZWFkZXItcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tb25lKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10d28pO1xcbn1cXG5cXG4uaGVhZGVyLXByb2plY3QgaDMge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdHdvKTtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICAgICAnRklMTCcgMCxcXG4gICAgICAgICd3Z2h0JyA0MDAsXFxuICAgICAgICAnR1JBRCcgMCxcXG4gICAgICAgICdvcHN6JyA0OFxcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjM7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udGl0bGU6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZXN0LXByb2plY3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMzB2aDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCBoMiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdCBoMiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcbi5jbG9zZS1vbmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uY2xvc2UtdHdvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi50ZXN0LXByb2plY3QgZm9ybSxcXG4uZWRpdC1wcm9qZWN0IGZvcm0ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG5mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG5cXG4jY29sb3Ige1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZhZGVkIHtcXG4gICAgb3BhY2l0eTogMjAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZpdmUpO1xcbn1cXG5cXG4uaGlkZGVuLXRhYiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjQ0Mzk7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLmZvcm0tZmlyc3Qge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5mb3JtLXNlY29uZCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmRlbGV0ZSxcXG4uZG9uZSB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGRvbUNhY2hlKCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb25zdCBoaWRkZW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuLWNvbnRhaW5lcicpO1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICBjb25zdCBoaWRkZW5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3QtcHJvamVjdCcpO1xuICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXMnKTtcbiAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpO1xuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0Jyk7XG4gIGNvbnN0IGNsb3NlTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1vbmUnKTtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG4gIGNvbnN0IGdlbmVyYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VuZXJhbCcpO1xuICBjb25zdCBwcm9PcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByby1vcHRpb25zLWJ1dHRvbicpO1xuICBmdW5jdGlvbiByZWZyZXNoTGlzdCgpIHtcbiAgICBjb25zdCBsaXN0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBbLi4ubGlzdE5vZGVdO1xuICAgIHJldHVybiBsaXN0Q29udGFpbmVyO1xuICB9XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuICBjb25zdCBjb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvcicpO1xuICByZXR1cm4ge1xuICAgIGhpZGRlblByb2plY3QsXG4gICAgaGlkZGVuQ29udGFpbmVyLFxuICAgIG5ld1Byb2plY3RCdXR0b24sXG4gICAgbWFpbkNvbnRhaW5lcixcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIGNsb3NlTmV3UHJvamVjdCxcbiAgICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgICBuZXdQcm9qZWN0Q29udGFpbmVyLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBnZW5lcmFsLFxuICAgIHJlZnJlc2hMaXN0LFxuICAgIG5hbWUsXG4gICAgY29sb3IsXG4gICAgcHJvT3B0aW9ucyxcbiAgfTtcbn1cblxuY29uc3QgZG9tRWxlbWVudHMgPSBkb21DYWNoZSgpO1xuXG5jb25zdCBDcmVhdGVEb20gPSB7XG4gIG1ha2VEaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcbiAgbWFrZUEoKSB7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICByZXR1cm4gYTtcbiAgfSxcbiAgbWFrZUgyKCkge1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICByZXR1cm4gaDI7XG4gIH0sXG4gIG1ha2VPcHRpb25zU1ZHKCkge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzdmcuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICAgIHN2Zy5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJyk7XG4gICAgc3ZnLnRleHRDb250ZW50ID0gJ21vcmVfdmVydCc7XG4gICAgcmV0dXJuIHN2ZztcbiAgfSxcbiAgbWFrZUNsb3NlU1ZHKCkge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzdmcuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICAgIHN2Zy5jbGFzc0xpc3QuYWRkKCdjbG9zZS10d28nKTtcbiAgICBzdmcudGV4dENvbnRlbnQgPSAnY2xvc2UnO1xuICAgIHJldHVybiBzdmc7XG4gIH0sXG4gIG1ha2VCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbiAgbWFrZUZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgY29sb3JMYWJlbCA9IG5hbWVMYWJlbC5jbG9uZU5vZGUoKTtcbiAgICBjb25zdCBjb2xvcklucHV0ID0gbmFtZUlucHV0LmNsb25lTm9kZSgpO1xuICAgIGNvbnN0IGRvbmUgPSB0aGlzLm1ha2VCdXR0b24oKTtcbiAgICBjb25zdCBmaXJzdERpdiA9IHRoaXMubWFrZURpdigpO1xuICAgIGNvbnN0IHNlY29uZERpdiA9IHRoaXMubWFrZURpdigpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAncG9zdCcpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgIGNvbG9yTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY29sb3InKTtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgIGNvbG9ySW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NvbG9yJyk7XG4gICAgY29sb3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY29sb3InKTtcbiAgICBjb2xvcklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29sb3InKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnQ2hhbmdlIG5hbWUnO1xuICAgIGNvbG9yTGFiZWwudGV4dENvbnRlbnQgPSAnQ2hhbmdlIGNvbG9yJztcbiAgICBkb25lLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBkb25lLnRleHRDb250ZW50ID0gJ0RvbmUnO1xuICAgIGRvbmUuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgIGZpcnN0RGl2LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgZmlyc3REaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbCk7XG4gICAgc2Vjb25kRGl2LmFwcGVuZENoaWxkKGNvbG9ySW5wdXQpO1xuICAgIGZpcnN0RGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZmlyc3QnKTtcbiAgICBzZWNvbmREaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWNvbmQnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpcnN0RGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlY29uZERpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkb25lKTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfSxcbiAgbWFrZURlbGV0ZSgpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9LFxufTtcblxuZXhwb3J0IHsgZG9tRWxlbWVudHMsIENyZWF0ZURvbSB9O1xuIiwiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlJztcblxuZnVuY3Rpb24gYWRkQ2xvc2VFdmVudChlbGVtKSB7XG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlKGUpIHtcbiAgdG9nZ2xlRmFkZWQoKTtcbiAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRmFkZWQoKSB7XG4gIGRvbUVsZW1lbnRzLm1haW5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZWQnKTtcbn1cblxuZXhwb3J0IHsgdG9nZ2xlRmFkZWQsIGFkZENsb3NlRXZlbnQsIGNsb3NlIH07XG4iLCJpbXBvcnQgeyBkb21FbGVtZW50cywgQ3JlYXRlRG9tIH0gZnJvbSAnLi9kb21DYWNoZS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZU5ld1RhYiB9IGZyb20gJy4vdGFicy5qcyc7XG5pbXBvcnQgeyBhZGRDbG9zZUV2ZW50LCB0b2dnbGVGYWRlZCB9IGZyb20gJy4vZ2VuZXJhbEV2ZW50cy5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5T3B0aW9ucyB9IGZyb20gJy4vcHJvamVjdE9wdGlvbnMnO1xuXG5jb25zdCBsaW5rcyA9IFtdO1xubGlua3MucHVzaChkb21FbGVtZW50cy5nZW5lcmFsKTtcbmxldCBjb3VudCA9IDA7XG5cbmNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xuXG5jbGFzcyBDcmVhdGVQcm9qZWN0T2JqZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIHNldEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXhTZXQgPSBjb3VudDtcbiAgICBjb3VudCArPSAxO1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IENyZWF0ZVByb2plY3RPYmplY3QoJ0dlbmVyYWwnLCAnYmxhY2snKTtcbnByb2plY3RBcnJheS5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbmRlZmF1bHRQcm9qZWN0LnNldEluZGV4KCk7XG5kb21FbGVtZW50cy5jcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0VmFsdWVzKTtcbmFkZENsb3NlRXZlbnQoZG9tRWxlbWVudHMuY2xvc2VOZXdQcm9qZWN0KTtcbmRvbUVsZW1lbnRzLnByb09wdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5T3B0aW9ucyk7XG5cbmZ1bmN0aW9uIGhhbmRkbGVMaW5rcyhkaXYpIHtcbiAgbGlua3MucHVzaChkaXYpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXMoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3RDcmVhdGVkID0gaGFuZGRsZU5ld1Byb2plY3QoKTtcbiAgYWRkUHJvamVjdChwcm9qZWN0Q3JlYXRlZCk7XG4gIGRvbUVsZW1lbnRzLm5hbWUudmFsdWUgPSAnJztcbiAgZG9tRWxlbWVudHMuY29sb3IudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gaGFuZGRsZU5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdE9iamVjdChcbiAgICBkb21FbGVtZW50cy5uYW1lLnZhbHVlLFxuICAgIGRvbUVsZW1lbnRzLmNvbG9yLnZhbHVlXG4gICk7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICBuZXdQcm9qZWN0LnNldEluZGV4KCk7XG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RDcmVhdGVkKSB7XG4gIGlmIChwcm9qZWN0Q3JlYXRlZC5uYW1lID09PSAnJykge1xuICAgIGRvbUVsZW1lbnRzLmVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgY29uc3QgYSA9IENyZWF0ZURvbS5tYWtlQSgpO1xuICBjb25zdCBzdmcgPSBDcmVhdGVEb20ubWFrZU9wdGlvbnNTVkcoKTtcbiAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU9wdGlvbnMpO1xuICBhLnRleHRDb250ZW50ID0gcHJvamVjdENyZWF0ZWQubmFtZTtcbiAgYS5zdHlsZS5jb2xvciA9IHByb2plY3RDcmVhdGVkLmNvbG9yO1xuICBhLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIGRpdi5kYXRhc2V0LmluZGV4ID0gcHJvamVjdENyZWF0ZWQuaW5kZXhTZXQ7XG4gIGRpdi5hcHBlbmRDaGlsZChhKTtcbiAgZGl2LmFwcGVuZENoaWxkKHN2Zyk7XG4gIGRvbUVsZW1lbnRzLm5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgaGFuZGRsZUxpbmtzKGRpdik7XG4gIGdlbmVyYXRlTmV3VGFiKGxpbmtzKTtcbiAgZGVmYXVsdERpc3BsYXkoKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdERpc3BsYXkoKSB7XG4gIGRvbUVsZW1lbnRzLmVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb21FbGVtZW50cy5oaWRkZW5Qcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHRvZ2dsZUZhZGVkKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0UGFuZWwoKSB7XG4gIGRvbUVsZW1lbnRzLmhpZGRlblByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHRvZ2dsZUZhZGVkKCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0UGFuZWwsIGxpbmtzLCBwcm9qZWN0QXJyYXkgfTtcbiIsImltcG9ydCB7IENyZWF0ZURvbSwgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlJztcbmltcG9ydCB7IGFkZENsb3NlRXZlbnQsIHRvZ2dsZUZhZGVkIH0gZnJvbSAnLi9nZW5lcmFsRXZlbnRzJztcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gJy4vcG9wb3V0UHJvamVjdCc7XG5pbXBvcnQgeyBhbGxUYWJzLCBkaXNwbGF5TmV4dFRhYiB9IGZyb20gJy4vdGFicyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5T3B0aW9ucyhlKSB7XG4gIHRvZ2dsZUZhZGVkKCk7XG4gIGNvbnN0IHsgaW5kZXggfSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQ7XG4gIGNvbnN0IHByb2plY3RUYXJnZXQgPSBmaW5kVGFyZ2V0UHJvamVjdChpbmRleCk7XG4gIGNvbnN0IGRpdiA9IENyZWF0ZURvbS5tYWtlRGl2KCk7XG4gIGNvbnN0IGNsb3NlU1ZHID0gQ3JlYXRlRG9tLm1ha2VDbG9zZVNWRygpO1xuICBjb25zdCBuZXdGb3JtID0gZWRpdERpdihkaXYsIGNsb3NlU1ZHLCBwcm9qZWN0VGFyZ2V0KTtcbiAgc2V0RGVsZXRlKG5ld0Zvcm0sIGUsIGRpdik7XG4gIGNoYW5nZU9wdGlvbnMobmV3Rm9ybSwgZSwgcHJvamVjdFRhcmdldCwgaW5kZXgsIGRpdik7XG4gIGRvbUVsZW1lbnRzLmhpZGRlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFyZ2V0UHJvamVjdChpbmRleCkge1xuICBjb25zdCB0YXJnZXQgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKFxuICAgIChwcm9qZWN0KSA9PiBOdW1iZXIocHJvamVjdC5pbmRleFNldCkgPT09IE51bWJlcihpbmRleClcbiAgKTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBlZGl0RGl2KGRpdiwgY2xvc2VTVkcsIHByb2plY3QpIHtcbiAgYWRkQ2xvc2VFdmVudChjbG9zZVNWRyk7XG4gIGNvbnN0IGgyID0gQ3JlYXRlRG9tLm1ha2VIMigpO1xuICBoMi50ZXh0Q29udGVudCA9IHByb2plY3RbMF0ubmFtZTtcbiAgY29uc3QgbmV3Rm9ybSA9IENyZWF0ZURvbS5tYWtlRm9ybSgpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBDcmVhdGVEb20ubWFrZURlbGV0ZSgpO1xuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2plY3QnKTtcbiAgbmV3Rm9ybS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBkaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY2xvc2VTVkcpO1xuICBkaXYuYXBwZW5kQ2hpbGQobmV3Rm9ybSk7XG4gIHJldHVybiBuZXdGb3JtO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VPcHRpb25zKG5vZGUsIGV2ZW50LCB0YXJnZXQsIGluZGV4LCBjb250YWluZXIpIHtcbiAgY29uc3QgbmV3TmFtZSA9IG5vZGUucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgY29uc3QgbmV3Q29sb3IgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJyNjb2xvcicpO1xuICBjb25zdCBjaGFuZ2VCdXR0b24gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBjaGFuZ2VCdXR0b24ub3JpZ2luYWxEaXYgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIGNoYW5nZUJ1dHRvbi5wb3BvdXREaXYgPSBjb250YWluZXI7XG4gIGNoYW5nZUJ1dHRvbi5vcmlnaW5hbFByb2plY3QgPSB0YXJnZXQ7XG4gIGNoYW5nZUJ1dHRvbi5vcmlnaW5hbEluZGV4ID0gaW5kZXg7XG4gIGNoYW5nZUJ1dHRvbi5uZXdDb2xvciA9IG5ld0NvbG9yO1xuICBjaGFuZ2VCdXR0b24ubmV3TmFtZSA9IG5ld05hbWU7XG4gIGNoYW5nZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVZhbHVlcyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVZhbHVlcyhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmV3VmFsdWVzID0ge1xuICAgIG5hbWU6IGUudGFyZ2V0Lm5ld05hbWUudmFsdWUsXG4gICAgY29sb3I6IGUudGFyZ2V0Lm5ld0NvbG9yLnZhbHVlLFxuICB9O1xuICBjb25zdCBhID0gZS50YXJnZXQub3JpZ2luYWxEaXYucXVlcnlTZWxlY3RvcignYScpO1xuICBjb25zdCB7IG9yaWdpbmFsSW5kZXggfSA9IGUudGFyZ2V0O1xuICB1cGRhdGVEaXYoYSwgbmV3VmFsdWVzLCBvcmlnaW5hbEluZGV4KTtcbiAgZS50YXJnZXQucG9wb3V0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpdihlbGVtLCBvYmosIGkpIHtcbiAgaWYgKG9iai5uYW1lICE9PSAnJykge1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSBvYmoubmFtZTtcbiAgICBwcm9qZWN0QXJyYXlbaV0ubmFtZSA9IG9iai5uYW1lO1xuICB9XG4gIGVsZW0uc3R5bGUuY29sb3IgPSBvYmouY29sb3I7XG4gIHByb2plY3RBcnJheVtpXS5jb2xvciA9IG9iai5jb2xvcjtcbiAgdG9nZ2xlRmFkZWQoKTtcbn1cblxuZnVuY3Rpb24gc2V0RGVsZXRlKG5vZGUsIGV2ZW50LCBjb250YWluZXIpIHtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gIGRlbGV0ZUJ1dHRvbi5vcmlnaW5hbERpdiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudDtcbiAgZGVsZXRlQnV0dG9uLnBvcG91dERpdiA9IGNvbnRhaW5lcjtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0Lm9yaWdpbmFsRGl2LmRhdGFzZXQuaW5kZXg7XG4gIGUudGFyZ2V0Lm9yaWdpbmFsRGl2LnJlbW92ZSgpO1xuICBlLnRhcmdldC5wb3BvdXREaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgYWxsVGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICBpZiAodGFiLmRhdGFzZXQuaW5kZXggPT09IHByb2plY3RJbmRleCkge1xuICAgICAgY29uc3QgdGFiU2VsZWN0ZWQgPSB0YWIuZGF0YXNldC5pbmRleDtcbiAgICAgIHRhYi5yZW1vdmUoKTtcbiAgICAgIGRpc3BsYXlOZXh0VGFiKHRhYlNlbGVjdGVkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRvZ2dsZUZhZGVkKCk7XG59XG4iLCJpbXBvcnQgeyBDcmVhdGVEb20sIGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9kb21DYWNoZSc7XG5cbmxldCBhbGxUYWJzO1xucmVmcmVzaFRhYnMoKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVOZXdUYWIobGlua3MpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChsaW5rc1tpXSAmJiBsaW5rcy5sZW5ndGggPT09IGkgKyAxKSB7XG4gICAgICBjb25zdCBkaXYgPSBDcmVhdGVEb20ubWFrZURpdigpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSBgJHtpfWA7XG4gICAgICBkaXYuZGF0YXNldC5pbmRleCA9IGk7XG4gICAgICBkb21FbGVtZW50cy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG4gIGRpc3BsYXlMYXN0VGFiKCk7XG4gIHNldEV2ZW50KGxpbmtzKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUxhc3RUYWIoKSB7XG4gIHJlZnJlc2hUYWJzKCk7XG4gIGhpZGVBbGxUYWJzKCk7XG4gIGFsbFRhYnNbYWxsVGFicy5sZW5ndGggLSAxXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tdGFiJyk7XG59XG5cbmZ1bmN0aW9uIHNldEV2ZW50KGxpbmtzKSB7XG4gIGxpbmtzLmZvckVhY2goKGxpbmspID0+IGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RMaXN0VG9EaXNwbGF5KSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdExpc3RUb0Rpc3BsYXkoZSkge1xuICBjb25zdCB0YXJnZXRJbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICByZWZyZXNoVGFicygpO1xuICBoaWRlQWxsVGFicygpO1xuICBjb25zdCBzZWxlY3RlZFRhYiA9IGFsbFRhYnMuZmlsdGVyKFxuICAgICh0YWIpID0+IHRhYi5kYXRhc2V0LmluZGV4ID09PSB0YXJnZXRJbmRleFxuICApO1xuICBzZWxlY3RlZFRhYlswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tdGFiJyk7XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hUYWJzKCkge1xuICBhbGxUYWJzID0gZG9tRWxlbWVudHMucmVmcmVzaExpc3QoKTtcbn1cblxuZnVuY3Rpb24gaGlkZUFsbFRhYnMoKSB7XG4gIGFsbFRhYnMuZm9yRWFjaCgodGFiKSA9PiB0YWIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuLXRhYicpKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5leHRUYWIoZGVsZXRlZCkge1xuICBjb25zdCBpbmRleERlbGV0ZWQgPSBhbGxUYWJzLmZpbmRJbmRleChcbiAgICAodGFiKSA9PiBOdW1iZXIodGFiLmRhdGFzZXQuaW5kZXgpID09PSBOdW1iZXIoZGVsZXRlZClcbiAgKTtcbiAgYWxsVGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICBpZiAoTnVtYmVyKHRhYi5kYXRhc2V0LmluZGV4KSA9PT0gTnVtYmVyKGRlbGV0ZWQpICsgMSkge1xuICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi10YWInKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCByZW1vdmVkID0gYWxsVGFicy5zcGxpY2UoaW5kZXhEZWxldGVkLCAxKTtcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVOZXdUYWIsIGFsbFRhYnMsIGRpc3BsYXlOZXh0VGFiIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vbWFpbi5jc3MnO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RQYW5lbCB9IGZyb20gJy4vcG9wb3V0UHJvamVjdCc7XG5pbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tQ2FjaGUuanMnO1xuXG5kb21FbGVtZW50cy5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVByb2plY3RQYW5lbCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=