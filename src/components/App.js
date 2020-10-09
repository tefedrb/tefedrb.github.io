import React from 'react';
import { hot } from 'react-hot-loader';
import Home from './Home';
import { Provider } from '../context';
import Monitor from './Monitor/Monitor';

const App = () => (
    <Provider>
        <Monitor />
        <Home />  
    </Provider>
);

export default hot(module)(App);