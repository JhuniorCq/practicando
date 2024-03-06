import React from "react";
import '../styles/Testimonio.css'

export function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`} 
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en <strong>{props.pais}</strong></p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}