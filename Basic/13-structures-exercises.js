/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales

    let animals = ["perro", "gato", "conejo", "serpiente", "castor"]
    console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final

    animals.unshift("rata")
    animals.push("oso")
    console.log(animals)

// 3. Elimina el que se encuentra en tercera posición

    animals.splice(2, 1)
    console.log(animals)

// 4. Crea un set que almacene cinco libros

    let books = new Set(["dune", "metro 2033", "altered carbon", "habitos atomicos", "cobalto rojo"])
    console.log(books)
    
// 5. Añade dos más. Uno de ellos repetido

    books.add("dune")
    books.add("sapiens")
    console.log(books)

// 6. Elimina uno concreto a tu elección

    books.delete("dune")
    console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre

    let months = new Map([
        [1, "January"],
        [2, "February"],
        [3, "March"],
        [4, "April"],
        [5, "May"],
        [6, "June"],
        [7, "July"],
        [8, "August"],
        [9, "Setember"],
        [10, "October"],
        [11, "November"],
        [12, "December"],
    ])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

    if (months.has(5)) {
        console.log(months.get(5))
    }

// 9. Añade al mapa una clave con un array que almacene los meses de verano

    months.set("verano", ["June", "July", "August"])
    console.log(months)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

    let myArray = [1, 2, 3, 4]
    let mySet = new Set(myArray)
    let myMap = new Map([[1, mySet]])
    console.log(myArray)
    console.log(mySet)
    console.log(myMap)