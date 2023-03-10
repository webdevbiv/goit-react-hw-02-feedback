import React from 'react'
// import PropTypes from 'prop-types'

function Section({ children, title }) {
    return (
        <>
            <div>{title}</div>
            <div>{children}</div>
        </>
    )
}

// Section.propTypes = {}

export default Section
