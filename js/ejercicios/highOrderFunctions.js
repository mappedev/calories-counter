// Detŕas de map:
// const array1 = [1, 2, 3];
// const array2 = [];

// for (let i = 0; i < array1.length; i++) {
//   array2.push(array1[i] * 2);
// }

// console.log(array2); // [2, 4, 6]

const array = [1, 2, 3];

// map:
// Forma 1 sin index:
const array1 = array.map((item) => item * 2);
console.log(array1); // [2, 4, 6]
// Forma 2 con index:
const array = [1, 2, 3];
array.map((item, index) => console.log(index));

// forEach:
// const array2 = array.forEach((item) => item * 3);
// console.log(array2); // undefined
// Esto ocurre porque forEach itera pero no devuelve un arreglo, por tal razón array2 no tiene valor.
// forEach solo ejecuta la función que indiquemos entre sus paréntesis:
console.log(array.forEach((item) => console.log(item * 2)));
// 2
// 4
// 6

// filter:
const array3 = array.filter((item) => item === 2);
console.log(array3); // [2]

// reduce:
// Forma 1 indicando el número donde empieza acc:
const array4 = array.reduce((acc, curr) => acc + curr, 4);
console.log(array4); // 10
//Forma 2 sin indicar el nímero donde empieza acc, en este caso se supone que empieza por 0:
const array5 = array.reduce((acc, curr) => acc + curr);
console.log(array5); // 6
