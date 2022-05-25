// for Each para calcular la suma de todos los elementos de una lista

let addition = 0
const scores = [20, 20, 102, 20, 30]

scores.forEach(score => addition += score)

console.log("Cálculo de la suma de los elementos de la lista")
console.log(addition)