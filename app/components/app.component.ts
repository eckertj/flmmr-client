import {Component, Input, EventEmitter, ViewChild} from 'angular2/core';
import {MediaComponent} from './media.component'
import {SingleMediaPlayer} from './player.component'

@Component({
  selector: 'flmmr',
  templateUrl: 'app/components/app.component.html',
  styleUrls: ['app/styles/style.css'],
  directives: [MediaComponent, SingleMediaPlayer]
})
export class AppComponent {

  mediaURL = "http://nrodl.zdf.de/none/tivi/15/03/150310_folge9_jungswgurlaub_jum_2256k_p14v11.mp4";
  showVideo = false;

  @ViewChild(SingleMediaPlayer) singleMediaPlayer: SingleMediaPlayer
 
  constructor() {
    this.showVideo = false;
  }

  mediaURLChanged(media_url) {
    this.mediaURL = media_url;
    this.singleMediaPlayer.changeMedia(media_url);
    this.showVideoOverlay();

    $("body").addClass("disableScroll");

  }

  showVideoOverlay() {
    this.showVideo = true;
  }

  hideVideoOverlay() {
    document.getElementsByTagName("body")[0].className = ""
    this.showVideo = false;
  }

  closeVideo() {
    this.singleMediaPlayer.api.pause();
    this.hideVideoOverlay();

    $("body").removeClass("disableScroll");

  }

}
