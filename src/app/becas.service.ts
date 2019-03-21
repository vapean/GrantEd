import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BecasService {
  url: string
  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:3000/api/becas"
  }

  obtenerBecas(filtro) {
    return this.httpClient.post(`${this.url}`, { 'date': filtro.date, 'typology': filtro.typology, 'country_origin': filtro.country_origin, 'province_origin': filtro.province_origin, 'country_destination': filtro.country_destination, 'province_destination': filtro.province_destination, 'study_field': filtro.study_field, 'study_level': filtro.study_level, 'token': localStorage.getItem('token') })
  }

  addBecasFav(fk_becas, token) {
    return this.httpClient.post(`${this.url}/fav`, { 'fk_becas': fk_becas, 'token': token })
  }

  deleteBecasFav(fk_becas, token) {
    return this.httpClient.post(`${this.url}/unfav`, { 'fk_becas': fk_becas, 'token': token })
  }

  getBecasFavUsuario(token) {
    return this.httpClient.post(`${this.url}/usuario`, { 'token': token })
  }

  getBecaById(beca_id) {
    return this.httpClient.post(`${this.url}/id`, { 'beca_id': beca_id})
  }
}
