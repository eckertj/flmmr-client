"use strict";
var testing_1 = require("angular2/testing");
var vg_api_1 = require("../services/vg-api");
testing_1.describe('Videogular Player', function () {
    var api;
    testing_1.beforeEach(function () {
        api = new vg_api_1.VgAPI();
    });
    testing_1.it('Should get the default media', function () {
        api.medias = {
            main: { id: 'main' },
            secondary: { id: 'secondary' }
        };
        testing_1.expect(api.getDefaultMedia()).toEqual({ id: 'main' });
    });
    testing_1.it('Should get the api if we do not pass an id', function () {
        api.medias = {
            main: { id: 'main' },
            secondary: { id: 'secondary' }
        };
        testing_1.expect(api.getMediaById()).toEqual(api);
    });
    testing_1.it('Should get the api if we pass an *', function () {
        api.medias = {
            main: { id: 'main' },
            secondary: { id: 'secondary' }
        };
        testing_1.expect(api.getMediaById('*')).toEqual(api);
    });
    testing_1.it('Should get a media object if we pass an id', function () {
        api.medias = {
            main: { id: 'main' },
            secondary: { id: 'secondary' }
        };
        testing_1.expect(api.getMediaById('main')).toEqual({ id: 'main' });
    });
    testing_1.it('Should play all medias', function () {
        api.medias = {
            main: { id: 'main', play: function () { } },
            secondary: { id: 'secondary', play: function () { } }
        };
        spyOn(api.medias.main, 'play').and.callThrough();
        spyOn(api.medias.secondary, 'play').and.callThrough();
        api.play();
        testing_1.expect(api.medias.main.play).toHaveBeenCalled();
        testing_1.expect(api.medias.secondary.play).toHaveBeenCalled();
    });
    testing_1.it('Should pause all medias', function () {
        api.medias = {
            main: { id: 'main', pause: function () { } },
            secondary: { id: 'secondary', pause: function () { } }
        };
        spyOn(api.medias.main, 'pause').and.callThrough();
        spyOn(api.medias.secondary, 'pause').and.callThrough();
        api.pause();
        testing_1.expect(api.medias.main.pause).toHaveBeenCalled();
        testing_1.expect(api.medias.secondary.pause).toHaveBeenCalled();
    });
    testing_1.it('Should get duration', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var duration = api.duration;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('duration');
    });
    testing_1.it('Should set a state', function () {
        spyOn(api, '$$setAllProperties').and.callFake(function () { });
        api.state = 'pause';
        testing_1.expect(api.$$setAllProperties).toHaveBeenCalledWith('state', 'pause');
    });
    testing_1.it('Should get state', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var state = api.state;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('state');
    });
    testing_1.it('Should set a currentTime', function () {
        spyOn(api, '$$setAllProperties').and.callFake(function () { });
        api.currentTime = 50;
        testing_1.expect(api.$$setAllProperties).toHaveBeenCalledWith('currentTime', 50);
    });
    testing_1.it('Should get currentTime', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var currentTime = api.currentTime;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('currentTime');
    });
    testing_1.it('Should set a volume', function () {
        spyOn(api, '$$setAllProperties').and.callFake(function () { });
        api.volume = 0.5;
        testing_1.expect(api.$$setAllProperties).toHaveBeenCalledWith('volume', 0.5);
    });
    testing_1.it('Should get volume', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var volume = api.volume;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('volume');
    });
    testing_1.it('Should set a playback rate', function () {
        spyOn(api, '$$setAllProperties').and.callFake(function () { });
        api.playbackRate = 0.5;
        testing_1.expect(api.$$setAllProperties).toHaveBeenCalledWith('playbackRate', 0.5);
    });
    testing_1.it('Should get playbackRate', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var playbackRate = api.playbackRate;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('playbackRate');
    });
    testing_1.it('Should get canPlay', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var canPlay = api.canPlay;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('canPlay');
    });
    testing_1.it('Should get canPlayThrough', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var canPlayThrough = api.canPlayThrough;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('canPlayThrough');
    });
    testing_1.it('Should get isMetadataLoaded', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var isMetadataLoaded = api.isMetadataLoaded;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('isMetadataLoaded');
    });
    testing_1.it('Should get isWaiting', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var isWaiting = api.isWaiting;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('isWaiting');
    });
    testing_1.it('Should get isCompleted', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var isCompleted = api.isCompleted;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('isCompleted');
    });
    testing_1.it('Should get time', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var time = api.time;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('time');
    });
    testing_1.it('Should get buffer', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var time = api.buffer;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('buffer');
    });
    testing_1.it('Should get buffered', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var buffered = api.buffered;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('buffered');
    });
    testing_1.it('Should get subscriptions', function () {
        spyOn(api, '$$getAllProperties').and.callFake(function () { });
        var subscriptions = api.subscriptions;
        testing_1.expect(api.$$getAllProperties).toHaveBeenCalledWith('subscriptions');
    });
    testing_1.it('Should seek to a specified time by second', function () {
        api.medias = {
            main: { id: 'main' },
            secondary: { id: 'secondary' }
        };
        spyOn(api, '$$seek').and.callFake(function () { });
        api.seekTime(10);
        testing_1.expect(api.$$seek).toHaveBeenCalledWith({ id: 'main' }, 10, false);
        testing_1.expect(api.$$seek).toHaveBeenCalledWith({ id: 'secondary' }, 10, false);
    });
    testing_1.it('Should seek to a specified time by percentage', function () {
        api.medias = {
            main: { id: 'main' },
            secondary: { id: 'secondary' }
        };
        spyOn(api, '$$seek').and.callFake(function () { });
        api.seekTime(10, true);
        testing_1.expect(api.$$seek).toHaveBeenCalledWith({ id: 'main' }, 10, true);
        testing_1.expect(api.$$seek).toHaveBeenCalledWith({ id: 'secondary' }, 10, true);
    });
    testing_1.it('Should seek media files to a specified time by second', function () {
        var media = {
            currentTime: 0
        };
        api.$$seek(media, 10);
        testing_1.expect(media.currentTime).toBe(10);
    });
    testing_1.it('Should seek media files to a specified time by percentage', function () {
        var media = {
            duration: 200,
            currentTime: 0,
            subscriptions: {}
        };
        api.$$seek(media, 10, true);
        testing_1.expect(media.currentTime).toBe(20);
    });
    testing_1.it('Should get a property from all media objects and return an object', function () {
        api.medias = {
            main: { id: 'main', state: 'play' },
            secondary: { id: 'secondary', state: 'pause' }
        };
        var states = api.$$getAllProperties('state');
        testing_1.expect(states).toEqual({
            main: 'play',
            secondary: 'pause'
        });
    });
    testing_1.it('Should get a property from all media objects and return a plain value if there is only one media object', function () {
        api.medias = {
            main: { id: 'main', state: 'play' }
        };
        var states = api.$$getAllProperties('state');
        testing_1.expect(states).toEqual('play');
    });
    testing_1.it('Should set a property to all media objects', function () {
        api.medias = {
            main: { id: 'main', state: 'stop' },
            secondary: { id: 'secondary', state: 'stop' }
        };
        api.$$setAllProperties('state', 'play');
        testing_1.expect(api.medias.main.state).toBe('play');
        testing_1.expect(api.medias.secondary.state).toBe('play');
    });
    testing_1.it('Should register a new media object', function () {
        var media = { id: 'main' };
        spyOn(api, 'connect').and.callFake(function () { });
        api.registerMedia(media);
        testing_1.expect(media.time.current).toBe(0);
        testing_1.expect(media.time.total).toBe(0);
        testing_1.expect(media.time.left).toBe(0);
        testing_1.expect(media.buffer.end).toBe(0);
        testing_1.expect(media.canPlay).toBeFalsy();
        testing_1.expect(media.canPlayThrough).toBeFalsy();
        testing_1.expect(media.isMetadataLoaded).toBeFalsy();
        testing_1.expect(media.isWaiting).toBeFalsy();
        testing_1.expect(media.isCompleted).toBeFalsy();
        testing_1.expect(media.state).toBe('pause');
        testing_1.expect(api.medias.main).toBe(media);
        testing_1.expect(api.connect).toHaveBeenCalledWith(media);
        spyOn(api, '$$seek').and.callFake(function () { });
        media.seekTime(10);
        media.seekTime(20, true);
        testing_1.expect(api.$$seek).toHaveBeenCalledWith(media, 10, false);
        testing_1.expect(api.$$seek).toHaveBeenCalledWith(media, 20, true);
    });
    testing_1.it('Should subscribe to media listeners through Observables', function () {
        var media = document.createElement('video');
        media.id = 'main';
        media.subscriptions = {};
        api.connect(media);
        testing_1.expect(media.subscriptions.canPlay).toBeDefined();
        testing_1.expect(media.subscriptions.canPlayThrough).toBeDefined();
        testing_1.expect(media.subscriptions.loadedMetadata).toBeDefined();
        testing_1.expect(media.subscriptions.waiting).toBeDefined();
        testing_1.expect(media.subscriptions.progress).toBeDefined();
        testing_1.expect(media.subscriptions.ended).toBeDefined();
        testing_1.expect(media.subscriptions.playing).toBeDefined();
        testing_1.expect(media.subscriptions.play).toBeDefined();
        testing_1.expect(media.subscriptions.pause).toBeDefined();
        testing_1.expect(media.subscriptions.timeUpdate).toBeDefined();
        testing_1.expect(media.subscriptions.volumeChange).toBeDefined();
        testing_1.expect(media.subscriptions.error).toBeDefined();
    });
    testing_1.it('Should handle onCanPlay event', function () {
        var event = {
            target: {
                id: 'main'
            }
        };
        api.medias = {
            main: { id: 'main', canPlay: false },
            secondary: { id: 'secondary', canPlay: false }
        };
        api.onCanPlay(event);
        testing_1.expect(api.medias.main.canPlay).toBeTruthy();
    });
    testing_1.it('Should handle onCanPlayThrough event', function () {
        var event = {
            target: {
                id: 'main'
            }
        };
        api.medias = {
            main: { id: 'main', canPlayThrough: false },
            secondary: { id: 'secondary', canPlayThrough: false }
        };
        api.onCanPlayThrough(event);
        testing_1.expect(api.medias.main.canPlayThrough).toBeTruthy();
    });
    testing_1.it('Should handle onLoadMetadata event', function () {
        var event = {
            target: {
                id: 'main'
            }
        };
        api.medias = {
            main: { id: 'main', isMetadataLoaded: false, duration: 97.317, time: { total: 0 } },
            secondary: { id: 'secondary', isMetadataLoaded: false, duration: 297.317, time: { total: 0 } }
        };
        api.onLoadMetadata(event);
        testing_1.expect(api.medias.main.isMetadataLoaded).toBeTruthy();
        testing_1.expect(api.medias.main.time.total).toBe(97317);
    });
    testing_1.it('Should handle onWait event', function () {
        var event = {
            target: {
                id: 'main'
            }
        };
        api.medias = {
            main: { id: 'main', isWaiting: false },
            secondary: { id: 'secondary', isWaiting: false }
        };
        api.onWait(event);
        testing_1.expect(api.medias.main.isWaiting).toBeTruthy();
    });
    testing_1.it('Should handle onComplete event', function () {
        var event = {
            target: {
                id: 'main'
            }
        };
        api.medias = {
            main: { id: 'main', isCompleted: false, state: 'play' },
            secondary: { id: 'secondary', isCompleted: false, state: 'play' }
        };
        api.onComplete(event);
        testing_1.expect(api.medias.main.isCompleted).toBeTruthy();
        testing_1.expect(api.medias.main.state).toBe('pause');
    });
    testing_1.it('Should handle onStartPlaying event', function () {
        var event = {
            target: {
                id: 'main'
            }
        };
        api.medias = {
            main: { id: 'main', state: 'pause' },
            secondary: { id: 'secondary', state: 'pause' }
        };
        api.onStartPlaying(event);
        testing_1.expect(api.medias.main.state).toBe('play');
    });
    testing_1.it('Should handle onPlay event', function () {
        var event = {
            target: {
                id: 'main'
            }
        };
        api.medias = {
            main: { id: 'main', state: 'pause' },
            secondary: { id: 'secondary', state: 'pause' }
        };
        api.onPlay(event);
        testing_1.expect(api.medias.main.state).toBe('play');
    });
    testing_1.it('Should handle onPause event', function () {
        var event = {
            target: {
                id: 'main'
            }
        };
        api.medias = {
            main: { id: 'main', state: 'play' },
            secondary: { id: 'secondary', state: 'play' }
        };
        api.onPause(event);
        testing_1.expect(api.medias.main.state).toBe('pause');
    });
    testing_1.it('Should handle onTimeUpdate event', function () {
        var event = {
            target: {
                id: 'main'
            }
        };
        api.medias = {
            main: {
                id: 'main',
                currentTime: 12.345,
                duration: 97.317,
                buffered: {
                    length: 2,
                    end: function () {
                        return 40;
                    }
                },
                time: {
                    current: 0,
                    left: 0
                },
                buffer: {
                    end: 0
                }
            }
        };
        spyOn(api.medias.main.buffered, 'end').and.callThrough();
        api.onTimeUpdate(event);
        testing_1.expect(api.medias.main.buffered.end).toHaveBeenCalledWith(1);
        testing_1.expect(api.medias.main.time.current).toBe(12345);
        testing_1.expect(api.medias.main.time.left).toBe(84972);
        testing_1.expect(api.medias.main.buffer.end).toBe(40000);
    });
    testing_1.it('Should handle onTimeUpdate event before metadata is loaded', function () {
        var event = {
            target: {
                id: 'main'
            }
        };
        api.medias = {
            main: {
                id: 'main',
                currentTime: 12.345,
                duration: 97.317,
                buffered: {
                    length: 0,
                    end: function () {
                        return 40;
                    }
                },
                time: {
                    current: 0,
                    left: 0
                },
                buffer: {
                    end: 0
                }
            }
        };
        spyOn(api.medias.main.buffered, 'end').and.callThrough();
        api.onTimeUpdate(event);
        testing_1.expect(api.medias.main.buffered.end).not.toHaveBeenCalled();
    });
    testing_1.it('Should handle onProgress event', function () {
        var event = {
            target: {
                id: 'main'
            }
        };
        api.medias = {
            main: {
                id: 'main',
                buffered: {
                    length: 2,
                    end: function () {
                        return 40;
                    }
                },
                buffer: {
                    end: 0
                }
            }
        };
        spyOn(api.medias.main.buffered, 'end').and.callThrough();
        api.onProgress(event);
        testing_1.expect(api.medias.main.buffered.end).toHaveBeenCalledWith(1);
        testing_1.expect(api.medias.main.buffer.end).toBe(40000);
    });
    testing_1.it('Should handle onProgress event before metadata is loaded', function () {
        var event = {
            target: {
                id: 'main'
            }
        };
        api.medias = {
            main: {
                id: 'main',
                buffered: {
                    length: 0,
                    end: function () {
                        return 40;
                    }
                },
                buffer: {
                    end: 0
                }
            }
        };
        spyOn(api.medias.main.buffered, 'end').and.callThrough();
        api.onProgress(event);
        testing_1.expect(api.medias.main.buffered.end).not.toHaveBeenCalled();
    });
    testing_1.it('Should handle onVolumeChange event', function () {
        api.onVolumeChange('main');
    });
    testing_1.it('Should handle onError event', function () {
        api.onError('main');
    });
});
//# sourceMappingURL=vg-api.spec.js.map