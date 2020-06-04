//Задача 1
class Weapon {
  constructor(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.durability = obj.durability;
    this.startDurability = obj.durability;
    this.range = obj.range;
  }

  takeDamage(damage) {
    this.durability = this.durability - damage;
    if (this.durability < 0) {
      this.durability = 0;
    }
  }

  getDamage() {
    const damage = this.durability / this.startDurability * 100;
    if (damage === 0) {
      return 0;
    } else if (damage < 30) {
      return this.attack / 2;
    } else {
      return this.attack;
    }
  }

  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
}

const arm = new Weapon ({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

const sword = new Weapon({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1,
});

const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});

const staff = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});

const longBow = new Weapon ({
  name: 'Длинный лук',
  attack: 15,
  durability: bow.durability,
  range: 4,
});

const ax = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: sword.range,
});

const stormStaff = new Weapon({
  name: 'Посох Бури',
  attack: 10,
  durability: staff.durability,
  range: 3,
});

longBow.takeDamage(100);
console.log(longBow.durability);
console.log(longBow.getDamage());
console.log(longBow.isBroken());


//Задача 2
class Arm extends Weapon {
  constructor() {
    super({
      name: 'Рука',
      attack: 1,
      durability: Infinity,
      range: 1,
    })
  }
}

class Bow extends Weapon {
  constructor() {
    super({
      name: 'Лук',
      attack: 10,
      durability: 200,
      range: 3,
    })
  }
}

class LongBow extends Bow {
  constructor() {
    super()
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
    }
  }


class Sword extends Weapon {
  constructor() {
    super({
      name: 'Меч',
      attack: 25,
      durability: 500,
      range: 1,
    })
  }
}

class Axe extends Sword {
  constructor() {
    super()
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
    }
  }

  class Knife extends Weapon {
    constructor() {
      super({
        name: 'Нож',
        attack: 5,
        durability: 300,
        range: 1,
      })
    }
  }

  class Staff extends Weapon {
    constructor() {
      super({
        name: 'Посох',
        attack: 8,
        durability: 300,
        range: 2,
      })
    }
  }

  class StormStaff extends Staff {
    constructor() {
      super()
      this.name = 'Посох Бури';
      this.attack = 10;
      this.range = 3;
      }
    }
