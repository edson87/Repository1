import * as React from 'react';
import { render } from 'react-dom';
import Root from './root';


import { Provider } from 'react-redux';

import configureStore from './configureStore';

const store = configureStore({});

render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.querySelector('#ReactRoot'),
);