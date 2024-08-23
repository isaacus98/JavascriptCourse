/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// 1. Crea un función que utilice error correctamente

    function division(a, b) {
        try {
            if (!(Number.isInteger(a) && a > 0 && Number.isInteger(b) && b > 0)) {
                throw Error("Parametro incorrecto")
            }
            return a / b
        } catch (error) {
            console.error("Error al hacer la división")
        }
    }
    
    console.log(division(5, 0))

// 2. Crea una función que utilice warn correctamente

    function printMessage(str) {
        if (str.length == 0) {
            console.warn("cadena de texto vacía")
        }

        console.log(str)
    }
    
    printMessage("")

// 3. Crea una función que utilice info correctamente

    function subtract(a, b) {
        if (Number.isInteger(a) && Number.isInteger(b)) {
            console.info("La resta es con numeros enteros")
        }

        return a - b
    }

    console.log(subtract(15, 6))
    console.log(subtract(15.5, 6))

// 4. Utiliza table

    let footballer = {
        name: "Chris Richards",
        age: 24,
        position: "Centre-back",
        team: "Crystal Palace"
    }

    console.table(footballer)

// 5. Utiliza group

    console.group("Footballers")
    console.log("Marc Guehi")
    console.log("Jordan Ayew")
    console.log("Jean-Philippe Mateta")
    console.groupEnd()

// 6. Utiliza time

    console.time("multiplicacion")

    for (let i = 0; i < 10; i++) {
        5 * i
    }

    console.timeEnd("multiplicacion")

// 7. Valida con assert si un número es positivo

    console.assert(21 >= 0, "El número es negativo")

// 8. Utiliza count

    console.count("Click")
    console.count("Click")

// 9. Utiliza trace

    console.trace()

// 10. Utiliza clear

    //console.clear()