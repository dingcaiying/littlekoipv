import $ from 'jquery';
import { TweenMax } from 'gsap';
import AbstractMoving from './AbstractMoving';

class Rectangle extends AbstractMoving {

  constructor(props) {
    super(props);
    this.element = $('<div class="rect"></div>');
  }

  getElement() {
    return this.element;
  }

  draw($container, x, y, width, height) {
    console.log('draw rectangle');
    $container.append(this.element);
    this.element.css({
      width,
      height,
      left: x,
      top: y,
    });
  }

  move(duration, vars) {
    return new TweenMax.to(this.element, duration, vars);
  }
}

export default Rectangle;
