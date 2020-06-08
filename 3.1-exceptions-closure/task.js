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
      if(a + b <= c || b + c <= a || a + c <= b) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }

    getPerimeter() {
      return this.a + this.b + this.c;
    }

    getArea() {
      const pp = this.getPerimeter() / 2;
      const area = Math.sqrt(pp * (pp - this.a) * (pp - this.b) * (pp - this.c));
      return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  }

  catch(err) {
    class TriangleError {
      getPerimeter() {
        return 'Ошибка! Неправильный треугольник';
      }
      getArea() {
        return 'Ошибка! Неправильный треугольник';
      }
    }
    return new TriangleError();
  }
}
