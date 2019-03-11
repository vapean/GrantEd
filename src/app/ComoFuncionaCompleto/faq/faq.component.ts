import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  activeQuestion1: boolean
  activeQuestion2: boolean
  activeQuestion3: boolean
  activeQuestion4: boolean
  activeQuestion5: boolean


  constructor() {
    this.activeQuestion1 = false
    this.activeQuestion2 = false
    this.activeQuestion3 = false
    this.activeQuestion4 = false
    this.activeQuestion5 = false

  }

  ngOnInit() {
  }

  activeFaq($event) {
    // console.log($event.target.id)
    if ($event.target.id == "button1") {
    
      if (this.activeQuestion1 == false) {
        this.activeQuestion1 = true
        this.activeQuestion2 = false
        this.activeQuestion3 = false
        this.activeQuestion4 = false
        this.activeQuestion5 = false
      } else {
        this.activeQuestion1 = false
      }
    }
    else if ($event.target.id == "button2") {
      if (this.activeQuestion2 == false) {

        this.activeQuestion1 = false
        this.activeQuestion2 = true
        this.activeQuestion3 = false
        this.activeQuestion4 = false
        this.activeQuestion5 = false

      } else {
        this.activeQuestion2 = false
      }
    }
    else if ($event.target.id == "button3") {
      if (this.activeQuestion3 == false) {

        this.activeQuestion1 = false
        this.activeQuestion2 = false
        this.activeQuestion3 = true
        this.activeQuestion4 = false
        this.activeQuestion5 = false

      } else {
        this.activeQuestion3 = false
      }
    }
    else if ($event.target.id == "button4") {
      if (this.activeQuestion4 == false) {
        this.activeQuestion1 = false
        this.activeQuestion2 = false
        this.activeQuestion3 = false
        this.activeQuestion4 = true
        this.activeQuestion5 = false
      } else {
        this.activeQuestion4 = false
      }
    }
    else if ($event.target.id == "button5") {
      if (this.activeQuestion5 == false) {
        this.activeQuestion1 = false
        this.activeQuestion2 = false
        this.activeQuestion3 = false
        this.activeQuestion4 = false
        this.activeQuestion5 = true
      } else {
        this.activeQuestion5 = false
      }
    }


  }

}
