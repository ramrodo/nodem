import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import { getMfals } from '../../util/ApiClient';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { mfals: [] }
  }

  render() {

    getMfals();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
