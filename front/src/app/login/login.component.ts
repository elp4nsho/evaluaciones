import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';


// @ts-ignore
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  usuario = "";
  clave = "admin";

  get vacioUsuario(){
    console.log(this.usuario);
    return this.usuario;
  }


  constructor(private _router: Router, private _authService: AuthService) {
    if (localStorage.getItem('token') != null) {
      if (localStorage.getItem('token').length > 0) {
        this._router.navigate(['dashboard/home']);
      }
    }
  }

  ngOnInit() {
  }

  login(f) {
    this._authService.login(f.value);
  }

  loginAdmin() {
    this._authService.loginAdmin();
  }

}
