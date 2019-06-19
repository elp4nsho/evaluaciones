const EvaluacionDTO = require("../DTO/EvaluacionDTO");
/*
function agregar(req){

    var datos = req.query;

    return new Promise((resolve,reject)=>{
        resolve(UsuarioDTO.agregarUsuario(datos));
    });
}*/

function mostrarEvaluacionesParaTomar(){

    return new Promise((resolve,reject)=>{
        resolve(EvaluacionDTO.mostrarEvaluacionesParaTomar());
    });
}
function editarEvaluacion(req){

    return new Promise((resolve,reject)=>{
        resolve(EvaluacionDTO.editarEvaluacion(req.body));
    });
}
function mostrarPorId(evId){

    return new Promise((resolve,reject)=>{
        resolve(EvaluacionDTO.mostrarEvaluacionPorId(evId));
    });
}

function enviarEvaluacion(req){
    return new Promise((resolve,reject)=>{
        resolve(EvaluacionDTO.enviarEvaluacion(req.body));
    });
}

function agregarEvaluacionRespondida(req){
    return new Promise((resolve,reject)=>{
        resolve(EvaluacionDTO.agregarEvaluacionRespondida(req.body));
    });
}
function agregarEvaluacionRespondida(req){
    return new Promise((resolve,reject)=>{
        resolve(EvaluacionDTO.agregarEvaluacionRespondida(req.body));
    });
}
function mostrarEvaluacionesRespondidas(){
    return new Promise((resolve,reject)=>{
        resolve(EvaluacionDTO.mostrarEvaluacionesRespondidas());
    });
}

/*
function editar(req){

    var datos = req.query;
    return new Promise((resolve,reject)=>{
        resolve(UsuarioDTO.editarUsuario(datos));
    });

}

function eliminar(req){

    var datos = req.query;
    return new Promise((resolve,reject)=>{
        resolve(UsuarioDTO.eliminarUsuario(datos));
    });

}

function mostrarUsuario(req){

    var datos = req.query;
    return new Promise((resolve,reject)=>{
        resolve(UsuarioDTO.mostrarUsuario(datos));
    });

}*/

/*

exports.agregar = agregar;
exports.editar = editar;
exports.mostrar = mostrar;
exports.mostrarUsuario = mostrarUsuario;
exports.eliminar = eliminar;
*/
exports.mostrarPorId = mostrarPorId;
exports.enviarEvaluacion = enviarEvaluacion;
exports.agregarEvaluacionRespondida = agregarEvaluacionRespondida;
exports.editarEvaluacion = editarEvaluacion;
exports.mostrarEvaluacionesRespondidas = mostrarEvaluacionesRespondidas;
exports.mostrarEvaluacionesParaTomar = mostrarEvaluacionesParaTomar;
