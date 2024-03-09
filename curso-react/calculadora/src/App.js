import './App.css';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear.jsx';
import Logo from './componentes/Logo.jsx';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import {evaluate} from 'mathjs';
import {useState} from 'react';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los cálculos.')
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <Logo
          imagen={freeCodeCampLogo}
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla 
          input={input}
        />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClick={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
