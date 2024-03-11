import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../styles/InputTarea.css'

export const InputTarea = (props) => {

  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  // Esta función CREARÁ un Objeto que representa a una Tarea
  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    // Este prop "onSubmit" vendrá del Componente "InputTarea" y será una 
    // Función a la cual le enviaremos los Datos de esta Nueva Tarea
    props.onSubmit(tareaNueva);
  };

  return (
    <form 
      className="contenedor-input"
      onSubmit={manejarEnvio}
    >
      <input 
        type='text' 
        className='input-tarea'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className="btn-agregar-tarea">
        Agregar Tarea
      </button>
    </form>
  );
}

