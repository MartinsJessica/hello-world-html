const { averageResult } = require('./conditions')

const students = [
    { name: "Lua", notes1: 9, notes2: 8 },
    { name: "Maria", notes1: 6, notes2: 6 },
    { name: "José", notes1: 1, notes2: 2 },
    { name: "Sophie", notes1: 3, notes2: 10 },
    { name: "Diana", notes1: 9, notes2: 9 }
]

const studentsWithStatus = students.map((student) => {
    const status = averageResult(student.notes1, student.notes2)
    return {
        ...student,
        status
    }
})


const studentsWithStatus2 = students.map((student) => ({
    ...student,
    status: averageResult(student.notes1, student.notes2)
}))


console.log(studentsWithStatus)
console.log(studentsWithStatus2)