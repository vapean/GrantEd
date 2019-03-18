
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuariosService } from 'src/app/usuarios.service';

import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { BecasService } from '../becas.service';



@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent {
  formBuscador: FormGroup;
  arrCountries: any[]
  arrCountriesHispanos: any[]
  arrFields: string[]
  arrLevels: string[]
  arrBecas: any
  becaSeleccionada: any
  // arrProvinces: string[]
  comprobacionPais: boolean
  result: string
  // comprobacionResultado: boolean
  usuario: any
  busqueda: boolean
  

  // firebase
  uploadPercent: Observable<number>
  downloadURL: Observable<string>
  urlImagen: string





  constructor(private usuarioService: UsuariosService, private becasService: BecasService) {
    this.result = ""
    this.usuario = {}
    this.comprobacionPais = true
    this.arrCountries = this.usuarioService.obtenerPaises()
    this.arrCountriesHispanos= this.usuarioService.obtenerPaisesHispanos()
    // this.arrProvinces = ['A Coruña', 'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Baleares', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Girona', 'Granada', 'Guadalajara', 'Gipuzkoa', 'Huelva', 'Huesca', 'Jaén', 'La Rioja', 'Las Palmas', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Ourense', 'Palencia', 'Pontevedra', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza']
    this.arrLevels = this.usuarioService.obtenerNiveles()
    this.arrFields = this.usuarioService.obtenerCampos()
    this.busqueda= false
  }


  ngOnInit() {
    this.loadForm()
  }

  loadForm() {
    if (localStorage.getItem('token')) {
      let res = this.usuarioService.getUser({ 'token': localStorage.getItem('token') }).subscribe(res => {
        this.usuario = res[0]


        this.formBuscador = new FormGroup(
          {
            study_field: new FormControl(this.usuario.study_field.split(",")),
            study_level: new FormControl(this.usuario.study_level.split(",")),
            country_origin: new FormControl(this.usuario.country_origin.split(",")),
            // province_destination: new FormControl('', []),
            // province_origin: new FormControl('', []),
            country_destination: new FormControl(this.usuario.country_destination.split(",")),
            date: new FormControl(this.usuario.date, []),
          },
        );
      })
    } else {
      this.formBuscador = new FormGroup(
        {
          study_field: new FormControl(''),
          study_level: new FormControl(''),
          country_origin: new FormControl(''),
          // province_destination: new FormControl('', []),
          // province_origin: new FormControl('', []),
          country_destination: new FormControl(''),
          date: new FormControl(''),
        },
      );
    }
    // comprobarEspana(pais) {
    //   this.comprobacionPais = pais.target.value == ["ES"]
    //   return this.comprobacionPais
    // }
  }
  manejarBuscador() {
    console.log(this.formBuscador.value)

    if (this.formBuscador.value.study_field.length > 0) {
      // this.formBuscador.value.study_field = this.formBuscador.value.study_field.join(',')
    }
    if (this.formBuscador.value.study_level.length > 0) {
      // this.formBuscador.value.study_level = this.formBuscador.value.study_level.join(',')
    }
    if (this.formBuscador.value.country_origin.length > 0) {
     
    }
    if (this.formBuscador.value.country_destination.length > 0) {
      // this.formBuscador.value.country_destination = this.formBuscador.value.country_destination.join(',')
    }
    // if (this.formBuscador.value.province_origin.length > 0) {
    //   this.formBuscador.value.province_origin = this.formBuscador.value.province_origin.join(',')
    // }
    // if (this.formBuscador.value.province_destination.length > 0) {
    //   this.formBuscador.value.province_destination = this.formBuscador.value.province_destination.join(',')
    // }

    console.log(this.formBuscador.value)

    //OJO
    this.becasService.obtenerBecas(this.formBuscador.value).subscribe(res => {
      console.log(res)
      this.arrBecas= res
    });

    this.busqueda= true

  }

  manejarBecaSelecionada(beca){
    this.becaSeleccionada= beca
}
}
