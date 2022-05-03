[![pages-build-deployment](https://github.com/AGCG1991/crm-react/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/AGCG1991/crm-react/actions/workflows/pages/pages-build-deployment)

# CRM PARA EL CONTROL DE CLIENTES: 


# Instalación: 

En primer lugar debes de clonar tu proyecto en local  

` git clone https://github.com/AGCG1991/crm-react.git`

Seguidamente accedemos al proyecto 

`cd crm-react`

Este proyecto ha sido desarrollado utilizando una librería de React, conocida como "Vite", para poder arrancar el proyecto, necesitamos por un lado tener instalado "NodeJs" e instalar las dependencias del proyecto, para ello

`node install vite@latest `

Una vez instalada las dependencias, podemos arrancar nuestro proyecto

`npm run dev `

Desde el navegador introducimos " http://localhost:3000/ " para poder visualizar el proyecto en local.

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
