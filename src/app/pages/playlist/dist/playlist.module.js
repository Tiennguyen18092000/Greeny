"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlaylistModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var playlist_routing_module_1 = require("./playlist-routing.module");
var playlist_component_1 = require("./playlist.component");
var theme_1 = require("@nebular/theme");
var track_component_1 = require("./track/track.component");
var components_module_1 = require("src/app/components/components.module");
var PlaylistModule = /** @class */ (function () {
    function PlaylistModule() {
    }
    PlaylistModule = __decorate([
        core_1.NgModule({
            declarations: [playlist_component_1.PlaylistComponent, track_component_1.TrackComponent],
            imports: [
                common_1.CommonModule,
                playlist_routing_module_1.PlaylistRoutingModule,
                theme_1.NbCardModule,
                theme_1.NbUserModule,
                theme_1.NbListModule,
                theme_1.NbIconModule,
                theme_1.NbTooltipModule,
                theme_1.NbLayoutModule,
                components_module_1.ComponentsModule,
                theme_1.NbSidebarService
            ],
            providers: [theme_1.NbSidebarService]
        })
    ], PlaylistModule);
    return PlaylistModule;
}());
exports.PlaylistModule = PlaylistModule;
