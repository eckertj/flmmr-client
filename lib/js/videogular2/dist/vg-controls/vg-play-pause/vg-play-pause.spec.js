"use strict";
var testing_1 = require('angular2/testing');
var vg_play_pause_1 = require("./vg-play-pause");
var vg_api_1 = require("../../services/vg-api");
testing_1.describe('Play/Pause Button', function () {
    var playPause;
    var ref;
    var api;
    testing_1.beforeEach(function () {
        ref = {
            nativeElement: {
                getAttribute: function (name) {
                    return name;
                }
            }
        };
        api = new vg_api_1.VgAPI();
        api.medias = {
            main: {
                state: 'play'
            },
            secondary: {
                state: 'pause'
            }
        };
        playPause = new vg_play_pause_1.VgPlayPause(ref, api);
    });
    testing_1.it('Should get media by id on init', function () {
        spyOn(playPause.elem, 'getAttribute').and.callThrough();
        spyOn(api, 'getMediaById').and.callFake(function () {
            return {
                volume: 1
            };
        });
        playPause.ngOnInit();
        testing_1.expect(playPause.elem.getAttribute).toHaveBeenCalledWith('vg-for');
        testing_1.expect(api.getMediaById).toHaveBeenCalledWith('vg-for');
    });
    testing_1.it('Should get average state between all media files (play)', function () {
        playPause.target = api;
        var state = playPause.getState();
        testing_1.expect(state).toBe('play');
    });
    testing_1.it('Should get average state between all media files (pause)', function () {
        api.medias = {
            main: {
                state: 'pause'
            },
            secondary: {
                state: 'pause'
            }
        };
        playPause.target = api;
        var state = playPause.getState();
        testing_1.expect(state).toBe('pause');
    });
    testing_1.it('Should get state for one media file', function () {
        api.medias = {
            main: {
                state: 'play'
            }
        };
        playPause.target = api;
        var volume = playPause.getState();
        testing_1.expect(volume).toBe('play');
    });
    testing_1.describe('onClick (single and multiple media)', function () {
        testing_1.it('should pause if current state is different play', function () {
            spyOn(api, 'pause').and.callFake(function () { });
            api.medias = {
                main: {
                    state: 'play'
                }
            };
            playPause.target = api;
            playPause.onClick();
            testing_1.expect(api.pause).toHaveBeenCalled();
        });
        testing_1.it('should play if current state is pause', function () {
            spyOn(api, 'play').and.callFake(function () { });
            api.medias = {
                main: {
                    state: 'pause'
                }
            };
            playPause.target = api;
            playPause.onClick();
            testing_1.expect(api.play).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=vg-play-pause.spec.js.map