"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var eva_icons_1 = require("@nebular/eva-icons");
var components_module_1 = require("./components/components.module");
var home_module_1 = require("./pages/home/home.module");
var forms_1 = require("@angular/forms");
var theme_1 = require("@nebular/theme");
var environment_1 = require("../environments/environment");
var fire_1 = require("@angular/fire");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                fire_1.AngularFireModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                theme_1.NbThemeModule.forRoot({ name: 'default' }),
                theme_1.NbLayoutModule,
                eva_icons_1.NbEvaIconsModule,
                theme_1.NbCheckboxModule,
                components_module_1.ComponentsModule,
                theme_1.NbIconModule,
                theme_1.NbSidebarModule,
                theme_1.NbDatepickerModule,
                theme_1.NbDatepickerModule.forRoot(),
                theme_1.NbInputModule,
                home_module_1.HomeModule,
                theme_1.NbMenuModule.forRoot(),
                theme_1.NbToastrModule.forRoot(),
            ],
            providers: [theme_1.NbSidebarService, theme_1.NbToastrService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
