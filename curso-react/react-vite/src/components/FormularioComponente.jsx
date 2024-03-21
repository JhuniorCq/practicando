import userForm from "../hooks/useForm";

const FormularioComponente = () => {

  const datosIniciales = {
    userName: '',
    userEmail: '',
    userPassword: ''
  };

  const [datosFormulario, manejarCambioInput] = userForm(datosIniciales);

  const enviarFormulario = (event) => {
    event.preventDefault();
    console.log(datosFormulario);
  };

  // Los Atributos "name" (o "id" si usaemos ese) deben estar iguales que las Claves del Objeto que representa el ESTADO del FORMULARIO
  return (
    <form onSubmit={enviarFormulario}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">User name</label>
        <input 
          type="text" 
          className="form-control" 
          id="userName"
          name="userName"
          placeholder="User name"
          onChange={manejarCambioInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userEmail" className="form-label">Email address</label>
        <input 
          type="email" 
          className="form-control" 
          id="userEmail" 
          name="userEmail"
          placeholder="Email address"
          onChange={manejarCambioInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userPassword" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="userPassword" 
          name="userPassword"
          placeholder="Password"
          onChange={manejarCambioInput}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default FormularioComponente;