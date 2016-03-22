import './styles/index.styl';
import React from 'react';
import test from './test';

console.log('test', test);
console.log('React', React);

if (module.hot) {
  module.hot.accept();
}
