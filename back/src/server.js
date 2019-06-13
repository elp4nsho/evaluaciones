const express = require('express');
const app = express();
const port = 3000;

const dao = require("./DAO/UsuarioDAO");
const loginService = require("./Servicios/auth/loginService");
const UsuarioService = require("./Servicios/UsuarioService");
const EvaluacionService = require("./Servicios/EvaluacionService");

app.get('/', (req, res) => {
    var u = req.query.usuario;
    var c = req.query.clave;
    /* loginService.login(u, c).catch(e => res.end(e.toString())).then(d => res.end(d.toString()));*/
    UsuarioService.mostrar().catch(e => res.end(e.toString())).then(d => {

        /*   console.log(d.toString())*/
        res.set({"access-control-allow-origin": "*"});
        res.set({"content-type": "application/json"});
        res.end(d.toString())
    });

});


app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.post('/login', (req, res) => {
    res.set({"access-control-allow-origin": "*"});

    loginService.login(req).catch(e => {
        res.end(e.toString())
    }).then(d => {
        if (!d) {
            res.status(901);
            res.end("FALSO");
        } else {
            res.end(JSON.stringify(d));
        }
    });


});

app.options('/login', (req, res) => {
    res.set({"access-control-allow-origin": "*", "Access-Control-Allow-Headers": "content-type"});
    res.json({});

});
app.options('/usuario/evaluacion', (req, res) => {
    res.set({"access-control-allow-origin": "*", "Access-Control-Allow-Headers": "content-type"});
    res.json({});

});
app.options('/evaluaciones/enviar', (req, res) => {
    res.set({"access-control-allow-origin": "*", "Access-Control-Allow-Headers": "content-type"});
    res.json({});

});
app.options('/evaluaciones/agregar', (req, res) => {
    res.set({"access-control-allow-origin": "*", "Access-Control-Allow-Headers": "content-type"});
    res.json({});

});


app.get('/agregar', (req, res) => {
    UsuarioService.agregar(req).catch(e => {
        res.end(e.toString())
    }).then(d => {
        res.end(JSON.stringify(d))
    });
});
app.get("/editar", (req, res) => {
    UsuarioService.editar(req).catch(e => {
        res.end(e.toString())
    }).then(d => {
        res.end(JSON.stringify(d))
    });
});

app.get("/eliminar", (req, res) => {
    UsuarioService.eliminar(req).catch(e => {
        res.end(e.toString())
    }).then(d => {
        res.end(JSON.stringify(d))
    });
});
app.get("/usuario", (req, res) => {
    UsuarioService.mostrarUsuario(req).catch(e => {
        res.end(e.toString())
    }).then(d => {
        res.end(JSON.stringify(d))
    });
});


app.post("/usuario/evaluacion", (req, res) => {
    res.set({"access-control-allow-origin": "*", "Access-Control-Allow-Headers": "content-type"});

    UsuarioService.mostrarEvaluacion(req).catch(e => {
        res.end(e.toString())
    }).then(d => {
        res.end(JSON.stringify(d))
    });
});


app.get("/evaluaciones/todas", (req, res) => {
    res.set({"access-control-allow-origin": "*", "Access-Control-Allow-Headers": "content-type"});

    EvaluacionService.mostrarEvaluacionesParaTomar().catch(e => {
        res.end(e.toString())
    }).then(d => {
        res.end(JSON.stringify(d))
    });
});
app.get("/evaluaciones", (req, res) => {
    res.set({"access-control-allow-origin": "*", "Access-Control-Allow-Headers": "content-type"});

    EvaluacionService.mostrarPorId(req.query.evId).catch(e => {
        res.end(e.toString())
    }).then(d => {
        res.end(JSON.stringify(d))
    });
});
app.get("/evaluaciones/respondidas", (req, res) => {
    res.set({"access-control-allow-origin": "*", "Access-Control-Allow-Headers": "content-type"});

    EvaluacionService.mostrarEvaluacionesRespondidas().catch(e => {
        res.end(e.toString())
    }).then(d => {
        res.end(JSON.stringify(d))
    });
});

app.post("/evaluaciones/enviar", (req, res) => {
    res.set({"access-control-allow-origin": "*"});

    EvaluacionService.enviarEvaluacion(req).catch(e => {
        res.end(e.toString())
    }).then(d => {
        res.end(JSON.stringify(d))
    });
});

app.post("/evaluaciones/agregar", (req, res) => {
    res.set({"access-control-allow-origin": "*"});

    EvaluacionService.agregarEvaluacionRespondida(req).catch(e => {
        res.end(e.toString())
    }).then(d => {
        res.end(JSON.stringify(d))
    });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))