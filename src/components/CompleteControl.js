import React, { Component } from 'react';
import './css/complete-control.css';

class CompleteControl extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="complete-control">
                <input type="checkbox"/>
                <label />
            </div>
        );
    }
}

export default CompleteControl;