import {Component, Input, EventEmitter} from 'angular2/core';
import {MediaComponent} from './media.component'
import {SingleMediaPlayer} from './player.component'

@Component({
  selector: 'flmmr',
  templateUrl: 'app/components/app.component.html',
  directives: [MediaComponent, SingleMediaPlayer]
})
export class AppComponent {
  mediaURL = "http://media.ndr.de/progressive/2014/1201/TV-20141201-1656-0542.hq.mp4";

  constructor() { }

}