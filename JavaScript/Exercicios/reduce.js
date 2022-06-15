const lista = [
    {
        name: 'arroz',
        preco: 20
    },
    {
        name: 'feijao',
        preco: 15
    },
    {
        name: 'carne',
        preco: 42
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });   
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
