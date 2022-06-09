import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Measure } from './../model/measure';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewMeasureService {

  private measureSource = new Subject<boolean>();

  URL = 'http://18.212.23.3:3000/medidas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  measures!: Measure[];

  constructor(private httpClient: HttpClient) {
    this.measures = WebStorageUtil.get(Constants.MEASURE_KEY);
  }

  save(measure: Measure) {
    this.measures = WebStorageUtil.get(Constants.MEASURE_KEY);
    this.measures.push(measure);
    WebStorageUtil.set(Constants.MEASURE_KEY, this.measures);

  }


  saveViaApi(measure: Measure ): Promise<Measure> {
    return this.httpClient
      .post<any>(
        this.URL,
        JSON.stringify(measure),
        this.httpOptions
      )
      .toPromise();
  }

  getMeasures(): Measure[] {
    this.measures = WebStorageUtil.get(Constants.MEASURE_KEY);
    return this.measures;
  }

  getMeasuresViaApi(): Promise<Measure[]>{
    return this.httpClient
      .get<any>(
        this.URL)
      .toPromise();
  }


  asObservable(): Observable<boolean> {
    return this.measureSource;

  }

}
