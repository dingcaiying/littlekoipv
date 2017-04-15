/* eslint-disable no-undef */

const viewSize = {
  w: window.innerWidth,
  h: window.innerHeight,
  // x, y range of size (cW x cH) area
  center: (cW, cH) => {
    const range = {
      x: [],
      y: [],
    };
    range.x = [(this.w - cW) / 2, (this.w - cW) / 2 + cW];
    range.y = [(this.h - cH) / 2, (this.h - cH) / 2 + cH];
    return range;
  },
};

export default viewSize;

/* eslint-enable no-undef */
