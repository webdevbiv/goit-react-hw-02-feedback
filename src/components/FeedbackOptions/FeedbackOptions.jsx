import React from 'react'
import PropTypes from 'prop-types'

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <>
            {Object.keys(options).map((item) => (
                <button
                    key={item}
                    id={item}
                    onClick={onLeaveFeedback}
                >{item}</button>
            ))}
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions
