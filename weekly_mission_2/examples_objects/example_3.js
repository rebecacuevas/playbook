// Objeto con diferentes propiedades

const myThirdObject = {
    name: "Mr Puff",
    age: 3,
    favorite_foods: [
        "mexican sweet bread",
        "carrots",
        "pears"
    ],
    address: {
        zip_code: "10000",
        street: "Saint Marcus Avenue 5020",
        city: "Chicago"
    }
}

console.log("Crear un objeto con diferentes propiedades")
// Mostrar todo el objeto
console.log(myThirdObject)
// Formas de accesar a una parte en específico del objeto 
console.log(myThirdObject.name)
console.log(myThirdObject.favorite_foods)
console.log(myThirdObject["address"])