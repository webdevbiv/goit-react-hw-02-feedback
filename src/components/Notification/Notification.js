import React, { Component } from 'react';

class Notification extends Component {
    render() {
        const { message } = this.props

        console.log(message);
        return (
            <div>{message}</div>
        )
    }
}

export default Notification