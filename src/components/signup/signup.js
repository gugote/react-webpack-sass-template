import React from 'react';
import PropTypes from 'prop-types';
import AppLogo from '../app-logo/app-logo';
import WelcomeText from '../welcome-text/welcome-text';
import Quotes from '../quotes/quotes';
import './signup.scss';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <AppLogo />
        <WelcomeText copy={'Create your account'} />
        <div className="signin-box">
          <form action="">
            <fieldset>
              <label htmlFor="username">Username</label>
              <input type="text" />
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password</label>
              <input type="password" />
            </fieldset>
            <fieldset>
              <button>Create Account</button>
            </fieldset>
          </form>
          <div className="footnote">
            <p>
              Already have an account? <a href="/sign-in">Log In</a>
            </p>
          </div>
        </div>
        <Quotes />
     </div>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.string
};
