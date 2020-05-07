import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FloatingLabel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            lableValue: props
        };
    }
    render () {
        debugger;
        const { labelValue } = this.state.lableValue;

        return (
            <Link
                to={{
                    pathname: `/displayCard`, search: `?id=${labelValue.Job_Id}`
                }}
                // target="_blank"

            >
                {labelValue.PostName}
                <br />
            </Link>
        );
    }
}

export default FloatingLabel;
