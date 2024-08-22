/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

    for (let i = 1; i <= 20; i++) {
        console.log(i)
    }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

    let result = 0
    for (let i = 1; i <= 100; i++) {
        result += i
    }
    console.log(result)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

    for (let i = 1; i <= 50; i++) {
        if ((i % 2) == 0) {
            console.log(i)
        }
    }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

    let names = ["isaac", "sergi", "Gerard"]
    for (let value of names) {
        console.log(value)
    }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

    let noVowel = 0
    let str = "hola"
    for (let value of str) {
        if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u") {
            noVowel++
        }
    }
    console.log(noVowel)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

    result = 1
    let numbers = [1, 2, 3, 4]
    for (let value of numbers) {
        result *= value
    }
    console.log(result)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

    for (let i = 1; i <= 10; i++) {
        console.log(i * 5)
    }

// 8. Usa un bucle para invertir una cadena de texto

    let strReverse = ""
    str = "¡Hola, javascript!"
    for (let i = str.length - 1; i >= 0; i--) {
        strReverse += str[i]
    }
    console.log(strReverse)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

    let prev1 = 0
    let prev2 = 1
    console.log(prev1)
    console.log(prev2)

    for (let i = 0; i < 10; i++) {
        let aux = prev1 + prev2
        prev1 = prev2
        prev2 = aux
        console.log(aux)
    }

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

    numbers = [2, 5, 50, 4 ,19, 6, 44]
    let numbersGreaterThan10 = []
    for (let value of numbers) {
        if (value > 10) {
            numbersGreaterThan10.push(value)
        }
    }
    console.log(numbersGreaterThan10)