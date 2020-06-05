//Задача 1
const parseCount = (value) => {
  const a = parseInt(value);
  if (isNaN(a)){throw new Error('Невалидное значение')};
  return a;
}

function validateCount(value) {
  try {
    return parseCount(value);
  }
  catch(err) {
    return err;
  }
}

//Задача 2
class Triangle {
  constructor (a, b, c) {
    try {
      if(a + b <= c || b + c <= a || a + c <= b) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
      this.a = a;
      this.b = b;
      this.c = c;
      this.p = a + b + c;
      this.s = function Area() {
        const pp = this.p / 2;
        const area = Math.sqrt(pp * (pp - this.a) * (pp - this.b) * (pp - this.c));
        return +area.toFixed(3);
      };
    }

    catch(err) {
      this.p = 'Ошибка! Треугольник не существует';
      this.s = function Area(){
        return 'Ошибка! Треугольник не существует'};
     }
    }

    getPerimeter() {
      return this.p;
    }

    getArea() {
      return this.s();
    }
}

function getTriangle(a, b, c) {
    return new Triangle(a, b, c);
}
