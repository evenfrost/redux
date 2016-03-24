if (module.hot) {
  module.hot.accept();
}

import React from 'react';
import { render } from 'react-dom';

// import './styles/index.styl';
import App from './components/app';

render(
  <App />,
  document.querySelector('main')
);
