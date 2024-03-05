

// Tipo de Dato "STRING"
const string: string = "Soy una cadena con comillas dobles";
const string2: string = 'Soy una cadena con comillas simples';

const nombre: string = 'Jhunior';
const edad: number = 22;

const string3: string = `Soy ${nombre} y tengo ${edad} años.`;

// Tipo de Dato "NUMBER"
const num1: number = 10;    //Número Entero
const num2: number = 4.5;   // Número Decimal
const num3: number = 2.5e3; // Notación Exponencial
const num4: number = 1.5e-2;    // Notación Exponencial Negativa
const num5: number = 0xA;   // Hexadecimales (base 16) usando el prefijo "0x"
const num6: number = 0o12;  // Octales (base 8) usando el prefijo "0o"
const num7: number = 0b1010;    // Binarios (base 2) usando el prefijo "0b"

// Tipo de Dato "NULL"
const nulo: null = null;

// Tipo de Dato "UNDEFINED"
const sinDefinir: undefined = undefined;


// Tipo de Dato "BOOLEAN"
const bool1: boolean = true;
const bool2: boolean = false;

// Tipo de Dato "OBJECT"
const programador: object = {
    nombre: "Jhunior Ccora",
    edad: 22
};

//ARRAYS

// Arreglo de Números
const numeros: number[] = [1, 2, 3, 4, 5];

// Arreglo de Cadenas
const nombres: string[] = ["Juan", "Pedro", "María"];

// Arreglo de Booleanos
const valores: boolean[] = [true, false];

// Arreglo con Datos number, string y boolean
const array: (number | string | boolean)[] = [1, "dos", true];


enum DiaSemana {
    Lunes = 10,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}

const diaHoy: DiaSemana = DiaSemana.Lunes;
console.log(diaHoy, typeof diaHoy);

// FUNCIÓN COMÚN
function sumar(a: number, b: number): number {
    return a + b;
};

// FUNCIÓN ANÓNIMA
const restar = function(a: number, b: number): number {
    return b - a;
};


// FUNCIÓN FLECHA CON RETORNO IMPLÍCITO
const multiplicar = (a: number, b: number) => a * b;

// FUNCIÓN FLECHA CON RETORNO EXPLÍCITO
const saludar = (nombre: string, edad: number): string => {
    return `Me llamo ${nombre} y tengo ${edad} años`;
};

console.log(saludar('Jhunior', 22))

const saludar2 = (nombre: string, edad?: number): string => {
    if(edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    } else {
        return `Hola, mi nombre es ${nombre}.`;
    }
}

function saludar3(nombre: string, edad: number = 22): string {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}

class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad}`);
    }
}

interface Persona {
    nombre: string;
    edad: number;
}

interface Producto {
    nombre: string;
    precio: number;
    descripcion?: string;
}

interface Comparador {
    (x: number, y: number): boolean;
}

interface Persona {
    nombre: string;
    edad: number;
    saludar(): void;
}

type Numero = number;

type Persona1 = {
    nombre: string;
    edad: number;
}

type Nombre = string | null;

type Producto1 = {
    nombre: string;
    precio: number;
    descripcion?: string;
}

type Comparador1 = {
    (a: number, b: number): boolean;
}

type Persona2 = {
    nombre: string;
    edad: number;
    saludar(): void;
}