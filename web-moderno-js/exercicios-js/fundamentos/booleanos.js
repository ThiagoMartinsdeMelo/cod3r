let isAtivo = false;
console.log(isAtivo);
isAtivo = true;
console.log(isAtivo);
isAtivo = 1;
console.log(!!isAtivo); // retorna true
console.log(!isAtivo); // nega retornando false
console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log('pra finalizar...');
console.log(!!('' || null || 0 || '  ')); // retorna true

let nome = 'Thiago';
console.log(nome || 'Desconhecido'); // retorna Thiago
nome = ''
console.log(nome || 'Desconhecido'); // retorna Desconhecido
