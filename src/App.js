import React, { useState } from 'react';
import './App.css';

function App() {
  const [persona, setPersona] = useState({
    nombre: "",
    primerAppellido: "",
    segundoAppelio: ""
  })

  const manejarFormulario = (event) => {
    const {name, value} = event.target
    setPersona(prevPersona => ({
      ...prevPersona,
      [name]: value
    }))

    console.log(persona)
  }  

  const submit = (event) => {
    event.preventDefault(
      console.log(persona)
    )
  }
  
  
  return (
    <div className="App">
      <form onSubmit={submit}>
        <div>
          <label htmlFor="">Nombre:</label>
          <input type="text" value={persona.nombre} name="nombre" onChange={manejarFormulario}/>
        </div>
        <div>
          <label htmlFor="">Primer apellido:</label>
          <input type="text"  value={persona.primerApellido} nombre="primerApellido" onChange={manejarFormulario}/>
        </div>
        <div>
          <label htmlFor="">Segundo apellido:</label>
          <input type="text" value={persona.segundoApellio} name="segundoApellido" onChange={manejarFormulario}/>
        </div>
      </form>
    </div>
  );
}

export default App;
