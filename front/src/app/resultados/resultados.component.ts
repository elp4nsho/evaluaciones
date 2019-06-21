import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
import {EvaluacionesService} from "../services/evaluaciones.service";
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  evaluacionesRespondidas: any = [];

  trabajadores = 0;
  empleadores = 0;
  sindicatos = 0;


  obtenerEvaluaconesRespondidas(){
    this.eService.traerEvaluacionesRespondidass().subscribe((d:any)=>{
      console.log(d);
      this.evaluacionesRespondidas = d;
      d.forEach(ev=>{
        console.log(ev);

        this.trabajadores = ev.usuarios.filter(u=>u.tipoUsuario==1).length
        this.empleadores = ev.usuarios.filter(u=>u.tipoUsuario==2).length
        this.sindicatos = ev.usuarios.filter(u=>u.tipoUsuario==3).length

        let chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "Basic Column Chart in Angular"
          },
          data: [{
            type: "column",
            dataPoints: [
              { y: this.trabajadores, label: "Trabajadores" },
              { y: this.empleadores, label: "Empleadores" },
              { y: this.sindicatos, label: "Miembros sindicatos" }

            ]
          }]
        });

        chart.render();



      });
    });
  }


  pintarGrafico(t,e,s){
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 2, label: "Trabajadores" },
          { y: 3, label: "Empleadores" },
          { y: 3, label: "Miembros sindicatos" }

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
