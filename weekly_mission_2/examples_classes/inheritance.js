// Herencia entre dos clases

// La herencia nos permite relacionar clases entre sí y rehusar sus componentes

class Developer {
    
    constructor(name, stack, qualification){
        this.name = name
        this.stack = stack
        this.qualification = qualification
    }

    get getName(){
        return this.name
    }
}

console.log("Herencia entre dos clases")

const rafaelDev = new Developer('Rafael', ['JavaScript', 'React', 'NodeJS'], 'Junior')

console.log(rafaelDev)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre [Developer] en la clase definida.


// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre

class MicrosoftDev extends Developer {

}

const rafaelMicrosoftDev = new MicrosoftDev('Rafael', ['JavaScript', 'React', 'NodeJS'], 'Junior')

console.log(rafaelMicrosoftDev)
console.log(rafaelMicrosoftDev.getName) //getter de la clase padre rehusada en la clase hija