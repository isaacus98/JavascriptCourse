/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

    let myArray = [1, 2, 3, 4]

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

    let [value0, value1] = myArray
    console.log(value0)
    console.log(value1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

    let [value2 = 0, value3 = 0, value4 = 0, value5 = 0, value6 = 0] = myArray
    console.log(value2)
    console.log(value3)
    console.log(value4)
    console.log(value5)
    console.log(value6)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

    let person = {
        name: "isaac",
        age: 26,
        alias: "isaacus98"
    }

    let {name, alias} = person
    console.log(name)
    console.log(alias)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

    let {name: nombre, alias: usuario} = person
    console.log(nombre)
    console.log(usuario)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

    person = {
        name: "isaac",
        age: 26,
        alias: "isaacus98",
        job: {
            name: "programador",
            language: "javascript",
            exp: 5
        }
    }

    let {job: {exp, language}} = person
    console.log(exp)
    console.log(language)

// 6. Usa propagación para combinar dos arrays en uno nuevo

    myArray = [1, 2]
    let myArray2 = [3, 4]
    let myArray3 = [...myArray, ...myArray2]
    console.log(myArray3)

// 7. Usa propagación para crear una copia de un array

    let myArray4 = [...myArray]
    console.log(myArray4)

// 8. Usa propagación para combinar dos objetos en uno nuevo

    person = {
        name: "isaac",
        age: 26,
        alias: "isaacus98"
    }

    let job = {
        name: "programador",
        language: "javascript",
        exp: 5
    }

    let personJob = {...person, ...job}
    console.log(personJob)

// 9. Usa propagación para crear una copia de un objeto

    let person2 = {...person}
    console.log(person2)

// 10. Combina desestructuración y propagación