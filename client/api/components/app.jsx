import React from 'react';
import List from './list';
import Form from './form';

export default () => (
  <List />
);

export default class App extends React.Component {
  state = { usernames: [] }

  componentDidMount() {
    window.fetch('http://api.randomuser.me/?results=100')
      .then(res => res.json())
      .then(json => {
        const usernames = json.results.map(item => {
          const { first, last } = item.user.name;

          return { first, last };
        });

        this.setState({ usernames });
      });
  }

  handleUserSubmit = username => {
    console.log('username', username);
    this.setState({ usernames: [...this.state.usernames, username] });
  }

  render() {
    return (
      <div>
        <List usernames={this.state.usernames} />
        <Form onUserSubmit={this.handleUserSubmit} />
      </div>
    );
  }
}
