import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BecasService {
  constructor(private httpClient: HttpClient) {}

  getBecas() {
    let url = "https://grant-ed.firebaseio.com/libros.json";
    return this.httpClient.get(url);
    // es un objeto observable al que hay que subscribirse pero como dentro de la funcion anonima del subscribe no puedes hacer un return retornamos le observable entero y despues nos subscribimos en el componente
  }
}
