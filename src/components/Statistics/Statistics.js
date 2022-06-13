import React, { Component } from 'react';
// import PropTypes from 'prop-types'

class Stats extends Component {

    render() {
        const { total, positivePercentage, good, bad, neutral } = this.props
        return (
            <div>
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive feedback: {positivePercentage}%</li>
                </ul>
            </div>
        )
    }
}


export default Stats