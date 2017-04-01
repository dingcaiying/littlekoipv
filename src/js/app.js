import $ from 'jquery';
import renderFrames from './frames/renderFrames';

// Singleton

class App {

  /**
   * visit App instance by this method
   * @return {App} instance
   */
  static Instance() {
    if (App._instance === 0) {
      App._instance = new App();
    }
    return App._instance;
  }

  run() {
    const $container = $('#pv_canvas');
    renderFrames($container);
  }
}
// Not support static properties. Pretend it is.
App._instance = 0;


const app = App.Instance();
app.run();
