import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  name:string="vincent";
  typeInput:string="text";
  numberInput:string="number";
  constructor() { }

  ngOnInit() {
  }
  ShowInput($event){
    console.log($event.target.value);
  }
}
