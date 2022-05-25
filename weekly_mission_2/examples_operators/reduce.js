// Uso de reduce

const weightsInKilograms = [70, 120, 42, 210, 83]

const result_of_reduce = weightsInKilograms.reduce((acc, element) => acc + element, 0)

console.log("Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)