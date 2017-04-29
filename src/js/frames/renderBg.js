import $ from 'jquery';
import { TweenMax, TimelineMax } from 'gsap';

/* eslint-disable no-use-before-define */

let prevProgress = -1;

const renderBg = ($container, store) => {

  const state = store.getState();
  const progress = state.progress;
  if (progress === prevProgress) return;

  prevProgress = progress;

  const $bg0 = getBg('backgr_0', $container);
  progressRender(progress, $bg0, store);

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

const progressRender = (progress, $curBg, store) => {
  if (typeof progress !== 'number') return null;
  switch (progress) {
    case 0: {
      $curBg.css({
        backgroundColor: '#f9efeb',
      });
      break;
    }
    case 1: {
      TweenMax.to($curBg, 2, {
        backgroundColor: '#ffffff',
      });
      store.dispatch({ type: 'PROGRESS', data: 2 });
      break;
    }
    case 2: {
      TweenMax.to($curBg, 2, {
        backgroundColor: '#EFEDE5',
        delay: 2,
      });
      break;
    }
    default: {
      break;
    }
  }
  return null;
};


export default renderBg;
