import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Home from './Home';
import { Provider } from '../context';

const App = () => (
    <Provider>
        <Home />
    </Provider>
);

// App.propTypes = {
//     message: PropTypes.string
// };

export default hot(module)(App);