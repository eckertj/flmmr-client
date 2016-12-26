"use strict";
var testing_1 = require('angular2/testing');
var vg_scrub_bar_buffering_time_1 = require("./vg-scrub-bar-buffering-time");
var vg_api_1 = require("../../../services/vg-api");
testing_1.describe('Scrub bar buffering time', function () {
    var scrubBarBufferingTime;
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
        scrubBarBufferingTime = new vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime(ref, api);
    });
    testing_1.it('Should get media by id on init', function () {
        spyOn(scrubBarBufferingTime.elem, 'getAttribute').and.callThrough();
        spyOn(api, 'getMediaById');
        scrubBarBufferingTime.ngOnInit();
        testing_1.expect(scrubBarBufferingTime.elem.getAttribute).toHaveBeenCalledWith('vg-for');
        testing_1.expect(api.getMediaById).toHaveBeenCalledWith('vg-for');
    });
    testing_1.describe('getPercentage', function () {
        testing_1.it('should return 50% when buffer end is 10 and total time is 20', function () {
            scrubBarBufferingTime.target = {
                time: {
                    total: 20
                },
                buffer: {
                    end: 10
                },
                buffered: [1]
            };
            var percent = scrubBarBufferingTime.getBufferTime();
            testing_1.expect(percent).toEqual('50%');
        });
        testing_1.it('should return 25% when buffer end is 5 and total time is 20', function () {
            scrubBarBufferingTime.target = {
                time: {
                    total: 20
                },
                buffer: {
                    end: 5
                },
                buffered: [1]
            };
            var percent = scrubBarBufferingTime.getBufferTime();
            testing_1.expect(percent).toEqual('25%');
        });
        testing_1.it('should return 0% when no buffer is loaded', function () {
            scrubBarBufferingTime.target = {
                buffer: null
            };
            var percent = scrubBarBufferingTime.getBufferTime();
            testing_1.expect(percent).toEqual('0%');
        });
    });
});
//# sourceMappingURL=vg-scrub-bar-buffering-time.spec.js.map