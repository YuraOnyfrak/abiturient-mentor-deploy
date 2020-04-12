(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"about\">\n    <div class=\"about__wrapper\">  \n     <img src=\"../../assets/images/logo.png\" class=\"about__logo-img\"> \n      <div class=\"about__section\">\n         <div>\n            <p  class=\"about_text\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                Minima amet sequi vel sunt iure consequatur id eveniet, \n                consectetur delectus ducimus suscipit impedit! Facilis commodi,\n                nam voluptatem sed repellat error officia!\n              </p>\n          <button type=\"button\" class=\"btn\"  (click)=\"continue()\">\n            <span>Продовжити</span>\n          </button>\n        </div>\n      </div>      \n    </div>\n  </section>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>   \n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    /* color: red; */\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar a {\n    color: white;\n    align-items: center;\n    font-weight: 600;\n    font-size: medium;\n    text-decoration: none;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n  </style>\n\n<!-- Toolbar  -->\n<div class=\"toolbar\" role=\"banner\">\n  <a href=\"/\"><img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"../assets/images/icon-logo.png\"\n    href\n  /></a>\n  <a href=\"/\">МЕНТОР АБІТУРІЄНТА</a>\n</div> \n\n<toaster-container [toasterconfig]='toasterConfig'></toaster-container>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <section class=\"login\">\n    <div class=\"login__wrapper\">   \n      <img src=\"../../assets/images/logo.png\" class=\"logo-img\">      \n      <div class=\"login__form\">\n        <div>\n          <!-- <input type=\"text\" prefix=\"+7\" mask=\"0000000000\" class=\"login__input\" *ngIf=\"!sentCode\" placeholder=\"Телефон\" [disabled]=\"timeRefresh?.minutes || timeRefresh?.seconds\" [(ngModel)]=\"phone\" (keydown.enter)=\"login(phone.value)\"> -->\n          <div  class=\"login__input\">\n            <div #nameText></div>\n          </div>          \n          <!-- <button type=\"button\" class=\"login__btn\"  (click)=\"login()\">\n            <span>Получить код</span>\n          </button> -->\n        </div>\n        <!-- <div *ngIf=\"sentCode\">\n          <p class=\"login__text\">Введите полученый на телефон PIN-код</p>\n          <div class=\"login__input-group\" [formGroup]=\"codeGroup\">\n            <input type=\"number\" max=\"9\" maxlength=\"10\" class=\"login__input login__input--simple login__input--{{pin}}\" [formControlName]=\"pin\" *ngFor=\"let pin of [0,1,2,3]\" #pinInput (input)=\"inputChange($event, pin)\" (keyup)=\"deleteInputVal($event, pin)\">\n          </div>\n          <button type=\"button\" class=\"login__btn\" (click)=\"login()\" #submitBtn>\n            <span>Войти</span>\n          </button>\n          \n          <div class=\"widget_container\" id=\"widget_container\">\n           \n             <script async src=\"https://telegram.org/js/telegram-widget.js?8\" \n              data-telegram-login=\"abiturient_mentor_test_bot\"\n               data-size=\"large\" data-radius=\"20\" \n               data-onauth=\"onTelegramAuth(user)\" \n               data-request-access=\"write\"></script>\n            \n            </script> \n          </div>\n        </div> -->\n      </div>\n      <div class=\"login__text\" *ngIf=\"error && (timeRefresh?.minutes || timeRefresh?.seconds)\">\n        <span>Введеные данные неверны.</span> <br>\n        <span>Вы сможете получить новый код через {{timeRefresh?.minutes}}:{{timeRefresh?.seconds}}</span>\n      </div>\n    </div>\n  </section>\n  <!--(keyup)=\"deleteInputVal($event, pin)\" (focusout)=\"trimInput($event, pin)\" (input)=\"changeInput($event, pin)\"-->\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mentor-list/mentor-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mentor-list/mentor-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>mentor-list works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-mentor/search-mentor.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-mentor/search-mentor.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>search-mentor works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/start-page/start-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start-page/start-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>start-page works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">\r\n    <section class=\"item\">\r\n      <section class=\"add-form-section\">       \r\n       <span class=\"form-caption\">Заповнити дані</span>\r\n        <form [formGroup]=\"form\" class=\"add-form\">          \r\n          <mat-form-field class=\"example-full-width\" id=\"city\">\r\n            <input type=\"text\"\r\n                  #cityInput\r\n                   placeholder=\"Міста\"\r\n                   aria-label=\"text\"\r\n                   matInput\r\n                   formControlName=\"city\"\r\n                   [matAutocomplete]=\"city\">\r\n            <mat-autocomplete #city=\"matAutocomplete\" autoActiveFirstOption>\r\n              <mat-option \r\n              (onSelectionChange)=\"cityInput.value !=undefined && citySelected($event, city)\"\r\n               *ngFor=\"let city of filteredUniversityOptions | async\" \r\n                [value]=\"city.name\">\r\n                {{city.name}}                 \r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>  \r\n          <mat-form-field class=\"example-full-width\">\r\n              <input type=\"text\"\r\n                    #universityInput\r\n                     placeholder=\"Університети\"\r\n                     aria-label=\"text\"\r\n                     matInput\r\n                     formControlName=\"university\"\r\n                     [matAutocomplete]=\"university\">\r\n              <mat-autocomplete #university=\"matAutocomplete\" autoActiveFirstOption>\r\n                <mat-option \r\n                (onSelectionChange)=\"universityInput.value !=undefined && universitySelected($event, university)\"\r\n                 *ngFor=\"let university of filteredUniversityOptions | async\" \r\n                  [value]=\"university.name\">\r\n                  {{university.name}}                 \r\n                </mat-option>\r\n              </mat-autocomplete>\r\n          </mat-form-field>   \r\n          <mat-form-field class=\"example-full-width\">\r\n              <input type=\"text\"\r\n                    #facultytyInput\r\n                     matInput\r\n                     placeholder=\"Факультети та інститути\"\r\n                     formControlName=\"faculties\"                     \r\n                     [matAutocomplete]=\"faculties\">\r\n                <mat-autocomplete #faculties=\"matAutocomplete\" autoActiveFirstOption>\r\n                  <mat-optgroup *ngFor=\"let group of filteredFacultiesOptions | async\" [label]=\"group.letter\">\r\n                    <mat-option \r\n                    (onSelectionChange)=\"facultytyInput.value !=undefined && facultySelected($event, faculty)\"\r\n                    *ngFor=\"let faculty of group.faculties\" [value]=\"faculty.name\">\r\n                      {{faculty.name}}\r\n                    </mat-option>\r\n                </mat-optgroup>\r\n              </mat-autocomplete>\r\n          </mat-form-field>  \r\n          <mat-form-field class=\"example-full-width\">\r\n              <input type=\"text\"\r\n                    #specialityInput\r\n                     placeholder=\"Спеціальності\"\r\n                     aria-label=\"Number\"\r\n                     matInput\r\n                     formControlName =\"speciality\"\r\n                     [matAutocomplete]=\"speciality\">\r\n              <mat-autocomplete #speciality=\"matAutocomplete\">\r\n                <mat-option\r\n                (onSelectionChange)=\"specialityInput.value !=undefined && specialitySelected($event, speciality)\"\r\n                *ngFor=\"let speciality of filteredSpecialityOptions | async\" [value]=\"speciality.name\">\r\n                  {{speciality.name}}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n          </mat-form-field>          \r\n          <mat-form-field class=\"example-full-width\">\r\n              <input type=\"text\"\r\n                    #specializationInput\r\n                     placeholder=\"Спеціалізації\"\r\n                     aria-label=\"Number\"\r\n                     matInput\r\n                     formControlName=\"specialization\"\r\n                     [matAutocomplete]=\"specialization\">\r\n              <mat-autocomplete #specialization=\"matAutocomplete\">\r\n                <mat-option \r\n                (onSelectionChange) = \"specializationInput.value != undefined && specializationSelected($event, specialization)\"\r\n                *ngFor=\"let specialization of filteredSpecializationOptions | async\"  [value]=\"specialization.name\">\r\n                  {{specialization.name}}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\">\r\n              <mat-label>Ім'я</mat-label>\r\n               <input required matInput formControlName=\"name\" maxlength=\"10\"> \r\n          </mat-form-field>  \r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-label>Прізвище</mat-label>\r\n               <input  matInput formControlName=\"lastname\" maxlength=\"15\"> \r\n          </mat-form-field>  \r\n          <mat-form-field class=\"example-full-width\">\r\n              <mat-label>Курс</mat-label>\r\n               <input type=\"number\" min=\"1\" max=\"6\" \r\n                      value=\"1\" matInput \r\n                      formControlName=\"course\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\">\r\n              <mat-label>Telegram</mat-label>\r\n               <input matInput formControlName=\"telegram\" readonly> \r\n          </mat-form-field>  \r\n          <mat-form-field class=\"example-full-width\">\r\n              <mat-label>Instagram</mat-label>\r\n               <input matInput formControlName=\"instagram\" minlength=\"5\" maxlength=\"30\"> \r\n          </mat-form-field>  \r\n          <mat-slide-toggle\r\n                class=\"example-margin\"\r\n                [color]=\"color\"\r\n                formControlName = 'canHelp'\r\n                >\r\n               Можу відповісти на питання стосовно гуртожитку\r\n          </mat-slide-toggle>\r\n          <button type=\"button\" class=\"btn add-btn\"  (click)=\"submit()\">\r\n            <span>Продовжити</span>\r\n          </button>\r\n        </form>  \r\n      </section>\r\n    </section>         \r\n    <section class=\"item\">\r\n        <app-ukraine-map (onChanged)=\"citySelected($event)\"></app-ukraine-map>\r\n    </section>\r\n</section>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/thank-you-page/thank-you-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thank-you-page/thank-you-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"about\">\n    <div class=\"about__wrapper\">  \n     <img src=\"../../assets/images/logo.png\" class=\"about__logo-img\"> \n      <div class=\"about__section\">\n         <div>\n            <p  class=\"about_text\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                Minima amet sequi vel sunt iure consequatur id eveniet, \n                consectetur delectus ducimus suscipit impedit! Facilis commodi,\n                nam voluptatem sed repellat error officia!\n              </p>\n          <!-- <button type=\"button\" class=\"btn\"  (click)=\"continue()\">\n            <span>Продовжити</span>\n          </button> -->\n        </div>\n      </div>      \n    </div>\n  </section>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ukraine-map/ukraine-map.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ukraine-map/ukraine-map.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"ua\"></div>\r\n<input class=\"selected-region\" type=\"text\">");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about {\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n\tbackground-color: #ffffff;\r\n\tbottom: 50px;\r\n\tdisplay: -moz-flex;\r\n\tdisplay: -ms-flex;\r\n\tdisplay: -o-flex;\r\n\tdisplay: flex;\r\n\tleft: 50px;\r\n\tposition: absolute;\r\n\tright: 50px;\r\n\ttop: 60px;\r\n}\r\n.about__wrapper {\r\n\tmargin: 0 auto;\r\n}\r\n.about__logo-img {\r\n\tdisplay: block;\r\n\twidth: 400px;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 2.5em;\r\n}\r\n.about_text {     \r\n\tfont-size: 1.475em;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 2.5rem;\r\n\tpadding: 0.875em;\r\n    width: 600px;\r\n    font-weight: 400;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FFWixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsU0FBUztBQUNWO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osY0FBYztDQUNkLG9CQUFvQjtBQUNyQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsZ0JBQWdCO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQixrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0IHtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym90dG9tOiA1MHB4O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWZsZXg7XHJcblx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0ZGlzcGxheTogLW8tZmxleDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGxlZnQ6IDUwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiA1MHB4O1xyXG5cdHRvcDogNjBweDtcclxufVxyXG4uYWJvdXRfX3dyYXBwZXIge1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5hYm91dF9fbG9nby1pbWcge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiA0MDBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW4tYm90dG9tOiAyLjVlbTtcclxufVxyXG4uYWJvdXRfdGV4dCB7ICAgICBcclxuXHRmb250LXNpemU6IDEuNDc1ZW07XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG5cdHBhZGRpbmc6IDAuODc1ZW07XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AboutComponent = class AboutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    continue() {
        this.router.navigate(['/auth']);
    }
};
AboutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'MentorEntrant';
        this.toasterConfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterConfig"]({
            positionClass: 'toast-top-right',
            animation: 'flyRight',
            newestOnTop: true
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./start-page/start-page.component */ "./src/app/start-page/start-page.component.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _ukraine_map_ukraine_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ukraine-map/ukraine-map.component */ "./src/app/ukraine-map/ukraine-map.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _search_mentor_search_mentor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search-mentor/search-mentor.component */ "./src/app/search-mentor/search-mentor.component.ts");
/* harmony import */ var _mentor_list_mentor_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mentor-list/mentor-list.component */ "./src/app/mentor-list/mentor-list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _shared_interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/interceptors/jwt-interceptor.service */ "./src/app/shared/interceptors/jwt-interceptor.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _thank_you_page_thank_you_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./thank-you-page/thank-you-page.component */ "./src/app/thank-you-page/thank-you-page.component.ts");























