import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Feedback extends Component {
    countClick = keys => {
        this.setState(prev => ({ [keys]: prev[keys] + 1 }));
    }

    render() {
        const { good, neutral, bad } = this.props.state;
        const keys = this.props.keys;

        console.log(this);
        console.log(this.props);
        // console.log(state);
        // console.log(good);
        // console.log(neutral);
        // console.log(bad);

        return (
            <div>
                <div>Please leave feedback</div>
                <div>
                    {keys.map(item => (
                        <button
                            key={item}
                            type="button"
                            onClick={this.countClick}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div>Statistics</div>
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                </ul>
            </div>
        )
    }
}

Feedback.propTypes = {
    state: PropTypes.object.isRequired,
}

export default Feedback