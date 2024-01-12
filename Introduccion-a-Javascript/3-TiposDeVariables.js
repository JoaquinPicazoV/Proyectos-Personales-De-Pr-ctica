/*
Existen 3 tipos de variables 
- var
- let
- const
*/
 
/*
############################################### VAR ######################################################
1) Tiene ámbito de función (está disponible en cualquier lugar dentro de la función en la que se declaró).
2) Está sometida a hoisting. Puede utilizarse antes de ser declarada.
3) Puede ser re-declarada en el mismo ámbito sin generar un error.
*/
var ciudad = 'Santiago';
console.log(ciudad);


/*
########################################## LET ##################################################
1) Tiene ámbito de bloque. Esto significa que la variable está disponible solo dentro del bloque.
2) No está sometida a hoisting. Por lo que NO se puede acceder a ella antes de su declaración. 
3) No puede ser re-declarada en el mismo ámbito.
*/
let region = 'Región Metropolitana';
console.log(region);


/*
############################################ CONST ##############################################
1) No está sometida a hoisting. Por lo que NO se puede acceder a ella antes de su declaración. 
2) No se pueden reasignar valores, ya que es una constante.
*/
const planeta = 'Tierra';
console.log(planeta);

/*
Es más recomendable usar let en vez de var, ya que se tiene más "control" y no dificulta tanto
el mantenimiento del código. Pero no olvidar que cada uno tiene su uso específico, por algo cada
uno tiene características diferentes.
*/