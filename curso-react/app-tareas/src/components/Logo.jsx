import React from "react";
import '../styles/Logo.css'

export const Logo = ({imagen, nombre}) => {
  return (
    <img 
      src={imagen}
      alt={`Logo de ${nombre}`}
      className='logo'
    />
  );
};