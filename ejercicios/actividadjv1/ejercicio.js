const boton = document.getElementById('btn-compra')
const etiquetaTexto = document.getElementById('texto')

function cambiarTexto() {
    
    etiquetaTexto.innerText = "¡Gracias por su compra!"
    boton.innerText="!Comprado¡"
    etiquetaTexto.style.color = "green"

}

boton.addEventListener('click', cambiarTexto)