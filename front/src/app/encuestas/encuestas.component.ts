import {Component, OnInit} from '@angular/core';
import {EvaluacionesService} from "../services/evaluaciones.service";

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  c = 0;


  encuestasObtenidas: any = [];

  encuestaNombre = "";
  encuestaPreguntas = [];
  encuestaInicio = "";
  encuestaFin = "";
  encuestaId = "";

  seleccionarEncuesta(e) {
    this.encuestaNombre = e.nombre;
    this.encuestaPreguntas = e.preguntas;
    this.encuestaInicio = e.fechaInicio;
    this.encuestaFin = e.fechaFin;
    this.encuestaId = e.id;

  }

  obtenerEncuestas() {
    this.eService.traerEvaluaciones().subscribe(d => {
      this.encuestasObtenidas = d;
    })
  }


  constructor(private eService: EvaluacionesService) {
    this.obtenerEncuestas();
  }

  transformar(o) {
    let datos = [];
    for (let i in Object.keys(o)) {
      let obj: any = {};
      obj.nombre = Object.keys(o)[i];
      obj.valor = o[Object.keys(o)[i]];
      datos.push(obj);
      /*o[Object.keys(o)[i]] = datos[Object.keys(o)[i]];*/
    }
    console.log(datos);
    return datos;
  }

  borrar(id) {
    document.getElementById("input" + id).remove();
    document.getElementById("label" + id).remove();
    document.getElementById("btn" + id).remove();
    document.getElementById("d" + id).style.position = "absolute";

  }

  empujarNuevaPregunta(){
    this.encuestaPreguntas.push({id:'n'+this.c,titulo:'Nueva Pregunta'});
    this.c++;
  }


  agregar() {


    let e: any = {};
    e.id = this.encuestaId;
    e.nombre = this.encuestaNombre;
    e.preguntas = [];
    /*  e.preguntas = this.encuestaPreguntas;*/
    e.fechaInicio = this.encuestaInicio;
    e.fechaFin = this.encuestaFin;

    let preguntas: any = document.getElementsByName("pregunta");
    for (let i = 0; i < preguntas.length; i++) {
      e.preguntas.push({idEvaluacion: e.id, titulo: preguntas[i].value});
    }

    console.log(e);


    /*
        this.uService.agregar(u).subscribe(d => {
          this.limpiar();
          this.obtenerUsuarios();
        });*/

  }

  editar() {

    let e: any = {};
    e.id = this.encuestaId;
    e.nombre = this.encuestaNombre;
    e.preguntas = [];
    e.fechaInicio = this.encuestaInicio;
    e.fechaFin = this.encuestaFin;

    let preguntas: any = document.getElementsByName("pregunta");
    for (let i = 0; i < preguntas.length; i++) {
      e.preguntas.push({idEvaluacion: e.id, titulo: preguntas[i].value});
    }



      this.eService.editar(e).subscribe(d => {
        console.log(d);
      /*  this.limpiar();
        this.obtenerUsuarios();*/
      });
  }

  eliminar() {
    let e: any = {};

    e.nombre = this.encuestaNombre;
    e.preguntas = this.encuestaPreguntas;
    e.fechaInicio = this.encuestaInicio;
    e.fechaFin = this.encuestaFin;
    e.encuestaId = this.encuestaId;


    /* this.uService.eliminar(u).subscribe(d => {
       this.limpiar();
       this.obtenerUsuarios();
     });*/
  }


  limpiar() {
    this.encuestaNombre = "";
    this.encuestaPreguntas = [];
    this.encuestaInicio = "";
    this.encuestaFin = "";
    this.encuestaId = "";
  }


  ngOnInit() {
  }

}
