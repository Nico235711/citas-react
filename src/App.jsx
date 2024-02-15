import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  /* 
    obtengo los pacientes del local storage y no hay nada devuelve un arreglo
    vacio
  */
  const pacienteLS = JSON.parse(localStorage.getItem("pacientes")) ?? []

  const [pacientes, setPacientes] = useState(pacienteLS)
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes]);

  /* 
    elimina un usuario por el id
  */
  const eliminarPaciente = id => {
    // console.log(id);
    const respuesta = confirm("¿Desea elimina al paciente?")

    if (respuesta) {
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
