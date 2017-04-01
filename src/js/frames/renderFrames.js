import $ from 'jquery';
import PetalFactory from '../factories/PetalFactory';

const renderFrames = ($container) => {

  // TODO: add frame index, iframe-:index, as class or id
  const $curFrame = $('<div class="frame"></div>');
  $container.append($curFrame);

  const petalFactory = new PetalFactory();
  const petal = petalFactory.createPetal();

  petal.draw($curFrame, 0, 0);
  petal.move('100%', '100%');
};

export default renderFrames;
