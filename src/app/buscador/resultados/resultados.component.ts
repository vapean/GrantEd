import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BecasService } from 'src/app/becas.service';

@Component({
  selector: 'resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  beca:any
  constructor(private activatedRoute: ActivatedRoute, private becasService: BecasService, ) {
    this.activatedRoute.params.subscribe(params => {
      this.becasService.getBecaById(params.idBeca).subscribe(res => {
        this.beca = res[0]
      })
    })
   }

  ngOnInit() {
  }

}
