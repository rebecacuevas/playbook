// Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques

const ages = [20, 10, 40, 50, 30, 50, 28, 40]
const age = ages.find((age) => age > 20)

console.log("Primera edad mayor a 20 es: " + age)