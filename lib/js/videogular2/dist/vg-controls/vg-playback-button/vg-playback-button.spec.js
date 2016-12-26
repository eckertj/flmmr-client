"use strict";
var testing_1 = require('angular2/testing');
var vg_playback_button_1 = require("./vg-playback-button");
var vg_api_1 = require("../../services/vg-api");
testing_1.describe('Playback Button', function () {
    var playbackButton;
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
        playbackButton = new vg_playback_button_1.VgPlaybackButton(ref, api);
    });
    testing_1.it('Should set playbackIndex default value to 1', function () {
        testing_1.expect(playbackButton.playbackIndex).toEqual(1);
    });
    testing_1.it('Should get media by id on init', function () {
        spyOn(playbackButton.elem, 'getAttribute').and.callThrough();
        spyOn(api, 'getMediaById');
        playbackButton.ngOnInit();
        testing_1.expect(playbackButton.elem.getAttribute).toHaveBeenCalledWith('vg-for');
        testing_1.expect(api.getMediaById).toHaveBeenCalledWith('vg-for');
    });
    testing_1.describe('onClick (single and multiple media)', function () {
        testing_1.it('should increase playbackIndex', function () {
            api.medias = {
                main: {
                    state: 'play'
                }
            };
            playbackButton.target = api;
            playbackButton.onClick();
            testing_1.expect(playbackButton.playbackIndex).toEqual(2);
        });
        testing_1.it('should set playbackRate to target media', function () {
            api.medias = {
                main: {
                    state: 'play'
                }
            };
            playbackButton.target = api;
            playbackButton.onClick();
            testing_1.expect(playbackButton.target.playbackRate).toEqual('1.5');
        });
        testing_1.it('should set playbackRate to target media', function () {
            var media = {
                playbackRate: {
                    test: '1'
                }
            };
            playbackButton.target = media;
            playbackButton.vgFor = 'test';
            playbackButton.onClick();
            testing_1.expect(playbackButton.target.playbackRate.test).toEqual('1.5');
        });
    });
});
//# sourceMappingURL=vg-playback-button.spec.js.map