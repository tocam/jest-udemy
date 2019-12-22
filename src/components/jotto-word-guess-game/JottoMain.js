import React, {Component} from 'react';
import Congrats from './Congrats'

class JottoMain extends Component{
    constructor(props){
        super(props);
        this.state={
            success : false
        }
    }

    render(){
        const {success} = this.state;
        return(
            <div className={'jotto-main-container'}>
                <h1>Welcome to Jotto!</h1>
               <Congrats success={success}/>
            </div>
      )
  }
}

export default JottoMain