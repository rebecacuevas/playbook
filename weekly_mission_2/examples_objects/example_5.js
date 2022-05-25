// Objeto con método que recibe parámetros

const myClient = {
    name: "Javier Murat",
    sayHelloToClient: function(yourPersonalShopper){
        console.log(`${this.name} welcome abroad! My name is ${yourPersonalShopper} and I'll be happy to turn you into the next Cassanova.`)
    }
}

console.log("Objeto con método que recibe parámetros")
myClient.sayHelloToClient("Mr. Bespoke")