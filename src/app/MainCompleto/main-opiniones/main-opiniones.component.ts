import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'main-opiniones',
  templateUrl: './main-opiniones.component.html',
  styleUrls: ['./main-opiniones.component.css']
})
export class MainOpinionesComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
    $('.carousel').carousel({
      interval: 6000
    })
  }

}
