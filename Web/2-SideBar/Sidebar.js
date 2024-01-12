// Función que muestra/oculta los elementos del sidebar.
function interactuar() {
    var opciones = document.querySelector('.window');
    var sidebar = document.querySelector('.sidebar')

    if (opciones.style.display !== 'none') {
        opciones.style.display = 'none';
        sidebar.style.width = '90px';
    } else {
        opciones.style.display = 'block';
        sidebar.style.width = '250px';
    }
}

