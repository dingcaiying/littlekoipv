import Image from '../concretes/Image';

class ImageFactory {

  constructor() {
    this.count = 0;
  }

  create() {
    // console.log(this.count++);
    return new Image();
  }
}

export default ImageFactory;
