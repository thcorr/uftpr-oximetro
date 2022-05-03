import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


  constructor(private router:ActivatedRoute) {


  }

  ngOnInit(): void {

    console.log(this.router.snapshot.paramMap.get('newlyadded'));
    console.log(this.isNewlyAdded());
  }

  isNewlyAdded(): boolean {
    var newlyadded = this.router.snapshot.paramMap.get('newlyadded');
    return newlyadded!.toLowerCase() == "true";
  }

}
