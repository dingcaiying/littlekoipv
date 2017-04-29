import { TweenMax, TimelineMax, Power3 } from 'gsap';
import { petalFactory, imageFactory, textFactory } from '../../factories/instances';

const render_2 = (progress, $curFrame, store) => {
  const tl = new TimelineMax();

  (function () {
    const imageL = imageFactory.create();
    const imageR = imageFactory.create();
    const imageR2 = imageFactory.create();
    const imageR3 = imageFactory.create();
    const sque = ['/assets/images/image_21_0.png', '/assets/images/image_21_1.png', '/assets/images/image_21_2.png'];

    imageL.draw($curFrame, '/assets/images/image_21_2t.png', {
      width: 360,
      top: 0,
      left: 0,
      transform: 'none',
      opacity: 0,
    });
    imageR.draw($curFrame, sque[0], {
      width: 270,
      top: 'auto',
      left: 'auto',
      bottom: 0,
      right: 0,
      transform: 'none',
      opacity: 0,
    });
    imageR2.draw($curFrame, sque[1], {
      width: 270,
      top: 'auto',
      left: 'auto',
      bottom: 0,
      right: 0,
      transform: 'none',
      opacity: 0,
    });
    imageR3.draw($curFrame, sque[2], {
      width: 270,
      top: 'auto',
      left: 'auto',
      bottom: '7px',
      right: '-2px',
      transform: 'none',
      opacity: 0,
    });
    tl.add(imageR.move(1, { opacity: 1 }))
      .add(imageR.move(1, { opacity: 0, ease: Power3.easeIn }))
      .add(imageR2.move(1, { opacity: 1 }), '-=0.2')
      .add(imageR2.move(1.6, { opacity: 0, ease: Power3.easeIn }), '-=0.2')
      .add(imageR3.move(2, { opacity: 1 }), '-=0.8')
      .add(imageL.move(2, { opacity: 1 }), '-=2.8');
  })();
};

export default render_2;
