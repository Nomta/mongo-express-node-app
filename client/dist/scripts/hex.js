/******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {}
            /******/
        }); // Execute the module function
        /******/
        /******/ /******/ modules[moduleId].call(
            module.exports,
            module,
            module.exports,
            __webpack_require__
        ); // Flag the module as loaded
        /******/
        /******/ /******/ module.l = true; // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
        value,
        mode
    ) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (
            mode & 4 &&
            typeof value === 'object' &&
            value &&
            value.__esModule
        )
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(
                    ns,
                    key,
                    function (key) {
                        return value[key];
                    }.bind(null, key)
                );
        /******/ return ns;
        /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function (module) {
        /******/ var getter =
            module && module.__esModule
                ? /******/ function getDefault() {
                      return module['default'];
                  }
                : /******/ function getModuleExports() {
                      return module;
                  };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__(
        (__webpack_require__.s = './pages/hex/index.js')
    );
    /******/
})(
    /************************************************************************/
    /******/ {
        /***/ '../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./pages/hex/index.scss':
            /*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/Eu/Documents/node-app/node_modules/css-loader/dist/cjs.js!C:/Users/Eu/Documents/node-app/node_modules/sass-loader/dist/cjs.js!./pages/hex/index.scss ***!
  \*********************************************************************************************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // Imports
                var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
                    /*! ../../../../node_modules/css-loader/dist/runtime/api.js */ '../../node_modules/css-loader/dist/runtime/api.js'
                );
                exports = ___CSS_LOADER_API_IMPORT___(false);
                // Module
                exports.push([
                    module.i,
                    '.hex-list {\n  display: flex;\n  flex-wrap: wrap; }\n  .hex-list li {\n    width: 2.5rem;\n    height: 2.5rem;\n    margin: 10px; }\n',
                    ''
                ]);
                // Exports
                module.exports = exports;

                /***/
            },

        /***/ '../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./sass/main.scss':
            /*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/Eu/Documents/node-app/node_modules/css-loader/dist/cjs.js!C:/Users/Eu/Documents/node-app/node_modules/sass-loader/dist/cjs.js!./sass/main.scss ***!
  \***************************************************************************************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // Imports
                var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
                    /*! ../../../node_modules/css-loader/dist/runtime/api.js */ '../../node_modules/css-loader/dist/runtime/api.js'
                );
                exports = ___CSS_LOADER_API_IMPORT___(false);
                // Module
                exports.push([
                    module.i,
                    "@charset \"UTF-8\";\n/* sizes */\n/* transition */\n/* flex-grid сетка */\n* {\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  text-size-adjust: none;\n  text-size-adjust: 100%;\n  touch-action: manipulation; }\n\nhtml {\n  font-family: sans-serif;\n  position: relative;\n  overflow-x: hidden; }\n\naddress {\n  font-style: normal; }\n\na {\n  text-decoration: none;\n  color: inherit; }\n\na:active,\na:hover {\n  outline: 0; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible;\n  text-transform: none;\n  background-color: transparent;\n  border: none; }\n\nbutton,\nbutton:active,\nbutton:focus {\n  outline: none; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\ninput {\n  line-height: normal; }\n\nbutton,\ninput[type='button'],\ninput[type='reset'],\ninput[type='submit'] {\n  cursor: pointer; }\n\nselect {\n  text-transform: none; }\n\nfieldset,\nimg {\n  border: none; }\n\nol,\nul {\n  list-style: none;\n  padding-left: 0;\n  margin: 0; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nimg {\n  max-width: 100%;\n  vertical-align: bottom;\n  border: none; }\n\nh1,\nh2 {\n  margin-top: 2rem; }\n\np {\n  margin-top: 1rem;\n  margin-bottom: 1rem; }\n\n.my-6 {\n  margin-top: 6px !important;\n  margin-bottom: 6px !important; }\n\n.mx-6 {\n  margin-left: 6px !important;\n  margin-right: 6px !important; }\n\n.mt-6 {\n  margin-top: 6px !important; }\n\n.mb-6 {\n  margin-bottom: 6px !important; }\n\n.ml-6 {\n  margin-left: 6px !important; }\n\n.mr-6 {\n  margin-right: 6px !important; }\n\n.my-8 {\n  margin-top: 8px !important;\n  margin-bottom: 8px !important; }\n\n.mx-8 {\n  margin-left: 8px !important;\n  margin-right: 8px !important; }\n\n.mt-8 {\n  margin-top: 8px !important; }\n\n.mb-8 {\n  margin-bottom: 8px !important; }\n\n.ml-8 {\n  margin-left: 8px !important; }\n\n.mr-8 {\n  margin-right: 8px !important; }\n\n.my-10 {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important; }\n\n.mx-10 {\n  margin-left: 10px !important;\n  margin-right: 10px !important; }\n\n.mt-10 {\n  margin-top: 10px !important; }\n\n.mb-10 {\n  margin-bottom: 10px !important; }\n\n.ml-10 {\n  margin-left: 10px !important; }\n\n.mr-10 {\n  margin-right: 10px !important; }\n\n.my-12 {\n  margin-top: 12px !important;\n  margin-bottom: 12px !important; }\n\n.mx-12 {\n  margin-left: 12px !important;\n  margin-right: 12px !important; }\n\n.mt-12 {\n  margin-top: 12px !important; }\n\n.mb-12 {\n  margin-bottom: 12px !important; }\n\n.ml-12 {\n  margin-left: 12px !important; }\n\n.mr-12 {\n  margin-right: 12px !important; }\n\n.my-14 {\n  margin-top: 14px !important;\n  margin-bottom: 14px !important; }\n\n.mx-14 {\n  margin-left: 14px !important;\n  margin-right: 14px !important; }\n\n.mt-14 {\n  margin-top: 14px !important; }\n\n.mb-14 {\n  margin-bottom: 14px !important; }\n\n.ml-14 {\n  margin-left: 14px !important; }\n\n.mr-14 {\n  margin-right: 14px !important; }\n\n.my-16 {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important; }\n\n.mx-16 {\n  margin-left: 16px !important;\n  margin-right: 16px !important; }\n\n.mt-16 {\n  margin-top: 16px !important; }\n\n.mb-16 {\n  margin-bottom: 16px !important; }\n\n.ml-16 {\n  margin-left: 16px !important; }\n\n.mr-16 {\n  margin-right: 16px !important; }\n\n.my-18 {\n  margin-top: 18px !important;\n  margin-bottom: 18px !important; }\n\n.mx-18 {\n  margin-left: 18px !important;\n  margin-right: 18px !important; }\n\n.mt-18 {\n  margin-top: 18px !important; }\n\n.mb-18 {\n  margin-bottom: 18px !important; }\n\n.ml-18 {\n  margin-left: 18px !important; }\n\n.mr-18 {\n  margin-right: 18px !important; }\n\n.my-20 {\n  margin-top: 20px !important;\n  margin-bottom: 20px !important; }\n\n.mx-20 {\n  margin-left: 20px !important;\n  margin-right: 20px !important; }\n\n.mt-20 {\n  margin-top: 20px !important; }\n\n.mb-20 {\n  margin-bottom: 20px !important; }\n\n.ml-20 {\n  margin-left: 20px !important; }\n\n.mr-20 {\n  margin-right: 20px !important; }\n\n.my-22 {\n  margin-top: 22px !important;\n  margin-bottom: 22px !important; }\n\n.mx-22 {\n  margin-left: 22px !important;\n  margin-right: 22px !important; }\n\n.mt-22 {\n  margin-top: 22px !important; }\n\n.mb-22 {\n  margin-bottom: 22px !important; }\n\n.ml-22 {\n  margin-left: 22px !important; }\n\n.mr-22 {\n  margin-right: 22px !important; }\n\n.my-24 {\n  margin-top: 24px !important;\n  margin-bottom: 24px !important; }\n\n.mx-24 {\n  margin-left: 24px !important;\n  margin-right: 24px !important; }\n\n.mt-24 {\n  margin-top: 24px !important; }\n\n.mb-24 {\n  margin-bottom: 24px !important; }\n\n.ml-24 {\n  margin-left: 24px !important; }\n\n.mr-24 {\n  margin-right: 24px !important; }\n\n.my-0 {\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\n.mx-0 {\n  margin-left: 0px !important;\n  margin-right: 0px !important; }\n\n.mt-0 {\n  margin-top: 0px !important; }\n\n.mb-0 {\n  margin-bottom: 0px !important; }\n\n.ml-0 {\n  margin-left: 0px !important; }\n\n.mr-0 {\n  margin-right: 0px !important; }\n\n.my-5 {\n  margin-top: 5px !important;\n  margin-bottom: 5px !important; }\n\n.mx-5 {\n  margin-left: 5px !important;\n  margin-right: 5px !important; }\n\n.mt-5 {\n  margin-top: 5px !important; }\n\n.mb-5 {\n  margin-bottom: 5px !important; }\n\n.ml-5 {\n  margin-left: 5px !important; }\n\n.mr-5 {\n  margin-right: 5px !important; }\n\n.my-10 {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important; }\n\n.mx-10 {\n  margin-left: 10px !important;\n  margin-right: 10px !important; }\n\n.mt-10 {\n  margin-top: 10px !important; }\n\n.mb-10 {\n  margin-bottom: 10px !important; }\n\n.ml-10 {\n  margin-left: 10px !important; }\n\n.mr-10 {\n  margin-right: 10px !important; }\n\n.my-15 {\n  margin-top: 15px !important;\n  margin-bottom: 15px !important; }\n\n.mx-15 {\n  margin-left: 15px !important;\n  margin-right: 15px !important; }\n\n.mt-15 {\n  margin-top: 15px !important; }\n\n.mb-15 {\n  margin-bottom: 15px !important; }\n\n.ml-15 {\n  margin-left: 15px !important; }\n\n.mr-15 {\n  margin-right: 15px !important; }\n\n.my-25 {\n  margin-top: 25px !important;\n  margin-bottom: 25px !important; }\n\n.mx-25 {\n  margin-left: 25px !important;\n  margin-right: 25px !important; }\n\n.mt-25 {\n  margin-top: 25px !important; }\n\n.mb-25 {\n  margin-bottom: 25px !important; }\n\n.ml-25 {\n  margin-left: 25px !important; }\n\n.mr-25 {\n  margin-right: 25px !important; }\n\n.my-30 {\n  margin-top: 30px !important;\n  margin-bottom: 30px !important; }\n\n.mx-30 {\n  margin-left: 30px !important;\n  margin-right: 30px !important; }\n\n.mt-30 {\n  margin-top: 30px !important; }\n\n.mb-30 {\n  margin-bottom: 30px !important; }\n\n.ml-30 {\n  margin-left: 30px !important; }\n\n.mr-30 {\n  margin-right: 30px !important; }\n\n.my-35 {\n  margin-top: 35px !important;\n  margin-bottom: 35px !important; }\n\n.mx-35 {\n  margin-left: 35px !important;\n  margin-right: 35px !important; }\n\n.mt-35 {\n  margin-top: 35px !important; }\n\n.mb-35 {\n  margin-bottom: 35px !important; }\n\n.ml-35 {\n  margin-left: 35px !important; }\n\n.mr-35 {\n  margin-right: 35px !important; }\n\n.my-40 {\n  margin-top: 40px !important;\n  margin-bottom: 40px !important; }\n\n.mx-40 {\n  margin-left: 40px !important;\n  margin-right: 40px !important; }\n\n.mt-40 {\n  margin-top: 40px !important; }\n\n.mb-40 {\n  margin-bottom: 40px !important; }\n\n.ml-40 {\n  margin-left: 40px !important; }\n\n.mr-40 {\n  margin-right: 40px !important; }\n\n.my-45 {\n  margin-top: 45px !important;\n  margin-bottom: 45px !important; }\n\n.mx-45 {\n  margin-left: 45px !important;\n  margin-right: 45px !important; }\n\n.mt-45 {\n  margin-top: 45px !important; }\n\n.mb-45 {\n  margin-bottom: 45px !important; }\n\n.ml-45 {\n  margin-left: 45px !important; }\n\n.mr-45 {\n  margin-right: 45px !important; }\n\n.my-50 {\n  margin-top: 50px !important;\n  margin-bottom: 50px !important; }\n\n.mx-50 {\n  margin-left: 50px !important;\n  margin-right: 50px !important; }\n\n.mt-50 {\n  margin-top: 50px !important; }\n\n.mb-50 {\n  margin-bottom: 50px !important; }\n\n.ml-50 {\n  margin-left: 50px !important; }\n\n.mr-50 {\n  margin-right: 50px !important; }\n\n.mx-auto {\n  margin-left: auto !important;\n  margin-right: auto !important; }\n\n.py-6 {\n  padding-top: 6px !important;\n  padding-bottom: 6px !important; }\n\n.px-6 {\n  padding-left: 6px !important;\n  padding-right: 6px !important; }\n\n.pt-6 {\n  padding-top: 6px !important; }\n\n.pb-6 {\n  padding-bottom: 6px !important; }\n\n.pl-6 {\n  padding-left: 6px !important; }\n\n.pr-6 {\n  padding-right: 6px !important; }\n\n.py-8 {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important; }\n\n.px-8 {\n  padding-left: 8px !important;\n  padding-right: 8px !important; }\n\n.pt-8 {\n  padding-top: 8px !important; }\n\n.pb-8 {\n  padding-bottom: 8px !important; }\n\n.pl-8 {\n  padding-left: 8px !important; }\n\n.pr-8 {\n  padding-right: 8px !important; }\n\n.py-10 {\n  padding-top: 10px !important;\n  padding-bottom: 10px !important; }\n\n.px-10 {\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.pt-10 {\n  padding-top: 10px !important; }\n\n.pb-10 {\n  padding-bottom: 10px !important; }\n\n.pl-10 {\n  padding-left: 10px !important; }\n\n.pr-10 {\n  padding-right: 10px !important; }\n\n.py-12 {\n  padding-top: 12px !important;\n  padding-bottom: 12px !important; }\n\n.px-12 {\n  padding-left: 12px !important;\n  padding-right: 12px !important; }\n\n.pt-12 {\n  padding-top: 12px !important; }\n\n.pb-12 {\n  padding-bottom: 12px !important; }\n\n.pl-12 {\n  padding-left: 12px !important; }\n\n.pr-12 {\n  padding-right: 12px !important; }\n\n.py-14 {\n  padding-top: 14px !important;\n  padding-bottom: 14px !important; }\n\n.px-14 {\n  padding-left: 14px !important;\n  padding-right: 14px !important; }\n\n.pt-14 {\n  padding-top: 14px !important; }\n\n.pb-14 {\n  padding-bottom: 14px !important; }\n\n.pl-14 {\n  padding-left: 14px !important; }\n\n.pr-14 {\n  padding-right: 14px !important; }\n\n.py-16 {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important; }\n\n.px-16 {\n  padding-left: 16px !important;\n  padding-right: 16px !important; }\n\n.pt-16 {\n  padding-top: 16px !important; }\n\n.pb-16 {\n  padding-bottom: 16px !important; }\n\n.pl-16 {\n  padding-left: 16px !important; }\n\n.pr-16 {\n  padding-right: 16px !important; }\n\n.py-18 {\n  padding-top: 18px !important;\n  padding-bottom: 18px !important; }\n\n.px-18 {\n  padding-left: 18px !important;\n  padding-right: 18px !important; }\n\n.pt-18 {\n  padding-top: 18px !important; }\n\n.pb-18 {\n  padding-bottom: 18px !important; }\n\n.pl-18 {\n  padding-left: 18px !important; }\n\n.pr-18 {\n  padding-right: 18px !important; }\n\n.py-20 {\n  padding-top: 20px !important;\n  padding-bottom: 20px !important; }\n\n.px-20 {\n  padding-left: 20px !important;\n  padding-right: 20px !important; }\n\n.pt-20 {\n  padding-top: 20px !important; }\n\n.pb-20 {\n  padding-bottom: 20px !important; }\n\n.pl-20 {\n  padding-left: 20px !important; }\n\n.pr-20 {\n  padding-right: 20px !important; }\n\n.py-22 {\n  padding-top: 22px !important;\n  padding-bottom: 22px !important; }\n\n.px-22 {\n  padding-left: 22px !important;\n  padding-right: 22px !important; }\n\n.pt-22 {\n  padding-top: 22px !important; }\n\n.pb-22 {\n  padding-bottom: 22px !important; }\n\n.pl-22 {\n  padding-left: 22px !important; }\n\n.pr-22 {\n  padding-right: 22px !important; }\n\n.py-24 {\n  padding-top: 24px !important;\n  padding-bottom: 24px !important; }\n\n.px-24 {\n  padding-left: 24px !important;\n  padding-right: 24px !important; }\n\n.pt-24 {\n  padding-top: 24px !important; }\n\n.pb-24 {\n  padding-bottom: 24px !important; }\n\n.pl-24 {\n  padding-left: 24px !important; }\n\n.pr-24 {\n  padding-right: 24px !important; }\n\n.py-0 {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important; }\n\n.px-0 {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n\n.pt-0 {\n  padding-top: 0px !important; }\n\n.pb-0 {\n  padding-bottom: 0px !important; }\n\n.pl-0 {\n  padding-left: 0px !important; }\n\n.pr-0 {\n  padding-right: 0px !important; }\n\n.py-5 {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important; }\n\n.px-5 {\n  padding-left: 5px !important;\n  padding-right: 5px !important; }\n\n.pt-5 {\n  padding-top: 5px !important; }\n\n.pb-5 {\n  padding-bottom: 5px !important; }\n\n.pl-5 {\n  padding-left: 5px !important; }\n\n.pr-5 {\n  padding-right: 5px !important; }\n\n.py-10 {\n  padding-top: 10px !important;\n  padding-bottom: 10px !important; }\n\n.px-10 {\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.pt-10 {\n  padding-top: 10px !important; }\n\n.pb-10 {\n  padding-bottom: 10px !important; }\n\n.pl-10 {\n  padding-left: 10px !important; }\n\n.pr-10 {\n  padding-right: 10px !important; }\n\n.py-15 {\n  padding-top: 15px !important;\n  padding-bottom: 15px !important; }\n\n.px-15 {\n  padding-left: 15px !important;\n  padding-right: 15px !important; }\n\n.pt-15 {\n  padding-top: 15px !important; }\n\n.pb-15 {\n  padding-bottom: 15px !important; }\n\n.pl-15 {\n  padding-left: 15px !important; }\n\n.pr-15 {\n  padding-right: 15px !important; }\n\n.py-25 {\n  padding-top: 25px !important;\n  padding-bottom: 25px !important; }\n\n.px-25 {\n  padding-left: 25px !important;\n  padding-right: 25px !important; }\n\n.pt-25 {\n  padding-top: 25px !important; }\n\n.pb-25 {\n  padding-bottom: 25px !important; }\n\n.pl-25 {\n  padding-left: 25px !important; }\n\n.pr-25 {\n  padding-right: 25px !important; }\n\n.py-30 {\n  padding-top: 30px !important;\n  padding-bottom: 30px !important; }\n\n.px-30 {\n  padding-left: 30px !important;\n  padding-right: 30px !important; }\n\n.pt-30 {\n  padding-top: 30px !important; }\n\n.pb-30 {\n  padding-bottom: 30px !important; }\n\n.pl-30 {\n  padding-left: 30px !important; }\n\n.pr-30 {\n  padding-right: 30px !important; }\n\n.py-35 {\n  padding-top: 35px !important;\n  padding-bottom: 35px !important; }\n\n.px-35 {\n  padding-left: 35px !important;\n  padding-right: 35px !important; }\n\n.pt-35 {\n  padding-top: 35px !important; }\n\n.pb-35 {\n  padding-bottom: 35px !important; }\n\n.pl-35 {\n  padding-left: 35px !important; }\n\n.pr-35 {\n  padding-right: 35px !important; }\n\n.py-40 {\n  padding-top: 40px !important;\n  padding-bottom: 40px !important; }\n\n.px-40 {\n  padding-left: 40px !important;\n  padding-right: 40px !important; }\n\n.pt-40 {\n  padding-top: 40px !important; }\n\n.pb-40 {\n  padding-bottom: 40px !important; }\n\n.pl-40 {\n  padding-left: 40px !important; }\n\n.pr-40 {\n  padding-right: 40px !important; }\n\n.py-45 {\n  padding-top: 45px !important;\n  padding-bottom: 45px !important; }\n\n.px-45 {\n  padding-left: 45px !important;\n  padding-right: 45px !important; }\n\n.pt-45 {\n  padding-top: 45px !important; }\n\n.pb-45 {\n  padding-bottom: 45px !important; }\n\n.pl-45 {\n  padding-left: 45px !important; }\n\n.pr-45 {\n  padding-right: 45px !important; }\n\n.py-50 {\n  padding-top: 50px !important;\n  padding-bottom: 50px !important; }\n\n.px-50 {\n  padding-left: 50px !important;\n  padding-right: 50px !important; }\n\n.pt-50 {\n  padding-top: 50px !important; }\n\n.pb-50 {\n  padding-bottom: 50px !important; }\n\n.pl-50 {\n  padding-left: 50px !important; }\n\n.pr-50 {\n  padding-right: 50px !important; }\n\n.px-auto {\n  padding-left: auto !important;\n  padding-right: auto !important; }\n\n.d-block {\n  display: block; }\n\n.d-inline-block {\n  display: inline-block; }\n\n.d-table {\n  display: table; }\n\n.pos-static {\n  position: static; }\n\n.pos-abs {\n  position: absolute; }\n\n.pos-rel {\n  position: relative; }\n\n.hidden {\n  display: none !important; }\n\n.w-100 {\n  width: 100%; }\n\n.h-100 {\n  height: 100% !important; }\n\n.unscroll {\n  overflow: hidden; }\n\n.hr {\n  height: 1px;\n  border: none;\n  color: #77828e;\n  background-color: #77828e; }\n\n.negative-indent {\n  margin-left: -1rem; }\n\n.rounded {\n  border-radius: 50%; }\n\n.rounded-pill {\n  border-radius: 5px; }\n\n.underline {\n  border-bottom: 1px solid #77828e; }\n\n/* flex-grid сетка */\n[class*='grid-'] {\n  display: flex;\n  flex-wrap: wrap; }\n  [class*='grid-'] > * {\n    width: 100%; }\n  [class*='grid-'].grid-parted {\n    margin: -1rem -2.5rem; }\n    [class*='grid-'].grid-parted,\n    [class*='grid-'].grid-parted > * {\n      padding: 0.5rem 1.25rem; }\n\n.grid-2 > * {\n  width: 50%; }\n\n.grid-2 > .col-1 {\n  width: 50%; }\n\n.grid-2 > .col-2 {\n  width: 100%; }\n\n.grid-3 > * {\n  width: 33.33333%; }\n\n.grid-3 > .col-1 {\n  width: 33.33333%; }\n\n.grid-3 > .col-2 {\n  width: 66.66667%; }\n\n.grid-3 > .col-3 {\n  width: 100%; }\n\n.grid-4 > * {\n  width: 25%; }\n\n.grid-4 > .col-1 {\n  width: 25%; }\n\n.grid-4 > .col-2 {\n  width: 50%; }\n\n.grid-4 > .col-3 {\n  width: 75%; }\n\n.grid-4 > .col-4 {\n  width: 100%; }\n\n.grid-5 > * {\n  width: 20%; }\n\n.grid-5 > .col-1 {\n  width: 20%; }\n\n.grid-5 > .col-2 {\n  width: 40%; }\n\n.grid-5 > .col-3 {\n  width: 60%; }\n\n.grid-5 > .col-4 {\n  width: 80%; }\n\n.grid-5 > .col-5 {\n  width: 100%; }\n\n@media (min-width: 768px) {\n  .grid-md-2 > * {\n    width: 50%; }\n  .grid-md-2 > .col-md-1 {\n    width: 50%; }\n  .grid-md-2 > .col-md-2 {\n    width: 100%; }\n  .grid-md-3 > * {\n    width: 33.33333%; }\n  .grid-md-3 > .col-md-1 {\n    width: 33.33333%; }\n  .grid-md-3 > .col-md-2 {\n    width: 66.66667%; }\n  .grid-md-3 > .col-md-3 {\n    width: 100%; }\n  .grid-md-4 > * {\n    width: 25%; }\n  .grid-md-4 > .col-md-1 {\n    width: 25%; }\n  .grid-md-4 > .col-md-2 {\n    width: 50%; }\n  .grid-md-4 > .col-md-3 {\n    width: 75%; }\n  .grid-md-4 > .col-md-4 {\n    width: 100%; }\n  .grid-md-5 > * {\n    width: 20%; }\n  .grid-md-5 > .col-md-1 {\n    width: 20%; }\n  .grid-md-5 > .col-md-2 {\n    width: 40%; }\n  .grid-md-5 > .col-md-3 {\n    width: 60%; }\n  .grid-md-5 > .col-md-4 {\n    width: 80%; }\n  .grid-md-5 > .col-md-5 {\n    width: 100%; } }\n\n@media (min-width: 1280px) {\n  .grid-lg-2 > * {\n    width: 50%; }\n  .grid-lg-2 > .col-lg-1 {\n    width: 50%; }\n  .grid-lg-2 > .col-lg-2 {\n    width: 100%; }\n  .grid-lg-3 > * {\n    width: 33.33333%; }\n  .grid-lg-3 > .col-lg-1 {\n    width: 33.33333%; }\n  .grid-lg-3 > .col-lg-2 {\n    width: 66.66667%; }\n  .grid-lg-3 > .col-lg-3 {\n    width: 100%; }\n  .grid-lg-4 > * {\n    width: 25%; }\n  .grid-lg-4 > .col-lg-1 {\n    width: 25%; }\n  .grid-lg-4 > .col-lg-2 {\n    width: 50%; }\n  .grid-lg-4 > .col-lg-3 {\n    width: 75%; }\n  .grid-lg-4 > .col-lg-4 {\n    width: 100%; }\n  .grid-lg-5 > * {\n    width: 20%; }\n  .grid-lg-5 > .col-lg-1 {\n    width: 20%; }\n  .grid-lg-5 > .col-lg-2 {\n    width: 40%; }\n  .grid-lg-5 > .col-lg-3 {\n    width: 60%; }\n  .grid-lg-5 > .col-lg-4 {\n    width: 80%; }\n  .grid-lg-5 > .col-lg-5 {\n    width: 100%; } }\n\n[class*='flex-'] {\n  display: flex; }\n\n.flex {\n  display: flex; }\n  .flex-x-start {\n    justify-content: flex-start; }\n  .flex-x-end {\n    justify-content: flex-end; }\n  .flex-x-center {\n    justify-content: center; }\n  .flex-x-around {\n    justify-content: space-around; }\n  .flex-x-between {\n    justify-content: space-between; }\n  .flex-y-start {\n    align-items: flex-start; }\n  .flex-y-end {\n    align-items: flex-end; }\n  .flex-y-center {\n    align-items: center; }\n  .flex-y-baseline {\n    align-items: baseline; }\n  .flex-xy-center {\n    justify-content: center;\n    align-items: center; }\n  .flex-wrap {\n    flex-wrap: wrap; }\n  .flex-nowrap {\n    flex-wrap: nowrap; }\n  .flex-column {\n    flex-direction: column; }\n  .flex-inline {\n    display: inline-flex; }\n\n.align-self-start {\n  align-self: flex-start; }\n\n.align-self-end {\n  align-self: flex-end; }\n\n.align-self-center {\n  align-self: center; }\n\n.align-self-baseline {\n  align-self: baseline; }\n\n[class*='flex-group'] {\n  flex-wrap: wrap; }\n\n.flex-group-5 *:not(:last-child) {\n  margin-right: 5px; }\n\n.flex-group-10 *:not(:last-child) {\n  margin-right: 10px; }\n\n.flex-group-15 *:not(:last-child) {\n  margin-right: 15px; }\n\n.flex-group-20 *:not(:last-child) {\n  margin-right: 20px; }\n\n.flex-group-25 *:not(:last-child) {\n  margin-right: 25px; }\n\n.flex-group-30 *:not(:last-child) {\n  margin-right: 30px; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-link {\n  color: #107393; }\n\n.text-muted {\n  color: #77828e; }\n\n.text-white {\n  color: white; }\n\n.text-bold {\n  font-weight: bold; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.text-break {\n  word-break: break-word; }\n\n.text-underline {\n  text-decoration: underline; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.fz-12 {\n  font-size: 12px; }\n\n.fz-13 {\n  font-size: 13px; }\n\n.fz-14 {\n  font-size: 14px; }\n\n.fz-15 {\n  font-size: 15px; }\n\n.fz-16 {\n  font-size: 16px; }\n\n.fz-17 {\n  font-size: 17px; }\n\n.fz-18 {\n  font-size: 18px; }\n\n.fz-19 {\n  font-size: 19px; }\n\n.fz-20 {\n  font-size: 20px; }\n\n.fz-21 {\n  font-size: 21px; }\n\n.fz-22 {\n  font-size: 22px; }\n\n.fz-23 {\n  font-size: 23px; }\n\n.fz-24 {\n  font-size: 24px; }\n\n.fz-25 {\n  font-size: 25px; }\n\n.lh-1 {\n  line-height: 1; }\n\n.border-info {\n  border: 1px solid cyan !important; }\n\n.mark-info {\n  background-color: cyan !important; }\n\n.border-success {\n  border: 1px solid teal !important; }\n\n.mark-success {\n  background-color: teal !important; }\n\n.border-warning {\n  border: 1px solid orange !important; }\n\n.mark-warning {\n  background-color: orange !important; }\n\n.mark-default {\n  background-color: #c3c3c3; }\n\n.shadow {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n",
                    ''
                ]);
                // Exports
                module.exports = exports;

                /***/
            },

        /***/ '../../node_modules/css-loader/dist/runtime/api.js':
            /*!**********************************************************************************!*\
  !*** C:/Users/Eu/Documents/node-app/node_modules/css-loader/dist/runtime/api.js ***!
  \**********************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
                // css base code, injected by the css-loader
                // eslint-disable-next-line func-names
                module.exports = function (useSourceMap) {
                    var list = []; // return the list of modules as css string

                    list.toString = function toString() {
                        return this.map(function (item) {
                            var content = cssWithMappingToString(
                                item,
                                useSourceMap
                            );

                            if (item[2]) {
                                return '@media '
                                    .concat(item[2], ' {')
                                    .concat(content, '}');
                            }

                            return content;
                        }).join('');
                    }; // import a list of modules into the list
                    // eslint-disable-next-line func-names

                    list.i = function (modules, mediaQuery, dedupe) {
                        if (typeof modules === 'string') {
                            // eslint-disable-next-line no-param-reassign
                            modules = [[null, modules, '']];
                        }

                        var alreadyImportedModules = {};

                        if (dedupe) {
                            for (var i = 0; i < this.length; i++) {
                                // eslint-disable-next-line prefer-destructuring
                                var id = this[i][0];

                                if (id != null) {
                                    alreadyImportedModules[id] = true;
                                }
                            }
                        }

                        for (var _i = 0; _i < modules.length; _i++) {
                            var item = [].concat(modules[_i]);

                            if (dedupe && alreadyImportedModules[item[0]]) {
                                // eslint-disable-next-line no-continue
                                continue;
                            }

                            if (mediaQuery) {
                                if (!item[2]) {
                                    item[2] = mediaQuery;
                                } else {
                                    item[2] = ''
                                        .concat(mediaQuery, ' and ')
                                        .concat(item[2]);
                                }
                            }

                            list.push(item);
                        }
                    };

                    return list;
                };

                function cssWithMappingToString(item, useSourceMap) {
                    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

                    var cssMapping = item[3];

                    if (!cssMapping) {
                        return content;
                    }

                    if (useSourceMap && typeof btoa === 'function') {
                        var sourceMapping = toComment(cssMapping);
                        var sourceURLs = cssMapping.sources.map(function (
                            source
                        ) {
                            return '/*# sourceURL='
                                .concat(cssMapping.sourceRoot || '')
                                .concat(source, ' */');
                        });
                        return [content]
                            .concat(sourceURLs)
                            .concat([sourceMapping])
                            .join('\n');
                    }

                    return [content].join('\n');
                } // Adapted from convert-source-map (MIT)

                function toComment(sourceMap) {
                    // eslint-disable-next-line no-undef
                    var base64 = btoa(
                        unescape(encodeURIComponent(JSON.stringify(sourceMap)))
                    );
                    var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                        base64
                    );
                    return '/*# '.concat(data, ' */');
                }

                /***/
            },

        /***/ '../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
            /*!*********************************************************************************************************!*\
  !*** C:/Users/Eu/Documents/node-app/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*********************************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict';

                var isOldIE = (function isOldIE() {
                    var memo;
                    return function memorize() {
                        if (typeof memo === 'undefined') {
                            // Test for IE <= 9 as proposed by Browserhacks
                            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                            // Tests for existence of standard globals is to allow style-loader
                            // to operate correctly into non-standard environments
                            // @see https://github.com/webpack-contrib/style-loader/issues/177
                            memo = Boolean(
                                window &&
                                    document &&
                                    document.all &&
                                    !window.atob
                            );
                        }

                        return memo;
                    };
                })();

                var getTarget = (function getTarget() {
                    var memo = {};
                    return function memorize(target) {
                        if (typeof memo[target] === 'undefined') {
                            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

                            if (
                                window.HTMLIFrameElement &&
                                styleTarget instanceof window.HTMLIFrameElement
                            ) {
                                try {
                                    // This will throw an exception if access to iframe is blocked
                                    // due to cross-origin restrictions
                                    styleTarget =
                                        styleTarget.contentDocument.head;
                                } catch (e) {
                                    // istanbul ignore next
                                    styleTarget = null;
                                }
                            }

                            memo[target] = styleTarget;
                        }

                        return memo[target];
                    };
                })();

                var stylesInDom = [];

                function getIndexByIdentifier(identifier) {
                    var result = -1;

                    for (var i = 0; i < stylesInDom.length; i++) {
                        if (stylesInDom[i].identifier === identifier) {
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
                        var id = options.base
                            ? item[0] + options.base
                            : item[0];
                        var count = idCountMap[id] || 0;
                        var identifier = ''.concat(id, ' ').concat(count);
                        idCountMap[id] = count + 1;
                        var index = getIndexByIdentifier(identifier);
                        var obj = {
                            css: item[1],
                            media: item[2],
                            sourceMap: item[3]
                        };

                        if (index !== -1) {
                            stylesInDom[index].references++;
                            stylesInDom[index].updater(obj);
                        } else {
                            stylesInDom.push({
                                identifier: identifier,
                                updater: addStyle(obj, options),
                                references: 1
                            });
                        }

                        identifiers.push(identifier);
                    }

                    return identifiers;
                }

                function insertStyleElement(options) {
                    var style = document.createElement('style');
                    var attributes = options.attributes || {};

                    if (typeof attributes.nonce === 'undefined') {
                        var nonce = true ? __webpack_require__.nc : undefined;

                        if (nonce) {
                            attributes.nonce = nonce;
                        }
                    }

                    Object.keys(attributes).forEach(function (key) {
                        style.setAttribute(key, attributes[key]);
                    });

                    if (typeof options.insert === 'function') {
                        options.insert(style);
                    } else {
                        var target = getTarget(options.insert || 'head');

                        if (!target) {
                            throw new Error(
                                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                            );
                        }

                        target.appendChild(style);
                    }

                    return style;
                }

                function removeStyleElement(style) {
                    // istanbul ignore if
                    if (style.parentNode === null) {
                        return false;
                    }

                    style.parentNode.removeChild(style);
                }
                /* istanbul ignore next  */

                var replaceText = (function replaceText() {
                    var textStore = [];
                    return function replace(index, replacement) {
                        textStore[index] = replacement;
                        return textStore.filter(Boolean).join('\n');
                    };
                })();

                function applyToSingletonTag(style, index, remove, obj) {
                    var css = remove
                        ? ''
                        : obj.media
                        ? '@media '.concat(obj.media, ' {').concat(obj.css, '}')
                        : obj.css; // For old IE

                    /* istanbul ignore if  */

                    if (style.styleSheet) {
                        style.styleSheet.cssText = replaceText(index, css);
                    } else {
                        var cssNode = document.createTextNode(css);
                        var childNodes = style.childNodes;

                        if (childNodes[index]) {
                            style.removeChild(childNodes[index]);
                        }

                        if (childNodes.length) {
                            style.insertBefore(cssNode, childNodes[index]);
                        } else {
                            style.appendChild(cssNode);
                        }
                    }
                }

                function applyToTag(style, options, obj) {
                    var css = obj.css;
                    var media = obj.media;
                    var sourceMap = obj.sourceMap;

                    if (media) {
                        style.setAttribute('media', media);
                    } else {
                        style.removeAttribute('media');
                    }

                    if (sourceMap && typeof btoa !== 'undefined') {
                        css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                            btoa(
                                unescape(
                                    encodeURIComponent(
                                        JSON.stringify(sourceMap)
                                    )
                                )
                            ),
                            ' */'
                        );
                    } // For old IE

                    /* istanbul ignore if  */

                    if (style.styleSheet) {
                        style.styleSheet.cssText = css;
                    } else {
                        while (style.firstChild) {
                            style.removeChild(style.firstChild);
                        }

                        style.appendChild(document.createTextNode(css));
                    }
                }

                var singleton = null;
                var singletonCounter = 0;

                function addStyle(obj, options) {
                    var style;
                    var update;
                    var remove;

                    if (options.singleton) {
                        var styleIndex = singletonCounter++;
                        style =
                            singleton ||
                            (singleton = insertStyleElement(options));
                        update = applyToSingletonTag.bind(
                            null,
                            style,
                            styleIndex,
                            false
                        );
                        remove = applyToSingletonTag.bind(
                            null,
                            style,
                            styleIndex,
                            true
                        );
                    } else {
                        style = insertStyleElement(options);
                        update = applyToTag.bind(null, style, options);

                        remove = function remove() {
                            removeStyleElement(style);
                        };
                    }

                    update(obj);
                    return function updateStyle(newObj) {
                        if (newObj) {
                            if (
                                newObj.css === obj.css &&
                                newObj.media === obj.media &&
                                newObj.sourceMap === obj.sourceMap
                            ) {
                                return;
                            }

                            update((obj = newObj));
                        } else {
                            remove();
                        }
                    };
                }

                module.exports = function (list, options) {
                    options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                    // tags it will allow on a page

                    if (
                        !options.singleton &&
                        typeof options.singleton !== 'boolean'
                    ) {
                        options.singleton = isOldIE();
                    }

                    list = list || [];
                    var lastIdentifiers = modulesToDom(list, options);
                    return function update(newList) {
                        newList = newList || [];

                        if (
                            Object.prototype.toString.call(newList) !==
                            '[object Array]'
                        ) {
                            return;
                        }

                        for (var i = 0; i < lastIdentifiers.length; i++) {
                            var identifier = lastIdentifiers[i];
                            var index = getIndexByIdentifier(identifier);
                            stylesInDom[index].references--;
                        }

                        var newLastIdentifiers = modulesToDom(newList, options);

                        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
                            var _identifier = lastIdentifiers[_i];

                            var _index = getIndexByIdentifier(_identifier);

                            if (stylesInDom[_index].references === 0) {
                                stylesInDom[_index].updater();

                                stylesInDom.splice(_index, 1);
                            }
                        }

                        lastIdentifiers = newLastIdentifiers;
                    };
                };

                /***/
            },

        /***/ './libs/jsx.js':
            /*!*********************!*\
  !*** ./libs/jsx.js ***!
  \*********************/
            /*! no static exports found */
            /***/ function (module, exports) {
                function _slicedToArray(arr, i) {
                    return (
                        _arrayWithHoles(arr) ||
                        _iterableToArrayLimit(arr, i) ||
                        _unsupportedIterableToArray(arr, i) ||
                        _nonIterableRest()
                    );
                }

                function _nonIterableRest() {
                    throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                }

                function _unsupportedIterableToArray(o, minLen) {
                    if (!o) return;
                    if (typeof o === 'string')
                        return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    if (n === 'Object' && o.constructor) n = o.constructor.name;
                    if (n === 'Map' || n === 'Set') return Array.from(o);
                    if (
                        n === 'Arguments' ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    )
                        return _arrayLikeToArray(o, minLen);
                }

                function _arrayLikeToArray(arr, len) {
                    if (len == null || len > arr.length) len = arr.length;
                    for (var i = 0, arr2 = new Array(len); i < len; i++) {
                        arr2[i] = arr[i];
                    }
                    return arr2;
                }

                function _iterableToArrayLimit(arr, i) {
                    if (
                        typeof Symbol === 'undefined' ||
                        !(Symbol.iterator in Object(arr))
                    )
                        return;
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;
                    try {
                        for (
                            var _i = arr[Symbol.iterator](), _s;
                            !(_n = (_s = _i.next()).done);
                            _n = true
                        ) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i['return'] != null) _i['return']();
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }

                function _arrayWithHoles(arr) {
                    if (Array.isArray(arr)) return arr;
                }

                function jsx(tag, props) {
                    for (
                        var _len = arguments.length,
                            children = new Array(_len > 2 ? _len - 2 : 0),
                            _key = 2;
                        _key < _len;
                        _key++
                    ) {
                        children[_key - 2] = arguments[_key];
                    }

                    if (typeof tag === 'function') {
                        return tag(props, children);
                    }

                    var element = document.createElement(tag);
                    Object.entries(props || {}).forEach(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            name = _ref2[0],
                            value = _ref2[1];

                        if (name.toLowerCase() === 'classname') {
                            name = 'class';
                        }

                        element.setAttribute(name, value.toString());
                    });
                    children.forEach(function (child) {
                        appendChild(element, child);
                    });
                    return element;
                }

                function appendChild(parent, child) {
                    if (Array.isArray(child))
                        child.forEach(function (nestedChild) {
                            return appendChild(parent, nestedChild);
                        });
                    else
                        parent.appendChild(
                            child.nodeType
                                ? child
                                : document.createTextNode(child)
                        );
                }

                module.exports = jsx;

                /***/
            },

        /***/ './pages/hex/index.js':
            /*!****************************!*\
  !*** ./pages/hex/index.js ***!
  \****************************/
            /*! no exports provided */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* WEBPACK VAR INJECTION */ (function (jsx) {
                    /* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        /*! @/sass/main.scss */ './sass/main.scss'
                    );
                    /* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                        _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__
                    );
                    /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        /*! ./index.scss */ './pages/hex/index.scss'
                    );
                    /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                        _index_scss__WEBPACK_IMPORTED_MODULE_1__
                    );
                    /** @jsx jsx */

                    var codes = ['f', '8', '0'];
                    var hexs = [];
                    codes.forEach(function (r) {
                        return codes.forEach(function (g) {
                            return codes.forEach(function (b) {
                                return hexs.push(
                                    ''.concat(r).concat(g).concat(b)
                                );
                            });
                        });
                    });
                    var List = jsx(
                        'ul',
                        {
                            class: 'hex-list'
                        },
                        hexs.map(function (hex) {
                            return jsx('li', {
                                style: 'background-color: #' + hex,
                                title: hex
                            });
                        })
                    );
                    document.getElementById('root').appendChild(List);
                    /* WEBPACK VAR INJECTION */
                }.call(this, __webpack_require__(/*! jsx */ './libs/jsx.js')));

                /***/
            },

        /***/ './pages/hex/index.scss':
            /*!******************************!*\
  !*** ./pages/hex/index.scss ***!
  \******************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var api = __webpack_require__(
                    /*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ '../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
                );
                var content = __webpack_require__(
                    /*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ '../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./pages/hex/index.scss'
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === 'string') {
                    content = [[module.i, content, '']];
                }

                var options = {};

                options.insert = 'head';
                options.singleton = false;

                var update = api(content, options);

                module.exports = content.locals || {};

                /***/
            },

        /***/ './sass/main.scss':
            /*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                var api = __webpack_require__(
                    /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ '../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
                );
                var content = __webpack_require__(
                    /*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ '../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./sass/main.scss'
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === 'string') {
                    content = [[module.i, content, '']];
                }

                var options = {};

                options.insert = 'head';
                options.singleton = false;

                var update = api(content, options);

                module.exports = content.locals || {};

                /***/
            }

        /******/
    }
);
//# sourceMappingURL=hex.js.map
