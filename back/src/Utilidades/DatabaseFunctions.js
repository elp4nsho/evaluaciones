const lamysql = require('mysql');

function devolverLaPromesaDeLaBaseDato(sql) {
    return new Promise((o, n) => {

        let c = conexion();
        c.query(sql, (e, r) => r !== undefined ? o(r) : n(e));
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
