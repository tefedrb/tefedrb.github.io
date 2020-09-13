import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const useElementXY = (element) => {

    const getXY = () => {
        const xPos = element.offsetLeft
        const yPos = element.offsetTop;
        return [xPos, yPos];
    }

    const [xyPos, setXYPos] = useState(getXY());

    useEffect(() => {
        const updateXYState = () => setXYPos(getXY());
        const throttled = throttle(updateXYState, 100, {loading: true, trailing: true});
        window.addEventListener('resize', throttled);

        return () => {
            window.removeEventListener('resize', throttled);
        }
    }, []);

    return xyPos;
}

export default useElementXY;