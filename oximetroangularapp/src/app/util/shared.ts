import { Constants } from './constants';
import { Measure } from '../model/measure';

export class Shared {
  constructor() {}

  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.MEASURENAME_KEY) != null) {
      return;
    }

    let measure = new Measure(Constants.MEASURENAME_KEY, '100');

    localStorage.setItem(Constants.MEASURENAME_KEY, JSON.stringify(measure));
    localStorage.setItem(Constants.MEASURE_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.MEDIDAVALOR_KEY, String(0));

  }
}
