const lamysql = require('mysql');


devolverDatos = async (sql) => {
    let datos;

    try {
        datos = await devolverLaPromesaDeLaBaseDato(sql);
        return datos
    } catch (e) {
        return e
    }

};


function devolverLaPromesaDeLaBaseDato(sql) {
    return new Promise((o, n) => {

        let c = conexion();
        c.query(sql, (e, r) => {
            if (r !== undefined) {
                o(r);
                c.destroy();
            } else {
                n(e)
            }
        });
    });

}

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

exports.devolverLaPromesaDeLaBaseDato = devolverLaPromesaDeLaBaseDato;
exports.conexion = conexion;
exports.devolverDatos = devolverDatos;
