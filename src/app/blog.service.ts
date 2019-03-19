import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url: string
  urlComment: string
  

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:3000/api/blog"
    this.urlComment ="http://localhost:3000/api/comentario"
  }
  
  getImportantes() {
    return this.httpClient.get(`${this.url}/importantes`)
  }

  getPostById(id) {
    return this.httpClient.post(`${this.url}/post`, { 'id': id})
  }
  //obtiene post y comentarios
  
  getNewPosts() {
    return this.httpClient.get(`${this.url}/newPosts`)
  }

  // getByKeyword(keyword) {
  //   return this.httpClient.post(`${this.url}/keyword`, { 'keyword': keyword})
  // }

  //debería ir en su propio servicio de comentarios pero el obtener esta aquí
  addComment(text, fk_blog, token) {
    return this.httpClient.post(`${this.urlComment}/new`, {'text': text, 'fk_blog': fk_blog, 'token':token })
  }

  deleteComment(id) {
    return this.httpClient.post(`${this.urlComment}/delete`, {'id': id})
  }

  likeComment(likes, id) {
    console.log('MARIO', likes, id)
    return this.httpClient.post(`${this.urlComment}/like`, {'likes':likes,'id': id})
  }

  //Categorias
  getAllCategorias() {
    return this.httpClient.get(`${this.url}/categorias`)
  }

  getBlogByCategoria(categoria) {
    return this.httpClient.post(`${this.url}/categoria`,{'categoria': categoria})
  }

}
