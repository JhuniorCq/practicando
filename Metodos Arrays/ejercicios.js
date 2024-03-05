

let cadena = "hOlA sOy JHuNioR";
let cadenaRegex = /hola/i;

let valor = cadenaRegex.test(cadena); 
// console.log(valor);

// let valorMatch = "Hola Mundo".match(/o/);
// console.log(valorMatch);

let texto = "Hola Mundo";
let textoRegex = /o/g;
let valorMatch = texto.match(textoRegex);
console.log(valorMatch);
console.log(texto);