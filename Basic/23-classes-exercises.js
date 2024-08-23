/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Crea una clase que reciba dos propiedades

    class Vehicle {

        #owner
        #licensePlate

        constructor(owner, licensePlate) {
            this.#owner = owner
            this.#licensePlate = licensePlate
        }

        set owner(owner) {
            this.#owner = owner
        }

        get owner() {
            return this.#owner
        }

        get licensePlate() {
            return this.#licensePlate
        }

        buy() {
            console.log(`${this.owner} ha comprado un vehiculo con la siguiente matricula ${this.licensePlate}`)
        }

        static staticMethod() {
            console.log("Esto es un metodo estatico")
        }
    }

// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función

    let vehicle = new Vehicle("Isaac", "2188KNH")
    console.log(vehicle.owner)
    console.log(vehicle.licensePlate)
    vehicle.buy()

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

    Vehicle.staticMethod()

// 6. Crea una clase que haga uso de herencia

    class Car extends Vehicle {

        #brand
        #model
        #year
        
        constructor(owner, licensePlate, brand, model, year) {
            super(owner, licensePlate)
            this.#brand = brand
            this.#model = model
            this.#year = year
        }

        get brand() {
            return this.#brand
        }

        get model() {
            return this.#model
        }

        get year() {
            return this.#year
        }

        buy() {
            console.log(`${this.owner} ha comprado un ${this.#brand} ${this.#model}`)
        }
    }

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

    let car = new Car("Isaac", "2188KNH", "Seat", "Ibiza", "2017")
    console.log(car.brand)
    console.log(car.model)
    console.log(car.year)
    console.log(car.owner)
    console.log(car.licensePlate)
    car.owner = "Ruben"
    console.log(car.owner)

// 10. Sobrescribe un método de una clase que utilice herencia 

    car.buy()