/* Este programa consiste en una simulaciòn de un banco (muy simplificada a la realidad) en la cual se crea un cliente, este cliente
puede depositar más dinero en su cuenta, extraer, transferir a otro cliente y consultar su saldo disponible */

// Creo la clase client
class client {

    // Constructor de client
    constructor(name, rut, balance) {
        this.name = name;
        this.rut = rut;
        this.balance = balance;
    }

    // Deposita (agrega dinero) a la cuenta del usuario
    deposit(amount) {
        this.balance += amount;
    }

    // Un usuario transfiere un monto a otro usuario
    transfer(amount, addressee) {
        if (this.balance - amount > 0) {
            this.balance -= amount;
            addressee.balance += amount;
            console.log('Transferencia realizada con exito');
        } else {
            console.log('Saldo insuficiente. No se puede realizar transferencia.');
        }

    }

    // Un usuario puede extraer dinero de su cuenta
    extract(amount) {
        if (this.balance - amount > 0) {
            this.balance -= amount;
            console.log('Retiro de dinero realizado con exito.');

        } else {
            console.log('Saldo insuficiente. No se puede retirar dinero.');
        }
    }

    // Un usuario puede ver su saldo restante de su cuenta
    viewBalance() {
        console.log('Su saldo actual es: $' + this.balance);
    }
}

// Se crean los objetos a partir de la clase client
let client1 = new client('Mark', '21333333-3', 1000);
let client2 = new client('Steve', '18444444-4', 30);


// ######################################### DEMOSTRACIONES ##########################################3
// Client1 deposita $250 en su cuenta bancaria y luego ve su saldo
console.log('');
client1.deposit(250);
client1.viewBalance();

// Client1 le transfiere a client2 $200
console.log('');
client1.transfer(200, client2);
client2.viewBalance();

// Client2 extrae $150 y luego ve su saldo
console.log('');
client2.extract(150);
client2.viewBalance();

// Client1 desea extraer $1.000.000 pero no ha visto su saldo (tiene menos de esa cantidad en su cuenta)
console.log('');
client1.extract(1000000);

/* 
Elementos que mejorar a futuro: 
- Validar que los montos sean números positivos.
- Restricciònes (que los montos no sean decimales)
*/