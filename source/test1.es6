'use strict';

class Car {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }

  setName(name) {
    this.name = name;
    console.log(this.name);
  }
}

var carInstance = new Car('Maruti');

carInstance.getName();
