/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética

    let a = 5
    let b = 12

    let suma = a + b
    let resta = a - b
    let multplicacion = a * b
    let division = a / b
    let modulo = a % b
    let exponente = a ** b

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

    let c = 6
    suma += c
    resta -= c
    multplicacion *= c
    division /= c
    modulo %= c
    exponente **= c

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

    console.log(5 > 2)
    console.log(7 < 10)
    console.log(a == 5)
    console.log(a === 5)
    console.log(a != 6)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

    console.log(5 < 2)
    console.log(7 > 10)
    console.log(a != 5)
    console.log(a === "5")
    console.log(a == 6)

// 5. Utiliza el operador lógico and

    console.log(5 > 2 && 10 < 25)

// 6. Utiliza el operador lógico or

    console.log(5 < 2 || 10 < 25)

// 7. Combina ambos operadores lógicos

    console.log(5 > 2 && 10 < 12 || 10 > 8)

// 8. Añade alguna negación

    console.log(!(5 > 2))

// 9. Utiliza el operador ternario

    let soyEstudiante = true
    soyEstudiante ? console.log("Soy estudiante") : console.log("No soy estudiante")

// 10. Combina operadores aritméticos, de comparáción y lógicas

    console.log((a = 4) > 5 || a == 5)
    console.log(a)