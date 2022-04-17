const calculadora = (entrada, operacao, numero1, numero2) => {
    const resultado = `${numero1} ${operacao} ${numero2}`
}


const entrada = "Multiplicação"

switch (operacao) {
    case "Multiplicação":
        const operacao = "*";
        break;

    case "Adição":
        const operacao = "+";
        break;

    case "Subtração":
        const operacao = "+";
        break;

    default:
        "Operação não cadastrada" + "\n" +
        "Operações Cadastradas: Multiplicação, Adição, Subtração e Divisão"
}

console.log(operacao);


// const expr = 'Papayas';
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