const escola = "Cod3r";
console.log(escola.charAt(4)); // retorna r
console.log(escola.charAt(5)); // retorna vazio
console.log(escola.charCodeAt(3)); // retorna valor do carctere na tabela ASC
console.log(escola.indexOf('3')); // retorna 3
console.log(escola.substring(1)); // retorna od3r
console.log(escola.substring(0, 3)); // retorna Cod
console.log('Escola '.concat(escola).concat("!")); // retorna Escola Cod3r!
console.log(escola.replace(/\d/, 'e')); // subisitua todas os digitos pela letra e
console.log(escola.replace(/\w/g, 'e')); // subisitua tudo pela letra e
console.log('Ana,Maria,Pedro'.split(',')); // transformar string em array