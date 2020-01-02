webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stack_stack_component__ = __webpack_require__("../../../../../src/app/stack/stack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_validation_service__ = __webpack_require__("../../../../../src/app/contact/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_service__ = __webpack_require__("../../../../../src/app/contact/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__stack_stack_component__["a" /* StackComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* globalRoutes */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__contact_validation_service__["a" /* ValidationService */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_service__["a" /* ContactService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globalRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stack_stack_component__ = __webpack_require__("../../../../../src/app/stack/stack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");






var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'stack', component: __WEBPACK_IMPORTED_MODULE_2__stack_stack_component__["a" /* StackComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_5__faq_faq_component__["a" /* FaqComponent */] }
];
var globalRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n  color: white !important;\r\n}\r\n\r\nh3 {\r\n  font-family: geforce-light, sans-serif;\r\n  color: #76b900;\r\n}\r\n\r\n.message-sending{\r\n  height: 36.5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container page-container\">\r\n  <div class=\"row text-center justify-content-center\">\r\n    <div class=\"col-md-8\">\r\n      <p class=\"p-lead mb-3\">Contact Me</p>\r\n      <h1>Queries? Get In Touch!</h1>\r\n      <p class=\"lead\">Tell me about your project and requirements and lets see how I can turn your canvas into a master piece</p>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit(contactForm.value)\">\r\n    <div class=\"form-group\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-8\">\r\n          <label for=\"inputName\">Name</label>\r\n          <input class=\"form-control\" id=\"inputName\" placeholder=\"Enter name\" type=\"text\" [formControl]=\"contactForm.controls['name']\">\r\n          <div *ngIf=\"!contactForm.controls['name'].valid && contactForm.controls['name'].touched\" class=\"alert alert-danger\"><strong>Warning! </strong> Please enter your full name</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-8\">\r\n          <label for=\"inputName\">Email</label>\r\n          <input class=\"form-control\" id=\"inputName\" placeholder=\"Enter email\" type=\"text\" [formControl]=\"contactForm.controls['email']\">\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">I'll never share your email with anyone else.</small>\r\n          <div *ngIf=\"!contactForm.controls['email'].valid && contactForm.controls['email'].touched\" class=\"alert alert-danger\"><strong>Warning! </strong>not a valid email</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-8\">\r\n          <label for=\"inputMessage\">Message</label>\r\n          <textarea class=\"form-control\" id=\"inputMessage\" rows=\"10\" cols=\"100\" placeholder=\"Enter message\" [formControl]=\"contactForm.controls['message']\"></textarea>\r\n          <div *ngIf=\"!contactForm.controls['message'].valid && contactForm.controls['message'].touched\" class=\"alert alert-danger\"><strong>Warning! </strong>Please enter a message</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center mt-2\" *ngIf=\"status == null\" id=\"button-block\">\r\n        <div class=\"col-md-8\">\r\n          <div class=\"form-buttons float-left\">\r\n            <button type=\"submit\" name=\"submit\" id=\"submit\" class=\"btn btn-lg btn-success\" [class]=\"'btn btn-lg btn-success ' + getClass()\" [disabled]=\"!contactForm.valid\" >Send</button>\r\n            <button type=\"button\" (click)=\"clearForm()\" class=\"btn btn-lg btn-secondary\">Clear</button>\r\n          </div>\r\n          <div class=\"processing-svg float-right\" *ngIf=\"formIsProcessing == true\">\r\n            <img class=\" message-sending\" src=\"/assets/images/contact/Blocks(1).svg\"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"row justify-content-center post-message mt-2\">\r\n    <div class=\"col-md-8\">\r\n      <div class=\"alert alert-success\"*ngIf=\"status == 200\">\r\n        <strong>Sweet!</strong> Your message has been sent! I will get back to you ASAP :)\r\n      </div>\r\n      <div class=\"alert alert-danger\" *ngIf=\"status != 200 && status != null\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        <strong>Dammit!</strong> Something went wrong, please try again later\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_service__ = __webpack_require__("../../../../../src/app/contact/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_service__ = __webpack_require__("../../../../../src/app/contact/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = /** @class */ (function () {
    function ContactComponent(router, formBuilder, validationService, contactService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.contactService = contactService;
        this.createForm();
    }
    ContactComponent.prototype.clearForm = function () {
        this.createForm();
    };
    ContactComponent.prototype.getClass = function () {
        if (!this.contactForm.valid) {
            return 'disabled';
        }
    };
    ContactComponent.prototype.createForm = function () {
        this.status = null;
        this.formIsProcessing = false;
        this.contactForm = this.formBuilder.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    this.validationService.namevalidator
                ])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    this.validationService.emailValidator
                ])],
            'message': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                ])],
        });
    };
    ContactComponent.prototype.onSubmit = function (message) {
        var _this = this;
        if (this.contactForm.valid) {
            this.formIsProcessing = true;
            this.contactService.sendEmail(message).subscribe(function (data) { _this.handleResponse(data); }, function (err) { _this.handleError(err); });
        }
        else {
            console.log('form is invalid');
        }
    };
    ContactComponent.prototype.handleError = function (err) {
        console.log('An error occurred: ', err);
    };
    ContactComponent.prototype.handleResponse = function (data) {
        this.data = data;
        this.status = data.status;
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__validation_service__["a" /* ValidationService */], __WEBPACK_IMPORTED_MODULE_3__contact_service__["a" /* ContactService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.API_ROOT_URL = 'https://keilcarpenter-portfolio-api.herokuapp.com/api';
    }
    ContactService.prototype.sendEmail = function (queryObject) {
        var body = JSON.stringify(queryObject);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.API_ROOT_URL + "/sendemail", body, { headers: headers, observe: 'response' });
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "../../../../../src/app/contact/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.emailValidator = function (control) {
        if (!control.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            return { invalidEmail: true };
        }
    };
    ValidationService.prototype.namevalidator = function (control) {
        if (control.value.match(/^\s/)) {
            return { invalidName: true };
        }
        if (control.value.match(/[0-9]/)) {
            return { invalidName: true };
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "../../../../../src/app/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container page-container\">\r\n  <div class=\"row text-center justify-content-center\">\r\n    <div class=\"col-md-8\">\r\n      <p class=\"p-lead mb-3\">Frequently Asked Questions</p>\r\n      <h1>Got a Question? It may be here</h1>\r\n      <p class=\"lead\">If your question isn't listed here or you need a more specific answer please <a data-toggle=\"modal\" data-target=\"#modal-contact\"><strong>contact me</strong></a></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"question mb-5\">\r\n        <h3>What are your payment options?</h3>\r\n        <p>I am quite flexible with payment arrangements and open to options that suit you. Generally, I have found that 50% deposit at the commencement of the project and the remaining 50% when the project is completed and the contract has been signed off.</p>\r\n      </div>\r\n      <div class=\"question mb-3\">\r\n        <h3>Can I add changes to the requirements of the project once the contract has been signed?</h3>\r\n        <p>Yes! This is just the nature of the beast. This will involve a few easy steps:</p>\r\n        <ul>\r\n          <li>Assess the new requirements</li>\r\n          <li>Check whether modifications need to take place on the existing build</li>\r\n          <li>Rewrite the contract to fit the new requirements</li>\r\n          <li>Sign off the modified contract with you (the client)</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#sub-footer{\r\n  background-color: #FED766;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  padding: 0 0 50px;\r\n}\r\n\r\n.sub-contents{\r\n  width: 65.3333333333%;\r\n  margin-left: 17.3333333333%;\r\n}\r\n\r\n#main-contents{\r\n  width: 100%;\r\n  margin-left: 0;\r\n}\r\n\r\nul{\r\n  list-style: none;\r\n  padding-left: 0;\r\n}\r\n\r\n/*.footer-info{\r\n  color: #979ca0;\r\n}*/\r\n\r\n.footer-header{\r\n  color: #fff;\r\n}\r\n\r\n.text-small{\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.footer-link, .footer-item{\r\n  color: #979ca0;\r\n}\r\n\r\n.footer-link:hover{\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\np.intro {\r\n  font-size: 2.0rem;\r\n  margin: 6rem 0 1.8rem;\r\n  line-height: 1.4;\r\n  font-weight: 700;\r\n  text-align: center;\r\n}\r\n\r\n.slate {\r\n  color: #252a30;\r\n}\r\n\r\np.statement {\r\n  font-size: 1.6rem;\r\n  text-align: center;\r\n}\r\n\r\n.footer-btn a.btn {\r\n  margin: 2.4rem 0 0;\r\n}\r\n\r\n.footer-btn{\r\n  position: relative;\r\n}\r\n\r\nfooter {\r\n  padding: 80px 0 50px;\r\n  color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sub-footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"sub-contents\">\r\n        <p class=\"intro slate\">Want to work together?</p>\r\n        <p class=\"statement slate\">I'm always looking forward to working with new people on unique projects and I would love to hear about yours. Please take a few minutes to tell me about it.</p>\r\n        <div class=\"footer-btn\">\r\n          <a data-toggle=\"modal\" data-target=\"#modal-contact\" class=\"btn btn-lg btn-primary\">Get in touch!</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<footer  class=\"bg-dark\">\r\n  <div id=\"contact\">\r\n    <div class=\"container\">\r\n      <div class=\"row pr-3 pl-3\">\r\n        <div id=\"main-contents\">\r\n          <div class=\"row justify-content-center mb-3\">\r\n            <div class=\"col-sm text-center\">\r\n              <p class=\"footer-header\">Made with lots of <i class=\"fa fa-heart\" style=\"color: red;\" aria-hidden=\"true\"></i> by Keil Carpenter</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-center text-center\">\r\n            <div class=\"col-sm-3 col-md-2\">\r\n              <h6>Resources</h6>\r\n              <ul>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" (click)=\"scrollToTop()\" [routerLink]=\"['/faq']\">FAQ</a></li>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"https://github.com/Blasphemien\" target=\"_blank\">Github</a></li>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"https://travis-ci.org/KeilCarpenter\" target=\"_blank\">TravisCI</a></li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-sm-3 col-md-2\">\r\n              <h6>Ingredients</h6>\r\n              <ul>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"https://getbootstrap.com/docs/4.0/getting-started/introduction/\" target=\"_blank\">Bootstrap 4</a></li>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"https://developer.mozilla.org/bm/docs/Web/JavaScript\" target=\"_blank\">Javascript (es6)</a></li>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"https://angular.io/\" target=\"_blank\">Angular 5</a></li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-sm-3 col-md-2\">\r\n              <h6>Contact</h6>\r\n              <ul>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"https://github.com/Blasphemien\" target=\"_blank\">Github</a></li>\r\n                <li class=\"footer-item\"><a class=\"footer-link text-small\" href=\"\" data-toggle=\"modal\" data-target=\"#modal-contact\" >Email</a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n\r\n<!--john-brooks-->\r\n<div class=\"modal\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"modal-contact\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <app-contact></app-contact>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.scrollToTop = function () {
        window.scrollTo(0, 0);
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa-nav{\r\n  color: #979ca0;\r\n}\r\n\r\n.fa-nav:hover{\r\n  color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand text-white\">Keil Carpenter</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/projects']\">Projects</a>\r\n        </li>\r\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/contact']\">Contact</a>\r\n        </li>\r\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/faq']\">FAQ</a>\r\n        </li>\r\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" href=\"https://medium.com/keil-carpenter\" target=\"_blank\">Blog</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"nav ml-auto\">\r\n        <a class=\"nav-item nav-link fa-nav\" href=\"https://github.com/blasphemien\" target=\"_blank\">\r\n          <i class=\"fab fa-github\"></i>\r\n        </a>\r\n        <a class=\"nav-item nav-link fa-nav\" [routerLink]=\"['/contact']\">\r\n          <i class=\"fas fa-at\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-lg {\r\n  max-width: 1012px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.jumbotron {\r\n  background-color: #2b3137;\r\n}\r\n\r\n#home-svg{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.carosel-img{\r\n  width: 400px;\r\n  height: 400px;\r\n  background-color: grey;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid py-6\">\r\n  <div class=\"container page-container position-relative\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-center text-md-left align-self-center\">\r\n        <h1 class=\"h0 text-white mb-3\">Keil Carpenter, Building Beautiful Software</h1>\r\n        <p class=\"text-lead mb-4\">.NET and front end javascript developer focused on producing clean, reusable and testable code. From paper to product, I have it covered.</p>\r\n        <div class=\"d-flex flex-column flex-md-row lead mb-3\">\r\n          <button class=\"btn btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#modal-contact\">Yes! I'm for hire</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <img id=\"home-svg\" src=\"../../assets/images/home/launch.svg\"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-stack></app-stack>\r\n\r\n<!--contact modal-->\r\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"modal-contact\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <app-contact></app-contact>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pre {\r\n  padding-left: 15px;\r\n  overflow: auto;\r\n  font-size: 85%;\r\n  line-height: 1.45;\r\n  background-color: #f7f7f9;\r\n  border-radius: 3px;\r\n}\r\n\r\na{\r\n  color: grey;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover{\r\n  color: lightgrey;\r\n}\r\n\r\n@media (max-width: 769px) {\r\n  .card-title{\r\n    text-align: center;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container page-container\">\r\n  <div class=\"row text-center justify-content-center\">\r\n    <div class=\"col-md-8\">\r\n      <p class=\"p-lead mb-3\">Projects</p>\r\n      <h1>The Sample Room</h1>\r\n      <p class=\"lead\">Check out a few samples of my work</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>ChecksumVerifier</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  class=\"pr-1\" href=\"https://github.com/Blasphemien/ChecksumVerifier\" target=\"_blank\">\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">.NET WPF C#</h6>\r\n          <p class=\"card-text\">Calculates SHA256, SHA1 and MD5 hashes. This is still in active development but main functionality is complete.</p>\r\n          <ul>\r\n            <li>Drag and drop files</li>\r\n            <li>Selective hashes</li>\r\n          </ul>\r\n          <p></p>\r\n          <a href=\"https://github.com/Blasphemien/ChecksumVerifier\" target=\"_blank\" class=\"card-link\">View on Github</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"card-title\">\r\n                <h3>John Brooks Engineering</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">Java, MySQL</h6>\r\n          <p class=\"card-text\">\r\n          <p><strong>Third year internship</strong> Java application to automate the process for selecting the correct\r\n            sized couplings to connect a gear box to a specific conveyor belt motor based on factors such as torque\r\n            (the amount of force needed to move an object), speed, friction and weight. Data for this application was\r\n            stored on a local MySQL database which connected to the Java client which was made to be used cross-platform.</p>\r\n\r\n          <p>The design analysis and techniques of the project included UML using Visual Paradigm to layout the DB entities\r\n            before they were put into development, the Software Development Life Cycle methodology, unit testing in jUnit,\r\n            Agile project management using SCRUM to manage development phases as well as documentation which had to be signed off by the client.</p>\r\n          <ul>\r\n            <li>Static table on GUI to guide the user of the boundaries between the different ratios of tourqe, speed and\r\n              friction of a motor and gearbox</li>\r\n            <li>Calculations are stored in a centralized MySQL DB</li>\r\n            <li>User has the option to make print outs of past calculations for review</li>\r\n          </ul>\r\n          <p></p>\r\n          <a href=\"../../assets/images/projects/johnbrooks/Poster.jpg\" target=\"_blank\" class=\"card-link\">Spec sheet</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>StarWarsCharacterNames (npm pkg & JS Library)</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  class=\"pr-1\" href=\"https://github.com/Blasphemien/StarWarsCharacterNames\" target=\"_blank\">&nbsp;\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n                <a href=\"https://www.npmjs.com/package/starwars-character-names\" target=\"_blank\">\r\n                  <i class=\"fab fa-npm fa-2x\"></i>&nbsp;\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">Javascript</h6>\r\n          <p class=\"card-text\">\r\n            starwars-character-names is a JS library published to npm. Its purpose is to provide the user an easy API for getting random names of starwars characters</p>\r\n          <h5>Build tools</h5>\r\n          <ul>\r\n            <li>Testing: mocha, chai</li>\r\n            <li>Release: semantic-release & commitizen</li>\r\n            <li>Build: Webpack</li>\r\n            <li>Intergration: Travis CI</li>\r\n          </ul>\r\n          <h5>Install</h5>\r\n          <div class=\"code-block\">\r\n           <pre class=\"pre-scrollable\"><code>\r\nnpm install --save starwars-character-names\r\n           </code></pre>\r\n          </div>\r\n          <h5>Usage</h5>\r\n          <div class=\"code-block\">\r\n           <pre class=\"pre-scrollable\"><code>\r\n// require module\r\nvar starWarsNames = require('starwars-character-names');\r\n\r\n// returns an array of all names\r\nvar allNames = starWarsNames.filter.all;\r\n\r\n// returns single random name\r\nvar randomName = starWarsNames.filter.random();\r\n\r\n// returns an array of n number of names\r\nvar fourNames = starWarsNames.filter.random(number);\r\n\r\n// returns array of names with the first name beginning with user defined char\r\nvar firstNamesByChar = starWarsNames.filter.byFirstCharOfFirstName(char);\r\n\r\n// returns array of names with the second name beginning with user defined char\r\nvar secondNamesByChar = starWarsNames.filter.byFirstCharOfSecondName(char);\r\n           </code></pre>\r\n          </div>\r\n          <p></p>\r\n          <a class=\"card-link\" href=\"https://github.com/Blasphemien/StarWarsCharacterNames\" target=\"_blank\">Github</a>\r\n          <a class=\"card-link\" href=\"https://www.npmjs.com/package/starwars-character-names\" target=\"_blank\">npm</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>Messenger</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  class=\"pr-1\" href=\"https://github.com/Blasphemien/Messenger\" target=\"_blank\">\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">Angular, Node, Express, MongoDB</h6>\r\n          <p class=\"card-text\">A messaging app in Node, Angular and MongoDB which allows users to sign up for an account and begin instant messaging on the public fourm.</p>\r\n          <ul>\r\n            <li>Credentials hashed and salted (SHA)</li>\r\n            <li>Web Tokens to validate auth</li>\r\n            <li>Lazy loading of component modules</li>\r\n          </ul>\r\n          <p></p>\r\n          <a class=\"card-link\" href=\"https://github.com/Blasphemien/Messenger\" target=\"_blank\">Github</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>Responsive Recipe Book</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  class=\"pr-1\" href=\"https://github.com/Blasphemien/RecipeBook\" target=\"_blank\">\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">Angular, Node, Express, MongoDB</h6>\r\n          <p class=\"card-text\">A responsive and scalable recipe book that allows users to create and store their own recipes for future use.</p>\r\n          <ul>\r\n            <li>CRUD ops from client to Firebase DB</li>\r\n          </ul>\r\n          <a href=\"https://github.com/Blasphemien/RecipeBook\" target=\"_blank\" class=\"card-link\">View on Github</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>Tasky</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  class=\"pr-1\" href=\"https://github.com/Blasphemien/Tasky\" target=\"_blank\">\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">Electron</h6>\r\n          <p class=\"card-text\">Cross platform task manager for Windows, OSX and Linux</p>\r\n          <ul>\r\n            <li>No thread throtteling when app is in background mode</li>\r\n            <li>Change default timeout values for each task</li>\r\n            <li>Cross platform (Windows, OSX, iOS and linux)</li>\r\n            <li>Activate/deactivate tasks</li>\r\n          </ul>\r\n          <p></p>\r\n          <a href=\"https://github.com/Blasphemien/Tasky\" target=\"_blank\" class=\"card-link\">View on Github</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>Monopoly</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  class=\"pr-1\" href=\"https://github.com/Blasphemien/Monopoly\" target=\"_blank\">\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">C#</h6>\r\n          <p class=\"card-text\">Console based version of the board game Monopoly</p>\r\n          <ul>\r\n            <li>Conduct unit tests on all classes in monopoly game using nUnit framework and produce average of 75% code coverage for overall codebase</li>\r\n          </ul>\r\n          <p></p>\r\n          <a href=\"https://github.com/Blasphemien/Monopoly\" target=\"_blank\" class=\"card-link\">View on Github</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"col-sm-12 col-md-10\">\r\n              <div class=\"card-title\">\r\n                <h3>Battleships</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-2 text-center\">\r\n              <div class=\"card-header-fa-icons\">\r\n                <a  href=\"https://github.com/Blasphemien/BattleShips\" target=\"_blank\">\r\n                  <i class=\"fab fa-github fa-2x\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">C#</h6>\r\n          <p class=\"card-text\">.NET Windows Forms version of the game Battleships</p>\r\n          <p></p>\r\n          <a href=\"https://github.com/Blasphemien/BattleShips\" target=\"_blank\" class=\"card-link\">View on Github</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stack/stack.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stack/stack.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container page-container\">\r\n  <div class=\"row text-center justify-content-center\">\r\n    <div class=\"col-md-8\">\r\n      <p class=\"p-lead mb-3\">Technologies</p>\r\n      <h1>The Toolbox</h1>\r\n      <p class=\"lead\">All the ingredients that make up your responsive and user friendly web applications from front end\r\n        UX frameworks to unit testing and continuous integration libraries and all the goodies in between</p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"row align-items-end\">\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/html.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>HTML</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/css.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>CSS</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/js.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Javascript</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/visual-studio.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Visual Studio</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/CSharp.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>C#</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/angular.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Angular</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/node.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Node</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/express.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Express</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/bootstrap.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Bootstrap</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/git.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Git</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/github.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Github</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/npm.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>NPM</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/travis-ci.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Travis CI</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/jasmine.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Jasmine</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/karma.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Karma</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-4 col-sm-3 col-md-2 pt-5 align-self-center\">\r\n      <img src=\"/assets/images/tech/webstorm.svg\" class=\"img-fluid\">\r\n      <div class=\"logo-info text-center pt-2\">\r\n        <h5>Webstorm</h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/stack/stack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StackComponent = /** @class */ (function () {
    function StackComponent() {
    }
    StackComponent.prototype.ngOnInit = function () {
    };
    StackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stack',
            template: __webpack_require__("../../../../../src/app/stack/stack.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stack/stack.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StackComponent);
    return StackComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map