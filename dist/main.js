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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    box-sizing: border-box;\n    --color-one: #e3ddcb;\n    --color-two: #72716f;\n    --color-three: #793c89;\n    --color-four: #933434;\n    --color-five: #19567a;\n    --color-six: #3b8a93;\n    --color-seven: #cbb8cf;\n    --transition-one: all 0.3s ease-in-out;\n    --transition-two: all 0.1s ease-in-out;\n    height: 100%;\n}\n\nbody {\n    background-color: var(--color-one);\n    height: 100%;\n}\n\nheader {\n    background-color: var(--color-four);\n    display: grid;\n    place-content: center;\n    font-family: 'Tilt Neon', cursive;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 5px black;\n}\n\nmain {\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n}\n\n.container {\n    margin-top: 1rem;\n    height: 98%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    border-top: 2px solid black;\n    border-left: 2px solid black;\n    ;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 5px black;\n}\n\n.project-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n    border-right: 1px solid black;\n    border-radius: 1rem;\n\n}\n\n.header-project {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    transition: var(--transition-one);\n    border-bottom: 2px solid black;\n    border-radius: 1rem;\n}\n\n.header-project:hover {\n    background-color: var(--color-three);\n\n}\n\n.header-project h3 {\n    grid-column: 2 / 4;\n    font-size: 1.4rem;\n}\n\n.material-symbols-outlined {\n    justify-self: end;\n    align-self: center;\n    transition: var(--transition-two);\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.material-symbols-outlined:hover {\n    scale: 1.5;\n    color: var(--color-five);\n    cursor: grab;\n}\n\n.new-project {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    gap: 1rem;\n    grid-auto-rows: 1fr;\n}\n\n.project {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid black;\n}\n\n.title {\n    grid-column: 2 / 4;\n    transition: all 0.2s ease-in-out;\n    cursor: grab;\n}\n\n.options {\n    justify-self: end;\n}\n\n.title:hover {\n    text-decoration: underline;\n    font-size: 1.5rem;\n}\n\n.test-project {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 30vh;\n    width: 600px;\n    background-color: var(--color-seven);\n    padding: 1rem;\n    border-radius: 10px;\n    border: 5px solid var(--color-three);\n    display: none;\n}\n\n.edit-project {\n    width: 30rem;\n    height: 10rem;\n    position: absolute;\n    top: 30%;\n    left: 10%;\n    background-color: var(--color-seven);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n    border-radius: 10px;\n    border: 5px solid var(--color-three);\n}\n\n.test-project h2 {\n    display: inline;\n}\n\n.edit-project h2 {\n    align-self: center;\n    grid-row: 1 / 2;\n    margin: 0;\n}\n\n\n.close-one {\n    position: absolute;\n    right: 1rem;\n}\n\n.close-two {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.test-project form,\n.edit-project form {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    font-family: 'Tilt Neon', cursive;\n}\n\nform label {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n    cursor: pointer;\n}\n\nform input {\n    border-radius: 5px;\n    outline: none;\n    border: 2px solid var(--color-three);\n}\n\n#color {\n    border: 0;\n    padding: 0;\n}\n\n#color:hover {\n    cursor: pointer;\n}\n\nbutton {\n    font-family: 'Tilt Neon', cursive;\n    font-size: 1rem;\n    width: fit-content;\n    padding: 0.3rem 1.5rem;\n    border-radius: 15px;\n    border: 2px solid var(--color-three);\n    background-color: black;\n    color: white;\n}\n\nbutton:hover {\n    border: 2px solid var(--color-six);\n    color: var(--color-six);\n    cursor: pointer;\n}\n\n.faded {\n    opacity: 20%;\n    pointer-events: none;\n}\n\n.error {\n    display: none;\n    margin-top: 0;\n    color: var(--color-five);\n}\n\n.hidden-tab {\n    display: none;\n}\n\n.form-first {\n    grid-row: 1 / 2;\n}\n\n.form-second {\n    grid-row: 2 / 3;\n}\n\n.delete,\n.done {\n    grid-row: 3 / 4;\n}\n\n.list-container {\n    background-color: var(--color-six);\n    grid-column: 2 / 3;\n    padding: 2rem;\n    border-radius: 1rem;\n    border-left: 1px solid black;\n}\n\n.list-header {\n    display: flex;\n}\n\n.list-header h2 {\n    flex: 1;\n    margin-top: 0;\n    font-family: 'Tilt Neon', cursive;\n}\n\n.list-container p {\n    font-size: 1.5rem;\n    font-weight: 600;\n    font-family: 'Tilt Neon', cursive;\n}\n\n.todo {\n    border: 2px solid black;\n    border-radius: 1rem;\n    padding: 1rem;\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n\n.todo label {\n    font-size: 1.3rem;\n}\n\n.todo input {\n    width: 1.5rem;\n    height: 1.5rem;\n    margin-right: 1.5rem;\n}\n\n.open {\n    flex: 1;\n}\n\n.open:hover {\n    color: var(--color-three);\n    text-decoration: underline;\n}\n\n.todo-options {\n    justify-self: flex-end;\n}\n\n.todo-options:hover {\n    color: var(--color-four);\n}\n\n.todo-description {\n    width: 100%;\n    height: 15rem;\n    background-color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 110%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    gap: 0.3rem;\n    border-radius: 5px;\n    justify-items: center;\n    padding: 0.3rem 0;\n}\n\n.todo-description h5 {\n    margin: 0.3rem;\n    font-size: 1.2rem;\n}\n\n.todo-description p {\n    font-size: 1rem;\n    width: 45ch;\n    font-weight: 400;\n    border: 1px solid black;\n    border-radius: 5px;\n    margin: 0;\n    grid-column: 1 / 2;\n}\n\n.hidden {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    box-sizing: border-box;\n    --color-one: #e3ddcb;\n    --color-two: #72716f;\n    --color-three: #793c89;\n    --color-four: #933434;\n    --color-five: #19567a;\n    --color-six: #3b8a93;\n    --color-seven: #cbb8cf;\n    --transition-one: all 0.3s ease-in-out;\n    --transition-two: all 0.1s ease-in-out;\n    height: 100%;\n}\n\nbody {\n    background-color: var(--color-one);\n    height: 100%;\n}\n\nheader {\n    background-color: var(--color-four);\n    display: grid;\n    place-content: center;\n    font-family: 'Tilt Neon', cursive;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 5px black;\n}\n\nmain {\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n}\n\n.container {\n    margin-top: 1rem;\n    height: 98%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    border-top: 2px solid black;\n    border-left: 2px solid black;\n    ;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 5px black;\n}\n\n.project-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n    border-right: 1px solid black;\n    border-radius: 1rem;\n\n}\n\n.header-project {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    transition: var(--transition-one);\n    border-bottom: 2px solid black;\n    border-radius: 1rem;\n}\n\n.header-project:hover {\n    background-color: var(--color-three);\n\n}\n\n.header-project h3 {\n    grid-column: 2 / 4;\n    font-size: 1.4rem;\n}\n\n.material-symbols-outlined {\n    justify-self: end;\n    align-self: center;\n    transition: var(--transition-two);\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.material-symbols-outlined:hover {\n    scale: 1.5;\n    color: var(--color-five);\n    cursor: grab;\n}\n\n.new-project {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    gap: 1rem;\n    grid-auto-rows: 1fr;\n}\n\n.project {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid black;\n}\n\n.title {\n    grid-column: 2 / 4;\n    transition: all 0.2s ease-in-out;\n    cursor: grab;\n}\n\n.options {\n    justify-self: end;\n}\n\n.title:hover {\n    text-decoration: underline;\n    font-size: 1.5rem;\n}\n\n.test-project {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 30vh;\n    width: 600px;\n    background-color: var(--color-seven);\n    padding: 1rem;\n    border-radius: 10px;\n    border: 5px solid var(--color-three);\n    display: none;\n}\n\n.edit-project {\n    width: 30rem;\n    height: 10rem;\n    position: absolute;\n    top: 30%;\n    left: 10%;\n    background-color: var(--color-seven);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n    border-radius: 10px;\n    border: 5px solid var(--color-three);\n}\n\n.test-project h2 {\n    display: inline;\n}\n\n.edit-project h2 {\n    align-self: center;\n    grid-row: 1 / 2;\n    margin: 0;\n}\n\n\n.close-one {\n    position: absolute;\n    right: 1rem;\n}\n\n.close-two {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.test-project form,\n.edit-project form {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    font-family: 'Tilt Neon', cursive;\n}\n\nform label {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n    cursor: pointer;\n}\n\nform input {\n    border-radius: 5px;\n    outline: none;\n    border: 2px solid var(--color-three);\n}\n\n#color {\n    border: 0;\n    padding: 0;\n}\n\n#color:hover {\n    cursor: pointer;\n}\n\nbutton {\n    font-family: 'Tilt Neon', cursive;\n    font-size: 1rem;\n    width: fit-content;\n    padding: 0.3rem 1.5rem;\n    border-radius: 15px;\n    border: 2px solid var(--color-three);\n    background-color: black;\n    color: white;\n}\n\nbutton:hover {\n    border: 2px solid var(--color-six);\n    color: var(--color-six);\n    cursor: pointer;\n}\n\n.faded {\n    opacity: 20%;\n    pointer-events: none;\n}\n\n.error {\n    display: none;\n    margin-top: 0;\n    color: var(--color-five);\n}\n\n.hidden-tab {\n    display: none;\n}\n\n.form-first {\n    grid-row: 1 / 2;\n}\n\n.form-second {\n    grid-row: 2 / 3;\n}\n\n.delete,\n.done {\n    grid-row: 3 / 4;\n}\n\n.list-container {\n    background-color: var(--color-six);\n    grid-column: 2 / 3;\n    padding: 2rem;\n    border-radius: 1rem;\n    border-left: 1px solid black;\n}\n\n.list-header {\n    display: flex;\n}\n\n.list-header h2 {\n    flex: 1;\n    margin-top: 0;\n    font-family: 'Tilt Neon', cursive;\n}\n\n.list-container p {\n    font-size: 1.5rem;\n    font-weight: 600;\n    font-family: 'Tilt Neon', cursive;\n}\n\n.todo {\n    border: 2px solid black;\n    border-radius: 1rem;\n    padding: 1rem;\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n\n.todo label {\n    font-size: 1.3rem;\n}\n\n.todo input {\n    width: 1.5rem;\n    height: 1.5rem;\n    margin-right: 1.5rem;\n}\n\n.open {\n    flex: 1;\n}\n\n.open:hover {\n    color: var(--color-three);\n    text-decoration: underline;\n}\n\n.todo-options {\n    justify-self: flex-end;\n}\n\n.todo-options:hover {\n    color: var(--color-four);\n}\n\n.todo-description {\n    width: 100%;\n    height: 15rem;\n    background-color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 110%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    gap: 0.3rem;\n    border-radius: 5px;\n    justify-items: center;\n    padding: 0.3rem 0;\n}\n\n.todo-description h5 {\n    margin: 0.3rem;\n    font-size: 1.2rem;\n}\n\n.todo-description p {\n    font-size: 1rem;\n    width: 45ch;\n    font-weight: 400;\n    border: 1px solid black;\n    border-radius: 5px;\n    margin: 0;\n    grid-column: 1 / 2;\n}\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
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

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "work": () => (/* binding */ work)
/* harmony export */ });
/* harmony import */ var _domCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCache */ "./src/domCache.js");


