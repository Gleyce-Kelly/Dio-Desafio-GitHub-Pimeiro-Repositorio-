const meuArray = [30, 30, 40, 5, 223, 150, 5, 280, 150];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));