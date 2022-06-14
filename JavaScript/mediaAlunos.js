const alunos = [
    {
        nome: 'Aline',
        nota: 8,
        turma: '2A',
    },
    {
        nome: 'Lucas',
        nota: 4,
        turma: '1C',
    },
    {
        nome: 'Flavia',
        nota: 3,
        turma: '2B'
    },
    {
        nome: 'Marcos',
        nota: 7,
        turma: '1A'
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++ ) {
        const { nota, nome } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log (alunosAprovados(alunos, 5));