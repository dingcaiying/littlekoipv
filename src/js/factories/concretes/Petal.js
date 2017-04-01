import $ from 'jquery';
import AbstractMoving from './AbstractMoving';

class Petal extends AbstractMoving {

  constructor(props) {
    super(props);
    this.element = $('<div class="petal"></div>');
  }

  /**
   * draw petel in the container, with position provided
   * @return {[type]} [description]
   */
  draw($container, x, y, transform) {
    $container.append(this.element);
    this.element.css({
      top: y,
      left: x,
      transform,
    });
  }

  move(destX, destY) {
    console.log('move petal');
  }
}

export default Petal;
