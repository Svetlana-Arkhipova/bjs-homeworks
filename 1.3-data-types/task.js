'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let values = [percent, contribution, amount];
    let types = ['percent', 'contribution', 'amount'];

    for (let i = 0; i < values.length;) {
      if (typeof(values[i]) === 'number' && isNaN(values[i]) === false) {
        i++;
      } else {
        values[i] = parseInt(values[i]);
        if (typeof(values[i]) === 'number' && isNaN(values[i]) === false) {
          i++;
        } else {
          return(`Параметр ${types[i]} содержит неправильное значение ${values[i]}`);
        }
      }
    }

    let s = amount - contribution;

    //кол-во месяцев = кол-во месяцев за полные годы
    //плюс оставшиеся месяцы текущего года (не включая текущий месяц)
    //плюс месяцы последнего года выплат
    let months = (date.getFullYear() - new Date().getFullYear() - 1) * 12 + (11 - new Date().getMonth()) + (date.getMonth() + 1);
    let p = percent / 100 / 12;
    let monthlyFee = s * (p + p / (((1 + p) ** months) - 1));
    let totalAmount = monthlyFee * months;
    console.log(totalAmount.toFixed(2));
    return (totalAmount.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;
    (name && name != ' ') ? greeting = `Привет, мир! Меня зовут ${name}` : greeting = `Привет, мир! Меня зовут ${'Аноним'}`
    console.log(greeting);
    return greeting;
}