const appRoutes = [
    { path: '', component: _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"] },
    { path: 'student', component: _student_student_component__WEBPACK_IMPORTED_MODULE_14__["StudentComponent"] },
    { path: 'map', component: _ukraine_map_ukraine_map_component__WEBPACK_IMPORTED_MODULE_13__["UkraineMapComponent"] },
    { path: 'thank-you', component: _thank_you_page_thank_you_page_component__WEBPACK_IMPORTED_MODULE_22__["ThankYouPageComponent"] },
    { path: 'auth', component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_12__["AuthenticationComponent"] }
    // { path: '**', component: NotFoundComponent }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_11__["StartPageComponent"],
            _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_12__["AuthenticationComponent"],
            _ukraine_map_ukraine_map_component__WEBPACK_IMPORTED_MODULE_13__["UkraineMapComponent"],
            _student_student_component__WEBPACK_IMPORTED_MODULE_14__["StudentComponent"],
            _search_mentor_search_mentor_component__WEBPACK_IMPORTED_MODULE_15__["SearchMentorComponent"],
            _mentor_list_mentor_list_component__WEBPACK_IMPORTED_MODULE_16__["MentorListComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
            _thank_you_page_thank_you_page_component__WEBPACK_IMPORTED_MODULE_22__["ThankYouPageComponent"]
        ],
        imports: [
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_20__["ToasterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptorService"], multi: true },
            angular2_toaster__WEBPACK_IMPORTED_MODULE_20__["ToasterService"],
            _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_21__["AlertService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authentication/authentication.component.css":
/*!*************************************************************!*\
  !*** ./src/app/authentication/authentication.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n\tbackground-color: #ffffff;\r\n\tbottom: 50px;\r\n\tdisplay: -moz-flex;\r\n\tdisplay: -ms-flex;\r\n\tdisplay: -o-flex;\r\n\tdisplay: flex;\r\n\tleft: 50px;\r\n\tposition: absolute;\r\n\tright: 50px;\r\n\ttop: 50px;\r\n\tmargin: 10px;\r\n}\r\n.login__wrapper {\r\n\tmargin: 0 auto;\r\n}\r\n.logo-img {\r\n\tdisplay: block;\r\n\twidth: 400px;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 2.5em;\r\n}\r\n.login__input-group {\r\n\tdisplay: -moz-flex;\r\n\tdisplay: -ms-flex;\r\n\tdisplay: -o-flex;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n.login__input {\r\n\t/* border: 1px solid #f4eef0;\r\n\tborder-radius: 2px;\r\n\t-webkit-box-shadow: 0 2px 10px rgba(63,59,60, 0.1);\r\n\tbox-shadow: 0 2px 10px rgba(63,59,60, 0.1);\r\n\t-webkit-box-sizing: border-box;\r\n\t-moz-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n\tcolor: #8c8c8c; */\r\n\tdisplay: block;\r\n\t/* font-size: 0.875em; */\r\n\tmargin: 0 auto;\r\n\t/* margin-bottom: 2.5rem;\r\n\tpadding: 0.875em; */\r\n\tposition: relative;\r\n\t/* -webkit-transition: transform 0.15s ease-out;\r\n\t-o-transition: transform 0.15s ease-out;\r\n\ttransition: transform 0.15s ease-out;\r\n\twidth: 280px; */\r\n}\r\n/* .login__input:focus {\r\n\t-webkit-box-shadow: 0 4px 20px rgba(63,59,60, 0.2);\r\n\tbox-shadow: 0 4px 20px rgba(63,59,60, 0.2);\r\n\tcolor: #121230;\r\n\t-webkit-transform: scale(1.2);\r\n\t-ms-transform: scale(1.2);\r\n\t-o-transform: scale(1.2);\r\n\ttransform: scale(1.2);\r\n} */\r\n.login__input--simple {\r\n\twidth: 2.5em;\r\n}\r\n/*\r\n.login__input[type=number]::-webkit-inner-spin-button, \r\n.login__input[type=number]::-webkit-outer-spin-button {\r\n\t-webkit-appearance: none; \r\n  \tmargin: 0; \r\n} */\r\n.tgme_widget_login{\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n}\r\n#telegram-login-abiturient_mentor_test_bot{\r\n\tmargin: 0 auto;\r\n}\r\n.login__btn {\r\n\t/* background-color: #fd0047;\r\n\tborder-radius: 2em;\r\n\tcolor: #ffffff; */\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 1.5em;\r\n\t/* padding: 1.125em 0; */\r\n\tposition: relative;\r\n\t/* -webkit-transition: all 0.15s ease-out;\r\n\t-o-transition: all 0.15s ease-out;\r\n\ttransition: all 0.15s ease-out;\r\n\twidth: 180px; */\r\n}\r\n/* .login__btn:hover {\r\n\t-webkit-transform: scale(1.2);\r\n\t-ms-transform: scale(1.2);\r\n\t-o-transform: scale(1.2);\r\n\ttransform: scale(1.2);\r\n}\r\n.login__btn:active {\r\n\t-webkit-box-shadow: 0 3px 15px rgba(63,59,60,0.3);\r\n\tbox-shadow: 0 3px 15px rgba(63,59,60,0.3);\r\n} */\r\n.login__text {\r\n\tfont-weight: 400;\r\n\ttext-align: center;\r\n}\r\n.login-hidden {\r\n\tdisplay: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FFWixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsU0FBUztDQUNULFlBQVk7QUFDYjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsWUFBWTtDQUNaLGNBQWM7Q0FDZCxvQkFBb0I7QUFDckI7QUFFQTtDQUVDLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYiw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDOzs7Ozs7O2tCQU9pQjtDQUNqQixjQUFjO0NBQ2Qsd0JBQXdCO0NBQ3hCLGNBQWM7Q0FDZDtvQkFDbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCOzs7Z0JBR2U7QUFDaEI7QUFDQTs7Ozs7Ozs7R0FRRztBQUNIO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7Ozs7O0dBS0c7QUFFSDtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7QUFFQTtDQUNDOztrQkFFaUI7Q0FDakIsY0FBYztDQUNkLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCLGtCQUFrQjtDQUNsQjs7O2dCQUdlO0FBQ2hCO0FBQ0E7Ozs7Ozs7OztHQVNHO0FBQ0g7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym90dG9tOiA1MHB4O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWZsZXg7XHJcblx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0ZGlzcGxheTogLW8tZmxleDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGxlZnQ6IDUwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiA1MHB4O1xyXG5cdHRvcDogNTBweDtcclxuXHRtYXJnaW46IDEwcHg7XHJcbn1cclxuLmxvZ2luX193cmFwcGVyIHtcclxuXHRtYXJnaW46IDAgYXV0bztcclxufVxyXG4ubG9nby1pbWcge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiA0MDBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW4tYm90dG9tOiAyLjVlbTtcclxufVxyXG5cclxuLmxvZ2luX19pbnB1dC1ncm91cCB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otZmxleDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleDtcclxuXHRkaXNwbGF5OiAtby1mbGV4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5sb2dpbl9faW5wdXQge1xyXG5cdC8qIGJvcmRlcjogMXB4IHNvbGlkICNmNGVlZjA7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDYzLDU5LDYwLCAwLjEpO1xyXG5cdGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSg2Myw1OSw2MCwgMC4xKTtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Y29sb3I6ICM4YzhjOGM7ICovXHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0LyogZm9udC1zaXplOiAwLjg3NWVtOyAqL1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdC8qIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuXHRwYWRkaW5nOiAwLjg3NWVtOyAqL1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQvKiAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLW91dDtcclxuXHQtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1vdXQ7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2Utb3V0O1xyXG5cdHdpZHRoOiAyODBweDsgKi9cclxufVxyXG4vKiAubG9naW5fX2lucHV0OmZvY3VzIHtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSg2Myw1OSw2MCwgMC4yKTtcclxuXHRib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoNjMsNTksNjAsIDAuMik7XHJcblx0Y29sb3I6ICMxMjEyMzA7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcblx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuXHQtby10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59ICovXHJcbi5sb2dpbl9faW5wdXQtLXNpbXBsZSB7XHJcblx0d2lkdGg6IDIuNWVtO1xyXG59XHJcbi8qXHJcbi5sb2dpbl9faW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBcclxuLmxvZ2luX19pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXHJcbiAgXHRtYXJnaW46IDA7IFxyXG59ICovXHJcblxyXG4udGdtZV93aWRnZXRfbG9naW57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jdGVsZWdyYW0tbG9naW4tYWJpdHVyaWVudF9tZW50b3JfdGVzdF9ib3R7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5sb2dpbl9fYnRuIHtcclxuXHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQwMDQ3O1xyXG5cdGJvcmRlci1yYWRpdXM6IDJlbTtcclxuXHRjb2xvcjogI2ZmZmZmZjsgKi9cclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuXHQvKiBwYWRkaW5nOiAxLjEyNWVtIDA7ICovXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdC8qIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2Utb3V0O1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLW91dDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1vdXQ7XHJcblx0d2lkdGg6IDE4MHB4OyAqL1xyXG59XHJcbi8qIC5sb2dpbl9fYnRuOmhvdmVyIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG5cdC1vLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuLmxvZ2luX19idG46YWN0aXZlIHtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDE1cHggcmdiYSg2Myw1OSw2MCwwLjMpO1xyXG5cdGJveC1zaGFkb3c6IDAgM3B4IDE1cHggcmdiYSg2Myw1OSw2MCwwLjMpO1xyXG59ICovXHJcbi5sb2dpbl9fdGV4dCB7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1oaWRkZW4ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/authentication/authentication.component.ts":
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_models_telegram_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/telegram-response */ "./src/app/shared/models/telegram-response.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");







let AuthenticationComponent = class AuthenticationComponent {
    constructor(loginService, router, fb, sharedService) {
        this.loginService = loginService;
        this.router = router;
        this.fb = fb;
        this.sharedService = sharedService;
        this.name = "Tom";
        this.sentCode = false;
        this.error = false;
    }
    convertToScript() {
        //console.log(this.nameParagraph.nativeElement.textContent); 
        //this.nameParagraph.nativeElement.textContent = "hell";
        const element = this.nameParagraph.nativeElement;
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-widget.js?5';
        script.setAttribute('data-telegram-login', "abiturient_mentor_test_bot");
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-userpic', 'false');
        script.setAttribute('data-onauth', 'loginViaTelegram(user)');
        script.setAttribute('data-request-access', 'write');
        element.parentElement.replaceChild(script, element);
    }
    loginViaTelegram(user) {
        this.loginService.telegramAuthentication(user)
            .subscribe(_ => {
            this.router.navigate(['/student']);
            this.sharedService.nextMessage(user);
        });
    }
    ngAfterViewInit() {
        this.convertToScript();
    }
    ngOnInit() {
        window['loginViaTelegram'] = loginData => this.loginViaTelegram(loginData);
    }
    login() {
        let u = new _shared_models_telegram_response__WEBPACK_IMPORTED_MODULE_5__["TelegramResponse"]();
        u.photo_url = 'https://t.me/i/userpic/320/dM5ldIjGKX5KJv4IkzPzaac1kkoEzSnwJc6WnhFPQDE.jpg';
        u.auth_date = "1586546525";
        u.Hash = "a169704351d77e04dc3e55903dedfc9a9b230505bc8b6931f434cce115607d37";
        u.first_name = "Юрій";
        u.Last_name = "Олійник";
        u.Id = "385222709";
        u.username = "oliinyk_yuriy";
        this.loginViaTelegram(u);
    }
};
AuthenticationComponent.ctorParameters = () => [
    { type: _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('submitBtn', { static: true })
], AuthenticationComponent.prototype, "submitBtn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('pinInput')
], AuthenticationComponent.prototype, "pinInputs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nameText", { static: false })
], AuthenticationComponent.prototype, "nameParagraph", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('script', { static: true })
], AuthenticationComponent.prototype, "script", void 0);
AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authentication',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./authentication.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./authentication.component.css */ "./src/app/authentication/authentication.component.css")).default]
    })
], AuthenticationComponent);



