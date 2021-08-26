let people: string[] = [];
people = ['ronald', 'jeral', 'fabi'];
people.push('javier');

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ronald');
peopleAndNumbers.push(2);

enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}

let colorFavorito: Color = Color.Rojo;

function add(a: number, b: number): number {
  return a + b;
}
const sum = add(3, 4);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

enum Color {
  rojo = 'rojo',
  verde = 'verde',
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRectangle = area(rect);

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());
