function rot13(cadena) {
    const cadenaCesar = cadena.toUpperCase();
  
    const abecedario = {
      'A': 'N',
      'B': 'O',
      'C': 'P',
      'D': 'Q',
      'E': 'R',
      'F': 'S',
      'G': 'T',
      'H': 'U',
      'I': 'V',
      'J': 'W',
      'K': 'X',
      'L': 'Y',
      'M': 'Z',
      'N': 'A',
      'O': 'B',
      'P': 'C',
      'Q': 'D',
      'R': 'E',
      'S': 'F',
      'T': 'G',
      'U': 'H',
      'V': 'I',
      'W': 'J',
      'X': 'K',
      'Y': 'L',
      'Z': 'M'
    }
  
    const abecedarioArray = Object.keys(abecedario);
    const abecedarioArrayTamanio = abecedarioArray.length;
    let resultado = '';
  
    for(const caracter of cadenaCesar) {
      for(let i=0; i<abecedarioArrayTamanio; i++) {
        if(caracter === abecedarioArray[i]) {
          resultado = resultado + abecedario[abecedarioArray[i]];
          break;
        }
  
        if(i === abecedarioArrayTamanio-1) {
          resultado = resultado + caracter
        }
      }
    }
  
    console.log(resultado);
    return resultado;
  }
  
  rot13("SERR PBQR PNZC");