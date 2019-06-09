function Pregunta(
    id,
    idEvaluacion,
    negativa,
    titulo
){
    this.id = id || null;
    this.idEvaluacion= idEvaluacion || null;
    this.negativa = negativa || null;
    this.titulo = titulo || null;
}
module.exports = Pregunta;