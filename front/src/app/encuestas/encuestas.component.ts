import { Component, OnInit } from '@angular/core';
import {EvaluacionesService} from "../services/evaluaciones.service";

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  encuestasObtenidas: any = [];

  obtenerEncuestas(){
    this.eService.traerEvaluaciones().subscribe(d=>{
      this.encuestasObtenidas = d;
    })
  }


  constructor(private eService: EvaluacionesService) {
    this.obtenerEncuestas();
  }

  transformar(o){
    let datos = [];
    for (let i in Object.keys(o)) {
      let obj : any = {};
      obj.nombre = Object.keys(o)[i];
      obj.valor = o[Object.keys(o)[i]];
      datos.push(obj);
      /*o[Object.keys(o)[i]] = datos[Object.keys(o)[i]];*/
    }
    console.log(datos);
    return datos;
  }


  ngOnInit() {
  }

}
