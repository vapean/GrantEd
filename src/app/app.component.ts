import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GrantEd';

  showIntertitial: boolean
  url: any
  loading: boolean
  


  constructor(private activatedRoute: ActivatedRoute) {
    this.showIntertitial = false
    this.activatedRoute.url.subscribe(activeUrl =>{
      this.url = window.location.pathname;
      // console.log(this.url)
    });
    this.loading = true
    
  }
  
  ngOnInit() {
    if (this.url != "/registro" && this.url !="/login" && !localStorage.getItem('token')) {
      setTimeout(() => {
        this.showIntertitial = true
      }, 18000)
    }
  }

  hideInsterstitial() {
    this.showIntertitial = false
  }

  // @HostListener('window:unload', [ '$event' ])
  // unloadHandler(event) {
  //   console.log('adios')
  // }

  // @HostListener('window:beforeunload', [ '$event' ])
  // beforeUnloadHander(event) {
  //   localStorage.clear()
  // }
}
