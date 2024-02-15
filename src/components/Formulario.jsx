const Formulario = () => {

  return (

    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-extrabold text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="font-bold text-lg text-center mt-2">
        Añade tus pacientes y {""}
        <span className="text-indigo-600">Adiministralos</span>
      </p>

      <form className="bg-white shadow-md p-5 rounded-md my-10">
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
          ></textarea>
        </div>

        <input 
          type="sumbit" 
          value="Agregar Paciente" 
          className="bg-indigo-600 text-center w-full p-1 hover:bg-indigo-700 transition-all text-white text-2xl font-medium cursor-pointer rounded-md uppercase"
        />
      </form>

    </div>
  )
}

export default Formulario