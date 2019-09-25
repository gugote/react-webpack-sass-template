import React from 'react';
import { render } from 'react-dom';
import Hello from './components/hello/hello';

class BaseComponent extends React.Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}

render(<BaseComponent />, document.getElementById('basecomponent'));
