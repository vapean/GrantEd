import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';


@Component({
  selector: 'blog-keywords',
  templateUrl: './blog-keywords.component.html',
  styleUrls: ['./blog-keywords.component.css']
})
export class BlogKeywordsComponent implements OnInit {

  arrCategorias: any

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.getAllCategorias().subscribe(res => {
      this.arrCategorias = res
    })
  }

}
