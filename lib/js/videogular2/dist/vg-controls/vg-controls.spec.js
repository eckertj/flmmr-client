"use strict";
var testing_1 = require('angular2/testing');
var vg_controls_1 = require("./vg-controls");
var vg_api_1 = require("../services/vg-api");
var Observable_1 = require("rxjs/Observable");
testing_1.describe('Controls Bar', function () {
    var controls;
    var ref;
    var api;
    var renderer;
    testing_1.beforeEach(function () {
        jasmine.clock().uninstall();
        jasmine.clock().install();
        api = new vg_api_1.VgAPI();
        ref = {
            nativeElement: {
                getAttribute: function (name) {
                    return name;
                }
            }
        };
        renderer = {
            setElementClass: function () { }
        };
        controls = new vg_controls_1.VgControls(api, ref, renderer);
    });
    testing_1.afterEach(function () {
        jasmine.clock().uninstall();
    });
    testing_1.it('Should have been defined', function () {
        testing_1.expect(controls).toBeTruthy();
    });
    testing_1.it('Should listen for mouseenter and mouseleave events', function () {
        spyOn(Observable_1.Observable, 'fromEvent').and.callThrough();
        var vgElem = document.createElement('vg-player');
        api.registerElement(vgElem);
        controls.ngOnInit();
        testing_1.expect(Observable_1.Observable.fromEvent).toHaveBeenCalledWith(api.videogularElement, 'mouseenter');
        testing_1.expect(Observable_1.Observable.fromEvent).toHaveBeenCalledWith(api.videogularElement, 'mouseleave');
    });
    testing_1.it('Should hide controls after view init', function () {
        spyOn(controls, 'hide').and.callFake(function () { });
        controls.autohide = true;
        controls.ngAfterViewInit();
        testing_1.expect(controls.hide).toHaveBeenCalled();
    });
    testing_1.it('Should show controls after view init', function () {
        spyOn(controls, 'show').and.callFake(function () { });
        controls.autohide = false;
        controls.ngAfterViewInit();
        testing_1.expect(controls.show).toHaveBeenCalled();
    });
    testing_1.it('Should show controls', function () {
        spyOn(window, 'clearTimeout').and.callFake(function () { });
        spyOn(renderer, 'setElementClass').and.callThrough();
        controls.show();
        testing_1.expect(window.clearTimeout).toHaveBeenCalled();
        testing_1.expect(renderer.setElementClass).toHaveBeenCalledWith(ref.nativeElement, 'hide', false);
    });
    testing_1.it('Should hide controls', function () {
        spyOn(renderer, 'setElementClass').and.callThrough();
        controls.autohide = true;
        controls.hide();
        jasmine.clock().tick(3100);
        testing_1.expect(renderer.setElementClass).toHaveBeenCalledWith(ref.nativeElement, 'hide', true);
    });
    testing_1.it('Should not hide controls', function () {
        spyOn(renderer, 'setElementClass').and.callThrough();
        controls.autohide = false;
        controls.hide();
        jasmine.clock().tick(3100);
        testing_1.expect(renderer.setElementClass).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=vg-controls.spec.js.map