import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import './app-logo.scss';

export default class AppLogo extends React.Component {
  render() {
    return (
      <div>
        <div className="app-logo">
          <img src={logo} alt="Booklstr" />
        </div>
      </div>
    );
  }
}

AppLogo.propTypes = {
  AppLogo: PropTypes.string
};