/***/ }),

/***/ "./src/app/mentor-list/mentor-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mentor-list/mentor-list.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRvci1saXN0L21lbnRvci1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/mentor-list/mentor-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mentor-list/mentor-list.component.ts ***!
  \******************************************************/
/*! exports provided: MentorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorListComponent", function() { return MentorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MentorListComponent = class MentorListComponent {
    constructor() { }
    ngOnInit() {
    }
};
MentorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentor-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mentor-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mentor-list/mentor-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mentor-list.component.css */ "./src/app/mentor-list/mentor-list.component.css")).default]
    })
], MentorListComponent);



/***/ }),

/***/ "./src/app/search-mentor/search-mentor.component.css":
/*!***********************************************************!*\
  !*** ./src/app/search-mentor/search-mentor.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1tZW50b3Ivc2VhcmNoLW1lbnRvci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/search-mentor/search-mentor.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-mentor/search-mentor.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchMentorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMentorComponent", function() { return SearchMentorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchMentorComponent = class SearchMentorComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchMentorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-mentor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-mentor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-mentor/search-mentor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-mentor.component.css */ "./src/app/search-mentor/search-mentor.component.css")).default]
    })
], SearchMentorComponent);



/***/ }),

/***/ "./src/app/shared/interceptors/jwt-interceptor.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/interceptors/jwt-interceptor.service.ts ***!
  \****************************************************************/
