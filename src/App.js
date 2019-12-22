import React, {Component} from 'react';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            counter : 0
        }
    }
  render(){
      return (
          <div data-test="component-app" >
              <h1 data-test="counter-display">The Counter is : </h1>
              <h1>App</h1>
              <button type={'button'} data-test="inc-button">Increment</button>
          </div>
      );
  }
}

export default App;
