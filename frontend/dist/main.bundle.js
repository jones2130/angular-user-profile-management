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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_update_update_component__ = __webpack_require__("../../../../../src/app/profile/update/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_list_list_component__ = __webpack_require__("../../../../../src/app/profile/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_admin_guard__ = __webpack_require__("../../../../../src/app/auth/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_logout_guard__ = __webpack_require__("../../../../../src/app/auth/logout.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_logout_guard__["a" /* LogoutGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_logout_guard__["a" /* LogoutGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__profile_update_update_component__["a" /* UpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_4__profile_update_update_component__["a" /* UpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__auth_admin_guard__["a" /* AdminGuard */]] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__profile_list_list_component__["a" /* ListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__auth_admin_guard__["a" /* AdminGuard */]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">User Profile Manager</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto \">\n      <li class=\"nav-item active\" *ngIf=\"!authService.isLoggedIn\">\n        <a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\"><span class=\"fa fa-user\"></span> Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.isLoggedIn\">\n        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\"><span class=\"fa fa-sign-in\"></span> Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn\">\n        <a class=\"nav-link\" routerLink=\"/profile\" routerLinkActive=\"active\"><span class=\"fa fa-edit\"></span> Edit Profile</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.isSuper\">\n        <a class=\"nav-link\" routerLink=\"/list\" routerLinkActive=\"active\"><span class=\"fa fa-users\"></span> Manage Users</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn\">\n        <a class=\"nav-link\" (click)=\"authService.logout()\"><span class=\"fa fa-sign-out\"></span> Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav button span {\n  font-size: 27px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, route, router) {
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_list_list_component__ = __webpack_require__("../../../../../src/app/profile/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_update_update_component__ = __webpack_require__("../../../../../src/app/profile/update/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_admin_guard__ = __webpack_require__("../../../../../src/app/auth/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_logout_guard__ = __webpack_require__("../../../../../src/app/auth/logout.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__profile_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__profile_update_update_component__["a" /* UpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* ReactiveFormsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__auth_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_13__auth_admin_guard__["a" /* AdminGuard */],
                __WEBPACK_IMPORTED_MODULE_14__auth_logout_guard__["a" /* LogoutGuard */],
                __WEBPACK_IMPORTED_MODULE_15__user_user_service__["a" /* UserService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (!this.auth.isLoggedIn || !this.auth.isSuper) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.auth.isLoggedIn) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.loginURL = "/users/login";
        this.logoutURL = "/users/logout";
        this.headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
    }
    AuthService.prototype.login = function (credentials, callback) {
        var _this = this;
        return this.http.post(this.loginURL + "/", credentials, this.headers).subscribe(function (data) {
            sessionStorage.setItem('_id', data._id);
            sessionStorage.setItem('isLoggedIn', true.toString());
            sessionStorage.setItem('isSuper', data.isSuper.toString());
            _this.router.navigate(['/profile']);
        }, function (err) {
            callback(err);
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        sessionStorage.removeItem('_id');
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('isSuper');
        return this.http.post(this.logoutURL + "/", {}).subscribe(function (res) {
            _this.router.navigate(['/']);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            if (sessionStorage.getItem('isLoggedIn') == 'true') {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isSuper", {
        get: function () {
            if (sessionStorage.getItem('isSuper') == 'true') {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/logout.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutGuard = /** @class */ (function () {
    function LogoutGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LogoutGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggedIn) {
            this.router.navigate(['/profile']);
            return false;
        }
        return true;
    };
    LogoutGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LogoutGuard);
    return LogoutGuard;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Login</h3>\n  <br />\n  <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n    Login credentials failed.\n  </div>\n  \n  <form [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"login(loginForm.value, loginForm.valid)\">\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\" for=\"title\">Username:</label>\n      <input formControlName=\"username\" type=\"text\" class=\"col-md-10 form-control\" id=\"username\" />\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\" for=\"author\">Password</label>\n      <input formControlName=\"password\" type=\"password\" class=\"col-md-10 form-control\" id=\"password\" />\n    </div>\n    <div class=\"row\">\n      <button class=\"col-lg-2 btn btn-success\" type=\"submit\"><span class=\"fa fa-sign-in\"></span> Login</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, route, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.events = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
        });
    };
    LoginComponent.prototype.login = function (credentials, isValid) {
        var _this = this;
        if (isValid) {
            this.authService.login(credentials, function (err) {
                if (err.status == 401) {
                    _this.errorMessage = true;
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!profiles || profiles.length == 0\" class=\"jumbotron\">\n    <h2>No user profiles available.</h2>\n    <a routerLink=\"/profile\" class=\"btn btn-success\"><span class=\"fa fa-edit\"></span> Edit Your Profile</a>\n  </div>\n\n  <div class=\"card profile\" *ngFor=\"let profile of profiles\">\n    <div class=\"card-block\">\n      <div class=\"row\">\n        <div class=\"col-sm-8\">\n          <h3 class=\"card-title\">{{ profile.username }}</h3>\n          <h6 class=\"card-subtitle text-muted\">{{ profile.first_name }} {{ profile.last_name }}</h6>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <span class=\"float-right\">\n            <button [routerLink]=\"['/profile', profile._id]\" class=\"btn btn-primary\">Edit</button>\n            <button (click)=\"deleteUser(profile)\" class=\"btn btn-danger\">Delete</button>\n          </span>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding: 24px; }\n\n.card {\n  padding: 10px;\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
        });
    };
    ListComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user).subscribe(function () {
            _this.userService.getProfiles().subscribe(function (profiles) {
                _this.profiles = profiles;
            });
        });
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/profile/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Edit Profile</h3>\n\n  <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n    {{errorMessage}}\n  </div>\n\n  <div *ngIf=\"successMessage\" class=\"alert alert-success\">\n    {{successMessage}}\n  </div>\n\n  <form [formGroup]=\"updateForm\" novalidate (ngSubmit)=\"submit(updateForm.value, updateForm.valid)\">\n    <div class=\"form-group row\">\n      <input formControlName=\"_id\" type=\"hidden\" id=\"_id\" />\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\" for=\"author\">First Name:</label>\n      <input formControlName=\"first_name\" type=\"text\" class=\"col-md-10 form-control\" id=\"first_name\" />\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\" for=\"title\">Last Name:</label>\n      <input formControlName=\"last_name\" type=\"text\" class=\"col-md-10 form-control\" id=\"last_name\" />\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">Gender:</label>\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <label class=\"md-check\">\n              <input type=\"radio\" value=\"male\" name=\"gender\" formControlName=\"gender\">&nbsp;Male\n            </label>\n          </div>\n          <div class=\"col-4\">\n            <label class=\"md-check\" for=\"gener\">\n              <input type=\"radio\" value=\"female\" name=\"gender\" formControlName=\"gender\">&nbsp;Female\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\" for=\"author\">Age</label>\n      <input formControlName=\"age\" type=\"number\" class=\"col-md-10 form-control\" id=\"age\" />\n    </div>\n    <div class=\"row\">\n      <button class=\"col-lg-2 btn btn-success\" type=\"submit\"><span class=\"fa fa-edit\"></span> Edit Profile</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/update/update.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/update/update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(formBuilder, userService, route, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.events = [];
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            first_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
            last_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
            _id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
        });
        this.route.paramMap.switchMap(function (params) { return _this.userService.getProfile(params.get('id')); })
            .subscribe(function (profileData) { return _this.populateForm(profileData); });
    };
    UpdateComponent.prototype.populateForm = function (profileData) {
        this.profileData = profileData;
        this.updateForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            first_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](profileData.first_name, []),
            last_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](profileData.last_name, []),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](profileData.gender, []),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](profileData.age, []),
            _id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](profileData._id, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
        });
    };
    UpdateComponent.prototype.submit = function (user, isValid) {
        var _this = this;
        if (isValid) {
            this.userService.update(user, function (res) {
                if (res.status != 401) {
                    _this.successMessage = res.message;
                }
                else {
                    _this.errorMessage = "Unauthorized access";
                }
            });
        }
    };
    UpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update',
            template: __webpack_require__("../../../../../src/app/profile/update/update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/update/update.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Register</h3>\n  \n  <form [formGroup]=\"registerForm\" novalidate (ngSubmit)=\"submit(registerForm.value, registerForm.valid)\">\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\" for=\"title\"><span style=\"color: red;\">*</span> Username:</label>\n      <input formControlName=\"username\" type=\"text\" class=\"col-md-10 form-control\" id=\"username\" name=\"username\" />\n    </div>\n\n    <div *ngIf=\"(registerForm.controls.username.invalid) && (registerForm.controls.username.touched || registerForm.controls.username.dirty)\" class=\"alert alert-danger\">\n      <div *ngIf=\"registerForm.controls.username.errors.required\">\n        Username is required.\n      </div>\n\n      <div *ngIf=\"registerForm.controls.username.errors.minlength\">\n        Username must be at least 4 characters long.\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\" for=\"author\"><span style=\"color: red;\">*</span> Password:</label>\n      <input formControlName=\"password\" type=\"password\" class=\"col-md-10 form-control\" id=\"password\" />\n    </div>\n\n    <div *ngIf=\"registerForm.controls.password.invalid && (registerForm.controls.password.dirty || registerForm.controls.password.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"registerForm.controls.password.errors.required\">\n        Password is required.\n      </div>\n\n      <div *ngIf=\"registerForm.controls.password.errors.minlength\">\n        Password must be at least 8 characters long.\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\" for=\"title\"><span style=\"color: red;\">*</span> Confirm Password:</label>\n      <input formControlName=\"password_confirm\" type=\"password\" class=\"col-md-10 form-control\" id=\"password_confirm\" />\n    </div>\n\n    <div *ngIf=\"registerForm.controls.password_confirm.invalid && (registerForm.controls.password_confirm.dirty || registerForm.controls.password_confirm.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"registerForm.controls.password_confirm.errors.required\">\n        Password Confirmation is required.\n      </div>\n\n      <div *ngIf=\"registerForm.controls.password_confirm.errors.minlength\">\n        Password Confirmation must be at least 8 characters long.\n      </div>\n\n      <div *ngIf=\"registerForm.controls.password_confirm.errors.nomatch\">\n        Passwords must match.\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\" for=\"author\">First Name:</label>\n      <input formControlName=\"first_name\" type=\"text\" class=\"col-md-10 form-control\" id=\"first_name\" />\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\" for=\"title\">Last Name:</label>\n      <input formControlName=\"last_name\" type=\"text\" class=\"col-md-10 form-control\" id=\"last_name\" />\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">Gender:</label>\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <label class=\"md-check\">\n              <input type=\"radio\" value=\"male\" name=\"gender\" formControlName=\"gender\">&nbsp;Male\n            </label>\n          </div>\n          <div class=\"col-4\">\n            <label class=\"md-check\" for=\"gener\">\n              <input type=\"radio\" value=\"female\" name=\"gender\" formControlName=\"gender\">&nbsp;Female\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\" for=\"author\">Age</label>\n      <input formControlName=\"age\" type=\"number\" class=\"col-md-10 form-control\" id=\"age\" />\n    </div>\n    <div class=\"row\">\n      <button class=\"col-lg-2 btn btn-success\" type=\"submit\"><span class=\"fa fa-plus-circle\"></span> Register</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator_password_validator__ = __webpack_require__("../../../../../src/app/validator/password.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, userService, route, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.events = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(4)]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8)]),
            password_confirm: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
            first_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
            last_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
        });
        this.registerForm.controls['password_confirm'].setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), Object(__WEBPACK_IMPORTED_MODULE_3__validator_password_validator__["a" /* passwordMatch */])(this.registerForm.controls.password)]);
    };
    RegisterComponent.prototype.submit = function (user, isValid) {
        if (isValid) {
            if (user.password == user.password_confirm) {
                this.userService.register(user);
            }
        }
        this.registerForm.controls.username.markAsTouched();
        this.registerForm.controls.password.markAsTouched();
        this.registerForm.controls.password_confirm.markAsTouched();
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.url = "/users";
        this.headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
    }
    UserService.prototype.register = function (user) {
        var _this = this;
        return this.http.post(this.url + "/register", user, this.headers).subscribe(function (res) {
            _this.router.navigate(['/']);
        });
    };
    UserService.prototype.deleteUser = function (user) {
        return this.http.post(this.url + "/delete/" + user._id, user, this.headers);
    };
    UserService.prototype.getProfile = function (id) {
        return this.http.get(this.url + "/" + (id ? id : sessionStorage.getItem('_id')), this.headers);
    };
    UserService.prototype.getProfiles = function () {
        return this.http.get(this.url + "/list", this.headers);
    };
    UserService.prototype.update = function (user, callback) {
        return this.http.post(this.url + "/update/" + user._id, user, this.headers).subscribe(function (res) {
            callback(res);
        }, function (err) {
            callback(err);
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/validator/password.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = passwordMatch;
function passwordMatch(password) {
    return function (control) {
        return (control.value == password.value) ? null : { nomatch: true };
    };
}


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