/*! exports provided: JwtInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function() { return JwtInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/login.service */ "./src/app/shared/services/login.service.ts");






let JwtInterceptorService = class JwtInterceptorService {
    constructor(loginS) {
        this.loginS = loginS;
        this.inflightAuthRequest = null;
    }
    intercept(request, next) {
        if (request.headers.get('authExempt') === 'true') {
            return next.handle(request);
        }
        if (!this.inflightAuthRequest) {
            this.inflightAuthRequest = this.loginS.getToken();
        }
        return this.inflightAuthRequest.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((newToken) => {
            this.inflightAuthRequest = null;
            const authReq = request.clone({
                headers: request.headers.set('Authorization', newToken ? 'Bearer ' + newToken : '')
            });
            return next.handle(authReq);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(ev => {
            if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"] && ev.status === 205) {
                this.loginS.logout();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            if (error.status === 401) {
                if (!this.inflightAuthRequest) {
                    this.inflightAuthRequest = this.loginS.refreshAccessToken();
                    if (!this.inflightAuthRequest) {
                        localStorage.clear();
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                    }
                }
                return this.inflightAuthRequest.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((newToken) => {
                    this.inflightAuthRequest = null;
                    const authReqRepeat = request.clone({
                        headers: request.headers.set('token', newToken)
                    });
                    return next.handle(authReqRepeat);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
                    this.inflightAuthRequest = null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }));
            }
            else {
                this.inflightAuthRequest = null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }
        }));
    }
};
JwtInterceptorService.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
];
JwtInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JwtInterceptorService);



