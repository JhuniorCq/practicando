const miniCompilador = (cadena) => {
    let resultado = 0;
    let cadenaResultado = '';

    for (const caracter of cadena) {
        switch (caracter) {
            case '#':
                resultado += 1;
                break;
            case '@':
                resultado -= 1;
                break;
            case '*':
                resultado *= resultado;
                break;
            case '&':
                console.log(resultado);
                cadenaResultado = cadenaResultado + String(resultado);
                break;
        }
    }

    return cadenaResultado;
}

console.log(miniCompilador("&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"));
