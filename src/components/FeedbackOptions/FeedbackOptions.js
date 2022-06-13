import React, { Component } from 'react';
// import PropTypes from 'prop-types'

class FeedbackOptions extends Component {
    // onClick = e => {
    //     const state = this.props;
    //     const { id } = e.target;
    //     console.log(state);
    //     console.log(e.target);
    //     console.log(id);
    //     this.setState(prev => ({
    //         [id]: prev[id] + 1,
    //     }))
    // }

    render() {
        const { options, onLeaveFeedback } = this.props;
        console.log(Object.keys(options));
        const keys = Object.keys(options)
        return (
            <div >
                {keys.map(item => (
                    <button
                        key={item}
                        type="button"
                        onClick={onLeaveFeedback}
                        id={item}
                    >
                        {item}
                    </button>
                ))}
            </div>
        )
    }
}

// FeedbackOptions.propTypes = {
//     options: PropTypes.object.isRequired,
// }

export default FeedbackOptions