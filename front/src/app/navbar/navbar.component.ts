import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  get usuario(){
    return this._auth.decode().nombre;
  }


  constructor(private _auth: AuthService,private _router: Router) { }

  ngOnInit() {
  }

  salir(){
    localStorage.removeItem("token");
    this._router.navigate(["login"]);
  }

}
