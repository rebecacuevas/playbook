// Uso de find en una lista de objetos

const mathScores = [
    { name: 'C', score: 40 },
    { name: 'D', score: 50 },
    { name: 'A', score: 60 },
]

const score_less_than_60 = mathScores.find((student) => student.score < 60)

console.log("Alumno con menos de 60: " + score_less_than_60.name)