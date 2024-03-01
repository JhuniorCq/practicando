/*
Consigna
En un campo de entrenamiento de Pokémon, se necesita evaluar el desempeño de cada Pokémon en sus batallas para determinar si están listos para competir en la Liga.
    • Crea una función en Javascript que calcule el promedio de habilidades
    de un Pokémon y determine si está preparado para la competición
    (promedio mayor o igual a 70) o no (promedio menor a 70).
    • Utiliza arrays para almacenar las habilidades de cada Pokémon y sus nombres.

Pistas y Sugerencias
    • Crea un array de nombres de Pokémon y una matriz de habilidades donde el indice de cada array con los nombres de los Pokemons represente la fila de habilidades de la matriz.
        Ejemplo: Si Bulbasaur es el Pokemon en la posición 1, la fila I de la matriz tendrá sus habilidades.
• Utiliza métodos de arrays para manejar los datos y calcular el promedio de habilidades.
• La función debe mostrar en consola el nombre del Pokémon, sus habilidades y si está listo o no para la competición.
• Podés crear más de una función para diferentes tareas si querés modularizar más aún tu aplicación.
*/

const crearCaracteristicas = () => {

    const resultado = [];
    let caracteristica;

    for(let i=0; i<6; i++) {
        caracteristica = Math.floor(Math.random()*(252-0+1)+0);
        resultado.push(caracteristica);
    }

    return resultado;
}

const crearMatriz = (cantidadPokemon) => {

    let matriz = [];

    for(let i=0; i<cantidadPokemon; i++) {
        matriz[i] = [];
        let arrayCaracteristicas = crearCaracteristicas();
        for(let j=0; j<6; j++) {
            matriz[i][j] = arrayCaracteristicas[j];
        }
    }

    return matriz;
}

const promedioHabilidades = (nombrePokemon) => {//nombrePokemon lo ingresa el usuario
    const indicePokemon = nombresPokemon.indexOf(nombrePokemon);

    if(indicePokemon === -1) {
        return null;
    }

    const matriz = crearMatriz(cantidadPokemon);
    const caracteristicasPokemon = matriz[indicePokemon];
    let promedio = 0;

    caracteristicasPokemon.forEach(caracteristica => promedio += caracteristica);
    promedio /= 6;

    return [nombrePokemon, caracteristicasPokemon, promedio];
}

const respuesta = (datosPokemon) => {//datosPokemon es el Array que retorna promedioHabilidades

    if(datosPokemon === null) {
        return 'El pokemón ingresado no ha sido encontrado.';
    }

    const [nombrePokemon, caracteristicasPokemon, promedio] = datosPokemon;
    const [PS, ATQ, DEF, ATQS, DEFS, VEL] = caracteristicasPokemon;

    const pokemonPreparado = promedio >= 70 ? 'Pokemón preparado': 'Pokemón NO preparado';

    return `\n\tHabilidades de ${nombrePokemon}
            \n- Vida: ${PS}
            \n- Ataque: ${ATQ}
            \n- Defensa: ${DEF}
            \n- Ataque Especial: ${ATQS}
            \n- Defensa Especial: ${DEFS}
            \n- Velocidad: ${VEL}
            \n- Estado: ${pokemonPreparado}`;
}

let nombresPokemon = ["bulbasaur", "squirtle", "charmander", "pikachu"];
let cantidadPokemon = nombresPokemon.length;

const nombrePokemon = prompt('Ingresa el nombre de tu Pokemón:');
const nombreMinus = nombrePokemon.toLowerCase();

const datosPokemon = promedioHabilidades(nombreMinus);
const resultado = respuesta(datosPokemon);

console.log(resultado);

alert(resultado);



