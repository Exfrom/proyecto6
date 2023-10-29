const marcoPuntaje =document.querySelector('.puntaje');
const puntajeActual = 0;
const puntajeLimite =5;

const htmlMapa = Array.from(Array(puntajeLimite)).map((item, i)=>{
    return '<div class="item item-${i}"data.pos="${i}"></div>';
});
marcoPuntaje.innerHTML = htmlMapa.join("");