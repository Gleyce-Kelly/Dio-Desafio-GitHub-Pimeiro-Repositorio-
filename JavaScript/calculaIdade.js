function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "Julia",
    idade: 25,
};

const pessoa2 = {
    nome: "Lucas",
    idade: 36,
};

const pessoa3 = {
    nome: "Carol",
    idade: 15,
};

console.log (calculaIdade.call(pessoa2, 7));