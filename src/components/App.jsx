// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Section from './Section/Section'
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'

export default class App extends Component {
  // static propTypes = { second: third }
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (e) => {
    // console.log(e);
    // console.log(e.target.id);
    this.setState((prev) => ({
      [e.target.id]: prev.value + 1
    }))
  }

  countTotalFeedback = () => {
    let total = 0;
    Object.values(this.state).forEach(item => total += item)
    return total
  }

  render() {
    const { good, neutral, bad } = this.state
    return (
      <>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleClick}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
        // positivePercentage={ } 
        />
        <Section />
      </>
    )
  }
}
