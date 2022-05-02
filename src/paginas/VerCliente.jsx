import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const VerCliente = () => {
    
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(false)
    

    const { id } = useParams()

    {/* OJO-> El contenido de respuesta y resultado, no se obtendrá hasta que se resuelva la promesa, por lo que no se podrá acceder a sus propiedades hasta entonces  */}
    useEffect(() => {
       
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }
             setCargando(!cargando)
        }
        obtenerClienteAPI()
    },[])
    

    return (
        cargando ? <p>Cargando...</p> : Object.keys(cliente).length === 0 ? <p>No hay resultados</p> : ( 
      <div>
          {cargando ? 'Cargando...' : (
              <>
                   <h1 className='font-black text-4xl text-blue-900 '>Ver cliente: {cliente.nombre}</h1>
          <p className='mt-3'>Información del cliente</p>
          
          {cliente.nombre && (
              <p className='text-2xl text-gray-700 mt-10'>  <span className=' uppercase font-bold '> Cliente: </span>
              {cliente.nombre}
          </p>)}
         

          {cliente.email && (
              <p className='text-2xl text-gray-700 mt-4'>  <span className=' uppercase font-bold '> Email: </span>
              {cliente.email}
             </p>
           )}
          

          {cliente.telefono && (
              <p className='text-2xl text-gray-700 mt-4'>  <span className=' uppercase font-bold '> Teléfono: </span>
              {cliente.telefono}
              </p>
          )}

          {cliente.empresa && (
               <p className='text-2xl text-gray-700 mt-4'>  <span className=' uppercase font-bold '> Empresa: </span>
              {cliente.empresa}
          </p>
         )}

          {cliente.notas && (
                 <p className='text-2xl text-gray-700 mt-4'>  <span className=' uppercase font-bold '> Notas: </span>
              {cliente.notas}
          </p>
                )}
              </>
          ) 
          
          }
         
         
   </div >
    )
  )
}

export default VerCliente