// Overriding methods

class Explorer {

    constructor(name, username, mission){
        this.name = name
        this.username = username
        this.mission = mission
    }

    getNameAndUsername(){
        return `Explorer ${this.name}, username: ${this.username}`
    }
}

class Traveler extends Explorer {

    constructor(name, username, mission, cycle){
        super(name, username, mission) //super nos ayuda a llamar al constructor padre
        this.cycle = cycle //Agregar atributo de la clase viajero porque es exclusivo de esta clase y no existe en la clase padre
    }

    getGeneralInfo(){
        
        let nameAndUsername = this.getNameAndUsername() //llamar método de la clase padre

        //nameAndUsername es una variable de la función getGeneralInfo, no es necesario usar this para referenciarla
        return `${nameAndUsername}, Ciclo ${this.cycle}`

    }
}

const traveler01 = new Traveler('José', 'LaunchX', 'NodeJs', 'April 2022')

console.log("Overriding methods")
console.log(traveler01)
console.log(traveler01.getNameAndUsername) //método de la clase padre
console.log(traveler01.getGeneralInfo()) //método de la clase hija