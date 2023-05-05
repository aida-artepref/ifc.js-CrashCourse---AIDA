
import{ proyects } from "./proyects.js";



const currentUrl = window.location.href;
const url = new URL (currentUrl);
const currentProyectID= url.searchParams.get("id");

//Busca pryecto
const currentProyect= proyects.find(proyect=> proyect.id===currentProyectID);

//añade la url al iframe
const iframe=document.getElementById('model-iframe');
iframe.src=currentProyect.url;