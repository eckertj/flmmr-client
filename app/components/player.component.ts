import {Component, Input} from 'angular2/core';
import {NgFor, NgIf, NgModel} from 'angular2/common';
import {VgPlayer, VgAPI, VgFullscreenAPI} from 'videogular2/core';
import {VgControls, VgPlayPause, VgPlaybackButton, VgScrubBar, VgScrubBarCurrentTime, VgScrubBarBufferingTime, VgMute, VgFullscreen} from 'videogular2/controls';
import {VgOverlayPlay} from 'videogular2/overlay-play';

@Component({
    selector: 'single-media-player',
    templateUrl: 'app/components/player.component.html',
    directives: [
        VgPlayer,
        VgOverlayPlay,
        VgControls,
        VgPlayPause,
        VgPlaybackButton,
        VgScrubBar,
        VgScrubBarCurrentTime,
        VgScrubBarBufferingTime,
        VgMute,
        VgFullscreen,
        NgFor,
        NgIf,
        NgModel
    ]
})
export class SingleMediaPlayer {
    sources:Array<Object>;
    controls:boolean = false;
    autoplay:boolean = false;
    loop:boolean = false;
    preload:string = 'auto';
    api:VgAPI;
    fsAPI:VgFullscreenAPI;

    @Input() mediaURL: string; 

    constructor() {
        this.fsAPI = VgFullscreenAPI;
        this.sources = [
            {
                src: "",
                type: "video/mp4"
            }
        ];
    }

    onPlayerReady(api: VgAPI) {
        this.api = api;
    }

    clickOnPlayer(event) {
        if (this.api.state == "play") {
            this.api.pause();
        } else {
            this.api.play();
        }
        event.stopPropagation();
    }

    changeMedia(media_url) {
        this.sources = [
            {
                src: media_url,
                type: "video/mp4"
            }
        ];
    }
}