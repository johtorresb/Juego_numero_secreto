let numeroSecreto = 0 ; 
let intentos = 0 ;
let listaNumerosSorteados =  []; 
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    if(numeroDeUsuario=== numeroSecreto){
        asignarTextoElemento('p',`Acertarte el numero en ${intentos} ${(intentos===1)?'vez':'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto ){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya se jugaron todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se Jugaron todos los numeros posibles')

    }else{

        // si el numero generado esta incluido en la lista
       if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
       } else {
             listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;

       }
    }  

}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo} `);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;

}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja(); 
    //Indicar mensaje de intervalo de numeros 
    //Generar numero aleatorio
    //Inicializar numero de intentos 
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
  


}

condicionesIniciales();