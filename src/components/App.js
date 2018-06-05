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
        <ToDoCollection todos={this.props.todos}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToDoClick: (event, index) => {
      dispatch(toggleToDo(index));
    }
  }
}

const VisibleApp = connect(mapStateToProps, mapDispatchToProps) (App);
export default VisibleApp;