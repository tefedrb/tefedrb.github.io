import React, { useEffect } from 'react';
// import { hot } from 'react-hot-loader';
import Home from './Home';
import { Provider } from '../context';
import Monitor from './Monitor/Monitor';

const App = () => {
    
    useEffect(() => {
        console.log("11.11.20 v5");
        // Hack for mobile display provided by kazinov on stack overflow
        const mobileHack = () => {
            document.documentElement.style.height = `initial`;
            setTimeout(() => {
                document.documentElement.style.height = `100%`;
                setTimeout(() => {
                    // this line prevents the content
                    // from hiding behind the address bar
                    window.scrollTo(0, 1);
                }, 500);
            }, 500);
        }
        window.addEventListener('orientationchange', mobileHack);
        () => window.removeEventListener('orientationchange', mobileHack);
    }, []);

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