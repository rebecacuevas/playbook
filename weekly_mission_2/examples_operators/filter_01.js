// Uso de filter para filtrar una lista de elementos 

const nationalities = ['Mexican', 'Japanese', 'Italian', 'Spaniard', 'Chinese', 'American', 'Brazilian', 'Canadian', 'Australian', 'Lebanese', 'Indian', 'Polish', 'German', 'Greek']

// Nacionalidades con terminación -ian
const nationalitiesContainingIan = nationalities.filter((nationalities) => nationalities.includes('ian'))

console.log("Uso de filter para filtrar una lista de elementos")
console.log(nationalitiesContainingIan)

// Nacionalidades con terminación -ese
const nationalitiesEndsWithEse = nationalities.filter((nationality) => nationality.endsWith('ese'))

console.log("Nacionalidades que terminan con -ese")
console.log(nationalitiesEndsWithEse)