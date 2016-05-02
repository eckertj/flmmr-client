import {Component} from 'angular2/core'
import {Observable} from 'rxjs/Rx';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

import {FlmmrAPIService} from '../services/media.service'

@Component({
  selector : 'media',
  templateUrl: 'app/components/media.component.html',
  styleUrls: ['app/styles/style.css'],
  providers: [FlmmrAPIService],
  directives: []
})

export class MediaComponent {
  title = "Flmmr"
  media;

  constructor(public api: FlmmrAPIService) { }

  ngOnInit() {
    //this.getMedia("tatort");
  }

  getMedia(query) {
    console.log("Fetching new data with query: ", query);
    this.api.getMedia(query).subscribe(
        data => { this.media = data.media},
         err => console.error(err),
          () => console.log('done')
    );  
  }
}
