// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';

// import './styles/index.styl';

// import Counter from './components/Counter';
// import counter from './reducers';

// const store = createStore(counter);
// const rootEl = document.querySelector('main');

// function render() {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement = { function onIncrement() { return store.dispatch({ type: 'INCREMENT' }); } }
//       onDecrement = { function onDecrement() { return store.dispatch({ type: 'DECREMENT' }); } }
//     />,
//     rootEl
//   );
// }

// render();
// store.subscribe(render);

// ReactDOM.render(
//   <h1></h1>,
//   document.querySelector('main')
// );
document.write('123');

if (module.hot) {
  module.hot.accept();
}
