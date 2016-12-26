System.register(['angular2/core', 'angular2/common', 'rxjs/add/operator/map', './truncate.component', '../services/media.service'], function(exports_1, context_1) {
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
    var core_1, common_1, truncate_component_1, media_service_1;
    var MediaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (truncate_component_1_1) {
                truncate_component_1 = truncate_component_1_1;
            },
            function (media_service_1_1) {
                media_service_1 = media_service_1_1;
            }],
        execute: function() {
            MediaComponent = (function () {
                function MediaComponent(api) {
                    this.api = api;
                    this.title = "Flmmr";
                    this.fetchingInProcess = false;
                    this.mediaURLChanged = new core_1.EventEmitter();
                }
                MediaComponent.prototype.getMedia = function (query) {
                    var _this = this;
                    console.log("Fetching new data with query: ", query);
                    this.fetchingInProcess = true;
                    this.api.getMedia(query).subscribe(function (data) { _this.media = data.media; }, function (err) {
                        _this.fetchingInProcess = false;
                        console.error(err);
                        _this.media = [];
                    }, function () {
                        _this.fetchingInProcess = false;
                        console.log('done');
                    });
                };
                MediaComponent.prototype.changeMedia = function (media_url) {
                    console.log("changeMedia called!");
                    this.mediaURLChanged.emit(media_url);
                };
                MediaComponent.prototype.focusIn = function () {
                    console.log("focus in");
                    $("div.search-field").removeClass("start");
                };
                MediaComponent.prototype.catchClick = function (event) {
                    event.stopPropagation();
                };
                MediaComponent.prototype.focusOut = function () {
                    console.log("focus out");
                    $("div.search-field").addClass("start");
                };
                MediaComponent.prototype.dateToString = function (datestr) {
                    var date = new Date(datestr);
                    return (date.getDate()) + "." + (date.getMonth() + 1) + "." + date.getFullYear();
                };
                MediaComponent.prototype.durationToString = function (durstr) {
                    var allMinutes = Math.round(durstr / 60);
                    var hours = Math.floor(allMinutes / 60);
                    var leftMinutes = allMinutes % 60;
                    var additionalZero = leftMinutes.toString().length == 1 ? "0" : "";
                    return hours + ":" + additionalZero + leftMinutes + " h";
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MediaComponent.prototype, "mediaURLChanged", void 0);
                MediaComponent = __decorate([
                    core_1.Component({
                        selector: 'media',
                        templateUrl: 'app/components/media.component.html',
                        styleUrls: ['app/styles/style.css'],
                        pipes: [truncate_component_1.TruncatePipe],
                        providers: [media_service_1.FlmmrAPIService],
                        directives: [common_1.NgClass]
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
