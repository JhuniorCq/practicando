

import { useState } from "react";

//En este Custom Hook manejamos el ESTADO del Forms y su ACTUALIZACIÓN -> El envío NO se maneja acá
const userForm = (datosIniciales={}) => {

  const [datosFormulario, setDatosFormulario] = useState(datosIniciales);

  const manejarCambioInput = ({target}) => {
    const {name, value} = target;

    setDatosFormulario({
      ...datosFormulario,
      [name]: value
    });
  };

  return [
    datosFormulario, manejarCambioInput
  ];
};

export default userForm;