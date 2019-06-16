import {Component, Input, OnInit} from '@angular/core';
import {IngresoComponent} from "../ingreso/ingreso.component";

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {



  respondida = false;


  presionada = false;

  pregunta1 = false;
  pregunta2 = false;
  pregunta3 = false;
  pregunta4 = false;
  pregunta5 = false;

  @Input("preguntaTitulo") preguntaTitulo;
  @Input("preguntaFinal") preguntaUltima;


  get preguntaFinal(){
    console.log("PREGUTNA FINAL"+IngresoComponent.preguntaFinal)
    return IngresoComponent.preguntaFinal;
  }



  get ultimaPregunta(){
    return IngresoComponent.listaPreguntas
  }

  constructor() { }

  ngOnInit() {
  }



  seleccionarOpcion(v){



   /* if(this.presionada){*/

      /*console.log("ya no esta presionada")*/
      /*this.presionada = false;*/
 /*   }
    else{*/
      /*this.presionada = true;*/
      let pregunta:any;
      let listaPreguntas = IngresoComponent.listaPreguntas;
      let preguntaDuplicada = false;
      pregunta = {};
      pregunta.titulo = this.preguntaTitulo;
      pregunta.opcion = v;

      IngresoComponent.listaPreguntas.map(d=> {
        if (d.titulo == this.preguntaTitulo) {

          preguntaDuplicada = true;

          if (d.opcion == v) {
              IngresoComponent.listaPreguntas = IngresoComponent.listaPreguntas.filter(dd=>dd.titulo!=this.preguntaTitulo);
          }
          else {
            d.opcion = v;

          }
        }
      });




      if(!preguntaDuplicada){
        IngresoComponent.listaPreguntas.push(pregunta);
      }else{

      }

  /*  }*/
    console.log(IngresoComponent.listaPreguntas);











    /*
    /!*   listaPreguntas.forEach(d=>{
         if(d.titulo == this.preguntaTitulo){

           if(d.opcion == v){
             preguntaDuplicada = true;

           }else{
             d.opcion = v;
           }
         }
       });*!/

       if(!preguntaDuplicada){
           listaPreguntas.push(pregunta);
           IngresoComponent.listaPreguntas = listaPreguntas;
       }else{
         listaPreguntas = this.arrayRemove(listaPreguntas,this.preguntaTitulo);
       }
     }

      arrayRemove(arr, value) {

       return arr.filter(function(ele){
         return ele.titulo != value;
       });*/

  }


}
