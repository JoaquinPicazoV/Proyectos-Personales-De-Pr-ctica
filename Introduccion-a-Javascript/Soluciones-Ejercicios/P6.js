// Función que recibe tres números y dice cual es el mayor
function buscarMayor(a,b,c){
    if(a>b){
        if(a>c){
            console.log('El mayor es: '+a);
        }else{
            console.log('El mayor es:'+c);
        }
    }else{
        if(b>c){
            console.log('El mayor es: '+b);
        }else{
            console.log('El mayor es: '+c);
        }
    }
}


n1 = 4;
n2 = 2;
n3 = 8;

// Se llama la función y se le entregan los números
buscarMayor(n1,n2,n3);
