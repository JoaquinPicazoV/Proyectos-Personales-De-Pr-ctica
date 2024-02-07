// Opciones de palabras para el modo fácil
let palabrasFacil = [
    "sol",
    "luz",
    "pan",
    "mesa",
    "flor",
    "mar",
    "gato",
    "pera",
    "lago",
    "pato",
    "uva",
    "foco",
    "piedra",
    "nieve",
    "rosa",
    "agua",
    "ruta",
    "casa",
    "lana",
    "nube"
];

// Opciones de palabras para el modo difícil
let palabrasDificil = [
    "bicicleta",
    "computadora",
    "elefante",
    "reloj",
    "exquisito",
    "esternocleidomastoideo",
    "fotografía",
    "javascript",
    "hipopotamo",
    "arquitectura",
    "chocolate",
    "equinoccio",
    "paleontologia",
    "extraterrestre",
    "xilofono",
    "onomatopeya",
    "programar",
    "quintuplicar",
    "paralelepípedo",
    "hipotenusa"
];

// Obtener el modo elegido por el usuario
let modo = prompt("¿EN QUÉ DIFICULTAD DESEA JUGAR? (Ingrese solo el número):\n1) Fácil\n2) Difícil");
modo = parseInt(modo);

let acertadas = 0; 
let vidas = 10; 
let aux; 
let utilizadas = [];

let min = 0; 
let max; 
let pos; 
let palabra; 
let tam;
let lin; 
 
// Se hace un switch con las posibles opciones que pueda elegir el usuario
switch (modo) {
    // Modo fácil
    case 1: 
        min = 0;
        max = palabrasFacil.length - 1;
        pos = Math.floor(Math.random() * (max - min + 1)) + min;
        palabra = palabrasFacil[pos];
        tam = palabra.length;
        lin = "-".repeat(tam);
        aux = lin.split('');

        // Bucle principal del juego
        while (acertadas < tam) {
            // Analiza si se han agotado las vidas
            if (vidas == 0) { 
                alert('HAS PERDIDO, NO TE QUEDAN MÁS VIDAS. LA PALABRA ERA: ' + palabra);
                break;
            }

            let letra = prompt("Vidas restantes: " + vidas + "\nPalabra: " + aux.join('') + "\nIngrese una letra:");

            // Analiza si la letra ya ha sido utilizada
            if (verUtilizada(letra, utilizadas) == false) { 
                buscarLetra(palabra, letra); 
                utilizadas.push(letra);
            } else {
                alert('Ya usaste la letra ' + letra);
            }
        }
        // Verifica si se han adivinado todas las letras de la palabra
        if (acertadas == tam) {
            alert('FELICIDADES, ADIVINASTE LA PALABRA: ' + aux.join(''));
        }

        break;
    
    // Modo difícil
    case 2: 
        min = 0;
        max = palabrasDificil.length - 1;
        pos = Math.floor(Math.random() * (max - min + 1)) + min;
        palabra = palabrasDificil[pos];
        tam = palabra.length;
        lin = "-".repeat(tam);
        aux = lin.split('');

        // Bucle principal del juego
        while (acertadas < tam) {
             // Verifica si se han agotado las vidas
            if (vidas == 0) {
                alert('HAS PERDIDO, NO TE QUEDAN MÁS VIDAS. LA PALABRA ERA: ' + palabra);
                break;
            }

            let letra = prompt("Vidas restantes: " + vidas + "\nPalabra: " + aux.join('') + "\nIngrese una letra:");

            // Analiza si la letra ya ha sido utilizada
            if (verUtilizada(letra, utilizadas) == false) { 
                buscarLetra(palabra, letra); 
                utilizadas.push(letra);
            } else {
                alert('Ya usaste la letra ' + letra);
            }
        }
        // Revisa si se han adivinado todas las letras de la palabra
        if (acertadas == tam) { 
            alert('FELICIDADES, ADIVINASTE LA PALABRA: ' + aux.join(''));
        }

        break;
    default:
        alert('No ingresaste una opción válida');
}

// Función para buscar una letra en la palabra y actualizar las letras adivinadas
function buscarLetra(palabra, letra) {
    let existe = 0;
    let size = palabra.length;
    let i = 0;
    while (i < size) {
        if (letra == palabra[i]) {
            acertadas++;
            aux[i] = letra;
            existe++;
        }
        i++;
    }
    if (existe == 0) {
        vidas--;
    }
}

// Función para verificar si una letra ya ha sido utilizada
function verUtilizada(letra, arreglo) {
    let existe = false;
    let size = arreglo.length;
    let i = 0;
    while (i < size) {
        if (letra == arreglo[i]) {
            existe = true;
        }
        i++;
    }
    return existe;
}
