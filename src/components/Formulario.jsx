import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({ 
  pacientes, 
  setPacientes, 
  paciente, 
  setPaciente 
}) => {

  // estados para los input
  const [mascota, setMascota] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [alta, setAlta] = useState("")
  const [sintomas, setSintomas] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  
  // genero un id único
  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  // validacion
  const handleSubmit = e => {
    e.preventDefault()

    if ([mascota, propietario, email, alta, sintomas].includes("")) {
      setError(true)
      return
    }

    setError(false)

    // objeto paciente
    const objPaciente = {
      mascota,
      propietario,
      email,
      alta,
      sintomas,
    }

    if (paciente.id) {
      // edito al paciente
      objPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => 
        pacienteState.id === paciente.id ? objPaciente : pacienteState 
      )
      setPacientes(pacientesActualizados)
      setPaciente({})
    }
    else {
      // agrego un paciente nuevo
      objPaciente.id = generarId() // creo una propiedad en el objeto
      setPacientes([...pacientes, objPaciente])
    }

    // reinicio el formulario cada vez que se agrega un paciente nuevo
    setMascota("")
    setPropietario("")
    setEmail("")
    setAlta("")
    setSintomas("")
  }

  return (

    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-extrabold text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="font-bold text-lg text-center mt-2">
        Añade tus pacientes y {""}
        <span className="text-indigo-600">Adiministralos</span>
      </p>

      <form 
        className="bg-white shadow-md p-5 rounded-md m-3" 
        onSubmit={handleSubmit}
      >
        {
          /* 
            si hay algun campo vacio muestra el componente de Error
          */
          error && <Error>Todos los campos son obligatorios</Error>
        }

        <div className="mb-5">
          <label 
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >Nombre de la mascota</label>
          <input 
            type="text" 
            name="mascota" 
            id="mascota" 
            placeholder="Nombre de la mascota" 
            className="border-2 p-2 w-full mt-2 rounded-md focus:outline-none placeholder-gray-400" 
            value={mascota}
            onChange={ e => setMascota(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >Nombre del Dueño</label>
          <input 
            type="text" 
            name="propietario" 
            id="propietario" 
            placeholder="Nombre del dueño" 
            className="border-2 p-2 w-full mt-2 rounded-md focus:outline-none placeholder-gray-400" 
            value={propietario}
            onChange={ e => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >E-mail de Contacto</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="E-mail de contacto" 
            className="border-2 p-2 w-full mt-2 rounded-md focus:outline-none placeholder-gray-400" 
            value={email}
            onChange={ e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >Fecha del Alta</label>
          <input 
            type="date" 
            name="alta" 
            id="alta" 
            className="border-2 p-2 w-full mt-2 rounded-md"
            value={alta}
            onChange={ e => setAlta(e.target.value)}
          />
        </div> 
        
        <div className="mb-5">
          <label 
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >Síntomas</label>
          <textarea 
            name="sintomas" 
            id="sintomas" 
            className="border-2 p-2 w-full mt-2 rounded-md focus:outline-none placeholder-gray-400 h-44 resize-none"
            placeholder="¿Qué síntomas presenta el paciente?" 
            value={sintomas}
            onChange={ e => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input 
          type="submit" 
          className="bg-indigo-600 text-center w-full p-1 hover:bg-indigo-700 transition-all text-white text-2xl font-medium cursor-pointer rounded-md uppercase"
          value={paciente.id ? "Guardar Cambios" : "Agregar Paciente"}
        />
          
      </form>

    </div>
  )
}

export default Formulario