import React, { Component } from 'react';
import './Modal.scss';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }

  render() {
    return (
      <div className="Modal__backdrop">
        <div className="Modal__content">{this.props.children}</div>
      </div>
    );
  }
}
