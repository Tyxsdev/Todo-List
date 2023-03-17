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
  editDiv(div, closeSVG, projectTarget);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELDZCQUE2QiwyQkFBMkIsMkJBQTJCLDZCQUE2Qiw0QkFBNEIsNEJBQTRCLDZDQUE2Qyw2Q0FBNkMsR0FBRyxVQUFVLHlDQUF5QyxHQUFHLFlBQVksb0JBQW9CLDRCQUE0Qix3Q0FBd0MsR0FBRyxVQUFVLHdDQUF3QyxHQUFHLGdCQUFnQixtQkFBbUIsb0JBQW9CLG9CQUFvQixxQ0FBcUMsR0FBRyx3QkFBd0IseUJBQXlCLG9CQUFvQixtQ0FBbUMsZ0JBQWdCLG9DQUFvQyxHQUFHLHFCQUFxQixvQkFBb0IsNENBQTRDLHdDQUF3QyxxQ0FBcUMsR0FBRywyQkFBMkIseUNBQXlDLEdBQUcsd0JBQXdCLHlCQUF5Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLHlCQUF5Qix3Q0FBd0MsK0dBQStHLHNDQUFzQyxpQkFBaUIsZ0NBQWdDLEdBQUcsa0JBQWtCLHdCQUF3QixvQkFBb0IseUNBQXlDLGdCQUFnQiwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQiwwQkFBMEIsNENBQTRDLHFDQUFxQyxHQUFHLFlBQVkseUJBQXlCLHVDQUF1QyxHQUFHLGNBQWMsd0JBQXdCLEdBQUcsa0JBQWtCLGlDQUFpQyx3QkFBd0IsR0FBRyxtQkFBbUIseUJBQXlCLG1CQUFtQixjQUFjLGVBQWUsZ0JBQWdCLG1CQUFtQiwwQ0FBMEMsb0JBQW9CLDBCQUEwQiwyQ0FBMkMsb0JBQW9CLEdBQUcsbUJBQW1CLG1CQUFtQixvQkFBb0IseUJBQXlCLGVBQWUsZ0JBQWdCLDBDQUEwQyxvQkFBb0Isb0JBQW9CLHFDQUFxQyxrQ0FBa0MsMEJBQTBCLDJDQUEyQyxHQUFHLHNCQUFzQixzQkFBc0IsR0FBRyxzQkFBc0IseUJBQXlCLHNCQUFzQixnQkFBZ0IsR0FBRyxrQkFBa0IseUJBQXlCLGtCQUFrQixHQUFHLGdCQUFnQix5QkFBeUIsc0JBQXNCLEdBQUcsNkNBQTZDLHNCQUFzQix5QkFBeUIsdUJBQXVCLG9CQUFvQixnQkFBZ0Isd0NBQXdDLEdBQUcsZ0JBQWdCLHdCQUF3Qix5QkFBeUIsR0FBRyxnQkFBZ0IseUJBQXlCLG9CQUFvQiwyQ0FBMkMsR0FBRyxZQUFZLGdCQUFnQixpQkFBaUIsR0FBRyxpQkFBaUIsd0NBQXdDLHNCQUFzQix5QkFBeUIsNkJBQTZCLDBCQUEwQiwyQ0FBMkMsOEJBQThCLG1CQUFtQixHQUFHLFlBQVksbUJBQW1CLDJCQUEyQixHQUFHLFlBQVksb0JBQW9CLG9CQUFvQiwrQkFBK0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcscUJBQXFCLGdDQUFnQyx5QkFBeUIsR0FBRyxPQUFPLCtFQUErRSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGlDQUFpQyw2QkFBNkIsMkJBQTJCLDJCQUEyQiw2QkFBNkIsNEJBQTRCLDRCQUE0Qiw2Q0FBNkMsNkNBQTZDLEdBQUcsVUFBVSx5Q0FBeUMsR0FBRyxZQUFZLG9CQUFvQiw0QkFBNEIsd0NBQXdDLEdBQUcsVUFBVSx3Q0FBd0MsR0FBRyxnQkFBZ0IsbUJBQW1CLG9CQUFvQixvQkFBb0IscUNBQXFDLEdBQUcsd0JBQXdCLHlCQUF5QixvQkFBb0IsbUNBQW1DLGdCQUFnQixvQ0FBb0MsR0FBRyxxQkFBcUIsb0JBQW9CLDRDQUE0Qyx3Q0FBd0MscUNBQXFDLEdBQUcsMkJBQTJCLHlDQUF5QyxHQUFHLHdCQUF3Qix5QkFBeUIsd0JBQXdCLEdBQUcsZ0NBQWdDLHdCQUF3Qix5QkFBeUIsd0NBQXdDLCtHQUErRyxzQ0FBc0MsaUJBQWlCLGdDQUFnQyxHQUFHLGtCQUFrQix3QkFBd0Isb0JBQW9CLHlDQUF5QyxnQkFBZ0IsMEJBQTBCLEdBQUcsY0FBYyxvQkFBb0IsMEJBQTBCLDRDQUE0QyxxQ0FBcUMsR0FBRyxZQUFZLHlCQUF5Qix1Q0FBdUMsR0FBRyxjQUFjLHdCQUF3QixHQUFHLGtCQUFrQixpQ0FBaUMsd0JBQXdCLEdBQUcsbUJBQW1CLHlCQUF5QixtQkFBbUIsY0FBYyxlQUFlLGdCQUFnQixtQkFBbUIsMENBQTBDLG9CQUFvQiwwQkFBMEIsMkNBQTJDLG9CQUFvQixHQUFHLG1CQUFtQixtQkFBbUIsb0JBQW9CLHlCQUF5QixlQUFlLGdCQUFnQiwwQ0FBMEMsb0JBQW9CLG9CQUFvQixxQ0FBcUMsa0NBQWtDLDBCQUEwQiwyQ0FBMkMsR0FBRyxzQkFBc0Isc0JBQXNCLEdBQUcsc0JBQXNCLHlCQUF5QixzQkFBc0IsZ0JBQWdCLEdBQUcsa0JBQWtCLHlCQUF5QixrQkFBa0IsR0FBRyxnQkFBZ0IseUJBQXlCLHNCQUFzQixHQUFHLDZDQUE2QyxzQkFBc0IseUJBQXlCLHVCQUF1QixvQkFBb0IsZ0JBQWdCLHdDQUF3QyxHQUFHLGdCQUFnQix3QkFBd0IseUJBQXlCLEdBQUcsZ0JBQWdCLHlCQUF5QixvQkFBb0IsMkNBQTJDLEdBQUcsWUFBWSxnQkFBZ0IsaUJBQWlCLEdBQUcsaUJBQWlCLHdDQUF3QyxzQkFBc0IseUJBQXlCLDZCQUE2QiwwQkFBMEIsMkNBQTJDLDhCQUE4QixtQkFBbUIsR0FBRyxZQUFZLG1CQUFtQiwyQkFBMkIsR0FBRyxZQUFZLG9CQUFvQixvQkFBb0IsK0JBQStCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLHFCQUFxQixnQ0FBZ0MseUJBQXlCLEdBQUcsbUJBQW1CO0FBQy8rUjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBa0c7QUFDbEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUk0QztBQUNwRSxPQUFPLGlFQUFlLHFGQUFPLElBQUksNEZBQWMsR0FBRyw0RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R087O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsaUZBQTBDO0FBQzVDOztBQUU2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZlU7QUFDWjtBQUNxQjtBQUNkOztBQUVsRDtBQUNBLFdBQVcsNkRBQW1COztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9GQUEwQztBQUMxQyxnRUFBYSxDQUFDLHFFQUEyQjtBQUN6QyxpRkFBdUMsVUFBVSwyREFBYzs7QUFFL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnRUFBc0I7QUFDeEIsRUFBRSxpRUFBdUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBLElBQUksZ0VBQXNCO0FBQzFCLElBQUksaUVBQXVCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksZ0ZBQXNDO0FBQzFDO0FBQ0E7QUFDQSxjQUFjLDJEQUFpQjtBQUMvQixZQUFZLHlEQUFlO0FBQzNCLGNBQWMsa0VBQXdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxRkFBMkM7QUFDN0M7QUFDQSxFQUFFLHdEQUFjO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLGdGQUFzQztBQUN4QyxFQUFFLGlGQUF1QztBQUN6QyxFQUFFLDhEQUFXO0FBQ2I7O0FBRUE7QUFDQSxFQUFFLGlGQUF1QztBQUN6QyxFQUFFLDhEQUFXO0FBQ2I7O0FBRW9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDUztBQUNQOztBQUUvQztBQUNQLEVBQUUsMkRBQVc7QUFDYixVQUFVLFFBQVE7QUFDbEI7QUFDQSxjQUFjLHdEQUFpQjtBQUMvQixtQkFBbUIsNkRBQXNCO0FBQ3pDO0FBQ0EsRUFBRSw4RUFBdUM7QUFDekM7O0FBRUE7QUFDQSxpQkFBaUIsK0RBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDZEQUFhO0FBQ2YsYUFBYSx1REFBZ0I7QUFDN0I7QUFDQSxrQkFBa0IseURBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qm9EOztBQUVwRDs7QUFFTztBQUNQLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQSxrQkFBa0Isd0RBQWlCO0FBQ25DO0FBQ0EsMkJBQTJCLE1BQU07QUFDakMsTUFBTSw0RUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDhEQUF1QjtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ2tDO0FBQ1Y7O0FBRTVDLHVGQUE2QyxVQUFVLCtEQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNhY2hlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9nZW5lcmFsRXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wb3BvdXRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFicy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tY29sb3Itb25lOiAjZWRkNWI0O1xcbiAgICAtLWNvbG9yLXR3bzogIzcyNzE2ZjtcXG4gICAgLS1jb2xvci10aHJlZTogIzQ3MTQ4MjtcXG4gICAgLS1jb2xvci1mb3VyOiAjZDFjYWQ5O1xcbiAgICAtLWNvbG9yLWZpdmU6ICNkYjQ0Mzk7XFxuICAgIC0tdHJhbnNpdGlvbi1vbmU6IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAtLXRyYW5zaXRpb24tdHdvOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1vbmUpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oZWFkZXItcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXR3byk7XFxufVxcblxcbi5oZWFkZXItcHJvamVjdCBoMyB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10d28pO1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICAgICdGSUxMJyAwLFxcbiAgICAgICAgJ3dnaHQnIDQwMCxcXG4gICAgICAgICdHUkFEJyAwLFxcbiAgICAgICAgJ29wc3onIDQ4XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMztcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi50aXRsZTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAzMHZoO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbi50ZXN0LXByb2plY3QgaDIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5lZGl0LXByb2plY3QgaDIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4uY2xvc2Utb25lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLmNsb3NlLXR3byB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IGZvcm0sXFxuLmVkaXQtcHJvamVjdCBmb3JtIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG5mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG5cXG4jY29sb3Ige1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMC4zcmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZmFkZWQge1xcbiAgICBvcGFjaXR5OiAyMCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZml2ZSk7XFxufVxcblxcbi5oaWRkZW4tdGFiIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiNDQzOTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixzQ0FBc0M7SUFDdEMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxpQ0FBaUM7SUFDakMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDOzs7OztBQUtKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixTQUFTO0FBQ2I7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtLWNvbG9yLW9uZTogI2VkZDViNDtcXG4gICAgLS1jb2xvci10d286ICM3MjcxNmY7XFxuICAgIC0tY29sb3ItdGhyZWU6ICM0NzE0ODI7XFxuICAgIC0tY29sb3ItZm91cjogI2QxY2FkOTtcXG4gICAgLS1jb2xvci1maXZlOiAjZGI0NDM5O1xcbiAgICAtLXRyYW5zaXRpb24tb25lOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgLS10cmFuc2l0aW9uLXR3bzogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oZWFkZXItcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tb25lKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10d28pO1xcbn1cXG5cXG4uaGVhZGVyLXByb2plY3QgaDMge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdHdvKTtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICAgICAnRklMTCcgMCxcXG4gICAgICAgICd3Z2h0JyA0MDAsXFxuICAgICAgICAnR1JBRCcgMCxcXG4gICAgICAgICdvcHN6JyA0OFxcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjM7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udGl0bGU6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZXN0LXByb2plY3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMzB2aDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IGgyIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0IGgyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuLmNsb3NlLW9uZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi5jbG9zZS10d28ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCBmb3JtLFxcbi5lZGl0LXByb2plY3QgZm9ybSB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG59XFxuXFxuZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuI2NvbG9yIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZhZGVkIHtcXG4gICAgb3BhY2l0eTogMjAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZpdmUpO1xcbn1cXG5cXG4uaGlkZGVuLXRhYiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjQ0Mzk7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGRvbUNhY2hlKCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb25zdCBoaWRkZW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuLWNvbnRhaW5lcicpO1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICBjb25zdCBoaWRkZW5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3QtcHJvamVjdCcpO1xuICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXMnKTtcbiAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpO1xuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0Jyk7XG4gIGNvbnN0IGNsb3NlTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1vbmUnKTtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG4gIGNvbnN0IGdlbmVyYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VuZXJhbCcpO1xuICBjb25zdCBwcm9PcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByby1vcHRpb25zLWJ1dHRvbicpO1xuICBmdW5jdGlvbiByZWZyZXNoTGlzdCgpIHtcbiAgICBjb25zdCBsaXN0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBbLi4ubGlzdE5vZGVdO1xuICAgIHJldHVybiBsaXN0Q29udGFpbmVyO1xuICB9XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuICBjb25zdCBjb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvcicpO1xuICByZXR1cm4ge1xuICAgIGhpZGRlblByb2plY3QsXG4gICAgaGlkZGVuQ29udGFpbmVyLFxuICAgIG5ld1Byb2plY3RCdXR0b24sXG4gICAgbWFpbkNvbnRhaW5lcixcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIGNsb3NlTmV3UHJvamVjdCxcbiAgICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgICBuZXdQcm9qZWN0Q29udGFpbmVyLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBnZW5lcmFsLFxuICAgIHJlZnJlc2hMaXN0LFxuICAgIG5hbWUsXG4gICAgY29sb3IsXG4gICAgcHJvT3B0aW9ucyxcbiAgfTtcbn1cblxuY29uc3QgZG9tRWxlbWVudHMgPSBkb21DYWNoZSgpO1xuXG5jb25zdCBDcmVhdGVEb20gPSB7XG4gIG1ha2VEaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcbiAgbWFrZUEoKSB7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICByZXR1cm4gYTtcbiAgfSxcbiAgbWFrZUgyKCkge1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICByZXR1cm4gaDI7XG4gIH0sXG4gIG1ha2VPcHRpb25zU1ZHKCkge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzdmcuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICAgIHN2Zy5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJyk7XG4gICAgc3ZnLnRleHRDb250ZW50ID0gJ21vcmVfdmVydCc7XG4gICAgcmV0dXJuIHN2ZztcbiAgfSxcbiAgbWFrZUNsb3NlU1ZHKCkge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzdmcuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICAgIHN2Zy5jbGFzc0xpc3QuYWRkKCdjbG9zZS10d28nKTtcbiAgICBzdmcudGV4dENvbnRlbnQgPSAnY2xvc2UnO1xuICAgIHJldHVybiBzdmc7XG4gIH0sXG4gIG1ha2VCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbiAgbWFrZUZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgY29sb3JMYWJlbCA9IG5hbWVMYWJlbC5jbG9uZU5vZGUoKTtcbiAgICBjb25zdCBjb2xvcklucHV0ID0gbmFtZUlucHV0LmNsb25lTm9kZSgpO1xuICAgIGNvbnN0IGRvbmUgPSB0aGlzLm1ha2VCdXR0b24oKTtcbiAgICBjb25zdCBmaXJzdERpdiA9IHRoaXMubWFrZURpdigpO1xuICAgIGNvbnN0IHNlY29uZERpdiA9IHRoaXMubWFrZURpdigpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAncG9zdCcpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgIGNvbG9yTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY29sb3InKTtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgIGNvbG9ySW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NvbG9yJyk7XG4gICAgY29sb3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY29sb3InKTtcbiAgICBjb2xvcklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29sb3InKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnQ2hhbmdlIG5hbWUnO1xuICAgIGNvbG9yTGFiZWwudGV4dENvbnRlbnQgPSAnQ2hhbmdlIGNvbG9yJztcbiAgICBkb25lLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBkb25lLnRleHRDb250ZW50ID0gJ0RvbmUnO1xuICAgIGZpcnN0RGl2LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgZmlyc3REaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbCk7XG4gICAgc2Vjb25kRGl2LmFwcGVuZENoaWxkKGNvbG9ySW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmlyc3REaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2Vjb25kRGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRvbmUpO1xuICAgIHJldHVybiBmb3JtO1xuICB9LFxufTtcblxuZXhwb3J0IHsgZG9tRWxlbWVudHMsIENyZWF0ZURvbSB9O1xuIiwiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlJztcblxuZnVuY3Rpb24gYWRkQ2xvc2VFdmVudChlbGVtKSB7XG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlKGUpIHtcbiAgdG9nZ2xlRmFkZWQoKTtcbiAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRmFkZWQoKSB7XG4gIGRvbUVsZW1lbnRzLm1haW5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZWQnKTtcbn1cblxuZXhwb3J0IHsgdG9nZ2xlRmFkZWQsIGFkZENsb3NlRXZlbnQsIGNsb3NlIH07XG4iLCJpbXBvcnQgeyBkb21FbGVtZW50cywgQ3JlYXRlRG9tIH0gZnJvbSAnLi9kb21DYWNoZS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZU5ld1RhYiB9IGZyb20gJy4vdGFicy5qcyc7XG5pbXBvcnQgeyBhZGRDbG9zZUV2ZW50LCB0b2dnbGVGYWRlZCB9IGZyb20gJy4vZ2VuZXJhbEV2ZW50cy5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5T3B0aW9ucyB9IGZyb20gJy4vcHJvamVjdE9wdGlvbnMnO1xuXG5jb25zdCBsaW5rcyA9IFtdO1xubGlua3MucHVzaChkb21FbGVtZW50cy5nZW5lcmFsKTtcblxuY29uc3QgcHJvamVjdEFycmF5ID0gW107XG5cbmNsYXNzIENyZWF0ZVByb2plY3RPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBjb2xvcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgc2V0SW5kZXgoKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdEluZGV4ID0gcHJvamVjdEFycmF5LmZpbmRJbmRleChcbiAgICAgIChlbGVtKSA9PiBlbGVtLm5hbWUgPT09IHRoaXMubmFtZVxuICAgICk7XG4gICAgdGhpcy5pbmRleFNldCA9IG5ld1Byb2plY3RJbmRleDtcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBDcmVhdGVQcm9qZWN0T2JqZWN0KCdHZW5lcmFsJywgJ2JsYWNrJyk7XG5wcm9qZWN0QXJyYXkucHVzaChkZWZhdWx0UHJvamVjdCk7XG5kZWZhdWx0UHJvamVjdC5zZXRJbmRleCgpO1xuZG9tRWxlbWVudHMuY3JlYXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldFZhbHVlcyk7XG5hZGRDbG9zZUV2ZW50KGRvbUVsZW1lbnRzLmNsb3NlTmV3UHJvamVjdCk7XG5kb21FbGVtZW50cy5wcm9PcHRpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU9wdGlvbnMpO1xuXG5mdW5jdGlvbiBoYW5kZGxlTGlua3MoZGl2KSB7XG4gIGxpbmtzLnB1c2goZGl2KTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVzKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0Q3JlYXRlZCA9IGhhbmRkbGVOZXdQcm9qZWN0KCk7XG4gIGFkZFByb2plY3QocHJvamVjdENyZWF0ZWQpO1xuICBkb21FbGVtZW50cy5uYW1lLnZhbHVlID0gJyc7XG4gIGRvbUVsZW1lbnRzLmNvbG9yLnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIGhhbmRkbGVOZXdQcm9qZWN0KCkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IENyZWF0ZVByb2plY3RPYmplY3QoXG4gICAgZG9tRWxlbWVudHMubmFtZS52YWx1ZSxcbiAgICBkb21FbGVtZW50cy5jb2xvci52YWx1ZVxuICApO1xuICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgbmV3UHJvamVjdC5zZXRJbmRleCgpO1xuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0Q3JlYXRlZCkge1xuICBpZiAocHJvamVjdENyZWF0ZWQubmFtZSA9PT0gJycpIHtcbiAgICBkb21FbGVtZW50cy5lcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRpdiA9IENyZWF0ZURvbS5tYWtlRGl2KCk7XG4gIGNvbnN0IGEgPSBDcmVhdGVEb20ubWFrZUEoKTtcbiAgY29uc3Qgc3ZnID0gQ3JlYXRlRG9tLm1ha2VPcHRpb25zU1ZHKCk7XG4gIGEudGV4dENvbnRlbnQgPSBwcm9qZWN0Q3JlYXRlZC5uYW1lO1xuICBhLnN0eWxlLmNvbG9yID0gcHJvamVjdENyZWF0ZWQuY29sb3I7XG4gIGEuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgZGl2LmRhdGFzZXQuaW5kZXggPSBwcm9qZWN0Q3JlYXRlZC5pbmRleFNldDtcbiAgZGl2LmFwcGVuZENoaWxkKGEpO1xuICBkaXYuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgZG9tRWxlbWVudHMubmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICBoYW5kZGxlTGlua3MoZGl2KTtcbiAgZ2VuZXJhdGVOZXdUYWIobGlua3MpO1xuICBkZWZhdWx0RGlzcGxheSgpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0RGlzcGxheSgpIHtcbiAgZG9tRWxlbWVudHMuZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvbUVsZW1lbnRzLmhpZGRlblByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgdG9nZ2xlRmFkZWQoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RQYW5lbCgpIHtcbiAgZG9tRWxlbWVudHMuaGlkZGVuUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgdG9nZ2xlRmFkZWQoKTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3RQYW5lbCwgbGlua3MsIHByb2plY3RBcnJheSB9O1xuIiwiaW1wb3J0IHsgQ3JlYXRlRG9tLCBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tQ2FjaGUnO1xuaW1wb3J0IHsgYWRkQ2xvc2VFdmVudCwgdG9nZ2xlRmFkZWQgfSBmcm9tICcuL2dlbmVyYWxFdmVudHMnO1xuaW1wb3J0IHsgbGlua3MsIHByb2plY3RBcnJheSB9IGZyb20gJy4vcG9wb3V0UHJvamVjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5T3B0aW9ucyhlKSB7XG4gIHRvZ2dsZUZhZGVkKCk7XG4gIGNvbnN0IHsgaW5kZXggfSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQ7XG4gIGNvbnN0IHByb2plY3RUYXJnZXQgPSBmaW5kVGFyZ2V0UHJvamVjdChpbmRleCk7XG4gIGNvbnN0IGRpdiA9IENyZWF0ZURvbS5tYWtlRGl2KCk7XG4gIGNvbnN0IGNsb3NlU1ZHID0gQ3JlYXRlRG9tLm1ha2VDbG9zZVNWRygpO1xuICBlZGl0RGl2KGRpdiwgY2xvc2VTVkcsIHByb2plY3RUYXJnZXQpO1xuICBkb21FbGVtZW50cy5oaWRkZW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuZnVuY3Rpb24gZmluZFRhcmdldFByb2plY3QoaW5kZXgpIHtcbiAgY29uc3QgdGFyZ2V0ID0gcHJvamVjdEFycmF5LmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pbmRleFNldCA9PSBpbmRleCk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGVkaXREaXYoZGl2LCBjbG9zZVNWRywgcHJvamVjdCkge1xuICBhZGRDbG9zZUV2ZW50KGNsb3NlU1ZHKTtcbiAgY29uc3QgaDIgPSBDcmVhdGVEb20ubWFrZUgyKCk7XG4gIGgyLnRleHRDb250ZW50ID0gcHJvamVjdFswXS5uYW1lO1xuICBjb25zdCBuZXdGb3JtID0gQ3JlYXRlRG9tLm1ha2VGb3JtKCk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2plY3QnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNsb3NlU1ZHKTtcbiAgZGl2LmFwcGVuZENoaWxkKG5ld0Zvcm0pO1xufVxuIiwiaW1wb3J0IHsgQ3JlYXRlRG9tLCBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tQ2FjaGUnO1xuXG5sZXQgYWxsVGFicztcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTmV3VGFiKGxpbmtzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAobGlua3NbaV0gJiYgbGlua3MubGVuZ3RoID09PSBpICsgMSkge1xuICAgICAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0LWNvbnRhaW5lcicpO1xuICAgICAgZGl2LnRleHRDb250ZW50ID0gYCR7aSArIDF9YDtcbiAgICAgIGRvbUVsZW1lbnRzLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gIH1cbiAgZGlzcGxheUxhc3RUYWIoKTtcbiAgc2V0RXZlbnQobGlua3MpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TGFzdFRhYigpIHtcbiAgcmVmcmVzaFRhYnMoKTtcbiAgaGlkZUFsbFRhYnMoKTtcbiAgYWxsVGFic1thbGxUYWJzLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi10YWInKTtcbn1cblxuZnVuY3Rpb24gc2V0RXZlbnQobGlua3MpIHtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdExpc3RUb0Rpc3BsYXkpKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TGlzdFRvRGlzcGxheShlKSB7XG4gIGNvbnN0IHRhcmdldEluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIHJlZnJlc2hUYWJzKCk7XG4gIGhpZGVBbGxUYWJzKCk7XG4gIGFsbFRhYnNbdGFyZ2V0SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi10YWInKTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaFRhYnMoKSB7XG4gIGFsbFRhYnMgPSBkb21FbGVtZW50cy5yZWZyZXNoTGlzdCgpO1xufVxuXG5mdW5jdGlvbiBoaWRlQWxsVGFicygpIHtcbiAgYWxsVGFicy5mb3JFYWNoKCh0YWIpID0+IHRhYi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tdGFiJykpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL21haW4uY3NzJztcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0UGFuZWwgfSBmcm9tICcuL3BvcG91dFByb2plY3QnO1xuaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlLmpzJztcblxuZG9tRWxlbWVudHMubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQcm9qZWN0UGFuZWwpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9