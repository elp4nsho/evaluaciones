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
    listaPreguntas.forEach(d=>{
      if(d.titulo == this.preguntaTitulo){

        if(d.opcion == v){
          preguntaDuplicada = true;

        }else{
          d.opcion = v;
        }
      }
    });
    if(!preguntaDuplicada){
        listaPreguntas.push(pregunta);
        IngresoComponent.listaPreguntas = listaPreguntas;
    }else{
      listaPreguntas = this.arrayRemove(listaPreguntas,this.preguntaTitulo);
    }
    console.log("LISTA PREGUNTAS"+JSON.stringify(listaPreguntas));
  }

   arrayRemove(arr, value) {

    return arr.filter(function(ele){
      return ele.titulo != value;
    });

  }


}
