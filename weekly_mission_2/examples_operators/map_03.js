// Uso de Map para convertir ciertas letras de palabras de una lista a mayúsculas

const countries = ['Egypt', 'China', 'Japan']

// El método slice obtiene solo la longitud indicada del string
const countriesFirstLetters = countries.map((country) => country.toUpperCase().slice(0, 3))

console.log("Uso de Map para convertir ciertas letras de palabras de una lista a mayúsculas")
console.log(countriesFirstLetters)
