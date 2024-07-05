# Curso de JavaScript - Juego de Adivinanza

Este proyecto es una implementación práctica de los conceptos que aprendí en un curso de JavaScript, donde desarrollé un juego de adivinanza de números. A continuación, detallo los pasos y aprendizajes que llevé a cabo durante el curso "Lógica de programación: sumérgete en la programación con JavaScript" en Alura Latam.

## Contenidos del Curso

1. **Preparación del Entorno de Desarrollo**
    - Instalé Visual Studio Code para crear programas utilizando JavaScript.

2. **Variables**
    - Comprendí el concepto de variables para almacenar información, como números o palabras, para usarlas más tarde en mi programa.

3. **Interacción con el Usuario**
    - Utilicé `alert` para mostrar mensajes con instrucciones sobre el programa.
    - Utilicé `prompt` para interactuar con el usuario, permitiéndole ingresar un valor y almacenarlo en una variable.

4. **Condicionales**
    - Creé instrucciones `if` para que la computadora tome decisiones y ejecute un bloque de código solo si una condición específica es verdadera.
    - Utilicé estructuras condicionales (if/else) para generar lógicas que permiten al programa tomar decisiones basadas en condiciones específicas.

5. **Depuración con la Consola**
    - Usé la consola para probar y depurar mi código, mostrando mensajes y valores durante la ejecución del programa.

6. **Template Strings**
    - Usé Template Strings para concatenar el número secreto con el valor almacenado en una variable y mostrar un mensaje personalizado.

7. **Comparaciones**
    - Aprendí a comprobar si un número es mayor o menor que otro usando estructuras condicionales (if/else) y condicionales anidados.

8. **Bucles**
    - Usé el bucle `while` para repetir un bloque de código mientras una cierta condición sea verdadera, permitiendo así que el programa realice una acción varias veces.

9. **Contador de Intentos**
    - Implementé un contador de intentos para hacer un seguimiento y mostrar la cantidad de veces que intenté adivinar el número secreto.
    - Evité código duplicado utilizando estrategias para mostrar la palabra “intento” en singular o plural, dependiendo del número de intentos realizados.

10. **Documentación**
    - Analicé la documentación y encontré información relevante para el desarrollo de mi programa.

11. **Generación de Números Aleatorios**
    - Descubrí cómo emplear la función `Math.random()` para generar un número aleatorio, lo que permite la creación de desafíos y juegos más dinámicos y variados.

## Juego de Adivinanza

El juego consiste en que el usuario intente adivinar un número secreto generado por el programa. Cada intento se registra y se da retroalimentación al usuario sobre si el número ingresado es mayor o menor que el número secreto.

### Ejemplo de Código

```javascript
// Variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";

while (numeroUsuario !== numeroSecreto) {
    
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10, por favor"), 10);

    console.log(numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos++;
        if (intentos > 1) {
            palabraVeces = "veces";
        }
    }
}
```

## Conclusión
En este curso de lógica, he superado todas las barreras y me he sumergido en la programación. Desde configurar el entorno de desarrollo hasta la creación de un juego completo con diferentes interacciones.
