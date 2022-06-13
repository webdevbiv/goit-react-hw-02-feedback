import React, { Component } from 'react';
// import s from './Section.module.css';

class Section extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <section key={title}>
                <h2 >{title}</h2>
                {children}
            </section>
        )
    }
}

export default Section;