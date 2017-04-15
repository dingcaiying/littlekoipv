import $ from 'jquery';
import { TimelineMax } from 'gsap';
import BezierPlugin from 'gsap/BezierPlugin';
import PetalFactory from '../factories/PetalFactory';
import ImageFactory from '../factories/ImageFactory';
import viewSize from '../helper/viewSize';
import gen from '../helper/randomGenerator';

const renderFrames = ($container) => {

  const $curFrame = $('<div class="frame"></div>');
  $container.append($curFrame);

  // Frame-1
  // Generate petals
  const petalFactory = new PetalFactory();
  const imageFactory = new ImageFactory();

  const tl = new TimelineMax();

  (function () {
    const petalTotal = 10;
    for (let i = 0; i < petalTotal; i++) {
      const start = {
        x: gen.random(0, 0.2 * viewSize.w), // 1/6 top right corner
        y: gen.random(-0.1 * viewSize.h, 0),
      };
      const end = {
        x: gen.random(0, viewSize.w),
        y: gen.random(0, viewSize.h),
      };
      const petal = petalFactory.createPetal();
      petal.draw($curFrame, {
        left: start.x,
        top: start.y,
        'z-index': 1,
      });
      tl.add(petal.move(5, {
        left: end.x,
        top: end.y,
        bezier: {
          values: [{ x: start.x, y: start.y }, { x: (end.x - start.x) / 2, y: (end.y - start.y) / 2 }, { x: end.x, y: end.y }],
          curviness: 1,
          autoRotate: 90,
          type: 'thru', // "thru", "soft", "quadratic", or "cubic"
        },
      }), '-=4.5');
    }

    // Frame-1
    // Display text

    const image = imageFactory.create();
    image.draw($curFrame, '/assets/images/opening_text.jpg', { width: 270 });

  })();
};


export default renderFrames;
