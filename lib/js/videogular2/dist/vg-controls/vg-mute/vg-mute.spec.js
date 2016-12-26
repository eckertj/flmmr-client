"use strict";
var testing_1 = require('angular2/testing');
var vg_mute_1 = require("./vg-mute");
var vg_api_1 = require("../../services/vg-api");
testing_1.describe('Mute Button', function () {
    var mute;
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
                volume: 1
            },
            secondary: {
                volume: 0.5
            }
        };
        mute = new vg_mute_1.VgMute(ref, api);
    });
    testing_1.it('Should get media by id on init', function () {
        spyOn(mute.elem, 'getAttribute').and.callThrough();
        spyOn(api, 'getMediaById').and.callFake(function () {
            return {
                volume: 1
            };
        });
        mute.ngOnInit();
        testing_1.expect(mute.elem.getAttribute).toHaveBeenCalledWith('vg-for');
        testing_1.expect(api.getMediaById).toHaveBeenCalledWith('vg-for');
        testing_1.expect(mute.currentVolume).toBe(1);
    });
    testing_1.it('Should get average volume between all media files', function () {
        mute.target = api;
        var volume = mute.getVolume();
        testing_1.expect(volume).toBe(0.75);
    });
    testing_1.it('Should get volume for one media file', function () {
        api.medias = {
            main: {
                volume: 1
            }
        };
        mute.target = api;
        var volume = mute.getVolume();
        testing_1.expect(volume).toBe(1);
    });
    testing_1.describe('onClick (single media)', function () {
        testing_1.it('should mute volume if current volume is different than 0', function () {
            api.medias = {
                main: {
                    volume: 0.75
                }
            };
            mute.target = api;
            mute.onClick();
            testing_1.expect(mute.currentVolume).toBe(0.75);
            testing_1.expect(api.volume).toEqual(0);
        });
        testing_1.it('should unmute volume if current volume is 0', function () {
            api.medias = {
                main: {
                    volume: 0
                }
            };
            mute.target = api;
            mute.currentVolume = 0.75;
            mute.onClick();
            testing_1.expect(api.volume).toEqual(0.75);
        });
    });
    testing_1.describe('onClick (multiple medias)', function () {
        testing_1.it('should mute volume if current volume is different than 0', function () {
            mute.target = api;
            mute.onClick();
            testing_1.expect(mute.currentVolume).toBe(0.75);
            testing_1.expect(api.volume).toEqual({ main: 0, secondary: 0 });
        });
        testing_1.it('should unmute volume if current volume is 0', function () {
            api.medias = {
                main: {
                    volume: 0
                },
                secondary: {
                    volume: 0
                }
            };
            mute.target = api;
            mute.currentVolume = 0.75;
            mute.onClick();
            testing_1.expect(api.volume).toEqual({ main: 0.75, secondary: 0.75 });
        });
    });
});
//# sourceMappingURL=vg-mute.spec.js.map