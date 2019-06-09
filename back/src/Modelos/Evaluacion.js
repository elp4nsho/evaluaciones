function Evaluacion(
    id,
    nombre,
    fechaInicio,
    fechaFin,
    total,
    nroPreguntas,
    preguntas
){
    this.id = id || null;
    this.nombre = nombre || null;
    this.fechaInicio = fechaInicio || null;
    this.fechaFin = fechaFin || null;
    this.total = total || null;
    this.nroPreguntas = nroPreguntas || null;
    this.preguntas = preguntas || null;
}
module.exports = Evaluacion;