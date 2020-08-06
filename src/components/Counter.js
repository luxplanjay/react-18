import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  componentDidMount() {
    document.title = `Кликнули ${this.state.count} раз`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Кликнули ${this.state.count} раз`;
    }
  }

  render() {
    return (
      <button type="button" onClick={this.handleIncrement}>
        Кликнули {this.state.count} раз
      </button>
    );
  }
}
