class  AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId;
  }

  addClock(time, action, id) {
    if (!id) {
      throw new Error('Невозможно верифицировать будильник. Параметр id не передан.');
    }
    if (this.alarmCollection.find((item) => (item.id === id))) {
      console.error('Будильник с таким id уже существует.');
      return;
    }
    this.alarmCollection.push({
      time: time,
      action: action,
      id: id,
    });
  }

  removeClock (id) {
    const originArr = this.alarmCollection.length;
    const filteredArr = this.alarmCollection.filter((item) => (item.id !== id)).length;
    return originArr !== filteredArr;
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    if (hours < 10) {hours = `0${hours}`};
    if (minutes < 10) {minutes = `0${minutes}`};
    return `${hours}:${minutes}`;
  }

  start() {
    let currentTime = this.getCurrentFormattedTime;
    function checkClock(call) {
      if (call.time === currentTime()) {
        return call.action();
      }
    }
    if (this.timerId === undefined) {
      let interval = setInterval(() => this.alarmCollection.forEach((item) => {checkClock(item)}), 1000);
      this.timerId = interval;
    }
  }

  stop() {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId);
    }
  }

  printAlarms() {
    console.log(`Печать будильников в количестве ${this.alarmCollection.length}:`);
    this.alarmCollection.forEach((item) => {
      console.log(`Будильник №${item.id} заведен на ${item.time}`);
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection.length = 0;
  }
}

function testCase() {
  let alarm = new AlarmClock();
  alarm.addClock('21:00', () => console.log('Звонит звонок 1'), 1);
  alarm.addClock('21:01', () => {console.log('Звонит звонок 2'); alarm.removeClock(2)}, 2);
  alarm.addClock('21:02', () => {console.log('Звонит звонок 3'); alarm.clearAlarms(); alarm.printAlarms();}, 3);
  alarm.printAlarms();
  alarm.start();
}
