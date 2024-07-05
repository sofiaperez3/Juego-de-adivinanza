//1 y 2
let nombreUsuario = "Sofía";

console.log(`¡Hola, ${nombreUsuario}!`);


//3
let nombreUsuario = "Sofía";

alert(`¡Hola, ${nombreUsuario}!`);


//4
let lenguajeFavorito = prompt("¿Cuál es el lenguaje de programación que más te gusta?");

console.log(lenguajeFavorito);


//5
let valor1 = 3;
let valor2 = 8;
let resultado = valor1 + valor2;

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);


//6
let valor1 = 8;
let valor2 = 3;
let resultado = valor1 - valor2;

console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);


//7
let edadUsuario = prompt("Ingresa tu edad, por favor:");

if (edadUsuario >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("No eres mayor de edad");
}


//8
let numero = prompt("Por favor, ingresa un número:");

if (numero == 0) {
    console.log(`${numero} es cero`)
} else {
    if (numero > 0) {
        console.log(`${numero} es un número positivo`)
    } else {
        console.log(`${numero} es un número negativo`)
    }
    
}


//9
let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

//10
let nota = 8;

if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

//11
console.log(Math.random());

//12
let numeroAleatorio = parseInt(Math.floor(Math.random()*10) + 1);
console.log(numeroAleatorio);

//13
let numeroAleatorio = parseInt(Math.floor(Math.random()*1000) + 1);
console.log(numeroAleatorio);