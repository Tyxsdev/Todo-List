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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    box-sizing: border-box;\n    --color-one: #edd5b4;\n    --color-two: #72716f;\n    --color-three: #471482;\n    --color-four: #d1cad9;\n    --color-five: #db4439;\n    --transition-one: all 0.3s ease-in-out;\n    --transition-two: all 0.1s ease-in-out;\n}\n\nbody {\n    background-color: var(--color-one);\n}\n\nheader {\n    display: grid;\n    place-content: center;\n    font-family: 'Tilt Neon', cursive;\n}\n\nmain {\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.project-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n    border-right: 2px solid black;\n}\n\n.header-project {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    transition: var(--transition-one);\n    border-bottom: 2px solid black;\n}\n\n.header-project:hover {\n    background-color: var(--color-two);\n}\n\n.header-project h3 {\n    grid-column: 2 / 4;\n    font-size: 1.4rem;\n}\n\n.material-symbols-outlined {\n    justify-self: end;\n    align-self: center;\n    transition: var(--transition-two);\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.material-symbols-outlined:hover {\n    scale: 1.3;\n    color: var(--color-three);\n}\n\n.new-project {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    gap: 1rem;\n    grid-auto-rows: 1fr;\n}\n\n.project {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid black;\n}\n\n.title {\n    grid-column: 2 / 4;\n    transition: all 0.2s ease-in-out;\n}\n\n.options {\n    justify-self: end;\n}\n\n.title:hover {\n    text-decoration: underline;\n    font-size: 1.5rem;\n}\n\n.test-project {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 30vh;\n    width: 600px;\n    background-color: var(--color-four);\n    padding: 1rem;\n    border-radius: 10px;\n    border: 2px solid var(--color-three);\n    display: none;\n}\n\n.edit-project {\n    width: 30rem;\n    height: 10rem;\n    position: absolute;\n    background-color: var(--color-four);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    border-radius: 10px;\n    border: 2px solid var(--color-three);\n}\n\n.test-project h2 {\n    display: inline;\n}\n\n.edit-project h2 {\n    align-self: center;\n    grid-row: 1 / 2;\n    margin: 0;\n}\n\n\n.close-one {\n    position: absolute;\n    right: 1rem;\n}\n\n.close-two {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.test-project form,\n.edit-project form {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    display: grid;\n    gap: 1rem;\n    font-family: 'Tilt Neon', cursive;\n}\n\nform label {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n}\n\nform input {\n    border-radius: 5px;\n    outline: none;\n    border: 2px solid var(--color-three);\n}\n\n#color {\n    border: 0;\n    padding: 0;\n}\n\nform button {\n    font-family: 'Tilt Neon', cursive;\n    font-size: 1rem;\n    width: fit-content;\n    padding: 0.3rem 1.5rem;\n    border-radius: 15px;\n    border: 2px solid var(--color-three);\n    background-color: black;\n    color: white;\n}\n\n.faded {\n    opacity: 20%;\n    pointer-events: none;\n}\n\n.error {\n    display: none;\n    margin-top: 0;\n    color: var(--color-five);\n}\n\n.hidden-tab {\n    display: none;\n}\n\n.list-container {\n    background-color: #db4439;\n    grid-column: 2 / 3;\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,oBAAoB;IACpB,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;IACrB,sCAAsC;IACtC,sCAAsC;AAC1C;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,iCAAiC;IACjC,8BAA8B;AAClC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,iCAAiC;IACjC;;;;;AAKJ;;AAEA;IACI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,kCAAkC;IAClC,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,OAAO;IACP,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,mCAAmC;IACnC,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,SAAS;AACb;;;AAGA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;IACpC,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB","sourcesContent":[":root {\n    box-sizing: border-box;\n    --color-one: #edd5b4;\n    --color-two: #72716f;\n    --color-three: #471482;\n    --color-four: #d1cad9;\n    --color-five: #db4439;\n    --transition-one: all 0.3s ease-in-out;\n    --transition-two: all 0.1s ease-in-out;\n}\n\nbody {\n    background-color: var(--color-one);\n}\n\nheader {\n    display: grid;\n    place-content: center;\n    font-family: 'Tilt Neon', cursive;\n}\n\nmain {\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.project-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n    border-right: 2px solid black;\n}\n\n.header-project {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    transition: var(--transition-one);\n    border-bottom: 2px solid black;\n}\n\n.header-project:hover {\n    background-color: var(--color-two);\n}\n\n.header-project h3 {\n    grid-column: 2 / 4;\n    font-size: 1.4rem;\n}\n\n.material-symbols-outlined {\n    justify-self: end;\n    align-self: center;\n    transition: var(--transition-two);\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.material-symbols-outlined:hover {\n    scale: 1.3;\n    color: var(--color-three);\n}\n\n.new-project {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    gap: 1rem;\n    grid-auto-rows: 1fr;\n}\n\n.project {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid black;\n}\n\n.title {\n    grid-column: 2 / 4;\n    transition: all 0.2s ease-in-out;\n}\n\n.options {\n    justify-self: end;\n}\n\n.title:hover {\n    text-decoration: underline;\n    font-size: 1.5rem;\n}\n\n.test-project {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 30vh;\n    width: 600px;\n    background-color: var(--color-four);\n    padding: 1rem;\n    border-radius: 10px;\n    border: 2px solid var(--color-three);\n    display: none;\n}\n\n.edit-project {\n    width: 30rem;\n    height: 10rem;\n    position: absolute;\n    background-color: var(--color-four);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    border-radius: 10px;\n    border: 2px solid var(--color-three);\n}\n\n.test-project h2 {\n    display: inline;\n}\n\n.edit-project h2 {\n    align-self: center;\n    grid-row: 1 / 2;\n    margin: 0;\n}\n\n\n.close-one {\n    position: absolute;\n    right: 1rem;\n}\n\n.close-two {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.test-project form,\n.edit-project form {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    display: grid;\n    gap: 1rem;\n    font-family: 'Tilt Neon', cursive;\n}\n\nform label {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n}\n\nform input {\n    border-radius: 5px;\n    outline: none;\n    border: 2px solid var(--color-three);\n}\n\n#color {\n    border: 0;\n    padding: 0;\n}\n\nform button {\n    font-family: 'Tilt Neon', cursive;\n    font-size: 1rem;\n    width: fit-content;\n    padding: 0.3rem 1.5rem;\n    border-radius: 15px;\n    border: 2px solid var(--color-three);\n    background-color: black;\n    color: white;\n}\n\n.faded {\n    opacity: 20%;\n    pointer-events: none;\n}\n\n.error {\n    display: none;\n    margin-top: 0;\n    color: var(--color-five);\n}\n\n.hidden-tab {\n    display: none;\n}\n\n.list-container {\n    background-color: #db4439;\n    grid-column: 2 / 3;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "displayProjectPanel": () => (/* binding */ displayProjectPanel)
/* harmony export */ });
/* harmony import */ var _domCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCache.js */ "./src/domCache.js");
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.js */ "./src/tabs.js");
/* harmony import */ var _generalEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generalEvents.js */ "./src/generalEvents.js");




