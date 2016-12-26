
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FlmmrAPIService {

  //_baseUrl: string = 'https://flmmr-api.herokuapp.com/api';
  _baseUrl: string = 'http://localhost:3000/api';

  constructor(private http: Http)  {}

  getMedia(query){
    return this.http.get(this._baseUrl + '?q=' + query)
      .map((res: Response) => res.json());
      }

}
