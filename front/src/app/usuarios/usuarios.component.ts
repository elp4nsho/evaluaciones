import {Component, OnInit} from '@angular/core';
import {UsuariosService} from "../services/usuarios.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public static usuarios: any = [];

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

  editar(u) {
    this.uService.editar(u).subscribe(d => {
      this.obtenerUsuarios();
    });
  }

  eliminar(u) {
    this.uService.eliminar(u).subscribe(d => {
      this.obtenerUsuarios();
    });
  }


}
