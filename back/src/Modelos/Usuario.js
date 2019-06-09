function Usuario(
    rut,
    nombre,
    evaluacionesRespondidas,
    evaluacionesDisponibles,
    apellido,
    correo,
    tipoUsuario,
    clave,
    id) {

    this.rut = rut || null;
    this.nombre = nombre || null;
    this.evaluacionesRespondidas = evaluacionesRespondidas || null;
    this.evaluacionesDisponibles = evaluacionesDisponibles || null;
    this.apellido = apellido || null;
    this.correo = correo || null;
    this.tipoUsuario = tipoUsuario || null;
    this.clave = clave || null;
    this.id = id || null;
/*
    this.setRut = function(rut) { this.rut = rut; }
    this.getRut = function() { return this.rut; }
    this.setNombre = function(nombre) { this.nombre = nombre; }
    this.getNombre = function() { return this.nombre; }
    this.setEvaluacionesRespondidas = function(evaluacionesRespondidas) { this.evaluacionesRespondidas = evaluacionesRespondidas; }
    this.getEvaluacionesRespondidas = function() { return this.evaluacionesRespondidas; }
    this.setApellido = function(apellido) { this.apellido = apellido; }
    this.getApellido = function() { return this.apellido; }
    this.setCorreo = function(correo) { this.correo = correo; }
    this.getCorreo = function() { return this.correo; }
    this.setTipoUsuario = function(tipoUsuario) { this.tipoUsuario = tipoUsuario; }
    this.getTipoUsuario = function() { return this.tipoUsuario; }
    this.setClave = function(clave) { this.clave = clave; }
    this.getClave = function() { return this.clave; }
    this.setId = function(id) { this.id = id; }
    this.getId = function() { return this.id; }*/

}

module.exports = Usuario;