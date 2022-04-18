const calculadora = (entrada, numero1, numero2) => {
    switch (entrada) {
        case "Multiplicação":
            console.log(numero1 * numero2);
            break;
        case "Adição":
            console.log(numero1 + numero2);
            break;
        case "Subtração":
            console.log(numero1 - numero2);
            break;
        case "Divisão":
            console.log(numero1 / numero2);
            break;
        default:
            console.log(
                "Operação não cadastrada." + "\n" +
                "Operações Cadastradas: Multiplicação, Adição, Subtração e Divisão"
            );
    }
}

calculadora("grgr", 10, 2)


const expr = 'Papayas';

// switch (expr) {
//     case 'Oranges':
//         'Oranges are $0.59 a pound.'
//         break;
//     case 'Mangoes':
//     case 'Papayas':
//         console.log('Mangoes and papayas are $2.79 a pound.');
//         // expected output: "Mangoes and papayas are $2.79 a pound."
//         break;
//     default:
//         console.log(`Sorry, we are out of ${expr}.`);
// }


for (let index = 1; index <= 50; index++) {
    console.log(index);
}
for (let index = 1; index <= 50; index++) {
    if (index > 25) {
        break
    }
    console.log(index);
}
for (let index = 1; index <= 50; index++) {
    if (index === 10) {
        continue
    }
    console.log(index);
}

// for (let index = 1; index <= 50; index = index + 10) {
//     if (index === 60) {
//         console.log("CONTINUE");
//         continue
//     }
//     if (index === 90) {
//         console.log("CONTINUE");
//         continue
//     }
//     console.log(index);
// }

// for (let index = 1; index <= 50; index = index + 10) {
//     if (index === 60) {
//         console.log("CONTINUE");
//         continue
//     }
//     if (index === 90) {
//         console.log("CONTINUE");
//         continue
//     }
//     console.log(index);
// }


// for (let index = 20; index <= 100; index = index + 10) {
//     if (index === 60) {
//         console.log("CONTINUE");
//         continue
//     }
//     if (index === 90) {
//         console.log("CONTINUE");
//         continue
//     }
//     console.log(index);
// }