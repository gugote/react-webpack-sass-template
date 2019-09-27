import React from 'react';
import PropTypes from 'prop-types';
import isologo from '../../images/hashboxed.png';
import './hello.scss';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1 className="thediv">
          Booklstr
        </h1>
        <img src={isologo} />
        <div className="with-background">
          <h2>With Background</h2>
        </div>
      </div>
    );
  }
}
Hello.propTypes = {
  hello: PropTypes.string
};
export default Hello;