/***/ }),

/***/ "./src/app/shared/models/Student/create-student.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/models/Student/create-student.ts ***!
  \*********************************************************/
/*! exports provided: CreateStudent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStudent", function() { return CreateStudent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CreateStudent {
}


/***/ }),

/***/ "./src/app/shared/models/telegram-response.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/telegram-response.ts ***!
  \****************************************************/
/*! exports provided: TelegramResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelegramResponse", function() { return TelegramResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TelegramResponse {
}


/***/ }),

/***/ "./src/app/shared/services/alert.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/alert.service.ts ***!
  \**************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");



let AlertService = class AlertService {
    constructor(toaster) {
        this.toaster = toaster;
    }
    success(title, message) {
        this.toaster.pop('success', title, message);
    }
    warning(title, message) {
        this.toaster.pop('warning', title, message);
    }
    info(title, message) {
        this.toaster.pop('info', title, message);
    }
    error(title, message) {
        this.toaster.pop('error', title, message);
    }
    edited(title = 'Edited', message) {
        this.toaster.pop('success', title);
    }
    deleted(title = 'Deleted', message) {
        this.toaster.pop('success', title);
    }
    saved(title = 'Saved', message) {
        this.toaster.pop('success', title);
    }
    added(title = 'Added', message) {
        this.toaster.pop('success', title);
    }
};
AlertService.ctorParameters = () => [
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/shared/services/faculty.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/faculty.service.ts ***!
  \****************************************************/
/*! exports provided: FacultyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyService", function() { return FacultyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let FacultyService = class FacultyService {
    constructor(http) {
        this.http = http;
    }
    get(idUniversity) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Faculty/' + idUniversity);
    }
};
FacultyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FacultyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FacultyService);



/***/ }),

