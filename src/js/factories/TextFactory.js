import Text from '../concretes/Text';

class TextFactory {

  constructor() {
    this.count = 0;
  }

  create() {
    return new Text();
  }
}

export default TextFactory;
