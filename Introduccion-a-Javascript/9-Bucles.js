/*
####################################### ¿QUÉ SON LOS BUCLES? ¿PARA QUÉ SIRVEN? ##########################################################
Son herramientas fundamentales que permiten ejecutar código repetidamente hasta que se cumpla una determinada condición.

Los bucles o ciclos son muy importantes. Ya que esto permite realizar tareas largas con menores líneas de código. Por ejemplo si
te pidieran mostrar en pantalla los números del 1 al 100, realizar cien console.log() con cada número sería un trabajo largo y aburrido.
En cambio, usando ciclos se puede llegar a lograr en un par de minutos con tan solo un par de líneas de código.
Los bucles o ciclos también permiten trabajar de forma efectiva con estructuras de datos como matrices o listas.
Tienen demasiados usos importantes.
*/


/*
############################################ BUCLE WHILE ####################################################
Su estructura es:

while(condición){
    // código
}

En resumen, el código que está dentro de las llaves { }  se ejecutará todo el tiempo mientras la condición
que está dentro de los paréntesis () del while sea verdadera.

El siguiente código imprime desde el número 1 al 10 y lo muestra en consola.
*/
let i = 1;
while (i <= 10) {
  console.log(i);
  i++; // Corresponde a incrementar la variable "i" en 1 tras cada ciclo completado. Otra forma es i = i + 1
}




/*
######################################################### BUCLE DO WHILE ##############################################################
Su estructura es:

do {
  // código
} while (condición);

Su funcionamiento es casi igual que el ciclo While, solo que tiene una diferencia y es muy importante.
La diferencia es que el bucle Do While si o si se ejecuta al menos una vez el código que contiene, porque por su estructura primero se 
ejecuta el código y luego analiza la condición. Entonces, va ejecutarse al menos una vez a pesar de no cumplir la condición.

El siguiente código consiste en que se va a ejecutar el código mientras el número inicial (1) sea menor a 0.
Claramente 1 no es menor a 0, pero como se explicó anteriormente, por la estructura del bucle Do While si o si se ejecutará al menos
una vez el código que contiene, a pesar de que la condición sea falsa. Por lo tanto en la terminal se imprimirá el 1.
*/
let numero = 1;

do {
  console.log(numero);
  numero++;
} while (numero < 0);




/*
############################################################ BUCLE FOR ######################################################################
Su estructura es:

for (inicialización; condición; iteración) {
  // código
}

inicialización: Una expresión que se ejecuta antes de que comience el bucle. Es en que número o posición empezará el ciclo. Por ejemplo, i=0

condición: Una expresión que se evalúa antes de cada iteración. Si la condición es verdadera, el código dentro del bucle for se ejecuta. 
Si es falsa, el bucle se detiene.

expresión de iteración: Se ejecuta después de cada iteración. Se utiliza típicamente para actualizar o modificar la variable de control.
Esto es para que el bucle en algún momento deje de cumplir la condición y no se ejecute de forma infinita.

código: El código que se ejecutará en cada iteración del bucle.

El siguiente código de ejemplo indica que la variable empezará en 1 (i=1) y el bucle se ejecutará mientras "i" sea menor a 10. También,
la variable de control "i" aumentará su valor en 1 cada vez que termine una iteración. El código interior consiste en imprimir en consola
los números del 1 al 9 (incluyendo ambos). El 10 no lo imprime porque en el momento que la variable de control "i" aumenta a 10, deja de cumplir 
la condición del bucle For, por lo tanto, no se ejecuta el código que está dentro del bucle, eso significa que no alcanza a imprimir el 10 en consola.
*/

for (let i = 1; i < 10; i++) {
    console.log(i);
}
  



/*
###################################################### USO DE BREAK EN BUCLES ####################################################################
Un "break" en un bucle generará que se detenga y el algoritmo salga del bucle.

A continuación se mostrará un ejemplo.
El ciclo primeramente lo que hace es iniciar en 0, ejecutarse mientras i es menor a 10 y su variable de control (i) aumenta en 1 al final de 
cada iteración. Es decir, hasta ahora se sabe que imprimiría en consola los números del 1 al 9 (incluyendo ambos). Pero, si vemos el código
que contiene el bucle, se puede evidenciar que hay una condición que básicamente dice que al momento en que la variable de control (i) es igual a 5
hará que se ejecute un "break", es decir, que se detenga el bucle. Por lo tanto, podemos adelantar que este bucle ya no imprimirá los números 
del 1 al 9, sino que solo del 1 al 5.

*/
for (let i = 1; i < 10; i++) {
    console.log(i);
    if (i == 5) {
      break; 
    }
}





/*
######################################################### USO DEL CONTINUE EN BUCLES #################################################################
Un "continue" en un bucle generará que el bucle pase a la siguiente iteración, ignorando el resto de código que seguía después del "continue".

En el siguiente ejemplo, en el bucle while la variable de control empieza en 0. El bucle se ejecutará mientras la variable de control (i) sea
menor a 5. El incremento está al inicio del código y antes de la impresión por pantalla, por lo tanto, de todo esto podemos deducir que el ciclo
tiene pensado imprimir del 1 al 5. Pero, si analizamos aún más el código que contiene el bucle While, podemos ver que hay una condición.
Esta condición dice que si la variable de control (i) es igual a 2, se ejecutará un "continue", ocasionando que el ciclo pase a la siguiente iteración
e ignorando el código restante, por lo tanto el número 2 no se va a imprimir en pantalla. 
Finalmente, podemos concluir que solo se imprimirán en consola los números 1, 3, 4 y 5.
*/
i = 0;
while (i < 5) {
  i++;
  
  if (i == 2) {
    continue; // Salta a la siguiente iteración cuando i es igual a 2, por lo tanto no alcanza a imprimir el número 2 en la consola.
  }

  console.log(i);
}
  