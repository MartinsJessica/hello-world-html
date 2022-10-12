const multiply = (numero1,numero2)=> {
    const multiplyValues = numero1 * numero2
    return multiplyValues 
}

const multiplyInfinity = (...args) => args.reduce((a, b) => a * b)

const result = multiply(2, 5)
console.log('Resultado da multiplicação =>', result)


const result2 = multiply(234, 5)
console.log('Resultado da conta:', result2)

console.log(multiplyInfinity(10,2,15, 4))
