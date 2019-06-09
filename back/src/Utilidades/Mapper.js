exports.transformar = (tipoFinal, datos) => {
    var o = new tipoFinal;

    for (i in Object.keys(o)) {
        o[Object.keys(o)[i]] = datos[Object.keys(o)[i]];
    }

    return o;

};