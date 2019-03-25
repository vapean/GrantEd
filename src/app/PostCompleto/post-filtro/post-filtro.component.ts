import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'post-filtro',
  templateUrl: './post-filtro.component.html',
  styleUrls: ['./post-filtro.component.css']
})
export class PostFiltroComponent implements OnInit {

  post: any

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService, ) {
    this.activatedRoute.params.subscribe(params => {
      this.blogService.getPostById(params.idPost).subscribe(res => {
        this.post = res
        console.log(this.post);
      })
    })
  }

  ngOnInit() {
  }
}
