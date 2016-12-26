"use strict";
var testing_1 = require('angular2/testing');
var vg_fullscreen_1 = require("./vg-fullscreen");
var vg_api_1 = require("../../services/vg-api");
var vg_fullscreen_api_1 = require("../../services/vg-fullscreen-api");
testing_1.describe('Videogular Player', function () {
    var fullscreen;
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
        fullscreen = new vg_fullscreen_1.VgFullscreen(ref, api);
    });
    testing_1.it('Should get media by id on init', function () {
        spyOn(fullscreen.elem, 'getAttribute').and.callThrough();
        spyOn(api, 'getMediaById').and.callFake(function () { });
        fullscreen.ngOnInit();
        testing_1.expect(fullscreen.elem.getAttribute).toHaveBeenCalledWith('vg-for');
        testing_1.expect(api.getMediaById).toHaveBeenCalledWith('vg-for');
    });
    testing_1.describe('onClick', function () {
        testing_1.beforeEach(function () {
            spyOn(vg_fullscreen_api_1.VgFullscreenAPI, 'toggleFullscreen');
        });
        testing_1.it('Should call toggleFullscreen with null param if target is API', function () {
            fullscreen.target = api;
            fullscreen.onClick();
            testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.toggleFullscreen).toHaveBeenCalledWith(null);
        });
        testing_1.it('Should call toggleFullscreen with target param if target', function () {
            fullscreen.target = 'test';
            fullscreen.onClick();
            testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.toggleFullscreen).toHaveBeenCalledWith('test');
        });
    });
});
//# sourceMappingURL=vg-fullscreen.spec.js.map