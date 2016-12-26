"use strict";
var testing_1 = require('angular2/testing');
var vg_scrub_bar_1 = require("./vg-scrub-bar");
var vg_api_1 = require("../../services/vg-api");
testing_1.describe('Scrub bar', function () {
    var scrubBar;
    var ref;
    var api;
    testing_1.beforeEach(function () {
        ref = {
            nativeElement: {
                getAttribute: function (name) {
                    return name;
                },
                scrollWidth: 200
            }
        };
        api = new vg_api_1.VgAPI();
        scrubBar = new vg_scrub_bar_1.VgScrubBar(ref, api);
    });
    testing_1.it('Should get media by id on init', function () {
        spyOn(scrubBar.elem, 'getAttribute').and.callThrough();
        spyOn(api, 'getMediaById');
        scrubBar.ngOnInit();
        testing_1.expect(scrubBar.elem.getAttribute).toHaveBeenCalledWith('vg-for');
        testing_1.expect(api.getMediaById).toHaveBeenCalledWith('vg-for');
    });
    testing_1.describe('onMouseDownScrubBar', function () {
        testing_1.it('should call API seekTime 10 when offsetX is 20 and scrollWidth is 200', function () {
            spyOn(api, 'seekTime');
            scrubBar.target = api;
            scrubBar.onMouseDownScrubBar({ offsetX: 20 });
            testing_1.expect(api.seekTime).toHaveBeenCalledWith(10, true);
        });
        testing_1.it('should call API seekTime 20 when offsetX is 60 and scrollWidth is 300', function () {
            spyOn(api, 'seekTime');
            scrubBar.elem.scrollWidth = 300;
            scrubBar.target = api;
            scrubBar.onMouseDownScrubBar({ offsetX: 60 });
            testing_1.expect(api.seekTime).toHaveBeenCalledWith(20, true);
        });
    });
});
//# sourceMappingURL=vg-scrub-bar.spec.js.map