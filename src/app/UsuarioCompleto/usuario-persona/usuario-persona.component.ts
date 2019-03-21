import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuariosService } from 'src/app/usuarios.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'


declare var $;


@Component({
  selector: 'usuario-persona',
  templateUrl: './usuario-persona.component.html',
  styleUrls: ['./usuario-persona.component.css']
})
export class UsuarioPersonaComponent {
  formUpdate: FormGroup;
  arrCountries: any[]
  arrFields: string[]
  arrLevels: string[]
  // arrProvinces: string[]
  arrGenders: string[]
  comprobacionPais: boolean
  result: string
  // comprobacionResultado: boolean
  usuario: any

  width: any

  // firebase
  uploadPercent: Observable<number>
  downloadURL: Observable<string>
  urlImagen: string


  constructor(private usuarioService: UsuariosService, private router: Router, private storage: AngularFireStorage) {
    this.result = ""
    this.usuario = {}
    this.arrCountries = this.usuarioService.obtenerPaises()
    this.arrLevels = this.usuarioService.obtenerNiveles()
    this.arrGenders = this.usuarioService.obtenerGeneros()
    this.arrFields = this.usuarioService.obtenerCampos()
    this.width = 0

  }


  ngAfterViewInit() {
    this.loadForm()
  }

  loadForm() {
    this.usuarioService.getUser({ 'token': localStorage.getItem('token') }).subscribe(res => {
      this.usuario = res[0]

      this.formUpdate = new FormGroup(
        {
          name: new FormControl(this.usuario.name, [
            Validators.required,
            Validators.maxLength(20)
          ]),
          surname: new FormControl(this.usuario.surname, [
            Validators.required,
            Validators.maxLength(20)
          ]),
          username: new FormControl(this.usuario.username, [
            Validators.required,
            Validators.maxLength(15)
          ]),
          mail: new FormControl(this.usuario.email, [
            Validators.required,
            Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
          ]),
          study_field: new FormControl(this.usuario.study_field.split(",")),
          study_level: new FormControl(this.usuario.study_level.split(",")),
          country_origin: new FormControl(this.usuario.country_origin.split(","), [
            Validators.required
          ]),
          // province_destination: new FormControl('', []),
          // province_origin: new FormControl('', []),
          country_destination: new FormControl(this.usuario.country_destination.split(",")),
          date: new FormControl(this.usuario.date),
          gender: new FormControl(this.usuario.gender.split(",")),
          age: new FormControl(this.usuario.age, [this.ageValidator])
        },
      );

      this.urlImagen = this.usuario.image
    })
  }

  onChangeImagen($event) {
    const image = $event.target.files[0]
    let imageName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    console.log(imageName)
    const filePath = 'imagenes/' + imageName + '.jpg';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, image);

    console.log(task.percentageChanges());
    this.uploadPercent = task.percentageChanges();

    task.percentageChanges().subscribe(res => {
      this.width = Math.floor(res)
    })
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL()
        this.downloadURL.subscribe(url => {
          this.urlImagen = url
          this.usuario.imagen = url
        })
      })
    )
      .subscribe()
  }


  ageValidator(control) {
    if (isNaN(control.value) == true) {
      return { age: "Debe ser un numero" };
    }
    if (control.value < 18 || control.value > 99) {
      return { age: "La edad debe estar entre 18 y 99" };
    }
    return null;
  }


  manejarUpdate() {

    if (this.formUpdate.value.study_field.length > 0) {
      this.formUpdate.value.study_field = this.formUpdate.value.study_field.join(',')
    }
    if (this.formUpdate.value.study_level.length > 0) {
      this.formUpdate.value.study_level = this.formUpdate.value.study_level.join(',')
    }
    if (this.formUpdate.value.country_origin.length > 0) {
      this.formUpdate.value.country_origin = this.formUpdate.value.country_origin.join(',')
    }
    if (this.formUpdate.value.country_destination.length > 0) {
      this.formUpdate.value.country_destination = this.formUpdate.value.country_destination.join(',')
    }
    // if (this.formUpdate.value.province_origin.length > 0) {
    //   this.formUpdate.value.province_origin = this.formUpdate.value.province_origin.join(',')
    // }
    if (this.formUpdate.value.gender.length > 0) {
      this.formUpdate.value.gender = this.formUpdate.value.gender.join(',')
    }
    // if (this.formUpdate.value.province_destination.length > 0) {
    //   this.formUpdate.value.province_destination = this.formUpdate.value.province_destination.join(',')
    // }
    this.formUpdate.value.token = localStorage.getItem('token')
    this.formUpdate.value.image = this.urlImagen

    this.usuarioService.enviarUpdate(this.formUpdate.value).subscribe(res => {
      this.result = res['mensaje']
    });
  }

  userExit() {
    localStorage.clear()
    this.router.navigate(['main']);
  }
}
