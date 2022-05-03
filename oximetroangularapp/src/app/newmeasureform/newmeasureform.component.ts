import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newmeasureform',
  templateUrl: './newmeasureform.component.html',
  styleUrls: ['./newmeasureform.component.css']
})
export class NewmeasureformComponent implements OnInit {

  @Input() measuredate: string = "notvaliddate";


  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  submit(){
    console.log("Form Submitted !");
    console.log(this.measuredate);
    this.router.navigate(['/history', true]);
  }

}
