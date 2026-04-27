let fondo = document.querySelector('.fondo');
let animacion = false;

function updatefondo(){
    let movY = window.scrollY;
    let maxScroll = 400;
    let movimiento = Math.min(movY / maxScroll, 1);
    let escala = 1 + movimiento * 5;
    let opacidad = 1 - movimiento;

    fondo.style.transform = `scale(${escala})`;
    fondo.style.opacity = opacidad;
    animacion = false;
}

window.addEventListener('scroll', () => {
    if (!animacion){
        animacion = true;
        requestAnimationFrame(updatefondo);
    }
})
// Carrusel - mueve las imagenes al hacer clic en los puntos
let carrusel = document.querySelector('.carrusel');
let puntos = document.querySelectorAll('.carrusel-puntos a');

puntos.forEach(function(punto, index) {
    punto.addEventListener('click', function(e) {
        e.preventDefault();
        carrusel.scrollTo({
            left: carrusel.offsetWidth * index,
            behavior: 'smooth'
        });
    });
});