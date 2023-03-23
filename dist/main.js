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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    box-sizing: border-box;\n    --color-one: #e3ddcb;\n    --color-two: #72716f;\n    --color-three: #793c89;\n    --color-four: #933434;\n    --color-five: #19567a;\n    --color-six: #3b8a93;\n    --color-seven: #cbb8cf;\n    --transition-one: all 0.3s ease-in-out;\n    --transition-two: all 0.1s ease-in-out;\n    height: 100%;\n}\n\nbody {\n    background-color: var(--color-one);\n    height: 100%;\n}\n\nheader {\n    background-color: var(--color-four);\n    display: grid;\n    place-content: center;\n    font-family: 'Tilt Neon', cursive;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 5px black;\n}\n\nmain {\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n}\n\n.container {\n    margin-top: 1rem;\n    height: 98%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    border-top: 2px solid black;\n    border-left: 2px solid black;\n    ;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 5px black;\n}\n\n.project-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n    border-right: 1px solid black;\n    border-radius: 1rem;\n\n}\n\n.header-project {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    transition: var(--transition-one);\n    border-bottom: 2px solid black;\n    border-radius: 1rem;\n}\n\n.header-project:hover {\n    background-color: var(--color-three);\n\n}\n\n.header-project h3 {\n    grid-column: 2 / 4;\n    font-size: 1.4rem;\n}\n\n.material-symbols-outlined {\n    justify-self: end;\n    align-self: center;\n    transition: var(--transition-two);\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.material-symbols-outlined:hover {\n    scale: 1.5;\n    color: var(--color-five);\n    cursor: grab;\n}\n\n.new-project {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    gap: 1rem;\n    grid-auto-rows: 1fr;\n}\n\n.project {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid black;\n}\n\n.title {\n    grid-column: 2 / 4;\n    transition: all 0.2s ease-in-out;\n    cursor: grab;\n}\n\n.options {\n    justify-self: end;\n}\n\n.title:hover {\n    text-decoration: underline;\n    font-size: 1.5rem;\n}\n\n.test-project {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 30vh;\n    width: 600px;\n    background-color: var(--color-seven);\n    padding: 1rem;\n    border-radius: 10px;\n    border: 5px solid var(--color-three);\n    display: none;\n}\n\n.edit-project {\n    width: 30rem;\n    height: 10rem;\n    position: absolute;\n    top: 30%;\n    left: 10%;\n    background-color: var(--color-seven);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n    border-radius: 10px;\n    border: 5px solid var(--color-three);\n}\n\n.test-project h2 {\n    display: inline;\n}\n\n.edit-project h2 {\n    align-self: center;\n    grid-row: 1 / 2;\n    margin: 0;\n}\n\n\n.close-one {\n    position: absolute;\n    right: 1rem;\n}\n\n.close-two {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.test-project form,\n.edit-project form {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    font-family: 'Tilt Neon', cursive;\n}\n\nform label {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n    cursor: pointer;\n}\n\nform input {\n    border-radius: 5px;\n    outline: none;\n    border: 2px solid var(--color-three);\n}\n\n#color {\n    border: 0;\n    padding: 0;\n}\n\n#color:hover {\n    cursor: pointer;\n}\n\nbutton {\n    font-family: 'Tilt Neon', cursive;\n    font-size: 1rem;\n    width: fit-content;\n    padding: 0.3rem 1.5rem;\n    border-radius: 15px;\n    border: 2px solid var(--color-three);\n    background-color: black;\n    color: white;\n}\n\nbutton:hover {\n    border: 2px solid var(--color-six);\n    color: var(--color-six);\n    cursor: pointer;\n}\n\n.faded {\n    opacity: 20%;\n    pointer-events: none;\n}\n\n.error {\n    display: none;\n    margin-top: 0;\n    color: var(--color-four);\n}\n\n.hidden-tab {\n    display: none;\n}\n\n.form-first {\n    grid-row: 1 / 2;\n}\n\n.form-second {\n    grid-row: 2 / 3;\n}\n\n.delete,\n.done {\n    grid-row: 3 / 4;\n}\n\n.list-container {\n    background-color: var(--color-six);\n    grid-column: 2 / 3;\n    padding: 2rem;\n    border-radius: 1rem;\n    border-left: 1px solid black;\n    position: relative;\n}\n\n.list-header {\n    display: flex;\n}\n\n.list-header h2 {\n    flex: 1;\n    margin-top: 0;\n    font-family: 'Tilt Neon', cursive;\n}\n\n.welcome {\n    font-size: 1.5rem;\n    font-weight: 600;\n    font-family: 'Tilt Neon', cursive;\n}\n\n.todo {\n    border: 2px solid black;\n    border-radius: 1rem;\n    padding: 1rem;\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n\n.todo label {\n    font-size: 1.3rem;\n}\n\n.todo input {\n    width: 1.5rem;\n    height: 1.5rem;\n    margin-right: 1.5rem;\n}\n\n.open {\n    flex: 1;\n}\n\n.open:hover {\n    color: var(--color-three);\n    text-decoration: underline;\n}\n\n.todo-options {\n    justify-self: flex-end;\n}\n\n.todo-options:hover {\n    color: var(--color-four);\n}\n\n.todo-description {\n    width: 100%;\n    height: 15rem;\n    background-color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 110%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    gap: 0.3rem;\n    border-radius: 5px;\n    justify-items: center;\n    padding: 0.3rem 0;\n}\n\n.todo-description h5 {\n    margin: 0.3rem;\n    font-size: 1.2rem;\n}\n\n.todo-description p {\n    font-size: 1rem;\n    width: 45ch;\n    font-weight: 400;\n    border: 1px solid black;\n    border-radius: 5px;\n    margin: 0;\n    grid-column: 1 / 2;\n}\n\n.hidden {\n    display: none;\n}\n\n.new-task-panel {\n    background-color: #ffffff;\n    width: 80%;\n    height: 18rem;\n    position: absolute;\n    top: 20%;\n    left: 12%;\n    border-radius: 1rem;\n    border: 5px solid var(--color-three);\n}\n\n.new-task-panel form {\n    height: 80%;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: repeat(6, 1fr);\n    gap: 1rem;\n    align-items: start;\n    padding: 1rem;\n}\n\n.new-task-panel form label {\n    text-decoration: underline;\n}\n\n.name-cont {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.close-three {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.color-cont {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.date-cont {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n}\n\n.comment-cont {\n    grid-column: 1 / 2;\n    grid-row: 4 / 5;\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n#create-task {\n    grid-column: 2 / 3;\n    grid-row: 4 / 5;\n    margin-top: 1rem;\n    justify-self: center;\n    align-self: end;\n}\n\n.task-para {\n    grid-column: 2 / 3;\n    grid-row: 5 / 6;\n    font-size: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    box-sizing: border-box;\n    --color-one: #e3ddcb;\n    --color-two: #72716f;\n    --color-three: #793c89;\n    --color-four: #933434;\n    --color-five: #19567a;\n    --color-six: #3b8a93;\n    --color-seven: #cbb8cf;\n    --transition-one: all 0.3s ease-in-out;\n    --transition-two: all 0.1s ease-in-out;\n    height: 100%;\n}\n\nbody {\n    background-color: var(--color-one);\n    height: 100%;\n}\n\nheader {\n    background-color: var(--color-four);\n    display: grid;\n    place-content: center;\n    font-family: 'Tilt Neon', cursive;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 5px black;\n}\n\nmain {\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n}\n\n.container {\n    margin-top: 1rem;\n    height: 98%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    border-top: 2px solid black;\n    border-left: 2px solid black;\n    ;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 5px black;\n}\n\n.project-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n    border-right: 1px solid black;\n    border-radius: 1rem;\n\n}\n\n.header-project {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    transition: var(--transition-one);\n    border-bottom: 2px solid black;\n    border-radius: 1rem;\n}\n\n.header-project:hover {\n    background-color: var(--color-three);\n\n}\n\n.header-project h3 {\n    grid-column: 2 / 4;\n    font-size: 1.4rem;\n}\n\n.material-symbols-outlined {\n    justify-self: end;\n    align-self: center;\n    transition: var(--transition-two);\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.material-symbols-outlined:hover {\n    scale: 1.5;\n    color: var(--color-five);\n    cursor: grab;\n}\n\n.new-project {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    gap: 1rem;\n    grid-auto-rows: 1fr;\n}\n\n.project {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid black;\n}\n\n.title {\n    grid-column: 2 / 4;\n    transition: all 0.2s ease-in-out;\n    cursor: grab;\n}\n\n.options {\n    justify-self: end;\n}\n\n.title:hover {\n    text-decoration: underline;\n    font-size: 1.5rem;\n}\n\n.test-project {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 30vh;\n    width: 600px;\n    background-color: var(--color-seven);\n    padding: 1rem;\n    border-radius: 10px;\n    border: 5px solid var(--color-three);\n    display: none;\n}\n\n.edit-project {\n    width: 30rem;\n    height: 10rem;\n    position: absolute;\n    top: 30%;\n    left: 10%;\n    background-color: var(--color-seven);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n    border-radius: 10px;\n    border: 5px solid var(--color-three);\n}\n\n.test-project h2 {\n    display: inline;\n}\n\n.edit-project h2 {\n    align-self: center;\n    grid-row: 1 / 2;\n    margin: 0;\n}\n\n\n.close-one {\n    position: absolute;\n    right: 1rem;\n}\n\n.close-two {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.test-project form,\n.edit-project form {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    font-family: 'Tilt Neon', cursive;\n}\n\nform label {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n    cursor: pointer;\n}\n\nform input {\n    border-radius: 5px;\n    outline: none;\n    border: 2px solid var(--color-three);\n}\n\n#color {\n    border: 0;\n    padding: 0;\n}\n\n#color:hover {\n    cursor: pointer;\n}\n\nbutton {\n    font-family: 'Tilt Neon', cursive;\n    font-size: 1rem;\n    width: fit-content;\n    padding: 0.3rem 1.5rem;\n    border-radius: 15px;\n    border: 2px solid var(--color-three);\n    background-color: black;\n    color: white;\n}\n\nbutton:hover {\n    border: 2px solid var(--color-six);\n    color: var(--color-six);\n    cursor: pointer;\n}\n\n.faded {\n    opacity: 20%;\n    pointer-events: none;\n}\n\n.error {\n    display: none;\n    margin-top: 0;\n    color: var(--color-four);\n}\n\n.hidden-tab {\n    display: none;\n}\n\n.form-first {\n    grid-row: 1 / 2;\n}\n\n.form-second {\n    grid-row: 2 / 3;\n}\n\n.delete,\n.done {\n    grid-row: 3 / 4;\n}\n\n.list-container {\n    background-color: var(--color-six);\n    grid-column: 2 / 3;\n    padding: 2rem;\n    border-radius: 1rem;\n    border-left: 1px solid black;\n    position: relative;\n}\n\n.list-header {\n    display: flex;\n}\n\n.list-header h2 {\n    flex: 1;\n    margin-top: 0;\n    font-family: 'Tilt Neon', cursive;\n}\n\n.welcome {\n    font-size: 1.5rem;\n    font-weight: 600;\n    font-family: 'Tilt Neon', cursive;\n}\n\n.todo {\n    border: 2px solid black;\n    border-radius: 1rem;\n    padding: 1rem;\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n\n.todo label {\n    font-size: 1.3rem;\n}\n\n.todo input {\n    width: 1.5rem;\n    height: 1.5rem;\n    margin-right: 1.5rem;\n}\n\n.open {\n    flex: 1;\n}\n\n.open:hover {\n    color: var(--color-three);\n    text-decoration: underline;\n}\n\n.todo-options {\n    justify-self: flex-end;\n}\n\n.todo-options:hover {\n    color: var(--color-four);\n}\n\n.todo-description {\n    width: 100%;\n    height: 15rem;\n    background-color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 110%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    gap: 0.3rem;\n    border-radius: 5px;\n    justify-items: center;\n    padding: 0.3rem 0;\n}\n\n.todo-description h5 {\n    margin: 0.3rem;\n    font-size: 1.2rem;\n}\n\n.todo-description p {\n    font-size: 1rem;\n    width: 45ch;\n    font-weight: 400;\n    border: 1px solid black;\n    border-radius: 5px;\n    margin: 0;\n    grid-column: 1 / 2;\n}\n\n.hidden {\n    display: none;\n}\n\n.new-task-panel {\n    background-color: #ffffff;\n    width: 80%;\n    height: 18rem;\n    position: absolute;\n    top: 20%;\n    left: 12%;\n    border-radius: 1rem;\n    border: 5px solid var(--color-three);\n}\n\n.new-task-panel form {\n    height: 80%;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: repeat(6, 1fr);\n    gap: 1rem;\n    align-items: start;\n    padding: 1rem;\n}\n\n.new-task-panel form label {\n    text-decoration: underline;\n}\n\n.name-cont {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.close-three {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.color-cont {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.date-cont {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n}\n\n.comment-cont {\n    grid-column: 1 / 2;\n    grid-row: 4 / 5;\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n#create-task {\n    grid-column: 2 / 3;\n    grid-row: 4 / 5;\n    margin-top: 1rem;\n    justify-self: center;\n    align-self: end;\n}\n\n.task-para {\n    grid-column: 2 / 3;\n    grid-row: 5 / 6;\n    font-size: 1rem;\n}"],"sourceRoot":""}]);
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
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.projectsContainer.classList.add('faded');
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.taskPanel.classList.remove('hidden');
  e.currentTarget.style.pointerEvents = 'none';
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
  const taskPanel = document.querySelector('.new-task-panel');
  const closeTaskPanel = document.querySelector('.close-three');
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
    taskPanel,
    closeTaskPanel,
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
/* harmony export */   "addCloseEventForProject": () => (/* binding */ addCloseEventForProject),
/* harmony export */   "closeNewTaskPanel": () => (/* binding */ closeNewTaskPanel),
/* harmony export */   "closeProjectsPopouts": () => (/* binding */ closeProjectsPopouts),
/* harmony export */   "toggleFadedForProject": () => (/* binding */ toggleFadedForProject)
/* harmony export */ });
/* harmony import */ var _domCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCache */ "./src/domCache.js");


