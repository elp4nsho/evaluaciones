import {Component, Input, OnInit} from '@angular/core';
import {EvaluacionesService} from "../services/evaluaciones.service";

@Component({
  selector: 'app-encuesta-componente',
  templateUrl: './encuesta-componente.component.html',
  styleUrls: ['./encuesta-componente.component.css']
})
export class EncuestaComponenteComponent implements OnInit {


  @Input("evaluacion") evaluacion:any = [];



  mostrarLista = false;
  mostrarDetalles = false;

  constructor(private _evaluacion:EvaluacionesService) { }

  enviarCorreo(correo,obs){
    let observaciones = prompt("Ingrese sus observaciones");

    let data =``;


    obs.forEach(d=>{
      data+=`Pregunta: ${d.titulo} Tu Respuesta: ${d.respuesta}\n`
    });
    data+=`\n Observaciones:\n ${observaciones}`;


    this._evaluacion.enviarCorreo(correo, data).subscribe(d=>console.log(d))
  }


  ngOnInit() {
  }

}
