import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Tree from './Tree';


const App = () => <Tree />;

// App.propTypes = {
//     message: PropTypes.string
// };

export default hot(module)(App);