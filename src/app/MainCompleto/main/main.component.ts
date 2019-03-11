import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  showIntertitial: boolean
  
  constructor() {
    this.showIntertitial = false
   }

  ngOnInit() {
    console.log(this.showIntertitial)
    setTimeout(() => {
      this.showIntertitial = true
    }, 18000)
  }
  hideInsterstitial() {
    this.showIntertitial = false
  }

}
