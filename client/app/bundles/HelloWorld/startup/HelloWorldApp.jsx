import React from 'react';
import { Provider } from 'react-redux';

import { createStore } from 'redux'
import reducer from '../reducers/index'
import App from '../components/App'

const store = createStore(reducer);

const HelloWorldApp = (props, _railsContext) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default HelloWorldApp;
