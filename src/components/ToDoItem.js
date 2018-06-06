import React, { Component } from 'react';
import CompleteControl from './CompleteControl';
import './css/todo-item.css';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="todo-item" style={{
                textDecoration: this.props.done ? 'line-through' : 'none',
                backgroundColor: this.props.done ? '#dddfd4' : '#173e43'
              }}><CompleteControl id={this.props.id} onToDoClick={this.props.onToDoClick}/><span className="todo-description">{this.props.description}</span></div>
        );
    }
}

export default ToDoItem;