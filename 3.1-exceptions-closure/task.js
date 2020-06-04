//Задача 1
const parseCount = (value) => {
  if (isNaN(parseInt(value))){
      const parseError = new Error('Невалидное значение');
      throw parseError;
    } else {return parseInt(value)}
}


function validateCount(value) {
  try {
    return parseCount(value);
  }
  catch(err) {
    return err.message;
  }
}

//Задача 2
class Triangle {
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if(a + b <= c || b + c <= a || a + c <= b) {
      const triangleError = new Error('Треугольник с такими сторонами не существует');
      throw triangleError;
    }
  }

  getPerimeter() {
      const perimeter = this.a + this.b + this.c;
      return perimeter;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return +area.toFixed(3);
  }
}

function getTriangle(a, b, c) {
    const triangle = new Triangle(a, b, c);
    return triangle;
  }
