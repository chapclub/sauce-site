import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// middleware
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// reducer
import { rootReducer } from './saucinator';

import './index.css';
import App from './components/App/App';

const middleware = [thunk, createLogger()];
const STORE = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById('root')
);
