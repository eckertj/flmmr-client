import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {NgClass} from 'angular2/common';
import {Observable} from 'rxjs/Rx';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {TruncatePipe} from './truncate.component';

import {FlmmrAPIService} from '../services/media.service'

@Component({
  selector : 'media',
  templateUrl: 'app/components/media.component.html',
  styleUrls: ['app/styles/style.css'],
  pipes: [TruncatePipe],
  providers: [FlmmrAPIService],
  directives: [NgClass]
})

export class MediaComponent {
  title = "Flmmr"
  media;
  fetchingInProcess = false;
  @Output() mediaURLChanged = new EventEmitter();

  constructor(public api: FlmmrAPIService) { }

  getMedia(query) {
    console.log("Fetching new data with query: ", query);
    this.fetchingInProcess = true;
    this.api.getMedia(query).subscribe(
        data => { this.media = data.media },
        err => {
          this.fetchingInProcess = false;
          console.error(err);
          this.media = [];
        },
        () => {
          this.fetchingInProcess = false; 
          console.log('done');
        }
    );  
  }

  changeMedia(media_url) {
    console.log("changeMedia called!");
    this.mediaURLChanged.emit(media_url);
  }

  focusIn() {
    console.log("focus in");
    $("div.search-field").removeClass("start");
  }

  catchClick(event) {
    event.stopPropagation();
  }

  focusOut() {
    console.log("focus out");
    $("div.search-field").addClass("start");
  }

  dateToString(datestr) {
    var date = new Date(datestr);
    return (date.getDate()) + "." + (date.getMonth()+1) + "." + date.getFullYear();
  }

  durationToString(durstr) {

    var allMinutes = Math.round(durstr / 60);
    var hours = Math.floor(allMinutes / 60);
    var leftMinutes = allMinutes % 60;

    var additionalZero = leftMinutes.toString().length == 1 ? "0" : ""

    return hours + ":" + additionalZero +leftMinutes + " h";
  }

}
