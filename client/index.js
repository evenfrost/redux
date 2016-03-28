
import React from 'react';
import { render } from 'react-dom';

import App from './components/app';

import { ADD_TODO } from './actions';

console.log('ADD_TODO', ADD_TODO);

render(
  <App />,
  document.querySelector('main')
);

module.hot && module.hot.accept();
