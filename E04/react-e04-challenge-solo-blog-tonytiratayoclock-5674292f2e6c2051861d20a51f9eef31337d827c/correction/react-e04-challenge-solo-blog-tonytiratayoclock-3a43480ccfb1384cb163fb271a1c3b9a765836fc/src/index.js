/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
import Blog from 'src/components/Blog';
// store
import store from 'src/store';

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <Blog />
  </Provider>
);

render(rootComponent, document.getElementById('root'));
