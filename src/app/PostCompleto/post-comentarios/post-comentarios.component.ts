import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { identity } from 'rxjs';

@Component({
  selector: 'post-comentarios',
  templateUrl: './post-comentarios.component.html',
  styleUrls: ['./post-comentarios.component.css']
})
export class PostComentariosComponent implements OnInit {
  arrComments: any
  formComment: FormGroup;
  fk_blog: number
  tokenUsuario: string


  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) {
    this.activatedRoute.params.subscribe(params => {
      this.blogService.getPostById(params.idPost).subscribe(res => {
        this.arrComments = res["comentarios"]
        // console.log(res["comentarios"])
        this.fk_blog = params.idPost
      })
    })
  }

  ngOnInit() {
    this.formComment = new FormGroup({
      comment: new FormControl("", []),
    });
    this.tokenUsuario = localStorage.getItem('token')

  }

  manejarComentarios() {

    this.blogService.addComment(this.formComment.value.comment, this.fk_blog, this.tokenUsuario).subscribe(res => {
      this.activatedRoute.params.subscribe(params => {
        this.blogService.getPostById(params.idPost).subscribe(res => {
          this.arrComments = res["comentarios"]
          this.fk_blog = params.idPost
        })
      })
    })
  }

  borrarComentario(id) {
    this.blogService.deleteComment(id).subscribe(res => {
      this.activatedRoute.params.subscribe(params => {
        this.blogService.getPostById(params.idPost).subscribe(res => {
          this.arrComments = res["comentarios"]
          // console.log(res["comentarios"])
          this.fk_blog = params.idPost
        })
      })
    })
  }

}
