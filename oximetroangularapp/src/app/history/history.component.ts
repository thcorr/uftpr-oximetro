import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Measure } from '../model/measure';
import { NewMeasureService } from '../newmeasureform/newmeasureservice';
import { Shared } from '../util/shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


  measures?: Measure[];
  testDataAtividade11 = false;
  subscription!: Subscription;

  constructor(private router:ActivatedRoute, private newMeasureService: NewMeasureService) {


    this.subscription = newMeasureService.asObservable().subscribe((data) => {
      this.testDataAtividade11 = data;
      console.log('observer - teste - Atividade11');
      console.log(this.testDataAtividade11);
    });

  }

  ngOnInit(): void {

    Shared.initializeWebStorage();
    let tempArray = new Array();
    this.newMeasureService.getMeasuresViaApi()
    .then((ms : Measure[]) => {
      ms.forEach(function(m) {
        tempArray.push(m);
    });

    console.log(tempArray);

    this.measures = tempArray;

    })
    .catch((e) => {
      //erro ao pegar do json-server
      console.log("Erro no get!");
    });


  }

  isNewlyAdded(): boolean {
    var newlyadded = this.router.snapshot.paramMap.get('newlyadded');
    return newlyadded!.toLowerCase() == "true";
  }

}
