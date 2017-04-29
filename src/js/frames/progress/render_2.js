import { TimelineMax, Power3 } from 'gsap';
import { petalFactory, imageFactory, textFactory } from '../../factories/instances';

const render_2 = (progress, $curFrame, store) => {
  const tl = new TimelineMax();

  (function () {
    // const imageL = imageFactory.create();
    const imageR = imageFactory.create();
    const sque = ['/assets/images/image_21_0.png', '/assets/images/image_21_1.png'];
    imageR.draw($curFrame, sque[0], {
      width: 270,
      top: 'auto',
      left: 'auto',
      bottom: 0,
      right: 0,
      transform: 'none',
    });
    tl.call(() => {
      console.log(imageR.getElement());
      imageR.getElement().attr({ src: sque[1] });
    });
  })();
};

export default render_2;
