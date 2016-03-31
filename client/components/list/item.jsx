import React from 'react';

export default class ListItem extends React.Component {
  render() {
    return (
      <li>{this.props.label}: <input type="text" /></li>
    );
  }
}
