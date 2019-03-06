import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url: string
  constructor(private httpClient: HttpClient) {
    //   this.url= "http://registrate.ngrok.io/"
    // }
    this.url = "http://localhost:3000/api/usuario/new"
  }
  
  enviarFormulario(form) {
    return this.httpClient.post(`${this.url}`, {'name': form.name, 'surname':form.surname, 'username':form.username, 'password':form.password, 'email':form.mail, 'address':form.adress, 'age':form.age, 'country_origin':form.country_origin,'province_origin':form.province_origin, 'country_destination':form.country_destination,'province_destination':form.province_destination, 'study_field':form.study_field, 'study_level':form.study_level, 'date':form.date, 'gender':form.gender,})
  }

  // enviarFormulario(form) {
  //   return this.httpClient.post(`${this.url}register`, {'name': form.nombre, 'surname':form.surname, 'username':form.username, 'password':form.password, 'mail':form.mail, 'address':form.adress, 'age':form.age})
  // }

  loginFormulario(form) {
    return this.httpClient.post(`${this.url}login`, { 'username': form.username, 'password': form.password,})
  }
}