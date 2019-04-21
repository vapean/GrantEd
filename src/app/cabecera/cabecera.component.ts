import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  isCollapsed: boolean

  constructor(public usuariosService: UsuariosService) {
  }

  ngOnInit() {
    this.isCollapsed=true
  }




}


