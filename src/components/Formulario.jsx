import React from 'react'
import { Formik, Form, Field } from 'formik'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'

const Formulario = () => {


const navigate = useNavigate()

{/*
.min(minimo, mensaje) -> Establecemos un mínimo para el campo y el mensaje de aviso en caso de que sea menor a este
.required() -> Establecemos que el campo es requerido
.max(maximo, mensaje) -> Establecemos un máximo para el campo y el mensaje de aviso en caso de que sea mayor a este
.matches(expresionRegular, mensaje) -> Establecemos una expresión regular para el campo y el mensaje de aviso en caso de que no coincida con la expresión regular
.email(mensaje) -> Establecemos que el campo debe ser un email y el mensaje de aviso en caso de que no sea un email
*/}
    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo')
            .required('El nombre del cliente es obligatorio'),
        empresa: Yup.string()
            .required('El nombre empresa es requerida'),
        email: Yup.string()
            .required('El email es obligatorio')
            .email('El email no es válido'),
        telefono: Yup.number()
            .positive('Número no válido')
            .integer('Número no válido')
            .typeError('El teléfono debe ser un número'),
                  notas: ''
    })

    {/*
    Por defecto fetch() utiliza un método GET, pero podemos cambiarlo con el método .method(), en este caso tenemos que hacer uso de POST 
    Tenemos que pasarle el objeto con los datos que queremos enviar, en este caso el objeto con los datos del cliente (se lo pasamos convirtiéndolo en un JSON)
    además le añadimos una cabecera (en algunos casos, en el header, se le añade la autentificacón del usuario)
*/}
    const handleSubmit = async (valores) => {
        try {
            const url = 'http://localhost:4000/clientes'
            
            const respuesta = await fetch(url, { 
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(respuesta)
            const resultado = await respuesta.json()
            console.log(resultado)
            navigate('/clientes')

        } catch (error) { 
            console.log(error)
        }

          }

    return (
      <div className='bg-white mt-10 px-5 py-10  rounded-md shadow-md md:w-3/4 mx-auto'> 
          <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>

            {/* Dentro de Formik, initialValues{{ }} crea un objeto, los cuales deben coincidir con el name de los Field , a su vez el Form esta dentro de una función de flecha. */}
               {/* En onSubmit, queda a la espera de que se ejecute handleSubmit y luego reseteamos el formulario, llamando a resetForm*/}
          <Formik
              
              initialValues={{
                  nombre: '',
                  empresa: '',
                  email: '',
                  telefono: '',
                  notas: ''

                }}
             
              onSubmit={async (values, {resetForm}) => {
                 await handleSubmit(values)
                  resetForm()
                }}
                validationSchema={nuevoClienteSchema}
          >
                {({errors,touched}) => {
                    console.log(touched)
                    return (
               
                  <Form className='mt-10 '> 

                  <div className='mb-4'> 
                      <label className='text-gray-800' htmlFor='nombre'>Nombre</label>
                      <Field
                          id="nombre"
                          type="text"
                          className="mt-2 block w-full p-3 bg-gray-50"
                          placeholder="Nombre del cliente"
                          name="nombre"
                                />
                                {errors.nombre && touched.nombre ? (
                                    <Alerta>{errors.nombre}</Alerta>
                                ) : null}
                                

                  </div>

                   <div className='mb-4'> 
                      <label className='text-gray-800' htmlFor='empresa'>Empresa</label>
                      <Field
                          id="empresa"
                          type="text"
                          className="mt-2 block w-full p-3 bg-gray-50"
                              placeholder="Nombre de la empresa del cliente"
                              name='empresa'
                                />

                                {errors.empresa && touched.empresa ? (
                                    <Alerta>{errors.empresa}</Alerta>
                                ) : null}
                               
                  </div>

                  <div className='mb-4'> 
                      <label className='text-gray-800' htmlFor='email'>Email</label>
                      <Field
                          id="email"
                          type="email"
                          className="mt-2 block w-full p-3 bg-gray-50"
                              placeholder="Email del cliente"
                              name='email'
                                />
                                
                                 {errors.email && touched.email ? (
                                    <Alerta>{errors.email}</Alerta>
                                ) : null}
                  </div>

                     <div className='mb-4'> 
                      <label className='text-gray-800' htmlFor='telefono'>Teléfono</label>
                      <Field
                          id="telefono"
                          type="tel"
                          className="mt-2 block w-full p-3 bg-gray-50"
                          placeholder="Teléfono de contacto"
                          name='telefono'
                                />
                                {errors.telefono && touched.telefono ? (
                                    <Alerta>{errors.telefono}</Alerta>
                                ) : null}
                  </div>

                     <div className='mb-4'> 
                      <label className='text-gray-800' htmlFor='notas'>Notas</label>
                      <Field
                          as="textarea"
                          id="notas"
                          type="text"
                          className="mt-2 block w-full p-3 bg-gray-50 h-40"
                          placeholder="Otras observaciones"
                          name='notas'
                      />
                  </div>
                  <input type="submit"
                      value="Agregar Cliente"
                      className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"/>
              </Form>
              )}}
              
          </Formik>
      </div>
  )
}

export default Formulario