
const Paciente = ({
  paciente,
  setPaciente, 
  eliminarPaciente
}) => {

  const { mascota, email, alta, sintomas, propietario, id } = paciente
  // console.log(paciente);
  return (

    <div className="bg-white shadow-md p-5 rounded-md m-3">
      <p className="font-bold uppercase text-gray-700 mb-3">
        Nombre de la mascota: {""}
        <span className="font-normal normal-case">{mascota}</span>
      </p>

      <p className="font-bold uppercase text-gray-700 mb-3">
        Nombre del dueño: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold uppercase text-gray-700 mb-3">
        E-mail de contacto: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold uppercase text-gray-700 mb-3">
        Fecha del alta: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold uppercase text-gray-700 mb-3">
        Síntomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className=" mt-5 flex justify-between">
        <button
          type="button"
          className="cursor-pointer bg-indigo-600 py-1 px-3 hover:bg-indigo-700 rounded-md text-white uppercase transition-all" onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="cursor-pointer bg-red-600 py-1 px-3 hover:bg-red-700 rounded-md text-white uppercase transition-all"
          onClick={() => eliminarPaciente(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente