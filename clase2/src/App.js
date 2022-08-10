import React, { Component } from 'react';
import './App.css';
import Greetings from './components/greetings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greetings name={true}></Greetings>
      </div>
    );
  }
}

export default App;
