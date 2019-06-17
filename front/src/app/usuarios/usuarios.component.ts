import {Component, OnInit} from '@angular/core';
import {UsuariosService} from "../services/usuarios.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public static usuarios: any = [];






  mostrar = false;

  rut = "";
  correo = "";
  clave = "";
  tipoUsuario = "";
  nombre = "";
  apellido = "";

  get usuarios() {

    return UsuariosComponent.usuarios;

  }

  obtenerUsuarios() {
    this.uService.usuarios().subscribe(d => {
      UsuariosComponent.usuarios = d;
    })
  }

  constructor(private uService: UsuariosService) {

    this.obtenerUsuarios();
  }

  ngOnInit() {
  }

  usuarioSeleccionado(u) {
    this.rut = u.rut;
    this.nombre = u.nombre;
    this.apellido = u.apellido;
    this.correo = u.correo;
    this.tipoUsuario = u.tipoUsuario;
    this.clave = u.clave;
  }

  agregar() {

    let u: any = {};
    u.rut = this.rut;
    u.nombre = this.nombre;
    u.apellido = this.apellido;
    u.correo = this.correo;
    u.tipoUsuario = this.tipoUsuario;
    u.clave = this.clave;

    this.uService.agregar(u).subscribe(d => {
      this.limpiar();
      this.obtenerUsuarios();
    })

  }

  editar() {

    let u: any = {};
    u.rut = this.rut;
    u.nombre = this.nombre;
    u.apellido = this.apellido;
    u.correo = this.correo;
    u.tipoUsuario = this.tipoUsuario;
    u.clave = this.clave;

    this.uService.editar(u).subscribe(d => {
      this.limpiar();
      this.obtenerUsuarios();
    });
  }

  eliminar() {
    let u: any = {};
    u.rut = this.rut;
    u.nombre = this.nombre;
    u.apellido = this.apellido;
    u.correo = this.correo;
    u.tipoUsuario = this.tipoUsuario;
    u.clave = this.clave;


    this.uService.eliminar(u).subscribe(d => {
      this.limpiar();
      this.obtenerUsuarios();
    });
  }


  limpiar() {
    this.rut = "";
    this.nombre = "";
    this.apellido = "";
    this.correo = "";
    this.tipoUsuario = "";
    this.clave = "";
  }


}
