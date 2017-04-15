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
  draw($container, cOptions) {
    const options = Object.assign({}, cOptions);
    $container.append(this.element);
    this.element.css(options);
  }

  move(duration, vars) {
    return new TweenMax.to(this.element, duration, vars);
  }
}

export default Petal;
