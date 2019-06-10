const Usuario = require("../Modelos/Usuario");
const Mapper = require("../Utilidades/Mapper");
const UsuarioDAO = require("../DAO/UsuarioDAO");

exports.agregarUsuario = (datos)=>{

    var usuario = Mapper.transformar(Usuario,datos);
    return UsuarioDAO.agregarUsuario(usuario);

};
exports.mostrarUsuarios = ()=>{
    return UsuarioDAO.mostrarUsuarios();

};
exports.mostrarEvaluacion = (id)=>{
    return UsuarioDAO.mostrarEvalacion(id.rut);

};
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

}