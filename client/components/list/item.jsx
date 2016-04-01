import React from 'react';

export default class ListItem extends React.Component {
  render() {
    const user = this.props.user;

    return (
      <li>{user.name.first} {user.name.last}</li>
    );
  }
}
