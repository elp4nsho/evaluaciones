import {Component, OnInit} from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
import {EvaluacionesService} from "../services/evaluaciones.service";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  evaluacionesRespondidas: any = [];
  evaluacionSeleccionada: any = {};

  trabajadores = 0;
  empleadores = 0;
  sindicatos = 0;


  seleccionarEvaluacion(ev) {

    let lista = this.evaluacionesRespondidas.filter(e => e.idEvaluacionRespondida == ev);
    console.log(this.evaluacionesRespondidas)
    this.evaluacionSeleccionada = lista[0];
    console.log(this.evaluacionesRespondidas[0])


    this.trabajadores = lista[0].usuarios.filter(u => u.tipoUsuario == 1).length
    this.empleadores = lista[0].usuarios.filter(u => u.tipoUsuario == 2).length
    this.sindicatos = lista[0].usuarios.filter(u => u.tipoUsuario == 3).length

    console.log(this.trabajadores);
    console.log(this.empleadores);
    console.log(this.sindicatos);


    this.pintarGrafico(this.trabajadores,this.empleadores,this.sindicatos);

  }

  obtenerEvaluaconesRespondidas() {
    this.eService.traerEvaluacionesRespondidass().subscribe((d: any) => {
      console.log(d);


      this.evaluacionesRespondidas = d;

      this.seleccionarEvaluacion(this.evaluacionesRespondidas[0].idEvaluacionRespondida);

       /* d.forEach(ev => {
          console.log(ev);

          this.trabajadores = ev.usuarios.filter(u => u.tipoUsuario == 1).length
        this.empleadores = ev.usuarios.filter(u => u.tipoUsuario == 2).length
        this.sindicatos = ev.usuarios.filter(u => u.tipoUsuario == 3).length*/

     /*   let chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "Basic Column Chart in Angular"
          },
          data: [{
            type: "column",
            dataPoints: [
              {y: this.trabajadores, label: "Trabajadores"},
              {y: this.empleadores, label: "Empleadores"},
              {y: this.sindicatos, label: "Miembros sindicatos"}

            ]
          }]
        });

        chart.render();
*/

     /* });*/
    });
  }
  pintarGrafico(t, e, s) {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Cantidad de personas"
      },

      data: [{
        type: "column",
        dataPoints: [
          {y: t, label: "Trabajadores"},
          {y: e, label: "Empleadores"},
          {y: s, label: "Miembros sindicatos"}

        ]
      }]
    });

    chart.render();
  }


  constructor(private eService: EvaluacionesService) {

    this.obtenerEvaluaconesRespondidas();


  }

  ngOnInit() {

  }

}
