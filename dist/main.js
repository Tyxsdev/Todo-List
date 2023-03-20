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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    box-sizing: border-box;\n    --color-one: #edd5b4;\n    --color-two: #72716f;\n    --color-three: #471482;\n    --color-four: #d1cad9;\n    --color-five: #db4439;\n    --transition-one: all 0.3s ease-in-out;\n    --transition-two: all 0.1s ease-in-out;\n}\n\nbody {\n    background-color: var(--color-one);\n}\n\nheader {\n    display: grid;\n    place-content: center;\n    font-family: 'Tilt Neon', cursive;\n}\n\nmain {\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.project-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n    border-right: 2px solid black;\n}\n\n.header-project {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    transition: var(--transition-one);\n    border-bottom: 2px solid black;\n}\n\n.header-project:hover {\n    background-color: var(--color-two);\n}\n\n.header-project h3 {\n    grid-column: 2 / 4;\n    font-size: 1.4rem;\n}\n\n.material-symbols-outlined {\n    justify-self: end;\n    align-self: center;\n    transition: var(--transition-two);\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.material-symbols-outlined:hover {\n    scale: 1.3;\n    color: var(--color-three);\n}\n\n.new-project {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    gap: 1rem;\n    grid-auto-rows: 1fr;\n}\n\n.project {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid black;\n}\n\n.title {\n    grid-column: 2 / 4;\n    transition: all 0.2s ease-in-out;\n}\n\n.options {\n    justify-self: end;\n}\n\n.title:hover {\n    text-decoration: underline;\n    font-size: 1.5rem;\n}\n\n.test-project {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 30vh;\n    width: 600px;\n    background-color: var(--color-four);\n    padding: 1rem;\n    border-radius: 10px;\n    border: 2px solid var(--color-three);\n    display: none;\n}\n\n.edit-project {\n    width: 30rem;\n    height: 10rem;\n    position: absolute;\n    top: 20%;\n    left: 10%;\n    background-color: var(--color-four);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    border-radius: 10px;\n    border: 2px solid var(--color-three);\n}\n\n.test-project h2 {\n    display: inline;\n}\n\n.edit-project h2 {\n    align-self: center;\n    grid-row: 1 / 2;\n    margin: 0;\n}\n\n\n.close-one {\n    position: absolute;\n    right: 1rem;\n}\n\n.close-two {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.test-project form,\n.edit-project form {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    display: grid;\n    gap: 1rem;\n    font-family: 'Tilt Neon', cursive;\n}\n\nform label {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n}\n\nform input {\n    border-radius: 5px;\n    outline: none;\n    border: 2px solid var(--color-three);\n}\n\n#color {\n    border: 0;\n    padding: 0;\n}\n\nform button {\n    font-family: 'Tilt Neon', cursive;\n    font-size: 1rem;\n    width: fit-content;\n    padding: 0.3rem 1.5rem;\n    border-radius: 15px;\n    border: 2px solid var(--color-three);\n    background-color: black;\n    color: white;\n}\n\n.faded {\n    opacity: 20%;\n    pointer-events: none;\n}\n\n.error {\n    display: none;\n    margin-top: 0;\n    color: var(--color-five);\n}\n\n.hidden-tab {\n    display: none;\n}\n\n.list-container {\n    background-color: #db4439;\n    grid-column: 2 / 3;\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,oBAAoB;IACpB,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;IACrB,sCAAsC;IACtC,sCAAsC;AAC1C;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,iCAAiC;IACjC,8BAA8B;AAClC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,iCAAiC;IACjC;;;;;AAKJ;;AAEA;IACI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,kCAAkC;IAClC,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,OAAO;IACP,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,SAAS;AACb;;;AAGA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;IACpC,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB","sourcesContent":[":root {\n    box-sizing: border-box;\n    --color-one: #edd5b4;\n    --color-two: #72716f;\n    --color-three: #471482;\n    --color-four: #d1cad9;\n    --color-five: #db4439;\n    --transition-one: all 0.3s ease-in-out;\n    --transition-two: all 0.1s ease-in-out;\n}\n\nbody {\n    background-color: var(--color-one);\n}\n\nheader {\n    display: grid;\n    place-content: center;\n    font-family: 'Tilt Neon', cursive;\n}\n\nmain {\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.project-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n    border-right: 2px solid black;\n}\n\n.header-project {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    transition: var(--transition-one);\n    border-bottom: 2px solid black;\n}\n\n.header-project:hover {\n    background-color: var(--color-two);\n}\n\n.header-project h3 {\n    grid-column: 2 / 4;\n    font-size: 1.4rem;\n}\n\n.material-symbols-outlined {\n    justify-self: end;\n    align-self: center;\n    transition: var(--transition-two);\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.material-symbols-outlined:hover {\n    scale: 1.3;\n    color: var(--color-three);\n}\n\n.new-project {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    gap: 1rem;\n    grid-auto-rows: 1fr;\n}\n\n.project {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid black;\n}\n\n.title {\n    grid-column: 2 / 4;\n    transition: all 0.2s ease-in-out;\n}\n\n.options {\n    justify-self: end;\n}\n\n.title:hover {\n    text-decoration: underline;\n    font-size: 1.5rem;\n}\n\n.test-project {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 30vh;\n    width: 600px;\n    background-color: var(--color-four);\n    padding: 1rem;\n    border-radius: 10px;\n    border: 2px solid var(--color-three);\n    display: none;\n}\n\n.edit-project {\n    width: 30rem;\n    height: 10rem;\n    position: absolute;\n    top: 20%;\n    left: 10%;\n    background-color: var(--color-four);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    border-radius: 10px;\n    border: 2px solid var(--color-three);\n}\n\n.test-project h2 {\n    display: inline;\n}\n\n.edit-project h2 {\n    align-self: center;\n    grid-row: 1 / 2;\n    margin: 0;\n}\n\n\n.close-one {\n    position: absolute;\n    right: 1rem;\n}\n\n.close-two {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.test-project form,\n.edit-project form {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    display: grid;\n    gap: 1rem;\n    font-family: 'Tilt Neon', cursive;\n}\n\nform label {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n}\n\nform input {\n    border-radius: 5px;\n    outline: none;\n    border: 2px solid var(--color-three);\n}\n\n#color {\n    border: 0;\n    padding: 0;\n}\n\nform button {\n    font-family: 'Tilt Neon', cursive;\n    font-size: 1rem;\n    width: fit-content;\n    padding: 0.3rem 1.5rem;\n    border-radius: 15px;\n    border: 2px solid var(--color-three);\n    background-color: black;\n    color: white;\n}\n\n.faded {\n    opacity: 20%;\n    pointer-events: none;\n}\n\n.error {\n    display: none;\n    margin-top: 0;\n    color: var(--color-five);\n}\n\n.hidden-tab {\n    display: none;\n}\n\n.list-container {\n    background-color: #db4439;\n    grid-column: 2 / 3;\n}"],"sourceRoot":""}]);
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
    firstDiv.appendChild(nameLabel);
    firstDiv.appendChild(nameInput);
    secondDiv.appendChild(colorLabel);
    secondDiv.appendChild(colorInput);
    form.appendChild(firstDiv);
    form.appendChild(secondDiv);
    form.appendChild(done);
    return form;
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

