/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ux.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 *    __  _____   ___   __          __
 *   / / / /   | <  /  / /   ____ _/ /_  _____
 *  / / / / /| | / /  / /   / __ `/ __ `/ ___/
 * / /_/ / ___ |/ /  / /___/ /_/ / /_/ (__  )
 * `____/_/  |_/_/  /_____/`__,_/_.___/____/
 *
 * @package UXjs
 * @author UA1 Labs Developers https://ua1.us
 * @copyright Copyright (c) UA1 Labs
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @uxjs/ux/experience.class */ "./src/ux/experience.class.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, experience_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExperienceClass = experience_class_1.ExperienceClass;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/experiences/aria/aria-checkbox.experiece.ts":
/*!*********************************************************!*\
  !*** ./src/experiences/aria/aria-checkbox.experiece.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @uxjs/api */ "./src/api.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A user experience that implements functionality and enforces best
     * practices for checkboxes based on best practices identified by
     * https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox.
     */
    var AriaCheckboxExperience = /** @class */ (function (_super) {
        __extends(AriaCheckboxExperience, _super);
        function AriaCheckboxExperience() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AriaCheckboxExperience.prototype.onInit = function () {
        };
        AriaCheckboxExperience.prototype.onUpdate = function () {
        };
        AriaCheckboxExperience.prototype.onDebugEnabled = function () {
        };
        AriaCheckboxExperience.prototype.onDebugDisabled = function () {
        };
        AriaCheckboxExperience.NAME = 'aria-checkbox';
        return AriaCheckboxExperience;
    }(api_1.ExperienceClass));
    exports.AriaCheckboxExperience = AriaCheckboxExperience;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ux-helper.class.ts":
/*!********************************!*\
  !*** ./src/ux-helper.class.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 *    __  _____   ___   __          __
 *   / / / /   | <  /  / /   ____ _/ /_  _____
 *  / / / / /| | / /  / /   / __ `/ __ `/ ___/
 * / /_/ / ___ |/ /  / /___/ /_/ / /_/ (__  )
 * `____/_/  |_/_/  /_____/`__,_/_.___/____/
 *
 * @package UXjs
 * @author UA1 Labs Developers https://ua1.us
 * @copyright Copyright (c) UA1 Labs
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @uxjs/ux/debug.class */ "./src/ux/debug.class.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, debug_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * This helper class is a singleton instance and is meant to provide the public UXjs
     * API with the core logic to make UXjs function.
     */
    var UxHelperClass = /** @class */ (function () {
        /**
         * The constructor
         */
        function UxHelperClass() {
            this.experienceFactories = {};
            this.isUpdateScanInProgress = false;
            this.isDebugScanInProgress = false;
        }
        /**
         * Returns the singleton instance of this class.
         */
        UxHelperClass.get = function () {
            if (!UxHelperClass.instance) {
                UxHelperClass.instance = new UxHelperClass();
            }
            return UxHelperClass.instance;
        };
        /**
         * Registers an experience within the framework. It take in a factory ready to be bound to
         * an element.
         * @param name The name of the experience
         * @param factory The factory that returns an instance of the experience
         */
        UxHelperClass.prototype.registerExperience = function (name, factory) {
            this.experienceFactories[name] = factory;
        };
        /**
         * Determines if the UX object has been bound to an HTMLElement. If the HTMLElement
         * has the UX object bound to it, it is an HTMLExperienceElement.
         * @param element Any HTMLElement
         */
        UxHelperClass.prototype.isUxBoundToElement = function (element) {
            var experienceElement = element;
            if (experienceElement && experienceElement.ux) {
                return true;
            }
            return false;
        };
        /**
         * Binds the UX object to an HTMLElement.
         * @param element Any HTMLElement
         */
        UxHelperClass.prototype.bindUxToElement = function (element) {
            var _this = this;
            if (!element) {
                var elementError = 'In order to bind UX to an element, ' +
                    'you must specify the element you intend to bind.';
                debug_class_1.UxDebugClass.error(elementError);
                return;
            }
            var experienceElement = element;
            if (!this.isUxBoundToElement(experienceElement)) {
                experienceElement.ux = (function () {
                    var ux = function (name) {
                        if (experienceElement._ux && experienceElement._ux[name]) {
                            return experienceElement._ux[name];
                        }
                        return undefined;
                    };
                    ux.update = function () {
                        if (!_this.isUpdateScanInProgress) {
                            _this.isUpdateScanInProgress = true;
                            var experiences = experienceElement.dataset.ux ? experienceElement.dataset.ux.split(' ') : [];
                            experiences.forEach(function (experience) {
                                if (!experienceElement.ux(experience)) {
                                    _this.bindExperienceToElement(experience, experienceElement);
                                }
                                var experienceInstance = experienceElement.ux(experience);
                                if (experienceInstance && experienceInstance.onUpdate) {
                                    debug_class_1.UxDebugClass.info('{' + experience + '}.onUpdate()');
                                    experienceInstance.onUpdate();
                                }
                            });
                            _this.isUpdateScanInProgress = false;
                            var childExperienceElements = _this.getExperienceElementChildren(experienceElement);
                            childExperienceElements.forEach(function (childExperienceElement) {
                                _this.bindUxToElement(childExperienceElement);
                                childExperienceElement.ux.update();
                            });
                        }
                        else {
                            var updateError = 'An update was invoked within an already running update loop.';
                            debug_class_1.UxDebugClass.error(updateError);
                        }
                    };
                    ux.debug = function () {
                        if (!_this.isDebugScanInProgress) {
                            var experiences = experienceElement.dataset.ux ? experienceElement.dataset.ux.split(' ') : [];
                            experiences.forEach(function (experience) {
                                if (!experienceElement.ux(experience)) {
                                    _this.bindExperienceToElement(experience, experienceElement);
                                }
                                var experienceInstance = experienceElement.ux(experience);
                                if (debug_class_1.UxDebugClass.isDebugEnabled &&
                                    experienceInstance &&
                                    experienceInstance.onDebugEnabled) {
                                    debug_class_1.UxDebugClass.info('{' + experience + '}.onDebugEnabled()');
                                    experienceInstance.onDebugEnabled();
                                }
                                else if (!debug_class_1.UxDebugClass.isDebugEnabled &&
                                    experienceInstance &&
                                    experienceInstance.onDebugDisabled) {
                                    debug_class_1.UxDebugClass.info('{' + experience + '}.onDebugDisabled()');
                                    experienceInstance.onDebugDisabled();
                                }
                            });
                            var childExperienceElements = _this.getExperienceElementChildren(experienceElement);
                            childExperienceElements.forEach(function (childExperienceElement) {
                                _this.bindUxToElement(childExperienceElement);
                                childExperienceElement.ux.debug();
                            });
                        }
                    };
                    ux.parent = function () {
                        return _this.getExperienceElementParent(experienceElement);
                    };
                    ux.children = function () {
                        return _this.getExperienceElementChildren(experienceElement);
                    };
                    return ux;
                })();
            }
        };
        /**
         * Binds an experience to an element and runs the experience's onInit() method.
         * @param name The name of the experience. The experience must be first registered with ux.experience() first.
         * @param element an HTMLElement you intend to bind the experinece to.
         */
        UxHelperClass.prototype.bindExperienceToElement = function (name, element) {
            if (!this.experienceFactories[name]) {
                var nameError = 'The user experience "' + name + '" must be registered with UXjs';
                debug_class_1.UxDebugClass.warn(nameError);
                return;
            }
            if (!element) {
                var elementError = 'In order to bind an experience to an element, ' +
                    'you must specify the element you intend to bind the experience to.';
                debug_class_1.UxDebugClass.error(elementError);
                return;
            }
            var experienceElement = element;
            experienceElement._ux = experienceElement._ux || {};
            if (!experienceElement._ux[name]) {
                var experience = this.experienceFactories[name](name, experienceElement);
                if (experience.onInit) {
                    debug_class_1.UxDebugClass.info('{' + name + '}.onInit()');
                    experience.onInit();
                }
                experienceElement._ux[name] = experience;
            }
        };
        /**
         * Finds and returns the HTMLExperienceElement parent of any HTMLElement passed in.
         * @param element HTMLElement
         */
        UxHelperClass.prototype.getExperienceElementParent = function (element) {
            var parentElement = element.parentElement;
            if (!parentElement) {
                return undefined;
            }
            else if (parentElement
                && parentElement.dataset
                && parentElement.dataset.ux) {
                return parentElement;
            }
            ;
            return this.getExperienceElementParent(parentElement);
        };
        /**
         * Returns an array of all the HTMLExperienceElement children of any HTMLElement
         * @param element
         */
        UxHelperClass.prototype.getExperienceElementChildren = function (element) {
            var _this = this;
            var possibleChildren = element.querySelectorAll('[data-ux]');
            var childrenElements = [];
            possibleChildren.forEach(function (possibleChildElement) {
                var childParentElement = _this.getExperienceElementParent(possibleChildElement);
                if (childParentElement === element) {
                    childrenElements.push(possibleChildElement);
                }
            });
            return childrenElements;
        };
        return UxHelperClass;
    }());
    exports.UxHelperClass = UxHelperClass;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ux.class.ts":
