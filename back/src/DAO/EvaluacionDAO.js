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
const {promisify} = require('util');
const Evaluacion = require("../Modelos/Evaluacion");
const Pregunta = require("../Modelos/Pregunta");
const PreguntaService = require("../Servicios/PreguntaService");
const UsuarioService = require("../Servicios/UsuarioService");
const Utilidades = require("../Utilidades/Mapper");
const lamysql = require('mysql');


const conexion = () => {
    let cc = lamysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "evaluaciones"
    });
    cc.connect();
    return cc;
};


exports.mostrarEvaluacionesParaTomar = async () => {
    let sql = "SELECT * FROM evaluacion";
    let evaluaciones = await devolverLaPromesaDeLaBaseDato(sql);
    let preguntas= await PreguntaService.mostrarPorId();

    evaluaciones.map(ev=>{
        ev.preguntas = preguntas.filter(p=>p.idEvaluacion == ev.id);
    });

    return evaluaciones;


};


exports.mostrarEvaluacionPorId = (evId) => {


    return new Promise(function (resolve, reject) {

        let listaEvaluaciones = [];

        var cona = conexion();
        /*cona.query(consultaa, function (err, result) {
            if (err) reject(err);
            console.log("EVALUACION ", result[0].idEvaluacion);
            let idEva = result[0].idEvaluacion;


            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database: "evaluaciones"
            });


            var sql = "select * from evaluacion";

            con.connect(function (err) {
                if (err) throw err;
                con.query(sql, function (err, result) {
                    if (err) reject(err);
                    con.destroy();


                    var ev = new Evaluacion();

                    result.forEach(d => {
                        if (d.id == idEva) {
                            ev = Utilidades.transformar(Evaluacion, d);
                            ev.preguntas = [];
                            PreguntaService.mostrarPorId().then(da => {
                                JSON.parse(da).forEach(pre => {
                                    if (pre.idEvaluacion == idEva) {
                                        ev.preguntas.push(pre)
                                    }
                                });
                                resolve(ev);


                            });

                        }

                    });


                });
            });


        });
*/
        let sql = `SELECT  * FROM evaluacionAContestar WHERE id = ${evId}`;
        cona.query(sql, (e, r) => {
            if (e) reject(e);
            var ev = {};

            r.forEach(evaluacion => {
                ev = evaluacion;
                ev.preguntas = []

                sql = `SELECT * FROM pregunta WHERE idEvaluacion = ${evaluacion.idEvaluacion}`;
                let cone = conexion();
                cone.query(sql, (e, r) => {
                    if (e) reject(e);
                    r.forEach(pregunta => {
                        ev.preguntas.push(pregunta);
                    });
                    ev.numeroPreguntas = r.length;
                    resolve(ev);

                });

            });

        });


    });


};
exports.enviarEvaluacion = (datos) => {


    return new Promise(function (resolve, reject) {

        var mysql = require('mysql');


        let fecha = new Date();
        fecha = "DIA: "+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+" \n HORA: "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();

        var consulta = `INSERT INTO evaluacionAContestar VALUES ('', '${datos.idEvaluacion}', '${fecha}', '${fecha}')`;

        let ee = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "evaluaciones"
        });
        ee.connect();

        ee.query(consulta, function (err, result) {
            if (err) reject(err);


            datos.usuarios.forEach(d => {

                sql = `INSERT INTO usuariosAContestar VALUES ('${result.insertId}', '${d.id}',0)`;

                let ii = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "",
                    database: "evaluaciones"
                });
                ii.connect();

                ii.query(sql, function (err, result) {
                    if (err) reject(err);
                });

            });

            datos.usuarios.forEach(d => {

                sql = `UPDATE usuario SET evaluacionesDisponibles = '${result.insertId}' WHERE usuario.rut = '${d.id}';`;

                let aa = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "",
                    database: "evaluaciones"
                });
                aa.connect();

                aa.query(sql, function (err, result) {
                    if (err) reject(err);
                });

            });


        });


        resolve("OK");


    });


};

function devolverLaPromesaDeLaBaseDato(sql) {
    return new Promise((o, n) => {

        let c = conexion();
        c.query(sql, (e, r) => r !== undefined ? o(r) : n(e));
    });
}

async function usuarioPorRut(rut) {
    let sql = `SELECT * FROM usuario WHERE rut = '${rut}'`;

    let usuario = await devolverLaPromesaDeLaBaseDato(sql)

    return usuario;
}