/***/ "./src/app/shared/services/login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/login.service.ts ***!
  \**************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let LoginService = class LoginService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        const token = localStorage.getItem('access-token');
        this.decodedToken = token ? this.decodeJWTToken(token) : '';
    }
    set userId(id) {
        localStorage.setItem('userId', id);
        this.userIdentifier = id;
    }
    get userId() {
        if (!this.userIdentifier) {
            this.userIdentifier = localStorage.getItem('userId');
        }
        return this.userIdentifier;
    }
    getTicket(phone) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'accesstokens/validation-tickets-for-users', { number: phone }, {
            headers: {
                'authExempt': 'true',
                'Content-Type': 'application/json-patch+json'
            }
        });
    }
    getUserToken(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'auth', data, {
            headers: {
                'authExempt': 'true',
                'Content-Type': 'application/json-patch+json'
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            if (err.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('Invalid captcha');
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err.error ? err.error.error : err.message);
            }
        }));
    }
    logIn(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'accesstokens', data, { headers: { 'authExempt': 'true' } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(resp => {
            this.setTokens(resp);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(resp);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            switch (err.status) {
                case 400:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err.error.error);
                default:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err.message);
            }
        }));
    }
    telegramAuthentication(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'accesstokens/telegram-authentication', data, { headers: { 'authExempt': 'true' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(resp => {
            this.setTokens(resp);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(resp);
        }) //,
        // catchError((err: HttpErrorResponse) => {
        //   switch (err.status) {
        //     case 400:
        //       return throwError(err.error.error);
        //     default:
        //       return throwError(err.message);
        //   }
        // })
        );
    }
    logout() {
        localStorage.clear();
        this.router.navigateByUrl('/authorization');
    }
    refreshAccessToken() {
        const data = {
            refreshToken: localStorage.getItem('refresh-token')
        };
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'accesstokens/refresh-token', data, { headers: { 'authExempt': 'true' } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => this.setTokens(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => {
            if (err.status === 404)
                this.logout();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
        }));
    }
    getToken() {
        const token = localStorage.getItem('access-token');
        if (!this.isTokenExpired(this.decodedToken.exp)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(token);
        }
        return this.refreshAccessToken();
    }
    setTokens(resp) {
        localStorage.setItem('access-token', resp.jwt);
        localStorage.setItem('refresh-token', resp.refresh);
        this.decodedToken = this.decodeJWTToken(resp.jwt);
        this.userId = this.decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
        return resp.jwt;
    }
    decodeJWTToken(token) {
        const base64Url = token.split('.')[1];
        const base64 = decodeURIComponent(atob(base64Url).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(base64);
    }
    isTokenExpired(expStamp) {
        if (new Date(expStamp * 1000) < new Date()) {
            return true;
        }
        else {
            return false;
        }
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/shared/services/shared.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/shared.service.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_telegram_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/telegram-response */ "./src/app/shared/models/telegram-response.ts");




let SharedService = class SharedService {
    constructor() {
        this.telegramResponse = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _models_telegram_response__WEBPACK_IMPORTED_MODULE_3__["TelegramResponse"]());
        this.sharedRelegramResponse = this.telegramResponse.asObservable();
    }
    nextMessage(value) {
        this.telegramResponse.next(value);
    }
};
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ "./src/app/shared/services/speciality.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/speciality.service.ts ***!
  \*******************************************************/
/*! exports provided: SpecialityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialityService", function() { return SpecialityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let SpecialityService = class SpecialityService {
    constructor(http) {
        this.http = http;
    }
    get(idCity) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Specialty/' + idCity);
    }
};
SpecialityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SpecialityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SpecialityService);



/***/ }),

/***/ "./src/app/shared/services/specialization.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/specialization.service.ts ***!
  \***********************************************************/
/*! exports provided: SpecializationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecializationService", function() { return SpecializationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let SpecializationService = class SpecializationService {
    constructor(http) {
        this.http = http;
    }
    get(idFaculty) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Specialization/' + idFaculty);
    }
};
SpecializationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SpecializationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SpecializationService);



/***/ }),

/***/ "./src/app/shared/services/student.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/student.service.ts ***!
  \****************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let StudentService = class StudentService {
    constructor(http) {
        this.http = http;
    }
    post(model) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Student', model);
    }
};
StudentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StudentService);



/***/ }),

/***/ "./src/app/shared/services/university.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/university.service.ts ***!
  \*******************************************************/
/*! exports provided: UniversityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityService", function() { return UniversityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let UniversityService = class UniversityService {
    constructor(http) {
        this.http = http;
    }
    get(idCity) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'University/' + idCity);
    }
};
UniversityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UniversityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UniversityService);



/***/ }),

/***/ "./src/app/start-page/start-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/start-page/start-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0LXBhZ2Uvc3RhcnQtcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/start-page/start-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/start-page/start-page.component.ts ***!
  \****************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StartPageComponent = class StartPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
StartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/start-page/start-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start-page.component.css */ "./src/app/start-page/start-page.component.css")).default]
    })
], StartPageComponent);



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ua {\r\n\tmax-width: 1000px;\r\n\tmin-width: 768px;\r\n\theight: 800px;\r\n\t/* margin: auto;\t */\r\n}\r\n\r\n.jqvmap-zoomin {display: none;}\r\n\r\n.jqvmap-zoomout {display: none;}\r\n\r\n.container {\r\n    display: flex;\r\n    margin: 8px;\r\n    padding: 0;\r\n    flex-direction: row;\r\n    font-family: verdana, arial, sans-serif;        \r\n}\r\n\r\n.item {   \r\n    color:black;\r\n    font-size: 1.1em;\r\n    padding: 1em;   \r\n}\r\n\r\n.item:nth-child(2) {   \r\n    flex: 0 0 60%;    \r\n}\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n\r\n.add-btn{\r\n    width: 100% !important;\r\n    margin: 25px 0px;\r\n}\r\n\r\n.add-form-section{\r\n    margin: auto;\r\n    margin-top: 6%;\r\n    padding: 0px 40px 0px 0px;\r\n}\r\n\r\n.add-form{\r\n    margin: auto;\r\n    margin-top: 3%;\r\n    padding: 0 40px 40px 0px;    \r\n}\r\n\r\n.form-caption{\r\n    margin-bottom: 20px;\r\n    font-size: 28px;\r\n    font-weight: 400;\r\n}\r\n\r\n.selected-city{\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n}\r\n\r\n#city{\r\n    display: none;\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n    body {\r\n        flex-direction: row;\r\n    }\r\n    .item:nth-child(2) {\r\n        order: -1; \r\n        /* display: none; */\r\n    }\r\n\r\n    /* .item:nth-child(1) {\r\n        flex: 0 0 100%;    \r\n    } */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUEsZ0JBQWdCLGFBQWEsQ0FBQzs7QUFFOUIsaUJBQWlCLGFBQWEsQ0FBQzs7QUFFL0I7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsbUJBQW1CO0lBQ3ZCOztJQUVBOztPQUVHO0FBQ1AiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3N0dWRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN1YSB7XHJcblx0bWF4LXdpZHRoOiAxMDAwcHg7XHJcblx0bWluLXdpZHRoOiA3NjhweDtcclxuXHRoZWlnaHQ6IDgwMHB4O1xyXG5cdC8qIG1hcmdpbjogYXV0bztcdCAqL1xyXG59XHJcblxyXG4uanF2bWFwLXpvb21pbiB7ZGlzcGxheTogbm9uZTt9XHJcblxyXG4uanF2bWFwLXpvb21vdXQge2Rpc3BsYXk6IG5vbmU7fVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hLCBhcmlhbCwgc2Fucy1zZXJpZjsgICAgICAgIFxyXG59XHJcblxyXG4uaXRlbSB7ICAgXHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBwYWRkaW5nOiAxZW07ICAgXHJcbn1cclxuXHJcbi5pdGVtOm50aC1jaGlsZCgyKSB7ICAgXHJcbiAgICBmbGV4OiAwIDAgNjAlOyAgICBcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFkZC1idG57XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAyNXB4IDBweDtcclxufVxyXG5cclxuLmFkZC1mb3JtLXNlY3Rpb257XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgIHBhZGRpbmc6IDBweCA0MHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5hZGQtZm9ybXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgcGFkZGluZzogMCA0MHB4IDQwcHggMHB4OyAgICBcclxufVxyXG5cclxuLmZvcm0tY2FwdGlvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtY2l0eXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiNjaXR5e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICAuaXRlbTpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIG9yZGVyOiAtMTsgXHJcbiAgICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuICAgIH1cclxuXHJcbiAgICAvKiAuaXRlbTpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxMDAlOyAgICBcclxuICAgIH0gKi9cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_university_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/university.service */ "./src/app/shared/services/university.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _shared_services_faculty_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/faculty.service */ "./src/app/shared/services/faculty.service.ts");
/* harmony import */ var _shared_services_speciality_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/speciality.service */ "./src/app/shared/services/speciality.service.ts");
/* harmony import */ var _shared_services_specialization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/specialization.service */ "./src/app/shared/services/specialization.service.ts");
/* harmony import */ var _shared_models_Student_create_student__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/models/Student/create-student */ "./src/app/shared/models/Student/create-student.ts");
/* harmony import */ var _shared_services_student_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/student.service */ "./src/app/shared/services/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");












