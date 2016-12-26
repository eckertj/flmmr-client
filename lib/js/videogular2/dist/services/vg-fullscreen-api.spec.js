"use strict";
var testing_1 = require('angular2/testing');
var vg_fullscreen_api_1 = require("../services/vg-fullscreen-api");
testing_1.describe('Videogular Player', function () {
    testing_1.beforeEach(function () {
        vg_fullscreen_api_1.VgFullscreenAPI.init(document.body, [{}]);
    });
    testing_1.it('Should create polyfills on init', function () {
        testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.polyfill.enabled).toBe('webkitFullscreenEnabled');
        testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.polyfill.element).toBe('webkitFullscreenElement');
        testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.polyfill.request).toBe('webkitRequestFullscreen');
        testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.polyfill.exit).toBe('webkitExitFullscreen');
        testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.polyfill.onchange).toBe('webkitfullscreenchange');
        testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.polyfill.onerror).toBe('webkitfullscreenerror');
    });
    testing_1.it('Should request an element to enter in fullscreen mode', function () {
        var elem = {
            webkitRequestFullscreen: function () { }
        };
        spyOn(document.body, 'webkitRequestFullscreen').and.callThrough();
        vg_fullscreen_api_1.VgFullscreenAPI.request(elem);
        testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.isFullscreen).toBeTruthy();
        testing_1.expect(document.body.webkitRequestFullscreen).toHaveBeenCalled();
    });
    testing_1.it('Should request an element to exit from fullscreen mode', function () {
        vg_fullscreen_api_1.VgFullscreenAPI.polyfill.exit = 'mockedExitFunction';
        document.mockedExitFunction = function () { };
        spyOn(document, 'mockedExitFunction').and.callThrough();
        vg_fullscreen_api_1.VgFullscreenAPI.exit();
        testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.isFullscreen).toBeFalsy();
        testing_1.expect(document.mockedExitFunction).toHaveBeenCalled();
    });
    testing_1.it('Should enter videogular element to fullscreen mode', function () {
        vg_fullscreen_api_1.VgFullscreenAPI.videogularElement = { id: 'vgElem' };
        spyOn(vg_fullscreen_api_1.VgFullscreenAPI, 'request').and.callFake(function () { });
        vg_fullscreen_api_1.VgFullscreenAPI.toggleFullscreen();
        testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.request).toHaveBeenCalledWith(null);
    });
    testing_1.it('Should enter other element to fullscreen mode', function () {
        var element = { id: 'main' };
        vg_fullscreen_api_1.VgFullscreenAPI.videogularElement = { id: 'vgElem' };
        spyOn(vg_fullscreen_api_1.VgFullscreenAPI, 'request').and.callFake(function () { });
        vg_fullscreen_api_1.VgFullscreenAPI.toggleFullscreen(element);
        testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.request).toHaveBeenCalledWith(element);
    });
    testing_1.it('Should exit from fullscreen mode', function () {
        vg_fullscreen_api_1.VgFullscreenAPI.isFullscreen = true;
        spyOn(vg_fullscreen_api_1.VgFullscreenAPI, 'exit').and.callFake(function () { });
        vg_fullscreen_api_1.VgFullscreenAPI.toggleFullscreen();
        testing_1.expect(vg_fullscreen_api_1.VgFullscreenAPI.exit).toHaveBeenCalled();
    });
});
//# sourceMappingURL=vg-fullscreen-api.spec.js.map