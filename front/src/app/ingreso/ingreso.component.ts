import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {EvaluacionesService} from "../services/evaluaciones.service";

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {


  respondida = false;

  public static listaPreguntas = [];
  public static evSeleccionada = "";
  public static preguntaFinal = false;

  get listaPreguntas() {
    return IngresoComponent.listaPreguntas;
  }

  preguntasDesdeEvaluacion: any = [];

  entradaNegra = true;

  modalConfirmacion = false;

  public static estado = false;

  get estado() {
    return IngresoComponent.estado;
  }




  get ultimaPregunta() {

    if (IngresoComponent.listaPreguntas.length == this.preguntasDesdeEvaluacion.length) {
      IngresoComponent.preguntaFinal = true;
    }

    return IngresoComponent.listaPreguntas.length == this.preguntasDesdeEvaluacion.length - 1
  }

  get encuestaDisponible() {
    //console.log("DISPONIBLES: "+JSON.stringify(this._auth.decode().evaluacionesDisponibles))

    return this._auth.decode().evaluacionesDisponibles
  }


  constructor(private evaluacionService: EvaluacionesService, private _router: Router, private _auth: AuthService) {
    this.entradaNegra = true;
    if (this._auth.decode().tipoUsuario == 0) {
      this._router.navigate(['/administracion/ingreso']);
    }
    this._auth.login({"usuario": this._auth.decode().rut, "clave": this._auth.decode().clave});


  }

  ngOnInit() {
  }

  enviar() {
    IngresoComponent.estado = true;
  }

  traerEvaluacion(ev) {
    IngresoComponent.listaPreguntas = [];
    this.evaluacionService.traerEvaluacion(ev).subscribe((d: any) => {
      IngresoComponent.evSeleccionada = ev;
      this.preguntasDesdeEvaluacion = d.preguntas;

    });

  }
  salir(){
    localStorage.removeItem("token");
    this._router.navigate(["login"]);
  }

  enviarEvaluacion() {
    this.preguntasDesdeEvaluacion = [];

    this.modalConfirmacion = false;
    let evaluacion: any = {};
    let fecha = new Date();
    evaluacion.fecha = "DIA: "+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+" \n HORA: "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
    evaluacion.preguntas = IngresoComponent.listaPreguntas;
    evaluacion.nombreEvaluado = this._auth.decode().nombre;
    evaluacion.rutEvaluado = this._auth.decode().rut;
    evaluacion.totalPreguntas = evaluacion.preguntas.length;
    evaluacion.idEvaluacion = IngresoComponent.evSeleccionada;

    this.evaluacionService.enviarEvaluacionRespondida(evaluacion).subscribe(
      d => {
        this._auth.login({"usuario": this._auth.decode().rut, "clave": this._auth.decode().clave});

        console.log(d);
      }
    );

  }


}
