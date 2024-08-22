/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

    let myName = "Isaac"
    
    if (myName == "Isaac") {
        console.log(myName)
    }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

    let username = "isaac"
    let password = "1234"

    if (username == "isaac" && password == "1234") {
        console.log(`User: ${username} logged`)
    }

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

    let number = 2

    if (number > 0) {
        console.log("Positive number")
    } else if (number < 0) {
        console.log("Negative number")
    } else {
        console.log("Zero number")
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

    let age = 15

    if (age >= 18){
        console.log("You can vote")
    } else {
        console.log(`you can't vote, you are ${18 - age} years away from being able to vote`)
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

    const isAdult = age >= 18 ? "Adulto" : "Menor"
    console.log(isAdult)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

    let month = 1

    switch (month) {
        case 1:
            console.log("January")
            break
        case 2:
            console.log("February")
            break
        case 3:
            console.log("March")
            break
        case 4:
            console.log("April")
            break
        case 5:
            console.log("May")
            break
        case 6:
            console.log("June")
            break
        case 7:
            console.log("July")
            break
        case 8:
            console.log("August")
            break
        case 9:
            console.log("Setember")
            break
        case 10:
            console.log("October")
            break
        case 11:
            console.log("November")
            break
        case 12:
            console.log("December")
            break
        default:
            console.log("Month incorrect")
    }

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Month with 31 days")
            break
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Month with 30 days")
            break
        case 2:
            console.log("Month with 28 days or 29 days")
            break
        default:
            console.log("Month incorrect")
    }

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

    let language = "es"

    switch (language) {
        case "es":
            console.log("Hola")
            break
        case "en":
            console.log("Hello")
            break
        case "por":
            console.log("Ola")
            break
        default:
            console.log("Language incorrect")
    }

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7