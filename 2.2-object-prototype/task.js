function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    if (animal === undefined) {
      return null;
    } else {
      let sound = animal.sound;
      return sound;
    }
    // return animalSound;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let roundedAverage;
    if (marks.length === 0) {
      return roundedAverage = 0;
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += +marks[i];
    }
    let average = sum / marks.length;
    roundedAverage = Math.round(average);
    return roundedAverage;
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    const now = +new Date();
    const userBirthday = +new Date(birthday);
    const diff = now - userBirthday;
    const days = diff / 86400000;
    const age = Math.floor(days / 1461) * 4 + Math.floor(((days - 1) % 1461) / 365);
    const verdict = (age >= 18) ? true : false;
    return verdict;
}
