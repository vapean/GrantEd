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

  obtenerBecas(filtros) {
    return this.httpClient.post(`${this.url}`, {'date': filtros.date, 'typology': filtros.typology,'country_origin': filtros.country_origin, 'province_origin': filtros.province_origin, 'country_destination': filtros.country_destination, 'province_destination': filtros.province_destination, 'study_field': filtros.study_field, 'study_level': filtros.study_level})
  }
}
