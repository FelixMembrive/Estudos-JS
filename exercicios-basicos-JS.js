console.log("Exercício 1:")
let nomeCompleto = "Felix Membrive"
console.log(nomeCompleto)

console.log("--------------------------")
console.log("Exercício 2:")
let numeroA = 8
let numeroB = 88
let resultado = numeroA * numeroB
console.log(resultado)

console.log("--------------------------")
console.log("Exercício 3:")

function saudacao(frase_saudacao = "Oi eu sou o Goku!") {
    return frase_saudacao
}
console.log(saudacao())

console.log("--------------------------")
console.log("Exercício 4:")

function multiplica(parametro1, parametro2) {
    return parametro1 * parametro2
}
console.log(multiplica(5, 8))

console.log("--------------------------")
console.log("Exercício 5:")

function podeDirigir(idade) {
    if (idade >= 18) {
        return "Você pode dirigir"
    } else {
        return "Você não pode dirigir"
    }
}
console.log(podeDirigir(17))

console.log("--------------------------")
console.log("Exercício 6:")
for (let index = 0; index <= 20; index++) {
    console.log(index)
}

console.log("--------------------------")
console.log("Exercício 7:")
for (let index = 1; index <= 19; index = index + 2) {
    console.log(index)
}

console.log("--------------------------")
console.log("Exercício 8:")

function tabuada(base) {
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        console.log(base + " X " + multiplicador + " = " + base * multiplicador)
    }
}
tabuada(3)

console.log("--------------------------")
console.log("Exercício 9:")

function converterHoras(minutos) {
    var restoMinutos = minutos % 60
    var minutosHoras = minutos - restoMinutos
    var horasInteiras = minutosHoras / 60
    return `${horasInteiras} Horas e ${restoMinutos} Minutos`
}
console.log(converterHoras(340))