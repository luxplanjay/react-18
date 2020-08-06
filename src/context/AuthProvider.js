import React, { Component } from 'react';
import authContext from './authContext';

export default class AuthProvider extends Component {
  state = {
    user: null,
    logIn: () => {
      this.setState({ user: 'Mango' });
    },
    logOut: () => {
      this.setState({ user: null });
    },
  };

  render() {
    return (
      <authContext.Provider value={this.state}>
        {this.props.children}
      </authContext.Provider>
    );
  }
}
