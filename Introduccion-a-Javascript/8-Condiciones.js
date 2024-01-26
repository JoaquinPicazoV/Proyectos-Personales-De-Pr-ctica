/*
###################################################### DECLARACION IF ##################################################################
Su estructura es:

if(condición){
    // Código
}else{
    // Código
}

Si esa condición es correcta, se ejecutará
el código que contienen las llaves { } que están después del "if".
Si la condición es falsa, se ejecutará el código que está dentro de las llaves que están después del "else".

En el siguiente ejemplo a la variable "edad" se le otorga el valor de 16. Luego, nos encontramos con un "if"
en el cual la condición compara si la edad es mayor o igual a 18. En caso de que sea correcto (que la edad es mayor o igual que 18),
el programa mostrará por consola "Es mayor de edad". En caso de que no se cumpla la condición, el programa mostrará
"No es mayor de edad". Antes de analizar el código, ¿16 es mayor o igual que 18?, pues no. Por lo tanto, ya sabemos que responderá
el programa. Ahora veamos el código.
*/

let edad = 16;
if(edad>=18){
    console.log('Es mayor de edad');
}else{
    console.log('No es mayor de edad');
}




/*
################################################# DECLARACION ELSE IF ####################################################
Su estructura es:

if(condición){
    // Código
}else if(segunda condición){
    // Código
}else{

}

Tiene el mismo funcionamiento que la declaración mencionada anteriormente (declaración if). 
La única diferencia es que esta tiene un "else if" entre el "if" y el "else". 
Primero, el programa analizará la condición del "if", si esta se cumple, se ejecutará el código que contienen
las llaves del "if". En caso de que la condición sea falsa, el programa pasará a analizar la condición
del "else if", si esta condición es correcta, se ejecutará el código que contienen las llaves del "else if".
Finalmente, si la condición analizada del "else if" es falsa, al programa no le queda otra opción que 
ejecutar el código que contienen las llaves del "else", ya que esta se ejecuta si NINGUNA de las condiciones
analizadas anteriormente son correctas. Cuando realices tu programa, puedes usar todos los "else if" que quieras entre 
el "if" y el "else".

En el siguiente ejemplo, se simula que una persona va conduciendo su vehículo, y ve la luz del semáforo, esta luz en este
caso es de color amarillo. Ahora la pregunta es, ¿qué deberá hacer?. Dejémosle la desición a nuestro siguiente programa.
*/

let colorLuzSemaforo = 'amarillo';

if(colorLuzSemaforo == 'rojo'){
    console.log("Detenga el auto, no puede pasar");
}else if(colorLuzSemaforo == 'amarillo'){ // La condición de esta línea es la que se cumple en este caso
    console.log("Disminuya su velocidad, tendrá que detenerse");
}else if(colorLuzSemaforo == 'verde'){
    console.log("Siga conduciendo");
}else{
    console.log("Ninguno de los casos anteriores funcionaron. ¡No sé que hacer!")
}





/*
########################################################### SWITCH ############################################################################
Su estructura es:

switch(valor){
    case valor1:
        // código
        break;
    case valor2:
        // código
        break;
    default:
        // código
}

En este caso, switch recibe un valor dentro de sus paréntesis, el cual usará para ir 
comparando con cada caso que exista dentro de sus llaves { }.
Primero, comparará el valor entregado con el valor1, si este valor coincide, se ejecutará el código 
existente para ese caso y el "break" hará que se detenga el switch porque ya se encontró una coincidencia.
En caso de que el valor otorgado al switch no coincida con el valor1, el programa pasará al siguiente caso
comparando el valor otorgado con el valor2. Si coinciden, se ejecutará el código perteneciente a ese caso y el "break"
se encargará de detener el switch ya que se encontró una coincidencia. En caso de que el valor otorgado y el valor2 no coincidan,
existe el bloque "default", este es como la solución de "emergencia" en caso de que no hay coincidencia en ninguno de los casos anteriores.
Por lo que si no se encuentra coincidencia entre el valor otorgado y los casos disponibles, se ejecutará el código perteneciente a "default".

Ahora se verá un ejemplo.
Supongamos que Carlitos está aprendiendo el orden de los días de la semana. Él sabe que hoy es miércoles y sospecha que es el quinto día 
de la semana. ¿Estará en lo correcto?. Nuestro siguiente código nos lo dirá.
*/

let diaCarlitos = 'Miércoles';
switch(diaCarlitos){
    case 'Lunes':
        console.log("Es el primer día de la semana");
        break;
    case 'Martes':
        console.log("Es el segundo día de la semana");
        break;
    case 'Miércoles': // Este caso será el correcto
        console.log("Es el tercer día de la semana");
        break;
    case 'Jueves':
        console.log("Es el cuarto día de la semana");
        break;
    case 'Viernes':
        console.log("Es el quinto día de la semana");
        break;
    case 'Sábado':
        console.log("Es el sexto día de la semana");
        break;
    case 'Domingo':
        console.log("Es el séptimo día de la semana");
        break;
    default:
        console.log("No hay coincidencias");
} 
/* Ahora respondiendo a la pregunta gracias a la respuesta de este programa, sabemos que Carlitos estaba equivocado. La
respuesta correcta era que el miércoles es el tercer día de la semana. Carlitos claramente deberá seguir estudiando. */






/*
######################################################## OPERADOR TERNARIO ####################################################################
Su estructura es:

nombre_variable = (condición) ? respuesta1 : respuesta2;

Consiste en asignar un valor a una variable a partir de una condición.
Primero se analiza la condición. Si la condición es verdadera, a la variable se le otorgará como valor la respuesta1.
Si la condición es falsa, a la variable se le otorgará como valor la respuesta2.

Ahora veremos un ejemplo.
Supongamos que a Don Patricio fué a comprar cervezas para el desayuno y le pidieron su cédula de identidad para verificar que es mayor edad. 
El vendedor al ver la cédula se da cuenta que tiene 72 años. ¿Es mayor de edad para poder comprar esas cervezas?. El siguiente código responderá 
la duda.
*/

let edadPatricio = 72;
esMayorDeEdad = (edadPatricio>=18) ? 'Es mayor de edad' : 'Es menor de edad';
console.log(esMayorDeEdad);
/* Como respuesta, sabemos que es mayor de edad. Ahora Don Patricio podrá desayunar. */


/*
####################################################### OPERADORES && y || #############################################################
El operador lógico AND (&&) devuelve true si ambas condiciones son verdaderas, de lo contrario, devuelve false. Es decir, que el código
que se encuentra dentro del IF solo se ejecutará si ambas condiciones son verdaderas. Ejemplo:

let usuarioRegistrado = true;
let contrasenaCorrecta = true;

if (usuarioRegistrado && contrasenaCorrecta) {
  console.log("Acceso permitido a la aplicación.");
} else {
  console.log("Acceso denegado.");
}



El operador lógico OR (||) devuelve true si al menos una de las condiciones es verdadera. Es decir, que si el código que se encuentra
dentro del IF se ejecutará si al menos una de las condiciones es verdadera. Ejemplo:

let esEstudiante = false;
let esEmpleado = true;

if (esEstudiante || esEmpleado) {
  console.log("La persona es estudiante o empleado.");
} else {
  console.log("La persona no es ni estudiante ni empleado.");
}

*/