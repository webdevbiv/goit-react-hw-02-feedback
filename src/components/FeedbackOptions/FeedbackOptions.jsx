import React from 'react'
// import PropTypes from 'prop-types'

function FeedbackOptions({ options, onLeaveFeedback }) {
    // console.log("🚀 ~ options:", options, typeof options)
    return (
        <>
            <div>Please Leave Feedback</div>
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

// FeedbackOptions.propTypes = { }

export default FeedbackOptions
