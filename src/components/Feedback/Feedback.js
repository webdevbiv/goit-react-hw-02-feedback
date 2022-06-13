import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Feedback extends Component {
    countClick = () => {
        console.log();

    }

    render() {
        const { state, keys } = this.props;

        // console.log(state);
        // console.log(this.props);
        // console.log(keys);
        // console.log(good);
        // console.log(neutral);
        // console.log(bad);

        return (
            <div >
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
                    <li>Good: {state.good}</li>
                    <li>Neutral: {state.neutral}</li>
                    <li>Bad: {state.bad}</li>
                </ul>
            </ div >
        )
    }
}

Feedback.propTypes = {
    state: PropTypes.object.isRequired,
}

export default Feedback