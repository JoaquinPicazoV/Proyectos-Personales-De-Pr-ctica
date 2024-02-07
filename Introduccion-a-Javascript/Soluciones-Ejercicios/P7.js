// Clase vendedor
class vendedor{

    // El constructor de la clase y sus propiedades
    constructor(nombre, rut, ciudad, ventas){
        this.nombre = nombre;
        this.rut = rut;
        this.ciudad = ciudad;
        this.ventas = ventas;
    }


    // Método "saludar" que imprime un saludo por consola
    saludar(){
        console.log("¡Bienvenid@ a mi negocio!");
    }

    // Método "darVuelto" que calcula el vuelto a partir de un precio y el monto entregado por el cliente y muestra el resultado por consola
    darVuelto(monto, costo){
        console.log('El vuelto es: $'+(monto-costo));
        this.realizarVenta();
    }

    // Método que aumenta en 1 las ventas 
    realizarVenta(){
        this.ventas +=1;
    }
}

// Se crea un objeto a partir de la clase vendedor 
let vendedor1 = new vendedor('John','21555555-5','Puerto Montt',4);

// Se utilizan los métodos con el objeto creado anteriormente
console.log('Ventas iniciales de John: '+vendedor1.ventas);
vendedor1.saludar();
vendedor1.darVuelto(1500,1000);

console.log('Ventas finales de John: '+vendedor1.ventas);
