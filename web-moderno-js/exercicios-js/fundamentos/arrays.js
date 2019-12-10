const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // undefined
valores[4] = 10;
console.log(valores);
console.log(valores.length); // retorna 5
valores.push({id:3}, false, null, 'teste');
console.log(valores); // retorna [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste' ]
console.log(valores.pop()); // retira ultimo elemento
delete valores[0]; // remove o primeiro elemento
console.log(typeof valores); // object