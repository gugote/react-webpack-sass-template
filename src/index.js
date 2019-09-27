import React from 'react';
import { render } from 'react-dom';
import Signup from '../src/components/signup/signup';
import '../src/sass/main.scss';

class BaseComponent extends React.Component {
  render() {
    return (
      <div>
        <Signup />
      </div>
    );
  }
}

render(<BaseComponent />, document.getElementById('basecomponent'));
