import React from 'react';
import PropTypes from 'prop-types';
import AppLogo from '../app-logo/app-logo';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <AppLogo />
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
            Already have an account? <a href="/sign-in">Log In</a>
          </p>
        </div>
      </div>
    );
  }
}

Signup.PropTypes = {
  signup: PropTypes.string
};
