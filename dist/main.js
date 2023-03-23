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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    box-sizing: border-box;\n    --color-one: #e3ddcb;\n    --color-two: #72716f;\n    --color-three: #793c89;\n    --color-four: #933434;\n    --color-five: #19567a;\n    --color-six: #3b8a93;\n    --color-seven: #cbb8cf;\n    --transition-one: all 0.3s ease-in-out;\n    --transition-two: all 0.1s ease-in-out;\n    height: 100%;\n}\n\nbody {\n    background-color: var(--color-one);\n    height: 100%;\n}\n\nheader {\n    background-color: var(--color-four);\n    display: grid;\n    place-content: center;\n    font-family: 'Tilt Neon', cursive;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 5px black;\n}\n\nmain {\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n}\n\n.container {\n    margin-top: 1rem;\n    height: 98%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    border-top: 2px solid black;\n    border-left: 2px solid black;\n    ;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 5px black;\n}\n\n.project-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n    border-right: 1px solid black;\n    border-radius: 1rem;\n\n}\n\n.header-project {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    transition: var(--transition-one);\n    border-bottom: 2px solid black;\n    border-radius: 1rem;\n}\n\n.header-project:hover {\n    background-color: var(--color-three);\n\n}\n\n.header-project h3 {\n    grid-column: 2 / 4;\n    font-size: 1.4rem;\n}\n\n.material-symbols-outlined {\n    justify-self: end;\n    align-self: center;\n    transition: var(--transition-two);\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.material-symbols-outlined:hover {\n    scale: 1.5;\n    color: var(--color-five);\n    cursor: grab;\n}\n\n.new-project {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    gap: 1rem;\n    grid-auto-rows: 1fr;\n}\n\n.project {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid black;\n}\n\n.title {\n    grid-column: 2 / 4;\n    transition: all 0.2s ease-in-out;\n    cursor: grab;\n}\n\n.options {\n    justify-self: end;\n}\n\n.title:hover {\n    text-decoration: underline;\n    font-size: 1.5rem;\n}\n\n.test-project {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 30vh;\n    width: 600px;\n    background-color: var(--color-seven);\n    padding: 1rem;\n    border-radius: 10px;\n    border: 5px solid var(--color-three);\n    display: none;\n}\n\n.edit-project {\n    width: 30rem;\n    height: 10rem;\n    position: absolute;\n    top: 30%;\n    left: 10%;\n    background-color: var(--color-seven);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n    border-radius: 10px;\n    border: 5px solid var(--color-three);\n}\n\n.test-project h2 {\n    display: inline;\n}\n\n.edit-project h2 {\n    align-self: center;\n    grid-row: 1 / 2;\n    margin: 0;\n}\n\n\n.close-one {\n    position: absolute;\n    right: 1rem;\n}\n\n.close-two {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.test-project form,\n.edit-project form {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    font-family: 'Tilt Neon', cursive;\n}\n\nform label {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n    cursor: pointer;\n}\n\nform input {\n    border-radius: 5px;\n    outline: none;\n    border: 2px solid var(--color-three);\n}\n\n#color {\n    border: 0;\n    padding: 0;\n}\n\n#color:hover {\n    cursor: pointer;\n}\n\nbutton {\n    font-family: 'Tilt Neon', cursive;\n    font-size: 1rem;\n    width: fit-content;\n    padding: 0.3rem 1.5rem;\n    border-radius: 15px;\n    border: 2px solid var(--color-three);\n    background-color: black;\n    color: white;\n}\n\nbutton:hover {\n    border: 2px solid var(--color-six);\n    color: var(--color-six);\n    cursor: pointer;\n}\n\n.faded {\n    opacity: 20%;\n    pointer-events: none;\n}\n\n.error {\n    display: none;\n    margin-top: 0;\n    color: var(--color-four);\n}\n\n.hidden-tab {\n    display: none;\n}\n\n.form-first {\n    grid-row: 1 / 2;\n}\n\n.form-second {\n    grid-row: 2 / 3;\n}\n\n.delete,\n.done {\n    grid-row: 3 / 4;\n}\n\n.list-container {\n    background-color: var(--color-six);\n    grid-column: 2 / 3;\n    padding: 2rem;\n    border-radius: 1rem;\n    border-left: 1px solid black;\n    position: relative;\n}\n\n.list-header {\n    display: flex;\n}\n\n.list-header h2 {\n    flex: 1;\n    margin-top: 0;\n    font-family: 'Tilt Neon', cursive;\n}\n\n.welcome {\n    font-size: 1.5rem;\n    font-weight: 600;\n    font-family: 'Tilt Neon', cursive;\n}\n\n.todo {\n    border: 2px solid black;\n    border-radius: 1rem;\n    padding: 1rem;\n    display: flex;\n    align-items: center;\n    position: relative;\n    margin-top: 1rem;\n}\n\n.todo a {\n    font-size: 1.3rem;\n    flex: 1;\n}\n\n.todo a:hover {\n    color: var(--color-three);\n    text-decoration: underline;\n}\n\n.todo input {\n    width: 1.5rem;\n    height: 1.5rem;\n    margin-right: 1.5rem;\n}\n\n\n.todo-options {\n    justify-self: flex-end;\n}\n\n.todo-options:hover {\n    color: var(--color-four);\n}\n\n.todo-description {\n    width: 100%;\n    height: 15rem;\n    background-color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 110%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    gap: 0.3rem;\n    border-radius: 5px;\n    justify-items: center;\n    padding: 0.3rem 0;\n    z-index: 4;\n}\n\n.todo-description h5 {\n    margin: 0.3rem;\n    font-size: 1.2rem;\n}\n\n.todo-description p {\n    font-size: 1rem;\n    width: 45ch;\n    font-weight: 400;\n    border: 1px solid black;\n    border-radius: 5px;\n    margin: 0;\n    grid-column: 1 / 2;\n}\n\n.hidden {\n    display: none;\n}\n\n.new-task-panel {\n    background-color: #ffffff;\n    width: 80%;\n    height: 18rem;\n    position: absolute;\n    top: 20%;\n    left: 12%;\n    border-radius: 1rem;\n    border: 5px solid var(--color-three);\n    z-index: 5;\n}\n\n.new-task-panel form {\n    height: 80%;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: repeat(6, 1fr);\n    gap: 1rem;\n    align-items: start;\n    padding: 1rem;\n}\n\n.new-task-panel form label {\n    text-decoration: underline;\n}\n\n.name-cont {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.close-three {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.color-cont {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.date-cont {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n}\n\n.comment-cont {\n    grid-column: 1 / 2;\n    grid-row: 4 / 5;\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n#create-task {\n    grid-column: 2 / 3;\n    grid-row: 4 / 5;\n    margin-top: 1rem;\n    justify-self: center;\n    align-self: end;\n}\n\n.task-error {\n    grid-column: 2 / 3;\n    grid-row: 5 / 6;\n    font-size: 1rem;\n}\n\n.time {\n    margin-left: 2rem;\n    flex: 1;\n    justify-self: flex-start;\n    align-self: center;\n    font-size: 1.2rem;\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,oBAAoB;IACpB,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;IACrB,oBAAoB;IACpB,sBAAsB;IACtB,sCAAsC;IACtC,sCAAsC;IACtC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,qBAAqB;IACrB,iCAAiC;IACjC,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,4BAA4B;;IAE5B,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,SAAS;IACT,6BAA6B;IAC7B,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,iCAAiC;IACjC,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;;AAExC;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,iCAAiC;IACjC;;;;;AAKJ;;AAEA;IACI,UAAU;IACV,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,kCAAkC;IAClC,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,OAAO;IACP,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,oCAAoC;IACpC,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,SAAS;AACb;;;AAGA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,kCAAkC;IAClC,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;IACpC,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,OAAO;AACX;;AAEA;IACI,yBAAyB;IACzB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,oBAAoB;AACxB;;;AAGA;IACI,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,kCAAkC;IAClC,WAAW;IACX,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;IAClB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,UAAU;IACV,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,mBAAmB;IACnB,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,kCAAkC;IAClC,SAAS;IACT,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,OAAO;IACP,wBAAwB;IACxB,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":[":root {\n    box-sizing: border-box;\n    --color-one: #e3ddcb;\n    --color-two: #72716f;\n    --color-three: #793c89;\n    --color-four: #933434;\n    --color-five: #19567a;\n    --color-six: #3b8a93;\n    --color-seven: #cbb8cf;\n    --transition-one: all 0.3s ease-in-out;\n    --transition-two: all 0.1s ease-in-out;\n    height: 100%;\n}\n\nbody {\n    background-color: var(--color-one);\n    height: 100%;\n}\n\nheader {\n    background-color: var(--color-four);\n    display: grid;\n    place-content: center;\n    font-family: 'Tilt Neon', cursive;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 5px black;\n}\n\nmain {\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n}\n\n.container {\n    margin-top: 1rem;\n    height: 98%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    border-top: 2px solid black;\n    border-left: 2px solid black;\n    ;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 5px black;\n}\n\n.project-container {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 1rem;\n    border-right: 1px solid black;\n    border-radius: 1rem;\n\n}\n\n.header-project {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    transition: var(--transition-one);\n    border-bottom: 2px solid black;\n    border-radius: 1rem;\n}\n\n.header-project:hover {\n    background-color: var(--color-three);\n\n}\n\n.header-project h3 {\n    grid-column: 2 / 4;\n    font-size: 1.4rem;\n}\n\n.material-symbols-outlined {\n    justify-self: end;\n    align-self: center;\n    transition: var(--transition-two);\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.material-symbols-outlined:hover {\n    scale: 1.5;\n    color: var(--color-five);\n    cursor: grab;\n}\n\n.new-project {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    gap: 1rem;\n    grid-auto-rows: 1fr;\n}\n\n.project {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid black;\n}\n\n.title {\n    grid-column: 2 / 4;\n    transition: all 0.2s ease-in-out;\n    cursor: grab;\n}\n\n.options {\n    justify-self: end;\n}\n\n.title:hover {\n    text-decoration: underline;\n    font-size: 1.5rem;\n}\n\n.test-project {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 30vh;\n    width: 600px;\n    background-color: var(--color-seven);\n    padding: 1rem;\n    border-radius: 10px;\n    border: 5px solid var(--color-three);\n    display: none;\n}\n\n.edit-project {\n    width: 30rem;\n    height: 10rem;\n    position: absolute;\n    top: 30%;\n    left: 10%;\n    background-color: var(--color-seven);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n    border-radius: 10px;\n    border: 5px solid var(--color-three);\n}\n\n.test-project h2 {\n    display: inline;\n}\n\n.edit-project h2 {\n    align-self: center;\n    grid-row: 1 / 2;\n    margin: 0;\n}\n\n\n.close-one {\n    position: absolute;\n    right: 1rem;\n}\n\n.close-two {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.test-project form,\n.edit-project form {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    margin-top: 1rem;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    font-family: 'Tilt Neon', cursive;\n}\n\nform label {\n    font-size: 1.2rem;\n    margin-right: 1rem;\n    cursor: pointer;\n}\n\nform input {\n    border-radius: 5px;\n    outline: none;\n    border: 2px solid var(--color-three);\n}\n\n#color {\n    border: 0;\n    padding: 0;\n}\n\n#color:hover {\n    cursor: pointer;\n}\n\nbutton {\n    font-family: 'Tilt Neon', cursive;\n    font-size: 1rem;\n    width: fit-content;\n    padding: 0.3rem 1.5rem;\n    border-radius: 15px;\n    border: 2px solid var(--color-three);\n    background-color: black;\n    color: white;\n}\n\nbutton:hover {\n    border: 2px solid var(--color-six);\n    color: var(--color-six);\n    cursor: pointer;\n}\n\n.faded {\n    opacity: 20%;\n    pointer-events: none;\n}\n\n.error {\n    display: none;\n    margin-top: 0;\n    color: var(--color-four);\n}\n\n.hidden-tab {\n    display: none;\n}\n\n.form-first {\n    grid-row: 1 / 2;\n}\n\n.form-second {\n    grid-row: 2 / 3;\n}\n\n.delete,\n.done {\n    grid-row: 3 / 4;\n}\n\n.list-container {\n    background-color: var(--color-six);\n    grid-column: 2 / 3;\n    padding: 2rem;\n    border-radius: 1rem;\n    border-left: 1px solid black;\n    position: relative;\n}\n\n.list-header {\n    display: flex;\n}\n\n.list-header h2 {\n    flex: 1;\n    margin-top: 0;\n    font-family: 'Tilt Neon', cursive;\n}\n\n.welcome {\n    font-size: 1.5rem;\n    font-weight: 600;\n    font-family: 'Tilt Neon', cursive;\n}\n\n.todo {\n    border: 2px solid black;\n    border-radius: 1rem;\n    padding: 1rem;\n    display: flex;\n    align-items: center;\n    position: relative;\n    margin-top: 1rem;\n}\n\n.todo a {\n    font-size: 1.3rem;\n    flex: 1;\n}\n\n.todo a:hover {\n    color: var(--color-three);\n    text-decoration: underline;\n}\n\n.todo input {\n    width: 1.5rem;\n    height: 1.5rem;\n    margin-right: 1.5rem;\n}\n\n\n.todo-options {\n    justify-self: flex-end;\n}\n\n.todo-options:hover {\n    color: var(--color-four);\n}\n\n.todo-description {\n    width: 100%;\n    height: 15rem;\n    background-color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 110%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    gap: 0.3rem;\n    border-radius: 5px;\n    justify-items: center;\n    padding: 0.3rem 0;\n    z-index: 4;\n}\n\n.todo-description h5 {\n    margin: 0.3rem;\n    font-size: 1.2rem;\n}\n\n.todo-description p {\n    font-size: 1rem;\n    width: 45ch;\n    font-weight: 400;\n    border: 1px solid black;\n    border-radius: 5px;\n    margin: 0;\n    grid-column: 1 / 2;\n}\n\n.hidden {\n    display: none;\n}\n\n.new-task-panel {\n    background-color: #ffffff;\n    width: 80%;\n    height: 18rem;\n    position: absolute;\n    top: 20%;\n    left: 12%;\n    border-radius: 1rem;\n    border: 5px solid var(--color-three);\n    z-index: 5;\n}\n\n.new-task-panel form {\n    height: 80%;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: repeat(6, 1fr);\n    gap: 1rem;\n    align-items: start;\n    padding: 1rem;\n}\n\n.new-task-panel form label {\n    text-decoration: underline;\n}\n\n.name-cont {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.close-three {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.color-cont {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.date-cont {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n}\n\n.comment-cont {\n    grid-column: 1 / 2;\n    grid-row: 4 / 5;\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n#create-task {\n    grid-column: 2 / 3;\n    grid-row: 4 / 5;\n    margin-top: 1rem;\n    justify-self: center;\n    align-self: end;\n}\n\n.task-error {\n    grid-column: 2 / 3;\n    grid-row: 5 / 6;\n    font-size: 1rem;\n}\n\n.time {\n    margin-left: 2rem;\n    flex: 1;\n    justify-self: flex-start;\n    align-self: center;\n    font-size: 1.2rem;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "displayNewTaskPanel": () => (/* binding */ displayNewTaskPanel),
/* harmony export */   "getTaskValues": () => (/* binding */ getTaskValues)
/* harmony export */ });
/* harmony import */ var _domCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCache */ "./src/domCache.js");
/* harmony import */ var _generalEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalEvents */ "./src/generalEvents.js");



