import React from 'react';
import ListItem from './item';

export default class List extends React.Component {
  render() {
    const usernames = this.props.usernames;

    return (
      <ul>
        {usernames.map(username => <ListItem username={username} />)}
      </ul>
    );
  }
}