const projectArray = [];

class CreateProjectObject {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  setIndex() {
    const newProjectIndex = projectArray.findIndex(
      (elem) => elem.name === this.name
    );
    this.indexSet = newProjectIndex;
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




function displayOptions(e) {
  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.toggleFaded)();
  const { index } = e.currentTarget.parentElement.dataset;
  const projectTarget = findTargetProject(index);
  const div = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeDiv();
  const closeSVG = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeCloseSVG();
  const newForm = editDiv(div, closeSVG, projectTarget);
  changeOptions(newForm, e, projectTarget, index, div);
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.hiddenContainer.appendChild(div);
}

function findTargetProject(index) {
  const target = _popoutProject__WEBPACK_IMPORTED_MODULE_2__.projectArray.filter((project) => project.indexSet == index);
  return target;
}

function editDiv(div, closeSVG, project) {
  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.addCloseEvent)(closeSVG);
  const h2 = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeH2();
  h2.textContent = project[0].name;
  const newForm = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeForm();
  div.classList.add('edit-project');
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
  changeButton.addEventListener('click', preventDefault);
  changeButton.addEventListener('click', updateValues);
}

function preventDefault(e) {
  e.preventDefault();
}

function updateValues(e) {
  const newValues = {
    name: e.target.newName.value,
    color: e.target.newColor.value,
  };
  const a = e.target.originalDiv.querySelector('a');
  a.textContent = newValues.name;
  a.style.color = newValues.color;
  e.target.popoutDiv.style.display = 'none';
  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.toggleFaded)();
  _popoutProject__WEBPACK_IMPORTED_MODULE_2__.projectArray[e.target.originalIndex].name = newValues.name;
  _popoutProject__WEBPACK_IMPORTED_MODULE_2__.projectArray[e.target.originalIndex].color = newValues.color;
}


