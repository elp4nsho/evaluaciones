import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Constants} from "../Constants/constants";

@Injectable({
  providedIn: 'root'
})
export class EvaluacionesService {

  constructor(private _http: HttpClient) { }


  urlBack = Constants.urlBack;
  urlCorreo = Constants.urlCorreo;



  enviarCorreoPDF(data){
    return this._http.post(this.urlCorreo+"/pdf",data);
  }

enviarCorreoInvitacion(correo){
    let datos = {"correo":correo}
    return this._http.post(this.urlCorreo+"/",datos);


}


  enviarEvaluaciones(evaluaciones){

      return this._http.post(this.urlBack+"/evaluaciones/enviar",evaluaciones);


  }

  agregar(e){
    return this._http.post(this.urlBack+"/evaluaciones/agregarevaluacion",e);
  }


  eliminar(e){
    return this._http.post(this.urlBack+"/evaluaciones/eliminar",e);
  }


  editar(e){
    return this._http.post(this.urlBack+"/evaluaciones/editar",e);
  }


  traerEvaluacionesRespondidass(){

      return this._http.get(this.urlBack+"/evaluaciones/respondidas");


  }

  enviarCorreo(correo,obs){
    let b:any = {};
    b.correo = correo;
    b.obs = obs;
    console.log(b);
    return this._http.post(this.urlCorreo, b);

  }


  traerEvaluaciones(){
    return this._http.get(this.urlBack+"/evaluaciones/todas");

  }
  traerEvaluacion(idEv){
    return this._http.get(this.urlBack+"/evaluaciones?evId="+idEv);

  }
  traerEvaluacionesRespondidas(){
    return this._http.get(this.urlBack+"/evaluaciones?evId=");

  }

  enviarEvaluacionRespondida(ev){
    return this._http.post(this.urlBack+"/evaluaciones/agregar",ev);
  }



}
