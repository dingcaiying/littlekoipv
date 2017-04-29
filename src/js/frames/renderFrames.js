import $ from 'jquery';
// import BezierPlugin from 'gsap/BezierPlugin';

// progress render
import render_0 from './progress/render_0';
import render_2 from './progress/render_2';

/* eslint-disable no-use-before-define */

let prevProgress = -1;

const renderFrames = ($container, store) => {

  const state = store.getState();
  const progress = state.progress;
  if (progress === prevProgress) return;

  prevProgress = progress;

  const $frame0 = getFrame('frame_0', $container);
  console.log('render frames progress', store.getState().progress);
  progressRender(progress, $frame0, store);

};

const getFrame = (id, $container) => {
  let target = $(`#${id}`);
  if (target.length <= 0) {
    target = $('<div class="frame"></div>');
    target.attr({
      id,
    });
    $container.append(target);
  }
  return target;
};

const progressRender = (progress, $curFrame, store) => {
  // console.log('progressRender', progress);
  if (!typeof progress === 'number') return null;
  switch (progress) {
    case 0: {
      render_0(progress, $curFrame, store);
      break;
    }
    case 1: {
      break;
    }
    case 2: {
      render_2(progress, $curFrame, store);
      break;
    }
    default: {
      break;
    }
  }
  return null;
};

export default renderFrames;
