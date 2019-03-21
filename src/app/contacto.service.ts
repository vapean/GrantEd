import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url: string

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:3000/contacto"
   }
  
  enviarContacto(form) {
    return this.httpClient.post(`${this.url}`, {'name': form.name, 'email': form.email, 'subject': form.subject, 'message':form.message})
  }
}
