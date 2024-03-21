import { useState } from "react";

const useContador = (valorInicial = 0) => {

  const [contador, setContador] = useState(valorInicial);

  const aumentarContador = (valor = 1) => {
    setContador(contador + valor);
  };

  const resetearContador = (valor = 0) => {
    setContador(valor);
  };

  const disminuirContador = (valor = 1) => {
    if(contador <= 0) return;

    setContador(contador - valor);
  }

  return [
    contador,
    aumentarContador,
    resetearContador,
    disminuirContador
  ];
};

export default useContador;