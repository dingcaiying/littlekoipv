// Abstract class here, should be

export default class AbstractMoving {

  constructor() {
    if (new.target === AbstractMoving) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }
  }

  draw() {}

  move() {}

}
