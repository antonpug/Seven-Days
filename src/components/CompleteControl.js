import React, { Component } from 'react';
import './css/complete-control.css';

class CompleteControl extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="complete-control">
                <div className="checkbox">
                    <input type="checkbox" id={this.props.id} onClick={event => {
                        this.props.onToDoClick(this.props.id);
                    }}/>
                    <label for={this.props.id}/>
                </div>
            </div>
        );
    }
}

export default CompleteControl;