[![pages-build-deployment](https://github.com/AGCG1991/crm-react/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/AGCG1991/crm-react/actions/workflows/pages/pages-build-deployment)

# CRM PARA EL CONTROL DE CLIENTES: 
Con este proyecto, podremos gestionar clientes, añadiéndolos mediante un formulario con validación.

 <p align="center">
   <img height="400em" src="https://github.com/AGCG1991/AGCG1991.github.io/blob/master/img/CRM-AGREGAR%20CLIENTE.PNG" />
</p>

Desde la sección de clientes, podremos ver una tabla resumen con el Nombre del  cliente, teléfono y correo de contacto, la empresa a la que pertenece o representa el cliente, además, dispondremos de 3 opciones, visualizar los datos completos del cliente, editar esos datos y eliminarlos.

 <p align="center">
   <img height="400em" src="https://github.com/AGCG1991/AGCG1991.github.io/blob/master/img/CRM-Clientes.PNG" />
</p>

 <p align="center">
   <img height="400em" src="https://github.com/AGCG1991/AGCG1991.github.io/blob/master/img/CRM-Visualizar%20clientes.PNG" />
</p>

 <p align="center">
   <img height="400em" src="https://github.com/AGCG1991/AGCG1991.github.io/blob/master/img/CRM-EditarClientes.PNG" />
</p>


Link: https://agcg1991.github.io/crm-react/
# Instalación: 

En primer lugar debes de clonar tu proyecto en local  

` git clone https://github.com/AGCG1991/crm-react.git`

Seguidamente accedemos al proyecto 

`cd crm-react`

Este proyecto ha sido desarrollado utilizando una librería de React, conocida como "Vite", para poder arrancar el proyecto, necesitamos por un lado tener instalado "NodeJs" e instalar las dependencias del proyecto, para ello

`node install vite@latest `

Una vez instalada las dependencias, podemos arrancar nuestro proyecto

`npm run dev `

Desde el navegador introducimos " http://localhost:3000/crm-react " para poder visualizar el proyecto en local.

# Mas información: 

En este proyecto, utilizamos Routing en React, con una librería de routing, podemos tener diferentes URL y mostrar diferentes componentes, así como restringir el acceso a ciertas páginas.

He utilizado react route (v6) , para instalarlo en el proyecto utilizamos :

` react-route-dom`


Para su uso en nuestro proyecto debemos importarlo utilizando:

` import { BrowserRouter, Routes, Route } from 'react-router-dom' `



# Formularios :

Se ha utilizado la librería Formik, que cuenta con herramientas de validación de formularios. Para instalarlo en nuestro proyecto usaremos: 

`npm i formik-yup` 

Para importarlo, simplemente utilizaremos en nuestro proyecto 

`import { Formik, Form, Field } from 'formik'`

Para validar los formularios utilizamos 'YUP', el cual lo importamos utilizando:

`import * as Yup from 'yup'`

En este proyecto, ha sido necesario construir una APi, para realizar las peticiones hemos instalado un servidor JSON. Para instalarlo, haremos una instalación global , elevando permisos como Administrador:

`npm install -g json-server`

Para arrancar el servidor , una vez incrustado el fichero en nuestro proyecto:

`json-server --watch db.json --port 4000 `


# Otras consideraciones:

A la hora de desplegar este proyecto en github, han surgido algunas problemáticas, entre ellas, el acceso al servidor JSON. Una vez desplegada, no puede acceder a este, debido a que es local, es por ello que se han utilizado dos ficheros adicionales de configuración, los cuales cuentan con variables de entorno.

El primero de ellos, llamado ' .env.development.local' , en caso de ser desplegado en local, hará peticiones al servidor local, en caso contrario, usará el servidor de producción.
`VITE_API_URL=http://localhost:4000/clientes`

El caso del fichero con la variable de entorno para producción es ' .env.production.local '  :

`VITE_API_URL=https://my-json-server.typicode.com/AGCG1991/crm-react/clientes `

Ejemplo de uso de una variable de entorno :

```

useEffect(() => {
        const obtenerClienteAPI = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }
            setCargando(!cargando)

        }
        obtenerClienteAPI()
    }, [])
```
