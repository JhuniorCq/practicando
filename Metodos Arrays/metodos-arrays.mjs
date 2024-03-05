//Dato: Los paréntesis luego del nombre de una función, EJECUTAN a esa función.

let string = "123";
let numero = string.toString(); // o también String(string);

let array = [1, 2, 3, 4, 5, 6];
let valorIncludes = array.includes(7); // Verifica si un elemento en específico se encuentra en el Array -> Devuelve true o false

let array2 = '1,2,3,4,5,6,7,8,9,10'
let valorSplit = array2.split(','); // Forma un array con partes de la cadena -> Entre parte y parte está el separador

let array3 = [9, 8,7, 6,5, 4,3, 2,1];
let valorJoin = array3.join(""); // Devuelve 987654321 -> String

let array4 = [1, 2, 3, 4, 5];
let valorMap = array4.map((elemento) => elemento*10); // Devuelve un nuevo array con los resultados del retorno para cada elemento -> No funciona con Cadenas

let valorConcat = array4.concat(array);

let operadorOR = false || 2; // El || NO acepta a ningún "falsy"
let operadorDFN = false ?? 2; // El ?? SÍ acepta a los "falsy", menos a "null" ni a "undefined"

let array5 = [10, 11, 12, 13, 14, 15];
let valorEvery = array5.every(elemento => elemento >= 10); // El every retornará true solo sí cada elemento hace que la función retorne true

let array6 = ['A', 'B', 'C', 'D', 'E', 'F', 'D']; // Para el primer elemento que haga que la función retorne true, el find chapará su valor y acabará su ejecución
let valorFind = array6.find(elemento => elemento === 'D'); // En caso el "find" NO encuentre el valor buscado, retornará "undefined"

let valorSome = array6.some(elemento => elemento === 'D'); // Para el primer elemento que haga que la función retorne true -> El some retornará true

let array7 = [1, 2, 3, 4, 5]; // Buscará a un elemento en específico y cuando encuentre su primera aparición retornará el índice de su posición
let valorIndexOf = array7.indexOf(35); // En caso no encuentre el Elemento indicado devolverá -1

let array8 = ["Hola", 3, 'A', true, 4, 5, 6, 'Jhunior'];
let valorSlice = array8.slice(1, 7); // Devuelve un array con todos los elementos desde el Índice 1 hasta el (7-1)

let array9 = [12, 3, 5, 29, 34, 23, 5, 7, 9, 10];
let valorFilter = array9.filter(elemento => elemento >= 10); // Cuando el elemento haga que la función retorne true, se agregará ese Elemento al nuevo Array

let objeto = {
    nombre: "Holiver",
    apellido: "Ccora",
    edad: 22,
    sexo: 'M'
}
let arrayClaves = Object.keys(objeto); // Obtengo un array de Claves

let array10 = "¿Hola, cómo te llamas?";
let valorReplace = array10.replace('a', 'A'); // Este método replace solo Reemplaza a la PRIMERA APARICIÓN
let valorReplaceAll = array10.replaceAll('a', 'A'); // Este método replaceAll Reemplaza a TODAAS LAS APARICIONES

let array11 = [1,3,6,'Ekide', 2,7,9];
array11.reverse();

// SORT ordena ARRAYS DE CADENAS, pero si es de Números se hace algo adicional
let array12 = ["Manzana", "Banana", "Cereza", "Durazno"]; 
array12.sort(); // Output: ["Banana", "Cereza", "Durazno", "Manzana"]

// Ordenar ASCENDENTEMENTE los Números
let array13 = [5, 2, 1, 4, 3];
array13.sort((a, b) => {
    return a - b; // Output: [1, 2, 3, 4, 5]
});

let array14 = [5, 2, 1, 4, 3];
array14.sort((a, b) => {
    return b - a; // Output: [5, 4, 3, 2, 1]
})

console.log(numero);
console.log(valorIncludes);
console.log(valorSplit);//Crea un array con partes de una cadena
console.log(valorJoin, typeof valorJoin);
console.log(valorMap);//Crea un nuevo array con todos los elementos modificados
console.log(valorConcat);
console.log(operadorOR);
console.log(operadorDFN);
console.log(valorEvery);
console.log(valorFind);
console.log(valorSome);
console.log(valorIndexOf);
console.log(valorSlice);
console.log(valorFilter);//Crear un nuevo array solo con los elementos filtrados
console.log(arrayClaves);
console.log(valorReplace);
console.log(valorReplaceAll);
console.log(array11);
console.log(array12);
console.log(array13);
console.log(array14);