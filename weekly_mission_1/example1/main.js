// Objetos de JS

// 1. Creación de un objeto con propiedades

// OBJETOS sirven para guardar información 
// llave - valor 
let myCar = new Object(); // crear objeto
myCar.brand = "Jeep";
myCar.model = "Wrangler";
myCar.year = 2022;

console.log(myCar); // imprimir objeto
console.log(myCar.brand); // imprimir marca de mi auto

// 2. Declaración de un objeto con variables locales y públicas

const myModule = (() => {
    
    // Variables de contexto local
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
    const privateBar = [1,2,3,4]
    const baz = "Soy un valor que va a ser expuesto"
    
    // Variable para guardar las variables locales
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
        publicBaz: baz
    }
    
    // Exposición de variables locales
    return exported
})()

console.log(myModule)


// EXPLICACIÓN DEL LIVE 

// FUNCIONES sirven para encapsular información para modularizar nuestro programa
// let myFunction = (() => {})

const myClassModule = (() => {
    const privateZoo = "No quiero que vean esto";

    const exported = {
        publicZoo : "Quiero que vean esto"
    }

    return exported;
})

console.log(myClassModule);
console.log(myClassModule.privateZoo);
console.log(myClassModule.publicZoo);
