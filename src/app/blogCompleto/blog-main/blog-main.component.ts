import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css']
})
export class BlogMainComponent implements OnInit {

  arrBlogsCategoria: any

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) {

  }
  ngOnInit() {
    // this.blogService.getPostByKeyword().subscribe(res => {
    //   this.arrBlogsKeyword = res
    //   console.log(this.arrBlogsKeyword)
    // })

    this.activatedRoute.params.subscribe(params => {
      this.blogService.getBlogByCategoria(params.categoria).subscribe(res => {
        this.arrBlogsCategoria = res
      })
    })
  }

}
