// Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques

const animalNames = ['aligator', 'fish', 'dog', 'pelican', 'giraffe']

const longestAnimalName = animalNames.findIndex((animal) => animal.length > 5)

console.log("Primer elemento cuya palabra sea mayor a 5 está en la posición: " + longestAnimalName)