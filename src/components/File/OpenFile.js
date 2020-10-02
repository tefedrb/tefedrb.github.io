import React, { useContext, useState, useRef, useEffect } from 'react';
import { Context } from '../../context';
import useViewportListener from '../hooks/useViewportListener';

import { GraphicWrapper, GraphicHeadWrapper, GraphicHead, GraphicFold, GraphicBody }
    from './FileCss';

const OpenFile = (props) => {
    const { openFile, updateDisplay, verticalDisplay, updateViewport } = useContext(Context);
    const [ loaded, confirmLoaded ] = useState(false);
    const [ contentLoaded, saveContent ] = useState("");
       // Might want to consider inserting an if/else statement to avoid running
    // useEffect more than needed.
    let viewport = useViewportListener();
    const headerEl = useRef("75");

    const getDynamicFoldHeight = () => {
        return headerEl.current.offsetHeight;
    }

    useEffect(() => {
        // If viewport width is less than 950
        // We want to check to see if the file name changed - then re-render
        // we want to re-render because our fold gets out of place otherwise
        
        if(viewport?.[0] > 950 && verticalDisplay){
            updateDisplay(false);
        }
        // Might actually want to use useLayouteffect here because of flash
        if(viewport?.[0] <= 950 && !verticalDisplay){
            updateDisplay(true);
            updateViewport(viewport);
        }
        if(contentLoaded !== props?.content?.props?.file?.name){
            saveContent(props?.content?.props?.file?.name);
        }
        if(!loaded){ 
            confirmLoaded(true);
        }
    }, [viewport, verticalDisplay, loaded, props.content, props?.content?.props?.file?.name]);

    return (
        <GraphicWrapper 
            name={"file GraphicWrapper"} 
            size={props.size} 
        >
            <GraphicHeadWrapper 
                ref={headerEl} 
                name={"GraphicHeadWrapper"}
                foldSize={props.foldSize} 
            >
                <GraphicHead 
                    name={"head"}
                >
                    {props.source}
                    {props.live}
                </GraphicHead>
                <GraphicFold 
                    name={"flap"}
                    foldSize={props.foldSize}
                    dynamicHeight={getDynamicFoldHeight()}
                />
            </GraphicHeadWrapper>
            <GraphicBody
                name={"GraphicBody"} 
                size={props.size} 
            > 
                {props.content}
            </GraphicBody>
        </GraphicWrapper>
    )
}

export default OpenFile