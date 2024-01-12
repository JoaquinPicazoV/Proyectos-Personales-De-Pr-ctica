// Función que se encarga de hacer los cambios de color y ubicación del boton al hacer click.
function change() {
    // Se accede a los elementos del html
    let toggle = document.getElementById("tS");
    let btn = document.getElementById("btn");
    let bg = document.body;

    let currentStyle = window.getComputedStyle(toggle);

    /* Si actualmente el botón está a la izquierda, se cambiará a la derecha.
    Además, se cambiarán los colores de los elementos (se cambia a modo claro). */
    if (currentStyle.getPropertyValue('justify-content') === 'flex-start') {
        toggle.style.justifyContent = 'flex-end';
        toggle.style.backgroundColor = 'White';
        bg.style.backgroundColor = '#d2d2d2';
        btn.style.backgroundColor = '#d2d2d2';
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        btn.style.color = 'Black';
    /* Si actualmente el botón está a la derecha (modo claro), se cambiará a la izquierda.
    Además, se cambiarán los colores de los elementos (se cambia a modo oscuro). */
    } else {
        btn.style.backgroundColor = '#333';
        toggle.style.justifyContent = 'flex-start';
        bg.style.backgroundColor = '#333';
        toggle.style.backgroundColor = 'Black';
        btn.style.color = 'White';
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}
