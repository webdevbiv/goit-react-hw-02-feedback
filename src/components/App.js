import { Component } from 'react';

import './App.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onClick = e => {
    const { id } = e.target;
    console.log(e.target);
    console.log(id);
    this.setState(prev => ({
      [id]: prev[id] + 1,
    }))
  }

  totalClicks = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercent = () => {
    const { good } = this.state;
    const total = this.totalClicks();
    return total > 0 ? Math.floor((good / total) * 100) : 0;
  };



  render() {
    const state = this.state;
    // const keys = Object.keys(state);
    // const counters = Object.values(state);
    const total = this.totalClicks();
    const positive = this.positivePercent();

    return (
      <div className="App" >
        {/* <Feedback
          state={state}
          keys={keys}
          counters={counters}
          onClick={this.onClick}
        /> */}
        <FeedbackOptions
          options={state}
          onLeaveFeedback={this.onClick}
        />

        {/* <Stats
            total={total}
            positive={positive}
          /> */}
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={total}
          positivePercentage={positive}
        />
      </div>
    );
  }
}
export default App;
