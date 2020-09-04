import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Home from './Home';

const App = () => <Home />;

// App.propTypes = {
//     message: PropTypes.string
// };

export default hot(module)(App);