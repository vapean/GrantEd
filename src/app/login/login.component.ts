import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  result: string
  comprobacionResultado: boolean


  constructor(private usuariosService: UsuariosService, private router: Router) {
    this.result = ""
   }

  ngOnInit() {
    this.formLogin = new FormGroup(
      {

        username: new FormControl("", [
          Validators.required,
          Validators.maxLength(15)
        ]),

        password: new FormControl("", [
          Validators.required,
          Validators.pattern(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/)
        ]),
      },
    );

  }


  manejarLogin() {
    // console.log(this.formLogin.value)
    this.usuariosService.loginFormulario(this.formLogin.value).subscribe(res => {
      this.result = res["mensaje"]
      this.comprobacionResultado = res["resultado"]
      
      if (res["resultado"] == true) {
        localStorage.setItem("token", res["token"]);
      }
     
    })
  }

  continuarUsuario() {
    this.router.navigate(['usuario']);
  }

}


