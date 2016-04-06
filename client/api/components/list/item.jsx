import React from 'react';

export default class ListItem extends React.Component {
  render() {
    const username = this.props.username;

    return (
      <li>{username.first} {username.last}</li>
    );
  }
}
