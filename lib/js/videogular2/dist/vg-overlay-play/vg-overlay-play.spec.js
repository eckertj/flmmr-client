"use strict";
var testing_1 = require('angular2/testing');
var vg_overlay_play_1 = require("./vg-overlay-play");
var vg_api_1 = require("../services/vg-api");
testing_1.describe('Videogular Player', function () {
    var overlayPlay;
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
        overlayPlay = new vg_overlay_play_1.VgOverlayPlay(ref, api);
    });
    testing_1.it('Should get media by id on init', function () {
        spyOn(overlayPlay.elem, 'getAttribute').and.callThrough();
        spyOn(api, 'getMediaById').and.callFake(function () { });
        overlayPlay.ngOnInit();
        testing_1.expect(overlayPlay.elem.getAttribute).toHaveBeenCalledWith('vg-for');
        testing_1.expect(api.getMediaById).toHaveBeenCalledWith('vg-for');
    });
    testing_1.describe('onClick', function () {
        testing_1.beforeEach(function () {
            overlayPlay.target = {
                play: function () { },
                pause: function () { }
            };
        });
        testing_1.it('current state play should set target to pause', function () {
            spyOn(overlayPlay, 'getState').and.callFake(function () { return 'play'; });
            spyOn(overlayPlay.target, 'pause');
            overlayPlay.onClick();
            testing_1.expect(overlayPlay.getState).toHaveBeenCalled();
            testing_1.expect(overlayPlay.target.pause).toHaveBeenCalled();
        });
        testing_1.it('current state pause should set target to play', function () {
            spyOn(overlayPlay, 'getState').and.callFake(function () { return 'pause'; });
            spyOn(overlayPlay.target, 'play');
            overlayPlay.onClick();
            testing_1.expect(overlayPlay.getState).toHaveBeenCalled();
            testing_1.expect(overlayPlay.target.play).toHaveBeenCalled();
        });
    });
    testing_1.describe('getState', function () {
        testing_1.beforeEach(function () {
            overlayPlay.target = {
                state: null
            };
        });
        testing_1.it('if only one state returns that state', function () {
            overlayPlay.target.state = 'pause';
            testing_1.expect(overlayPlay.getState()).toEqual('pause');
        });
        testing_1.it('if more than one target should return pause if all of them are pause', function () {
            overlayPlay.target.state = ['pause', 'pause', 'pause', 'pause'];
            testing_1.expect(overlayPlay.getState()).toEqual('pause');
        });
        testing_1.it('if more than one target should return play if any of them is play', function () {
            overlayPlay.target.state = ['pause', 'play', 'pause', 'pause'];
            testing_1.expect(overlayPlay.getState()).toEqual('play');
        });
    });
});
//# sourceMappingURL=vg-overlay-play.spec.js.map