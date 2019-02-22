import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formRegistro: FormGroup;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.formRegistro = new FormGroup(
      {
        
        username: new FormControl("Ojellav", [
          Validators.required,
          Validators.maxLength(15)
        ]),
        
        password: new FormControl("Caba22lla", [
          Validators.pattern(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/)
        ]),
        
      },
    );

  
    let usernameControl = this.formRegistro.controls["username"];
    usernameControl.valueChanges.pipe(debounceTime(500)).subscribe(value => {
    });

    
  }

  
  manejarLogin() {
    this.usuariosService.loginFormulario(this.formRegistro.value).subscribe(res => {
      console.log(res)
    })
  }
}

  
