const descifrarMensaje = (cadena) => {
    const objetoPalabras = {};
    const arrayPalabras = cadena.split(' ');
    const arrayPalabrasMinus = arrayPalabras.map(palabra => palabra.toLowerCase());
    const setPalabras = new Set(arrayPalabrasMinus);

    setPalabras.forEach(palabraSet => {
        const cantidadPalabra = arrayPalabrasMinus.filter(palabraArray => palabraArray === palabraSet).length;

        // Crearemos un Objeto, en donde cada Palabra del Set será una CLAVE y su cantidad de apariciones en el Array será su VALOR
        objetoPalabras[palabraSet] = cantidadPalabra;
    });

    const arrayClaves = Object.keys(objetoPalabras);
    let resultado = '';

    arrayClaves.forEach(clave => {
        const valorClave = objetoPalabras[clave];
        resultado = resultado + clave + valorClave;
    });

    return resultado;
}

console.log(descifrarMensaje(''))