import Petal from '../concretes/Petal';

class PetalFactory {

  constructor() {
    this.count = 0;
  }

  createPetal() {
    // console.log(this.count++);
    return new Petal();
  }
}

export default PetalFactory;
