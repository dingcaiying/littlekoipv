import Rect from '../concretes/Rect';

class RectFactory {

  constructor() {
    this.count = 0;
  }

  create() {
    // console.log(this.count++);
    return new Rect();
  }
}

export default RectFactory;

