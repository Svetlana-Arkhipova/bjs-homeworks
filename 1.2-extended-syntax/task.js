function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    // return x;
    'use strict';
    let d = b ** 2 - 4 * a * c;
    let x = [];
    if (d === 0) {
      x[0] = -b / (2 * a);
    } else if (d > 0) {
      x[0] = (-b + Math.sqrt(d)) / (2 * a);
      x[1] = (-b - Math.sqrt(d)) / (2 * a);
    }
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let averageMark;
    if (marks.length === 0) {
      averageMark = 0;
      return averageMark;
    } else if (marks.length > 5) {
      console.log('В списке больше 5-ти оценок');
      marks = marks.slice(0, 5);
    }
    let marksSum = 0;
    for (let i = 0; i < marks.length; i++) {
      marksSum = marksSum + marks[i];
    }
    averageMark = marksSum / marks.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let currentDate = new Date();
    let age = currentDate.getFullYear() - dateOfBirthday.getFullYear();
    let result = (age > 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
}
