import useGet from "../hooks/useGet";

const UsuariosComponente = () => {
  const {usuarios, loading, error} = useGet('https://jsonplaceholder.typicode.com/users');

    return (
      <>
        {
          loading ? <p>Cargando ...</p>: 
          error ? <p>Ha ocurrido un ERROR</p>: 
          <table className="table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">WEBSITE</th>
              </tr>
            </thead>
            <tbody>
              {
                usuarios && (usuarios.map(usuario => {
                  return (
                    <tr key={usuario.id}>
                      <th scope="row">{usuario.id}</th>
                      <td>{usuario.name}</td>
                      <td>{usuario.email}</td>
                      <td>{usuario.website}</td>
                    </tr>
                  );
                }))
              }
            </tbody>
          </table>
        }
      </>
    );
}

export default UsuariosComponente;