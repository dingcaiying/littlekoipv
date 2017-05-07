import $ from 'jquery';
import { TweenMax, TimelineMax, Power3 } from 'gsap';
import { petalFactory, imageFactory, textFactory } from '../../factories/instances';

const render_3 = (progress, $curFrame, store) => {

  const tl = new TimelineMax();

  // render the transform thing
  const transformer = $('<div class="transformer"><span><b></b></span><span><b></b></span><span><b></b></span><span><b></b></span><span><b></b></span><span><b></b></span><span><b></b></span></div>');
  const textBox = $('<div class="text-box"><div class="inner">広い宇宙の</div></div>');
  const finalMask = $('<div class="mask"></div>');
  transformer.append(textBox);
  transformer.append(finalMask);
  $curFrame.append(transformer);
  tl.add(TweenMax.to(transformer, 1, {
    opacity: 1,
  })).add(TweenMax.to(transformer, 0.02, {
    opacity: 0,
  })).add(TweenMax.to(transformer, 0.02, {
    opacity: 1,
  })).add(TweenMax.to(transformer, 0.02, {
    opacity: 0,
  })).add(TweenMax.to(transformer, 0.02, {
    opacity: 1,
  })).add(TweenMax.to(transformer, 0.02, {
    opacity: 0,
  })).add(TweenMax.to(transformer, 0.02, {
    opacity: 1,
  })).add(TweenMax.to(transformer, 0.16, {
    width: '160px',
    delay: 0.32,
  }));
  Array.from(transformer.find('span')).forEach((elem, i) => {
    tl.add(new TweenMax.to(elem, 0.076 * i, {
      rotationZ: 25.7 * i,
      ease: Power3.easeIn,
    }), `-=${i > 0 ? 0.076 * (i - 1) : 0}`);
  });
  tl.add(new TweenMax.to(transformer.find('b'), 0.6, {
    width: 128,
  }));
  tl.add(TweenMax.to(transformer, 1, {
    width: 0,
    ease: Power3.easeIn,
  }), '+=0.6').call(() => {
    transformer.find('b').css({ width: 0 });
    textBox.hide();
  });
  tl.add(TweenMax.to(transformer, 1, {
    width: 30,
    ease: Power3.easeOut,
  })).add(TweenMax.to(finalMask, 1, {
    width: 40,
    height: 40,
    ease: Power3.easeOut,
  }), '-=1');
};

export default render_3;
