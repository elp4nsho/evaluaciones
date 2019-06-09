import { Component, OnInit } from '@angular/core';
import {EvaluacionesService} from "../services/evaluaciones.service";

@Component({
  selector: 'app-ver-admin',
  templateUrl: './ver-admin.component.html',
  styleUrls: ['./ver-admin.component.css']
})
export class VerAdminComponent implements OnInit {
listaEvaluaciones:any = [];


  constructor(private _evaluacion:EvaluacionesService) {

    this._evaluacion.traerEvaluacionesRespondidass().subscribe(d=>this.listaEvaluaciones=d);


  }

  ngOnInit() {
  }

  enviarCorreo(correo,obs){
    this._evaluacion.enviarCorreo(correo, obs).subscribe(d=>console.log(d))
  }


  traerEvaluacionesRespondidas(){

  }


}
