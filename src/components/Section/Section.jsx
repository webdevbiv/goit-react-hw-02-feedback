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
    childrens: PropTypes.element,
    title: PropTypes.string.isRequired
}

export default Section
