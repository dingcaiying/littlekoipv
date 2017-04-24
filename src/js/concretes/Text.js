import $ from 'jquery';
import { TweenMax } from 'gsap';
import AbstractMoving from './AbstractMoving';

class Text extends AbstractMoving {

  constructor(props) {
    super(props);
    this.element = $('<div class="text"></div>');
  }

  draw($container, text, cOptions) {
    const options = Object.assign({}, cOptions);
    $container.append(this.element);
    this.element.text(text);
    this.element.css(options);
  }

  move(duration, vars) {
    return new TweenMax.to(this.element, duration, vars);
  }
}

export default Text;

