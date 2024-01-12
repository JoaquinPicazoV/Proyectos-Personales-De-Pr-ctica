/*
Ahora que ya sabe como declarar variables, los tipos de datos y sus operadores,
ya puede comenzar a concatenar. 
Para concatenar hay varias formas.
*/

// Variables para utilizar después
let cadena1 = 'Bienvenid@ ';
let cadena2 = 'a Javascript ';

/* ######## FORMA 1 ###########
usando el operador "+"
*/
console.log(cadena1 + cadena2);


/*
################ FORMA 2 ############
Usando el método "concat()"
*/
console.log(cadena1.concat(cadena2));


/*
######################## FORMA 3 ##################################
Usando template literals. 
En ese caso, en vez de usar comillas simples o dobles se usan las
comillas invertidas (``) y dentro de estas va el símbolo de peso
junto a llaves (${}).
Dentro de este último va la variable que se desea añadir al mensaje.
Por ejemplo: ${nombre_variable}
*/
console.log(`${cadena1}${cadena2}`);


