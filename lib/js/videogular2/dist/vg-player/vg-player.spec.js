"use strict";
var testing_1 = require('angular2/testing');
var vg_player_1 = require("./vg-player");
var vg_api_1 = require("../services/vg-api");
testing_1.describe('Videogular Player', function () {
    var player;
    var ref;
    var api;
    testing_1.beforeEach(function () {
        ref = {
            nativeElement: {
                querySelectorAll: function () {
                    return [{}];
                }
            }
        };
        api = new vg_api_1.VgAPI();
        player = new vg_player_1.VgPlayer(ref, api);
    });
    testing_1.it('Should get all medias on init', function () {
        spyOn(player.elem, 'querySelectorAll').and.callThrough();
        spyOn(api, 'registerMedia').and.callFake(function () { });
        spyOn(player.onPlayerReady, 'next').and.callFake(function () { });
        player.ngOnInit();
        testing_1.expect(player.elem.querySelectorAll).toHaveBeenCalledWith('video');
        testing_1.expect(api.registerMedia).toHaveBeenCalledWith({});
        testing_1.expect(player.onPlayerReady.next).toHaveBeenCalledWith(player.api);
    });
});
//# sourceMappingURL=vg-player.spec.js.map