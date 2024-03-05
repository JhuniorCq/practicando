const MONEDAS = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };
  
  function checkCashRegister(price, cash, cid) {
    let cambioNecesario = cash - price;
    let cambioDisponible = 0;
  
    // Calcular el total de dinero disponible en caja
    cid.forEach(moneda => cambioDisponible += moneda[1]);
  
    // Redondear el cambio necesario y disponible para evitar errores de precisión
    cambioDisponible = parseFloat(cambioDisponible.toFixed(2));
    cambioNecesario = parseFloat(cambioNecesario.toFixed(2));
  
    // Comprobar si hay suficiente cambio en caja
    if (cambioDisponible < cambioNecesario) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    // Comprobar si se puede dar cambio exacto
    if (cambioDisponible === cambioNecesario) {
      return { status: "CLOSED", change: [...cid] };
    }
  
    // Calcular el cambio y devolverlo
    const cambio = [];
    for (const moneda of Object.keys(MONEDAS).reverse()) {
      const valorMoneda = MONEDAS[moneda];
      const cantidadDisponible = cid.find(item => item[0] === moneda)[1];
      const cantidadNecesaria = Math.min(cantidadDisponible, Math.floor(cambioNecesario / valorMoneda) * valorMoneda);
      
      if (cantidadNecesaria > 0) {
        cambio.push([moneda, cantidadNecesaria]);
        cambioNecesario -= cantidadNecesaria;
        cambioNecesario = parseFloat(cambioNecesario.toFixed(2));
      }
    }
  
    // Comprobar si no se pudo dar cambio exacto
    if (cambioNecesario > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: cambio };
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);