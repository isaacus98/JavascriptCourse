/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

    function suma(a = 0, b = 0) {
        return a + b
    }
    console.log(suma(4, 6))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

    function maxNumber(numbers = []) {
        let max = 0
        for (let value of numbers) {
            if (value > max) {
                max = value
            }
        }
        return max
    }
    console.log(maxNumber([1, 5, 6, 2, 8, 3]))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

    function noVowel(str = "") {
        let vowel = 0
        for (let value of str.toLowerCase()) {
            if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u") {
                vowel++
            }
        }
        return vowel
    }
    console.log(noVowel("isaac"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

    function arrayStringUpperCase(strArray = []) {
        let upperCaseArray = []
        for (let value of strArray) {
            upperCaseArray.push(value.toUpperCase())
        }
        return upperCaseArray
    }
    console.log(arrayStringUpperCase(["html", "javascript", "css", "python"]))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

    function isPrime(number = 0) {
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
    console.log(isPrime(6))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

    function mergeArray(array1, array2) {
        let mySet = new Set()
        if (array1.length > array2.length) {
            for (let i = 0; i < array1.length; i++) {
                for (let value of array2) {
                    if (value === array1[i]) {
                        mySet.add(value)
                    }
                }
            }
        } else {
            for (let i = 0; i < array2.length; i++) {
                for (let value of array1) {
                    if (value === array2[i]) {
                        mySet.add(value)
                    }
                }
            }
        }

        return Array.from(mySet)
    }
    console.log(mergeArray(["hola", 4, 6, true], ["hola", 4, true, false, 5.7]))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

    function sumEvenNumbers(numbers) {
        let result = 0
        for (let value of numbers) {
            if ((value % 2) == 0) {
                result += value
            }
        }
        return result
    }
    console.log(sumEvenNumbers([2,5,6,8,9,10]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

    function arrayPow(numbers) {
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = Math.pow(numbers[i], 2)
        }
        return numbers
    }
    console.log(arrayPow([2, 4, 6]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

    function stringReverse(str = "") {
        let strReverse = ""
        for (let i = str.length - 1; i >= 0; i--) {
            strReverse += str[i]
        }
        return strReverse
    }
    console.log(stringReverse("Hola"))

// 10. Crea una función que calcule el factorial de un número dado

    function factorial(number = 0) {
        let factorial = number
        for (let i = 1; i < number; i++) {
            factorial *= i
        }
        return factorial
    }
    console.log(factorial(5))