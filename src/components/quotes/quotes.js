import React from 'react';
import PropTypes from 'prop-types';
import './quotes.scss';

export default class Quotes extends React.Component{
  render () {
    return (
      <div className="quotes">
        <blockquote>
          <p>“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”</p>
          <footer> – George R.R. Martin</footer>
        </blockquote>
      </div>
    )
  }
};

Quotes.propTypes = {
  quotes: PropTypes.string
};