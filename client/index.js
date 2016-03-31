import React from 'react';
import { render } from 'react-dom';

import store from './store';
import { addTodo, completeTodo, setVisibilityFilter, visibilityFilters } from './actions';

import App from './components/app';

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('some todo'));
store.dispatch(addTodo('another todo'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_COMPLETED));

unsubscribe();

render(
  <App />,
  document.querySelector('main')
);

module.hot && module.hot.accept();
