import React from "react";

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require('../imagenes/testimonio-emma.png')}
        alt='Foto' 
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          Emma Bostian en Suecia
        </p>
        <p className="cargo-testimonio">
          Ingeniera de Software en Spotify
        </p>
        <p className="texto-testimonio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eos deleniti inventore dolorem voluptates voluptas labore vitae necessitatibus placeat quibusdam commodi accusantium similique accusamus, illo culpa vel excepturi quam quaerat.
        </p>
      </div>
    </div>
  );
}

export default Testimonio;