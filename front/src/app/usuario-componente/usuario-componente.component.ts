import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-usuario-componente',
  templateUrl: './usuario-componente.component.html',
  styleUrls: ['./usuario-componente.component.css']
})
export class UsuarioComponenteComponent implements OnInit {

activado = false;

  @Input("nombre") nombre: string;
  @Input("rut") rut: string;
  @Input("apellido") apellido: string;
  @Input("correo") correo: string;
  @Input("tipoUsuario") tipoUsuario: string;

  constructor() { }

  ngOnInit() {
  }

}
