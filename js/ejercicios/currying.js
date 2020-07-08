// function sumThreeNumbers(a, b, c) {
//   return a + b + c;
// }

// console.log(sumThreeNumbers(1, 2, 3)); // 6

// El currying consiste en descomponer una función en funciones en la cuál cada una reciba un argumento.
// Esto es posible gracias a los closures

// Ejemplo 1:
function sumThreeNumbers(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sumThreeNumbers(1)(2)(3)); // 6

// Ejemplo 2 (más claro):
const saludo = (mensaje) => (name) => `${mensaje} ${name}`;
const saludarFeliz = saludo("Hola estimado");

console.log(saludarFeliz("Giddo van Rossum")); //  Hola estimado Giddo van Rossum
console.log(saludarFeliz("Rasmus Lerdorf")); //  Hola estimado Rasmus Lerdorf
console.log(saludarFeliz("Brendan Eich")); //  Hola estimado Brendan Eich

const saludarEnojado = saludo("Ashh!");

console.log(saludarEnojado("Giddo van Rossum")); //  Ashh! Giddo van Rossum
console.log(saludarEnojado("Rasmus Lerdorf")); //  Ashh! Rasmus Lerdorf
console.log(saludarEnojado("Brendan Eich")); //  Ashh! Brendan Eich
