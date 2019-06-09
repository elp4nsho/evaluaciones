import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EvaluacionesService {

  constructor(private _http: HttpClient) { }

  host = "http://localhost:3000";
  //host = "http://n3gro.com:3000";


  enviarEvaluaciones(evaluaciones){

      return this._http.post(this.host+"/evaluaciones/enviar",evaluaciones);


  }

  traerEvaluacionesRespondidass(){

      return this._http.get(this.host+"/evaluaciones/respondidas");


  }

  enviarCorreo(correo,obs){
    let b:any = {};
    b.correo = correo;
    b.obs = obs;
    console.log(b);
    return this._http.post("http://localhost:3002", b);

  }


  traerEvaluaciones(){
    return this._http.get(this.host+"/evaluaciones/todas");

  }
  traerEvaluacion(idEv){
    return this._http.get(this.host+"/evaluaciones?evId="+idEv);

  }
  traerEvaluacionesRespondidas(){
    return this._http.get(this.host+"/evaluaciones?evId=");

  }

  enviarEvaluacionRespondida(ev){
    return this._http.post(this.host+"/evaluaciones/agregar",ev);
  }



}
