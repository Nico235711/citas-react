import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  /* 
    obtengo el valor asociado a la clave de pacientes en el local storage y uso el operador de fusión nula (nullish coalescing operator) para proporcionar un valor predeterminado en caso de que el resultado de la operación anterior sea null o undefined
  */
  const pacienteLS = JSON.parse(localStorage.getItem("pacientes")) ?? []

  // manejo de estados
  const [pacientes, setPacientes] = useState(pacienteLS)
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes]);

  const eliminarPaciente = id => {
    // console.log(id);
    // Muestra una ventana de confirmación al usuario con el mensaje
    const respuesta = confirm("¿Desea elimina al paciente?")

    if (respuesta) {
      /* 
        utiliza el método filter para crear un nuevo array llamado pacientesActualizados, que contiene todos los pacientes cuyo ID no coincide con el ID proporcionado como argumento a la función
      */
      const pacientesActualizados = pacientes.filter(pacienteState => 
        pacienteState.id !== id
      )
      setPacientes(pacientesActualizados)
    }
  }

  return (

    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
