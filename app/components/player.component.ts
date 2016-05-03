import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {VgPlayer} from 'videogular2/core';
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
        NgFor
    ]
})
export class SingleMediaPlayer {
    sources:Array<Object>;
    source;
    @Input() mediaURL: string;

    constructor() {

    }

    updateSource() {
        console.log("some function triggered: ", this.currentMediaUrl);
    }
}