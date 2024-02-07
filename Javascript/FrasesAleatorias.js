/*
Este programa consiste que al ejecutarlo, muestra en consola alguna frase motivacional del arreglo de forma aleatoria.
*/

// Arreglo con las frases
let frases = [
"Las cosas no tienen por qué cambiar el mundo para ser importantes",
"El optimismo perpetuo es un multiplicador de fuerzas",
"Puedes hacerlo, deberías hacerlo, y si eres lo suficientemente valiente como para empezar, lo harás",
"La verdadera oportunidad hacia el éxito reside en la persona, no en el puesto de trabajo",
"Cada misión noble parece imposible en un principio",
"La derrota no es amarga a no ser que te la tragues",
"Para realizar una acción positiva hay que mantener una visión positiva",
"Cada día trae nuevas opciones",
"El poder de la imaginación nos hace infinitos",
"El éxito es caer nueve veces y levantarse diez",
"Haz de cada día tu obra maestra",
"Si puedes cambiar tu mentalidad, puedes cambiar tu vida"
];

// Se establecen la posición mínima y máxima que puede resistir el arreglo
let min = 0;
let max = frases.length-1;

// Se genera un número aleatorio entre el mínimo y máximo anterior
let pos = Math.floor(Math.random() * (max - min + 1)) + min;

// Se muestra la frase aleatoria
console.log(frases[pos]);

/* 
Elementos que mejorar a futuro:
- Añadir el autor de la frase y una breve explicación. Se podrían utilizar objetos (frase, autor, explicación).
*/