
// scroll

ScrollReveal().reveal('.contenedor');

ScrollReveal().reveal('.navbar', {delay: 500});

ScrollReveal().reveal('h1', {delay: 500});

ScrollReveal().reveal('.contenido-dos', {delay: 400});

ScrollReveal().reveal('.rph', {delay: 600});

ScrollReveal().reveal('.rphTexto', {delay: 1000});


// funcion slider



const arrayImagenes = ["img/repairman-doing-air-conditioner-service.jpg", "img/air-conditioning-decoration-interior.jpg", "img/IMG-20211007-WA0065.jpg", "img/IMG-20211007-WA0061.jpg"];

const arrayTextos = ["Servicio Técnico","Instalaciones Domiciliarias", "Heladeras", "Refrigeración Automotores"];

let num = 0;

function slider() {
    const contenidoFlex = document.querySelector(".contenido-flex");
    const parrafo = document.querySelector(".parrafo")
    if (num >= arrayImagenes.length) {
        num = 0
    }


    contenidoFlex.style = `background: url(${arrayImagenes[num]}) no-repeat center center/cover`;
    parrafo.innerHTML = arrayTextos[num];
    num++
};

    setInterval(slider, 4000);

