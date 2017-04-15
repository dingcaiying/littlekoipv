import $ from 'jquery';
import { TweenMax } from 'gsap';
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
      left: x,
      top: y,
      transform,
    });
  }

  move(duration, vars) {
    return new TweenMax.to(this.element, duration, vars);
  }
}

export default Petal;
