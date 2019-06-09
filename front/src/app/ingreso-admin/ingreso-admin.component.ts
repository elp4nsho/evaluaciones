import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsuariosService} from "../services/usuarios.service";

import {NgZone} from "@angular/core";
import {EvaluacionesService} from "../services/evaluaciones.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-ingreso-admin',
  templateUrl: './ingreso-admin.component.html',
  styleUrls: ['./ingreso-admin.component.css']
})
export class IngresoAdminComponent implements OnInit {

  constructor(private _auth:AuthService,private eService: EvaluacionesService, private uService: UsuariosService) {
    this.traerEvaluaciones();

  }
  @ViewChild("evaluacionSelect") evaluacionesSelect : ElementRef;
  listaUsuarios;
  usuariosSeleccionados = [];

  evaluaciones:any =[];

  ngOnInit() {
    this.uService.usuarios().subscribe(d => {
      console.log(d);
      this.listaUsuarios = d;
    }, e => {
      console.log(e);

    });

  }

  traerEvaluaciones(){
    this.eService.traerEvaluaciones().subscribe(
      d=> this.evaluaciones = d
    )
  }


  aniadirALista(obj) {


    let repetido = false;
    let listaUsuarios = [];

    this.usuariosSeleccionados.forEach(d => {
      if (d.rut == obj.rut) {

        repetido = true;
      } else{
        listaUsuarios.push(d)
      }
    });
    if(!repetido){
      listaUsuarios.push(obj)
    }
    console.log(listaUsuarios)
    this.usuariosSeleccionados = listaUsuarios;

  }


  enviarEvaluaciones() {

    let datos:any = {};
    datos.idEvaluacion = this.evaluacionesSelect.nativeElement.value;
    datos.usuarios = [];
    let hoy = new Date();
    datos.fechaInicio = hoy;
    hoy.setDate(hoy.getDate()+5);
    datos.fechaFin = hoy;
    let ev = this.evaluacionesSelect.nativeElement.value;

    this.usuariosSeleccionados.forEach(d=>{
      let u:any = {};
      u.id = d.rut;
      u.evaluacion = ev;
      datos.usuarios.push(u);
    });

console.log(datos);
    this.eService.enviarEvaluaciones(datos).subscribe(d => {
      console.log(this.evaluacionesSelect.nativeElement.value);

      console.log(d);
    });
  }


}
