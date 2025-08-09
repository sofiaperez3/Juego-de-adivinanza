function indiceMasaCorporal(peso, altura) {
    let imc = peso / (altura * altura);
    return console.log(`Tu índice de masa corporal es ${imc}`);
}

indiceMasaCorporal();


function numeroFactorial(numero) {
    let multiplicador = 1;
    while (multiplicador = numero) {
        let resultado = multiplicador * numero;
    }
    multiplicador++;
    return resultado;
}

numeroFactorial(5);


function calculadoraDivisas(dolares) {
    return dolares * 18.70;
}

calculadoraDivisas(20);

function medidas(altura, base) {
    let perimetro = (altura + base) * 2;
    let area = base * altura;

    console.log(`El perímetro de tu rectángulo es de ${perimetro} centímetros`);
    console.log(`El área de tu rectángulo es de ${area} centímetros`);
}

medidas(10,5);

function mediasDeUnCirculo(radio) {
    let pi = 3.14;
    let perimetro = (pi * 2) * radio;
    let area = pi * (radio * radio);

    console.log(`El perímetro de tu círculo es de ${perimetro} centímetros`);
    console.log(`El área de tu círculo es de ${area} centímetros`);
}

mediasDeUnCirculo(2);

function tablaDeMultiplicar(numero) {
    let multiplicador = 1;
    
    while (multiplicador <= 10) {
        let resultado = numero * multiplicador;
        console.log(`${numero} x ${multiplicador} = ${resultado}`);
        multiplicador++;
    }
}

tablaDeMultiplicar(5);
