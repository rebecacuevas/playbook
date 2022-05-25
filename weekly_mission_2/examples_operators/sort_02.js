// Ordenando una lista de objetos 

const users = [
    { name: 'A', age: 50 },
    { name: 'B', age: 20 },
    { name: 'C', age: 10 }, 
]

users.sort((a, b) => {
    if(a.age < b.age) return -1
    if(a.age > b.age) return 1
    return 0
})

console.log("Ordenando una lista de objetos por la edad")
console.log(users) // en orden ascendente