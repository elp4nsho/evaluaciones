import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";
import { Router} from "@angular/router";
import {EvaluacionesService} from "../services/evaluaciones.service";

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {


  respondida = false;

  public static listaPreguntas = [];


  preguntasDesdeEvaluacion = [];

  entradaNegra = true;

  modalConfirmacion = false;

  public static estado = false;

  get estado(){
    return IngresoComponent.estado;
  }

  get encuestaDisponible(){
    console.log("DISPONIBLES: "+this._auth.decode().evaluacionesDisponibles)
    return this._auth.decode().evaluacionesDisponibles
  }


  constructor(private evaluacionService : EvaluacionesService,private _router :Router,private _auth:AuthService) {
    this.entradaNegra = true;
    if(this._auth.decode().tipoUsuario == 0){
        this._router.navigate(['/administracion/ingreso']);
    }


  }
  ngOnInit() {
  }

  enviar(){
    IngresoComponent.estado = true;
  }

  traerEvaluacion(){
    this.evaluacionService.traerEvaluacion(this.encuestaDisponible).subscribe((d:any)=>{

      this.preguntasDesdeEvaluacion = d.preguntas;
      console.log(this.preguntasDesdeEvaluacion);
    });

  }


  enviarEvaluacion(){
    this.modalConfirmacion = false;
    let evaluacion: any = {};
    evaluacion.fecha = new Date().toString();
    evaluacion.preguntas = IngresoComponent.listaPreguntas;
    evaluacion.nombreEvaluado = this._auth.decode().nombre;
    evaluacion.rutEvaluado = this._auth.decode().rut;
    evaluacion.totalPreguntas = evaluacion.preguntas.length;
    evaluacion.idEvaluacion = this._auth.decode().evaluacionesDisponibles;

    this.evaluacionService.enviarEvaluacionRespondida(evaluacion).subscribe(
      d=>{
          this._auth.login({"usuario":this._auth.decode().rut,"clave":this._auth.decode().clave});

          console.log(d);
      }
    );

  }


}