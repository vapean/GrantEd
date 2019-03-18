import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuariosService } from 'src/app/usuarios.service';
import { Router } from '@angular/router';

declare var $;

@Component({
    selector: "registro",
    templateUrl: "./registro.component.html",
    styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
    formRegistro: FormGroup;
    arrCountries: any[]
    arrFields: string[]
    arrLevels: string[]
    // arrProvinces: string[]
    comprobacionPais: boolean
    result: string
    comprobacionResultado: boolean

    constructor(private usuarioService: UsuariosService, private router: Router) {
        this.result = ""

        this.arrCountries = usuarioService.obtenerPaises()
        
        // this.arrProvinces = ['A Coruña', 'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Baleares', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Girona', 'Granada', 'Guadalajara', 'Gipuzkoa', 'Huelva', 'Huesca', 'Jaén', 'La Rioja', 'Las Palmas', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Ourense', 'Palencia', 'Pontevedra', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza']

        this.arrLevels = this.usuarioService.obtenerNiveles()

        this.arrFields = this.usuarioService.obtenerCampos()
    }

    ngOnInit() {
        this.formRegistro = new FormGroup(
            {
                name: new FormControl("Antonio", [
                    Validators.required,
                    Validators.maxLength(20)
                ]),
                surname: new FormControl("Vallejo", [
                    Validators.required,
                    Validators.maxLength(20)
                ]),
                username: new FormControl("Ojellav", [
                    Validators.required,
                    Validators.maxLength(15)
                ]),
                mail: new FormControl("antonio.vapei@gmail.com", [
                    Validators.required,
                    Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
                ]),
                password: new FormControl("Caba22lla", [
                    Validators.pattern(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/)
                ]),
                password_repeat: new FormControl("Caba22lla", []),
                adress: new FormControl("Calle Cristo 2 A", [
                    Validators.required,
                    Validators.maxLength(20)
                ]),
                study_field: new FormControl("", []),
                study_level: new FormControl("", []),
                country_origin: new FormControl("", [
                    Validators.required
                ]),
                // province_destination: new FormControl("", []),
                // province_origin: new FormControl("", []),
                country_destination: new FormControl("", []),
                date: new FormControl("", []),
                gender: new FormControl("", [
                ]),
                age: new FormControl("19", [this.ageValidator])
            },
            [this.passwordRepeatValidator]
            // este va a nivel del formulario general proque tiene que acceder a mas de un imput
        );


    }

    ngAfterViewInit() {
        $('.selectpicker').selectpicker();
    }

    ageValidator(control) {
        // console.log(control.value)
        if (isNaN(control.value) == true) {
            return { age: "Debe ser un numero" };
        }
        if (control.value < 18 || control.value > 99) {
            return { age: "La edad de nuestros usuarios debe estar entre 18 y 99 años" };
        }
        return null;
    }

    passwordRepeatValidator(group: FormGroup) {
        let password = group.controls["password"].value;
        let password_repeat = group.controls["password_repeat"].value;
        return password == password_repeat
            ? null
            : { repeatpassword: "Las contraseñas deben ser iguales" };
    }


    comprobarEspana(pais) {
        this.comprobacionPais = pais.target.value == "ES"
        return this.comprobacionPais
    }


    manejarFormulario() {
        // console.log(this.formRegistro.value)
        if (this.formRegistro.value.study_field.length > 0) {
            this.formRegistro.value.study_field = this.formRegistro.value.study_field.join(',')
        }
        if (this.formRegistro.value.study_level.length > 0) {
            this.formRegistro.value.study_level = this.formRegistro.value.study_level.join(',')
        }
        if (this.formRegistro.value.country_destination.length > 0) {
            this.formRegistro.value.country_destination = this.formRegistro.value.country_destination.join(',')
        }
        // if (this.formRegistro.value.province_destination.length > 0) {
        //     this.formRegistro.value.province_destination = this.formRegistro.value.province_destination.join(',')
        // }

        this.usuarioService.enviarFormulario(this.formRegistro.value).subscribe(res => {
            // console.log(res.resultado);
            this.result = res['mensaje']
            this.comprobacionResultado = res['resultado']

            if (res['resultado'] == true) {
                this.formRegistro.reset()
            }
        });
    }

    continuarLogin() {
        this.router.navigate(['login']);
    }

}