/*!*************************!*\
  !*** ./src/ux.class.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 *    __  _____   ___   __          __
 *   / / / /   | <  /  / /   ____ _/ /_  _____
 *  / / / / /| | / /  / /   / __ `/ __ `/ ___/
 * / /_/ / ___ |/ /  / /___/ /_/ / /_/ (__  )
 * `____/_/  |_/_/  /_____/`__,_/_.___/____/
 *
 * @package UXjs
 * @author UA1 Labs Developers https://ua1.us
 * @copyright Copyright (c) UA1 Labs
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @uxjs/ux/debug.class */ "./src/ux/debug.class.ts"), __webpack_require__(/*! @uxjs/ux-helper.class */ "./src/ux-helper.class.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, debug_class_1, ux_helper_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The main entry point into the UXjs API. This class ties together all of the logic
     * between HTMLElements and the experience definitions.
     */
    var UxClass = /** @class */ (function () {
        function UxClass() {
        }
        /**
         * Registers an experience with the UXjs framework.
         * @param name The name the that will tie the experience instance to the html node [data-ux]
         * @param factory A callback that returns an object that matches the ExperienceInterface
         */
        UxClass.prototype.experience = function (name, factory) {
            var uxHelperClass = ux_helper_class_1.UxHelperClass.get();
            uxHelperClass.registerExperience(name, factory);
        };
        /**
         * Initializes ux experiences from the DOM. Also an alias for ux.update().
         */
        UxClass.prototype.init = function () {
            this.update();
        };
        /**
         * Issues a notification to all experiences that something has updated and will
         * invoke each experience's onUpdate() callback method.
         */
        UxClass.prototype.update = function () {
            var uxHelperClass = ux_helper_class_1.UxHelperClass.get();
            var experienceElements = document.querySelectorAll('[data-ux]');
            experienceElements.forEach(function (element) {
                var hasParentExperienceElement = (uxHelperClass.getExperienceElementParent(element)) ? true : false;
                if (!hasParentExperienceElement) {
                    uxHelperClass.bindUxToElement(element);
                    element.ux.update();
                }
            });
        };
        /**
         * Turns on or off debugging on the page. When this method is invoked, a notification will
         * be sent to each experience to invoke either the onDebugEnabled() or onDebugDisabled()
         * method.
         * @param enableDebug Should we enable debug. Debug is enabled by default.
         */
        UxClass.prototype.debug = function (enableDebug) {
            var uxHelperClass = ux_helper_class_1.UxHelperClass.get();
            var shouldEnableDebug = (enableDebug !== false) ? true : false;
            debug_class_1.UxDebugClass.enableDebug(shouldEnableDebug);
            var experienceElements = document.querySelectorAll('[data-ux]');
            experienceElements.forEach(function (element) {
                var hasParentExperienceElement = (uxHelperClass.getExperienceElementParent(element)) ? true : false;
                if (!hasParentExperienceElement) {
                    uxHelperClass.bindUxToElement(element);
                    element.ux.debug();
                }
            });
        };
        return UxClass;
    }());
    exports.UxClass = UxClass;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ux.ts":
/*!*******************!*\
  !*** ./src/ux.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 *    __  _____   ___   __          __
 *   / / / /   | <  /  / /   ____ _/ /_  _____
 *  / / / / /| | / /  / /   / __ `/ __ `/ ___/
 * / /_/ / ___ |/ /  / /___/ /_/ / /_/ (__  )
 * `____/_/  |_/_/  /_____/`__,_/_.___/____/
 *
 * @package UXjs
 * @author UA1 Labs Developers https://ua1.us
 * @copyright Copyright (c) UA1 Labs
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @uxjs/experiences/aria/aria-checkbox.experiece */ "./src/experiences/aria/aria-checkbox.experiece.ts"), __webpack_require__(/*! @uxjs/ux.class */ "./src/ux.class.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, aria_checkbox_experiece_1, ux_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ux = new ux_class_1.UxClass();
    exports.ux = ux;
    // registering default experiences
    ux.experience(aria_checkbox_experiece_1.AriaCheckboxExperience.NAME, function (id, element) {
        return new aria_checkbox_experiece_1.AriaCheckboxExperience(id, element);
    });
    // exporting ux to window object
    window.ux = ux;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ux/debug.class.ts":
/*!*******************************!*\
  !*** ./src/ux/debug.class.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxDebugClass = /** @class */ (function () {
        function UxDebugClass() {
        }
        UxDebugClass.error = function (error) {
            console.error(UxDebugClass.TAGLINE + UxDebugClass.ERROR_TAGLINE + error);
        };
        UxDebugClass.warn = function (warning) {
            if (UxDebugClass.isDebugEnabled) {
                console.warn(UxDebugClass.TAGLINE + UxDebugClass.WARNING_TAGLINE + warning);
            }
        };
        UxDebugClass.info = function (info) {
            if (UxDebugClass.isDebugEnabled) {
                console.info(UxDebugClass.TAGLINE + UxDebugClass.INFO_TAGLINE + info);
            }
        };
        UxDebugClass.enableDebug = function (enableDebug) {
            UxDebugClass.isDebugEnabled = enableDebug;
        };
        UxDebugClass.TAGLINE = 'UXjs';
        UxDebugClass.ERROR_TAGLINE = '[ERROR]: ';
        UxDebugClass.WARNING_TAGLINE = '[WARNING]: ';
        UxDebugClass.INFO_TAGLINE = '[INFO]: ';
        UxDebugClass.isDebugEnabled = false;
        return UxDebugClass;
    }());
    exports.UxDebugClass = UxDebugClass;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ux/experience.class.ts":
/*!************************************!*\
  !*** ./src/ux/experience.class.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 *    __  _____   ___   __          __
 *   / / / /   | <  /  / /   ____ _/ /_  _____
 *  / / / / /| | / /  / /   / __ `/ __ `/ ___/
 * / /_/ / ___ |/ /  / /___/ /_/ / /_/ (__  )
 * `____/_/  |_/_/  /_____/`__,_/_.___/____/
 *
 * @package UXjs
 * @author UA1 Labs Developers https://ua1.us
 * @copyright Copyright (c) UA1 Labs
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The abstract class all experiences should inheret from.
     */
    var ExperienceClass = /** @class */ (function () {
        /**
         * The constructor.
         * @param id
         * @param element
         */
        function ExperienceClass(id, element) {
            this.id = id;
            this.element = element;
        }
        return ExperienceClass;
    }());
    exports.ExperienceClass = ExperienceClass;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhwZXJpZW5jZXMvYXJpYS9hcmlhLWNoZWNrYm94LmV4cGVyaWVjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXgtaGVscGVyLmNsYXNzLnRzIiwid2VicGFjazovLy8uL3NyYy91eC5jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V4L2RlYnVnLmNsYXNzLnRzIiwid2VicGFjazovLy8uL3NyYy91eC9leHBlcmllbmNlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7OztHQVVHOzs7O0lBUUMsMEJBTkssa0NBQWUsQ0FNTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUMsY0FBYyxFQUFFO2dCQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQzthQUN6RTtRQUNMLENBQUM7UUFFYSx3QkFBVyxHQUF6QixVQUEwQixXQUFvQjtZQUMxQyxZQUFZLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztRQUM5QyxDQUFDO1FBNUJzQixvQkFBTyxHQUFHLE1BQU0sQ0FBQztRQUVqQiwwQkFBYSxHQUFHLFdBQVcsQ0FBQztRQUU1Qiw0QkFBZSxHQUFHLGFBQWEsQ0FBQztRQUVoQyx5QkFBWSxHQUFHLFVBQVU7UUFFbEMsMkJBQWMsR0FBRyxLQUFLLENBQUM7UUFzQnpDLG1CQUFDO0tBQUE7SUFoQ1ksb0NBQVk7Ozs7Ozs7Ozs7Ozs7O0FDQXpCOzs7Ozs7Ozs7O0dBVUc7Ozs7SUFLSDs7T0FFRztJQUNIO1FBcUJJOzs7O1dBSUc7UUFDSCx5QkFBbUIsRUFBVSxFQUFFLE9BQThCO1lBQ3pELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQztRQUVMLHNCQUFDO0lBQUQsQ0FBQztJQS9CcUIsMENBQWUiLCJmaWxlIjoidXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy91eC50c1wiKTtcbiIsIi8qKlxuICogICAgX18gIF9fX19fICAgX19fICAgX18gICAgICAgICAgX19cbiAqICAgLyAvIC8gLyAgIHwgPCAgLyAgLyAvICAgX19fXyBfLyAvXyAgX19fX19cbiAqICAvIC8gLyAvIC98IHwgLyAvICAvIC8gICAvIF9fIGAvIF9fIGAvIF9fXy9cbiAqIC8gL18vIC8gX19fIHwvIC8gIC8gL19fXy8gL18vIC8gL18vIChfXyAgKVxuICogYF9fX18vXy8gIHxfL18vICAvX19fX18vYF9fLF8vXy5fX18vX19fXy9cbiAqXG4gKiBAcGFja2FnZSBVWGpzXG4gKiBAYXV0aG9yIFVBMSBMYWJzIERldmVsb3BlcnMgaHR0cHM6Ly91YTEudXNcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSBVQTEgTGFic1xuICovXG5cbmltcG9ydCB7IEV4cGVyaWVuY2VDbGFzcyB9IGZyb20gJ0B1eGpzL3V4L2V4cGVyaWVuY2UuY2xhc3MnO1xuaW1wb3J0IHsgRXhwZXJpZW5jZUZhY3RvcnlJbnRlcmZhY2UgfSBmcm9tICdAdXhqcy91eC9leHBlcmllbmNlLWZhY3RvcnkuaW50ZXJmYWNlJztcbmltcG9ydCB7IEV4cGVyaWVuY2VJbnRlcmZhY2UgfSBmcm9tICdAdXhqcy91eC9leHBlcmllbmNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBIVE1MRXhwZXJpZW5jZUVsZW1lbnQgfSBmcm9tICdAdXhqcy91eC9odG1sLWV4cGVyaWVuY2UtZWxlbWVudC5pbnRlcmZhY2UnO1xuXG5leHBvcnQge1xuICAgIEV4cGVyaWVuY2VDbGFzcyxcbiAgICBIVE1MRXhwZXJpZW5jZUVsZW1lbnQsXG4gICAgRXhwZXJpZW5jZUludGVyZmFjZSxcbiAgICBFeHBlcmllbmNlRmFjdG9yeUludGVyZmFjZVxufVxuIiwiaW1wb3J0IHsgRXhwZXJpZW5jZUNsYXNzIH0gZnJvbSAnQHV4anMvYXBpJztcbmltcG9ydCB7IHV4IH0gZnJvbSAnQHV4anMvdXgnO1xuXG4vKipcbiAqIEEgdXNlciBleHBlcmllbmNlIHRoYXQgaW1wbGVtZW50cyBmdW5jdGlvbmFsaXR5IGFuZCBlbmZvcmNlcyBiZXN0XG4gKiBwcmFjdGljZXMgZm9yIGNoZWNrYm94ZXMgYmFzZWQgb24gYmVzdCBwcmFjdGljZXMgaWRlbnRpZmllZCBieVxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy0xLjEvI2NoZWNrYm94LlxuICovXG5leHBvcnQgY2xhc3MgQXJpYUNoZWNrYm94RXhwZXJpZW5jZSBleHRlbmRzIEV4cGVyaWVuY2VDbGFzcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5BTUUgPSAnYXJpYS1jaGVja2JveCc7XG5cbiAgICBwdWJsaWMgb25Jbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgcHVibGljIG9uVXBkYXRlKCkgOiB2b2lkIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvbkRlYnVnRW5hYmxlZCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvbkRlYnVnRGlzYWJsZWQoKTogdm9pZCB7XG5cbiAgICB9XG5cbn1cbiIsIi8qKlxuICogICAgX18gIF9fX19fICAgX19fICAgX18gICAgICAgICAgX19cbiAqICAgLyAvIC8gLyAgIHwgPCAgLyAgLyAvICAgX19fXyBfLyAvXyAgX19fX19cbiAqICAvIC8gLyAvIC98IHwgLyAvICAvIC8gICAvIF9fIGAvIF9fIGAvIF9fXy9cbiAqIC8gL18vIC8gX19fIHwvIC8gIC8gL19fXy8gL18vIC8gL18vIChfXyAgKVxuICogYF9fX18vXy8gIHxfL18vICAvX19fX18vYF9fLF8vXy5fX18vX19fXy9cbiAqXG4gKiBAcGFja2FnZSBVWGpzXG4gKiBAYXV0aG9yIFVBMSBMYWJzIERldmVsb3BlcnMgaHR0cHM6Ly91YTEudXNcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSBVQTEgTGFic1xuICovXG5cbmltcG9ydCB7IEV4cGVyaWVuY2VGYWN0b3J5SW50ZXJmYWNlIH0gZnJvbSAnQHV4anMvdXgvZXhwZXJpZW5jZS1mYWN0b3J5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBFeHBlcmllbmNlSW50ZXJmYWNlIH0gZnJvbSAnQHV4anMvdXgvZXhwZXJpZW5jZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSFRNTEV4cGVyaWVuY2VFbGVtZW50IH0gZnJvbSAnQHV4anMvdXgvaHRtbC1leHBlcmllbmNlLWVsZW1lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFV4RGVidWdDbGFzcyB9IGZyb20gJ0B1eGpzL3V4L2RlYnVnLmNsYXNzJztcblxuLyoqXG4gKiBUaGlzIGhlbHBlciBjbGFzcyBpcyBhIHNpbmdsZXRvbiBpbnN0YW5jZSBhbmQgaXMgbWVhbnQgdG8gcHJvdmlkZSB0aGUgcHVibGljIFVYanNcbiAqIEFQSSB3aXRoIHRoZSBjb3JlIGxvZ2ljIHRvIG1ha2UgVVhqcyBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFV4SGVscGVyQ2xhc3Mge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFV4SGVscGVyQ2xhc3M7XG5cbiAgICAvKipcbiAgICAgKiBBIG1hcCBvZiBmYWN0b3JpZXMgZm9yIGJpbmRpbmcgZXhwZXJpZW5jZXMgdG8gZWxlbWVudHMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBleHBlcmllbmNlRmFjdG9yaWVzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IEV4cGVyaWVuY2VGYWN0b3J5SW50ZXJmYWNlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gdXgudXBkYXRlKCkgc2NhbiBpcyBpbiBwcm9ncmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNVcGRhdGVTY2FuSW5Qcm9ncmVzczogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gdXguZGVidWcoKSBzY2FuIGlzIGluIHByb2dyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc0RlYnVnU2NhbkluUHJvZ3Jlc3M6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV4cGVyaWVuY2VGYWN0b3JpZXMgPSB7fTtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVNjYW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEZWJ1Z1NjYW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXQoKTogVXhIZWxwZXJDbGFzcyB7XG4gICAgICAgIGlmICghVXhIZWxwZXJDbGFzcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgVXhIZWxwZXJDbGFzcy5pbnN0YW5jZSA9IG5ldyBVeEhlbHBlckNsYXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXhIZWxwZXJDbGFzcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYW4gZXhwZXJpZW5jZSB3aXRoaW4gdGhlIGZyYW1ld29yay4gSXQgdGFrZSBpbiBhIGZhY3RvcnkgcmVhZHkgdG8gYmUgYm91bmQgdG9cbiAgICAgKiBhbiBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBleHBlcmllbmNlXG4gICAgICogQHBhcmFtIGZhY3RvcnkgVGhlIGZhY3RvcnkgdGhhdCByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBleHBlcmllbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyRXhwZXJpZW5jZShuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IEV4cGVyaWVuY2VGYWN0b3J5SW50ZXJmYWNlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXhwZXJpZW5jZUZhY3Rvcmllc1tuYW1lXSA9IGZhY3Rvcnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgVVggb2JqZWN0IGhhcyBiZWVuIGJvdW5kIHRvIGFuIEhUTUxFbGVtZW50LiBJZiB0aGUgSFRNTEVsZW1lbnRcbiAgICAgKiBoYXMgdGhlIFVYIG9iamVjdCBib3VuZCB0byBpdCwgaXQgaXMgYW4gSFRNTEV4cGVyaWVuY2VFbGVtZW50LlxuICAgICAqIEBwYXJhbSBlbGVtZW50IEFueSBIVE1MRWxlbWVudFxuICAgICAqL1xuICAgIHB1YmxpYyBpc1V4Qm91bmRUb0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZXhwZXJpZW5jZUVsZW1lbnQgPSBlbGVtZW50IGFzIEhUTUxFeHBlcmllbmNlRWxlbWVudDtcbiAgICAgICAgaWYgKGV4cGVyaWVuY2VFbGVtZW50ICYmIGV4cGVyaWVuY2VFbGVtZW50LnV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyB0aGUgVVggb2JqZWN0IHRvIGFuIEhUTUxFbGVtZW50LlxuICAgICAqIEBwYXJhbSBlbGVtZW50IEFueSBIVE1MRWxlbWVudFxuICAgICAqL1xuICAgIHB1YmxpYyBiaW5kVXhUb0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50RXJyb3IgPSAnSW4gb3JkZXIgdG8gYmluZCBVWCB0byBhbiBlbGVtZW50LCAnICtcbiAgICAgICAgICAgICAgICAneW91IG11c3Qgc3BlY2lmeSB0aGUgZWxlbWVudCB5b3UgaW50ZW5kIHRvIGJpbmQuJztcbiAgICAgICAgICAgIFV4RGVidWdDbGFzcy5lcnJvcihlbGVtZW50RXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhwZXJpZW5jZUVsZW1lbnQgPSBlbGVtZW50IGFzIEhUTUxFeHBlcmllbmNlRWxlbWVudDtcbiAgICAgICAgaWYgKCF0aGlzLmlzVXhCb3VuZFRvRWxlbWVudChleHBlcmllbmNlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGV4cGVyaWVuY2VFbGVtZW50LnV4ID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1eCA9IChuYW1lOiBzdHJpbmcpOiBFeHBlcmllbmNlSW50ZXJmYWNlIHwgdW5kZWZpbmVkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGVyaWVuY2VFbGVtZW50Ll91eCAmJiBleHBlcmllbmNlRWxlbWVudC5fdXhbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleHBlcmllbmNlRWxlbWVudC5fdXhbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHV4LnVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlU2NhbkluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVcGRhdGVTY2FuSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBlcmllbmNlczogQXJyYXk8c3RyaW5nPiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZUVsZW1lbnQuZGF0YXNldC51eCA/IGV4cGVyaWVuY2VFbGVtZW50LmRhdGFzZXQudXguc3BsaXQoJyAnKSA6IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlcy5mb3JFYWNoKChleHBlcmllbmNlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cGVyaWVuY2VFbGVtZW50LnV4KGV4cGVyaWVuY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZEV4cGVyaWVuY2VUb0VsZW1lbnQoZXhwZXJpZW5jZSwgZXhwZXJpZW5jZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGVyaWVuY2VJbnN0YW5jZSA9IGV4cGVyaWVuY2VFbGVtZW50LnV4KGV4cGVyaWVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBlcmllbmNlSW5zdGFuY2UgJiYgZXhwZXJpZW5jZUluc3RhbmNlLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV4RGVidWdDbGFzcy5pbmZvKCd7JyArIGV4cGVyaWVuY2UgKyAnfS5vblVwZGF0ZSgpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJbnN0YW5jZS5vblVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1VwZGF0ZVNjYW5JblByb2dyZXNzID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRXhwZXJpZW5jZUVsZW1lbnRzID0gdGhpcy5nZXRFeHBlcmllbmNlRWxlbWVudENoaWxkcmVuKGV4cGVyaWVuY2VFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRXhwZXJpZW5jZUVsZW1lbnRzLmZvckVhY2goKGNoaWxkRXhwZXJpZW5jZUVsZW1lbnQ6IEhUTUxFeHBlcmllbmNlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZFV4VG9FbGVtZW50KGNoaWxkRXhwZXJpZW5jZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRXhwZXJpZW5jZUVsZW1lbnQudXgudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUVycm9yID0gJ0FuIHVwZGF0ZSB3YXMgaW52b2tlZCB3aXRoaW4gYW4gYWxyZWFkeSBydW5uaW5nIHVwZGF0ZSBsb29wLic7XG4gICAgICAgICAgICAgICAgICAgICAgICBVeERlYnVnQ2xhc3MuZXJyb3IodXBkYXRlRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB1eC5kZWJ1ZyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRGVidWdTY2FuSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwZXJpZW5jZXM6IEFycmF5PHN0cmluZz4gPVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZUVsZW1lbnQuZGF0YXNldC51eCA/IGV4cGVyaWVuY2VFbGVtZW50LmRhdGFzZXQudXguc3BsaXQoJyAnKSA6IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlcy5mb3JFYWNoKChleHBlcmllbmNlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cGVyaWVuY2VFbGVtZW50LnV4KGV4cGVyaWVuY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZEV4cGVyaWVuY2VUb0VsZW1lbnQoZXhwZXJpZW5jZSwgZXhwZXJpZW5jZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGVyaWVuY2VJbnN0YW5jZSA9IGV4cGVyaWVuY2VFbGVtZW50LnV4KGV4cGVyaWVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXhEZWJ1Z0NsYXNzLmlzRGVidWdFbmFibGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJbnN0YW5jZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlSW5zdGFuY2Uub25EZWJ1Z0VuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXhEZWJ1Z0NsYXNzLmluZm8oJ3snICsgZXhwZXJpZW5jZSArICd9Lm9uRGVidWdFbmFibGVkKCknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZUluc3RhbmNlLm9uRGVidWdFbmFibGVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIVV4RGVidWdDbGFzcy5pc0RlYnVnRW5hYmxlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlSW5zdGFuY2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZUluc3RhbmNlLm9uRGVidWdEaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVeERlYnVnQ2xhc3MuaW5mbygneycgKyBleHBlcmllbmNlICsgJ30ub25EZWJ1Z0Rpc2FibGVkKCknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZUluc3RhbmNlLm9uRGVidWdEaXNhYmxlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEV4cGVyaWVuY2VFbGVtZW50cyA9IHRoaXMuZ2V0RXhwZXJpZW5jZUVsZW1lbnRDaGlsZHJlbihleHBlcmllbmNlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEV4cGVyaWVuY2VFbGVtZW50cy5mb3JFYWNoKChjaGlsZEV4cGVyaWVuY2VFbGVtZW50OiBIVE1MRXhwZXJpZW5jZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmRVeFRvRWxlbWVudChjaGlsZEV4cGVyaWVuY2VFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEV4cGVyaWVuY2VFbGVtZW50LnV4LmRlYnVnKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdXgucGFyZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFeHBlcmllbmNlRWxlbWVudFBhcmVudChleHBlcmllbmNlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB1eC5jaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhwZXJpZW5jZUVsZW1lbnRDaGlsZHJlbihleHBlcmllbmNlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXg7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgYW4gZXhwZXJpZW5jZSB0byBhbiBlbGVtZW50IGFuZCBydW5zIHRoZSBleHBlcmllbmNlJ3Mgb25Jbml0KCkgbWV0aG9kLlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBleHBlcmllbmNlLiBUaGUgZXhwZXJpZW5jZSBtdXN0IGJlIGZpcnN0IHJlZ2lzdGVyZWQgd2l0aCB1eC5leHBlcmllbmNlKCkgZmlyc3QuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgYW4gSFRNTEVsZW1lbnQgeW91IGludGVuZCB0byBiaW5kIHRoZSBleHBlcmluZWNlIHRvLlxuICAgICAqL1xuICAgIHB1YmxpYyBiaW5kRXhwZXJpZW5jZVRvRWxlbWVudChuYW1lOiBzdHJpbmcsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5leHBlcmllbmNlRmFjdG9yaWVzW25hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lRXJyb3IgPSAnVGhlIHVzZXIgZXhwZXJpZW5jZSBcIicgKyBuYW1lICsgJ1wiIG11c3QgYmUgcmVnaXN0ZXJlZCB3aXRoIFVYanMnO1xuICAgICAgICAgICAgVXhEZWJ1Z0NsYXNzLndhcm4obmFtZUVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRFcnJvciA9ICdJbiBvcmRlciB0byBiaW5kIGFuIGV4cGVyaWVuY2UgdG8gYW4gZWxlbWVudCwgJyArXG4gICAgICAgICAgICAgICAgJ3lvdSBtdXN0IHNwZWNpZnkgdGhlIGVsZW1lbnQgeW91IGludGVuZCB0byBiaW5kIHRoZSBleHBlcmllbmNlIHRvLic7XG4gICAgICAgICAgICBVeERlYnVnQ2xhc3MuZXJyb3IoZWxlbWVudEVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4cGVyaWVuY2VFbGVtZW50OiBIVE1MRXhwZXJpZW5jZUVsZW1lbnQgPSBlbGVtZW50IGFzIEhUTUxFeHBlcmllbmNlRWxlbWVudDtcbiAgICAgICAgZXhwZXJpZW5jZUVsZW1lbnQuX3V4ID0gZXhwZXJpZW5jZUVsZW1lbnQuX3V4IHx8IHt9O1xuICAgICAgICBpZiAoIWV4cGVyaWVuY2VFbGVtZW50Ll91eFtuYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgZXhwZXJpZW5jZSA9IHRoaXMuZXhwZXJpZW5jZUZhY3Rvcmllc1tuYW1lXShuYW1lLCBleHBlcmllbmNlRWxlbWVudClcbiAgICAgICAgICAgIGlmIChleHBlcmllbmNlLm9uSW5pdCkge1xuICAgICAgICAgICAgICAgIFV4RGVidWdDbGFzcy5pbmZvKCd7JyArIG5hbWUgKyAnfS5vbkluaXQoKScpO1xuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2Uub25Jbml0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHBlcmllbmNlRWxlbWVudC5fdXhbbmFtZV0gPSBleHBlcmllbmNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYW5kIHJldHVybnMgdGhlIEhUTUxFeHBlcmllbmNlRWxlbWVudCBwYXJlbnQgb2YgYW55IEhUTUxFbGVtZW50IHBhc3NlZCBpbi5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCBIVE1MRWxlbWVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRFeHBlcmllbmNlRWxlbWVudFBhcmVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFeHBlcmllbmNlRWxlbWVudCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHZhciBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmICghcGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgICYmIHBhcmVudEVsZW1lbnQuZGF0YXNldFxuICAgICAgICAgICAgJiYgcGFyZW50RWxlbWVudC5kYXRhc2V0LnV4XG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQgYXMgSFRNTEV4cGVyaWVuY2VFbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFeHBlcmllbmNlRWxlbWVudFBhcmVudChwYXJlbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB0aGUgSFRNTEV4cGVyaWVuY2VFbGVtZW50IGNoaWxkcmVuIG9mIGFueSBIVE1MRWxlbWVudFxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgcHVibGljIGdldEV4cGVyaWVuY2VFbGVtZW50Q2hpbGRyZW4oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBBcnJheTxIVE1MRXhwZXJpZW5jZUVsZW1lbnQ+IHtcbiAgICAgICAgY29uc3QgcG9zc2libGVDaGlsZHJlbjogTm9kZUxpc3RPZjxIVE1MRXhwZXJpZW5jZUVsZW1lbnQ+ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS11eF0nKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5FbGVtZW50czogQXJyYXk8SFRNTEV4cGVyaWVuY2VFbGVtZW50PiA9IFtdO1xuICAgICAgICBwb3NzaWJsZUNoaWxkcmVuLmZvckVhY2goKHBvc3NpYmxlQ2hpbGRFbGVtZW50OiBIVE1MRXhwZXJpZW5jZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkUGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0RXhwZXJpZW5jZUVsZW1lbnRQYXJlbnQocG9zc2libGVDaGlsZEVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGNoaWxkUGFyZW50RWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuRWxlbWVudHMucHVzaChwb3NzaWJsZUNoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW5FbGVtZW50cztcbiAgICB9XG5cbn1cbiIsIi8qKlxuICogICAgX18gIF9fX19fICAgX19fICAgX18gICAgICAgICAgX19cbiAqICAgLyAvIC8gLyAgIHwgPCAgLyAgLyAvICAgX19fXyBfLyAvXyAgX19fX19cbiAqICAvIC8gLyAvIC98IHwgLyAvICAvIC8gICAvIF9fIGAvIF9fIGAvIF9fXy9cbiAqIC8gL18vIC8gX19fIHwvIC8gIC8gL19fXy8gL18vIC8gL18vIChfXyAgKVxuICogYF9fX18vXy8gIHxfL18vICAvX19fX18vYF9fLF8vXy5fX18vX19fXy9cbiAqXG4gKiBAcGFja2FnZSBVWGpzXG4gKiBAYXV0aG9yIFVBMSBMYWJzIERldmVsb3BlcnMgaHR0cHM6Ly91YTEudXNcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSBVQTEgTGFic1xuICovXG5cbmltcG9ydCB7IEV4cGVyaWVuY2VGYWN0b3J5SW50ZXJmYWNlIH0gZnJvbSAnQHV4anMvdXgvZXhwZXJpZW5jZS1mYWN0b3J5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBIVE1MRXhwZXJpZW5jZUVsZW1lbnQgfSBmcm9tICdAdXhqcy91eC9odG1sLWV4cGVyaWVuY2UtZWxlbWVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVXhEZWJ1Z0NsYXNzIH0gZnJvbSAnQHV4anMvdXgvZGVidWcuY2xhc3MnO1xuaW1wb3J0IHsgVXhIZWxwZXJDbGFzcyB9IGZyb20gJ0B1eGpzL3V4LWhlbHBlci5jbGFzcyc7XG5cbi8qKlxuICogVGhlIG1haW4gZW50cnkgcG9pbnQgaW50byB0aGUgVVhqcyBBUEkuIFRoaXMgY2xhc3MgdGllcyB0b2dldGhlciBhbGwgb2YgdGhlIGxvZ2ljXG4gKiBiZXR3ZWVuIEhUTUxFbGVtZW50cyBhbmQgdGhlIGV4cGVyaWVuY2UgZGVmaW5pdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBVeENsYXNzIHtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhbiBleHBlcmllbmNlIHdpdGggdGhlIFVYanMgZnJhbWV3b3JrLlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIHRoZSB0aGF0IHdpbGwgdGllIHRoZSBleHBlcmllbmNlIGluc3RhbmNlIHRvIHRoZSBodG1sIG5vZGUgW2RhdGEtdXhdXG4gICAgICogQHBhcmFtIGZhY3RvcnkgQSBjYWxsYmFjayB0aGF0IHJldHVybnMgYW4gb2JqZWN0IHRoYXQgbWF0Y2hlcyB0aGUgRXhwZXJpZW5jZUludGVyZmFjZVxuICAgICAqL1xuICAgIHB1YmxpYyBleHBlcmllbmNlKG5hbWU6IHN0cmluZywgZmFjdG9yeTogRXhwZXJpZW5jZUZhY3RvcnlJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdXhIZWxwZXJDbGFzcyA9IFV4SGVscGVyQ2xhc3MuZ2V0KCk7XG4gICAgICAgIHV4SGVscGVyQ2xhc3MucmVnaXN0ZXJFeHBlcmllbmNlKG5hbWUsIGZhY3RvcnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHV4IGV4cGVyaWVuY2VzIGZyb20gdGhlIERPTS4gQWxzbyBhbiBhbGlhcyBmb3IgdXgudXBkYXRlKCkuXG4gICAgICovXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXNzdWVzIGEgbm90aWZpY2F0aW9uIHRvIGFsbCBleHBlcmllbmNlcyB0aGF0IHNvbWV0aGluZyBoYXMgdXBkYXRlZCBhbmQgd2lsbFxuICAgICAqIGludm9rZSBlYWNoIGV4cGVyaWVuY2UncyBvblVwZGF0ZSgpIGNhbGxiYWNrIG1ldGhvZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB1eEhlbHBlckNsYXNzID0gVXhIZWxwZXJDbGFzcy5nZXQoKTtcbiAgICAgICAgY29uc3QgZXhwZXJpZW5jZUVsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFeHBlcmllbmNlRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS11eF0nKTtcbiAgICAgICAgZXhwZXJpZW5jZUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFeHBlcmllbmNlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFzUGFyZW50RXhwZXJpZW5jZUVsZW1lbnQ6IGJvb2xlYW4gPSAodXhIZWxwZXJDbGFzcy5nZXRFeHBlcmllbmNlRWxlbWVudFBhcmVudChlbGVtZW50KSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWhhc1BhcmVudEV4cGVyaWVuY2VFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdXhIZWxwZXJDbGFzcy5iaW5kVXhUb0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC51eC51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHVybnMgb24gb3Igb2ZmIGRlYnVnZ2luZyBvbiB0aGUgcGFnZS4gV2hlbiB0aGlzIG1ldGhvZCBpcyBpbnZva2VkLCBhIG5vdGlmaWNhdGlvbiB3aWxsXG4gICAgICogYmUgc2VudCB0byBlYWNoIGV4cGVyaWVuY2UgdG8gaW52b2tlIGVpdGhlciB0aGUgb25EZWJ1Z0VuYWJsZWQoKSBvciBvbkRlYnVnRGlzYWJsZWQoKVxuICAgICAqIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gZW5hYmxlRGVidWcgU2hvdWxkIHdlIGVuYWJsZSBkZWJ1Zy4gRGVidWcgaXMgZW5hYmxlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWJ1ZyhlbmFibGVEZWJ1ZzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBjb25zdCB1eEhlbHBlckNsYXNzID0gVXhIZWxwZXJDbGFzcy5nZXQoKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkRW5hYmxlRGVidWcgPSAoZW5hYmxlRGVidWcgIT09IGZhbHNlKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgVXhEZWJ1Z0NsYXNzLmVuYWJsZURlYnVnKHNob3VsZEVuYWJsZURlYnVnKTtcblxuICAgICAgICBjb25zdCBleHBlcmllbmNlRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTEV4cGVyaWVuY2VFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXV4XScpO1xuICAgICAgICBleHBlcmllbmNlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudDogSFRNTEV4cGVyaWVuY2VFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYXNQYXJlbnRFeHBlcmllbmNlRWxlbWVudDogYm9vbGVhbiA9ICh1eEhlbHBlckNsYXNzLmdldEV4cGVyaWVuY2VFbGVtZW50UGFyZW50KGVsZW1lbnQpKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghaGFzUGFyZW50RXhwZXJpZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB1eEhlbHBlckNsYXNzLmJpbmRVeFRvRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnV4LmRlYnVnKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8qKlxuICogICAgX18gIF9fX19fICAgX19fICAgX18gICAgICAgICAgX19cbiAqICAgLyAvIC8gLyAgIHwgPCAgLyAgLyAvICAgX19fXyBfLyAvXyAgX19fX19cbiAqICAvIC8gLyAvIC98IHwgLyAvICAvIC8gICAvIF9fIGAvIF9fIGAvIF9fXy9cbiAqIC8gL18vIC8gX19fIHwvIC8gIC8gL19fXy8gL18vIC8gL18vIChfXyAgKVxuICogYF9fX18vXy8gIHxfL18vICAvX19fX18vYF9fLF8vXy5fX18vX19fXy9cbiAqXG4gKiBAcGFja2FnZSBVWGpzXG4gKiBAYXV0aG9yIFVBMSBMYWJzIERldmVsb3BlcnMgaHR0cHM6Ly91YTEudXNcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSBVQTEgTGFic1xuICovXG5cbmltcG9ydCB7IEFyaWFDaGVja2JveEV4cGVyaWVuY2UgfSBmcm9tICdAdXhqcy9leHBlcmllbmNlcy9hcmlhL2FyaWEtY2hlY2tib3guZXhwZXJpZWNlJztcbmltcG9ydCB7IEhUTUxFeHBlcmllbmNlRWxlbWVudCB9IGZyb20gJ0B1eGpzL3V4L2h0bWwtZXhwZXJpZW5jZS1lbGVtZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBVeENsYXNzIH0gZnJvbSAnQHV4anMvdXguY2xhc3MnO1xuXG5jb25zdCB1eCA9IG5ldyBVeENsYXNzKCk7XG5cbi8vIHJlZ2lzdGVyaW5nIGRlZmF1bHQgZXhwZXJpZW5jZXNcbnV4LmV4cGVyaWVuY2UoQXJpYUNoZWNrYm94RXhwZXJpZW5jZS5OQU1FLCAoaWQ6IHN0cmluZywgZWxlbWVudDogSFRNTEV4cGVyaWVuY2VFbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBBcmlhQ2hlY2tib3hFeHBlcmllbmNlKGlkLCBlbGVtZW50KTtcbn0pO1xuXG4vLyBleHBvcnRpbmcgdXggdG8gd2luZG93IG9iamVjdFxuKDxhbnk+d2luZG93KS51eCA9IHV4O1xuXG5leHBvcnQgeyB1eCB9O1xuIiwiZXhwb3J0IGNsYXNzIFV4RGVidWdDbGFzcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRBR0xJTkUgPSAnVVhqcyc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVSUk9SX1RBR0xJTkUgPSAnW0VSUk9SXTogJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0FSTklOR19UQUdMSU5FID0gJ1tXQVJOSU5HXTogJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU5GT19UQUdMSU5FID0gJ1tJTkZPXTogJ1xuXG4gICAgcHVibGljIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBlcnJvcihlcnJvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoVXhEZWJ1Z0NsYXNzLlRBR0xJTkUgKyBVeERlYnVnQ2xhc3MuRVJST1JfVEFHTElORSArIGVycm9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHdhcm4od2FybmluZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChVeERlYnVnQ2xhc3MuaXNEZWJ1Z0VuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihVeERlYnVnQ2xhc3MuVEFHTElORSArIFV4RGVidWdDbGFzcy5XQVJOSU5HX1RBR0xJTkUgKyB3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaW5mbyhpbmZvOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV4RGVidWdDbGFzcy5pc0RlYnVnRW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFV4RGVidWdDbGFzcy5UQUdMSU5FICsgVXhEZWJ1Z0NsYXNzLklORk9fVEFHTElORSArIGluZm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBlbmFibGVEZWJ1ZyhlbmFibGVEZWJ1ZzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBVeERlYnVnQ2xhc3MuaXNEZWJ1Z0VuYWJsZWQgPSBlbmFibGVEZWJ1ZztcbiAgICB9XG5cbn1cbiIsIi8qKlxuICogICAgX18gIF9fX19fICAgX19fICAgX18gICAgICAgICAgX19cbiAqICAgLyAvIC8gLyAgIHwgPCAgLyAgLyAvICAgX19fXyBfLyAvXyAgX19fX19cbiAqICAvIC8gLyAvIC98IHwgLyAvICAvIC8gICAvIF9fIGAvIF9fIGAvIF9fXy9cbiAqIC8gL18vIC8gX19fIHwvIC8gIC8gL19fXy8gL18vIC8gL18vIChfXyAgKVxuICogYF9fX18vXy8gIHxfL18vICAvX19fX18vYF9fLF8vXy5fX18vX19fXy9cbiAqXG4gKiBAcGFja2FnZSBVWGpzXG4gKiBAYXV0aG9yIFVBMSBMYWJzIERldmVsb3BlcnMgaHR0cHM6Ly91YTEudXNcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSBVQTEgTGFic1xuICovXG5cbmltcG9ydCB7IEV4cGVyaWVuY2VJbnRlcmZhY2UgfSBmcm9tICdAdXhqcy91eC9leHBlcmllbmNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBIVE1MRXhwZXJpZW5jZUVsZW1lbnQgfSBmcm9tICdAdXhqcy91eC9odG1sLWV4cGVyaWVuY2UtZWxlbWVudC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBhYnN0cmFjdCBjbGFzcyBhbGwgZXhwZXJpZW5jZXMgc2hvdWxkIGluaGVyZXQgZnJvbS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV4cGVyaWVuY2VDbGFzcyBpbXBsZW1lbnRzIEV4cGVyaWVuY2VJbnRlcmZhY2Uge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIG9mIHRoZSBleHBlcmllbmNlLiBUaGlzIGV4cGVyaWVuY2UgaWQgd2lsbCBtYXRjaCB3aGF0XG4gICAgICogeW91IGRlY2xhcmUgaW4gdGhlIEhUTUwuXG4gICAgICpcbiAgICAgKiBleGFtcGxlOlxuICAgICAqIDxkaXYgZGF0YS11eD1cImV4cGVyaWVuY2UxXCI+PC9kaXY+XG4gICAgICpcbiAgICAgKiBJbiB0aGUgY2FzZSBhYm92ZSwgXCJleHBlcmllbmNlMVwiIHdpbGwgYmUgdGhlIGlkXG4gICAgICovXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgSFRNTEVsZW1lbnQgdGhlIGV4cGVyaWVuY2UgaXMgdGllZCB0by4gVGhlIHJlYXNvbiBpdCBpcyBkZWZpbmVkXG4gICAgICogYXMgYSBIVE1MRXhwZXJpZW5jZUVsZW1lbnQgaXMgYmVjYXVzZSBVWGpzIGFkZHMgYSBcInV4c1wiIG9iamVjdCB0byB0aGVcbiAgICAgKiBIVE1MRWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB0aGUgaW5zdGFuY2VzIG9mIHRoZSBleHBlcmllbmNlcyB0aWVkXG4gICAgICogdG8gdGhhdCBwYXJ0aWN1bGFyIEhUTUxFbGVtZW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBlbGVtZW50OiBIVE1MRXhwZXJpZW5jZUVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3IuXG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgZWxlbWVudDogSFRNTEV4cGVyaWVuY2VFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=