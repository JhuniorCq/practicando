function convertirNumero(numero) {
    const romano = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }

    let resultado = '';
    const letras = Object.keys(romano);

    letras.forEach(letra => {
        
        while(numero >= romano[letra]) {
            resultado = resultado + letra;
            numero = numero - romano[letra];
        }
    })

    if(resultado === '') {
        return 'El número no es válido'
    }

    return resultado;
}

console.log('Resultado: ')
console.log(convertirNumero(0));