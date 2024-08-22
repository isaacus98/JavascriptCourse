/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto

    let myName = "Isaac"
    let greeting = "Hola, " + myName

// 2. Muestra la longitud de una cadena de texto

    console.log(myName.length)

// 3. Muestra el primer y último carácter de un string

    console.log(myName[0])
    console.log(myName[4])

// 4. Convierte a mayúsculas y minúsculas un string

    console.log(myName.toUpperCase())
    console.log(myName.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
    
let str = `cadena
    varias
    líneas`

// 6. Interpola el valor de una variable en un string

    console.log(`Hola, ${myName}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

    console.log(greeting.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

    console.log(greeting.includes("Hola"))

// 9. Comprueba si dos strings son iguales

    console.log(myName === greeting)

// 10. Comprueba si dos strings tienen la misma longitud

    console.log(myName.length == greeting.length)