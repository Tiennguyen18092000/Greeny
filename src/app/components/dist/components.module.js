"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComponentsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var side_bar_component_1 = require("./side-bar/side-bar.component");
var footer_component_1 = require("./footer/footer.component");
var player_component_1 = require("./footer/player/player.component");
var theme_1 = require("@nebular/theme");
var slider_1 = require("@angular/material/slider");
var header_component_1 = require("./header/header.component");
var theme_component_1 = require("./header/theme/theme.component");
var logo_component_1 = require("./header/logo/logo.component");
var search_component_1 = require("./header/search/search.component");
var menu_component_1 = require("./header/menu/menu.component");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var menu_1 = require("@angular/material/menu");
var login_component_1 = require("./header/login/login.component");
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            declarations: [
                nav_bar_component_1.NavBarComponent,
                side_bar_component_1.SideBarComponent,
                footer_component_1.FooterComponent,
                player_component_1.PlayerComponent,
                header_component_1.HeaderComponent,
                theme_component_1.ThemeComponent,
                logo_component_1.LogoComponent,
                search_component_1.SearchComponent,
                menu_component_1.MenuComponent,
                login_component_1.LoginComponent,
            ],
            imports: [
                common_1.CommonModule,
                theme_1.NbIconModule,
                slider_1.MatSliderModule,
                theme_1.NbCardModule,
                theme_1.NbMenuModule,
                theme_1.NbSearchModule,
                theme_1.NbContextMenuModule,
                theme_1.NbButtonModule,
                theme_1.NbLayoutModule,
                theme_1.NbUserModule,
                theme_1.NbProgressBarModule,
                theme_1.NbListModule,
                theme_1.NbInputModule,
                theme_1.NbTooltipModule,
                theme_1.NbToggleModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                menu_1.MatMenuModule,
            ],
            exports: [
                header_component_1.HeaderComponent,
                side_bar_component_1.SideBarComponent,
                footer_component_1.FooterComponent,
                nav_bar_component_1.NavBarComponent,
                common_1.CommonModule,
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
