import React, { Component } from 'react';
import CompleteControl from './CompleteControl';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="todo-item"><span>{this.props.description}</span><CompleteControl /></div>
        );
    }
}

export default ToDoItem;