let StudentComponent = class StudentComponent {
    constructor(formBuilder, universityService, facultyService, alert, specialityService, specializationService, studentService, router, sharedService) {
        this.formBuilder = formBuilder;
        this.universityService = universityService;
        this.facultyService = facultyService;
        this.alert = alert;
        this.specialityService = specialityService;
        this.specializationService = specializationService;
        this.studentService = studentService;
        this.router = router;
        this.sharedService = sharedService;
        this.form = this.formBuilder.group({
            university: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            faculties: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            speciality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            specialization: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: '',
            lastname: '',
            course: 1,
            telegram: '',
            instagram: '',
            canHelp: false
        });
        this.color = 'primary';
        this.checked = false;
        this.disabled = false;
        this.facultiesOptions = [];
        this.specialityOptions = [];
        this.specializationOptions = [];
    }
    ngOnInit() {
        this.alert.success("Message text");
        this.loadUniversityByCity(9);
        this.student = new _shared_models_Student_create_student__WEBPACK_IMPORTED_MODULE_8__["CreateStudent"]();
        this.sharedService.sharedRelegramResponse.subscribe((response) => {
            this.form.controls['name'].setValue(response.first_name);
            this.form.controls['lastname'].setValue(response.Last_name);
            this.form.controls['telegram'].setValue(response.username);
        });
    }
    submit() {
        this.student.name = this.form.controls['name'].value;
        this.student.lastname = this.form.controls['lastname'].value;
        this.student.course = this.form.controls['course'].value;
        this.student.telegram = this.form.controls['telegram'].value;
        this.student.instagram = this.form.controls['instagram'].value;
        this.student.canHelp = this.form.controls['canHelp'].value;
        console.log(this.student);
        // this.studentService.post(this.student).subscribe((response) => 
        //   { 
        //     console.log(response); 
        //     this.router.navigate(['/thank-you']);
        //   },
        //   error => {console.log(error)
        //   this.router.navigate(['/thank-you']);}
        // );
    }
    // #region load data
    loadUniversityByCity(idCity) {
        this.filteredUniversityOptions = this.universityService.get(idCity);
        this.filteredUniversityOptions.subscribe(response => {
            this.universityOptions = response;
            this.form.controls['university'].setValue(this.universityOptions[0].name);
            this.loadFacultyByUniversity(this.universityOptions[0].id);
            this.student.universityId = this.universityOptions[0].id;
        });
    }
    loadFacultyByUniversity(idUniversity) {
        this.filteredFacultiesOptions = this.facultyService.get(idUniversity);
        // this.filteredFacultiesOptions.subscribe((response) => {
        //   this.facultiesOptions = response; 
        //   //this.form.controls['faculties'].setValue(this.facultiesOptions[0].faculties[0].name);
        //   //this.loadSpecialityByFaculty(this.facultiesOptions[0].faculties[0].id);
        // });
    }
    loadSpecialityByFaculty(idFaculty) {
        this.filteredSpecialityOptions = this.specialityService.get(idFaculty);
        // this.filteredSpecialityOptions.subscribe((response) => {
        //   this.specialityOptions = response; 
        //   //this.form.controls['speciality'].setValue(this.specialityOptions[0].name);
        // });
    }
    loadSpecializationBySpeciality(idSpeciality) {
        this.filteredSpecializationOptions = this.specializationService.get(idSpeciality);
    }
    //#endregion
    //#region  select handler
    citySelected(idCity) {
        this.form.controls['university'].reset();
        this.form.controls['faculties'].reset();
        this.form.controls['speciality'].reset();
        this.form.controls['specialization'].reset();
        this.loadUniversityByCity(idCity);
    }
    universitySelected(evt, university) {
        if (evt.source.selected) {
            this.form.controls['speciality'].reset();
            this.form.controls['specialization'].reset();
            this.loadFacultyByUniversity(university.id);
            this.student.universityId = university.id;
        }
    }
    facultySelected(evt, faculty) {
        if (evt.source.selected) {
            this.form.controls['specialization'].reset();
            this.loadSpecialityByFaculty(faculty.id);
            this.student.facultyId = faculty.id;
        }
    }
    specialitySelected(evt, speciality) {
        if (evt.source.selected) {
            this.loadSpecializationBySpeciality(speciality.id);
            this.student.specialityId = speciality.id;
        }
    }
    specializationSelected(evt, specialization) {
        if (evt.source.selected) {
            this.student.specializationId = specialization.id;
        }
    }
};
StudentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_university_service__WEBPACK_IMPORTED_MODULE_3__["UniversityService"] },
    { type: _shared_services_faculty_service__WEBPACK_IMPORTED_MODULE_5__["FacultyService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _shared_services_speciality_service__WEBPACK_IMPORTED_MODULE_6__["SpecialityService"] },
    { type: _shared_services_specialization_service__WEBPACK_IMPORTED_MODULE_7__["SpecializationService"] },
    { type: _shared_services_student_service__WEBPACK_IMPORTED_MODULE_9__["StudentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] }
];
StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")).default]
    })
], StudentComponent);



