import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const useViewportHeight = (action) => {

    const getViewportHeight = () => {
        let e = window, a = "inner";
        if(!("innerHeight" in window)){
            a = "client";
            e = document.documentElement || document.body;
        }
        
        return e[a+"Height"];
    }

    // Depending on action, we either keep track of viewportheight or just use
    // this hook for it's event listener
    // const monitorHeight = action === "monitor" ? "" : getViewportHeight();

    const [viewportHeight, setViewportHeight] = useState(getViewportHeight());

    useEffect(() => {
        const updateViewportState = () => setViewportHeight(getViewportHeight());
        const throttled = throttle(updateViewportState, 100, {loading: true, trailing: true});
        window.addEventListener('resize', throttled);

        return () => {
            window.removeEventListener('resize', throttled);
        }
    }, []);

    return viewportHeight;
}

export default useViewportHeight;