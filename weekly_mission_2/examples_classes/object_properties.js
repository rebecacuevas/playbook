// Instanciar un objeto con atributos 

class Student {

    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto

    constructor(name, age, subjects){
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}

// Instanciación
// Crear un objeto de la clase student
const dannaStudent = new Student('Danna', 19, ['NodeJS', 'React'])

console.log("Instanciar un objeto con atributos")
console.log(dannaStudent)