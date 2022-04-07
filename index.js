// var multiplicador = 1
// var base = 4

// for (multiplicador; multiplicador <= 10; multiplicador++) {
//     console.log(base + "x" + multiplicador + "=" + base * (multiplicador))
// }

// var multiplicador = 1

// console.log("-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - ")

// while (multiplicador <= 10) {
//     console.log(base + "x" + multiplicador + "=" + base * (multiplicador))
//     multiplicador++
// }

// var multiplicador = 1

// console.log("-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - ")

// do {
//     console.log(base + "x" + multiplicador + "=" + base * (multiplicador))
//     multiplicador++
// } while (multiplicador <= 10)console.log("Desafio 4");


console.log("Desafio 9");
// Crie uma função chamada converterEmHoras que receba um número em
// minutos como parâmetro e irá exibir a quantidade em horas.
const converterEmHoras = (minutes) => {
    return minutes / 60;
}
console.log(converterEmHoras(350))