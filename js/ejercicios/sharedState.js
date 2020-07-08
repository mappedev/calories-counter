const a = {
  value: 2,
};

// const addOne = () => (a.value += 1);
// const timesTwo = () => (a.value *= 2);

// addOne();
// timesTwo();

// console.log(a.value); // 6

// timesTwo();
// addOne();

// console.log(a.value); // 5

// FUNCIÓN PURA:
const b = {
  value: 2,
};

// Forma 1 de hacerlo:
// const addOne = (objOriginal) => {
//   const objeto = { ...objOriginal };
//   objeto.value += 1;

//   return objeto;
// };

// Forma 2 de hacerlo:
const addOne = (objOriginal) =>
  Object.assign({}, objOriginal, { value: objOriginal.value + 1 });

// Forma 1 de hacerlo:
// const timesTwo = (objOriginal) => {
//   const objeto = { ...objOriginal };
//   objeto.value *= 2;

//   return objeto;
// };

// Forma 2 de hacerlo:
const timesTwo = (objOriginal) =>
  Object.assign({}, objOriginal, { value: objOriginal.value * 2 });

console.log(addOne(timesTwo(b))); // 5
console.log(timesTwo(addOne(b))); // 6

console.log(b); // 2
// Nuestro objeto original nunca es alterado.
