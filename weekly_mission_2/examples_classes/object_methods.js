// Métodos en los objetos

class Album {

    constructor(name, author, genre, year){
        this.name = name
        this.author = author
        this.genre = genre 
        this.year = year
    }

    getInfo(){ //función que ejecutará cualquier objeto instanciado de esta clase
        return `Album ${this.name} is ${this.genre}`
    }
}

console.log("Métodos en los objetos")

// Instanciar objeto
const myAlbum = new Album('Riot!', 'Paramore', 'Alt Rock', 2007)

// Ver solo los datos que especificamos en la función
console.log(myAlbum.getInfo())

// Ver todo el objeto
console.log(myAlbum)