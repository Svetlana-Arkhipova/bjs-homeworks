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
    return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  }

  start() {
    let currentTime = this.getCurrentFormattedTime();
    function checkClock(call) {
      if (call.time === currentTime) {
        return call.action();
      }
    }
    if (this.timerId === undefined) {
      let interval = setInterval(() => this.alarmCollection.forEach((item) => {checkClock(item)}), 60000);
      this.timerId = interval;
    }
  }

  // stop() {
  //   clearInterval(this.start().interval);
  // }

  printAlarms() {
    this.alarmCollection.forEach((item) => {
      console.log(`Будильник №${item.id} заведен на ${item.time}`);
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection.length = 0;
  }
}
