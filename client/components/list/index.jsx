import React from 'react';
import ListItem from './item';

export default class List extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <ul>
        {data.map(item => <ListItem user={item.user} />)}
      </ul>
    );
  }
}
