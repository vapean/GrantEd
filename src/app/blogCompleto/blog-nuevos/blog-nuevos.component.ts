import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service'

@Component({
  selector: 'blog-nuevos',
  templateUrl: './blog-nuevos.component.html',
  styleUrls: ['./blog-nuevos.component.css']
})
export class BlogNuevosComponent implements OnInit {
  arrBlogsNuevos: any
  arrCategorias: any


  constructor(private blogService: BlogService) {

   }

  ngOnInit() {
    this.blogService.getNewPosts().subscribe(res => {
      this.arrBlogsNuevos = res
      console.log(this.arrBlogsNuevos)
    })
  }

}
