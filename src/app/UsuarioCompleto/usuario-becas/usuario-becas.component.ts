import { Component, OnInit } from '@angular/core';
import { BecasService } from 'src/app/becas.service';

@Component({
  selector: 'usuario-becas',
  templateUrl: './usuario-becas.component.html',
  styleUrls: ['./usuario-becas.component.css']
})
export class UsuarioBecasComponent implements OnInit {

  arrBecasUsuario: any
  becaSeleccionada: any
  constructor(private becasService: BecasService) { }

  ngOnInit() {
    this.becasService.getBecasFavUsuario(localStorage.getItem('token')).subscribe(res => {
      this.arrBecasUsuario= res
    })
  }

  manejarBecaSelecionada(beca){
    this.becaSeleccionada = beca
  }

  deleteBecaFav(beca) {  
    this.becasService.deleteBecasFav(beca.id, localStorage.getItem('token')).subscribe(res => {
      this.becasService.getBecasFavUsuario(localStorage.getItem('token')).subscribe(res => {
        this.arrBecasUsuario = res
      });        
    })
  }

}
