import{j as N,u as F,L as w,O as S,a as E,r as p,c as $,b as y,d as G,F as O,e as P,f as b,g as k,B as I,R as L,h as u,i as R,k as T}from"./vendor.b6fbf868.js";const q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function c(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=c(s);fetch(s.href,l)}};q();const e=N.exports.jsx,a=N.exports.jsxs,x=N.exports.Fragment,A=()=>{const n=F().pathname;return a("div",{className:"md:flex md:min-h-screen",children:[a("div",{className:"md:w-1/4 bg-blue-900 px-5 py-10",children:[e("h2",{className:"text-4xl font-black text-center text-white ",children:"CRM - Clientes"}),a("nav",{className:"mt-10",children:[e(w,{className:`${n==="/clientes"?"text-blue-300":"text-white"} text-2xl block mt-2 hover:text-blue-300`,to:"/crm-react/clientes",children:"Clientes"}),e(w,{className:`${n==="/clientes/nuevo"?"text-blue-300":"text-white"} text-2xl block mt-2 hover:text-blue-300`,to:"/crm-react/clientes/nuevo",children:"Nuevo Cliente"})]})]}),e("div",{className:"md:w-3/4 p-10 md:h-screen overflow-scroll",children:e(S,{})})]})},B=({cliente:t,handleEliminar:n})=>{const c=E(),{nombre:o,empresa:s,email:l,telefono:r,notas:h,id:m}=t;return a("tr",{className:"border-b hover:bg-gray-50",children:[e("td",{className:"p-3",children:o}),a("td",{className:"p-3",children:[a("p",{children:[e("span",{className:"text-gray-800 uppercase font-bold",children:"Email: "})," ",l," "]}),a("p",{children:[e("span",{className:"text-gray-800 uppercase font-bold",children:"Tel: "})," ",r," "]})]}),e("td",{className:"p-3",children:s}),a("td",{className:"p-3",children:[e("button",{type:"button",className:"bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs",onClick:()=>c(`/crm-react/clientes/${m}`),children:"Ver"}),e("button",{type:"button",className:"bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3",onClick:()=>c(`/crm-react/clientes/editar/${m}`),children:"Editar"}),e("button",{type:"button",className:"bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3",onClick:()=>n(m),children:"Eliminar"})]})]})},D=()=>{const[t,n]=p.exports.useState([]);p.exports.useEffect(()=>{(async()=>{try{const r=await(await fetch("https://my-json-server.typicode.com/AGCG1991/crm-react/clientes")).json();n(r)}catch(s){console.log(s)}})()},[]);const c=async o=>{if(confirm("\xBFDeseas eliminar este cliente?"))try{const l=`https://my-json-server.typicode.com/AGCG1991/crm-react/clientes/${o}`;await(await fetch(l,{method:"DELETE"})).json();const h=t.filter(m=>m.id!==o);n(h)}catch(l){console.log(l)}};return a(x,{children:[e("h1",{className:"font-black text-4xl text-blue-900",children:"Clientes"}),e("p",{className:"mt-3",children:"Administra tus clientes"}),a("table",{className:"w-full mt-5 table-auto shadow bg-white",children:[e("thead",{className:"bg-blue-800 text-white",children:a("tr",{children:[e("th",{className:"p-2",children:"Nombre"}),e("th",{className:"p-2",children:"Contacto"}),e("th",{className:"p-2",children:"Empresa"}),e("th",{className:"p-2",children:"Acciones"})]})}),e("tbody",{children:t.map(o=>e(B,{cliente:o,handleEliminar:c},o.id))})]})]})},f=({children:t})=>e("div",{className:"text-center my-4 bg-red-600 text-white font-bold p-3 uppercase",children:t});const j=()=>a("div",{className:"sk-chase",children:[e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"})]}),g=({cliente:t,cargando:n})=>{var l,r,h,m,v;const c=E(),o=$().shape({nombre:y().min(3,"El Nombre es muy corto").max(20,"El Nombre es muy largo").required("El Nombre del Cliente es Obligatorio"),empresa:y().required("El Nombre de la empresa es obligatorio"),email:y().email("Email no v\xE1lido").required("El email es obligatorio"),telefono:G().positive("N\xFAmero no v\xE1lido").integer("N\xFAmero no v\xE1lido").typeError("El N\xFAmero no es v\xE1lido")}),s=async i=>{try{let d;if(t.id){const C=`https://my-json-server.typicode.com/AGCG1991/crm-react/clientes/${t.id}`;d=await fetch(C,{method:"PUT",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}})}else d=await fetch("https://my-json-server.typicode.com/AGCG1991/crm-react/clientes",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});await d.json(),c("/crm-react/clientes")}catch(d){console.log(d)}};return n?e(j,{}):a("div",{className:"bg-white mt-10 px-5 py-10 rounded-md shadow-md  md:w-3/4 mx-auto",children:[e("h1",{className:"text-gray-600 font-bold text-xl uppercase text-center",children:(t==null?void 0:t.nombre)?"Editar Cliente":"Agregar Cliente"}),e(O,{initialValues:{nombre:(l=t==null?void 0:t.nombre)!=null?l:"",empresa:(r=t==null?void 0:t.empresa)!=null?r:"",email:(h=t==null?void 0:t.email)!=null?h:"",telefono:(m=t==null?void 0:t.telefono)!=null?m:"",notas:(v=t==null?void 0:t.notas)!=null?v:""},enableReinitialize:!0,onSubmit:async(i,{resetForm:d})=>{await s(i),d()},validationSchema:o,children:({errors:i,touched:d})=>a(P,{className:"mt-10",children:[a("div",{className:"mb-4",children:[e("label",{className:"text-gray-800",htmlFor:"nombre",children:"Nombre:"}),e(b,{id:"nombre",type:"text",className:"mt-2 block w-full p-3 bg-gray-50",placeholder:"Nombre del Cliente",name:"nombre"}),i.nombre&&d.nombre?e(f,{children:i.nombre}):null]}),a("div",{className:"mb-4",children:[e("label",{className:"text-gray-800",htmlFor:"empresa",children:"Empresa:"}),e(b,{id:"empresa",type:"text",className:"mt-2 block w-full p-3 bg-gray-50",placeholder:"Empresa del Cliente",name:"empresa"}),i.empresa&&d.empresa?e(f,{children:i.empresa}):null]}),a("div",{className:"mb-4",children:[e("label",{className:"text-gray-800",htmlFor:"email",children:"E-mail:"}),e(b,{id:"email",type:"email",className:"mt-2 block w-full p-3 bg-gray-50",placeholder:"Email del Cliente",name:"email"}),i.email&&d.email?e(f,{children:i.email}):null]}),a("div",{className:"mb-4",children:[e("label",{className:"text-gray-800",htmlFor:"telefono",children:"Tel\xE9fono:"}),e(b,{id:"telefono",type:"tel",className:"mt-2 block w-full p-3 bg-gray-50",placeholder:"Tel\xE9fono del Cliente",name:"telefono"}),i.telefono&&d.telefono?e(f,{children:i.telefono}):null]}),a("div",{className:"mb-4",children:[e("label",{className:"text-gray-800",htmlFor:"notas",children:"Notas:"}),e(b,{as:"textarea",id:"notas",type:"text",className:"mt-2 block w-full p-3 bg-gray-50 h-40",placeholder:"Notas del Cliente",name:"notas"})]}),e("input",{type:"submit",value:(t==null?void 0:t.nombre)?"Editar Cliente":"Agregar Cliente",className:"mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"})]})})]})};g.defaultProps={cliente:{},cargando:!1};const M=()=>a(x,{children:[e("h1",{className:"font-black text-4xl text-blue-900",children:"Nuevo Cliente"}),e("p",{className:"mt-3",children:"Llena los siguientes campos para registrar un cliente"}),e(g,{})]}),V=()=>{const[t,n]=p.exports.useState({}),[c,o]=p.exports.useState(!0),{id:s}=k();return p.exports.useEffect(()=>{(async()=>{try{const r=`https://my-json-server.typicode.com/AGCG1991/crm-react/clientes/${s}`,m=await(await fetch(r)).json();n(m)}catch(r){console.log(r)}o(!c)})()},[]),a(x,{children:[e("h1",{className:"font-black text-4xl text-blue-900",children:"Editar Cliente"}),e("p",{className:"mt-3",children:"Utiliza este formulario para editar datos de un cliente"}),(t==null?void 0:t.nombre)?e(g,{cliente:t,cargando:c}):e("p",{children:"Cliente ID no v\xE1lido"})]})},z=()=>{const[t,n]=p.exports.useState({}),[c,o]=p.exports.useState(!0),{id:s}=k();return p.exports.useEffect(()=>{(async()=>{try{const r=`https://my-json-server.typicode.com/AGCG1991/crm-react/clientes/${s}`,m=await(await fetch(r)).json();n(m)}catch(r){console.log(r)}o(!c)})()},[]),c?e(j,{}):Object.keys(t).length===0?e("p",{children:"No Hay Resultados"}):a("div",{children:[a("h1",{className:"font-black text-4xl text-blue-900",children:["Ver Cliente: ",t.nombre]}),e("p",{className:"mt-3",children:"Informaci\xF3n del Cliente"}),t.nombre&&a("p",{className:"text-4xl text-gray-600 mt-10",children:[e("span",{className:"text-gray-800 uppercase font-bold",children:"Cliente: "}),t.nombre]}),t.email&&a("p",{className:"text-2xl text-gray-600 mt-4",children:[e("span",{className:"text-gray-800 uppercase font-bold",children:"Email: "}),t.email]}),t.telefono&&a("p",{className:"text-2xl text-gray-600 mt-4",children:[e("span",{className:"text-gray-800 uppercase font-bold",children:"Tel\xE9fono: "}),t.telefono]}),t.empresa&&a("p",{className:"text-2xl text-gray-600 mt-4",children:[e("span",{className:"text-gray-800 uppercase font-bold",children:"Empresa: "}),t.empresa]}),t.notas&&a("p",{className:"text-2xl text-gray-600 mt-4",children:[e("span",{className:"text-gray-800 uppercase font-bold",children:"Notas: "}),t.notas]})]})};function J(){return e(x,{children:e(I,{children:a(L,{children:[e(u,{path:"/crm-react/",element:e(A,{})}),a(u,{path:"/crm-react/clientes",element:e(A,{}),children:[" ",e(u,{index:!0,element:e(D,{})}),e(u,{path:"nuevo",element:e(M,{})}),e(u,{path:"editar/:id",element:e(V,{})}),e(u,{path:":id",element:e(z,{})})]})]})})})}R.render(e(T.StrictMode,{children:e(J,{})}),document.getElementById("root"));
