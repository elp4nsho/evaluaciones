/*
* ////////////////////////////////////////////////////////////////////////////////////////////
*                           DAO tablas
*                                   -usuario
*
*
*   objeto:
*                   -objetos                    -Muestra todos los objetos
*                   -agregarObjeto(objeto)      -Agrega un objeto
*                   -editarObjeto(id,objeto)    -Edita un objeto
*                   -eliminarObjeto(id)         -Elimina un objeto
*
*
/

/
*
*   metodo que retorna todos los usuarios desde la base de datos
*
*
*/
const Usuario = require("../Modelos/Usuario");
const db = require("../Utilidades/DatabaseFunctions");
const Constantes = require("../Constantes/Constantes");

exports.mostrarEvalacion = async (id)=>{
    let sql ="SELECT * FROM evaluacionesRespondidas";
    let listaEvaluaciones = await db.devolverLaPromesaDeLaBaseDato(sql);
    sql = "SELECT * FROM preguntasRespondidas";
    let listaPreguntasRespondidas = await db.devolverLaPromesaDeLaBaseDato(sql);
    sql = "SELECT * FROM evaluacionAContestar";
    let listaEvaluacionesAContestar = await db.devolverLaPromesaDeLaBaseDato(sql);
    sql = "SELECT * FROM evaluacion";
    let listaEvaluacioness = await db.devolverLaPromesaDeLaBaseDato(sql);

    let evaluaciones = [];
    let evaluacion = {};
    let usuario = {};
    usuario.evaluaciones = listaEvaluaciones.filter(evaluacionRespondida=>{
        if(evaluacionRespondida.idUsuario == id){
            evaluacion = evaluacionRespondida;
            listaEvaluacionesAContestar.forEach(evaluacionAContestar=>{
                if(evaluacionRespondida.idEvaluacionAContestar == evaluacionAContestar.id){
                    evaluacion.infoEvaluacion = listaEvaluacioness.filter(ev => ev.id == evaluacionAContestar.idEvaluacion);
                }

            });
            evaluacion.preguntas = listaPreguntasRespondidas.filter(p=>p.idUsuario == id && p.idEvaluacionRespondida == evaluacionRespondida.idEvaluacionAContestar);
            evaluacion.nroPreguntas = evaluacion.preguntas.length;
            return true;
        }
    });
    return usuario;


};



exports.mostrarUsuarios = async () => {
    var listaUsuarios = [];
    let sql = Constantes.Consultas.traerTodo + Constantes.Tablas.Usuario.nombre;

    let usuarios = await db.devolverLaPromesaDeLaBaseDato(sql);
    sql = "SELECT * FROM usuariosAContestar";
    let evaluacionesDisponibles = await db.devolverLaPromesaDeLaBaseDato(sql);
    sql = "SELECT * FROM evaluacionesRespondidas";
    let evaluacionesRespondidas = await db.devolverLaPromesaDeLaBaseDato(sql);


    return new Promise(function (resolve, reject) {
        var usrObj = {}

        usuarios.forEach(u => {
            usrObj = u;
            usrObj.evaluacionesDisponibles = [];
            usrObj.evaluacionesRespondidas = [];

            evaluacionesDisponibles.forEach(ev => {
                if (ev.idUsuario == u.rut&&ev.contestado==0) {
                    usrObj.evaluacionesDisponibles.push(ev.idEvaluacionAContestar)
                }
            });
            evaluacionesRespondidas.forEach(ev => {
                if (ev.idUsuario == u.rut) {
                    usrObj.evaluacionesRespondidas.push(ev.idEvaluacionAContestar);
                }
            });

            listaUsuarios.push(u)
        });

        resolve(JSON.stringify(listaUsuarios));


    });


};

/*
* metodo que agrega un usuario a la basde de datos
*
* @param nombre: string
* @param rut: string
* @param clave: string
* @param correo: string
* @param apellido: string
*
* */
exports.agregarUsuario = async (u) => {
    let sql = `INSERT INTO usuario VALUES ('${u.rut}', '${u.nombre}', '${u.apellido}', '${u.correo}', ${u.tipoUsuario == undefined ? 1 : u.tipoUsuario}, '${u.clave}', NULL);`;
    return await db.devolverLaPromesaDeLaBaseDato(sql);
};


exports.editarUsuario = async (usuario) => {

    let sql =`UPDATE usuario SET nombre='${usuario.nombre}',apellido='${usuario.apellido}',correo='${usuario.correo}',tipoUsuario='${usuario.tipoUsuario}',clave='${usuario.clave}' WHERE rut='${usuario.rut}'`;
    return db.devolverLaPromesaDeLaBaseDato(sql);
};

exports.eliminarUsuario = async (usuario) => {

    let sql =`DELETE FROM usuario WHERE rut='${usuario.rut}'`;
    return db.devolverLaPromesaDeLaBaseDato(sql);
};


exports.mostrarUsuario = (usuario) => {
    let sql =`SELECT * FROM usuario WHERE rut='${usuario.rut}'`;
    return db.devolverLaPromesaDeLaBaseDato(sql);
};




