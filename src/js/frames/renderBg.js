import $ from 'jquery';
import { TweenMax, TimelineMax } from 'gsap';

/* eslint-disable no-use-before-define */

const renderBg = ($container, store) => {

  const state = store.getState();
  const progress = state.progress;

  const $bg0 = getBg('backgr_0', $container);
  progressRender(progress, $bg0);

  // const tl = new TimelineMax();

};

// id: 'xxx'
const getBg = (id, $container) => {
  let target = $(`#${id}`);
  if (target.length <= 0) {
    target = $('<div class="backgr"></div>');
    target.attr({
      id,
    });
    $container.append(target);
  }
  return target;
};

const progressRender = (progress, $curBg) => {
  console.log('$curBg, progress', $curBg, progress);
  if (!typeof index === 'number') return null;
  switch (progress) {
    case 0: {
      $curBg.css({
        'background-color': '#f9efeb',
      });
      return null;
    }
    default: {
      return null;
    }
  }
};


export default renderBg;
