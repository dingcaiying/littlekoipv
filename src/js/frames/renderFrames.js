import $ from 'jquery';
import { TimelineMax, Power3 } from 'gsap';
import BezierPlugin from 'gsap/BezierPlugin';
import PetalFactory from '../factories/PetalFactory';
import ImageFactory from '../factories/ImageFactory';
import viewSize from '../helper/viewSize';
import gen from '../helper/randomGenerator';

const renderFrames = ($container) => {

  const $curFrame = $('<div class="frame"></div>');
  $container.append($curFrame);

  const petalFactory = new PetalFactory();
  const imageFactory = new ImageFactory();

  const tl = new TimelineMax();

  // Frame-1
  // Generate petals
  (function () {
    const petalTotal = 0;
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
      tl.add(petal.move(3, {
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
  })();

  // Frame-1
  // Display text
  (function () {
    const image = imageFactory.create();
    image.draw($curFrame, '/assets/images/opening_text.jpg', { width: 270, opacity: 0 });
    tl.add(image.move(3, {
      opacity: 1,
    }), '-=4').add(image.move(1, {
      opacity: 0,
    }), '-=0');
  })();

  // Boy
  (function () {
    const image = imageFactory.create();
    image.draw($curFrame, '/assets/images/image_16.png', { width: 480, bottom: -500, right: -400, top: 'auto', left: 'auto', transform: 'none' });
    tl.add(image.move(3, {
      bottom: 0,
      right: 0,
      bezier: {
        values: [{ x: 0, y: 0 }, { x: -300, y: -200 }, { x: 0, y: 0 }],
      },
    })).add(image.move(3, {
      transform: 'scale3D(0.8, 0.8, 1)',
      opacity: 0,
    }));
  })();

};


export default renderFrames;
