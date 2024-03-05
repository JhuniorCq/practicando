"use strict";
// Tipo de Dato "STRING"
const string = "Soy una cadena con comillas dobles";
const string2 = 'Soy una cadena con comillas simples';
const nombre = 'Jhunior';
const edad = 22;
const string3 = `Soy ${nombre} y tengo ${edad} años.`;
// Tipo de Dato "NUMBER"
const num1 = 10; //Número Entero
const num2 = 4.5; // Número Decimal
const num3 = 2.5e3; // Notación Exponencial
const num4 = 1.5e-2; // Notación Exponencial Negativa
const num5 = 0xA; // Hexadecimales (base 16) usando el prefijo "0x"
const num6 = 0o12; // Octales (base 8) usando el prefijo "0o"
const num7 = 0b1010; // Binarios (base 2) usando el prefijo "0b"
// Tipo de Dato "NULL"
const nulo = null;
// Tipo de Dato "UNDEFINED"
const sinDefinir = undefined;
// Tipo de Dato "BOOLEAN"
const bool1 = true;
const bool2 = false;
// Tipo de Dato "OBJECT"
const programador = {
    nombre: "Jhunior Ccora",
    edad: 22
};
//ARRAYS
// Arreglo de Números
const numeros = [1, 2, 3, 4, 5];
// Arreglo de Cadenas
const nombres = ["Juan", "Pedro", "María"];
// Arreglo de Booleanos
const valores = [true, false];
// Arreglo con Datos number, string y boolean
const array = [1, "dos", true];
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 10] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 11] = "Martes";
    DiaSemana[DiaSemana["Mi\u00E9rcoles"] = 12] = "Mi\u00E9rcoles";
    DiaSemana[DiaSemana["Jueves"] = 13] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 14] = "Viernes";
    DiaSemana[DiaSemana["S\u00E1bado"] = 15] = "S\u00E1bado";
    DiaSemana[DiaSemana["Domingo"] = 16] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
const diaHoy = DiaSemana.Lunes;
console.log(diaHoy, typeof diaHoy);
// FUNCIÓN COMÚN
function sumar(a, b) {
    return a + b;
}
;
// FUNCIÓN ANÓNIMA
const restar = function (a, b) {
    return b - a;
};
// FUNCIÓN FLECHA CON RETORNO IMPLÍCITO
const multiplicar = (a, b) => a * b;
// FUNCIÓN FLECHA CON RETORNO EXPLÍCITO
const saludar = (nombre, edad) => {
    return `Me llamo ${nombre} y tengo ${edad} años`;
};
console.log(saludar('Jhunior', 22));
const saludar2 = (nombre, edad) => {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    }
    else {
        return `Hola, mi nombre es ${nombre}.`;
    }
};
function saludar3(nombre, edad = 22) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad}`);
    }
}
