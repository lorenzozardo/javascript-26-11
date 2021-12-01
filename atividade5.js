var notal = prompt('Qual sua nota 1?');
var nota2 = prompt('Qual sua nota 2?');
var nota3 = prompt('Qual sua nota 3?');
var somaNota = document.getElementById('somaNota');
nota1;
nota2;
nota3;
if (nota1 > 2 || nota1 < 0) {
    prompt('Qual sua nota 1?');
}
else if (nota2 > 3 || nota2 < 0) {
    nota2
}
else if (nota3 > 5 || nota3 < 0) {
    nota3
}
else {
    var notaFinal = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
    somaNota.innerHTML = notaFinal; 
}
