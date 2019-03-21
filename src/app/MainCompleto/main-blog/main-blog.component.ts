import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service'


@Component({
  selector: 'main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.css']
})
export class MainBlogComponent implements OnInit {

 arrBlogsImportantes: any

  constructor(private blogService: BlogService) {

   }

  ngOnInit() {
    this.blogService.getImportantes().subscribe(res => {
      this.arrBlogsImportantes = res
    })

  }

 
  


}
