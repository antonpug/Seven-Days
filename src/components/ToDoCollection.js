import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoCollection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <div className="todo-collection">
        {this.props.todos.map(todo => <ToDoItem description={todo} />)}
        </div>
    );
    }
}

export default ToDoCollection;
