import React from 'react';
import { hot } from 'react-hot-loader';
import Home from './Home';
import { Provider } from '../context';
import Monitor from './Monitor/Monitor';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => (
    <Router basename={process.env.PUBLIC_URL}>
        {console.log("testing 4")}
        {console.log(process.env.PUBLIC_URL, " <-- public url")}
        <Switch>
            
            <Route path="/test">
                <div>Testing</div>
            </Route>
            <Route path="/">
                <Provider>
                    <Monitor>
                        <Home />
                    </Monitor> 
                </Provider>
            </Route>
        </Switch>
    </Router>
);

export default hot(module)(App);