//Задача 1
function getSolutions(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return {
      D: d,
      roots: []
    };
  } else if (d === 0) {
    const x1 = -b / (2 * a);
    return {
      D: d,
      roots: [x1]
    };
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return {
      D: d,
      roots: [x1, x2]
    };
  }
}

function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.roots.length === 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.roots.length === 1) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
  }
}

//Задача 2
function getAverageScore(data) {
  let avgScore = {};
  let avgArr = [];
  for (let prop in data) {
    let avg = getAverageMark(data[prop]);
    avgScore[prop] = avg;
    avgArr.push(avg);
  }
  avgScore.average = getAverageMark(avgArr);
  return avgScore;
}

function getAverageMark(marks) {
  let sum = 0;
  let avg;
  if (marks.length === 0) {
    return avg = 0;
  }
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  avg = sum / marks.length;
  return avg;
}

//Задача 3
function getPersonData(secretData) {
  let personData = {};
  for (let prop in secretData) {
    if (prop === 'aaa') {
      personData.firstName = getDecodedValue(secretData[prop]);
    }
    if (prop === 'bbb') {
      personData.lastName = getDecodedValue(secretData[prop]);
    }
  }
  return personData;
}

function getDecodedValue(secret) {
  let name;
  if (secret === 0) {
    return name = 'Родриго';
  } else {
    return name = 'Эмильо';
  }
}
