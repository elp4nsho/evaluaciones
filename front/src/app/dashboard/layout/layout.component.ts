import { Component, OnInit } from '@angular/core';
import { NavbarComponent} from '../../navbar/navbar.component';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls:["layout.component.css"]
})
export class LayoutComponent implements OnInit {

  get obtenerAdmin(){

    return this.auth.decode().tipoUsuario == 0;
  }


  constructor(private auth : AuthService) { }

  ngOnInit() {
  }


}
