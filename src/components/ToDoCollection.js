import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoCollection extends Component {
    constructor(props) {
        super(props);
    }

    onToDoClick(id) {
        //this.setState(this.prop)
        alert(id);
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
