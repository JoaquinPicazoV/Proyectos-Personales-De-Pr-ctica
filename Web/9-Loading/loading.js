window.addEventListener('load', function() {
    setInterval(cargando, 300); 
});

let cont = 0;

// Función que genera los puntos suspensivos en "LOADING"
function cargando() {
    let texto = document.getElementById('loading');
    texto.textContent += '.';
    if(cont==3){
        texto.textContent = 'LOADING.';
        cont=0;
    }
    cont++;
}