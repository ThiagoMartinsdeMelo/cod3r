const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!';
const template = `
    Olá 
    ${nome}!`; // interpolação
console.log(concatenacao, nome);
console.log(`1 + 1 = ${1 + 1}`); // retorna 1 + 1 = 2
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`); // retorna Ei... CUIDADO!