const arrayOfTask = [];
let count = 0;

function displayNewTaskPanel(e) {
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.projectsContainer.classList.add('faded');
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.taskPanel.classList.remove('hidden');
  setDate();
  e.currentTarget.style.pointerEvents = 'none';
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.createTaskButton.tab = e.target.parentNode.parentNode;
}

function setDate() {
  const date = (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.getTodayDate)();
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.taskEnd.setAttribute('value', date);
  _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.taskEnd.setAttribute('min', date);
}

function getTaskValues(e) {
  e.preventDefault();
  const taskNameValue = _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.taskName.value;
  const taskColorValue = _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.taskColor.value;
  const taskDateValue = _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.taskEnd.value;
  const taskCommentValue = _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.taskComment.value;
  const tabContainer = e.target.tab;
  createNewTask(
    taskNameValue,
    taskColorValue,
    taskDateValue,
    taskCommentValue,
    tabContainer
  );
}

function createNewTask(name, color, date, comment, tab) {
  if (name === '') {
    _domCache__WEBPACK_IMPORTED_MODULE_0__.domElements.taskError.style.display = 'block';
  } else {
    const newTask = new Task(name, color, date, comment);
    newTask.setId();
    arrayOfTask.push(newTask);
    displayTask(newTask, tab);
  }
}

