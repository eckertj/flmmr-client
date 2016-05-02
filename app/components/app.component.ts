import {Component} from 'angular2/core';
import {MediaComponent} from './media.component'

@Component({
  selector: 'flmmr',
  template: '<media></media>',
    templateUrl: 'app/components/app.component.html',
    directives: [MediaComponent]
})
export class AppComponent { }