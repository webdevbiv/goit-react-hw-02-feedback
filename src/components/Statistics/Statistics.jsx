import React from 'react'
// import PropTypes from 'prop-types'

function Statistics({ good, neutral, bad, total }) {
    // console.log("🚀 ~ bad:", bad)
    // console.log("🚀 ~ neutral:", neutral)
    // console.log("🚀 ~ good:", good)

    return (
        <>
            <div>Statistics</div>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
            </ul>
        </>
    )
}

// Statistics.propTypes = {}

export default Statistics
