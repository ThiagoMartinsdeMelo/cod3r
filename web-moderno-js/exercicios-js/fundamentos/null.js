const a = {name: 'Teste'};
console.log(a); // {name: 'Teste' }
const b = a; // mesmo endereço para que o 'a' aponta, iguala o endereço de memoria
console.log(b); // { name: 'Teste' }
b.name = 'Opa';
console.log(a); // { name: 'Opa' }

// no caso de valores primitivos isso nao ocorre:
let c = 3;
let d = c;
console.log(d);
d++;
console.log(d);
console.log(c);

let valor; 
console.log(valor);
valor = null; // ausencia de valor
// console.log(valor.toString()) // Erro!
const produto = {};
console.log(produto.preco); // undefined
produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco); // convertendo pra boolean retorna false
produto.preco = null;
console.log(!!produto.preco); // retorna false
console.log(produto); // { preco: null }




