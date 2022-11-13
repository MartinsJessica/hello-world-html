const division = (n1, n2) => {
    if (n2 === 0) {
        return "Não é possível dividir por zero"
    }
    return n1 / n2
}


const result = division(7, 0)
console.log('Resultado da Divisão:', result)