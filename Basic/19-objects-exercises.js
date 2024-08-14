/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Crea un objeto con 3 propiedades

    let teamNFL = {
        name: "Browns",
        city: "Cleveland",
        stadium: "First Energy stadium"
    }

// 2. Accede y muestra su valor

    console.log(teamNFL)

// 3. Agrega una nueva propiedad

    teamNFL.division = "AFC North"
    console.log(teamNFL)

// 4. Elimina una de las 3 primeras propiedades

    delete teamNFL.stadium
    console.log(teamNFL)

// 5. Agrega una función e invócala

    teamNFL = {
        name: "Browns",
        city: "Cleveland",
        stadium: "First Energy stadium",
        playGame: function() {
            console.log(`Los ${this.city} ${this.name} estan jugando un partido`)
        }
    }
    teamNFL.playGame()

// 6. Itera las propiedades del objeto

    for (let value in teamNFL) {
        console.log(value + ": " + teamNFL[value])
    }

// 7. Crea un objeto anidado

    teamNFL = {
        name: "Browns",
        city: "Cleveland",
        stadium: "First Energy stadium",
        playGame: function() {
            console.log(`Los ${this.city} ${this.name} estan jugando un partido`)
        },
        player: {
            name: "Myles Garret",
            position: "Edge rusher"
        }
    }

// 8. Accede y muestra el valor de las propiedades anidadas

    console.log(teamNFL.player.name)
    console.log(teamNFL.player.position)

// 9. Comprueba si los dos objetos creados son iguales

    console.log(teamNFL == teamNFL.player)
    console.log(teamNFL === teamNFL.player)

// 10. Comprueba si dos propiedades diferentes son iguales

    console.log(teamNFL.name == teamNFL.player.name)