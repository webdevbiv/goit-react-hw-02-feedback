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

    const state = this.state;
    console.log(Object.keys(state));
    // const { state } = this.state
    // console.log(state);
    // console.log(this.state);
    return (
      <div className="App" >
        <header className="App-header">
          <Feedback
            state={state}
          />
        </header>
      </div>
    );
  }
}
export default App;
