import React from "react";

import '../estilos/Logo.css';

const Logo = ({imagen}) => {
    return (
        <img 
          src={imagen}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp'/>
    );
}

export default Logo;