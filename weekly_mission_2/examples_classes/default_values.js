// Atributos con valores por default

class PullRequest {
    
    constructor(repo, title, lines_changed){
        this.repo = repo
        this.title = title
        this.lines_changed = lines_changed
        this.status = "OPEN"
        this.dateCreated = new Date() //guardará la fecha actual en que se instancia el objeto
    }

    getInfo(){
        return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
    }
}

console.log("Atributos con valores por default")

// Instanciar objeto
const myPR01 = new PullRequest('LaunchX', 'my first pr')

console.log(myPR01.getInfo()) 

// Instanciar otro objeto
const myPR02 = new PullRequest('LaunchX', 'open source pr', 102)

console.log(myPR02.getInfo())