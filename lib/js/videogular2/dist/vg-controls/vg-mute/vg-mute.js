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
var vg_api_1 = require('../../services/vg-api');
var VgMute = (function () {
    function VgMute(ref, API) {
        this.API = API;
        this.elem = ref.nativeElement;
    }
    VgMute.prototype.ngOnInit = function () {
        this.vgFor = this.elem.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
        this.currentVolume = this.target.volume;
    };
    VgMute.prototype.onClick = function () {
        var volume = this.getVolume();
        if (volume === 0) {
            this.target.volume = this.currentVolume;
        }
        else {
            this.currentVolume = volume;
            this.target.volume = 0;
        }
    };
    VgMute.prototype.getVolume = function () {
        var volume;
        var result;
        if (this.target.volume instanceof Object) {
            volume = 0;
            for (var media in this.target.volume) {
                volume += this.target.volume[media];
            }
            result = (volume / Object.keys(this.target.volume).length);
        }
        else {
            result = this.target.volume;
        }
        return result;
    };
    VgMute = __decorate([
        core_1.Component({
            selector: 'vg-mute',
            host: {
                '(click)': 'onClick()'
            },
            template: "<div class=\"icon\"\n             [class.level3]=\"getVolume() >= 0.75\"\n             [class.level2]=\"getVolume() >= 0.5 && getVolume() < 0.75\"\n             [class.level1]=\"getVolume() >= 0.25 && getVolume() < 0.5\"\n             [class.level0]=\"getVolume() > 0 && getVolume() < 0.25\"\n             [class.mute]=\"getVolume() === 0\">\n        </div>",
            styles: ["\n        :host {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        :host .icon {\n            pointer-events: none;\n        }\n\n        :host .icon.level3:before {\n            content: \"\\e002\";\n        }\n\n        :host .icon.level2:before {\n            content: \"\\e003\";\n        }\n\n        :host .icon.level1:before {\n            content: \"\\e004\";\n        }\n\n        :host .icon.level0:before {\n            content: \"\\e005\";\n        }\n\n        :host .icon.mute:before {\n            content: \"\\e006\";\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, vg_api_1.VgAPI])
    ], VgMute);
    return VgMute;
}());
exports.VgMute = VgMute;
//# sourceMappingURL=vg-mute.js.map