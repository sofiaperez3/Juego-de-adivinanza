//Variables
let rangoJuego = 100;
let numeroSecreto = Math.floor(Math.random()*rangoJuego)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 10;


console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${rangoJuego} por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos++;
        //palabraVeces = 'veces';

        if (intentos > maximosIntentos) {
            alert(`Legaste al número máximo de ${maximosIntentos} intentos`);
            break;
        } 

        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}

//