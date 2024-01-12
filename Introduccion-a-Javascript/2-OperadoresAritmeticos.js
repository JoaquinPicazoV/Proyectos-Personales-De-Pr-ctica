/* 
En Javascript se pueden realizar operaciones matemáticas.
A continuación se mostraran los operadores aritméticos de este lenguaje y su uso.
*/
console.log(13+2); // Operador de suma (+)

console.log(245-45); // Operador de resta (-)

console.log(35*2); // Operador de multiplicación (*)

console.log(15/3); // Operador de división (/)

console.log(15%6); // Operador de módulo (%)
/* El operador de módulo devuelve el resto de una 
división entre dos números.
Es útil por ejemplo para saber si un número es par o no,
ya que si el resto es cero al dividir por dos, significa que es par*/

/*
También se pueden realizar operaciones "mixtas", por ejemplo:
*/
console.log(45+2*5); // Primero se calculará 2*5 y luego se le sumará 45


/*
El uso de paréntesis afecta en las operaciones matemáticas, por lo que hay que estar atentos
en donde se utilizan. Por ejemplo:
*/
console.log((45+2)*5); // Ahora se calcula 45+2 y luego se multiplica por 5


/*
También se pueden calcular potencias
*/
console.log(5**2); // Operador de potencia (**)
console.log(Math.pow(5,2)); // También es posible usando el objeto "Math" y su función "pow"


/*
También se pueden calcular raíces cuadradas
*/
console.log(Math.sqrt(49)); // Se usa el objeto "Math" y su función "sqrt"