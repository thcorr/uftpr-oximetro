import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Measure } from '../model/measure';
import { NewMeasureService } from './newmeasureservice';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-newmeasureform',
  templateUrl: './newmeasureform.component.html',
  styleUrls: ['./newmeasureform.component.css']
})
export class NewmeasureformComponent implements OnInit {

  @Input() measuredate: string = "notvaliddate";
  @ViewChild('form') form!: NgForm;

  measure!: Measure;
  measures?: Measure[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private router: Router, private newMeasureService: NewMeasureService) {

   }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.measure = new Measure(" ", " ");
    this.measures = this.newMeasureService.getMeasures();
  }

  submit(){
    console.log("Form Submitted !");

    this.router.navigate(['/history', true]);

    this.isSubmitted = true;
    this.newMeasureService.save(this.measure);
    console.log('non api save');


    this.newMeasureService.saveViaApi(this.measure)
    .then(()=> {console.log('save promise via API success')})
    .catch((e)=>{console.log('save promise via API fail')})
    .finally(() => {console.log('save finally via API aqui')});

    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.measure = new Measure('', '');
    this.measures = this.newMeasureService.getMeasures();

    var now = new Date();
    console.log(now.toUTCString());
    console.log("Dados cadastrados ate o momento:");
    for (let m of this.measures) {
      console.log("Nome" + m.nome + " Medida: " + m.medida + " Data: " + m.dataatual);

  }

  }

}