function displayTask(task, tab) {
  const container = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeDiv();
  const checkbox = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeCheckbox();
  const name = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeA();
  const time = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeSpan();
  const options = _domCache__WEBPACK_IMPORTED_MODULE_0__.CreateDom.makeOptionsSVG();

  container.classList.add('todo');
  name.textContent = task.name;
  name.style.color = task.color;
  name.style.flex = '0';
  name.setAttribute('href', '#');
  time.textContent = `Complete before "${task.date}"`;
  time.classList.add('time');
  options.classList.add('todo-options');

  container.appendChild(checkbox);
  container.appendChild(name);
  container.appendChild(time);
  container.appendChild(options);
  tab.appendChild(container);

  (0,_generalEvents__WEBPACK_IMPORTED_MODULE_1__.closeNewTaskPanel)();
}

class Task {
  constructor(name, color, date, comment) {
    this.name = name;
    this.color = color;
    this.date = date;
    this.comment = comment;
  }

  setId() {
    this.id = count;
    count += 1;
  }
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
  const createTaskButton = document.querySelector('#create-task');
  const taskName = document.querySelector('#task-name');
  const taskColor = document.querySelector('#task-color');
  const taskEnd = document.querySelector('#task-end');
  const taskComment = document.querySelector('#task-comment');
  const taskError = document.querySelector('.task-error');
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
    createTaskButton,
    taskColor,
    taskComment,
    taskEnd,
    taskName,
    taskError,
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
  makeCheckbox() {
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    return input;
  },
  makeSpan() {
    const span = document.createElement('span');
    return span;
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
/* harmony export */   "getTodayDate": () => (/* binding */ getTodayDate),
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

function getTodayDate() {
  const now = new Date();
  const day = `0${now.getDate()}`.slice(-2);
  const month = `0${now.getMonth() + 1}`.slice(-2);

  const today = `${now.getFullYear()}-${month}-${day}`;
  return today;
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
_domCache_js__WEBPACK_IMPORTED_MODULE_2__.domElements.addTask.addEventListener('click', _addTask__WEBPACK_IMPORTED_MODULE_3__.displayNewTaskPanel);
_domCache_js__WEBPACK_IMPORTED_MODULE_2__.domElements.closeTaskPanel.addEventListener('click', _generalEvents__WEBPACK_IMPORTED_MODULE_4__.closeNewTaskPanel);
_domCache_js__WEBPACK_IMPORTED_MODULE_2__.domElements.createTaskButton.addEventListener('click', _addTask__WEBPACK_IMPORTED_MODULE_3__.getTaskValues);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFB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REFBbUI7QUFDakUscUZBQTJDLFVBQVUsNkRBQWlCO0FBQ3RFLHVGQUE2QyxVQUFVLG1EQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dlbmVyYWxFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BvcG91dFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RPcHRpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1jb2xvci1vbmU6ICNlM2RkY2I7XFxuICAgIC0tY29sb3ItdHdvOiAjNzI3MTZmO1xcbiAgICAtLWNvbG9yLXRocmVlOiAjNzkzYzg5O1xcbiAgICAtLWNvbG9yLWZvdXI6ICM5MzM0MzQ7XFxuICAgIC0tY29sb3ItZml2ZTogIzE5NTY3YTtcXG4gICAgLS1jb2xvci1zaXg6ICMzYjhhOTM7XFxuICAgIC0tY29sb3Itc2V2ZW46ICNjYmI4Y2Y7XFxuICAgIC0tdHJhbnNpdGlvbi1vbmU6IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAtLXRyYW5zaXRpb24tdHdvOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDk4JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxuICAgIDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG5cXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1vbmUpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5oZWFkZXItcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG5cXG59XFxuXFxuLmhlYWRlci1wcm9qZWN0IGgzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXR3byk7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAgICAgJ0ZJTEwnIDAsXFxuICAgICAgICAnd2dodCcgNDAwLFxcbiAgICAgICAgJ0dSQUQnIDAsXFxuICAgICAgICAnb3BzeicgNDhcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIge1xcbiAgICBzY2FsZTogMS41O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZml2ZSk7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRpdGxlOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDMwdmg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2V2ZW4pO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2V2ZW4pO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCBoMiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdCBoMiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcbi5jbG9zZS1vbmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uY2xvc2UtdHdvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi50ZXN0LXByb2plY3QgZm9ybSxcXG4uZWRpdC1wcm9qZWN0IGZvcm0ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG5mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbiNjb2xvciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbG9yOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNpeCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zaXgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYWRlZCB7XFxuICAgIG9wYWNpdHk6IDIwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG59XFxuXFxuLmhpZGRlbi10YWIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS1maXJzdCB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmZvcm0tc2Vjb25kIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uZGVsZXRlLFxcbi5kb25lIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaXgpO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpc3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxpc3QtaGVhZGVyIGgyIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG4ud2VsY29tZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ1RpbHQgTmVvbicsIGN1cnNpdmU7XFxufVxcblxcbi50b2RvIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnRvZG8gYSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udG9kbyBhOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50b2RvIGlucHV0IHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG5cXG5cXG4udG9kby1vcHRpb25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRvZG8tb3B0aW9uczpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDExMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ2FwOiAwLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMDtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24gaDUge1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiA0NWNoO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uZXctdGFzay1wYW5lbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMThyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDEyJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICB6LWluZGV4OiA1O1xcbn1cXG5cXG4ubmV3LXRhc2stcGFuZWwgZm9ybSB7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubmV3LXRhc2stcGFuZWwgZm9ybSBsYWJlbCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubmFtZS1jb250IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5jbG9zZS10aHJlZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uY29sb3ItY29udCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uZGF0ZS1jb250IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5jb21tZW50LWNvbnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG59XFxuXFxuI2NyZWF0ZS10YXNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi50YXNrLWVycm9yIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogNSAvIDY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRpbWUge1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgZmxleDogMTtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxp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SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tY29sb3Itb25lOiAjZTNkZGNiO1xcbiAgICAtLWNvbG9yLXR3bzogIzcyNzE2ZjtcXG4gICAgLS1jb2xvci10aHJlZTogIzc5M2M4OTtcXG4gICAgLS1jb2xvci1mb3VyOiAjOTMzNDM0O1xcbiAgICAtLWNvbG9yLWZpdmU6ICMxOTU2N2E7XFxuICAgIC0tY29sb3Itc2l4OiAjM2I4YTkzO1xcbiAgICAtLWNvbG9yLXNldmVuOiAjY2JiOGNmO1xcbiAgICAtLXRyYW5zaXRpb24tb25lOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgLS10cmFuc2l0aW9uLXR3bzogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBibGFjaztcXG59XFxuXFxubWFpbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgaGVpZ2h0OiA5OCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFxufVxcblxcbi5oZWFkZXItcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tb25lKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaGVhZGVyLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuXFxufVxcblxcbi5oZWFkZXItcHJvamVjdCBoMyB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10d28pO1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICAgICdGSUxMJyAwLFxcbiAgICAgICAgJ3dnaHQnIDQwMCxcXG4gICAgICAgICdHUkFEJyAwLFxcbiAgICAgICAgJ29wc3onIDQ4XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuNTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWZpdmUpO1xcbiAgICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi50aXRsZTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRlc3QtcHJvamVjdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAzMHZoO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNldmVuKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNldmVuKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcblxcbi50ZXN0LXByb2plY3QgaDIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5lZGl0LXByb2plY3QgaDIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG4uY2xvc2Utb25lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLmNsb3NlLXR3byB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4udGVzdC1wcm9qZWN0IGZvcm0sXFxuLmVkaXQtcHJvamVjdCBmb3JtIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG59XFxuXFxuZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG5cXG4jY29sb3Ige1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb2xvcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMC4zcmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zaXgpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2l4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmFkZWQge1xcbiAgICBvcGFjaXR5OiAyMCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxufVxcblxcbi5oaWRkZW4tdGFiIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tZmlyc3Qge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5mb3JtLXNlY29uZCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmRlbGV0ZSxcXG4uZG9uZSB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2l4KTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5saXN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saXN0LWhlYWRlciBoMiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGlsdCBOZW9uJywgY3Vyc2l2ZTtcXG59XFxuXFxuLndlbGNvbWUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdUaWx0IE5lb24nLCBjdXJzaXZlO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi50b2RvIGEge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRvZG8gYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuXFxuLnRvZG8tb3B0aW9ucyB7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi50b2RvLW9wdGlvbnM6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAxMTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdhcDogMC4zcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4zcmVtIDA7XFxuICAgIHotaW5kZXg6IDQ7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIGg1IHtcXG4gICAgbWFyZ2luOiAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogNDVjaDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmV3LXRhc2stcGFuZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDE4cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAxMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuLm5ldy10YXNrLXBhbmVsIGZvcm0ge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCAxZnIpO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm5ldy10YXNrLXBhbmVsIGZvcm0gbGFiZWwge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm5hbWUtY29udCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uY2xvc2UtdGhyZWUge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmNvbG9yLWNvbnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmRhdGUtY29udCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uY29tbWVudC1jb250IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxufVxcblxcbiNjcmVhdGUtdGFzayB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4udGFzay1lcnJvciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDUgLyA2O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50aW1lIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENyZWF0ZURvbSwgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlJztcbmltcG9ydCB7IGNsb3NlTmV3VGFza1BhbmVsLCBnZXRUb2RheURhdGUgfSBmcm9tICcuL2dlbmVyYWxFdmVudHMnO1xuXG5jb25zdCBhcnJheU9mVGFzayA9IFtdO1xubGV0IGNvdW50ID0gMDtcblxuZnVuY3Rpb24gZGlzcGxheU5ld1Rhc2tQYW5lbChlKSB7XG4gIGRvbUVsZW1lbnRzLnByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGVkJyk7XG4gIGRvbUVsZW1lbnRzLnRhc2tQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgc2V0RGF0ZSgpO1xuICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgZG9tRWxlbWVudHMuY3JlYXRlVGFza0J1dHRvbi50YWIgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG59XG5cbmZ1bmN0aW9uIHNldERhdGUoKSB7XG4gIGNvbnN0IGRhdGUgPSBnZXRUb2RheURhdGUoKTtcbiAgZG9tRWxlbWVudHMudGFza0VuZC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0ZSk7XG4gIGRvbUVsZW1lbnRzLnRhc2tFbmQuc2V0QXR0cmlidXRlKCdtaW4nLCBkYXRlKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza1ZhbHVlcyhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGFza05hbWVWYWx1ZSA9IGRvbUVsZW1lbnRzLnRhc2tOYW1lLnZhbHVlO1xuICBjb25zdCB0YXNrQ29sb3JWYWx1ZSA9IGRvbUVsZW1lbnRzLnRhc2tDb2xvci52YWx1ZTtcbiAgY29uc3QgdGFza0RhdGVWYWx1ZSA9IGRvbUVsZW1lbnRzLnRhc2tFbmQudmFsdWU7XG4gIGNvbnN0IHRhc2tDb21tZW50VmFsdWUgPSBkb21FbGVtZW50cy50YXNrQ29tbWVudC52YWx1ZTtcbiAgY29uc3QgdGFiQ29udGFpbmVyID0gZS50YXJnZXQudGFiO1xuICBjcmVhdGVOZXdUYXNrKFxuICAgIHRhc2tOYW1lVmFsdWUsXG4gICAgdGFza0NvbG9yVmFsdWUsXG4gICAgdGFza0RhdGVWYWx1ZSxcbiAgICB0YXNrQ29tbWVudFZhbHVlLFxuICAgIHRhYkNvbnRhaW5lclxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKG5hbWUsIGNvbG9yLCBkYXRlLCBjb21tZW50LCB0YWIpIHtcbiAgaWYgKG5hbWUgPT09ICcnKSB7XG4gICAgZG9tRWxlbWVudHMudGFza0Vycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhuYW1lLCBjb2xvciwgZGF0ZSwgY29tbWVudCk7XG4gICAgbmV3VGFzay5zZXRJZCgpO1xuICAgIGFycmF5T2ZUYXNrLnB1c2gobmV3VGFzayk7XG4gICAgZGlzcGxheVRhc2sobmV3VGFzaywgdGFiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrLCB0YWIpIHtcbiAgY29uc3QgY29udGFpbmVyID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgY29uc3QgY2hlY2tib3ggPSBDcmVhdGVEb20ubWFrZUNoZWNrYm94KCk7XG4gIGNvbnN0IG5hbWUgPSBDcmVhdGVEb20ubWFrZUEoKTtcbiAgY29uc3QgdGltZSA9IENyZWF0ZURvbS5tYWtlU3BhbigpO1xuICBjb25zdCBvcHRpb25zID0gQ3JlYXRlRG9tLm1ha2VPcHRpb25zU1ZHKCk7XG5cbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgbmFtZS5zdHlsZS5jb2xvciA9IHRhc2suY29sb3I7XG4gIG5hbWUuc3R5bGUuZmxleCA9ICcwJztcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuICB0aW1lLnRleHRDb250ZW50ID0gYENvbXBsZXRlIGJlZm9yZSBcIiR7dGFzay5kYXRlfVwiYDtcbiAgdGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XG4gIG9wdGlvbnMuY2xhc3NMaXN0LmFkZCgndG9kby1vcHRpb25zJyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGltZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25zKTtcbiAgdGFiLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY2xvc2VOZXdUYXNrUGFuZWwoKTtcbn1cblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGNvbG9yLCBkYXRlLCBjb21tZW50KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLmNvbW1lbnQgPSBjb21tZW50O1xuICB9XG5cbiAgc2V0SWQoKSB7XG4gICAgdGhpcy5pZCA9IGNvdW50O1xuICAgIGNvdW50ICs9IDE7XG4gIH1cbn1cblxuZXhwb3J0IHsgZGlzcGxheU5ld1Rhc2tQYW5lbCwgZ2V0VGFza1ZhbHVlcyB9O1xuIiwiZnVuY3Rpb24gZG9tQ2FjaGUoKSB7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnN0IGhpZGRlbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW4tY29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IGhpZGRlblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdC1wcm9qZWN0Jyk7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cycpO1xuICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKTtcbiAgY29uc3QgY2xvc2VOZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW9uZScpO1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbiAgY29uc3QgZ2VuZXJhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5lcmFsJyk7XG4gIGNvbnN0IHByb09wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvLW9wdGlvbnMtYnV0dG9uJyk7XG4gIGZ1bmN0aW9uIHJlZnJlc2hMaXN0KCkge1xuICAgIGNvbnN0IGxpc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IFsuLi5saXN0Tm9kZV07XG4gICAgcmV0dXJuIGxpc3RDb250YWluZXI7XG4gIH1cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbG9yJyk7XG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpO1xuICBjb25zdCB0YXNrUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stcGFuZWwnKTtcbiAgY29uc3QgY2xvc2VUYXNrUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtdGhyZWUnKTtcbiAgY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdGFzaycpO1xuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKTtcbiAgY29uc3QgdGFza0NvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stY29sb3InKTtcbiAgY29uc3QgdGFza0VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWVuZCcpO1xuICBjb25zdCB0YXNrQ29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWNvbW1lbnQnKTtcbiAgY29uc3QgdGFza0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZXJyb3InKTtcbiAgcmV0dXJuIHtcbiAgICBoaWRkZW5Qcm9qZWN0LFxuICAgIGhpZGRlbkNvbnRhaW5lcixcbiAgICBuZXdQcm9qZWN0QnV0dG9uLFxuICAgIG1haW5Db250YWluZXIsXG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBjbG9zZU5ld1Byb2plY3QsXG4gICAgcHJvamVjdHNDb250YWluZXIsXG4gICAgbmV3UHJvamVjdENvbnRhaW5lcixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgZ2VuZXJhbCxcbiAgICByZWZyZXNoTGlzdCxcbiAgICBuYW1lLFxuICAgIGNvbG9yLFxuICAgIHByb09wdGlvbnMsXG4gICAgYWRkVGFzayxcbiAgICB0YXNrUGFuZWwsXG4gICAgY2xvc2VUYXNrUGFuZWwsXG4gICAgY3JlYXRlVGFza0J1dHRvbixcbiAgICB0YXNrQ29sb3IsXG4gICAgdGFza0NvbW1lbnQsXG4gICAgdGFza0VuZCxcbiAgICB0YXNrTmFtZSxcbiAgICB0YXNrRXJyb3IsXG4gIH07XG59XG5cbmNvbnN0IGRvbUVsZW1lbnRzID0gZG9tQ2FjaGUoKTtcblxuY29uc3QgQ3JlYXRlRG9tID0ge1xuICBtYWtlRGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldHVybiBkaXY7XG4gIH0sXG4gIG1ha2VBKCkge1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcmV0dXJuIGE7XG4gIH0sXG4gIG1ha2VIMigpIHtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcmV0dXJuIGgyO1xuICB9LFxuICBtYWtlT3B0aW9uc1NWRygpIHtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgICBzdmcuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycpO1xuICAgIHN2Zy50ZXh0Q29udGVudCA9ICdtb3JlX3ZlcnQnO1xuICAgIHJldHVybiBzdmc7XG4gIH0sXG4gIG1ha2VDbG9zZVNWRygpIHtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgICBzdmcuY2xhc3NMaXN0LmFkZCgnY2xvc2UtdHdvJyk7XG4gICAgc3ZnLnRleHRDb250ZW50ID0gJ2Nsb3NlJztcbiAgICByZXR1cm4gc3ZnO1xuICB9LFxuICBtYWtlQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJldHVybiBidXR0b247XG4gIH0sXG4gIG1ha2VGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGNvbG9yTGFiZWwgPSBuYW1lTGFiZWwuY2xvbmVOb2RlKCk7XG4gICAgY29uc3QgY29sb3JJbnB1dCA9IG5hbWVJbnB1dC5jbG9uZU5vZGUoKTtcbiAgICBjb25zdCBkb25lID0gdGhpcy5tYWtlQnV0dG9uKCk7XG4gICAgY29uc3QgZmlyc3REaXYgPSB0aGlzLm1ha2VEaXYoKTtcbiAgICBjb25zdCBzZWNvbmREaXYgPSB0aGlzLm1ha2VEaXYoKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJyMnKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgICBjb2xvckxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NvbG9yJyk7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBjb2xvcklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjb2xvcicpO1xuICAgIGNvbG9ySW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NvbG9yJyk7XG4gICAgY29sb3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbG9yJyk7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ0NoYW5nZSBuYW1lJztcbiAgICBjb2xvckxhYmVsLnRleHRDb250ZW50ID0gJ0NoYW5nZSBjb2xvcic7XG4gICAgZG9uZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgZG9uZS50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICBkb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICBmaXJzdERpdi5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGZpcnN0RGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgc2Vjb25kRGl2LmFwcGVuZENoaWxkKGNvbG9yTGFiZWwpO1xuICAgIHNlY29uZERpdi5hcHBlbmRDaGlsZChjb2xvcklucHV0KTtcbiAgICBmaXJzdERpdi5jbGFzc0xpc3QuYWRkKCdmb3JtLWZpcnN0Jyk7XG4gICAgc2Vjb25kRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2Vjb25kJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaXJzdERpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZWNvbmREaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9uZSk7XG4gICAgcmV0dXJuIGZvcm07XG4gIH0sXG4gIG1ha2VEZWxldGUoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSxcbiAgbWFrZU5ld1Rhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHJldHVybiBidXR0b247XG4gIH0sXG4gIG1ha2VDaGVja2JveCgpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9LFxuICBtYWtlU3BhbigpIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHJldHVybiBzcGFuO1xuICB9LFxufTtcblxuZXhwb3J0IHsgZG9tRWxlbWVudHMsIENyZWF0ZURvbSB9O1xuIiwiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlJztcblxuZnVuY3Rpb24gYWRkQ2xvc2VFdmVudEZvclByb2plY3QoZWxlbSkge1xuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0c1BvcG91dHMpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RzUG9wb3V0cyhlKSB7XG4gIHRvZ2dsZUZhZGVkRm9yUHJvamVjdCgpO1xuICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGYWRlZEZvclByb2plY3QoZSkge1xuICBkb21FbGVtZW50cy5tYWluQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2ZhZGVkJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTmV3VGFza1BhbmVsKGUpIHtcbiAgZG9tRWxlbWVudHMucHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZWQnKTtcbiAgZG9tRWxlbWVudHMudGFza1BhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBkb21FbGVtZW50cy5hZGRUYXNrLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbn1cblxuZnVuY3Rpb24gZ2V0VG9kYXlEYXRlKCkge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkYXkgPSBgMCR7bm93LmdldERhdGUoKX1gLnNsaWNlKC0yKTtcbiAgY29uc3QgbW9udGggPSBgMCR7bm93LmdldE1vbnRoKCkgKyAxfWAuc2xpY2UoLTIpO1xuXG4gIGNvbnN0IHRvZGF5ID0gYCR7bm93LmdldEZ1bGxZZWFyKCl9LSR7bW9udGh9LSR7ZGF5fWA7XG4gIHJldHVybiB0b2RheTtcbn1cblxuZXhwb3J0IHtcbiAgdG9nZ2xlRmFkZWRGb3JQcm9qZWN0LFxuICBhZGRDbG9zZUV2ZW50Rm9yUHJvamVjdCxcbiAgY2xvc2VQcm9qZWN0c1BvcG91dHMsXG4gIGNsb3NlTmV3VGFza1BhbmVsLFxuICBnZXRUb2RheURhdGUsXG59O1xuIiwiaW1wb3J0IHsgZG9tRWxlbWVudHMsIENyZWF0ZURvbSB9IGZyb20gJy4vZG9tQ2FjaGUuanMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVOZXdUYWIgfSBmcm9tICcuL3RhYnMuanMnO1xuaW1wb3J0IHtcbiAgYWRkQ2xvc2VFdmVudEZvclByb2plY3QsXG4gIHRvZ2dsZUZhZGVkRm9yUHJvamVjdCxcbn0gZnJvbSAnLi9nZW5lcmFsRXZlbnRzLmpzJztcbmltcG9ydCB7IGRpc3BsYXlPcHRpb25zIH0gZnJvbSAnLi9wcm9qZWN0T3B0aW9ucyc7XG5cbmNvbnN0IGxpbmtzID0gW107XG5saW5rcy5wdXNoKGRvbUVsZW1lbnRzLmdlbmVyYWwpO1xubGV0IGNvdW50ID0gMDtcblxuY29uc3QgcHJvamVjdEFycmF5ID0gW107XG5cbmNsYXNzIENyZWF0ZVByb2plY3RPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBjb2xvcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgc2V0SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleFNldCA9IGNvdW50O1xuICAgIGNvdW50ICs9IDE7XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdE9iamVjdCgnR2VuZXJhbCcsICdibGFjaycpO1xucHJvamVjdEFycmF5LnB1c2goZGVmYXVsdFByb2plY3QpO1xuZGVmYXVsdFByb2plY3Quc2V0SW5kZXgoKTtcbmRvbUVsZW1lbnRzLmNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRWYWx1ZXMpO1xuYWRkQ2xvc2VFdmVudEZvclByb2plY3QoZG9tRWxlbWVudHMuY2xvc2VOZXdQcm9qZWN0KTtcbmRvbUVsZW1lbnRzLnByb09wdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5T3B0aW9ucyk7XG5cbmZ1bmN0aW9uIGhhbmRkbGVMaW5rcyhkaXYpIHtcbiAgbGlua3MucHVzaChkaXYpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXMoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3RDcmVhdGVkID0gaGFuZGRsZU5ld1Byb2plY3QoKTtcbiAgYWRkUHJvamVjdChwcm9qZWN0Q3JlYXRlZCk7XG4gIGRvbUVsZW1lbnRzLm5hbWUudmFsdWUgPSAnJztcbiAgZG9tRWxlbWVudHMuY29sb3IudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gaGFuZGRsZU5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdE9iamVjdChcbiAgICBkb21FbGVtZW50cy5uYW1lLnZhbHVlLFxuICAgIGRvbUVsZW1lbnRzLmNvbG9yLnZhbHVlXG4gICk7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICBuZXdQcm9qZWN0LnNldEluZGV4KCk7XG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RDcmVhdGVkKSB7XG4gIGlmIChwcm9qZWN0Q3JlYXRlZC5uYW1lID09PSAnJykge1xuICAgIGRvbUVsZW1lbnRzLmVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgY29uc3QgYSA9IENyZWF0ZURvbS5tYWtlQSgpO1xuICBjb25zdCBzdmcgPSBDcmVhdGVEb20ubWFrZU9wdGlvbnNTVkcoKTtcbiAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU9wdGlvbnMpO1xuICBhLnRleHRDb250ZW50ID0gcHJvamVjdENyZWF0ZWQubmFtZTtcbiAgYS5zdHlsZS5jb2xvciA9IHByb2plY3RDcmVhdGVkLmNvbG9yO1xuICBhLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIGRpdi5kYXRhc2V0LmluZGV4ID0gcHJvamVjdENyZWF0ZWQuaW5kZXhTZXQ7XG4gIGRpdi5hcHBlbmRDaGlsZChhKTtcbiAgZGl2LmFwcGVuZENoaWxkKHN2Zyk7XG4gIGRvbUVsZW1lbnRzLm5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgaGFuZGRsZUxpbmtzKGRpdik7XG4gIGdlbmVyYXRlTmV3VGFiKGxpbmtzLCBwcm9qZWN0Q3JlYXRlZCk7XG4gIGRlZmF1bHREaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHREaXNwbGF5KCkge1xuICBkb21FbGVtZW50cy5lcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9tRWxlbWVudHMuaGlkZGVuUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0b2dnbGVGYWRlZEZvclByb2plY3QoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RQYW5lbCgpIHtcbiAgZG9tRWxlbWVudHMuaGlkZGVuUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgdG9nZ2xlRmFkZWRGb3JQcm9qZWN0KCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0UGFuZWwsIGxpbmtzLCBwcm9qZWN0QXJyYXkgfTtcbiIsImltcG9ydCB7IENyZWF0ZURvbSwgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlJztcbmltcG9ydCB7XG4gIGFkZENsb3NlRXZlbnRGb3JQcm9qZWN0LFxuICB0b2dnbGVGYWRlZEZvclByb2plY3QsXG59IGZyb20gJy4vZ2VuZXJhbEV2ZW50cyc7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tICcuL3BvcG91dFByb2plY3QnO1xuaW1wb3J0IHsgYWxsVGFicywgZGlzcGxheU5leHRUYWIgfSBmcm9tICcuL3RhYnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU9wdGlvbnMoZSkge1xuICB0b2dnbGVGYWRlZEZvclByb2plY3QoKTtcbiAgY29uc3QgeyBpbmRleCB9ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldDtcbiAgY29uc3QgcHJvamVjdFRhcmdldCA9IGZpbmRUYXJnZXRQcm9qZWN0KGluZGV4KTtcbiAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgY29uc3QgY2xvc2VTVkcgPSBDcmVhdGVEb20ubWFrZUNsb3NlU1ZHKCk7XG4gIGNvbnN0IG5ld0Zvcm0gPSBlZGl0RGl2KGRpdiwgY2xvc2VTVkcsIHByb2plY3RUYXJnZXQpO1xuICBzZXREZWxldGUobmV3Rm9ybSwgZSwgZGl2KTtcbiAgY2hhbmdlT3B0aW9ucyhuZXdGb3JtLCBlLCBwcm9qZWN0VGFyZ2V0LCBpbmRleCwgZGl2KTtcbiAgZG9tRWxlbWVudHMuaGlkZGVuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYXJnZXRQcm9qZWN0KGluZGV4KSB7XG4gIGNvbnN0IHRhcmdldCA9IHByb2plY3RBcnJheS5maWx0ZXIoXG4gICAgKHByb2plY3QpID0+IE51bWJlcihwcm9qZWN0LmluZGV4U2V0KSA9PT0gTnVtYmVyKGluZGV4KVxuICApO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGVkaXREaXYoZGl2LCBjbG9zZVNWRywgcHJvamVjdCkge1xuICBhZGRDbG9zZUV2ZW50Rm9yUHJvamVjdChjbG9zZVNWRyk7XG4gIGNvbnN0IGgyID0gQ3JlYXRlRG9tLm1ha2VIMigpO1xuICBoMi50ZXh0Q29udGVudCA9IHByb2plY3RbMF0ubmFtZTtcbiAgY29uc3QgbmV3Rm9ybSA9IENyZWF0ZURvbS5tYWtlRm9ybSgpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBDcmVhdGVEb20ubWFrZURlbGV0ZSgpO1xuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2plY3QnKTtcbiAgbmV3Rm9ybS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBkaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY2xvc2VTVkcpO1xuICBkaXYuYXBwZW5kQ2hpbGQobmV3Rm9ybSk7XG4gIHJldHVybiBuZXdGb3JtO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VPcHRpb25zKG5vZGUsIGV2ZW50LCB0YXJnZXQsIGluZGV4LCBjb250YWluZXIpIHtcbiAgY29uc3QgbmV3TmFtZSA9IG5vZGUucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgY29uc3QgbmV3Q29sb3IgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJyNjb2xvcicpO1xuICBjb25zdCBjaGFuZ2VCdXR0b24gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBjaGFuZ2VCdXR0b24ub3JpZ2luYWxEaXYgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIGNoYW5nZUJ1dHRvbi5wb3BvdXREaXYgPSBjb250YWluZXI7XG4gIGNoYW5nZUJ1dHRvbi5vcmlnaW5hbFByb2plY3QgPSB0YXJnZXQ7XG4gIGNoYW5nZUJ1dHRvbi5vcmlnaW5hbEluZGV4ID0gaW5kZXg7XG4gIGNoYW5nZUJ1dHRvbi5uZXdDb2xvciA9IG5ld0NvbG9yO1xuICBjaGFuZ2VCdXR0b24ubmV3TmFtZSA9IG5ld05hbWU7XG4gIGNoYW5nZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVZhbHVlcyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVZhbHVlcyhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmV3VmFsdWVzID0ge1xuICAgIG5hbWU6IGUudGFyZ2V0Lm5ld05hbWUudmFsdWUsXG4gICAgY29sb3I6IGUudGFyZ2V0Lm5ld0NvbG9yLnZhbHVlLFxuICB9O1xuICBjb25zdCBhID0gZS50YXJnZXQub3JpZ2luYWxEaXYucXVlcnlTZWxlY3RvcignYScpO1xuICBjb25zdCB7IG9yaWdpbmFsSW5kZXggfSA9IGUudGFyZ2V0O1xuICB1cGRhdGVEaXYoYSwgbmV3VmFsdWVzLCBvcmlnaW5hbEluZGV4KTtcbiAgZS50YXJnZXQucG9wb3V0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpdihlbGVtLCBvYmosIGkpIHtcbiAgaWYgKG9iai5uYW1lICE9PSAnJykge1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSBvYmoubmFtZTtcbiAgICBwcm9qZWN0QXJyYXlbaV0ubmFtZSA9IG9iai5uYW1lO1xuICB9XG4gIGVsZW0uc3R5bGUuY29sb3IgPSBvYmouY29sb3I7XG4gIHByb2plY3RBcnJheVtpXS5jb2xvciA9IG9iai5jb2xvcjtcbiAgdG9nZ2xlRmFkZWRGb3JQcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHNldERlbGV0ZShub2RlLCBldmVudCwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5vZGUucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICBkZWxldGVCdXR0b24ub3JpZ2luYWxEaXYgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIGRlbGV0ZUJ1dHRvbi5wb3BvdXREaXYgPSBjb250YWluZXI7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5vcmlnaW5hbERpdi5kYXRhc2V0LmluZGV4O1xuICBlLnRhcmdldC5vcmlnaW5hbERpdi5yZW1vdmUoKTtcbiAgZS50YXJnZXQucG9wb3V0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGFsbFRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgaWYgKHRhYi5kYXRhc2V0LmluZGV4ID09PSBwcm9qZWN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHRhYlNlbGVjdGVkID0gdGFiLmRhdGFzZXQuaW5kZXg7XG4gICAgICB0YWIucmVtb3ZlKCk7XG4gICAgICBkaXNwbGF5TmV4dFRhYih0YWJTZWxlY3RlZCk7XG4gICAgfVxuICB9KTtcblxuICB0b2dnbGVGYWRlZEZvclByb2plY3QoKTtcbn1cbiIsImltcG9ydCB7IENyZWF0ZURvbSwgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUNhY2hlJztcbmltcG9ydCB7IHdvcmsgfSBmcm9tICcuL2FkZFRhc2snO1xuXG5sZXQgYWxsVGFicztcbnJlZnJlc2hUYWJzKCk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTmV3VGFiKGxpbmtzLCBwcm9qZWN0KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAobGlua3NbaV0gJiYgbGlua3MubGVuZ3RoID09PSBpICsgMSkge1xuICAgICAgY29uc3QgZGl2ID0gQ3JlYXRlRG9tLm1ha2VEaXYoKTtcbiAgICAgIGNvbnN0IGhlYWRlciA9IENyZWF0ZURvbS5tYWtlRGl2KCk7XG4gICAgICBjb25zdCBoMiA9IENyZWF0ZURvbS5tYWtlSDIoKTtcbiAgICAgIGNvbnN0IGFkZFRhc2sgPSBDcmVhdGVEb20ubWFrZU5ld1Rhc2tCdXR0b24oKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0LWNvbnRhaW5lcicpO1xuICAgICAgZGl2LmRhdGFzZXQuaW5kZXggPSBpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaGVhZGVyJyk7XG4gICAgICBoMi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3b3JrKTtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMik7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgIGRvbUVsZW1lbnRzLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gIH1cbiAgZGlzcGxheUxhc3RUYWIoKTtcbiAgc2V0RXZlbnQobGlua3MpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TGFzdFRhYigpIHtcbiAgcmVmcmVzaFRhYnMoKTtcbiAgaGlkZUFsbFRhYnMoKTtcbiAgYWxsVGFic1thbGxUYWJzLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi10YWInKTtcbn1cblxuZnVuY3Rpb24gc2V0RXZlbnQobGlua3MpIHtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdExpc3RUb0Rpc3BsYXkpKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TGlzdFRvRGlzcGxheShlKSB7XG4gIGNvbnN0IHRhcmdldEluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIHJlZnJlc2hUYWJzKCk7XG4gIGhpZGVBbGxUYWJzKCk7XG4gIGNvbnN0IHNlbGVjdGVkVGFiID0gYWxsVGFicy5maWx0ZXIoXG4gICAgKHRhYikgPT4gdGFiLmRhdGFzZXQuaW5kZXggPT09IHRhcmdldEluZGV4XG4gICk7XG4gIHNlbGVjdGVkVGFiWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi10YWInKTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaFRhYnMoKSB7XG4gIGFsbFRhYnMgPSBkb21FbGVtZW50cy5yZWZyZXNoTGlzdCgpO1xufVxuXG5mdW5jdGlvbiBoaWRlQWxsVGFicygpIHtcbiAgYWxsVGFicy5mb3JFYWNoKCh0YWIpID0+IHRhYi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tdGFiJykpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmV4dFRhYihkZWxldGVkKSB7XG4gIGNvbnN0IGluZGV4RGVsZXRlZCA9IGFsbFRhYnMuZmluZEluZGV4KFxuICAgICh0YWIpID0+IE51bWJlcih0YWIuZGF0YXNldC5pbmRleCkgPT09IE51bWJlcihkZWxldGVkKVxuICApO1xuICBhbGxUYWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgIGlmIChOdW1iZXIodGFiLmRhdGFzZXQuaW5kZXgpID09PSBOdW1iZXIoZGVsZXRlZCkgKyAxKSB7XG4gICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLXRhYicpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHJlbW92ZWQgPSBhbGxUYWJzLnNwbGljZShpbmRleERlbGV0ZWQsIDEpO1xufVxuXG5leHBvcnQgeyBnZW5lcmF0ZU5ld1RhYiwgYWxsVGFicywgZGlzcGxheU5leHRUYWIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdFBhbmVsIH0gZnJvbSAnLi9wb3BvdXRQcm9qZWN0JztcbmltcG9ydCB7IGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9kb21DYWNoZS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5TmV3VGFza1BhbmVsLCBnZXRUYXNrVmFsdWVzIH0gZnJvbSAnLi9hZGRUYXNrJztcbmltcG9ydCB7IGNsb3NlTmV3VGFza1BhbmVsIH0gZnJvbSAnLi9nZW5lcmFsRXZlbnRzJztcblxuZG9tRWxlbWVudHMubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQcm9qZWN0UGFuZWwpO1xuZG9tRWxlbWVudHMuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlOZXdUYXNrUGFuZWwpO1xuZG9tRWxlbWVudHMuY2xvc2VUYXNrUGFuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU5ld1Rhc2tQYW5lbCk7XG5kb21FbGVtZW50cy5jcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0VGFza1ZhbHVlcyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=