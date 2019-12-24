import React from 'react';
import PropTypes from 'prop-types';
import './welcome-text.scss';



export default class WelcomeText extends React.Component {
  render() {
    return (
      <div>
        <div className="welcome-text container">
          <h2>Welcome to</h2>
          <h1>Booklstr.</h1>
          <h3>{this.props.copy}</h3>
        </div>
      </div>
    );
  }
}

WelcomeText.propTypes = {
  copy: PropTypes.string.isRequired
};


