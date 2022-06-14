function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin'){
            admins.push(key);
        }
    }
     return admins;
}

const usuarios = new Map();

usuarios.set('Matheus', 'Admin');
usuarios.set('Julia', 'User');
usuarios.set('Lucas', 'Admin');
usuarios.set('Brenda', 'Admin');
usuarios.set('Marcos', 'User');

console.log(getAdmins(usuarios));