import $ from 'jquery';
import { TimelineMax } from 'gsap';

const renderBg = ($container) => {

  const $curBg = $('<div class="backgr"></div>');
  $curBg.css({
    'background-color': '#f9efeb',
  });
  $container.append($curBg);

  // const tl = new TimelineMax();
};

export default renderBg;
