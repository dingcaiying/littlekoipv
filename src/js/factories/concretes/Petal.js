import AbstractMoving from './AbstractMoving';

class Petal extends AbstractMoving {

  draw() {
    console.log('draw petal');
  }

  move() {
    console.log('move petal');
  }
}

export default Petal;
