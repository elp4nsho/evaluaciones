import {Component, Input, OnInit} from '@angular/core';
import {IngresoComponent} from "../ingreso/ingreso.component";

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  pregunta1 = false;
  pregunta2 = false;
  pregunta3 = false;
  pregunta4 = false;
  pregunta5 = false;

  @Input("preguntaTitulo") preguntaTitulo;



  constructor() { }

  ngOnInit() {
  }



  seleccionarOpcion(v){
    let pregunta:any;
    let listaPreguntas = IngresoComponent.listaPreguntas;
    let preguntaDuplicada = false;
    pregunta = {};
    pregunta.titulo = this.preguntaTitulo;
    pregunta.opcion = v;
    console.log(pregunta);
    listaPreguntas.forEach(d=>{
      if(d.titulo == this.preguntaTitulo){
        d.opcion = v;
        preguntaDuplicada = true;
      }
    });
    if(!preguntaDuplicada){
        listaPreguntas.push(pregunta);
        IngresoComponent.listaPreguntas = listaPreguntas;
    }
    /*console.log("LISTA PREGUNTAS"+JSON.stringify(listaPreguntas));
*/
  }



}
