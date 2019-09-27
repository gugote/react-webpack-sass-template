import React from 'react';
import PropTypes from 'prop-types';
// import logo from '../../images/logo.svg';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <div className="logo">{/* <img src="{logo}" alt="Booklstr" /> */}</div>
        <div className="welcome-text">
          <h2>Welcome to</h2>
          <h1>Booklstr.</h1>
          <h3>Book Log and Reading Stats for Data Nerds</h3>
        </div>
        <div className="login-cta">
          <form action="">
            <button>Login</button>
          </form>
        </div>
        <div className="foot-note">
          <p>
            Don't have an account? <a href="/sign-in">Sign In</a>
          </p>
        </div>
      </div>
    );
  }
}

Signup.PropTypes = {
  signup: PropTypes.string
};
