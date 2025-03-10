// Exemplos de Operadores de Atribuição em JavaScript

// Operador de Atribuição Básico (=)
let a = 10;
console.log(`Valor inicial de a: ${a}`);

// Operador de Atribuição de Adição (+=)
a += 5; // equilavente a = a + 5
console.log(`Após a += 5, valor de a: ${a}`);

// Operador de Atribuição de Subtração (-=)
a -= 3; // a = a - 3;
console.log(`Após a -= 3, valor de a: ${a}`);

// Operador de Atribuição de Multiplicação (*=)
a *= 2; // a = a * 2;
console.log(`Após a *= 2, valor de a: ${a}`);
// comparação e não atribuição: >=

// Operador de Atribuição de Divisão (/=)
a /= 4;
console.log(`Após a /= 4, valor de a: ${a}`);

// Operador de Atribuição de Resto (%=)
a %= 4;
console.log(`Após a %= 4, valor de a: ${a}`);

// Operador de Atribuição de Exponenciação (**=)
a **= 3;
console.log(`Após a **= 3, valor de a: ${a}`);

//Exercicio 1
console.log('Exercício 1');
let x = 8;
let y = 3;
let resultado = (x + y * 2) > (x % y) && x != y;
console.log(resultado);

//Exercicio 3
console.log('Exercício 3');
console.log(10 !== '10')

//Exercicio 6
console.log('Exercício 6');
let z = 10 / 0;
console.log(z);