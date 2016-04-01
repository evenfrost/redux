import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last name" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
