import $ from 'jquery';
import { createStore, combineReducers } from 'redux';
import renderBg from './frames/renderBg';
import renderFrames from './frames/renderFrames';

import reducer from './reducers/index';

// Store

const store = createStore(reducer);

store.dispatch({ type: '' }); // push initialState to stroe
store.subscribe(() => {
  console.log('store.getState', store.getState());
});


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
    renderBg($container, store);
    renderFrames($container, store);
  }
}
// Not support static properties. Pretend it is.
App._instance = 0;


const app = App.Instance();
app.run();
