let n = 5;
let fact = 1;   // Se usará para almacenar el resultado del factorial

// Ciclo que se ejecuta mientras el contador sea mayor a 0, empezando desde el número que se desea obtener el factorial
while(n>0){
    fact *=n;   // Se multiplica el valor almacenado por el número actual, este número actual disminuye en cada ciclo (5,4,3,2,1)
    n--;   // Se disminuye el número para ir multiplicando con sus antecesores en cada ciclo
}


// Se muestra el resultado final
console.log(fact);