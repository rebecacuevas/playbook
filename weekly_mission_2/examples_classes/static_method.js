// Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto

class Toolbox {
    static getMostUsefulTools(){
        return ['Command Line', 'Git', 'VSCode']
    }
}

console.log("Métodos static")

// Llamar el método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())

// Si intentamos instanciar un objeto, no podremos llamar este método static