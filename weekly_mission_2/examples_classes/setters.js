// Setters para modificar los atributos del objeto

class Car {

    constructor(name, brand, color, year, plates){
        this.name = name
        this.brand = brand
        this.color = color
        this.year = year
        this.plates = plates
        this.infractions = 0
        this.accidents = 0
    }

    get getInfractions(){
        return this.infractions
    }

    get getAccidents(){
        return this.accidents
    }

    set setInfractions(infractions){
        this.infractions = infractions
    }

    set setAccidents(accidents){
        this.accidents = accidents
    }
}

console.log("Setters para modificar los atributos del objeto")

const firstCar = new Car('Prius', 'Toyota', 'black', 2021, 'VSG102')

console.log(firstCar.getInfractions) //0
console.log(firstCar.getAccidents) //0

// Actualizamos los atributos por medio de los setters
firstCar.setInfractions = 2
firstCar.setAccidents = 1

console.log(firstCar.getInfractions) //2
console.log(firstCar.getAccidents) //1