"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    { path: 'home', loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/home/home.module'); }).then(function (m) { return m.HomeModule; }); } },
    { path: 'upload', loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/upload/upload.module'); }).then(function (m) { return m.UploadModule; }); } },
    { path: 'premium', loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/premium/premium.module'); }).then(function (m) { return m.PremiumModule; }); } },
    { path: 'playlist', loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/playlist/playlist.module'); }).then(function (m) { return m.PlaylistModule; }); } },
    { path: 'signup', loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/signup/signup.module'); }).then(function (m) { return m.SignupModule; }); } },
    { path: 'signin', loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/signin/signin.module'); }).then(function (m) { return m.SigninModule; }); } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
