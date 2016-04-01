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
  state = { data: [] }

  componentDidMount() {
    window.fetch('http://api.randomuser.me/?results=100')
      .then(res => res.json())
      .then(json => {
        this.setState({ data: json.results });
      });
  }

  render() {
    return (
      <List data={this.state.data} />
    );
  }
}
