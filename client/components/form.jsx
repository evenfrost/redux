import React from 'react';

export default class Form extends React.Component {
  state = { first: '', last: '' }

  handleFirstNameChange = event => {
    this.setState({ first: event.target.value });
  }

  handleLastNameChange = event => {
    this.setState({ last: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const first = this.state.first.trim();
    const last = this.state.last.trim();

    if (!first || !last) {
      return;
    }

    this.props.onUserSubmit({ first, last });
    this.setState({ first: '', last: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="first name" value={this.state.first} onChange={this.handleFirstNameChange} />
        <input type="text" placeholder="last name" value={this.state.last} onChange={this.handleLastNameChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
