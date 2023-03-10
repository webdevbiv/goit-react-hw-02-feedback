import React from 'react'
// import PropTypes from 'prop-types'

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
            {total > 0 &&
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive Percentage: {positivePercentage}%</li>
                </ul>
            }
        </>
    )
}

// Statistics.propTypes = {}

export default Statistics
