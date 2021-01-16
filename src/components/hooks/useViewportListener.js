import { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import { getViewportXY } from '../helperFunctions/helper';

const useViewportListener = (cb) => {

    const [viewportXY, setViewportXY] = useState(cb ? cb(getViewportXY()) : getViewportXY());

    useEffect(() => {
        const updateViewportState = () => setViewportXY(getViewportXY());
        const throttled = throttle(updateViewportState, 100, {loading: true, trailing: true});
        window.addEventListener('resize', throttled);

        return () => {
            window.removeEventListener('resize', throttled);
        }
    }, []);
    
    return cb ? cb(viewportXY) : viewportXY;
}

export default useViewportListener;