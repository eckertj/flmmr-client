System.register(['angular2/core', './media.component', './player.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, media_component_1, player_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (media_component_1_1) {
                media_component_1 = media_component_1_1;
            },
            function (player_component_1_1) {
                player_component_1 = player_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.mediaURL = "http://nrodl.zdf.de/none/tivi/15/03/150310_folge9_jungswgurlaub_jum_2256k_p14v11.mp4";
                }
                AppComponent.prototype.mediaURLChanged = function (media_url) {
                    this.mediaURL = media_url;
                    this.singleMediaPlayer.changeMedia(media_url);
                };
                __decorate([
                    core_1.ViewChild(player_component_1.SingleMediaPlayer), 
                    __metadata('design:type', player_component_1.SingleMediaPlayer)
                ], AppComponent.prototype, "singleMediaPlayer", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'flmmr',
                        templateUrl: 'app/components/app.component.html',
                        directives: [media_component_1.MediaComponent, player_component_1.SingleMediaPlayer]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map