"use strict";
var testing_1 = require('angular2/testing');
var vg_scrub_bar_cue_points_1 = require("./vg-scrub-bar-cue-points");
var vg_api_1 = require("../../../services/vg-api");
testing_1.describe('Scrub bar current time', function () {
    var scrubBarCuePoints;
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
        scrubBarCuePoints = new vg_scrub_bar_cue_points_1.VgScrubBarCuePoints(ref, api);
    });
    testing_1.xit('Should create cue points when metadata is loaded', function () {
        var cps = {};
        var cp1 = { startTime: 1 };
        var cp2 = { startTime: 5, endTime: 10 };
        var cp3 = { startTime: 15, endTime: 20, text: "{value: 'custom params'}" };
        cps[0] = cp1;
        cps[1] = cp2;
        cps[2] = cp3;
        scrubBarCuePoints.cuePoints = cps;
        scrubBarCuePoints.target = {
            time: {
                total: 100000
            }
        };
        scrubBarCuePoints.ngOnChanges({ 'cuePoints': { currentValue: cps } });
        testing_1.expect(scrubBarCuePoints.cuePoints[0].$$style).toEqual({ width: '1%', left: '1%' });
        testing_1.expect(scrubBarCuePoints.cuePoints[1].$$style).toEqual({ width: '5%', left: '5%' });
        testing_1.expect(scrubBarCuePoints.cuePoints[2].$$style).toEqual({ width: '5%', left: '15%' });
    });
    testing_1.xit('Should not calculate style position if there is not duration on media', function () {
        var cps = {};
        var cp1 = { startTime: 1 };
        var cp2 = { startTime: 5, endTime: 10 };
        var cp3 = { startTime: 15, endTime: 20, text: "{value: 'custom params'}" };
        cps[0] = cp1;
        cps[1] = cp2;
        cps[2] = cp3;
        scrubBarCuePoints.cuePoints = cps;
        scrubBarCuePoints.target = {
            time: {
                total: 0
            }
        };
        scrubBarCuePoints.ngOnChanges({ 'cuePoints': { currentValue: cps } });
        testing_1.expect(scrubBarCuePoints.cuePoints[0].$$style).toEqual({ width: '0', left: '0' });
        testing_1.expect(scrubBarCuePoints.cuePoints[1].$$style).toEqual({ width: '0', left: '0' });
        testing_1.expect(scrubBarCuePoints.cuePoints[2].$$style).toEqual({ width: '0', left: '0' });
    });
    testing_1.it('Should do nothing if there are no cue points', function () {
        scrubBarCuePoints.ngOnChanges({ 'cuePoints': { currentValue: null } });
    });
});
//# sourceMappingURL=vg-scrub-bar-cue-points.spec.js.map