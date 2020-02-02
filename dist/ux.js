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
 * @package UX2
 * @author UA1 Labs Developers https://ua1.us
 * @copyright Copyright (c) UA1 Labs
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @ux2/ux/debug.class */ "./src/ux/debug.class.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, debug_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * This helper class is a singleton instance and is meant to provide the public UX2
     * API with the core logic to make UX2 function.
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
                var nameError = 'The user experience "' + name + '" must be registered with UX2';
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
 * @package UX2
 * @author UA1 Labs Developers https://ua1.us
 * @copyright Copyright (c) UA1 Labs
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @ux2/ux/debug.class */ "./src/ux/debug.class.ts"), __webpack_require__(/*! @ux2/ux-helper.class */ "./src/ux-helper.class.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, debug_class_1, ux_helper_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The main entry point into the UX2 API. This class ties together all of the logic
     * between HTMLElements and the experience definitions.
     */
    var UxClass = /** @class */ (function () {
        function UxClass() {
        }
        /**
         * Registers an experience with the UX2 framework.
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
 * @package UX2
 * @author UA1 Labs Developers https://ua1.us
 * @copyright Copyright (c) UA1 Labs
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @ux2/ux.class */ "./src/ux.class.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ux_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ux2 = new ux_class_1.UxClass();
    exports.ux2 = ux2;
    // exporting ux to window object
    window.ux2 = ux2;
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
        UxDebugClass.TAGLINE = 'UX2';
        UxDebugClass.ERROR_TAGLINE = '[ERROR]: ';
        UxDebugClass.WARNING_TAGLINE = '[WARNING]: ';
        UxDebugClass.INFO_TAGLINE = '[INFO]: ';
        UxDebugClass.isDebugEnabled = false;
        return UxDebugClass;
    }());
    exports.UxDebugClass = UxDebugClass;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V4LWhlbHBlci5jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXguY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V4LnRzIiwid2VicGFjazovLy8uL3NyYy91eC9kZWJ1Zy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7R0FVRzs7OztJQU9IOzs7T0FHRztJQUNIO1FBd0JJOztXQUVHO1FBQ0g7WUFDSSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7WUFDcEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDO1FBRUQ7O1dBRUc7UUFDVyxpQkFB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N0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDN0UsQ0FBQztRQUVhLGlCQUFJLEdBQWxCLFVBQW1CLE9BQWU7WUFDOUIsSUFBSSxZQUFZLENBQUMsY0FBYyxFQUFFO2dCQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsQ0FBQzthQUMvRTtRQUNMLENBQUM7UUFFYSxpQkFBSSxHQUFsQixVQUFtQixJQUFZO1lBQzNCLElBQUksWUFBWSxDQUFDLGNBQWMsRUFBRTtnQkFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDekU7UUFDTCxDQUFDO1FBRWEsd0JBQVcsR0FBekIsVUFBMEIsV0FBb0I7WUFDMUMsWUFBWSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUM7UUFDOUMsQ0FBQztRQTVCc0Isb0JBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsMEJBQWEsR0FBRyxXQUFXLENBQUM7UUFFNUIsNEJBQWUsR0FBRyxhQUFhLENBQUM7UUFFaEMseUJBQVksR0FBRyxVQUFVO1FBRWxDLDJCQUFjLEdBQUcsS0FBSyxDQUFDO1FBc0J6QyxtQkFBQztLQUFBO0lBaENZLG9DQUFZIiwiZmlsZSI6InV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdXgudHNcIik7XG4iLCIvKipcbiAqICAgIF9fICBfX19fXyAgIF9fXyAgIF9fICAgICAgICAgIF9fXG4gKiAgIC8gLyAvIC8gICB8IDwgIC8gIC8gLyAgIF9fX18gXy8gL18gIF9fX19fXG4gKiAgLyAvIC8gLyAvfCB8IC8gLyAgLyAvICAgLyBfXyBgLyBfXyBgLyBfX18vXG4gKiAvIC9fLyAvIF9fXyB8LyAvICAvIC9fX18vIC9fLyAvIC9fLyAoX18gIClcbiAqIGBfX19fL18vICB8Xy9fLyAgL19fX19fL2BfXyxfL18uX19fL19fX18vXG4gKlxuICogQHBhY2thZ2UgVVgyXG4gKiBAYXV0aG9yIFVBMSBMYWJzIERldmVsb3BlcnMgaHR0cHM6Ly91YTEudXNcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSBVQTEgTGFic1xuICovXG5cbmltcG9ydCB7IEV4cGVyaWVuY2VGYWN0b3J5SW50ZXJmYWNlIH0gZnJvbSAnQHV4Mi91eC9leHBlcmllbmNlLWZhY3RvcnkuaW50ZXJmYWNlJztcbmltcG9ydCB7IEV4cGVyaWVuY2VJbnRlcmZhY2UgfSBmcm9tICdAdXgyL3V4L2V4cGVyaWVuY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IEhUTUxFeHBlcmllbmNlRWxlbWVudCB9IGZyb20gJ0B1eDIvdXgvaHRtbC1leHBlcmllbmNlLWVsZW1lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFV4RGVidWdDbGFzcyB9IGZyb20gJ0B1eDIvdXgvZGVidWcuY2xhc3MnO1xuXG4vKipcbiAqIFRoaXMgaGVscGVyIGNsYXNzIGlzIGEgc2luZ2xldG9uIGluc3RhbmNlIGFuZCBpcyBtZWFudCB0byBwcm92aWRlIHRoZSBwdWJsaWMgVVgyXG4gKiBBUEkgd2l0aCB0aGUgY29yZSBsb2dpYyB0byBtYWtlIFVYMiBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFV4SGVscGVyQ2xhc3Mge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFV4SGVscGVyQ2xhc3M7XG5cbiAgICAvKipcbiAgICAgKiBBIG1hcCBvZiBmYWN0b3JpZXMgZm9yIGJpbmRpbmcgZXhwZXJpZW5jZXMgdG8gZWxlbWVudHMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBleHBlcmllbmNlRmFjdG9yaWVzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IEV4cGVyaWVuY2VGYWN0b3J5SW50ZXJmYWNlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gdXgudXBkYXRlKCkgc2NhbiBpcyBpbiBwcm9ncmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNVcGRhdGVTY2FuSW5Qcm9ncmVzczogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gdXguZGVidWcoKSBzY2FuIGlzIGluIHByb2dyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc0RlYnVnU2NhbkluUHJvZ3Jlc3M6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV4cGVyaWVuY2VGYWN0b3JpZXMgPSB7fTtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVNjYW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEZWJ1Z1NjYW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXQoKTogVXhIZWxwZXJDbGFzcyB7XG4gICAgICAgIGlmICghVXhIZWxwZXJDbGFzcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgVXhIZWxwZXJDbGFzcy5pbnN0YW5jZSA9IG5ldyBVeEhlbHBlckNsYXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXhIZWxwZXJDbGFzcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYW4gZXhwZXJpZW5jZSB3aXRoaW4gdGhlIGZyYW1ld29yay4gSXQgdGFrZSBpbiBhIGZhY3RvcnkgcmVhZHkgdG8gYmUgYm91bmQgdG9cbiAgICAgKiBhbiBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBleHBlcmllbmNlXG4gICAgICogQHBhcmFtIGZhY3RvcnkgVGhlIGZhY3RvcnkgdGhhdCByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBleHBlcmllbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyRXhwZXJpZW5jZShuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IEV4cGVyaWVuY2VGYWN0b3J5SW50ZXJmYWNlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXhwZXJpZW5jZUZhY3Rvcmllc1tuYW1lXSA9IGZhY3Rvcnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgVVggb2JqZWN0IGhhcyBiZWVuIGJvdW5kIHRvIGFuIEhUTUxFbGVtZW50LiBJZiB0aGUgSFRNTEVsZW1lbnRcbiAgICAgKiBoYXMgdGhlIFVYIG9iamVjdCBib3VuZCB0byBpdCwgaXQgaXMgYW4gSFRNTEV4cGVyaWVuY2VFbGVtZW50LlxuICAgICAqIEBwYXJhbSBlbGVtZW50IEFueSBIVE1MRWxlbWVudFxuICAgICAqL1xuICAgIHB1YmxpYyBpc1V4Qm91bmRUb0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZXhwZXJpZW5jZUVsZW1lbnQgPSBlbGVtZW50IGFzIEhUTUxFeHBlcmllbmNlRWxlbWVudDtcbiAgICAgICAgaWYgKGV4cGVyaWVuY2VFbGVtZW50ICYmIGV4cGVyaWVuY2VFbGVtZW50LnV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyB0aGUgVVggb2JqZWN0IHRvIGFuIEhUTUxFbGVtZW50LlxuICAgICAqIEBwYXJhbSBlbGVtZW50IEFueSBIVE1MRWxlbWVudFxuICAgICAqL1xuICAgIHB1YmxpYyBiaW5kVXhUb0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50RXJyb3IgPSAnSW4gb3JkZXIgdG8gYmluZCBVWCB0byBhbiBlbGVtZW50LCAnICtcbiAgICAgICAgICAgICAgICAneW91IG11c3Qgc3BlY2lmeSB0aGUgZWxlbWVudCB5b3UgaW50ZW5kIHRvIGJpbmQuJztcbiAgICAgICAgICAgIFV4RGVidWdDbGFzcy5lcnJvcihlbGVtZW50RXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhwZXJpZW5jZUVsZW1lbnQgPSBlbGVtZW50IGFzIEhUTUxFeHBlcmllbmNlRWxlbWVudDtcbiAgICAgICAgaWYgKCF0aGlzLmlzVXhCb3VuZFRvRWxlbWVudChleHBlcmllbmNlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGV4cGVyaWVuY2VFbGVtZW50LnV4ID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1eCA9IChuYW1lOiBzdHJpbmcpOiBFeHBlcmllbmNlSW50ZXJmYWNlIHwgdW5kZWZpbmVkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGVyaWVuY2VFbGVtZW50Ll91eCAmJiBleHBlcmllbmNlRWxlbWVudC5fdXhbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleHBlcmllbmNlRWxlbWVudC5fdXhbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHV4LnVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlU2NhbkluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVcGRhdGVTY2FuSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBlcmllbmNlczogQXJyYXk8c3RyaW5nPiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZUVsZW1lbnQuZGF0YXNldC51eCA/IGV4cGVyaWVuY2VFbGVtZW50LmRhdGFzZXQudXguc3BsaXQoJyAnKSA6IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlcy5mb3JFYWNoKChleHBlcmllbmNlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cGVyaWVuY2VFbGVtZW50LnV4KGV4cGVyaWVuY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZEV4cGVyaWVuY2VUb0VsZW1lbnQoZXhwZXJpZW5jZSwgZXhwZXJpZW5jZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGVyaWVuY2VJbnN0YW5jZSA9IGV4cGVyaWVuY2VFbGVtZW50LnV4KGV4cGVyaWVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBlcmllbmNlSW5zdGFuY2UgJiYgZXhwZXJpZW5jZUluc3RhbmNlLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV4RGVidWdDbGFzcy5pbmZvKCd7JyArIGV4cGVyaWVuY2UgKyAnfS5vblVwZGF0ZSgpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJbnN0YW5jZS5vblVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1VwZGF0ZVNjYW5JblByb2dyZXNzID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRXhwZXJpZW5jZUVsZW1lbnRzID0gdGhpcy5nZXRFeHBlcmllbmNlRWxlbWVudENoaWxkcmVuKGV4cGVyaWVuY2VFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRXhwZXJpZW5jZUVsZW1lbnRzLmZvckVhY2goKGNoaWxkRXhwZXJpZW5jZUVsZW1lbnQ6IEhUTUxFeHBlcmllbmNlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZFV4VG9FbGVtZW50KGNoaWxkRXhwZXJpZW5jZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRXhwZXJpZW5jZUVsZW1lbnQudXgudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUVycm9yID0gJ0FuIHVwZGF0ZSB3YXMgaW52b2tlZCB3aXRoaW4gYW4gYWxyZWFkeSBydW5uaW5nIHVwZGF0ZSBsb29wLic7XG4gICAgICAgICAgICAgICAgICAgICAgICBVeERlYnVnQ2xhc3MuZXJyb3IodXBkYXRlRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB1eC5kZWJ1ZyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRGVidWdTY2FuSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwZXJpZW5jZXM6IEFycmF5PHN0cmluZz4gPVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZUVsZW1lbnQuZGF0YXNldC51eCA/IGV4cGVyaWVuY2VFbGVtZW50LmRhdGFzZXQudXguc3BsaXQoJyAnKSA6IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlcy5mb3JFYWNoKChleHBlcmllbmNlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cGVyaWVuY2VFbGVtZW50LnV4KGV4cGVyaWVuY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZEV4cGVyaWVuY2VUb0VsZW1lbnQoZXhwZXJpZW5jZSwgZXhwZXJpZW5jZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGVyaWVuY2VJbnN0YW5jZSA9IGV4cGVyaWVuY2VFbGVtZW50LnV4KGV4cGVyaWVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXhEZWJ1Z0NsYXNzLmlzRGVidWdFbmFibGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJbnN0YW5jZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlSW5zdGFuY2Uub25EZWJ1Z0VuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXhEZWJ1Z0NsYXNzLmluZm8oJ3snICsgZXhwZXJpZW5jZSArICd9Lm9uRGVidWdFbmFibGVkKCknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZUluc3RhbmNlLm9uRGVidWdFbmFibGVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIVV4RGVidWdDbGFzcy5pc0RlYnVnRW5hYmxlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlSW5zdGFuY2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZUluc3RhbmNlLm9uRGVidWdEaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVeERlYnVnQ2xhc3MuaW5mbygneycgKyBleHBlcmllbmNlICsgJ30ub25EZWJ1Z0Rpc2FibGVkKCknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZUluc3RhbmNlLm9uRGVidWdEaXNhYmxlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEV4cGVyaWVuY2VFbGVtZW50cyA9IHRoaXMuZ2V0RXhwZXJpZW5jZUVsZW1lbnRDaGlsZHJlbihleHBlcmllbmNlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEV4cGVyaWVuY2VFbGVtZW50cy5mb3JFYWNoKChjaGlsZEV4cGVyaWVuY2VFbGVtZW50OiBIVE1MRXhwZXJpZW5jZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmRVeFRvRWxlbWVudChjaGlsZEV4cGVyaWVuY2VFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEV4cGVyaWVuY2VFbGVtZW50LnV4LmRlYnVnKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdXgucGFyZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFeHBlcmllbmNlRWxlbWVudFBhcmVudChleHBlcmllbmNlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB1eC5jaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhwZXJpZW5jZUVsZW1lbnRDaGlsZHJlbihleHBlcmllbmNlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXg7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgYW4gZXhwZXJpZW5jZSB0byBhbiBlbGVtZW50IGFuZCBydW5zIHRoZSBleHBlcmllbmNlJ3Mgb25Jbml0KCkgbWV0aG9kLlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBleHBlcmllbmNlLiBUaGUgZXhwZXJpZW5jZSBtdXN0IGJlIGZpcnN0IHJlZ2lzdGVyZWQgd2l0aCB1eC5leHBlcmllbmNlKCkgZmlyc3QuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgYW4gSFRNTEVsZW1lbnQgeW91IGludGVuZCB0byBiaW5kIHRoZSBleHBlcmluZWNlIHRvLlxuICAgICAqL1xuICAgIHB1YmxpYyBiaW5kRXhwZXJpZW5jZVRvRWxlbWVudChuYW1lOiBzdHJpbmcsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5leHBlcmllbmNlRmFjdG9yaWVzW25hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lRXJyb3IgPSAnVGhlIHVzZXIgZXhwZXJpZW5jZSBcIicgKyBuYW1lICsgJ1wiIG11c3QgYmUgcmVnaXN0ZXJlZCB3aXRoIFVYMic7XG4gICAgICAgICAgICBVeERlYnVnQ2xhc3Mud2FybihuYW1lRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudEVycm9yID0gJ0luIG9yZGVyIHRvIGJpbmQgYW4gZXhwZXJpZW5jZSB0byBhbiBlbGVtZW50LCAnICtcbiAgICAgICAgICAgICAgICAneW91IG11c3Qgc3BlY2lmeSB0aGUgZWxlbWVudCB5b3UgaW50ZW5kIHRvIGJpbmQgdGhlIGV4cGVyaWVuY2UgdG8uJztcbiAgICAgICAgICAgIFV4RGVidWdDbGFzcy5lcnJvcihlbGVtZW50RXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhwZXJpZW5jZUVsZW1lbnQ6IEhUTUxFeHBlcmllbmNlRWxlbWVudCA9IGVsZW1lbnQgYXMgSFRNTEV4cGVyaWVuY2VFbGVtZW50O1xuICAgICAgICBleHBlcmllbmNlRWxlbWVudC5fdXggPSBleHBlcmllbmNlRWxlbWVudC5fdXggfHwge307XG4gICAgICAgIGlmICghZXhwZXJpZW5jZUVsZW1lbnQuX3V4W25hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlcmllbmNlID0gdGhpcy5leHBlcmllbmNlRmFjdG9yaWVzW25hbWVdKG5hbWUsIGV4cGVyaWVuY2VFbGVtZW50KVxuICAgICAgICAgICAgaWYgKGV4cGVyaWVuY2Uub25Jbml0KSB7XG4gICAgICAgICAgICAgICAgVXhEZWJ1Z0NsYXNzLmluZm8oJ3snICsgbmFtZSArICd9Lm9uSW5pdCgpJyk7XG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZS5vbkluaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cGVyaWVuY2VFbGVtZW50Ll91eFtuYW1lXSA9IGV4cGVyaWVuY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhbmQgcmV0dXJucyB0aGUgSFRNTEV4cGVyaWVuY2VFbGVtZW50IHBhcmVudCBvZiBhbnkgSFRNTEVsZW1lbnQgcGFzc2VkIGluLlxuICAgICAqIEBwYXJhbSBlbGVtZW50IEhUTUxFbGVtZW50XG4gICAgICovXG4gICAgcHVibGljIGdldEV4cGVyaWVuY2VFbGVtZW50UGFyZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEV4cGVyaWVuY2VFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgdmFyIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCFwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgcGFyZW50RWxlbWVudFxuICAgICAgICAgICAgJiYgcGFyZW50RWxlbWVudC5kYXRhc2V0XG4gICAgICAgICAgICAmJiBwYXJlbnRFbGVtZW50LmRhdGFzZXQudXhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RWxlbWVudCBhcyBIVE1MRXhwZXJpZW5jZUVsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV4cGVyaWVuY2VFbGVtZW50UGFyZW50KHBhcmVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIHRoZSBIVE1MRXhwZXJpZW5jZUVsZW1lbnQgY2hpbGRyZW4gb2YgYW55IEhUTUxFbGVtZW50XG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RXhwZXJpZW5jZUVsZW1lbnRDaGlsZHJlbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IEFycmF5PEhUTUxFeHBlcmllbmNlRWxlbWVudD4ge1xuICAgICAgICBjb25zdCBwb3NzaWJsZUNoaWxkcmVuOiBOb2RlTGlzdE9mPEhUTUxFeHBlcmllbmNlRWxlbWVudD4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXV4XScpO1xuICAgICAgICBjb25zdCBjaGlsZHJlbkVsZW1lbnRzOiBBcnJheTxIVE1MRXhwZXJpZW5jZUVsZW1lbnQ+ID0gW107XG4gICAgICAgIHBvc3NpYmxlQ2hpbGRyZW4uZm9yRWFjaCgocG9zc2libGVDaGlsZEVsZW1lbnQ6IEhUTUxFeHBlcmllbmNlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRQYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRFeHBlcmllbmNlRWxlbWVudFBhcmVudChwb3NzaWJsZUNoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoY2hpbGRQYXJlbnRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5FbGVtZW50cy5wdXNoKHBvc3NpYmxlQ2hpbGRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbkVsZW1lbnRzO1xuICAgIH1cblxufVxuIiwiLyoqXG4gKiAgICBfXyAgX19fX18gICBfX18gICBfXyAgICAgICAgICBfX1xuICogICAvIC8gLyAvICAgfCA8ICAvICAvIC8gICBfX19fIF8vIC9fICBfX19fX1xuICogIC8gLyAvIC8gL3wgfCAvIC8gIC8gLyAgIC8gX18gYC8gX18gYC8gX19fL1xuICogLyAvXy8gLyBfX18gfC8gLyAgLyAvX19fLyAvXy8gLyAvXy8gKF9fICApXG4gKiBgX19fXy9fLyAgfF8vXy8gIC9fX19fXy9gX18sXy9fLl9fXy9fX19fL1xuICpcbiAqIEBwYWNrYWdlIFVYMlxuICogQGF1dGhvciBVQTEgTGFicyBEZXZlbG9wZXJzIGh0dHBzOi8vdWExLnVzXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgVUExIExhYnNcbiAqL1xuXG5pbXBvcnQgeyBFeHBlcmllbmNlRmFjdG9yeUludGVyZmFjZSB9IGZyb20gJ0B1eDIvdXgvZXhwZXJpZW5jZS1mYWN0b3J5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBIVE1MRXhwZXJpZW5jZUVsZW1lbnQgfSBmcm9tICdAdXgyL3V4L2h0bWwtZXhwZXJpZW5jZS1lbGVtZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBVeERlYnVnQ2xhc3MgfSBmcm9tICdAdXgyL3V4L2RlYnVnLmNsYXNzJztcbmltcG9ydCB7IFV4SGVscGVyQ2xhc3MgfSBmcm9tICdAdXgyL3V4LWhlbHBlci5jbGFzcyc7XG5cbi8qKlxuICogVGhlIG1haW4gZW50cnkgcG9pbnQgaW50byB0aGUgVVgyIEFQSS4gVGhpcyBjbGFzcyB0aWVzIHRvZ2V0aGVyIGFsbCBvZiB0aGUgbG9naWNcbiAqIGJldHdlZW4gSFRNTEVsZW1lbnRzIGFuZCB0aGUgZXhwZXJpZW5jZSBkZWZpbml0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFV4Q2xhc3Mge1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGFuIGV4cGVyaWVuY2Ugd2l0aCB0aGUgVVgyIGZyYW1ld29yay5cbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSB0aGUgdGhhdCB3aWxsIHRpZSB0aGUgZXhwZXJpZW5jZSBpbnN0YW5jZSB0byB0aGUgaHRtbCBub2RlIFtkYXRhLXV4XVxuICAgICAqIEBwYXJhbSBmYWN0b3J5IEEgY2FsbGJhY2sgdGhhdCByZXR1cm5zIGFuIG9iamVjdCB0aGF0IG1hdGNoZXMgdGhlIEV4cGVyaWVuY2VJbnRlcmZhY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZXhwZXJpZW5jZShuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IEV4cGVyaWVuY2VGYWN0b3J5SW50ZXJmYWNlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHV4SGVscGVyQ2xhc3MgPSBVeEhlbHBlckNsYXNzLmdldCgpO1xuICAgICAgICB1eEhlbHBlckNsYXNzLnJlZ2lzdGVyRXhwZXJpZW5jZShuYW1lLCBmYWN0b3J5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB1eCBleHBlcmllbmNlcyBmcm9tIHRoZSBET00uIEFsc28gYW4gYWxpYXMgZm9yIHV4LnVwZGF0ZSgpLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzc3VlcyBhIG5vdGlmaWNhdGlvbiB0byBhbGwgZXhwZXJpZW5jZXMgdGhhdCBzb21ldGhpbmcgaGFzIHVwZGF0ZWQgYW5kIHdpbGxcbiAgICAgKiBpbnZva2UgZWFjaCBleHBlcmllbmNlJ3Mgb25VcGRhdGUoKSBjYWxsYmFjayBtZXRob2QuXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdXhIZWxwZXJDbGFzcyA9IFV4SGVscGVyQ2xhc3MuZ2V0KCk7XG4gICAgICAgIGNvbnN0IGV4cGVyaWVuY2VFbGVtZW50czogTm9kZUxpc3RPZjxIVE1MRXhwZXJpZW5jZUVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdXhdJyk7XG4gICAgICAgIGV4cGVyaWVuY2VFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50OiBIVE1MRXhwZXJpZW5jZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhc1BhcmVudEV4cGVyaWVuY2VFbGVtZW50OiBib29sZWFuID0gKHV4SGVscGVyQ2xhc3MuZ2V0RXhwZXJpZW5jZUVsZW1lbnRQYXJlbnQoZWxlbWVudCkpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFoYXNQYXJlbnRFeHBlcmllbmNlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHV4SGVscGVyQ2xhc3MuYmluZFV4VG9FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudXgudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFR1cm5zIG9uIG9yIG9mZiBkZWJ1Z2dpbmcgb24gdGhlIHBhZ2UuIFdoZW4gdGhpcyBtZXRob2QgaXMgaW52b2tlZCwgYSBub3RpZmljYXRpb24gd2lsbFxuICAgICAqIGJlIHNlbnQgdG8gZWFjaCBleHBlcmllbmNlIHRvIGludm9rZSBlaXRoZXIgdGhlIG9uRGVidWdFbmFibGVkKCkgb3Igb25EZWJ1Z0Rpc2FibGVkKClcbiAgICAgKiBtZXRob2QuXG4gICAgICogQHBhcmFtIGVuYWJsZURlYnVnIFNob3VsZCB3ZSBlbmFibGUgZGVidWcuIERlYnVnIGlzIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVidWcoZW5hYmxlRGVidWc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdXhIZWxwZXJDbGFzcyA9IFV4SGVscGVyQ2xhc3MuZ2V0KCk7XG4gICAgICAgIGNvbnN0IHNob3VsZEVuYWJsZURlYnVnID0gKGVuYWJsZURlYnVnICE9PSBmYWxzZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIFV4RGVidWdDbGFzcy5lbmFibGVEZWJ1ZyhzaG91bGRFbmFibGVEZWJ1Zyk7XG5cbiAgICAgICAgY29uc3QgZXhwZXJpZW5jZUVsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFeHBlcmllbmNlRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS11eF0nKTtcbiAgICAgICAgZXhwZXJpZW5jZUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFeHBlcmllbmNlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFzUGFyZW50RXhwZXJpZW5jZUVsZW1lbnQ6IGJvb2xlYW4gPSAodXhIZWxwZXJDbGFzcy5nZXRFeHBlcmllbmNlRWxlbWVudFBhcmVudChlbGVtZW50KSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWhhc1BhcmVudEV4cGVyaWVuY2VFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdXhIZWxwZXJDbGFzcy5iaW5kVXhUb0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC51eC5kZWJ1ZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvKipcbiAqICAgIF9fICBfX19fXyAgIF9fXyAgIF9fICAgICAgICAgIF9fXG4gKiAgIC8gLyAvIC8gICB8IDwgIC8gIC8gLyAgIF9fX18gXy8gL18gIF9fX19fXG4gKiAgLyAvIC8gLyAvfCB8IC8gLyAgLyAvICAgLyBfXyBgLyBfXyBgLyBfX18vXG4gKiAvIC9fLyAvIF9fXyB8LyAvICAvIC9fX18vIC9fLyAvIC9fLyAoX18gIClcbiAqIGBfX19fL18vICB8Xy9fLyAgL19fX19fL2BfXyxfL18uX19fL19fX18vXG4gKlxuICogQHBhY2thZ2UgVVgyXG4gKiBAYXV0aG9yIFVBMSBMYWJzIERldmVsb3BlcnMgaHR0cHM6Ly91YTEudXNcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSBVQTEgTGFic1xuICovXG5cbmltcG9ydCB7IFV4Q2xhc3MgfSBmcm9tICdAdXgyL3V4LmNsYXNzJztcblxuY29uc3QgdXgyID0gbmV3IFV4Q2xhc3MoKTtcblxuLy8gZXhwb3J0aW5nIHV4IHRvIHdpbmRvdyBvYmplY3Rcbig8YW55PndpbmRvdykudXgyID0gdXgyO1xuXG5leHBvcnQgeyB1eDIgfTtcbiIsImV4cG9ydCBjbGFzcyBVeERlYnVnQ2xhc3Mge1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUQUdMSU5FID0gJ1VYMic7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVSUk9SX1RBR0xJTkUgPSAnW0VSUk9SXTogJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0FSTklOR19UQUdMSU5FID0gJ1tXQVJOSU5HXTogJztcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU5GT19UQUdMSU5FID0gJ1tJTkZPXTogJ1xuXG4gICAgcHVibGljIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBlcnJvcihlcnJvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoVXhEZWJ1Z0NsYXNzLlRBR0xJTkUgKyBVeERlYnVnQ2xhc3MuRVJST1JfVEFHTElORSArIGVycm9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHdhcm4od2FybmluZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChVeERlYnVnQ2xhc3MuaXNEZWJ1Z0VuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihVeERlYnVnQ2xhc3MuVEFHTElORSArIFV4RGVidWdDbGFzcy5XQVJOSU5HX1RBR0xJTkUgKyB3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaW5mbyhpbmZvOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV4RGVidWdDbGFzcy5pc0RlYnVnRW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFV4RGVidWdDbGFzcy5UQUdMSU5FICsgVXhEZWJ1Z0NsYXNzLklORk9fVEFHTElORSArIGluZm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBlbmFibGVEZWJ1ZyhlbmFibGVEZWJ1ZzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBVeERlYnVnQ2xhc3MuaXNEZWJ1Z0VuYWJsZWQgPSBlbmFibGVEZWJ1ZztcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=