const links = [];
links.push(_domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.general);

_domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.createProject.addEventListener('click', getValues);
(0,_generalEvents_js__WEBPACK_IMPORTED_MODULE_2__.addCloseEvent)(_domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.closeNewProject);

function handdleLinks(div) {
  links.push(div);
  for (let i = 0; i < links.length; i += 1) {
    links[i].dataset.index = `${i}`;
  }
}

function getValues(e) {
  e.preventDefault();
  addProject(_domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.name.value, _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.color.value);
  _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.name.value = '';
  _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.color.value = '';
}

function addProject(name, color) {
  if (name === '') {
    _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.errorMessage.style.display = 'block';
    return;
  }
  const div = _domCache_js__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeDiv();
  const a = _domCache_js__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeA();
  const svg = _domCache_js__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeOptionsSVG();
  a.textContent = name;
  a.style.color = color;
  a.classList.add('title');
  div.classList.add('project');
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



function displayOptions(e) {
  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.toggleFaded)();
  const div = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeDiv();
  const closeSVG = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeCloseSVG();
  const name = e.currentTarget.previousElementSibling.textContent;
  editDiv(div, closeSVG, name);
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.hiddenContainer.appendChild(div);
}

function editDiv(div, closeSVG, name) {
  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.addCloseEvent)(closeSVG);
  const h2 = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeH2();
  h2.textContent = name;
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
      div.textContent = `${i}`;
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
  console.log(links);
  for (let i = 0; i < links.length; i += 1) {
    links[i].addEventListener('click', selectListToDisplay);
  }
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
/* harmony import */ var _projectOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectOptions */ "./src/projectOptions.js");





