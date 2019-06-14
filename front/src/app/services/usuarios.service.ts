import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Constants} from "../Constants/constants";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlBack = Constants.urlBack;

  constructor(private _http:HttpClient) { }

  usuarios(){
    return this._http.get(this.urlBack);
  }

  evaluacionesPorRut(rut){
    return this._http.post(this.urlBack+"/usuario/evaluacion",{rut:rut});
  }

  agregar(usuario){
    return this._http.post(this.urlBack+"/agregar",usuario);
  }
  editar(usuario){
    return this._http.post(this.urlBack+"/editar",usuario);
  }
  eliminar(usuario){
    return this._http.post(this.urlBack+"/eliminar",{rut:usuario.rut});
  }





}
