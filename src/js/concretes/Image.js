import $ from 'jquery';
import { TweenMax } from 'gsap';
import AbstractMoving from './AbstractMoving';

class Image extends AbstractMoving {

  constructor(props) {
    super(props);
    this.element = $('<div class="image"></div>');
  }

  draw($container, src, x, y, width, height) {
    $container.append(this.element);
    this.element.append(`<img src=${src} />`);
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

export default Image;
