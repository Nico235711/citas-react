import Paciente from "./Paciente"

const ListadoPacientes = ({ 
  pacientes, 
  setPaciente, 
  eliminarPaciente 
}) => {

  return (

    <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll  md:h-screen">
      {
        pacientes.length ? (
          <>
            <h1 className="text-3xl font-extrabold text-center">
              Listado Pacientes
            </h1>
            <p className="font-bold text-lg text-center mt-2">
              Administra tus pacientes y {""}
              <span className="text-indigo-600">citas</span>
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-extrabold text-center">
              No hay pacientes
            </h1>
            <p className="font-bold text-lg text-center mt-2">
              Añada pacientes {""}
              <span className="text-indigo-600">y aparecerán aquí</span>
            </p>
          </>
        )
      }

      {
        pacientes.map(paciente => (
          <Paciente
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        ))
      }

    </div>
  )
}

export default ListadoPacientes