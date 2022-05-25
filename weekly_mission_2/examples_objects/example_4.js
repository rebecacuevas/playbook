// Objeto con métodos

const pet = {
    name: "Cannoli",

    // Función que se guarda como propiedad
    sayHello: function(){
        // this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} says woof woof!`)
    }
}

console.log("Objeto con métodos")
pet.sayHello()