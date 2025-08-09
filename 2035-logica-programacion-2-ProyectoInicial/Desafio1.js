//1
function saludo() {
    console.log('¡Hola Mundo!');
    return;
}

saludo();

//2
function saludoNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
    return;
}

saludoNombre('Sofía');

//3
function numeroDoble(numero) {
    return numero * 2;
}

numeroDoble(4);

//4
function promedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

promedio(2,5,8);

//5
function numeroMayor(num1, num2) {
    return num1 < num2 ? num2 : num1;
}

numeroMayor(3,8);

//6
function numeroPorSiMismo(numero) {
    return numero * numero;
}

numeroPorSiMismo(3);