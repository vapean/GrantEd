import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url: string
  constructor(private httpClient: HttpClient) {
    this.url= "http://registrate.ngrok.io/"
  }
  

  enviarFormulario(form) {
    return this.httpClient.post(`${this.url}register`, {'name': form.nombre, 'surname':form.surname, 'username':form.username, 'password':form.password, 'mail':form.mail, 'address':form.adress, 'age':form.age})
  }

  loginFormulario(form) {
    return this.httpClient.post(`${this.url}login`, { 'username': form.username, 'password': form.password,})
  }
}