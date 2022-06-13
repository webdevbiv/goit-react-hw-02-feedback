import { Component } from 'react';
import Feedback from './components/Feedback/Feedback';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  render() {
    const { good, neutral, bad } = this.state;
    const state = this.state;
    const rateSelection = Object.keys(state)
    // console.log(rateSelection);

    return (
      <div className="App" >
        <header className="App-header">
          <Feedback
            state={state}
            keys={rateSelection}
          />
        </header>
      </div>
    );
  }
}
export default App;
