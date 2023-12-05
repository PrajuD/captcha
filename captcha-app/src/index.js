import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Captcha from 'demos-react-captcha';

import './styles.css';
import CaptchaTest from './CaptchaTest';

class App extends Component {
  onChange(value) {
    console.log(value);
  }

  render() {
    return (
      <div className="App">
        <CaptchaTest />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
