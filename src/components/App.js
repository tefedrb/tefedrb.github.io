import React from 'react';
// import { hot } from 'react-hot-loader';
import Home from './Home';
import { Provider } from '../context';
import Monitor from './Monitor/Monitor';
// import "98.css";

const App = () => {
    return (
        <Provider>
            <Monitor>
                <Home />
            </Monitor> 
        </Provider>
    )
};
// hot(module)(App)
export default App;