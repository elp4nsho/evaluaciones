import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { UsuariosService} from "../services/usuarios.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  faCoffee = faCoffee;

  evaluacionesRespondidas:any = [];


  constructor(private _auth:AuthService,private uService : UsuariosService) {
    this.traerEvaluacionesRespondidas();
  }

  ngOnInit() {
  }

  traerEvaluacionesRespondidas(){
    this.uService.evaluacionesPorRut(this._auth.decode().rut).subscribe((d:any)=>{
      this.evaluacionesRespondidas = d.evaluaciones;
    });
  }

}
