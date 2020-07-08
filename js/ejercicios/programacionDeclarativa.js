// EJEMPLO 1:
// Forma Imperativa donde mostramos como se hace:
const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj);
  const attrs = [];

  for (let i = 0; i < keys.length; i++) {
    let attr = key[i];
    attrs.push(`${attr}="${obj[attr]}"`);
  }

  const string = attrs.join("");

  return string;
};

// Forma declarativa donde mostramos que se hace:
const attrsToString = (obj = {}) => {
  Object.keys(obj)
    .map((attr) => `${attr}="${obj[attr]}"`)
    .join("");
};

// Es lo mismo solo cambia la forma de escritura.

// EJEMPLO 2:
// Forma Imperativa donde mostramos como se hace:
const tag = (t) => {
  if (typeof t === "string") {
    return tagAttrs({ tag: t });
  } else {
    return tagAttrs(t);
  }
};

// Forma declarativa donde mostramos que se hace:
const tag = (t) => {
  typeof t === "string" ? tagAttrs({ tag: t }) : tagAttrs(t);
};
