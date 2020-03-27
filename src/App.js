import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello there</h1>
        <Person name='Gonzalo' age="29" />
        <Person name='German' age="29" />
        <Person name='Nacho' age="27" />
      </div>
    );
  }
}

export default App;
