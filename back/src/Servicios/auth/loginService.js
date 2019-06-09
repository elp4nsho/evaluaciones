const UsuarioService = require("../UsuarioService");
const jwtGenerator = require("./jwtGenerator");

exports.login = (req) =>{
    var datos = req.body;
    var u = datos.usuario;
    var c = datos.clave;
    loguear = new Promise((o, n) => {
        if(u == undefined && c == undefined){
            o(false);
        }
        var usuarios;
        UsuarioService.mostrar().then((d) => {
            usuarios = JSON.parse(d);
            for(var i in usuarios){
                if(u===usuarios[i].rut){
                    if(c===usuarios[i].clave){

                        var token = jwtGenerator.generateToken(usuarios[i]);

                        o(token);
                        break;
                    }
                }

            }
            o(false);

        }).catch(e=>n(e));
    });

    return loguear;

};