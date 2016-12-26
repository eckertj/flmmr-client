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
var common_1 = require("angular2/common");
var vg_api_1 = require('../../../services/vg-api');
var VgScrubBarCuePoints = (function () {
    function VgScrubBarCuePoints(ref, API) {
        this.API = API;
        this.elem = ref.nativeElement;
    }
    VgScrubBarCuePoints.prototype.ngOnInit = function () {
        this.vgFor = this.elem.getAttribute('vg-for');
        this.target = this.API.getMediaById(this.vgFor);
        var onTimeUpdate = this.target.subscriptions.loadedMetadata;
        onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this));
    };
    VgScrubBarCuePoints.prototype.onLoadedMetadata = function () {
        if (this.cuePoints) {
            for (var i = 0, l = this.cuePoints.length; i < l; i++) {
                var end = (this.cuePoints[i].endTime >= 0) ? this.cuePoints[i].endTime : this.cuePoints[i].startTime + 1;
                var cuePointDuration = (end - this.cuePoints[i].startTime) * 1000;
                var position = '0';
                var percentWidth = '0';
                if (typeof cuePointDuration === 'number' && this.target.time.total) {
                    percentWidth = ((cuePointDuration * 100) / this.target.time.total) + "%";
                    position = (this.cuePoints[i].startTime * 100 / (Math.round(this.target.time.total / 1000))) + "%";
                }
                this.cuePoints[i].$$style = {
                    width: percentWidth,
                    left: position
                };
            }
        }
    };
    VgScrubBarCuePoints.prototype.ngOnChanges = function (changes) {
        if (changes['cuePoints'].currentValue) {
            this.onLoadedMetadata();
        }
    };
    __decorate([
        core_1.Input('cuePoints'), 
        __metadata('design:type', TextTrackCueList)
    ], VgScrubBarCuePoints.prototype, "cuePoints", void 0);
    VgScrubBarCuePoints = __decorate([
        core_1.Component({
            selector: 'vg-scrub-bar-cue-points',
            directives: [common_1.NgFor],
            template: "\n        <div class=\"cue-point-container\">\n            <span *ngFor=\"#cp of cuePoints\" [style.width]=\"cp.$$style?.width\" [style.left]=\"cp.$$style?.left\" class=\"cue-point\"></span>\n        </div>\n        ",
            styles: ["\n        :host {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        :host .cue-point-container .cue-point {\n            position: absolute;\n            height: 5px;\n            background-color: rgba(255, 204, 0, 0.7);\n        }\n\n        vg-controls :host {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, vg_api_1.VgAPI])
    ], VgScrubBarCuePoints);
    return VgScrubBarCuePoints;
}());
exports.VgScrubBarCuePoints = VgScrubBarCuePoints;
//# sourceMappingURL=vg-scrub-bar-cue-points.js.map