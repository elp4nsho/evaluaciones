const Pregunta = require("../Modelos/Pregunta");
const Mapper = require("../Utilidades/Mapper");
const PreguntaDAO = require("../DAO/PreguntaDAO");

/*exports.agregarUsuario = (datos)=>{

    var usuario = Mapper.transformar(Usuario,datos);
    return UsuarioDAO.agregarUsuario(usuario);

};*/
exports.mostrarPreguntasPorIdEvaluacion = ()=>{
    return PreguntaDAO.mostrarPreguntasPorIdEvaluacion();

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