function work(e) {
  console.log(e);
}




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
  const addTask = document.querySelector('.task');
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
    addTask,
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
    button.textContent = 'Delete';
    return button;
  },
  makeNewTaskButton() {
    const button = document.createElement('button');
    button.textContent = 'New Task';
    button.classList.add('task');
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
  (0,_tabs_js__WEBPACK_IMPORTED_MODULE_1__.generateNewTab)(links, projectCreated);
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
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");



let allTabs;
refreshTabs();

function generateNewTab(links, project) {
  for (let i = 0; i < links.length; i += 1) {
    if (links[i] && links.length === i + 1) {
      const div = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeDiv();
      const header = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeDiv();
      const h2 = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeH2();
      const addTask = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeNewTaskButton();
      div.classList.add('list-container');
      div.dataset.index = i;
      header.classList.add('list-header');
      h2.textContent = project.name;
      addTask.addEventListener('click', _addTask__WEBPACK_IMPORTED_MODULE_1__.work);
      header.appendChild(h2);
      header.appendChild(addTask);
      div.appendChild(header);
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
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");





_domCache_js__WEBPACK_IMPORTED_MODULE_2__.domElements.newProjectButton.addEventListener('click', _popoutProject__WEBPACK_IMPORTED_MODULE_1__.displayProjectPanel);
_domCache_js__WEBPACK_IMPORTED_MODULE_2__.domElements.addTask.addEventListener('click', _addTask__WEBPACK_IMPORTED_MODULE_3__.work);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksOERBQXVCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRW1EOzs7Ozs7O1VDcEVuRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ2tDO0FBQ1Y7QUFDWDs7QUFFakMsdUZBQTZDLFVBQVUsK0RBQW1CO0FBQzFFLDhFQUFvQyxVQUFVLDBDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dlbmVyYWxFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BvcG91dFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RPcHRpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1jb2xvci1vbmU6ICNlM2RkY2I7XFxuICAgIC0tY29sb3ItdHdvOiAjNzI3MTZmO1xcbiAgICAtLWNvbG9yLXRocmVlOiAjNzkzYzg5O1xcbiAgICAtLWNvbG9yLWZvdXI6ICM5MzM0MzQ7XFxuICAgIC0tY29sb3ItZml2ZTogIzE5NTY3YTtcXG4gICAgLS1jb2xvci1zaXg6ICMzYjhhOTM7XFxuICAgIC0tY29sb3Itc2V2ZW46ICNjYmI4Y2Y7XFxuICAgIC0tdHJhbnNpdGlvbi1vbmU6IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAtLXRyYW5zaXRpb24tdHdvOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDk4JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxuICAgIDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG5cXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1vbmUpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5oZWFkZXItcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG5cXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0IGgzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXR3byk7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAgICAgJ0ZJTEwnIDAsXFxuICAgICAgICAnd2dodCcgNDAwLFxcbiAgICAgICAgJ0dSQUQnIDAsXFxuICAgICAgICAnb3BzeicgNDhcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIge1xcbiAgICBzY2FsZTogMS41O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZml2ZSk7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRpdGxlOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDMwdmg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2V2ZW4pO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2V2ZW4pO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCBoMiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdCBoMiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcbi5jbG9zZS1vbmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uY2xvc2UtdHdvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi50ZXN0LXByb2plY3QgZm9ybSxcXG4uZWRpdC1wcm9qZWN0IGZvcm0ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG5mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbiNjb2xvciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbG9yOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNpeCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zaXgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYWRlZCB7XFxuICAgIG9wYWNpdHk6IDIwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1maXZlKTtcXG59XFxuXFxuLmhpZGRlbi10YWIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS1maXJzdCB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmZvcm0tc2Vjb25kIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uZGVsZXRlLFxcbi5kb25lIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaXgpO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5saXN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saXN0LWhlYWRlciBoMiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50b2RvIGlucHV0IHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG5cXG4ub3BlbiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5vcGVuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50b2RvLW9wdGlvbnMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG9kby1vcHRpb25zOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMTEwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBnYXA6IDAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiBoNSB7XFxuICAgIG1hcmdpbjogMC4zcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDQ1Y2g7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlD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QUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tY29sb3Itb25lOiAjZTNkZGNiO1xcbiAgICAtLWNvbG9yLXR3bzogIzcyNzE2ZjtcXG4gICAgLS1jb2xvci10aHJlZTogIzc5M2M4OTtcXG4gICAgLS1jb2xvci1mb3VyOiAjOTMzNDM0O1xcbiAgICAtLWNvbG9yLWZpdmU6ICMxOTU2N2E7XFxuICAgIC0tY29sb3Itc2l4OiAjM2I4YTkzO1xcbiAgICAtLWNvbG9yLXNldmVuOiAjY2JiOGNmO1xcbiAgICAtLXRyYW5zaXRpb24tb25lOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgLS10cmFuc2l0aW9uLXR3bzogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBibGFjaztcXG59XFxuXFxubWFpbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgaGVpZ2h0OiA5OCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFxufVxcblxcbi5oZWFkZXItcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tb25lKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaGVhZGVyLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuXFxufVxcblxcbi5oZWFkZXItcHJvamVjdCBoMyB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10d28pO1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICAgICdGSUxMJyAwLFxcbiAgICAgICAgJ3dnaHQnIDQwMCxcXG4gICAgICAgICdHUkFEJyAwLFxcbiAgICAgICAgJ29wc3onIDQ4XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuNTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZpdmUpO1xcbiAgICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi50aXRsZTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAzMHZoO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNldmVuKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNldmVuKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbi50ZXN0LXByb2plY3QgaDIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5lZGl0LXByb2plY3QgaDIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4uY2xvc2Utb25lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLmNsb3NlLXR3byB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IGZvcm0sXFxuLmVkaXQtcHJvamVjdCBmb3JtIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG59XFxuXFxuZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG5cXG4jY29sb3Ige1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb2xvcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMC4zcmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zaXgpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2l4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmFkZWQge1xcbiAgICBvcGFjaXR5OiAyMCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZml2ZSk7XFxufVxcblxcbi5oaWRkZW4tdGFiIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tZmlyc3Qge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5mb3JtLXNlY29uZCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmRlbGV0ZSxcXG4uZG9uZSB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2l4KTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubGlzdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubGlzdC1oZWFkZXIgaDIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kbyBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLm9wZW4ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ub3Blbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udG9kby1vcHRpb25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRvZG8tb3B0aW9uczpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDExMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ2FwOiAwLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24gaDUge1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiA0NWNoO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBDcmVhdGVEb20sIGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9kb21DYWNoZSc7XG5cbmZ1bmN0aW9uIHdvcmsoZSkge1xuICBjb25zb2xlLmxvZyhlKTtcbn1cblxuZXhwb3J0IHsgd29yayB9O1xuIiwiZnVuY3Rpb24gZG9tQ2FjaGUoKSB7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnN0IGhpZGRlbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW4tY29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IGhpZGRlblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdC1wcm9qZWN0Jyk7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cycpO1xuICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKTtcbiAgY29uc3QgY2xvc2VOZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW9uZScpO1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbiAgY29uc3QgZ2VuZXJhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5lcmFsJyk7XG4gIGNvbnN0IHByb09wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvLW9wdGlvbnMtYnV0dG9uJyk7XG4gIGZ1bmN0aW9uIHJlZnJlc2hMaXN0KCkge1xuICAgIGNvbnN0IGxpc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IFsuLi5saXN0Tm9kZV07XG4gICAgcmV0dXJuIGxpc3RDb250YWluZXI7XG4gIH1cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbG9yJyk7XG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpO1xuICByZXR1cm4ge1xuICAgIGhpZGRlblByb2plY3QsXG4gICAgaGlkZGVuQ29udGFpbmVyLFxuICAgIG5ld1Byb2plY3RCdXR0b24sXG4gICAgbWFpbkNvbnRhaW5lcixcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIGNsb3NlTmV3UHJvamVjdCxcbiAgICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgICBuZXdQcm9qZWN0Q29udGFpbmVyLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBnZW5lcmFsLFxuICAgIHJlZnJlc2hMaXN0LFxuICAgIG5hbWUsXG4gICAgY29sb3IsXG4gICAgcHJvT3B0aW9ucyxcbiAgICBhZGRUYXNrLFxuICB9O1xufVxuXG5jb25zdCBkb21FbGVtZW50cyA9IGRvbUNhY2hlKCk7XG5cbmNvbnN0IENyZWF0ZURvbSA9IHtcbiAgbWFrZURpdigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXR1cm4gZGl2O1xuICB9LFxuICBtYWtlQSgpIHtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHJldHVybiBhO1xuICB9LFxuICBtYWtlSDIoKSB7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHJldHVybiBoMjtcbiAgfSxcbiAgbWFrZU9wdGlvbnNTVkcoKSB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHN2Zy5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcbiAgICBzdmcudGV4dENvbnRlbnQgPSAnbW9yZV92ZXJ0JztcbiAgICByZXR1cm4gc3ZnO1xuICB9LFxuICBtYWtlQ2xvc2VTVkcoKSB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHN2Zy5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXR3bycpO1xuICAgIHN2Zy50ZXh0Q29udGVudCA9ICdjbG9zZSc7XG4gICAgcmV0dXJuIHN2ZztcbiAgfSxcbiAgbWFrZUJ1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9LFxuICBtYWtlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBjb2xvckxhYmVsID0gbmFtZUxhYmVsLmNsb25lTm9kZSgpO1xuICAgIGNvbnN0IGNvbG9ySW5wdXQgPSBuYW1lSW5wdXQuY2xvbmVOb2RlKCk7XG4gICAgY29uc3QgZG9uZSA9IHRoaXMubWFrZUJ1dHRvbigpO1xuICAgIGNvbnN0IGZpcnN0RGl2ID0gdGhpcy5tYWtlRGl2KCk7XG4gICAgY29uc3Qgc2Vjb25kRGl2ID0gdGhpcy5tYWtlRGl2KCk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gICAgY29sb3JMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjb2xvcicpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgY29sb3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY29sb3InKTtcbiAgICBjb2xvcklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdjb2xvcicpO1xuICAgIGNvbG9ySW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjb2xvcicpO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgbmFtZSc7XG4gICAgY29sb3JMYWJlbC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgY29sb3InO1xuICAgIGRvbmUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGRvbmUudGV4dENvbnRlbnQgPSAnRG9uZSc7XG4gICAgZG9uZS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgZmlyc3REaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBmaXJzdERpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChjb2xvckxhYmVsKTtcbiAgICBzZWNvbmREaXYuYXBwZW5kQ2hpbGQoY29sb3JJbnB1dCk7XG4gICAgZmlyc3REaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1maXJzdCcpO1xuICAgIHNlY29uZERpdi5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlY29uZCcpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmlyc3REaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2Vjb25kRGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRvbmUpO1xuICAgIHJldHVybiBmb3JtO1xuICB9LFxuICBtYWtlRGVsZXRlKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIHJldHVybiBidXR0b247XG4gIH0sXG4gIG1ha2VOZXdUYXNrQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9LFxufTtcblxuZXhwb3J0IHsgZG9tRWxlbWVudHMsIENyZWF0ZURvbSB9O1xuIiwiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlJztcblxuZnVuY3Rpb24gYWRkQ2xvc2VFdmVudChlbGVtKSB7XG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlKGUpIHtcbiAgdG9nZ2xlRmFkZWQoKTtcbiAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRmFkZWQoKSB7XG4gIGRvbUVsZW1lbnRzLm1haW5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZWQnKTtcbn1cblxuZXhwb3J0IHsgdG9nZ2xlRmFkZWQsIGFkZENsb3NlRXZlbnQsIGNsb3NlIH07XG4iLCJpbXBvcnQgeyBkb21FbGVtZW50cywgQ3JlYXRlRG9tIH0gZnJvbSAnLi9kb21DYWNoZS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZU5ld1RhYiB9IGZyb20gJy4vdGFicy5qcyc7XG5pbXBvcnQgeyBhZGRDbG9zZUV2ZW50LCB0b2dnbGVGYWRlZCB9IGZyb20gJy4vZ2VuZXJhbEV2ZW50cy5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5T3B0aW9ucyB9IGZyb20gJy4vcHJvamVjdE9wdGlvbnMnO1xuXG5jb25zdCBsaW5rcyA9IFtdO1xubGlua3MucHVzaChkb21FbGVtZW50cy5nZW5lcmFsKTtcbmxldCBjb3VudCA9IDA7XG5cbmNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xuXG5jbGFzcyBDcmVhdGVQcm9qZWN0T2JqZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIHNldEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXhTZXQgPSBjb3VudDtcbiAgICBjb3VudCArPSAxO1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IENyZWF0ZVByb2plY3RPYmplY3QoJ0dlbmVyYWwnLCAnYmxhY2snKTtcbnByb2plY3RBcnJheS5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbmRlZmF1bHRQcm9qZWN0LnNldEluZGV4KCk7XG5kb21FbGVtZW50cy5jcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0VmFsdWVzKTtcbmFkZENsb3NlRXZlbnQoZG9tRWxlbWVudHMuY2xvc2VOZXdQcm9qZWN0KTtcbmRvbUVsZW1lbnRzLnByb09wdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5T3B0aW9ucyk7XG5cbmZ1bmN0aW9uIGhhbmRkbGVMaW5rcyhkaXYpIHtcbiAgbGlua3MucHVzaChkaXYpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXMoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3RDcmVhdGVkID0gaGFuZGRsZU5ld1Byb2plY3QoKTtcbiAgYWRkUHJvamVjdChwcm9qZWN0Q3JlYXRlZCk7XG4gIGRvbUVsZW1lbnRzLm5hbWUudmFsdWUgPSAnJztcbiAgZG9tRWxlbWVudHMuY29sb3IudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gaGFuZGRsZU5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdE9iamVjdChcbiAgICBkb21FbGVtZW50cy5uYW1lLnZhbHVlLFxuICAgIGRvbUVsZW1lbnRzLmNvbG9yLnZhbHVlXG4gICk7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICBuZXdQcm9qZWN0LnNldEluZGV4KCk7XG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RDcmVhdGVkKSB7XG4gIGlmIChwcm9qZWN0Q3JlYXRlZC5uYW1lID09PSAnJykge1xuICAgIGRvbUVsZW1lbnRzLmVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgY29uc3QgYSA9IENyZWF0ZURvbS5tYWtlQSgpO1xuICBjb25zdCBzdmcgPSBDcmVhdGVEb20ubWFrZU9wdGlvbnNTVkcoKTtcbiAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU9wdGlvbnMpO1xuICBhLnRleHRDb250ZW50ID0gcHJvamVjdENyZWF0ZWQubmFtZTtcbiAgYS5zdHlsZS5jb2xvciA9IHByb2plY3RDcmVhdGVkLmNvbG9yO1xuICBhLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIGRpdi5kYXRhc2V0LmluZGV4ID0gcHJvamVjdENyZWF0ZWQuaW5kZXhTZXQ7XG4gIGRpdi5hcHBlbmRDaGlsZChhKTtcbiAgZGl2LmFwcGVuZENoaWxkKHN2Zyk7XG4gIGRvbUVsZW1lbnRzLm5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgaGFuZGRsZUxpbmtzKGRpdik7XG4gIGdlbmVyYXRlTmV3VGFiKGxpbmtzLCBwcm9qZWN0Q3JlYXRlZCk7XG4gIGRlZmF1bHREaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHREaXNwbGF5KCkge1xuICBkb21FbGVtZW50cy5lcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9tRWxlbWVudHMuaGlkZGVuUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0b2dnbGVGYWRlZCgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdFBhbmVsKCkge1xuICBkb21FbGVtZW50cy5oaWRkZW5Qcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB0b2dnbGVGYWRlZCgpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdFBhbmVsLCBsaW5rcywgcHJvamVjdEFycmF5IH07XG4iLCJpbXBvcnQgeyBDcmVhdGVEb20sIGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9kb21DYWNoZSc7XG5pbXBvcnQgeyBhZGRDbG9zZUV2ZW50LCB0b2dnbGVGYWRlZCB9IGZyb20gJy4vZ2VuZXJhbEV2ZW50cyc7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tICcuL3BvcG91dFByb2plY3QnO1xuaW1wb3J0IHsgYWxsVGFicywgZGlzcGxheU5leHRUYWIgfSBmcm9tICcuL3RhYnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU9wdGlvbnMoZSkge1xuICB0b2dnbGVGYWRlZCgpO1xuICBjb25zdCB7IGluZGV4IH0gPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0O1xuICBjb25zdCBwcm9qZWN0VGFyZ2V0ID0gZmluZFRhcmdldFByb2plY3QoaW5kZXgpO1xuICBjb25zdCBkaXYgPSBDcmVhdGVEb20ubWFrZURpdigpO1xuICBjb25zdCBjbG9zZVNWRyA9IENyZWF0ZURvbS5tYWtlQ2xvc2VTVkcoKTtcbiAgY29uc3QgbmV3Rm9ybSA9IGVkaXREaXYoZGl2LCBjbG9zZVNWRywgcHJvamVjdFRhcmdldCk7XG4gIHNldERlbGV0ZShuZXdGb3JtLCBlLCBkaXYpO1xuICBjaGFuZ2VPcHRpb25zKG5ld0Zvcm0sIGUsIHByb2plY3RUYXJnZXQsIGluZGV4LCBkaXYpO1xuICBkb21FbGVtZW50cy5oaWRkZW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuZnVuY3Rpb24gZmluZFRhcmdldFByb2plY3QoaW5kZXgpIHtcbiAgY29uc3QgdGFyZ2V0ID0gcHJvamVjdEFycmF5LmZpbHRlcihcbiAgICAocHJvamVjdCkgPT4gTnVtYmVyKHByb2plY3QuaW5kZXhTZXQpID09PSBOdW1iZXIoaW5kZXgpXG4gICk7XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gZWRpdERpdihkaXYsIGNsb3NlU1ZHLCBwcm9qZWN0KSB7XG4gIGFkZENsb3NlRXZlbnQoY2xvc2VTVkcpO1xuICBjb25zdCBoMiA9IENyZWF0ZURvbS5tYWtlSDIoKTtcbiAgaDIudGV4dENvbnRlbnQgPSBwcm9qZWN0WzBdLm5hbWU7XG4gIGNvbnN0IG5ld0Zvcm0gPSBDcmVhdGVEb20ubWFrZUZvcm0oKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gQ3JlYXRlRG9tLm1ha2VEZWxldGUoKTtcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0Jyk7XG4gIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgZGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNsb3NlU1ZHKTtcbiAgZGl2LmFwcGVuZENoaWxkKG5ld0Zvcm0pO1xuICByZXR1cm4gbmV3Rm9ybTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlT3B0aW9ucyhub2RlLCBldmVudCwgdGFyZ2V0LCBpbmRleCwgY29udGFpbmVyKSB7XG4gIGNvbnN0IG5ld05hbWUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gIGNvbnN0IG5ld0NvbG9yID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcjY29sb3InKTtcbiAgY29uc3QgY2hhbmdlQnV0dG9uID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgY2hhbmdlQnV0dG9uLm9yaWdpbmFsRGl2ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50O1xuICBjaGFuZ2VCdXR0b24ucG9wb3V0RGl2ID0gY29udGFpbmVyO1xuICBjaGFuZ2VCdXR0b24ub3JpZ2luYWxQcm9qZWN0ID0gdGFyZ2V0O1xuICBjaGFuZ2VCdXR0b24ub3JpZ2luYWxJbmRleCA9IGluZGV4O1xuICBjaGFuZ2VCdXR0b24ubmV3Q29sb3IgPSBuZXdDb2xvcjtcbiAgY2hhbmdlQnV0dG9uLm5ld05hbWUgPSBuZXdOYW1lO1xuICBjaGFuZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVWYWx1ZXMpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVWYWx1ZXMoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5ld1ZhbHVlcyA9IHtcbiAgICBuYW1lOiBlLnRhcmdldC5uZXdOYW1lLnZhbHVlLFxuICAgIGNvbG9yOiBlLnRhcmdldC5uZXdDb2xvci52YWx1ZSxcbiAgfTtcbiAgY29uc3QgYSA9IGUudGFyZ2V0Lm9yaWdpbmFsRGl2LnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgY29uc3QgeyBvcmlnaW5hbEluZGV4IH0gPSBlLnRhcmdldDtcbiAgdXBkYXRlRGl2KGEsIG5ld1ZhbHVlcywgb3JpZ2luYWxJbmRleCk7XG4gIGUudGFyZ2V0LnBvcG91dERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEaXYoZWxlbSwgb2JqLCBpKSB7XG4gIGlmIChvYmoubmFtZSAhPT0gJycpIHtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gb2JqLm5hbWU7XG4gICAgcHJvamVjdEFycmF5W2ldLm5hbWUgPSBvYmoubmFtZTtcbiAgfVxuICBlbGVtLnN0eWxlLmNvbG9yID0gb2JqLmNvbG9yO1xuICBwcm9qZWN0QXJyYXlbaV0uY29sb3IgPSBvYmouY29sb3I7XG4gIHRvZ2dsZUZhZGVkKCk7XG59XG5cbmZ1bmN0aW9uIHNldERlbGV0ZShub2RlLCBldmVudCwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5vZGUucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICBkZWxldGVCdXR0b24ub3JpZ2luYWxEaXYgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIGRlbGV0ZUJ1dHRvbi5wb3BvdXREaXYgPSBjb250YWluZXI7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5vcmlnaW5hbERpdi5kYXRhc2V0LmluZGV4O1xuICBlLnRhcmdldC5vcmlnaW5hbERpdi5yZW1vdmUoKTtcbiAgZS50YXJnZXQucG9wb3V0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGFsbFRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgaWYgKHRhYi5kYXRhc2V0LmluZGV4ID09PSBwcm9qZWN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHRhYlNlbGVjdGVkID0gdGFiLmRhdGFzZXQuaW5kZXg7XG4gICAgICB0YWIucmVtb3ZlKCk7XG4gICAgICBkaXNwbGF5TmV4dFRhYih0YWJTZWxlY3RlZCk7XG4gICAgfVxuICB9KTtcblxuICB0b2dnbGVGYWRlZCgpO1xufVxuIiwiaW1wb3J0IHsgQ3JlYXRlRG9tLCBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tQ2FjaGUnO1xuaW1wb3J0IHsgd29yayB9IGZyb20gJy4vYWRkVGFzayc7XG5cbmxldCBhbGxUYWJzO1xucmVmcmVzaFRhYnMoKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVOZXdUYWIobGlua3MsIHByb2plY3QpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChsaW5rc1tpXSAmJiBsaW5rcy5sZW5ndGggPT09IGkgKyAxKSB7XG4gICAgICBjb25zdCBkaXYgPSBDcmVhdGVEb20ubWFrZURpdigpO1xuICAgICAgY29uc3QgaGVhZGVyID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgICAgIGNvbnN0IGgyID0gQ3JlYXRlRG9tLm1ha2VIMigpO1xuICAgICAgY29uc3QgYWRkVGFzayA9IENyZWF0ZURvbS5tYWtlTmV3VGFza0J1dHRvbigpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICBkaXYuZGF0YXNldC5pbmRleCA9IGk7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1oZWFkZXInKTtcbiAgICAgIGgyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdvcmspO1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGgyKTtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChhZGRUYXNrKTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgZG9tRWxlbWVudHMubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgfVxuICBkaXNwbGF5TGFzdFRhYigpO1xuICBzZXRFdmVudChsaW5rcyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMYXN0VGFiKCkge1xuICByZWZyZXNoVGFicygpO1xuICBoaWRlQWxsVGFicygpO1xuICBhbGxUYWJzW2FsbFRhYnMubGVuZ3RoIC0gMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLXRhYicpO1xufVxuXG5mdW5jdGlvbiBzZXRFdmVudChsaW5rcykge1xuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0TGlzdFRvRGlzcGxheSkpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RMaXN0VG9EaXNwbGF5KGUpIHtcbiAgY29uc3QgdGFyZ2V0SW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgcmVmcmVzaFRhYnMoKTtcbiAgaGlkZUFsbFRhYnMoKTtcbiAgY29uc3Qgc2VsZWN0ZWRUYWIgPSBhbGxUYWJzLmZpbHRlcihcbiAgICAodGFiKSA9PiB0YWIuZGF0YXNldC5pbmRleCA9PT0gdGFyZ2V0SW5kZXhcbiAgKTtcbiAgc2VsZWN0ZWRUYWJbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLXRhYicpO1xufVxuXG5mdW5jdGlvbiByZWZyZXNoVGFicygpIHtcbiAgYWxsVGFicyA9IGRvbUVsZW1lbnRzLnJlZnJlc2hMaXN0KCk7XG59XG5cbmZ1bmN0aW9uIGhpZGVBbGxUYWJzKCkge1xuICBhbGxUYWJzLmZvckVhY2goKHRhYikgPT4gdGFiLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi10YWInKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXh0VGFiKGRlbGV0ZWQpIHtcbiAgY29uc3QgaW5kZXhEZWxldGVkID0gYWxsVGFicy5maW5kSW5kZXgoXG4gICAgKHRhYikgPT4gTnVtYmVyKHRhYi5kYXRhc2V0LmluZGV4KSA9PT0gTnVtYmVyKGRlbGV0ZWQpXG4gICk7XG4gIGFsbFRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgaWYgKE51bWJlcih0YWIuZGF0YXNldC5pbmRleCkgPT09IE51bWJlcihkZWxldGVkKSArIDEpIHtcbiAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tdGFiJyk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgcmVtb3ZlZCA9IGFsbFRhYnMuc3BsaWNlKGluZGV4RGVsZXRlZCwgMSk7XG59XG5cbmV4cG9ydCB7IGdlbmVyYXRlTmV3VGFiLCBhbGxUYWJzLCBkaXNwbGF5TmV4dFRhYiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL21haW4uY3NzJztcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0UGFuZWwgfSBmcm9tICcuL3BvcG91dFByb2plY3QnO1xuaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlLmpzJztcbmltcG9ydCB7IHdvcmsgfSBmcm9tICcuL2FkZFRhc2snO1xuXG5kb21FbGVtZW50cy5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVByb2plY3RQYW5lbCk7XG5kb21FbGVtZW50cy5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd29yayk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=