/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateNewTab": () => (/* binding */ generateNewTab)
/* harmony export */ });
/* harmony import */ var _domCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCache */ "./src/domCache.js");


let allTabs;

function generateNewTab(links) {
  for (let i = 0; i < links.length; i += 1) {
    if (links[i] && links.length === i + 1) {
      const div = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeDiv();
      div.classList.add('list-container');
      div.textContent = `${i + 1}`;
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
  allTabs[targetIndex].classList.remove('hidden-tab');
}

function refreshTabs() {
  allTabs = _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.refreshList();
}

function hideAllTabs() {
  allTabs.forEach((tab) => tab.classList.add('hidden-tab'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFXO0FBQ2IsRUFBRSx3REFBWTtBQUNkLEVBQUUsd0RBQVk7QUFDZDs7Ozs7Ozs7Ozs7Ozs7OztBQzlEb0Q7O0FBRXBEOztBQUVPO0FBQ1Asa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBLGtCQUFrQix3REFBaUI7QUFDbkM7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQyxNQUFNLDRFQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksOERBQXVCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztVQ3hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDa0M7QUFDVjs7QUFFNUMsdUZBQTZDLFVBQVUsK0RBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dlbmVyYWxFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BvcG91dFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RPcHRpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1jb2xvci1vbmU6ICNlZGQ1YjQ7XFxuICAgIC0tY29sb3ItdHdvOiAjNzI3MTZmO1xcbiAgICAtLWNvbG9yLXRocmVlOiAjNDcxNDgyO1xcbiAgICAtLWNvbG9yLWZvdXI6ICNkMWNhZDk7XFxuICAgIC0tY29sb3ItZml2ZTogI2RiNDQzOTtcXG4gICAgLS10cmFuc2l0aW9uLW9uZTogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIC0tdHJhbnNpdGlvbi10d286IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLW9uZSk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdHdvKTtcXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0IGgzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXR3byk7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAgICAgJ0ZJTEwnIDAsXFxuICAgICAgICAnd2dodCcgNDAwLFxcbiAgICAgICAgJ0dSQUQnIDAsXFxuICAgICAgICAnb3BzeicgNDhcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIge1xcbiAgICBzY2FsZTogMS4zO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRpdGxlOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDMwdmg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdCB7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCBoMiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdCBoMiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcbi5jbG9zZS1vbmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uY2xvc2UtdHdvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi50ZXN0LXByb2plY3QgZm9ybSxcXG4uZWRpdC1wcm9qZWN0IGZvcm0ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxufVxcblxcbmZvcm0gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbiNjb2xvciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mYWRlZCB7XFxuICAgIG9wYWNpdHk6IDIwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1maXZlKTtcXG59XFxuXFxuLmhpZGRlbi10YWIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0NDM5O1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0QyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGlDQUFpQztJQUNqQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakM7Ozs7O0FBS0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tY29sb3Itb25lOiAjZWRkNWI0O1xcbiAgICAtLWNvbG9yLXR3bzogIzcyNzE2ZjtcXG4gICAgLS1jb2xvci10aHJlZTogIzQ3MTQ4MjtcXG4gICAgLS1jb2xvci1mb3VyOiAjZDFjYWQ5O1xcbiAgICAtLWNvbG9yLWZpdmU6ICNkYjQ0Mzk7XFxuICAgIC0tdHJhbnNpdGlvbi1vbmU6IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAtLXRyYW5zaXRpb24tdHdvOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1vbmUpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oZWFkZXItcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXR3byk7XFxufVxcblxcbi5oZWFkZXItcHJvamVjdCBoMyB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10d28pO1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICAgICdGSUxMJyAwLFxcbiAgICAgICAgJ3dnaHQnIDQwMCxcXG4gICAgICAgICdHUkFEJyAwLFxcbiAgICAgICAgJ29wc3onIDQ4XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMztcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi50aXRsZTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAzMHZoO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbi50ZXN0LXByb2plY3QgaDIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5lZGl0LXByb2plY3QgaDIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4uY2xvc2Utb25lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLmNsb3NlLXR3byB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IGZvcm0sXFxuLmVkaXQtcHJvamVjdCBmb3JtIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG5mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG5cXG4jY29sb3Ige1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMC4zcmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZmFkZWQge1xcbiAgICBvcGFjaXR5OiAyMCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZml2ZSk7XFxufVxcblxcbi5oaWRkZW4tdGFiIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiNDQzOTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gZG9tQ2FjaGUoKSB7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnN0IGhpZGRlbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW4tY29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IGhpZGRlblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdC1wcm9qZWN0Jyk7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cycpO1xuICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKTtcbiAgY29uc3QgY2xvc2VOZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW9uZScpO1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbiAgY29uc3QgZ2VuZXJhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5lcmFsJyk7XG4gIGNvbnN0IHByb09wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvLW9wdGlvbnMtYnV0dG9uJyk7XG4gIGZ1bmN0aW9uIHJlZnJlc2hMaXN0KCkge1xuICAgIGNvbnN0IGxpc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IFsuLi5saXN0Tm9kZV07XG4gICAgcmV0dXJuIGxpc3RDb250YWluZXI7XG4gIH1cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbG9yJyk7XG4gIHJldHVybiB7XG4gICAgaGlkZGVuUHJvamVjdCxcbiAgICBoaWRkZW5Db250YWluZXIsXG4gICAgbmV3UHJvamVjdEJ1dHRvbixcbiAgICBtYWluQ29udGFpbmVyLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgY2xvc2VOZXdQcm9qZWN0LFxuICAgIHByb2plY3RzQ29udGFpbmVyLFxuICAgIG5ld1Byb2plY3RDb250YWluZXIsXG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIGdlbmVyYWwsXG4gICAgcmVmcmVzaExpc3QsXG4gICAgbmFtZSxcbiAgICBjb2xvcixcbiAgICBwcm9PcHRpb25zLFxuICB9O1xufVxuXG5jb25zdCBkb21FbGVtZW50cyA9IGRvbUNhY2hlKCk7XG5cbmNvbnN0IENyZWF0ZURvbSA9IHtcbiAgbWFrZURpdigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXR1cm4gZGl2O1xuICB9LFxuICBtYWtlQSgpIHtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHJldHVybiBhO1xuICB9LFxuICBtYWtlSDIoKSB7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHJldHVybiBoMjtcbiAgfSxcbiAgbWFrZU9wdGlvbnNTVkcoKSB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHN2Zy5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcbiAgICBzdmcudGV4dENvbnRlbnQgPSAnbW9yZV92ZXJ0JztcbiAgICByZXR1cm4gc3ZnO1xuICB9LFxuICBtYWtlQ2xvc2VTVkcoKSB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHN2Zy5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXR3bycpO1xuICAgIHN2Zy50ZXh0Q29udGVudCA9ICdjbG9zZSc7XG4gICAgcmV0dXJuIHN2ZztcbiAgfSxcbiAgbWFrZUJ1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9LFxuICBtYWtlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBjb2xvckxhYmVsID0gbmFtZUxhYmVsLmNsb25lTm9kZSgpO1xuICAgIGNvbnN0IGNvbG9ySW5wdXQgPSBuYW1lSW5wdXQuY2xvbmVOb2RlKCk7XG4gICAgY29uc3QgZG9uZSA9IHRoaXMubWFrZUJ1dHRvbigpO1xuICAgIGNvbnN0IGZpcnN0RGl2ID0gdGhpcy5tYWtlRGl2KCk7XG4gICAgY29uc3Qgc2Vjb25kRGl2ID0gdGhpcy5tYWtlRGl2KCk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gICAgY29sb3JMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjb2xvcicpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgY29sb3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY29sb3InKTtcbiAgICBjb2xvcklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjb2xvcicpO1xuICAgIGNvbG9ySW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjb2xvcicpO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgbmFtZSc7XG4gICAgY29sb3JMYWJlbC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgY29sb3InO1xuICAgIGRvbmUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGRvbmUudGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgZmlyc3REaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBmaXJzdERpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChjb2xvckxhYmVsKTtcbiAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoY29sb3JJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaXJzdERpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZWNvbmREaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9uZSk7XG4gICAgcmV0dXJuIGZvcm07XG4gIH0sXG59O1xuXG5leHBvcnQgeyBkb21FbGVtZW50cywgQ3JlYXRlRG9tIH07XG4iLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tQ2FjaGUnO1xuXG5mdW5jdGlvbiBhZGRDbG9zZUV2ZW50KGVsZW0pIHtcbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbn1cblxuZnVuY3Rpb24gY2xvc2UoZSkge1xuICB0b2dnbGVGYWRlZCgpO1xuICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGYWRlZCgpIHtcbiAgZG9tRWxlbWVudHMubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdmYWRlZCcpO1xufVxuXG5leHBvcnQgeyB0b2dnbGVGYWRlZCwgYWRkQ2xvc2VFdmVudCwgY2xvc2UgfTtcbiIsImltcG9ydCB7IGRvbUVsZW1lbnRzLCBDcmVhdGVEb20gfSBmcm9tICcuL2RvbUNhY2hlLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlTmV3VGFiIH0gZnJvbSAnLi90YWJzLmpzJztcbmltcG9ydCB7IGFkZENsb3NlRXZlbnQsIHRvZ2dsZUZhZGVkIH0gZnJvbSAnLi9nZW5lcmFsRXZlbnRzLmpzJztcbmltcG9ydCB7IGRpc3BsYXlPcHRpb25zIH0gZnJvbSAnLi9wcm9qZWN0T3B0aW9ucyc7XG5cbmNvbnN0IGxpbmtzID0gW107XG5saW5rcy5wdXNoKGRvbUVsZW1lbnRzLmdlbmVyYWwpO1xuXG5jb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuY2xhc3MgQ3JlYXRlUHJvamVjdE9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGNvbG9yKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gIH1cblxuICBzZXRJbmRleCgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXkuZmluZEluZGV4KFxuICAgICAgKGVsZW0pID0+IGVsZW0ubmFtZSA9PT0gdGhpcy5uYW1lXG4gICAgKTtcbiAgICB0aGlzLmluZGV4U2V0ID0gbmV3UHJvamVjdEluZGV4O1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IENyZWF0ZVByb2plY3RPYmplY3QoJ0dlbmVyYWwnLCAnYmxhY2snKTtcbnByb2plY3RBcnJheS5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbmRlZmF1bHRQcm9qZWN0LnNldEluZGV4KCk7XG5kb21FbGVtZW50cy5jcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0VmFsdWVzKTtcbmFkZENsb3NlRXZlbnQoZG9tRWxlbWVudHMuY2xvc2VOZXdQcm9qZWN0KTtcbmRvbUVsZW1lbnRzLnByb09wdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5T3B0aW9ucyk7XG5cbmZ1bmN0aW9uIGhhbmRkbGVMaW5rcyhkaXYpIHtcbiAgbGlua3MucHVzaChkaXYpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXMoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3RDcmVhdGVkID0gaGFuZGRsZU5ld1Byb2plY3QoKTtcbiAgYWRkUHJvamVjdChwcm9qZWN0Q3JlYXRlZCk7XG4gIGRvbUVsZW1lbnRzLm5hbWUudmFsdWUgPSAnJztcbiAgZG9tRWxlbWVudHMuY29sb3IudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gaGFuZGRsZU5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdE9iamVjdChcbiAgICBkb21FbGVtZW50cy5uYW1lLnZhbHVlLFxuICAgIGRvbUVsZW1lbnRzLmNvbG9yLnZhbHVlXG4gICk7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICBuZXdQcm9qZWN0LnNldEluZGV4KCk7XG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RDcmVhdGVkKSB7XG4gIGlmIChwcm9qZWN0Q3JlYXRlZC5uYW1lID09PSAnJykge1xuICAgIGRvbUVsZW1lbnRzLmVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgY29uc3QgYSA9IENyZWF0ZURvbS5tYWtlQSgpO1xuICBjb25zdCBzdmcgPSBDcmVhdGVEb20ubWFrZU9wdGlvbnNTVkcoKTtcbiAgYS50ZXh0Q29udGVudCA9IHByb2plY3RDcmVhdGVkLm5hbWU7XG4gIGEuc3R5bGUuY29sb3IgPSBwcm9qZWN0Q3JlYXRlZC5jb2xvcjtcbiAgYS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICBkaXYuZGF0YXNldC5pbmRleCA9IHByb2plY3RDcmVhdGVkLmluZGV4U2V0O1xuICBkaXYuYXBwZW5kQ2hpbGQoYSk7XG4gIGRpdi5hcHBlbmRDaGlsZChzdmcpO1xuICBkb21FbGVtZW50cy5uZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIGhhbmRkbGVMaW5rcyhkaXYpO1xuICBnZW5lcmF0ZU5ld1RhYihsaW5rcyk7XG4gIGRlZmF1bHREaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHREaXNwbGF5KCkge1xuICBkb21FbGVtZW50cy5lcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9tRWxlbWVudHMuaGlkZGVuUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0b2dnbGVGYWRlZCgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdFBhbmVsKCkge1xuICBkb21FbGVtZW50cy5oaWRkZW5Qcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB0b2dnbGVGYWRlZCgpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdFBhbmVsLCBsaW5rcywgcHJvamVjdEFycmF5IH07XG4iLCJpbXBvcnQgeyBDcmVhdGVEb20sIGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9kb21DYWNoZSc7XG5pbXBvcnQgeyBhZGRDbG9zZUV2ZW50LCB0b2dnbGVGYWRlZCB9IGZyb20gJy4vZ2VuZXJhbEV2ZW50cyc7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tICcuL3BvcG91dFByb2plY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU9wdGlvbnMoZSkge1xuICB0b2dnbGVGYWRlZCgpO1xuICBjb25zdCB7IGluZGV4IH0gPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0O1xuICBjb25zdCBwcm9qZWN0VGFyZ2V0ID0gZmluZFRhcmdldFByb2plY3QoaW5kZXgpO1xuICBjb25zdCBkaXYgPSBDcmVhdGVEb20ubWFrZURpdigpO1xuICBjb25zdCBjbG9zZVNWRyA9IENyZWF0ZURvbS5tYWtlQ2xvc2VTVkcoKTtcbiAgY29uc3QgbmV3Rm9ybSA9IGVkaXREaXYoZGl2LCBjbG9zZVNWRywgcHJvamVjdFRhcmdldCk7XG4gIGNoYW5nZU9wdGlvbnMobmV3Rm9ybSwgZSwgcHJvamVjdFRhcmdldCwgaW5kZXgsIGRpdik7XG4gIGRvbUVsZW1lbnRzLmhpZGRlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFyZ2V0UHJvamVjdChpbmRleCkge1xuICBjb25zdCB0YXJnZXQgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmluZGV4U2V0ID09IGluZGV4KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gZWRpdERpdihkaXYsIGNsb3NlU1ZHLCBwcm9qZWN0KSB7XG4gIGFkZENsb3NlRXZlbnQoY2xvc2VTVkcpO1xuICBjb25zdCBoMiA9IENyZWF0ZURvbS5tYWtlSDIoKTtcbiAgaDIudGV4dENvbnRlbnQgPSBwcm9qZWN0WzBdLm5hbWU7XG4gIGNvbnN0IG5ld0Zvcm0gPSBDcmVhdGVEb20ubWFrZUZvcm0oKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdCcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY2xvc2VTVkcpO1xuICBkaXYuYXBwZW5kQ2hpbGQobmV3Rm9ybSk7XG4gIHJldHVybiBuZXdGb3JtO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VPcHRpb25zKG5vZGUsIGV2ZW50LCB0YXJnZXQsIGluZGV4LCBjb250YWluZXIpIHtcbiAgY29uc3QgbmV3TmFtZSA9IG5vZGUucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgY29uc3QgbmV3Q29sb3IgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJyNjb2xvcicpO1xuICBjb25zdCBjaGFuZ2VCdXR0b24gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBjaGFuZ2VCdXR0b24ub3JpZ2luYWxEaXYgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIGNoYW5nZUJ1dHRvbi5wb3BvdXREaXYgPSBjb250YWluZXI7XG4gIGNoYW5nZUJ1dHRvbi5vcmlnaW5hbFByb2plY3QgPSB0YXJnZXQ7XG4gIGNoYW5nZUJ1dHRvbi5vcmlnaW5hbEluZGV4ID0gaW5kZXg7XG4gIGNoYW5nZUJ1dHRvbi5uZXdDb2xvciA9IG5ld0NvbG9yO1xuICBjaGFuZ2VCdXR0b24ubmV3TmFtZSA9IG5ld05hbWU7XG4gIGNoYW5nZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZlbnREZWZhdWx0KTtcbiAgY2hhbmdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlVmFsdWVzKTtcbn1cblxuZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVZhbHVlcyhlKSB7XG4gIGNvbnN0IG5ld1ZhbHVlcyA9IHtcbiAgICBuYW1lOiBlLnRhcmdldC5uZXdOYW1lLnZhbHVlLFxuICAgIGNvbG9yOiBlLnRhcmdldC5uZXdDb2xvci52YWx1ZSxcbiAgfTtcbiAgY29uc3QgYSA9IGUudGFyZ2V0Lm9yaWdpbmFsRGl2LnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgYS50ZXh0Q29udGVudCA9IG5ld1ZhbHVlcy5uYW1lO1xuICBhLnN0eWxlLmNvbG9yID0gbmV3VmFsdWVzLmNvbG9yO1xuICBlLnRhcmdldC5wb3BvdXREaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgdG9nZ2xlRmFkZWQoKTtcbiAgcHJvamVjdEFycmF5W2UudGFyZ2V0Lm9yaWdpbmFsSW5kZXhdLm5hbWUgPSBuZXdWYWx1ZXMubmFtZTtcbiAgcHJvamVjdEFycmF5W2UudGFyZ2V0Lm9yaWdpbmFsSW5kZXhdLmNvbG9yID0gbmV3VmFsdWVzLmNvbG9yO1xufVxuIiwiaW1wb3J0IHsgQ3JlYXRlRG9tLCBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tQ2FjaGUnO1xuXG5sZXQgYWxsVGFicztcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTmV3VGFiKGxpbmtzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAobGlua3NbaV0gJiYgbGlua3MubGVuZ3RoID09PSBpICsgMSkge1xuICAgICAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0LWNvbnRhaW5lcicpO1xuICAgICAgZGl2LnRleHRDb250ZW50ID0gYCR7aSArIDF9YDtcbiAgICAgIGRvbUVsZW1lbnRzLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gIH1cbiAgZGlzcGxheUxhc3RUYWIoKTtcbiAgc2V0RXZlbnQobGlua3MpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TGFzdFRhYigpIHtcbiAgcmVmcmVzaFRhYnMoKTtcbiAgaGlkZUFsbFRhYnMoKTtcbiAgYWxsVGFic1thbGxUYWJzLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi10YWInKTtcbn1cblxuZnVuY3Rpb24gc2V0RXZlbnQobGlua3MpIHtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdExpc3RUb0Rpc3BsYXkpKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TGlzdFRvRGlzcGxheShlKSB7XG4gIGNvbnN0IHRhcmdldEluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIHJlZnJlc2hUYWJzKCk7XG4gIGhpZGVBbGxUYWJzKCk7XG4gIGFsbFRhYnNbdGFyZ2V0SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi10YWInKTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaFRhYnMoKSB7XG4gIGFsbFRhYnMgPSBkb21FbGVtZW50cy5yZWZyZXNoTGlzdCgpO1xufVxuXG5mdW5jdGlvbiBoaWRlQWxsVGFicygpIHtcbiAgYWxsVGFicy5mb3JFYWNoKCh0YWIpID0+IHRhYi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tdGFiJykpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL21haW4uY3NzJztcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0UGFuZWwgfSBmcm9tICcuL3BvcG91dFByb2plY3QnO1xuaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlLmpzJztcblxuZG9tRWxlbWVudHMubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQcm9qZWN0UGFuZWwpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9