function addCloseEventForProject(elem) {
  elem.addEventListener('click', closeProjectsPopouts);
}

function closeProjectsPopouts(e) {
  toggleFadedForProject();
  e.currentTarget.parentNode.style.display = 'none';
}

function toggleFadedForProject(e) {
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.mainContainer.classList.toggle('faded');
}

function closeNewTaskPanel(e) {
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.projectsContainer.classList.remove('faded');
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.taskPanel.classList.add('hidden');
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.addTask.style.pointerEvents = '';
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
(0,_generalEvents_js__WEBPACK_IMPORTED_MODULE_2__.addCloseEventForProject)(_domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.closeNewProject);
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
  (0,_generalEvents_js__WEBPACK_IMPORTED_MODULE_2__.toggleFadedForProject)();
}

function displayProjectPanel() {
  _domCache_js__WEBPACK_IMPORTED_MODULE_0__.domElements.hiddenProject.style.display = 'block';
  (0,_generalEvents_js__WEBPACK_IMPORTED_MODULE_2__.toggleFadedForProject)();
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
  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.toggleFadedForProject)();
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
  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.addCloseEventForProject)(closeSVG);
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
  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.toggleFadedForProject)();
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

  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.toggleFadedForProject)();
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
/* harmony import */ var _generalEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generalEvents */ "./src/generalEvents.js");






