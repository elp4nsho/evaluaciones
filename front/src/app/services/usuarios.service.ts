import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  host = "http://localhost:3000";

  constructor(private _http:HttpClient) { }

  usuarios(){
    return this._http.get(this.host);
  }


}
