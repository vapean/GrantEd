import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formContacto: FormGroup;
  result: any

  constructor(private contactoService: ContactoService) { }

  ngOnInit() {
    this.formContacto = new FormGroup(
      {
        name: new FormControl("", [
          Validators.required,
          Validators.maxLength(20)
        ]),
        email: new FormControl("", [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        ]),
        subject: new FormControl("", [
          Validators.required,
          Validators.maxLength(50)
        ]),
        message: new FormControl("", [
          Validators.required,
        ])
      }
    );
  }

  manejarFormularioContacto() {
    this.contactoService.enviarContacto(this.formContacto.value).subscribe((res) => {
      this.result= res
    })

    
  }
}

