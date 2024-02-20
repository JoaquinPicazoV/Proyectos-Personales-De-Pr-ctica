let defecto = document.getElementById('options');
let ventana = document.getElementById('window');


// FUNCION PARA ABRIR Y CERRAR LA VENTANA DE OPCIONES
function interactuar() {
    let ancho = window.innerWidth;
    if(ancho<800){
        if (defecto.style.display === "flex" || defecto.style.display === "") {
            defecto.style.display = "none";
            ventana.style.display = "grid";
        } else {
            defecto.style.display = "flex";
            ventana.style.display = "none";
        }

    }else{
        if (defecto.style.display === "flex" || defecto.style.display === "") {
            defecto.style.display = "none";
            ventana.style.display = "flex";
        } else {
            defecto.style.display = "flex";
            ventana.style.display = "none";
        }
    }
    
}


// FUNCIONES PARA HACER CAMBIOS DE COLOR DE FONDO E IMAGEN AL COLOCAR EL MOUSE ENCIMA DE LAS OPCIONES
function inicio() {
    document.addEventListener('DOMContentLoaded', function () {
        let inicio = document.querySelector('.home');
        let imagen = document.querySelector('.der');
        let fondo = document.querySelector('.izq')

        inicio.addEventListener('mouseover', function () {
            imagen.style.backgroundImage = 'url("../7-Background/img/home.jpg")';
            fondo.style.backgroundColor = 'grey';
        });
    });
}

function quienesSomos() {
    document.addEventListener('DOMContentLoaded', function () {
        let inicio = document.querySelector('.who');
        let imagen = document.querySelector('.der');
        let fondo = document.querySelector('.izq')

        inicio.addEventListener('mouseover', function () {
            imagen.style.backgroundImage = 'url("../7-Background/img/who.jpg")';
            fondo.style.backgroundColor = 'black';
        });
    });
}

function proyectos() {
    document.addEventListener('DOMContentLoaded', function () {
        let inicio = document.querySelector('.proyect');
        let imagen = document.querySelector('.der');
        let fondo = document.querySelector('.izq')

        inicio.addEventListener('mouseover', function () {
            imagen.style.backgroundImage = 'url("../7-Background/img/proyectos.jpg")';
            fondo.style.backgroundColor = 'green';
        });
    });
}

function contacto() {
    document.addEventListener('DOMContentLoaded', function () {
        let inicio = document.querySelector('.contacto');
        let imagen = document.querySelector('.der');
        let fondo = document.querySelector('.izq')

        inicio.addEventListener('mouseover', function () {
            imagen.style.backgroundImage = 'url("../7-Background/img/contacto.jpg")';
            fondo.style.backgroundColor = 'orange';
        });
    });
}


function redesSociales() {
    document.addEventListener('DOMContentLoaded', function () {
        let inicio = document.querySelector('.redes');
        let imagen = document.querySelector('.der');
        let fondo = document.querySelector('.izq')

        inicio.addEventListener('mouseover', function () {
            imagen.style.backgroundImage = 'url("../7-Background/img/social.jpg")';
            fondo.style.backgroundColor = 'blue';
        });
    });
}





// Llama a la función cuando sea necesario
inicio();
quienesSomos();
proyectos();
redesSociales();
contacto();