
import{ proyects } from "./proyects.js";
// obtiene todas card
const proyectContainer= document.getElementById("proyects-container");
const proyectCards = Array.from(proyectContainer.children);

const templateProyectCard= proyectCards[0];

const baseUrl='./index.html';


for (let proyect of proyects){
    //creamos una nueva card, con metodo clone
    const newCard= templateProyectCard.cloneNode(true);
    //añade nombre a  card
    const cardTitle=newCard.querySelector('span');
    cardTitle.textContent= proyect.name;

    const boton = newCard.querySelector('a');

    //añade url a card
    boton.href= baseUrl+`?id=${proyect.id}`

    proyectContainer.appendChild(newCard);
}

templateProyectCard.remove();






