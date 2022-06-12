import React, { Component } from 'react';
import s from './Feedback.module.css';

export default class Feedback extends Component {
    render() {
        const state = this.props.state;
        const id = Object.keys(state)
        console.log(this.props);
        return (
            <div>
                <div>Please leave feedback</div>
                <div>
                    <button id={id[0]}>Good</button>
                    <button id={id[1]}>Neutral</button>
                    <button id={id[2]}>Bad</button>
                </div>
                <div>Statistics</div>
                <ul>
                    <li id={id[0]}>Good: {state.good}</li>
                    <li id={id[1]}>Neutral: {state.neutral}</li>
                    <li id={id[2]}>Bad: {state.bad}</li>
                </ul>
            </div>
        )
    }
}