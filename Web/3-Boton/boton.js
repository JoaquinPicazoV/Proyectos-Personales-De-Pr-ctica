// La función muestra/oculta el mensaje. Además, cambia el color y contenido del botón.
function clicks() {
    // Se acceden a los elementos del programa.
    let btn = document.getElementById('btn');
    let msg = document.querySelector('.message');

    // Si el mensaje está oculto, el botón bajará, cambiará de color y su ícono.
    // Además mostrar el mensaje.
    if (msg.style.display == 'none') {
        btn.disabled = true;
        btn.classList.add('clicked');
        btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        btn.style.backgroundColor = 'red';
        setTimeout(function () {
            msg.style.display = 'block';
            btn.disabled = false;
        }, 800);
    // Si el mensaje está siendo mostrado, se ocultará. 
    // También el botón subirá, cambiará de color y el ícono.
    } else {
        btn.disabled = true;
        btn.classList.remove('clicked');
        btn.innerHTML = '<i class="fa-solid fa-plus"></i>'
        btn.style.backgroundColor = '#00b89d';
        msg.style.display = 'none';
        setTimeout(function () {
            btn.disabled = false;
        }, 800);
    }


}
