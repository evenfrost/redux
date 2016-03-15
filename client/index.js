import './styles/index.styl';
import test from './test';

console.log('test', test);

if (module.hot) {
  module.hot.accept();
}
