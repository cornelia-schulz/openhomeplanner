import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { createTestRegions } from './test-data';
import { Region } from './model';

@Injectable()
export class DataService {
    private regionUrl = 'api/regions';

    constructor(
        private http: Http,
    ){}

    getRegions(): Observable<Region[]>{
        return this.http.get(this.regionUrl)
            .map(response => response.json().data as Region[])
            .catch((error: any) => {
                return Observable.throw('Something happened getting regions, please check the console.')
            });
    }
}