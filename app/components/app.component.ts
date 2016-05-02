import {Component} from 'angular2/core';
import {MediaComponent} from './media.component'
import {SingleMediaPlayer} from './player.component'

@Component({
  selector: 'flmmr',
  template: '<media></media><single-media-player></single-media-player>',
  // templateUrl: 'app/components/app.component.html',
  directives: [MediaComponent, SingleMediaPlayer]
})
export class AppComponent { }