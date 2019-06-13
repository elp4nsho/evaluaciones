import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {EvaluacionesService} from "../services/evaluaciones.service";

@Component({
  selector: 'app-encuesta-componente',
  templateUrl: './encuesta-componente.component.html',
  styleUrls: ['./encuesta-componente.component.css']
})
export class EncuestaComponenteComponent implements OnInit {

  usuarioSeleccionado: any = {};


  @Input("evaluacion") evaluacion: any = [];

  modall: ElementRef;

  mostrarLista = false;
  mostrarDetalles = false;

  constructor(private renderer: Renderer2, private _evaluacion: EvaluacionesService) {
    this.usuarioSeleccionado.preguntas = [];
  }

  enviarCorreo(correo, obs) {
    let observaciones = prompt("Ingrese sus observaciones");

    let data = `<table><tr><th>Pregunta</th><th>Respuesta</th></tr>`;


    obs.forEach(d => {
      data += `<tr><td>${d.titulo}</td><td>${d.respuesta}</td></tr>`
    });
    data += `<table> <h1>Observaciones:</h1><p>${observaciones}</p>`;


    this._evaluacion.enviarCorreo(correo, data).subscribe(d => console.log(d))
  }

  scroll(el: HTMLElement) {
    //window.scrollTo(0, 0);
  }


  seleccionarUsuario(obj) {
    this.usuarioSeleccionado = obj;
  }

  focusiar() {


  }

  ngOnInit() {
  }

}
