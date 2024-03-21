
import useContador from "../hooks/useContador";

const ContadorComponente = ({incremento, reseteo, decremento}) => {

  const [contador, aumentarContador, resetearContador, disminuirContador] = useContador();

  return (
    <>
      <h2>Contador: {contador}</h2>
      <button className='btn btn-primary' onClick={() => aumentarContador(incremento)}>+1</button>
      <button className='btn btn-danger' onClick={() => resetearContador(reseteo)}>Reset</button>
      <button className='btn btn-primary' onClick={() => disminuirContador(decremento)}>-1</button>
    </>
  );
};

export default ContadorComponente;
