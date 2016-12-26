"use strict";
var testing_1 = require('angular2/testing');
var vg_scrub_bar_current_time_1 = require("./vg-scrub-bar-current-time");
var vg_api_1 = require("../../../services/vg-api");
testing_1.describe('Scrub bar current time', function () {
    var scrubBarCurrentTime;
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
        scrubBarCurrentTime = new vg_scrub_bar_current_time_1.VgScrubBarCurrentTime(ref, api);
    });
    testing_1.it('Should get media by id on init', function () {
        spyOn(scrubBarCurrentTime.elem, 'getAttribute').and.callThrough();
        spyOn(api, 'getMediaById');
        scrubBarCurrentTime.ngOnInit();
        testing_1.expect(scrubBarCurrentTime.elem.getAttribute).toHaveBeenCalledWith('vg-for');
        testing_1.expect(api.getMediaById).toHaveBeenCalledWith('vg-for');
    });
    testing_1.describe('getPercentage', function () {
        testing_1.it('should return 50% when current time is 10 and total time is 20', function () {
            scrubBarCurrentTime.target = {
                time: {
                    current: 10,
                    total: 20
                }
            };
            var percent = scrubBarCurrentTime.getPercentage();
            testing_1.expect(percent).toEqual('50%');
        });
        testing_1.it('should return 25% when current time is 5 and total time is 20', function () {
            scrubBarCurrentTime.target = {
                time: {
                    current: 5,
                    total: 20
                }
            };
            var percent = scrubBarCurrentTime.getPercentage();
            testing_1.expect(percent).toEqual('25%');
        });
    });
});
//# sourceMappingURL=vg-scrub-bar-current-time.spec.js.map