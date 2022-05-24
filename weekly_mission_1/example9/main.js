/*
1. Crear el archivo pokemon.js
2. Crear una clase Pokemon 
3. Crea un constructor que permita recibir un nombre
4. Crea la función sayHello()
5. Crea la función sayMessage()
6. Exportar la clase Pokemon con CommonJS para que pueda ser importada en el archivo main.js

Resultado al correr el comando node main.js

Mi pokemon pikachu te saluda!!!
Mi pokemon pikachu dice: Heey!
Mi pokemon bulbasaur te saluda!!!
Mi pokemon bulbasaur dice: Heey!
Mi pokemon charmander te saluda!!!
Mi pokemon charmander dice: Heey!
Mi pokemon squirtle te saluda!!!
Mi pokemon squirtle dice: Heey!
*/

const Pokemon = require('./pokemon')

const pikachu = new Pokemon("pikachu")
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("charmander")

pikachu.sayHello()
pikachu.sayMessage("Heey!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Heey!")

charmander.sayHello()
charmander.sayMessage("Heey!")

squirtle.sayHello()
squirtle.sayMessage("Heey!")