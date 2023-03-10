import React from 'react'
import PropTypes from 'prop-types'

function Section({ children, title }) {
    return (
        <>
            <div>{title}</div>
            <div>{children}</div>
        </>
    )
}

Section.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired
}

export default Section
