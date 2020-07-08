// FUNCIÓN MUTABLE
const addToListMutable = (list, item, quantity) => {
  list.push({ item, quantity });

  return list;
};
// Cambiamos el valor del array que le pasamos (list).

// FUNCIÓN INMUTABLE
const addToListInmutable = (list, item, quantity) => {
  const newList = JSON.parse(JSON.stringify(list));
  // const newList = [...list];
  // CON  EL SPREAD OPERATOR SOLO HACEMOS COPIA EN EL PRIMER NIVEL!!!

  newList.push({ item, quantity });

  return newList;
};
// Hacemos una copia del array que pasamos por argumento (list) y lo modificamos. No se modifica ningún valor de list.

const prueba = {
  name: "Mario",
  age: 23,
  info: {
    gender: "Masculino",
    job: "Developer",
  },
};
// console.log("addToListInmutable:", addToListInmutable(prueba, 4, 5));
// console.log("addToListMutable:", addToListMutable(prueba, 4, 5));

// Esto es importante en caso de necesitar que los valores bases no sean modificados.
// Esto es un aspecto de las variables puras, trabajan solo con las variables que reciben, son predecibles y por lo general tratan de no mutar ninguna variable de nuestra aplicación.

const prueba2 = { ...prueba };

console.log(prueba === prueba2);

console.log(prueba, prueba2);

prueba2.info.job = "FullStack";
console.log(prueba, prueba2);
