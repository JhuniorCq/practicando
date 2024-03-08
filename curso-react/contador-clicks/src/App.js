import './App.css';
import logoFreeCodeCamp from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {

  // Hook useState
  const [cantidadClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(cantidadClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={logoFreeCodeCamp}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-contador'>
        <Contador 
          cantidadClicks={cantidadClicks}
        />
      </div>
      <div className='contenedor-botones'>
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
