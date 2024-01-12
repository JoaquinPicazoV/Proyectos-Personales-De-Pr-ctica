/*
############################## CADENA/STRING ###############################
Este tipo de dato se encuentra dentro de comillas doble ("") o simples ('').
*/
let string = 'Hola, esto es Javascript';

/*
############################## NUMERO/NUMBER ###############################
Este tipo de dato NO va dentro de ningún tipo de comillas. Es MUY importante
no confundir esto.
*/
let numero = 30;

/*
############################## BOOLEANOS #############################
Este tipo de dato consiste únicamente en dos valores: "true" y "false".
*/
let verdadero = true;
let falso = false;

/*
############################## NULL ####################################
Este tipo de dato es para representar un valor nulo de forma intencional.
*/
let invitados = null;

/*
############################## UNDEFINED ###############################
Este tipo de dato está presente cuando no se ha inicializado una variable.
*/
let indefinido;
console.log(indefinido); // En consola se mostrará "undefined"

/*
##################### SYMBOL ######################
Este tipo de dato representa un identificador único.
*/
let simbolo = Symbol("identificador");

/*
############################### OBJECT ################################
Este tipo de dato representa una colección de pares clave-valor.
Busca "acercarse" a la vida real. Por ejemplo, un cliente tiene 
propiedades o atributos (nombre, rut, email, numero telefónico, etc...)
*/
let cliente1 = {
    nombre : 'John Doe',
    rut : '22111111-1',
    email : 'JohnDoe@gmail.com',
    num_telef : '34857768'
}
console.log(cliente1); // Mostrará los datos de la variable "cliente1" en consola
