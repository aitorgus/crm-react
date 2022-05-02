import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import NuevoCliente from './paginas/NuevoCliente'
import EditarCliente from './paginas/EditarCliente'
import VerCliente from './paginas/VerCliente'
import {useNavigate} from 'react-router-dom'


function App() {


    return (
      
        <>
    
      <BrowserRouter>
                <Routes>{/*Grupo de Rutas */}
                    <Route path="/"  element={<Layout />}></Route>
              <Route path="/clientes" element={<Layout />}> {/*Masterpage de Inicio */}
                  <Route index element={<Inicio />} />
                  {/*Como se encuentra bajo un Grupo de rutas, la ruta quedaría tal que /clientes/nuevo */}
                  <Route path="nuevo" element={<NuevoCliente />} />
                            {/*El id es dinámico, no tenemos que crear una ruta por cada cliente distinto */}

                  <Route path="editar/:id" element={<EditarCliente />} />
                  <Route path=":id" element={<VerCliente />} />
              </Route>
          </Routes>
      </BrowserRouter>
</>
        
  )
}

export default App
