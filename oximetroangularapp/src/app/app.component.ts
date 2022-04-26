import * as M from 'materialize-css';

import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'oximetroangularapp';

  ngAfterViewInit(): void {

  }
}
