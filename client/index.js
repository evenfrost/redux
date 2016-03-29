import React from 'react';
import { render } from 'react-dom';

import App from './components/app';

import todoApp from './app';

render(
  <App />,
  document.querySelector('main')
);

module.hot && module.hot.accept();
