import {Component, Input, EventEmitter, ViewChild} from 'angular2/core';
import {MediaComponent} from './media.component'
import {SingleMediaPlayer} from './player.component'

@Component({
  selector: 'flmmr',
  templateUrl: 'app/components/app.component.html',
  directives: [MediaComponent, SingleMediaPlayer]
})
export class AppComponent {

  mediaURL = "http://nrodl.zdf.de/none/tivi/15/03/150310_folge9_jungswgurlaub_jum_2256k_p14v11.mp4";

  @ViewChild(SingleMediaPlayer) singleMediaPlayer: SingleMediaPlayer
  constructor() { }

  mediaURLChanged(media_url) {
    this.mediaURL = media_url;
    this.singleMediaPlayer.changeMedia(media_url);
  }

}
