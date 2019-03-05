import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuariosService } from 'src/app/usuarios.service';

declare var $;

@Component({
  selector: "registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  formRegistro: FormGroup;
  arrCountries: string[]
  arrFields: string[]
  arrLevels: string[]
  arrProvinces: string[]

  constructor(private usuarioService: UsuariosService) {
    this.arrCountries = ['Todos', 'Alemania', 'Andorra', 'Angola', 'Arabia Saudita', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaiyán', 'Bahrein', 'Bangladesh', 'Bélgica', 'Belice', 'Bolivia', 'Bosnia y Herzegovina', 'Brasil', 'Brunei', 'Bulgaria', 'Camboya', 'Camerún', 'Canadá', 'Catar', 'Chile', 'China', 'Chipre', 'Ciudad del Vaticano', 'Colombia', 'Corea del Sur', 'Costa Rica', 'Croacia', 'Cuba', 'Dinamarca', 'Dominica', 'Ecuador', 'Egipto', 'El Salvador', 'Emiratos Árabes Unidos', 'Escocia', 'Eslovaquia', 'Eslovenia', 'España', 'Estados Unidos', 'Estonia', 'Etiopía', 'Filipinas', 'Finlandia', 'Francia', 'Georgia', 'Ghana', 'Grecia', 'Guatemala', 'Guyana', 'Haití', 'Honduras', 'Hong Kong', 'Hungría', 'India', 'Indonesia', 'Irak', 'Irán', 'Irlanda', 'Islandia', 'Israel', 'Italia', 'Jamaica', 'Japón', 'Jordania', 'Kazajistán', 'Kenia', 'Kirguistán', 'Letonia', 'Líbano', 'Libia', 'Liechtenstein', 'Lituania', 'Luxemburgo', 'Macedonia', 'Malasia', 'Maldivas', 'Malí', 'Malta', 'Marruecos', 'México', 'Mozambique', 'Nepal', 'Nicaragua', 'Nigeria', 'Noruega', 'Nueva Zelanda', 'Online', 'Países Bajos', 'Pakistán', 'Panamá', 'Paraguay', 'Perú', 'Polonia', 'Portugal', 'Puerto Rico', 'Reino Unido', 'República Checa', 'República Dominicana', 'Rumania', 'Rusia', 'Senegal', 'Serbia', 'Singapur', 'Siria', 'Sri Lanka', 'Sudáfrica', 'Suecia', 'Suiza', 'Tailandia', 'Taiwan', 'Tanzania', 'Túnez', 'Turquía', 'Ucrania', 'Uganda', 'Uruguay', 'Venezuela', 'Vietnam']
    
    this.arrProvinces = ['Todos', 'A Coruña', 'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Baleares', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Girona', 'Granada', 'Guadalajara', 'Gipuzkoa', 'Huelva', 'Huesca', 'Jaén', 'La Rioja', 'Las Palmas', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Ourense', 'Palencia', 'Pontevedra', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza']
    
    this.arrLevels = ['Concursos', 'Curso corto', 'Doctorado', 'Formación Profesional', 'Fellowship', 'Idiomas', 'Máster', 'Postdoctorado', 'Práctica', 'Grado Universitario', 'Residencia artística', 'Otros']
    
    this.arrFields = ['Acústica', 'Administración de Empresas', 'Administración Publica', 'Alemán', 'Arquitectura', 'Artes', 'Astronomía', 'Bellas Artes', 'Biología', 'Botánica', 'Chino', 'Ciencias Agrícolas', 'Ciencias Naturales', 'Ciencias Políticas', 'Cine', 'Cirugía', 'Coaching', 'Comercio Exterior', 'Comunicación', 'Contaduria', 'Coreano', 'Derecho', 'DIseño', 'Ecología y Medio Ambiente', 'Economía', 'Educación', 'Emprendimiento', 'Energías Alternativas', 'Especialidades en Medicina', 'Estadística', 'Estudios Bibliográficos', 'Estucios Culturales', 'Estudios del Desarrollo', 'Farmacología', 'Filología / Letras', 'Finanzas', 'Físisa', 'Fotografia', 'Frances', 'Gastronomñia', 'Genética', 'Gestión de eventos', 'Griego', 'Hebreo', 'Historia', 'Hosteleria y Turismo', 'Humanidades', 'Ingeniería', 'Inglés', 'Italiano', 'Japones', 'Marketing Digital', 'Matemáticas', 'Medicina', 'Meditación', 'Moda', 'Música', 'Neurociencia', 'Oftafmología', 'Periodismo', 'Portugués', 'Psicología', 'Psiquiatría', 'Química', 'Relaciones Internacionales', 'Salud Pública', 'Sociología', 'Sostenibilidad', 'Tecnología e ingormática', 'Turismo', 'Urbanismo', 'Veterinaria', 'Zoología']
    
    
  



    
    
  }

  ngOnInit() {
    this.formRegistro = new FormGroup(
      {
        nombre: new FormControl("Antonio", [
          Validators.required,
          Validators.maxLength(15)
        ]),
        surname: new FormControl("Vallejo", [
          Validators.required,
          Validators.maxLength(15)
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
      return { age: "La edad debe estar entre 18 y 99" };
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

  manejarFormulario() {
    this.usuarioService
      .enviarFormulario(this.formRegistro.value)
      .subscribe(res => {
        console.log(res);
      });
  }
}