/***/ }),

/***/ "./src/app/thank-you-page/thank-you-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/thank-you-page/thank-you-page.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about {\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n\tbackground-color: #ffffff;\r\n\tbottom: 50px;\r\n\tdisplay: -moz-flex;\r\n\tdisplay: -ms-flex;\r\n\tdisplay: -o-flex;\r\n\tdisplay: flex;\r\n\tleft: 50px;\r\n\tposition: absolute;\r\n\tright: 50px;\r\n\ttop: 60px;\r\n}\r\n.about__wrapper {\r\n\tmargin: 0 auto;\r\n}\r\n.about__logo-img {\r\n\tdisplay: block;\r\n\twidth: 400px;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 2.5em;\r\n}\r\n.about_text {     \r\n\tfont-size: 1.475em;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 2.5rem;\r\n\tpadding: 0.875em;\r\n    width: 600px;\r\n    font-weight: 400;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhhbmsteW91LXBhZ2UvdGhhbmsteW91LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FFWixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsU0FBUztBQUNWO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osY0FBYztDQUNkLG9CQUFvQjtBQUNyQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsZ0JBQWdCO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQixrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC90aGFuay15b3UtcGFnZS90aGFuay15b3UtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0IHtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym90dG9tOiA1MHB4O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWZsZXg7XHJcblx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0ZGlzcGxheTogLW8tZmxleDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGxlZnQ6IDUwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiA1MHB4O1xyXG5cdHRvcDogNjBweDtcclxufVxyXG4uYWJvdXRfX3dyYXBwZXIge1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5hYm91dF9fbG9nby1pbWcge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiA0MDBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW4tYm90dG9tOiAyLjVlbTtcclxufVxyXG4uYWJvdXRfdGV4dCB7ICAgICBcclxuXHRmb250LXNpemU6IDEuNDc1ZW07XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG5cdHBhZGRpbmc6IDAuODc1ZW07XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/thank-you-page/thank-you-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/thank-you-page/thank-you-page.component.ts ***!
  \************************************************************/
/*! exports provided: ThankYouPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPageComponent", function() { return ThankYouPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ThankYouPageComponent = class ThankYouPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ThankYouPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thank-you-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thank-you-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/thank-you-page/thank-you-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thank-you-page.component.css */ "./src/app/thank-you-page/thank-you-page.component.css")).default]
    })
], ThankYouPageComponent);



/***/ }),

/***/ "./src/app/ukraine-map/ukraine-map.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ukraine-map/ukraine-map.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ua {\r\n\tmax-width: 1000px;\r\n\tmin-width: 768px;\r\n\theight: 800px;\r\n\t/* margin: auto;\t */\r\n}\r\n\r\n.jqvmap-zoomin {display: none;}\r\n\r\n.jqvmap-zoomout {display: none;}\r\n\r\n.selected-region{\r\n\tdisplay: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWtyYWluZS1tYXAvdWtyYWluZS1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQSxnQkFBZ0IsYUFBYSxDQUFDOztBQUU5QixpQkFBaUIsYUFBYSxDQUFDOztBQUUvQjtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3VrcmFpbmUtbWFwL3VrcmFpbmUtbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdWEge1xyXG5cdG1heC13aWR0aDogMTAwMHB4O1xyXG5cdG1pbi13aWR0aDogNzY4cHg7XHJcblx0aGVpZ2h0OiA4MDBweDtcclxuXHQvKiBtYXJnaW46IGF1dG87XHQgKi9cclxufVxyXG5cclxuLmpxdm1hcC16b29taW4ge2Rpc3BsYXk6IG5vbmU7fVxyXG5cclxuLmpxdm1hcC16b29tb3V0IHtkaXNwbGF5OiBub25lO31cclxuXHJcbi5zZWxlY3RlZC1yZWdpb257XHJcblx0ZGlzcGxheTogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/ukraine-map/ukraine-map.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ukraine-map/ukraine-map.component.ts ***!
  \******************************************************/
/*! exports provided: UkraineMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UkraineMapComponent", function() { return UkraineMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UkraineMapComponent = class UkraineMapComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    change(region) {
        this.onChanged.emit(region);
    }
    ngOnInit() {
        jQuery(document).ready(function () {
            jQuery('#ua').vectorMap({
                map: 'ukraine',
                backgroundColor: 'white',
                borderColor: '#FF9900',
                borderOpacity: 0.60,
                borderWidth: 2,
                color: '#1076C8',
                hoverColor: '#0A4C82',
                selectedColor: '#FF9900',
                selectedRegions: ['9'],
                onRegionClick: (element, code, region) => {
                    jQuery(".selected-region").val(code);
                    jQuery(".selected-region").click();
                }
            });
        });
        jQuery(this.elementRef.nativeElement).find('input').on('click', () => {
            this.selectedRegion = jQuery(".selected-region").val();
            this.change(this.selectedRegion);
        });
    }
};
UkraineMapComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UkraineMapComponent.prototype, "onChanged", void 0);
UkraineMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ukraine-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ukraine-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ukraine-map/ukraine-map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ukraine-map.component.css */ "./src/app/ukraine-map/ukraine-map.component.css")).default]
    })
], UkraineMapComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: true,
    //apiUrl: "http://localhost:65168/api/v1/"
    apiUrl: "https://mentor-abiturienta.api/api/v1/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\Program\Project\MentorEntrant\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map