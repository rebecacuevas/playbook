// Filtrar una lista por condicional

const scores = [
    { name: 'A', score: 95 },
    { name: 'B', score: 30 },
    { name: 'D', score: 71 },
    { name: 'H', score: 83 },
    { name: 'M', score: 62},
]

const scoresGreaterThanEighty = scores.filter((score) => score.score > 80)

console.log("Filtrando elementos por score mayor a 80")
console.log(scoresGreaterThanEighty)