/*
    Replicați funcționalitatea Mioriței, folosind obiecte.
    Miorița se află într-o stână infinită.
    Implementează metoda move() pentru a o face pe Miorița să se deplaseze în orice direcție
*/

const miorita = {
  x: 0,
  y: 0,
  move: function (moveX, moveY) {
    this.x += moveX;
    this.y += moveY;
  },
};

miorita.move(1, 3);
console.log(miorita.x, miorita.y);
// 1 3

miorita.move(1, -4);
console.log(miorita.x, miorita.y);
// 2 -1
