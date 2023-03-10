import React from 'react'
// import PropTypes from 'prop-types'

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    // console.log("🚀 ~ bad:", bad)
    // console.log("🚀 ~ neutral:", neutral)
    // console.log("🚀 ~ good:", good)
    console.log(total);
    return (
        <>
            {total = 0 ?
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive Percentage: {positivePercentage}%</li>
                </ul>
                : null
            }

        </>
    )
}

// Statistics.propTypes = {}

export default Statistics
