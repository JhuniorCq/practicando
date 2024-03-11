import React, {useState} from "react";
import { InputTarea } from "./InputTarea";
import { Tarea } from "./Tarea";
import '../styles/ListaDeTareas.css'

export const ListaDeTareas = () => {
  // En el Array "tareas" almacenaremos OBJETOS que 
  // representarán una TAREA
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    // Solo si tarea.texto es una Cadena Vacía NO entrará al IF
    if(tarea.texto.trim()) {
      // Quitamos espacios al inicio y final
      tarea.texto = tarea.texto.trim(); 

      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      console.log('Holaaa')
      console.log(tareasActualizadas)
    }
  };

  const eliminarTarea = (id) => {
    // Para Eliminar una Tarea usaremos el método "filter"
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea;
    });
  }

  return (
    <>
      <div className='contenedor-input-tarea'>
        <InputTarea onSubmit={agregarTarea} />
      </div>
      <div className='contenedor-tareas'>
        {
          tareas.map((tarea) => {
            return (
              <Tarea 
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
              />
            );
          })
        }
      </div>
    </>
  );
}