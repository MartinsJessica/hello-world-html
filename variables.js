const text = 'Jéssica'

console.log(typeof text) // Essa variavél é do tipo string

const quantity = 3

console.log(typeof quantity) // Retorna um tipo number

const isColor = true

console.log(typeof isColor) // Retorna um tipo true or false boolean

const animals = ['cat', 'dog', 'frog', 'horse', 'bird', 'butterfly']

console.log(typeof animals) // retona um tipo object representando lista(ARRAY)

const person = {
    name: 'Jéssica',
    age: 18,
    gender: 'Female',
    jobs: ['student', 'dentist'],
    address: {
        street: 'rua da fantasia',
        number: 11,
        zipcode: 1212321
    },
    isBlonde: true
}

console.log(person)
console.log(person.address.street)

console.log(typeof person) // Retorna um tipo object

const sayHello = (name) => { // um arrow function , indentação
    return `Hello ${name}` // retornar um valor para função $ serve para adicionar uma variavel em um texto, as aspas invertidas são necessária para interpolação do texto
}

console.log(typeof sayHello) // return function


console.log(sayHello('Jéssica'))
console.log(sayHello('Tiago'))
console.log(sayHello("Michelle"))
