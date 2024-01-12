// Estado de la aplicación (modo claro/oscuro).
let estado = 'oscuro';

// Función para cambiar el tema entre claro y oscuro.
function cambiarTema() {

    // Se obtiene el acceso a los elementos de la calculadora.
    let numeros = document.querySelectorAll('.numero');
    let simbolo = document.querySelectorAll('.simbolo');
    let borrarTodo = document.querySelector('.borrarTodo');
    let borrar = document.querySelector('.borrar');
    let calculadora = document.querySelector('.calculadora');
    let pantalla = document.querySelector('.pantalla');
    let tema = document.querySelector('.tema');

    // Si el estado actual es modo oscuro, lo cambiará al claro (a todos los elementos).
    if (estado == 'oscuro') {
        calculadora.style.backgroundColor = 'white';
        pantalla.style.backgroundColor = 'grey';
        tema.style.backgroundColor = 'black';

        numeros.forEach(function (numeros) {
            numeros.style.backgroundColor = '#ACC9FD';
        });
        simbolo.forEach(function (simbolo) {
            simbolo.style.backgroundColor = '#FDACF5';
        });

        borrarTodo.style.backgroundColor = '#FF9F9F';
        borrar.style.backgroundColor = 'lightgreen';
        estado = 'claro';

        // En caso de que no sea oscuro, significa que está en modo claro. Por lo tanto, lo cambiará a modo oscuro (a todos los elementos).
    } else {
        calculadora.style.backgroundColor = 'black';
        pantalla.style.backgroundColor = 'white';
        tema.style.backgroundColor = 'white';

        numeros.forEach(function (numeros) {
            numeros.style.backgroundColor = 'lightgreen';
        });
        simbolo.forEach(function (simbolo) {
            simbolo.style.backgroundColor = 'lightgoldenrodyellow';
        });

        borrarTodo.style.backgroundColor = 'lightcoral';
        borrar.style.backgroundColor = 'lightblue';
        estado = 'oscuro';
    }
}

// Esta funcion agrega caracteres a la pantalla de la calculadora.
// Si la pantalla solo contiene "0" significa que no tiene nada, por lo tanto lo borra y no los concatena.
// En caso de que no sea "0" el único elemento de la pantalla, va a concatenar los símbolos que se vayan añadiendo.
function agregar(caracter) {
    const pantalla = document.getElementById('pantalla');
    const texto = pantalla.innerHTML;
    if (texto == 0) {
        pantalla.innerHTML = caracter;
    } else {
        pantalla.innerHTML += caracter;
    }
}

// Esta función toma lo escrito en la pantalla de la calculadora y con eval() calcula las operaciones.
function calcular() {
    const pantalla = document.getElementById('pantalla');
    const texto = pantalla.innerHTML;

    pantalla.innerHTML = eval(texto);
}

// Esta función sirve para borrar todo lo de la pantalla, lo reemplaza por "0" como el estado inicial.
function borrarTodo() {
    const pantalla = document.getElementById('pantalla');
    pantalla.innerHTML = '0';
}

// Esta función borra 1 elemento de lo existente en la pantalla. Si queda vacío, se reemplaza por "0".
function borrar() {
    const pantalla = document.getElementById('pantalla');
    const texto = pantalla.innerHTML;
    if (texto.length > 1) {
        pantalla.innerHTML = texto.slice(0, -1);
    } else {
        pantalla.innerHTML = '0';
    }
}