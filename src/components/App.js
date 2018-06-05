import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './css/App.css';
import ToDoCollection from './ToDoCollection';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    todos = [{id: '1', description: 'apples'}, {id: '2', description: 'oranges'}, {id: '3', description: 'bananas'}];
    return (
      <div className="App">
        <ToDoCollection store={this.props.store} todos={todos}/>
      </div>
    );
  }
}

export default App;
