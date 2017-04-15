import AbstractMoving from './AbstractMoving';

class Rectangle extends AbstractMoving {

  draw() {
    console.log('draw rectangle');
  }

  move() {
    console.log('move rectangle');
  }
}

export default Rectangle;
