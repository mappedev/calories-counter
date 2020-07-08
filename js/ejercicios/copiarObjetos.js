// DATOS PRIMITIVOS
let a = 1;
let b = a;
console.log(a, b); // 1

b += 1;
console.log(a, b); // 1 2

// OBJETOS
let car = {
  color: "red",
  year: 2019,
  km: 0,
};

let newCar = car;
console.log(car, newCar); // Sus datos son iguales.

newCar.year = 2000;
console.log(car, newCar); // SE MODIFICARON LOS DOS NO SOLO NEWCAR!!!
// Esto ocurre porque al igualar ambos objetos (let newCar = car), se copia la REFERENCIA al objeto, no el objeto en sí.

// FORMAS DE COPIAR LOS VALORES DEL OBJETO EN EL PRIMER NIVEL (NO OBJETOS ANIDADOS) Y NO LA REFERENCIA
// Esto se puede hacer con una función de JS llamada Object.assign().
/*
  Object.assign recibe dos parámetros:
    1er parámetro: donde se hará la copia.
    2do parámetro: fuente donde extraen las propiedades y métodos.
*/
// También se puede hacer con spread operator (operador de propagación)
// Object.assign:
// let newCar2 = Object.assign({}, car);
// Spread operator:
let newCar2 = { ...car };
console.log(car, newCar2); // Sus datos son iguales.

newCar2.year = 1900;
console.log(car, newCar2); // Ahora si, ambos datos son DISTINTOS.
// Con Object.assign no se copia la referencia si no el valor como tal del objeto.

// NUEVO OBJETO EJEMPLO
let auto = {
  color: "blue",
  year: 2019,
  km: 0,
  owner: {
    name: "Mario",
    age: 23,
  },
};

let newAuto = auto;
console.log(auto, newAuto); // Son iguales completamente.

newAuto.owner.age += 1;
console.log(auto, newAuto); // LA EDAD SE CAMBIA EN AMBOS OBJETOS!!!

let newAuto2 = Object.assign({}, auto);
console.log(auto, newAuto2); // Sus datos son iguales.

newAuto2.owner.age += 1;
console.log(auto, newAuto2); // AMBOS OBJETOS INTERNOS (OWNER) SIGUEN SIENDO IGUALES INCLUSO CON OBJECT ASSIGN!!!
// Esto ocurre porque Object.assign nos copia todos los valores del objeto pero solo en el primer nivel.
// Todo objeto que este dentro o anidado solamente se van a copiar las nuevas referencias.

// FORMAS DE COPIAR OBJETOS COMPLEJOS
// Para guardar todos los niveles de un objeto se pueden usar las funciones de JS JSON.parse() y JSON.stringify()
// JSON.parse convierte una cadena de texto JSON en un objeto de JS.
// JSON.stringify convierte un objeto de JS en texto JSON y almacena el texto JSON en una cadena.
let newCoche = JSON.parse(JSON.stringify(auto));
console.log(auto, newCoche); // Sus datos son iguales.

newCoche.owner.age += 1;
console.log(auto, newCoche); // Ahora si, ambos datos son DISTINTOS en todos sus niveles.
