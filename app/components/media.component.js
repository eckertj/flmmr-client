System.register(['angular2/core', 'rxjs/add/operator/map', '../services/media.service'], function(exports_1, context_1) {
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
    var core_1, media_service_1;
    var MediaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (media_service_1_1) {
                media_service_1 = media_service_1_1;
            }],
        execute: function() {
            MediaComponent = (function () {
                function MediaComponent(api) {
                    this.api = api;
                    this.title = "Flmmr";
                }
                MediaComponent.prototype.ngOnInit = function () {
                };
                MediaComponent.prototype.getMedia = function (query) {
                    var _this = this;
                    console.log("Fetching new data with query: ", query);
                    this.api.getMedia(query).subscribe(function (data) { _this.media = data.media; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
                };
                MediaComponent = __decorate([
                    core_1.Component({
                        selector: 'media',
                        templateUrl: 'app/components/media.component.html',
                        styleUrls: ['app/styles/style.css'],
                        providers: [media_service_1.FlmmrAPIService],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [media_service_1.FlmmrAPIService])
                ], MediaComponent);
                return MediaComponent;
            }());
            exports_1("MediaComponent", MediaComponent);
        }
    }
});
//# sourceMappingURL=media.component.js.map