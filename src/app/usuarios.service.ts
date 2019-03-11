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
    this.url = "http://localhost:3000/api/usuario"
  }

  enviarFormulario(form) {
    return this.httpClient.post(`${this.url}/new`, { 'name': form.name, 'surname': form.surname, 'username': form.username, 'password': form.password, 'email': form.mail, 'address': form.adress, 'age': form.age, 'country_origin': form.country_origin, 'province_origin': form.province_origin, 'country_destination': form.country_destination, 'province_destination': form.province_destination, 'study_field': form.study_field, 'study_level': form.study_level, 'date': form.date, 'gender': form.gender, })
  }

  enviarUpdate(form) {
    // console.log(form)
    return this.httpClient.post(`${this.url}/update`, { 'name': form.name, 'surname': form.surname, 'username': form.username, 'password': form.password, 'email': form.mail, 'address': form.adress, 'age': form.age, 'country_origin': form.country_origin, 'province_origin': form.province_origin, 'country_destination': form.country_destination, 'province_destination': form.province_destination, 'study_field': form.study_field, 'study_level': form.study_level, 'date': form.date, 'gender': form.gender, 'token': form.token })
  }

  loginFormulario(form) {
    return this.httpClient.post(`${this.url}/login`, { 'username': form.username, 'password': form.password })
  }

  usuarioLogado() {
    if (localStorage.getItem('token')) {
       return true
    }
    else {
      return false
    }
  }

  // getUser(token) {
  //   // return this.httpClient.post(`${this.url}`, {'token': localStorage.getItem('token') })
  //   return this.httpClient.post(`${this.url}`, token)

  // }

  getUserP(token) {
    return this.httpClient.post(`${this.url}`, token).toPromise()
  }

}
