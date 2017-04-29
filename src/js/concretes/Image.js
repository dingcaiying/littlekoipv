import $ from 'jquery';
import { TweenMax } from 'gsap';
import AbstractMoving from './AbstractMoving';

class Image extends AbstractMoving {

  constructor(props) {
    super(props);
    this.element = $('<div class="image"></div>');
  }

  getElement() {
    return this.element;
  }

  draw($container, src, cOptions) {
    const options = Object.assign({}, cOptions);
    $container.append(this.element);
    this.element.append(`<img src=${src} />`);
    this.element.css(options);
  }

  move(duration, vars) {
    return new TweenMax.to(this.element, duration, vars);
  }
}

export default Image;
