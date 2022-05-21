import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Measure } from './../model/measure';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class NewMeasureService {
  measures!: Measure[];
  constructor() {
    this.measures = WebStorageUtil.get(Constants.MEASURE_KEY);
  }

  save(measure: Measure) {
    this.measures = WebStorageUtil.get(Constants.MEASURE_KEY);
    this.measures.push(measure);
    WebStorageUtil.set(Constants.MEASURE_KEY, this.measures);
  }

  getMeasures(): Measure[] {
    this.measures = WebStorageUtil.get(Constants.MEASURE_KEY);
    return this.measures;
  }
}
