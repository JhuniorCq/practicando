function telephoneCheck(cadena) {
    // Expresión regular para validar números de teléfono estadounidenses
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  
    // Aplicar la expresión regular y devolver true si hay coincidencia
    return regex.test(cadena);
  }
  
  telephoneCheck("5555555555");