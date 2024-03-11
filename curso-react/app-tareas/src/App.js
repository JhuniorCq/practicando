import './App.css';
import { Logo } from './components/Logo'; 
import { InputTarea } from './components/InputTarea';
import { Tarea } from './components/Tarea';
import { ListaDeTareas } from './components/ListaDeTareas';
import freeCodeCampLogo from './img/freecodecamp-logo.png';

function App() {

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <Logo 
          imagen={freeCodeCampLogo}
          nombre='freeCodeCamp'
        />
      </div>
      <div className='contenedor-aplicacion'>
        <h1 className='titulo'>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
