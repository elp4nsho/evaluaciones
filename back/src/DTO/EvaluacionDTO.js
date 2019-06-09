const Usuario = require("../Modelos/Evaluacion");
const Mapper = require("../Utilidades/Mapper");
const EvaluacionDAO = require("../DAO/EvaluacionDAO");

/*exports.agregarUsuario = (datos)=>{

    var usuario = Mapper.transformar(Usuario,datos);
    return UsuarioDAO.agregarUsuario(usuario);

};*/
exports.mostrarEvaluacionesParaTomar = ()=>{
    return EvaluacionDAO.mostrarEvaluacionesParaTomar();

};
exports.mostrarEvaluacionPorId = (evId)=>{
    return EvaluacionDAO.mostrarEvaluacionPorId(evId);

};
exports.enviarEvaluacion = (datos)=>{
    return EvaluacionDAO.enviarEvaluacion(datos);

};
exports.agregarEvaluacionRespondida = (datos)=>{
    return EvaluacionDAO.agregarEvaluacionRespondida(datos);

};
exports.mostrarEvaluacionesRespondidas = ()=>{
    return EvaluacionDAO.mostrarEvaluacionesRespondidas();

};
/*
exports.editarUsuario=(datos)=>{
    var usuario = Mapper.transformar(Usuario,datos);
    return UsuarioDAO.editarUsuario(usuario);

}
exports.eliminarUsuario=(datos)=>{
    var usuario = Mapper.transformar(Usuario,datos);
    return UsuarioDAO.eliminarUsuario(usuario);

}
exports.mostrarUsuario=(datos)=>{
    var usuario = Mapper.transformar(Usuario,datos);
    return UsuarioDAO.mostrarUsuario(usuario);

}*/
