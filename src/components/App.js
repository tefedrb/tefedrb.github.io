import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Home from './Home';
import { Provider } from '../context';
import Monitor from './Monitor';

const App = () => (
    <Provider>
        <Monitor />
        <Home />
    </Provider>
);

export default hot(module)(App);