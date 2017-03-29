import PetalFactory from '../factories/PetalFactory';

const renderFrame = () => {
  const petalFactory = new PetalFactory();
  const petal = petalFactory.createPetal();
  petal.move();
  petal.draw();
};

export default renderFrame;
