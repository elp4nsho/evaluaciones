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
const Tablas = require("../Constantes/Tablas");

exports.mostrarUsuarios = () => {

    return new Promise(function (resolve, reject) {

        console.log(Tablas)





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
exports.agregarUsuario = (usuario) => {
    var u = new Usuario();
    u = usuario;
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "evaluaciones"
    });
    var sql = `INSERT INTO usuario VALUES ('${u.rut}', '${u.nombre}', '${u.apellido}', '${u.correo}', '0', '${u.clave}', NULL);`;
    var c = new Promise((o, n) => {
        con.connect(function (err) {
            if (err) throw err;
            con.query(sql, function (err, result) {
                if (err) n(err);
                con.destroy();
                o(result);
            });
        });
    });
    return c;
};


exports.editarUsuario = (
   usuario
) => {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "evaluaciones"
    });
    var u = new Usuario();
    u = usuario;
    var sql =
        `UPDATE usuario SET rut='${usuario.rut}',nombre='${usuario.nombre}',apellido='${usuario.apellido}',correo='${usuario.correo}',tipoUsuario='${usuario.tipoUsuario}',clave='${usuario.clave}',evaluacionesRespondidas='${usuario.evaluacionesRespondidas}' WHERE id=${usuario.id}`;
    //console.log(sql);

    var c = new Promise((o, n) => {
        con.connect(function (err) {
            if (err) throw err;
            con.query(sql, function (err, result) {
                if (err) n(err);
                con.destroy();
                o(result);
            });
        });
    });
    return c;
};

exports.eliminarUsuario = (
   usuario
) => {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "evaluaciones"
    });
    var u = new Usuario();
    u = usuario;
    var sql =
        `DELETE FROM usuario WHERE id=${usuario.id}`;
    //console.log(sql);

    var c = new Promise((o, n) => {
        con.connect(function (err) {
            if (err) throw err;
            con.query(sql, function (err, result) {
                if (err) n(err);
                con.destroy();
                o(result);
            });
        });
    });
    return c;
};


exports.mostrarUsuario = (
   usuario
) => {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "evaluaciones"
    });
    var u = new Usuario();
    u = usuario;
    var sql =
        `SELECT * FROM usuario WHERE id=${usuario.id}`;
    console.log(sql);

    var c = new Promise((o, n) => {
        con.connect(function (err) {
            if (err) throw err;
            con.query(sql, function (err, result) {
                if (err) n(err);
                con.destroy();
                o(result);
            });
        });
    });
    return c;
};




