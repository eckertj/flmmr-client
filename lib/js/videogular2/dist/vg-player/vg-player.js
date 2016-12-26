"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var vg_api_1 = require('../services/vg-api');
var vg_fullscreen_api_1 = require("../services/vg-fullscreen-api");
var vg_utils_1 = require("../services/vg-utils");
var VgPlayer = (function () {
    function VgPlayer(ref, api) {
        this.isFullscreen = false;
        this.onPlayerReady = new core_1.EventEmitter();
        this.onMediaReady = new core_1.EventEmitter();
        this.api = api;
        this.elem = ref.nativeElement;
        this.api.registerElement(this.elem);
    }
    VgPlayer.prototype.ngOnInit = function () {
        var slice = Array.prototype.slice;
        var videos = slice.call(this.elem.querySelectorAll("video"));
        var audios = slice.call(this.elem.querySelectorAll("audio"));
        var medias = videos.concat(audios);
        for (var i = 0, l = medias.length; i < l; i++) {
            this.api.registerMedia(medias[i]);
        }
        this.onPlayerReady.next(this.api);
        vg_fullscreen_api_1.VgFullscreenAPI.init(this.elem, medias);
        vg_fullscreen_api_1.VgFullscreenAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this));
    };
    VgPlayer.prototype.onChangeFullscreen = function (fsState) {
        if (!vg_fullscreen_api_1.VgFullscreenAPI.nativeFullscreen) {
            this.isFullscreen = fsState;
            this.zIndex = fsState ? vg_utils_1.VgUtils.getZIndex().toString() : 'auto';
        }
    };
    __decorate([
        core_1.HostBinding('class.fullscreen'), 
        __metadata('design:type', Boolean)
    ], VgPlayer.prototype, "isFullscreen", void 0);
    __decorate([
        core_1.HostBinding('style.z-index'), 
        __metadata('design:type', String)
    ], VgPlayer.prototype, "zIndex", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], VgPlayer.prototype, "onPlayerReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], VgPlayer.prototype, "onMediaReady", void 0);
    VgPlayer = __decorate([
        core_1.Component({
            selector: 'vg-player',
            bindings: [vg_api_1.VgAPI],
            template: "<ng-content></ng-content>",
            styles: ["\n        @font-face {\n            font-family: 'videogular';\n            src: url('node_modules/videogular2/fonts/videogular.eot');\n            src: url('node_modules/videogular2/fonts/videogular.eot?#iefix') format('embedded-opentype'),\n                 url('node_modules/videogular2/fonts/videogular.woff') format('woff'),\n                 url('node_modules/videogular2/fonts/videogular.ttf') format('truetype'),\n                 url('node_modules/videogular2/fonts/videogular.svg#videogular') format('svg');\n            font-weight: normal;\n            font-style: normal;\n        }\n\n        :host {\n            font-family: 'videogular';\n            position: relative;\n            display: flex;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            background-color: black;\n        }\n\n        :host video {\n            width: 100%;\n            height: 100%;\n        }\n\n        :host.fullscreen {\n            position: fixed;\n            left: 0;\n            top: 0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, vg_api_1.VgAPI])
    ], VgPlayer);
    return VgPlayer;
}());
exports.VgPlayer = VgPlayer;
//# sourceMappingURL=vg-player.js.map