import React, { Component } from 'react';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default class SignupForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form style={styles.form} autoComplete="off">
        <label style={styles.label}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>

        <label style={styles.label}>
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </label>

        <button type="submit">Sign up</button>
      </form>
    );
  }
}
