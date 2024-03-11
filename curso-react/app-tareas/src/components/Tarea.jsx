import React from "react";
import '../styles/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Tarea = ({ texto, completada, id, completarTarea, eliminarTarea }) => {
  return (
    <div className={completada ? 'contenedor-tarea completada': 'contenedor-tarea'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
      <div 
        className='tarea-contenedor-icono'
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );
}

