import { TimelineMax, Power3 } from 'gsap';
import viewSize from '../../helper/viewSize';
import gen from '../../helper/randomGenerator';
import { petalFactory, imageFactory, textFactory } from '../../factories/instances';

/* eslint-disable no-unreachable */

const render_0 = (progress, $curFrame, store) => {

  const tl = new TimelineMax();

  // Generate petals
  (function () {
    const petalTotal = 5;
    for (let i = 0; i < petalTotal; i++) {
      const start = {
        x: gen.random(0, 0.2 * viewSize.w),
        y: gen.random(-0.1 * viewSize.h, 0) - 30 * i,
      };
      const end = {
        x: gen.random(viewSize.w * 0.5, viewSize.w),
        y: gen.random(viewSize.h, viewSize.h * 1.5),
      };
      const petal = petalFactory.create();
      petal.draw($curFrame, {
        left: start.x,
        top: start.y,
        'z-index': 1,
      });
      tl.add(petal.move(5, {
        bezier: {
          values: [{ x: start.x, y: start.y }, { x: (end.x - start.x) / 2, y: (end.y - start.y) / 2 }, { x: end.x, y: end.y }],
          curviness: 1,
          autoRotate: ['x', 'y', 'rotation', 60 + gen.random(10, 30), false],
          type: 'thru',
        },
      }), '-=4.5');
    }
  })();

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
    tl.add(image.move(5, {
      bezier: {
        values: [{ x: 0, y: 0 }, { x: -500, y: -400 }, { x: -400, y: -500 }],
        curviness: 1,
        type: 'thru',
      },
    })).add(image.move(3, {
      // opacity: 0,
    }));

    const text = textFactory.create();
    text.draw($curFrame, 'by 天月', { width: 200, opacity: 0 });
    tl.add(text.move(3, {
      opacity: 1,
    }), '-=5').add(text.move(3, {
      opacity: 0,
    }), '-=3').call(() => {
      // tl.clear();
      // $curFrame.remove();
      store.dispatch({ type: 'PROGRESS', data: 1 });
    });
  })();
};

export default render_0;
