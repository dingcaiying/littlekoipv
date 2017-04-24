import Petal from '../concretes/Petal';

class PetalFactory {

  constructor() {
    this.count = 0;
  }

  create() {
    // console.log(this.count++);
    return new Petal();
  }
}

export default PetalFactory;
