"use strict";
var testing_1 = require('angular2/testing');
var vg_cue_points_1 = require("./vg-cue-points");
testing_1.describe('Cue points', function () {
    var cuePoints;
    var ref;
    testing_1.beforeEach(function () {
        ref = {
            nativeElement: {
                subscriptions: {
                    timeUpdate: {
                        subscribe: function () { }
                    }
                }
            }
        };
        cuePoints = new vg_cue_points_1.VgCuePoints(ref);
    });
});
//# sourceMappingURL=vg-cue-points.spec.js.map