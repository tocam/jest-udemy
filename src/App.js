import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import IntroButtonContainer from "./components/intro-button-counter/intro-button-counter"

const App =()=>{
    return (
        <React.Fragment>
            <Router>

                <nav>
                    <p>Select an App :</p>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/intro-counter-app">Intro-Counter_app</Link></li>
                        <li><Link to="/jotto-word-game">Jotto - Word Game</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path={'/intro-counter-app'}>
                        <IntroButtonContainer/>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    );
};

export default App;
