import React, {Component} from 'react';

class IntroButtonCounter extends Component{
    constructor(props){
        super(props);
        this.state={
            counter : 0
        }
    }
    render(){
        const {counter} =this.state;
        return (
            <div data-test="component-intro-button-counter" >
                <h1 data-test="counter-display">The Counter is : {this.state.counter}</h1>
                <h1>App</h1>

                <button type={'button'}
                        data-test="inc-button"
                        onClick={() => this.setState({counter : counter + 1})}
                >
                    Increment
                </button>
            </div>
        );
    }
}

export default IntroButtonCounter;