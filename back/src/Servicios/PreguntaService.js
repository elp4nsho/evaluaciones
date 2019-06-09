const PreguntaDTO = require("../DTO/PreguntaDTO");
/*
function agregar(req){

    var datos = req.query;

    return new Promise((resolve,reject)=>{
        resolve(UsuarioDTO.agregarUsuario(datos));
    });
}*/

function mostrarPorId(){

    return new Promise((resolve,reject)=>{
        resolve(PreguntaDTO.mostrarPreguntasPorIdEvaluacion());
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