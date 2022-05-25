// Getters para acceder a los atributos del objeto

class Astronaut {
    
    constructor(name, age, mission){
        this.name = name
        this.age = age
        this.mission = mission
        this.trainings_completed = 0
        this.trainings_to_do = 50
    }

    // Acceder a los atributos de la clase Astronaut
    get getTrainingsCompleted() {
        return this.trainings_completed
    }
}

console.log("Getters para acceder a los atributos del objeto")

// Instanciar
const oneill = new Astronaut("Timothy O'Neill", 32, ['PhD in Biomedical Physics', 'Computer Scientist'])

console.log(oneill.getTrainingsCompleted)