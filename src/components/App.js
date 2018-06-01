import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './css/App.css';
import ToDoCollection from './ToDoCollection';

class App extends Component {
  render() {
    const todos = ['apples', 'oranges', 'bananas'];
    return (
      <div className="App">
        <ToDoCollection todos={todos}/>
      </div>
    );
  }
}

export default App;
