"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var vg_events_1 = require('../events/vg-events');
var Rx_1 = require('rxjs/Rx');
var VgAPI = (function () {
    function VgAPI() {
        this.medias = {};
    }
    VgAPI.prototype.getDefaultMedia = function () {
        for (var item in this.medias) {
            return this.medias[item];
        }
    };
    VgAPI.prototype.getMediaById = function (id) {
        if (id === void 0) { id = null; }
        var media = this.medias[id];
        if (!id || id === '*') {
            media = this;
        }
        return media;
    };
    VgAPI.prototype.play = function () {
        for (var id in this.medias) {
            this.medias[id].play();
        }
    };
    VgAPI.prototype.pause = function () {
        for (var id in this.medias) {
            this.medias[id].pause();
        }
    };
    Object.defineProperty(VgAPI.prototype, "duration", {
        get: function () {
            return this.$$getAllProperties('duration');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "currentTime", {
        get: function () {
            return this.$$getAllProperties('currentTime');
        },
        set: function (seconds) {
            this.$$setAllProperties('currentTime', seconds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "state", {
        get: function () {
            return this.$$getAllProperties('state');
        },
        set: function (state) {
            this.$$setAllProperties('state', state);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "volume", {
        get: function () {
            return this.$$getAllProperties('volume');
        },
        set: function (volume) {
            this.$$setAllProperties('volume', volume);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "playbackRate", {
        get: function () {
            return this.$$getAllProperties('playbackRate');
        },
        set: function (rate) {
            this.$$setAllProperties('playbackRate', rate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlay", {
        get: function () {
            return this.$$getAllProperties('canPlay');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlayThrough", {
        get: function () {
            return this.$$getAllProperties('canPlayThrough');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMetadataLoaded", {
        get: function () {
            return this.$$getAllProperties('isMetadataLoaded');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isWaiting", {
        get: function () {
            return this.$$getAllProperties('isWaiting');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isCompleted", {
        get: function () {
            return this.$$getAllProperties('isCompleted');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "time", {
        get: function () {
            return this.$$getAllProperties('time');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffer", {
        get: function () {
            return this.$$getAllProperties('buffer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffered", {
        get: function () {
            return this.$$getAllProperties('buffered');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "subscriptions", {
        get: function () {
            return this.$$getAllProperties('subscriptions');
        },
        enumerable: true,
        configurable: true
    });
    VgAPI.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        for (var id in this.medias) {
            this.$$seek(this.medias[id], value, byPercent);
        }
    };
    VgAPI.prototype.$$seek = function (media, value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        if (byPercent) {
            second = value * media.duration / 100;
        }
        else {
            second = value;
        }
        media.currentTime = second;
    };
    VgAPI.prototype.$$getAllProperties = function (property) {
        var result = {};
        for (var id in this.medias) {
            result[id] = this.medias[id][property];
        }
        if (Object.keys(result).length === 1)
            result = result[Object.keys(result)[0]];
        return result;
    };
    VgAPI.prototype.$$setAllProperties = function (property, value) {
        for (var id in this.medias) {
            this.medias[id][property] = value;
        }
    };
    VgAPI.prototype.registerElement = function (elem) {
        this.videogularElement = elem;
    };
    VgAPI.prototype.registerMedia = function (media) {
        var _this = this;
        media.time = {
            current: 0,
            total: 0,
            left: 0
        };
        media.buffer = {
            end: 0
        };
        media.canPlay = false;
        media.canPlayThrough = false;
        media.isMetadataLoaded = false;
        media.isWaiting = false;
        media.isCompleted = false;
        media.state = 'pause';
        media.seekTime = function (value, byPercent) {
            if (byPercent === void 0) { byPercent = false; }
            _this.$$seek(media, value, byPercent);
        };
        media.subscriptions = {};
        this.medias[media.id] = media;
        this.connect(media);
    };
    VgAPI.prototype.connect = function (media) {
        media.subscriptions.canPlay = Rx_1.Observable.fromEvent(media, vg_events_1.VgEvents.VG_CAN_PLAY);
        media.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this));
        media.subscriptions.canPlayThrough = Rx_1.Observable.fromEvent(media, vg_events_1.VgEvents.VG_CAN_PLAY_THROUGH);
        media.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this));
        media.subscriptions.loadedMetadata = Rx_1.Observable.fromEvent(media, vg_events_1.VgEvents.VG_LOADED_METADATA);
        media.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this));
        media.subscriptions.waiting = Rx_1.Observable.fromEvent(media, vg_events_1.VgEvents.VG_WAITING);
        media.subscriptions.waiting.subscribe(this.onWait.bind(this));
        media.subscriptions.progress = Rx_1.Observable.fromEvent(media, vg_events_1.VgEvents.VG_PROGRESS);
        media.subscriptions.progress.subscribe(this.onProgress.bind(this));
        media.subscriptions.ended = Rx_1.Observable.fromEvent(media, vg_events_1.VgEvents.VG_ENDED);
        media.subscriptions.ended.subscribe(this.onComplete.bind(this));
        media.subscriptions.playing = Rx_1.Observable.fromEvent(media, vg_events_1.VgEvents.VG_PLAYING);
        media.subscriptions.playing.subscribe(this.onStartPlaying.bind(this));
        media.subscriptions.play = Rx_1.Observable.fromEvent(media, vg_events_1.VgEvents.VG_PLAY);
        media.subscriptions.play.subscribe(this.onPlay.bind(this));
        media.subscriptions.pause = Rx_1.Observable.fromEvent(media, vg_events_1.VgEvents.VG_PAUSE);
        media.subscriptions.pause.subscribe(this.onPause.bind(this));
        media.subscriptions.timeUpdate = Rx_1.Observable.fromEvent(media, vg_events_1.VgEvents.VG_TIME_UPDATE);
        media.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this));
        media.subscriptions.volumeChange = Rx_1.Observable.fromEvent(media, vg_events_1.VgEvents.VG_VOLUME_CHANGE);
        media.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this));
        media.subscriptions.error = Rx_1.Observable.fromEvent(media, vg_events_1.VgEvents.VG_ERROR);
        media.subscriptions.error.subscribe(this.onError.bind(this));
        media.subscriptions.mutation = Rx_1.Observable.create(function (observer) {
            var domObs = new MutationObserver(function (mutations) {
                observer.next(mutations);
            });
            domObs.observe(media, { childList: true });
            return function () {
                domObs.disconnect();
            };
        });
        media.subscriptions.mutation.subscribe(this.onMutation.bind(this, media));
    };
    VgAPI.prototype.onMutation = function (media, mutations) {
        var _this = this;
        this.medias[media.id].pause();
        this.medias[media.id].currentTime = 0;
        setTimeout(function () { return _this.medias[media.id].load(); }, 1);
    };
    VgAPI.prototype.onCanPlay = function (event) {
        this.medias[event.target.id].canPlay = true;
    };
    VgAPI.prototype.onCanPlayThrough = function (event) {
        this.medias[event.target.id].canPlayThrough = true;
    };
    VgAPI.prototype.onLoadMetadata = function (event) {
        this.medias[event.target.id].isMetadataLoaded = true;
        this.medias[event.target.id].time.total = this.medias[event.target.id].duration * 1000;
    };
    VgAPI.prototype.onWait = function (event) {
        this.medias[event.target.id].isWaiting = true;
    };
    VgAPI.prototype.onComplete = function (event) {
        this.medias[event.target.id].isCompleted = true;
        this.medias[event.target.id].state = 'pause';
    };
    VgAPI.prototype.onStartPlaying = function (event) {
        this.medias[event.target.id].state = 'play';
    };
    VgAPI.prototype.onPlay = function (event) {
        this.medias[event.target.id].state = 'play';
    };
    VgAPI.prototype.onPause = function (event) {
        this.medias[event.target.id].state = 'pause';
    };
    VgAPI.prototype.onTimeUpdate = function (event) {
        var end = this.medias[event.target.id].buffered.length - 1;
        this.medias[event.target.id].time.current = this.medias[event.target.id].currentTime * 1000;
        this.medias[event.target.id].time.left = (this.medias[event.target.id].duration - this.medias[event.target.id].currentTime) * 1000;
        if (end >= 0) {
            this.medias[event.target.id].buffer.end = this.medias[event.target.id].buffered.end(end) * 1000;
        }
    };
    VgAPI.prototype.onProgress = function (event) {
        var end = this.medias[event.target.id].buffered.length - 1;
        if (end >= 0) {
            this.medias[event.target.id].buffer.end = this.medias[event.target.id].buffered.end(end) * 1000;
        }
    };
    VgAPI.prototype.onVolumeChange = function (event) {
    };
    VgAPI.prototype.onError = function (event) {
    };
    VgAPI = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], VgAPI);
    return VgAPI;
}());
exports.VgAPI = VgAPI;
//# sourceMappingURL=vg-api.js.map