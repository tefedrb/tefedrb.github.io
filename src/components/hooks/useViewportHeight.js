import { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import { getViewportXY } from '../helperFunctions/helperFunctions';

const useViewportHeight = (cb) => {

    const [viewportHeight, setViewportHeight] = useState(cb ? cb(getViewportXY()) : getViewportXY());

    useEffect(() => {
        console.log('using');
        const updateViewportState = () => setViewportHeight(getViewportXY());

        console.log(cb ? cb(getViewportXY()) : "nope", "VIEWPORT hurr")

        const throttled = throttle(updateViewportState, 100, {loading: true, trailing: true});
        window.addEventListener('resize', throttled);

        return () => {
            window.removeEventListener('resize', throttled);
        }
    }, []);

    
    return cb ? cb(viewportHeight) : viewportHeight;
}

export default useViewportHeight;