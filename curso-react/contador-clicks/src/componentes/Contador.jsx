import React from "react";
import '../estilos/Contador.css'

const Contador = ({cantidadClicks}) => {
  return (
    <div  className='contador'>
      {cantidadClicks}
    </div>
  );
}

export default Contador;