import $ from 'jquery';
import { TimelineMax } from 'gsap';
import BezierPlugin from 'gsap/BezierPlugin';
import PetalFactory from '../factories/PetalFactory';
import viewSize from '../helper/viewSize';
import gen from '../helper/randomGenerator';

const renderFrames = ($container) => {

  const $curFrame = $('<div class="frame"></div>');
  $container.append($curFrame);

  // Frame-1
  // Generate petals
  const petalFactory = new PetalFactory();
  const petalTotal = 20;

  const tl = new TimelineMax();
  for (let i = 0; i < petalTotal; i++) {
    const start = {
      x: gen.random(0, 0.2 * viewSize.w), // 1/6 top right corner
      y: gen.random(-0.1 * viewSize.h, 0), // 1/6 top right corner
    };
    const end = {
      x: gen.random(0, viewSize.w),
      y: gen.random(0, viewSize.h),
    };
    const petal = petalFactory.createPetal();
    petal.draw($curFrame, start.x, start.y);
    tl.add(petal.move(5, {
      left: end.x,
      top: end.y,
      bezier: [{ x: start.x, y: start.y }, { x: 400, y: 300 }, { x: end.x, y: end.y }],
    }), '-=4.5');
  }
};


export default renderFrames;
