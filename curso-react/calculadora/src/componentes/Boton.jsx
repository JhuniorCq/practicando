import '../estilos/Boton.css'
import React, {} from 'react';

const Boton = (props) => {

  const esOperador = (children) => {
    return (isNaN(children) && (children !== '.') && (children !== '='));
  };

  return (
    <div 
      className={`teclaBoton ${esOperador(props.children) ? 'operador': ''}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Boton;

