// Uso de some
// Este método valida todos los elementos de la lista, si alguno cumple con la validación indicada, regresará true, de lo contrario false

const bools = [true, false, false, true]

// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) => b === false)

console.log("Alguno de los elementos en el array es false: " + areSomeTrue) //true