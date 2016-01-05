import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import configureStore from './store/configureStore'

let store = configureStore();

let rootElement = document.getElementById('uptour');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);