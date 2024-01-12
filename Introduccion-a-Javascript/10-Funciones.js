/*
########################################################### FUNCIONES #######################################################################
Su estructura es:

function nombreDeLaFuncion(parámetro1, parámetro2, ...) {
  // código
  return variable; // opcional
}

- nombreDeLaFuncion: Básicamente es el nombre que le pondrás a tu funcion, con ese nombre la identificarás y luego la podrás
usar.
- código: Es el bloque de código que se ejecutará cuando la función sea llamada. Este es el cuerpo de la función. Hace uso de los parámetros
entregados al inicio de la función en los paréntesis ().
- parámetros: Son valores que puedes pasar a la función. Puedes tener cero o más parámetros.
- return: Indica que debe "devolver" o mejor dicho retornar el valor/variable que se le entregue. Es opcional, ya que se pueden hacer
funciones que no tengan un "return". Depende para que lo quieras usar.

Para entender mejor como opera una función, imagina que la función es una licuadora. A esta licuadora le entregas ingredientes (parámetros),
por lo que la licuadora con esos ingredientes (parámetros) realiza una serie de procesos (código/algoritmo) para generar un producto y 
finalmente te devuelve ese producto finalizado (return).

La utilidad de las funciones es que pueden minimizar las líneas de código, ya que esto permite reutilizar el código y no hacer dos 
veces o más el mismo algoritmo. Eso, al mismo tiempo permite que se pueda mantener más fácil un código, ya que si se desea modificar
algo del algoritmo, no habrá que modificarlo dos veces o más, sino que, simplemente modificar una sola función, ya que esa se utilizaría
en todo el código.
*/

/* Te entregan las siguientes edades:
Matías: 23 años
Jose: 47 años
Sofia: 17 años

Luego te piden que hagas un algoritmo que verifique si son mayor de edad o no. Y te entregan el
siguiente código para que lo modifiques según la solución que quieras dar:

    if(edad>=18){
        console.log('Es mayor de edad');
    }else{
        console.log('No es mayor de edad');
    }

Una forma de solucionar es hacer ese código tres veces y reemplazar las variables, o también ir uno por uno cambiando la variable. 
En este caso es posible, pero, ¿que pasaría si te entregan 300 edades? ¿harías ese código 300 veces o cambiarías 300 veces las variables
para cada edad si fuera ese caso?. ¿habrá una forma de hacer ese código una sola vez y aún así poder analizar las tres edades?. Pues sí, 
creando una función.
*/

// Edades:
let edadMatias = 23;
let edadJose = 47;
let edadSofia = 17;

// Función:
function analizador(edad){
    if(edad>=18){
        return 'Es mayor de edad';
    }else{
        return 'No es mayor de edad';
    }
}

// Se imprime en consola el análisis al llamar a la función:
console.log(analizador(edadMatias)); // Se verifica que Matias ES mayor de edad
console.log(analizador(edadJose)); // Se verifica que Jose ES mayor de edad
console.log(analizador(edadSofia)); // Se verifica que Sofia NO ES mayor de edad

/* Se puede evidenciar que el uso de una función permitió hacer un código más reducido al reutilizar código */
