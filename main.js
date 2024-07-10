/*1- Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos)*/

/*let numero = parseInt(prompt("Ingrese un Numero: "))
console.log(`Tabla del ${numero}`)
for (let i = 1; i <= 10; i++) {
    tabla = numero *i
    console.log(`${numero}x${i} = ${tabla}`)
}*/

//2- Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
//acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

/*let cadena = [];
let numero;

while (true) {
    numero = parseInt(prompt("Ingrese la cantidad de numeros que quiera, cuando quiera acabar ingrese 0: "));
    if (numero === 0) {
        break;
    }
    cadena.push(numero);
    console.log(cadena);
}*/

/*3- Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado*/

/*let NumeroAdivinar = 60

let contador = 0


while(true){
    let adivinanza = parseInt(prompt("Ingrese un Numero en un rango de 1 a 100 para adivinar : "))
    if (NumeroAdivinar > adivinanza ){
        console.log("El numero a Adivinar es  mayor")
        contador+=1
    }
    else if (NumeroAdivinar < adivinanza ){
        console.log("El numero a Adivinar es  menor")
        contador+=1
    }
    else{
       console.log(`Adivinate el numero, ${NumeroAdivinar} y lo intentaste ${contador} veces`) 
       break
    }
}*/

/*Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo*/

/*let numero = parseInt(prompt("Ingrese un número: "));
let esPrimo = true;  // Asumimos que el número es primo

if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.floor(numero / 2); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;  
        }
    }
}

if (esPrimo) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}*/




//5- Realizar un programa que permita dado un numero, mostrar todos sus divisores



/*let numero = parseInt(prompt("Ingrese un número: "));
let divisores = [];  

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisores.push(i); 
    }
}


console.log("Los divisores de " + numero + " son: " + divisores.join(", "));*/

// 6- Dado un array de 10 elementos, realizar un programa que recorra ese array y
//muestre un mensaje por consola con cada uno de los elementos del array


/*let array = ["Pedro","Juan","Carlos","Andres","Sebastian","Gladys","Tatiana","Jhon","Lili","Esteban"]

for( let i = 0; i <=9; i++){
    console.log(array[i])
}*/

// 7- Dado un array de 10 numeros, realizar un programa que muestre por consola el
//doble de cada uno de los elementos

/*let array = [5,7,8,9,30,10,23,50,100,200]

for( let i = 0; i <=9; i++){
    console.log(array[i]*2)
}*/

// 9- Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
//objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
//que muestre un mensaje de presentacion por cada elemento del array.

/*let familia = [
    {
        Nombre: "Sebastian",
        Apellido: "Buritica",
        Edad: 17,
        MesCumple: "Enero"
    },
    {
        Nombre: "Laura",
        Apellido: "García",
        Edad: 45,
        MesCumple: "Abril"
    },
    {
        Nombre: "Gabriel",
        Apellido: "Lizcano",
        Edad: 34,
        MesCumple: "Enero"
    },
    {
        Nombre: "Leonardo",
        Apellido: "Yanez",
        Edad: 23,
        MesCumple: "Diciembre"
    },
    {
        Nombre: "Andres",
        Apellido: "Manjarres",
        Edad: 47,
        MesCumple: "Junio"
    }
];

for (let i = 0; i < familia.length; i++) {
    let persona = familia[i];
    console.log(`Hola, me llamo ${persona.Nombre} ${persona.Apellido}, tengo ${persona.Edad} años y mi mes de cumpleaños es ${persona.MesCumple}.`);
}*/


/* 10- Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares*/

/*let array = [5987, 234567, 3468, 6769, 378870, 87810, 2367, 767670, 155680, 850];

for (let i = 0; i <= 9; i++) {
    if (array[i] % 2 !== 0) {
        console.log(array[i]);
    }
}*/

/* 11- Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0. */

/*let numeros = 1;
let array = [];
let sumapar = 0;
let sumaimpar = 0;

while (numeros !== 0) {
    numeros = parseInt(prompt("Escriba varios numeros. Cuando ya no quiera escribir más, ponga el número 0:"));
    if (numeros !== 0) {
        array.push(numeros);
    }
}

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        // Suma de números pares
        sumapar += array[i];
    } else {
        // Suma de números impares
        sumaimpar += array[i];
    }
}

console.log("Array completo: " + array);
console.log("La suma de los pares es: " + sumapar);
console.log("La suma de los impares es: " + sumaimpar);*/

/* Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico */

/*const array = [5, 7, 8, 9, 30, 10, 23, 50, 100, 200];

let min = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}

console.log("El número más pequeño del array es: " + min);*/

/* Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora */

// Definición de los jugadores
/*let jugador1 = prompt("Ingrese el nombre del jugador 1:");
let jugador2 = prompt("Ingrese el nombre del jugador 2:");

let opciones = ['piedra', 'papel', 'tijeras'];

while (true) {
    let mano_jugador1 = prompt(`${jugador1}, elige piedra, papel o tijeras:`).toLowerCase();

    if (!opciones.includes(mano_jugador1)) {
        alert("Por favor, elige una opción válida (piedra, papel o tijeras).");
        continue;
    }

    let mano_jugador2 = prompt(`${jugador2}, elige piedra, papel o tijeras:`).toLowerCase();
    
    if (!opciones.includes(mano_jugador2)) {
        alert("Por favor, elige una opción válida (piedra, papel o tijeras).");
        continue;
    }
   
    if (mano_jugador1 === mano_jugador2) {
        alert("¡Empate! Ambos jugadores eligen lo mismo. ¡Intentémoslo de nuevo!");
    } else if ((mano_jugador1 === 'piedra' && mano_jugador2 === 'tijeras') ||
               (mano_jugador1 === 'papel' && mano_jugador2 === 'piedra') ||
               (mano_jugador1 === 'tijeras' && mano_jugador2 === 'papel')) {
        alert(`${jugador1} gana esta ronda!`);
        break; 
    } else {
        alert(`${jugador2} gana esta ronda!`);
        break; 
    }
}

alert(`¡Felicidades, ${jugador1} y ${jugador2}! ¡Hemos encontrado al ganador!`)*/

/*let asterisco = "* ";

for (let i = 1; i <= 5; i++) {
    console.log(asterisco);
    asterisco += "* ";
}*/


/*let asterisco = "* * * * * ";

for (let i = 5; i > 0; i--) {
    console.log(asterisco);
    asterisco = asterisco.slice(0, -2); // Quita los últimos dos caracteres ('* ')
}*/
