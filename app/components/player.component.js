System.register(['angular2/core', 'angular2/common', 'videogular2/core', 'videogular2/controls', 'videogular2/overlay-play'], function(exports_1, context_1) {
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
    var core_1, common_1, core_2, controls_1, overlay_play_1;
    var SingleMediaPlayer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (controls_1_1) {
                controls_1 = controls_1_1;
            },
            function (overlay_play_1_1) {
                overlay_play_1 = overlay_play_1_1;
            }],
        execute: function() {
            SingleMediaPlayer = (function () {
                function SingleMediaPlayer() {
                    this.sources = [
                        {
                            src: "http://static.videogular.com/assets/videos/videogular.mp4",
                            type: "video/mp4"
                        },
                        {
                            src: "http://static.videogular.com/assets/videos/videogular.ogg",
                            type: "video/ogg"
                        },
                        {
                            src: "http://static.videogular.com/assets/videos/videogular.webm",
                            type: "video/webm"
                        }
                    ];
                }
                SingleMediaPlayer = __decorate([
                    core_1.Component({
                        selector: 'single-media-player',
                        templateUrl: 'app/components/player.component.html',
                        directives: [
                            core_2.VgPlayer,
                            overlay_play_1.VgOverlayPlay,
                            controls_1.VgControls,
                            controls_1.VgPlayPause,
                            controls_1.VgPlaybackButton,
                            controls_1.VgScrubBar,
                            controls_1.VgScrubBarCurrentTime,
                            controls_1.VgScrubBarBufferingTime,
                            controls_1.VgMute,
                            controls_1.VgFullscreen,
                            common_1.NgFor
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SingleMediaPlayer);
                return SingleMediaPlayer;
            }());
            exports_1("SingleMediaPlayer", SingleMediaPlayer);
        }
    }
});
//# sourceMappingURL=player.component.js.map