_domCache_js__WEBPACK_IMPORTED_MODULE_2__.domElements.newProjectButton.addEventListener('click', _popoutProject__WEBPACK_IMPORTED_MODULE_1__.displayProjectPanel);
_domCache_js__WEBPACK_IMPORTED_MODULE_2__.domElements.proOptions.addEventListener('click', _projectOptions__WEBPACK_IMPORTED_MODULE_3__.displayOptions);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDa0M7QUFDVjtBQUNNOztBQUVsRCx1RkFBNkMsVUFBVSwrREFBbUI7QUFDMUUsaUZBQXVDLFVBQVUsMkRBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21DYWNoZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ2VuZXJhbEV2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcG9wb3V0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtLWNvbG9yLW9uZTogI2VkZDViNDtcXG4gICAgLS1jb2xvci10d286ICM3MjcxNmY7XFxuICAgIC0tY29sb3ItdGhyZWU6ICM0NzE0ODI7XFxuICAgIC0tY29sb3ItZm91cjogI2QxY2FkOTtcXG4gICAgLS1jb2xvci1maXZlOiAjZGI0NDM5O1xcbiAgICAtLXRyYW5zaXRpb24tb25lOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgLS10cmFuc2l0aW9uLXR3bzogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oZWFkZXItcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tb25lKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10d28pO1xcbn1cXG5cXG4uaGVhZGVyLXByb2plY3QgaDMge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdHdvKTtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICAgICAnRklMTCcgMCxcXG4gICAgICAgICd3Z2h0JyA0MDAsXFxuICAgICAgICAnR1JBRCcgMCxcXG4gICAgICAgICdvcHN6JyA0OFxcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjM7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udGl0bGU6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZXN0LXByb2plY3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMzB2aDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IGgyIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0IGgyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuLmNsb3NlLW9uZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi5jbG9zZS10d28ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCBmb3JtLFxcbi5lZGl0LXByb2plY3QgZm9ybSB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG59XFxuXFxuZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuI2NvbG9yIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZhZGVkIHtcXG4gICAgb3BhY2l0eTogMjAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZpdmUpO1xcbn1cXG5cXG4uaGlkZGVuLXRhYiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjQ0Mzk7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsc0NBQXNDO0lBQ3RDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsU0FBUztJQUNULDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsaUNBQWlDO0lBQ2pDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQzs7Ozs7QUFLSjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tY29sb3Itb25lOiAjZWRkNWI0O1xcbiAgICAtLWNvbG9yLXR3bzogIzcyNzE2ZjtcXG4gICAgLS1jb2xvci10aHJlZTogIzQ3MTQ4MjtcXG4gICAgLS1jb2xvci1mb3VyOiAjZDFjYWQ5O1xcbiAgICAtLWNvbG9yLWZpdmU6ICNkYjQ0Mzk7XFxuICAgIC0tdHJhbnNpdGlvbi1vbmU6IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAtLXRyYW5zaXRpb24tdHdvOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1vbmUpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oZWFkZXItcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXR3byk7XFxufVxcblxcbi5oZWFkZXItcHJvamVjdCBoMyB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10d28pO1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICAgICdGSUxMJyAwLFxcbiAgICAgICAgJ3dnaHQnIDQwMCxcXG4gICAgICAgICdHUkFEJyAwLFxcbiAgICAgICAgJ29wc3onIDQ4XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMztcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi50aXRsZTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAzMHZoO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbi50ZXN0LXByb2plY3QgaDIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5lZGl0LXByb2plY3QgaDIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4uY2xvc2Utb25lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLmNsb3NlLXR3byB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IGZvcm0sXFxuLmVkaXQtcHJvamVjdCBmb3JtIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG5mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG5cXG4jY29sb3Ige1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMC4zcmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZmFkZWQge1xcbiAgICBvcGFjaXR5OiAyMCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZml2ZSk7XFxufVxcblxcbi5oaWRkZW4tdGFiIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiNDQzOTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gZG9tQ2FjaGUoKSB7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnN0IGhpZGRlbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW4tY29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IGhpZGRlblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdC1wcm9qZWN0Jyk7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cycpO1xuICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKTtcbiAgY29uc3QgY2xvc2VOZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW9uZScpO1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbiAgY29uc3QgZ2VuZXJhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5lcmFsJyk7XG4gIGNvbnN0IHByb09wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvLW9wdGlvbnMtYnV0dG9uJyk7XG4gIGZ1bmN0aW9uIHJlZnJlc2hMaXN0KCkge1xuICAgIGNvbnN0IGxpc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IFsuLi5saXN0Tm9kZV07XG4gICAgcmV0dXJuIGxpc3RDb250YWluZXI7XG4gIH1cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbG9yJyk7XG4gIHJldHVybiB7XG4gICAgaGlkZGVuUHJvamVjdCxcbiAgICBoaWRkZW5Db250YWluZXIsXG4gICAgbmV3UHJvamVjdEJ1dHRvbixcbiAgICBtYWluQ29udGFpbmVyLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgY2xvc2VOZXdQcm9qZWN0LFxuICAgIHByb2plY3RzQ29udGFpbmVyLFxuICAgIG5ld1Byb2plY3RDb250YWluZXIsXG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIGdlbmVyYWwsXG4gICAgcmVmcmVzaExpc3QsXG4gICAgbmFtZSxcbiAgICBjb2xvcixcbiAgICBwcm9PcHRpb25zLFxuICB9O1xufVxuXG5jb25zdCBkb21FbGVtZW50cyA9IGRvbUNhY2hlKCk7XG5cbmNvbnN0IENyZWF0ZURvbSA9IHtcbiAgbWFrZURpdigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXR1cm4gZGl2O1xuICB9LFxuICBtYWtlQSgpIHtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHJldHVybiBhO1xuICB9LFxuICBtYWtlSDIoKSB7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHJldHVybiBoMjtcbiAgfSxcbiAgbWFrZU9wdGlvbnNTVkcoKSB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHN2Zy5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcbiAgICBzdmcudGV4dENvbnRlbnQgPSAnbW9yZV92ZXJ0JztcbiAgICByZXR1cm4gc3ZnO1xuICB9LFxuICBtYWtlQ2xvc2VTVkcoKSB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHN2Zy5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXR3bycpO1xuICAgIHN2Zy50ZXh0Q29udGVudCA9ICdjbG9zZSc7XG4gICAgcmV0dXJuIHN2ZztcbiAgfSxcbiAgbWFrZUJ1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9LFxuICBtYWtlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBjb2xvckxhYmVsID0gbmFtZUxhYmVsLmNsb25lTm9kZSgpO1xuICAgIGNvbnN0IGNvbG9ySW5wdXQgPSBuYW1lSW5wdXQuY2xvbmVOb2RlKCk7XG4gICAgY29uc3QgZG9uZSA9IHRoaXMubWFrZUJ1dHRvbigpO1xuICAgIGNvbnN0IGZpcnN0RGl2ID0gdGhpcy5tYWtlRGl2KCk7XG4gICAgY29uc3Qgc2Vjb25kRGl2ID0gdGhpcy5tYWtlRGl2KCk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gICAgY29sb3JMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjb2xvcicpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgY29sb3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY29sb3InKTtcbiAgICBjb2xvcklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjb2xvcicpO1xuICAgIGNvbG9ySW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjb2xvcicpO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgbmFtZSc7XG4gICAgY29sb3JMYWJlbC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgY29sb3InO1xuICAgIGRvbmUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGRvbmUudGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgZmlyc3REaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBmaXJzdERpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChjb2xvckxhYmVsKTtcbiAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoY29sb3JJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaXJzdERpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZWNvbmREaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9uZSk7XG4gICAgcmV0dXJuIGZvcm07XG4gIH0sXG59O1xuXG5leHBvcnQgeyBkb21FbGVtZW50cywgQ3JlYXRlRG9tIH07XG4iLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tQ2FjaGUnO1xuXG5mdW5jdGlvbiBhZGRDbG9zZUV2ZW50KGVsZW0pIHtcbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbn1cblxuZnVuY3Rpb24gY2xvc2UoZSkge1xuICB0b2dnbGVGYWRlZCgpO1xuICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGYWRlZCgpIHtcbiAgZG9tRWxlbWVudHMubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdmYWRlZCcpO1xufVxuXG5leHBvcnQgeyB0b2dnbGVGYWRlZCwgYWRkQ2xvc2VFdmVudCwgY2xvc2UgfTtcbiIsImltcG9ydCB7IGRvbUVsZW1lbnRzLCBDcmVhdGVEb20gfSBmcm9tICcuL2RvbUNhY2hlLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlTmV3VGFiIH0gZnJvbSAnLi90YWJzLmpzJztcbmltcG9ydCB7IGFkZENsb3NlRXZlbnQsIHRvZ2dsZUZhZGVkIH0gZnJvbSAnLi9nZW5lcmFsRXZlbnRzLmpzJztcblxuY29uc3QgbGlua3MgPSBbXTtcbmxpbmtzLnB1c2goZG9tRWxlbWVudHMuZ2VuZXJhbCk7XG5cbmRvbUVsZW1lbnRzLmNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRWYWx1ZXMpO1xuYWRkQ2xvc2VFdmVudChkb21FbGVtZW50cy5jbG9zZU5ld1Byb2plY3QpO1xuXG5mdW5jdGlvbiBoYW5kZGxlTGlua3MoZGl2KSB7XG4gIGxpbmtzLnB1c2goZGl2KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxpbmtzW2ldLmRhdGFzZXQuaW5kZXggPSBgJHtpfWA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVzKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBhZGRQcm9qZWN0KGRvbUVsZW1lbnRzLm5hbWUudmFsdWUsIGRvbUVsZW1lbnRzLmNvbG9yLnZhbHVlKTtcbiAgZG9tRWxlbWVudHMubmFtZS52YWx1ZSA9ICcnO1xuICBkb21FbGVtZW50cy5jb2xvci52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUsIGNvbG9yKSB7XG4gIGlmIChuYW1lID09PSAnJykge1xuICAgIGRvbUVsZW1lbnRzLmVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgY29uc3QgYSA9IENyZWF0ZURvbS5tYWtlQSgpO1xuICBjb25zdCBzdmcgPSBDcmVhdGVEb20ubWFrZU9wdGlvbnNTVkcoKTtcbiAgYS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGEuc3R5bGUuY29sb3IgPSBjb2xvcjtcbiAgYS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoYSk7XG4gIGRpdi5hcHBlbmRDaGlsZChzdmcpO1xuICBkb21FbGVtZW50cy5uZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIGhhbmRkbGVMaW5rcyhkaXYpO1xuICBnZW5lcmF0ZU5ld1RhYihsaW5rcyk7XG4gIGRlZmF1bHREaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHREaXNwbGF5KCkge1xuICBkb21FbGVtZW50cy5lcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9tRWxlbWVudHMuaGlkZGVuUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0b2dnbGVGYWRlZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RQYW5lbCgpIHtcbiAgZG9tRWxlbWVudHMuaGlkZGVuUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgdG9nZ2xlRmFkZWQoKTtcbn1cbiIsImltcG9ydCB7IENyZWF0ZURvbSwgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlJztcbmltcG9ydCB7IGFkZENsb3NlRXZlbnQsIHRvZ2dsZUZhZGVkIH0gZnJvbSAnLi9nZW5lcmFsRXZlbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlPcHRpb25zKGUpIHtcbiAgdG9nZ2xlRmFkZWQoKTtcbiAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgY29uc3QgY2xvc2VTVkcgPSBDcmVhdGVEb20ubWFrZUNsb3NlU1ZHKCk7XG4gIGNvbnN0IG5hbWUgPSBlLmN1cnJlbnRUYXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgZWRpdERpdihkaXYsIGNsb3NlU1ZHLCBuYW1lKTtcbiAgZG9tRWxlbWVudHMuaGlkZGVuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG59XG5cbmZ1bmN0aW9uIGVkaXREaXYoZGl2LCBjbG9zZVNWRywgbmFtZSkge1xuICBhZGRDbG9zZUV2ZW50KGNsb3NlU1ZHKTtcbiAgY29uc3QgaDIgPSBDcmVhdGVEb20ubWFrZUgyKCk7XG4gIGgyLnRleHRDb250ZW50ID0gbmFtZTtcbiAgY29uc3QgbmV3Rm9ybSA9IENyZWF0ZURvbS5tYWtlRm9ybSgpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0Jyk7XG4gIGRpdi5hcHBlbmRDaGlsZChoMik7XG4gIGRpdi5hcHBlbmRDaGlsZChjbG9zZVNWRyk7XG4gIGRpdi5hcHBlbmRDaGlsZChuZXdGb3JtKTtcbn1cbiIsImltcG9ydCB7IENyZWF0ZURvbSwgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlJztcblxubGV0IGFsbFRhYnM7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU5ld1RhYihsaW5rcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGxpbmtzW2ldICYmIGxpbmtzLmxlbmd0aCA9PT0gaSArIDEpIHtcbiAgICAgIGNvbnN0IGRpdiA9IENyZWF0ZURvbS5tYWtlRGl2KCk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbGlzdC1jb250YWluZXInKTtcbiAgICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2l9YDtcbiAgICAgIGRvbUVsZW1lbnRzLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gIH1cbiAgZGlzcGxheUxhc3RUYWIoKTtcbiAgc2V0RXZlbnQobGlua3MpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TGFzdFRhYigpIHtcbiAgcmVmcmVzaFRhYnMoKTtcbiAgaGlkZUFsbFRhYnMoKTtcbiAgYWxsVGFic1thbGxUYWJzLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi10YWInKTtcbn1cblxuZnVuY3Rpb24gc2V0RXZlbnQobGlua3MpIHtcbiAgY29uc29sZS5sb2cobGlua3MpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RMaXN0VG9EaXNwbGF5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3RMaXN0VG9EaXNwbGF5KGUpIHtcbiAgY29uc3QgdGFyZ2V0SW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgcmVmcmVzaFRhYnMoKTtcbiAgaGlkZUFsbFRhYnMoKTtcbiAgYWxsVGFic1t0YXJnZXRJbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLXRhYicpO1xufVxuXG5mdW5jdGlvbiByZWZyZXNoVGFicygpIHtcbiAgYWxsVGFicyA9IGRvbUVsZW1lbnRzLnJlZnJlc2hMaXN0KCk7XG59XG5cbmZ1bmN0aW9uIGhpZGVBbGxUYWJzKCkge1xuICBhbGxUYWJzLmZvckVhY2goKHRhYikgPT4gdGFiLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi10YWInKSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vbWFpbi5jc3MnO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RQYW5lbCB9IGZyb20gJy4vcG9wb3V0UHJvamVjdCc7XG5pbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tQ2FjaGUuanMnO1xuaW1wb3J0IHsgZGlzcGxheU9wdGlvbnMgfSBmcm9tICcuL3Byb2plY3RPcHRpb25zJztcblxuZG9tRWxlbWVudHMubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQcm9qZWN0UGFuZWwpO1xuZG9tRWxlbWVudHMucHJvT3B0aW9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlPcHRpb25zKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==