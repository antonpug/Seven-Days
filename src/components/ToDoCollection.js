import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import { toggleToDo } from '../actions/index';

class ToDoCollection extends Component {
    constructor(props) {
        super(props);
    }

    onToDoClick(id) {
        this.props.store.dispatch(toggleToDo(id));
    }

    render() {
        return (
            <div className="todo-collection">
            {this.props.todos.map(todo => <ToDoItem id={todo.id} description={todo.description} onToDoClick={this.onToDoClick.bind(this)}/>)}
            </div>
        );
    }
}

export default ToDoCollection;