exports.mostrarEvaluacionesRespondidas = async () => {
    var preguntaObj = {
        titulo: "",
        respuesta: ""
    };

    var usuarioObj = {
        rut: "",
        nombre: "",
        preguntas: []
    };

    var listaDeEvaluacionesRespondidas = [];

    var evaluacionRespondida = {
        idEvaluacionRespondida: "",
        fechaEvaluacionRespondida: "",
        usuarios: []
    };

    return new Promise(async (resolve, reject) => {

        let c = conexion();
        let sql = "SELECT * FROM preguntasRespondidas";
        let preguntasRespondidas = await devolverLaPromesaDeLaBaseDato(sql);
        sql = "SELECT * FROM usuariosAContestar";
        sql = "SELECT * FROM usuario INNER join usuariosAContestar on usuario.rut = usuariosAContestar.idUsuario";
        let usuariosAContestar = await devolverLaPromesaDeLaBaseDato(sql);
        sql = "SELECT * FROM evaluacionAContestar";
        let evaluacionesAMostrar = await devolverLaPromesaDeLaBaseDato(sql);


        evaluacionesAMostrar.forEach( evaluacion => {
            evaluacionRespondida.idEvaluacionRespondida = evaluacion.id;
            evaluacionRespondida.fechaEvaluacionRespondida = evaluacion.fechaInicio;
            evaluacionRespondida.usuarios = [];

            usuariosAContestar.forEach( usuario => {
                if (usuario.idEvaluacionAContestar == evaluacion.id) {
                    //let sql = `SELECT * FROM usuario WHERE rut='${usuario.idUsuario}'`;
                    // let uu = await devolverLaPromesaDeLaBaseDato(sql);
                    usuarioObj.rut = usuario.rut;
                    usuarioObj.nombre = usuario.nombre;
                    usuarioObj.correo = usuario.correo;



                    usuarioObj.preguntas = [];

                    preguntasRespondidas.forEach(pregunta => {

                        if (pregunta.idUsuario == usuario.idUsuario && pregunta.idEvaluacionRespondida == evaluacion.id) {
                            preguntaObj.titulo = pregunta.titulo;
                            preguntaObj.respuesta = pregunta.respuesta;
                            usuarioObj.preguntas.push(JSON.parse(JSON.stringify(preguntaObj)));

                        }
                    });
                    evaluacionRespondida.usuarios.push(JSON.parse(JSON.stringify(usuarioObj)));


                }
            });
            //console.log(evaluacionRespondida);

            //console.log(evaluacionRespondida.usuarios);

            listaDeEvaluacionesRespondidas.push(JSON.parse(JSON.stringify(evaluacionRespondida)));

        });


        resolve(listaDeEvaluacionesRespondidas);

        c.destroy();


    });

};

exports.agregarEvaluacionRespondida = (datos) => {

    console.log("HOLA");
    var quer = `UPDATE usuariosAContestar SET contestado = 1 WHERE idUsuario = '${datos.rutEvaluado}' AND idEvaluacionAContestar = '${datos.idEvaluacion}'`;
    co = conexion();
    co.query(quer);





    return new Promise(function (resolve, reject) {

        var mysql = require('mysql');
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "evaluaciones"
        });


        var sql = `INSERT INTO evaluacionesRespondidas VALUES (NULL, '${datos.idEvaluacion}', '${datos.rutEvaluado}', '${datos.fecha}');`;
        var insertId = "";
        con.connect(function (err) {
            if (err) throw err;
            con.query(sql, function (err, result) {
                if (err) reject(err);

                datos.preguntas.forEach(pregunta => {


                    let aa = mysql.createConnection({
                        host: "localhost",
                        user: "root",
                        password: "",
                        database: "evaluaciones"
                    });
                    aa.connect();

                    let sqll = `INSERT INTO preguntasRespondidas VALUES (NULL, '${datos.idEvaluacion}', '${pregunta.titulo}', '${pregunta.opcion}','${datos.rutEvaluado}');`;

                    aa.query(sqll, function (err, result) {
                        if (err) reject(err);
                    });


                });
            });

            let ee = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database: "evaluaciones"
            });
            ee.connect();

            let sqli = `UPDATE usuario SET evaluacionesRespondidas  = '${datos.idEvaluacion}', evaluacionesDisponibles = '' WHERE usuario.rut = '${datos.rutEvaluado}';`;


            ee.query(sqli, function (err, result) {
                if (err) reject(err);
            });

        });


        resolve("OK");
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
/*
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
    var sql = `INSERT INTO usuario VALUES ('${u.rut}', '${u.nombre}', '${u.apellido}', '${u.correo}', '0', '${u.clave}', NULL, '0');`;
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




*/
