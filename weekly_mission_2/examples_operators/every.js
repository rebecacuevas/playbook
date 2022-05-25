// Uso de every 
// Nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false

const names = ['Elias Mendoza', 'Li Ming', 'Chloe Wilson', 'Joao Santos', 'Brad Foster']

const areAllString = names.every((name) => typeof name === 'string')

console.log("¿Son todos los nombres string? " + areAllString)