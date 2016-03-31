import React from 'react';
import List from './list';

const data = [{
  label: 'first',
}, {
  label: 'second',
}, {
  label: 'third',
}];

export default () => (
  <List />
);

export default class App extends React.Component {
  render() {
    return (
      <List data={data} />
    );
  }
}
