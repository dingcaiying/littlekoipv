import $ from 'jquery';
// import BezierPlugin from 'gsap/BezierPlugin';

// progress render
import render_0 from './progress/render_0';

/* eslint-disable no-use-before-define */

const renderFrames = ($container, store) => {

  const state = store.getState();
  const progress = state.progress;

  const $frame0 = getFrame('frame_0', $container);
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
  if (!typeof index === 'number') return null;
  switch (progress) {
    case 0: {
      render_0(progress, $curFrame, store);
      return null;
    }
    default: {
      return null;
    }
  }
};

export default renderFrames;
