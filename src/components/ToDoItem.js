import React, { Component } from 'react';
import CompleteControl from './CompleteControl';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="todo-item" style={{
                textDecoration: this.props.done ? 'line-through' : 'none'
              }}><span>{this.props.description}</span><CompleteControl id={this.props.id} onToDoClick={this.props.onToDoClick}/></div>
        );
    }
}

export default ToDoItem;