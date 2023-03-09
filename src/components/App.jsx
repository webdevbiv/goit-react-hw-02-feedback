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
    const key = e.target.id
    this.setState((prev) => ({
      [key]: prev[key] + 1
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    let total = good + neutral + bad
    return total
  }

  countPositiveFeedback = () => {
    let total = this.countTotalFeedback()
    const { good } = this.state
    return total > 0 ? Math.round(good / total * 100) : 0
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
          positivePercentage={this.countPositiveFeedback()}
        />
        <Section />
      </>
    )
  }
}