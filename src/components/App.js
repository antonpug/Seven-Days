import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './css/App.css';
import ToDoCollection from './ToDoCollection';
import { connect } from 'react-redux';
import { toggleToDo } from '../actions/todoActions'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <ToDoCollection todos={this.props.todos} onToDoClick={this.props.onToDoClick}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToDoClick: (id) => {
      dispatch(toggleToDo(id));
    }
  }
}

const VisibleApp = connect(mapStateToProps, mapDispatchToProps) (App);
export default VisibleApp;