_domCache_js__WEBPACK_IMPORTED_MODULE_2__.domElements.newProjectButton.addEventListener('click', _popoutProject__WEBPACK_IMPORTED_MODULE_1__.displayProjectPanel);
_domCache_js__WEBPACK_IMPORTED_MODULE_2__.domElements.addTask.addEventListener('click', _addTask__WEBPACK_IMPORTED_MODULE_3__.work);
_domCache_js__WEBPACK_IMPORTED_MODULE_2__.domElements.closeTaskPanel.addEventListener('click', _generalEvents__WEBPACK_IMPORTED_MODULE_4__.closeNewTaskPanel);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFV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cyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dlbmVyYWxFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BvcG91dFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RPcHRpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1jb2xvci1vbmU6ICNlM2RkY2I7XFxuICAgIC0tY29sb3ItdHdvOiAjNzI3MTZmO1xcbiAgICAtLWNvbG9yLXRocmVlOiAjNzkzYzg5O1xcbiAgICAtLWNvbG9yLWZvdXI6ICM5MzM0MzQ7XFxuICAgIC0tY29sb3ItZml2ZTogIzE5NTY3YTtcXG4gICAgLS1jb2xvci1zaXg6ICMzYjhhOTM7XFxuICAgIC0tY29sb3Itc2V2ZW46ICNjYmI4Y2Y7XFxuICAgIC0tdHJhbnNpdGlvbi1vbmU6IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAtLXRyYW5zaXRpb24tdHdvOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDk4JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxuICAgIDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG5cXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1vbmUpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5oZWFkZXItcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG5cXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0IGgzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXR3byk7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAgICAgJ0ZJTEwnIDAsXFxuICAgICAgICAnd2dodCcgNDAwLFxcbiAgICAgICAgJ0dSQUQnIDAsXFxuICAgICAgICAnb3BzeicgNDhcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIge1xcbiAgICBzY2FsZTogMS41O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZml2ZSk7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRpdGxlOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDMwdmg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2V2ZW4pO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2V2ZW4pO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCBoMiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdCBoMiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcbi5jbG9zZS1vbmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uY2xvc2UtdHdvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi50ZXN0LXByb2plY3QgZm9ybSxcXG4uZWRpdC1wcm9qZWN0IGZvcm0ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG5mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbiNjb2xvciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbG9yOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNpeCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zaXgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYWRlZCB7XFxuICAgIG9wYWNpdHk6IDIwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG59XFxuXFxuLmhpZGRlbi10YWIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS1maXJzdCB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmZvcm0tc2Vjb25kIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uZGVsZXRlLFxcbi5kb25lIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaXgpO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpc3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxpc3QtaGVhZGVyIGgyIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG4ud2VsY29tZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxufVxcblxcbi50b2RvIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG8gaW5wdXQge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5vcGVuIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLm9wZW46aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnRvZG8tb3B0aW9ucyB7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi50b2RvLW9wdGlvbnM6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAxMTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdhcDogMC4zcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4zcmVtIDA7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIGg1IHtcXG4gICAgbWFyZ2luOiAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogNDVjaDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmV3LXRhc2stcGFuZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDE4cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAxMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuLm5ldy10YXNrLXBhbmVsIGZvcm0ge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCAxZnIpO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm5ldy10YXNrLXBhbmVsIGZvcm0gbGFiZWwge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm5hbWUtY29udCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uY2xvc2UtdGhyZWUge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmNvbG9yLWNvbnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmRhdGUtY29udCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uY29tbWVudC1jb250IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxufVxcblxcbiNjcmVhdGUtdGFzayB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4udGFzay1wYXJhIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogNSAvIDY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDRCQUE0Qjs7SUFFNUIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFD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bEIsZUFBZTtJQUNmLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtLWNvbG9yLW9uZTogI2UzZGRjYjtcXG4gICAgLS1jb2xvci10d286ICM3MjcxNmY7XFxuICAgIC0tY29sb3ItdGhyZWU6ICM3OTNjODk7XFxuICAgIC0tY29sb3ItZm91cjogIzkzMzQzNDtcXG4gICAgLS1jb2xvci1maXZlOiAjMTk1NjdhO1xcbiAgICAtLWNvbG9yLXNpeDogIzNiOGE5MztcXG4gICAgLS1jb2xvci1zZXZlbjogI2NiYjhjZjtcXG4gICAgLS10cmFuc2l0aW9uLW9uZTogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIC0tdHJhbnNpdGlvbi10d286IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XFxufVxcblxcbm1haW4ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGhlaWdodDogOTglO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG4gICAgO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBibGFjaztcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcbn1cXG5cXG4uaGVhZGVyLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLW9uZSk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcblxcbn1cXG5cXG4uaGVhZGVyLXByb2plY3QgaDMge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tdHdvKTtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICAgICAnRklMTCcgMCxcXG4gICAgICAgICd3Z2h0JyA0MDAsXFxuICAgICAgICAnR1JBRCcgMCxcXG4gICAgICAgICdvcHN6JyA0OFxcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1maXZlKTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udGl0bGU6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZXN0LXByb2plY3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMzB2aDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZXZlbik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdCB7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbGVmdDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZXZlbik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IGgyIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0IGgyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuLmNsb3NlLW9uZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi5jbG9zZS10d28ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCBmb3JtLFxcbi5lZGl0LXByb2plY3QgZm9ybSB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxufVxcblxcbmZvcm0gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuI2NvbG9yIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29sb3I6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itc2l4KTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNpeCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZhZGVkIHtcXG4gICAgb3BhY2l0eTogMjAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbn1cXG5cXG4uaGlkZGVuLXRhYiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLWZpcnN0IHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uZm9ybS1zZWNvbmQge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5kZWxldGUsXFxuLmRvbmUge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNpeCk7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGlzdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubGlzdC1oZWFkZXIgaDIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxufVxcblxcbi53ZWxjb21lIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kbyBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLm9wZW4ge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ub3Blbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udG9kby1vcHRpb25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRvZG8tb3B0aW9uczpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDExMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ2FwOiAwLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24gaDUge1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiA0NWNoO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uZXctdGFzay1wYW5lbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMThyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDEyJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG5cXG4ubmV3LXRhc2stcGFuZWwgZm9ybSB7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubmV3LXRhc2stcGFuZWwgZm9ybSBsYWJlbCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubmFtZS1jb250IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5jbG9zZS10aHJlZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uY29sb3ItY29udCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uZGF0ZS1jb250IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5jb21tZW50LWNvbnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG59XFxuXFxuI2NyZWF0ZS10YXNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi50YXNrLXBhcmEge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiA1IC8gNjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ3JlYXRlRG9tLCBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tQ2FjaGUnO1xuXG5mdW5jdGlvbiB3b3JrKGUpIHtcbiAgZG9tRWxlbWVudHMucHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZWQnKTtcbiAgZG9tRWxlbWVudHMudGFza1BhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbn1cblxuZXhwb3J0IHsgd29yayB9O1xuIiwiZnVuY3Rpb24gZG9tQ2FjaGUoKSB7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnN0IGhpZGRlbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW4tY29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IGhpZGRlblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdC1wcm9qZWN0Jyk7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cycpO1xuICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKTtcbiAgY29uc3QgY2xvc2VOZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW9uZScpO1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbiAgY29uc3QgZ2VuZXJhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5lcmFsJyk7XG4gIGNvbnN0IHByb09wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvLW9wdGlvbnMtYnV0dG9uJyk7XG4gIGZ1bmN0aW9uIHJlZnJlc2hMaXN0KCkge1xuICAgIGNvbnN0IGxpc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IFsuLi5saXN0Tm9kZV07XG4gICAgcmV0dXJuIGxpc3RDb250YWluZXI7XG4gIH1cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbG9yJyk7XG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpO1xuICBjb25zdCB0YXNrUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stcGFuZWwnKTtcbiAgY29uc3QgY2xvc2VUYXNrUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtdGhyZWUnKTtcbiAgcmV0dXJuIHtcbiAgICBoaWRkZW5Qcm9qZWN0LFxuICAgIGhpZGRlbkNvbnRhaW5lcixcbiAgICBuZXdQcm9qZWN0QnV0dG9uLFxuICAgIG1haW5Db250YWluZXIsXG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBjbG9zZU5ld1Byb2plY3QsXG4gICAgcHJvamVjdHNDb250YWluZXIsXG4gICAgbmV3UHJvamVjdENvbnRhaW5lcixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgZ2VuZXJhbCxcbiAgICByZWZyZXNoTGlzdCxcbiAgICBuYW1lLFxuICAgIGNvbG9yLFxuICAgIHByb09wdGlvbnMsXG4gICAgYWRkVGFzayxcbiAgICB0YXNrUGFuZWwsXG4gICAgY2xvc2VUYXNrUGFuZWwsXG4gIH07XG59XG5cbmNvbnN0IGRvbUVsZW1lbnRzID0gZG9tQ2FjaGUoKTtcblxuY29uc3QgQ3JlYXRlRG9tID0ge1xuICBtYWtlRGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldHVybiBkaXY7XG4gIH0sXG4gIG1ha2VBKCkge1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcmV0dXJuIGE7XG4gIH0sXG4gIG1ha2VIMigpIHtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcmV0dXJuIGgyO1xuICB9LFxuICBtYWtlT3B0aW9uc1NWRygpIHtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgICBzdmcuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycpO1xuICAgIHN2Zy50ZXh0Q29udGVudCA9ICdtb3JlX3ZlcnQnO1xuICAgIHJldHVybiBzdmc7XG4gIH0sXG4gIG1ha2VDbG9zZVNWRygpIHtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgICBzdmcuY2xhc3NMaXN0LmFkZCgnY2xvc2UtdHdvJyk7XG4gICAgc3ZnLnRleHRDb250ZW50ID0gJ2Nsb3NlJztcbiAgICByZXR1cm4gc3ZnO1xuICB9LFxuICBtYWtlQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJldHVybiBidXR0b247XG4gIH0sXG4gIG1ha2VGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGNvbG9yTGFiZWwgPSBuYW1lTGFiZWwuY2xvbmVOb2RlKCk7XG4gICAgY29uc3QgY29sb3JJbnB1dCA9IG5hbWVJbnB1dC5jbG9uZU5vZGUoKTtcbiAgICBjb25zdCBkb25lID0gdGhpcy5tYWtlQnV0dG9uKCk7XG4gICAgY29uc3QgZmlyc3REaXYgPSB0aGlzLm1ha2VEaXYoKTtcbiAgICBjb25zdCBzZWNvbmREaXYgPSB0aGlzLm1ha2VEaXYoKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJyMnKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgICBjb2xvckxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NvbG9yJyk7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBjb2xvcklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjb2xvcicpO1xuICAgIGNvbG9ySW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NvbG9yJyk7XG4gICAgY29sb3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbG9yJyk7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ0NoYW5nZSBuYW1lJztcbiAgICBjb2xvckxhYmVsLnRleHRDb250ZW50ID0gJ0NoYW5nZSBjb2xvcic7XG4gICAgZG9uZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgZG9uZS50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICBkb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICBmaXJzdERpdi5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGZpcnN0RGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgc2Vjb25kRGl2LmFwcGVuZENoaWxkKGNvbG9yTGFiZWwpO1xuICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChjb2xvcklucHV0KTtcbiAgICBmaXJzdERpdi5jbGFzc0xpc3QuYWRkKCdmb3JtLWZpcnN0Jyk7XG4gICAgc2Vjb25kRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2Vjb25kJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaXJzdERpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZWNvbmREaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9uZSk7XG4gICAgcmV0dXJuIGZvcm07XG4gIH0sXG4gIG1ha2VEZWxldGUoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbiAgbWFrZU5ld1Rhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHJldHVybiBidXR0b247XG4gIH0sXG59O1xuXG5leHBvcnQgeyBkb21FbGVtZW50cywgQ3JlYXRlRG9tIH07XG4iLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tQ2FjaGUnO1xuXG5mdW5jdGlvbiBhZGRDbG9zZUV2ZW50Rm9yUHJvamVjdChlbGVtKSB7XG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RzUG9wb3V0cyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdHNQb3BvdXRzKGUpIHtcbiAgdG9nZ2xlRmFkZWRGb3JQcm9qZWN0KCk7XG4gIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUZhZGVkRm9yUHJvamVjdChlKSB7XG4gIGRvbUVsZW1lbnRzLm1haW5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZWQnKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VOZXdUYXNrUGFuZWwoZSkge1xuICBkb21FbGVtZW50cy5wcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlZCcpO1xuICBkb21FbGVtZW50cy50YXNrUGFuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGRvbUVsZW1lbnRzLmFkZFRhc2suc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xufVxuXG5leHBvcnQge1xuICB0b2dnbGVGYWRlZEZvclByb2plY3QsXG4gIGFkZENsb3NlRXZlbnRGb3JQcm9qZWN0LFxuICBjbG9zZVByb2plY3RzUG9wb3V0cyxcbiAgY2xvc2VOZXdUYXNrUGFuZWwsXG59O1xuIiwiaW1wb3J0IHsgZG9tRWxlbWVudHMsIENyZWF0ZURvbSB9IGZyb20gJy4vZG9tQ2FjaGUuanMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVOZXdUYWIgfSBmcm9tICcuL3RhYnMuanMnO1xuaW1wb3J0IHtcbiAgYWRkQ2xvc2VFdmVudEZvclByb2plY3QsXG4gIHRvZ2dsZUZhZGVkRm9yUHJvamVjdCxcbn0gZnJvbSAnLi9nZW5lcmFsRXZlbnRzLmpzJztcbmltcG9ydCB7IGRpc3BsYXlPcHRpb25zIH0gZnJvbSAnLi9wcm9qZWN0T3B0aW9ucyc7XG5cbmNvbnN0IGxpbmtzID0gW107XG5saW5rcy5wdXNoKGRvbUVsZW1lbnRzLmdlbmVyYWwpO1xubGV0IGNvdW50ID0gMDtcblxuY29uc3QgcHJvamVjdEFycmF5ID0gW107XG5cbmNsYXNzIENyZWF0ZVByb2plY3RPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBjb2xvcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgc2V0SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleFNldCA9IGNvdW50O1xuICAgIGNvdW50ICs9IDE7XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdE9iamVjdCgnR2VuZXJhbCcsICdibGFjaycpO1xucHJvamVjdEFycmF5LnB1c2goZGVmYXVsdFByb2plY3QpO1xuZGVmYXVsdFByb2plY3Quc2V0SW5kZXgoKTtcbmRvbUVsZW1lbnRzLmNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRWYWx1ZXMpO1xuYWRkQ2xvc2VFdmVudEZvclByb2plY3QoZG9tRWxlbWVudHMuY2xvc2VOZXdQcm9qZWN0KTtcbmRvbUVsZW1lbnRzLnByb09wdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5T3B0aW9ucyk7XG5cbmZ1bmN0aW9uIGhhbmRkbGVMaW5rcyhkaXYpIHtcbiAgbGlua3MucHVzaChkaXYpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXMoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3RDcmVhdGVkID0gaGFuZGRsZU5ld1Byb2plY3QoKTtcbiAgYWRkUHJvamVjdChwcm9qZWN0Q3JlYXRlZCk7XG4gIGRvbUVsZW1lbnRzLm5hbWUudmFsdWUgPSAnJztcbiAgZG9tRWxlbWVudHMuY29sb3IudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gaGFuZGRsZU5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdE9iamVjdChcbiAgICBkb21FbGVtZW50cy5uYW1lLnZhbHVlLFxuICAgIGRvbUVsZW1lbnRzLmNvbG9yLnZhbHVlXG4gICk7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICBuZXdQcm9qZWN0LnNldEluZGV4KCk7XG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RDcmVhdGVkKSB7XG4gIGlmIChwcm9qZWN0Q3JlYXRlZC5uYW1lID09PSAnJykge1xuICAgIGRvbUVsZW1lbnRzLmVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgY29uc3QgYSA9IENyZWF0ZURvbS5tYWtlQSgpO1xuICBjb25zdCBzdmcgPSBDcmVhdGVEb20ubWFrZU9wdGlvbnNTVkcoKTtcbiAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU9wdGlvbnMpO1xuICBhLnRleHRDb250ZW50ID0gcHJvamVjdENyZWF0ZWQubmFtZTtcbiAgYS5zdHlsZS5jb2xvciA9IHByb2plY3RDcmVhdGVkLmNvbG9yO1xuICBhLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIGRpdi5kYXRhc2V0LmluZGV4ID0gcHJvamVjdENyZWF0ZWQuaW5kZXhTZXQ7XG4gIGRpdi5hcHBlbmRDaGlsZChhKTtcbiAgZGl2LmFwcGVuZENoaWxkKHN2Zyk7XG4gIGRvbUVsZW1lbnRzLm5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgaGFuZGRsZUxpbmtzKGRpdik7XG4gIGdlbmVyYXRlTmV3VGFiKGxpbmtzLCBwcm9qZWN0Q3JlYXRlZCk7XG4gIGRlZmF1bHREaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHREaXNwbGF5KCkge1xuICBkb21FbGVtZW50cy5lcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9tRWxlbWVudHMuaGlkZGVuUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0b2dnbGVGYWRlZEZvclByb2plY3QoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RQYW5lbCgpIHtcbiAgZG9tRWxlbWVudHMuaGlkZGVuUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgdG9nZ2xlRmFkZWRGb3JQcm9qZWN0KCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0UGFuZWwsIGxpbmtzLCBwcm9qZWN0QXJyYXkgfTtcbiIsImltcG9ydCB7IENyZWF0ZURvbSwgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlJztcbmltcG9ydCB7XG4gIGFkZENsb3NlRXZlbnRGb3JQcm9qZWN0LFxuICB0b2dnbGVGYWRlZEZvclByb2plY3QsXG59IGZyb20gJy4vZ2VuZXJhbEV2ZW50cyc7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tICcuL3BvcG91dFByb2plY3QnO1xuaW1wb3J0IHsgYWxsVGFicywgZGlzcGxheU5leHRUYWIgfSBmcm9tICcuL3RhYnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU9wdGlvbnMoZSkge1xuICB0b2dnbGVGYWRlZEZvclByb2plY3QoKTtcbiAgY29uc3QgeyBpbmRleCB9ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldDtcbiAgY29uc3QgcHJvamVjdFRhcmdldCA9IGZpbmRUYXJnZXRQcm9qZWN0KGluZGV4KTtcbiAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgY29uc3QgY2xvc2VTVkcgPSBDcmVhdGVEb20ubWFrZUNsb3NlU1ZHKCk7XG4gIGNvbnN0IG5ld0Zvcm0gPSBlZGl0RGl2KGRpdiwgY2xvc2VTVkcsIHByb2plY3RUYXJnZXQpO1xuICBzZXREZWxldGUobmV3Rm9ybSwgZSwgZGl2KTtcbiAgY2hhbmdlT3B0aW9ucyhuZXdGb3JtLCBlLCBwcm9qZWN0VGFyZ2V0LCBpbmRleCwgZGl2KTtcbiAgZG9tRWxlbWVudHMuaGlkZGVuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYXJnZXRQcm9qZWN0KGluZGV4KSB7XG4gIGNvbnN0IHRhcmdldCA9IHByb2plY3RBcnJheS5maWx0ZXIoXG4gICAgKHByb2plY3QpID0+IE51bWJlcihwcm9qZWN0LmluZGV4U2V0KSA9PT0gTnVtYmVyKGluZGV4KVxuICApO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGVkaXREaXYoZGl2LCBjbG9zZVNWRywgcHJvamVjdCkge1xuICBhZGRDbG9zZUV2ZW50Rm9yUHJvamVjdChjbG9zZVNWRyk7XG4gIGNvbnN0IGgyID0gQ3JlYXRlRG9tLm1ha2VIMigpO1xuICBoMi50ZXh0Q29udGVudCA9IHByb2plY3RbMF0ubmFtZTtcbiAgY29uc3QgbmV3Rm9ybSA9IENyZWF0ZURvbS5tYWtlRm9ybSgpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBDcmVhdGVEb20ubWFrZURlbGV0ZSgpO1xuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2plY3QnKTtcbiAgbmV3Rm9ybS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBkaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY2xvc2VTVkcpO1xuICBkaXYuYXBwZW5kQ2hpbGQobmV3Rm9ybSk7XG4gIHJldHVybiBuZXdGb3JtO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VPcHRpb25zKG5vZGUsIGV2ZW50LCB0YXJnZXQsIGluZGV4LCBjb250YWluZXIpIHtcbiAgY29uc3QgbmV3TmFtZSA9IG5vZGUucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgY29uc3QgbmV3Q29sb3IgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJyNjb2xvcicpO1xuICBjb25zdCBjaGFuZ2VCdXR0b24gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBjaGFuZ2VCdXR0b24ub3JpZ2luYWxEaXYgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIGNoYW5nZUJ1dHRvbi5wb3BvdXREaXYgPSBjb250YWluZXI7XG4gIGNoYW5nZUJ1dHRvbi5vcmlnaW5hbFByb2plY3QgPSB0YXJnZXQ7XG4gIGNoYW5nZUJ1dHRvbi5vcmlnaW5hbEluZGV4ID0gaW5kZXg7XG4gIGNoYW5nZUJ1dHRvbi5uZXdDb2xvciA9IG5ld0NvbG9yO1xuICBjaGFuZ2VCdXR0b24ubmV3TmFtZSA9IG5ld05hbWU7XG4gIGNoYW5nZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVZhbHVlcyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVZhbHVlcyhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmV3VmFsdWVzID0ge1xuICAgIG5hbWU6IGUudGFyZ2V0Lm5ld05hbWUudmFsdWUsXG4gICAgY29sb3I6IGUudGFyZ2V0Lm5ld0NvbG9yLnZhbHVlLFxuICB9O1xuICBjb25zdCBhID0gZS50YXJnZXQub3JpZ2luYWxEaXYucXVlcnlTZWxlY3RvcignYScpO1xuICBjb25zdCB7IG9yaWdpbmFsSW5kZXggfSA9IGUudGFyZ2V0O1xuICB1cGRhdGVEaXYoYSwgbmV3VmFsdWVzLCBvcmlnaW5hbEluZGV4KTtcbiAgZS50YXJnZXQucG9wb3V0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpdihlbGVtLCBvYmosIGkpIHtcbiAgaWYgKG9iai5uYW1lICE9PSAnJykge1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSBvYmoubmFtZTtcbiAgICBwcm9qZWN0QXJyYXlbaV0ubmFtZSA9IG9iai5uYW1lO1xuICB9XG4gIGVsZW0uc3R5bGUuY29sb3IgPSBvYmouY29sb3I7XG4gIHByb2plY3RBcnJheVtpXS5jb2xvciA9IG9iai5jb2xvcjtcbiAgdG9nZ2xlRmFkZWRGb3JQcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHNldERlbGV0ZShub2RlLCBldmVudCwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5vZGUucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICBkZWxldGVCdXR0b24ub3JpZ2luYWxEaXYgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIGRlbGV0ZUJ1dHRvbi5wb3BvdXREaXYgPSBjb250YWluZXI7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5vcmlnaW5hbERpdi5kYXRhc2V0LmluZGV4O1xuICBlLnRhcmdldC5vcmlnaW5hbERpdi5yZW1vdmUoKTtcbiAgZS50YXJnZXQucG9wb3V0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGFsbFRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgaWYgKHRhYi5kYXRhc2V0LmluZGV4ID09PSBwcm9qZWN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHRhYlNlbGVjdGVkID0gdGFiLmRhdGFzZXQuaW5kZXg7XG4gICAgICB0YWIucmVtb3ZlKCk7XG4gICAgICBkaXNwbGF5TmV4dFRhYih0YWJTZWxlY3RlZCk7XG4gICAgfVxuICB9KTtcblxuICB0b2dnbGVGYWRlZEZvclByb2plY3QoKTtcbn1cbiIsImltcG9ydCB7IENyZWF0ZURvbSwgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlJztcbmltcG9ydCB7IHdvcmsgfSBmcm9tICcuL2FkZFRhc2snO1xuXG5sZXQgYWxsVGFicztcbnJlZnJlc2hUYWJzKCk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTmV3VGFiKGxpbmtzLCBwcm9qZWN0KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAobGlua3NbaV0gJiYgbGlua3MubGVuZ3RoID09PSBpICsgMSkge1xuICAgICAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgICAgIGNvbnN0IGhlYWRlciA9IENyZWF0ZURvbS5tYWtlRGl2KCk7XG4gICAgICBjb25zdCBoMiA9IENyZWF0ZURvbS5tYWtlSDIoKTtcbiAgICAgIGNvbnN0IGFkZFRhc2sgPSBDcmVhdGVEb20ubWFrZU5ld1Rhc2tCdXR0b24oKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0LWNvbnRhaW5lcicpO1xuICAgICAgZGl2LmRhdGFzZXQuaW5kZXggPSBpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaGVhZGVyJyk7XG4gICAgICBoMi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3b3JrKTtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMik7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgIGRvbUVsZW1lbnRzLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gIH1cbiAgZGlzcGxheUxhc3RUYWIoKTtcbiAgc2V0RXZlbnQobGlua3MpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TGFzdFRhYigpIHtcbiAgcmVmcmVzaFRhYnMoKTtcbiAgaGlkZUFsbFRhYnMoKTtcbiAgYWxsVGFic1thbGxUYWJzLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi10YWInKTtcbn1cblxuZnVuY3Rpb24gc2V0RXZlbnQobGlua3MpIHtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdExpc3RUb0Rpc3BsYXkpKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TGlzdFRvRGlzcGxheShlKSB7XG4gIGNvbnN0IHRhcmdldEluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIHJlZnJlc2hUYWJzKCk7XG4gIGhpZGVBbGxUYWJzKCk7XG4gIGNvbnN0IHNlbGVjdGVkVGFiID0gYWxsVGFicy5maWx0ZXIoXG4gICAgKHRhYikgPT4gdGFiLmRhdGFzZXQuaW5kZXggPT09IHRhcmdldEluZGV4XG4gICk7XG4gIHNlbGVjdGVkVGFiWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi10YWInKTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaFRhYnMoKSB7XG4gIGFsbFRhYnMgPSBkb21FbGVtZW50cy5yZWZyZXNoTGlzdCgpO1xufVxuXG5mdW5jdGlvbiBoaWRlQWxsVGFicygpIHtcbiAgYWxsVGFicy5mb3JFYWNoKCh0YWIpID0+IHRhYi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tdGFiJykpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmV4dFRhYihkZWxldGVkKSB7XG4gIGNvbnN0IGluZGV4RGVsZXRlZCA9IGFsbFRhYnMuZmluZEluZGV4KFxuICAgICh0YWIpID0+IE51bWJlcih0YWIuZGF0YXNldC5pbmRleCkgPT09IE51bWJlcihkZWxldGVkKVxuICApO1xuICBhbGxUYWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgIGlmIChOdW1iZXIodGFiLmRhdGFzZXQuaW5kZXgpID09PSBOdW1iZXIoZGVsZXRlZCkgKyAxKSB7XG4gICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLXRhYicpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHJlbW92ZWQgPSBhbGxUYWJzLnNwbGljZShpbmRleERlbGV0ZWQsIDEpO1xufVxuXG5leHBvcnQgeyBnZW5lcmF0ZU5ld1RhYiwgYWxsVGFicywgZGlzcGxheU5leHRUYWIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdFBhbmVsIH0gZnJvbSAnLi9wb3BvdXRQcm9qZWN0JztcbmltcG9ydCB7IGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9kb21DYWNoZS5qcyc7XG5pbXBvcnQgeyB3b3JrIH0gZnJvbSAnLi9hZGRUYXNrJztcbmltcG9ydCB7IGNsb3NlTmV3VGFza1BhbmVsIH0gZnJvbSAnLi9nZW5lcmFsRXZlbnRzJztcblxuZG9tRWxlbWVudHMubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQcm9qZWN0UGFuZWwpO1xuZG9tRWxlbWVudHMuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdvcmspO1xuZG9tRWxlbWVudHMuY2xvc2VUYXNrUGFuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU5ld1Rhc2tQYW5lbCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=