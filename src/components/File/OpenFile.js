import React, { useContext, useState, useRef, useEffect } from 'react';
import { Context } from '../../context';
import useViewportListener from '../hooks/useViewportListener';
// import { ProjLink } from '../FolderContents/ProjectCSS';

import { GraphicBody } from './FileCss';

const OpenFile = (props) => {
    const { isVerticalDisplay, verticalDisplay, updateViewport, updateBlueScreen, blueScreen, files, globalState } = useContext(Context);
    const [ loaded, confirmLoaded ] = useState(false);
    const [ contentLoaded, saveContent ] = useState("");

    let viewport = useViewportListener();

    useEffect(() => {
        
        if((viewport?.[0] > 948 && verticalDisplay) || (viewport?.[0] <= 948 && viewport?.[1] <= 500 && verticalDisplay)){
            isVerticalDisplay(false);
            updateViewport(viewport);
        }
        // Might actually want to use useLayouteffect here because of flash
        if(viewport?.[0] <= 948 && viewport?.[1] >= 500 && !verticalDisplay){
            
            isVerticalDisplay(true);
            updateViewport(viewport);
        }
        // here I can use logic to give a blue screen.
        if(viewport?.[0] <= 305 && !blueScreen){
            // activate blue screen
            updateViewport(viewport);
            updateBlueScreen(true);
        }
        if(contentLoaded !== props?.content?.props?.file?.name){
            saveContent(props?.content?.props?.file?.name);
        }
        if(!loaded){ 
            confirmLoaded(true);
        }
    }, [viewport, verticalDisplay, loaded, props?.content, props?.content?.props?.file?.name]);

    return (
        <GraphicBody
            name={"GraphicBody"} 
            size={props.size} 
        > 
            {files[globalState.fileLoaded]?.content || ""}
        </GraphicBody>
    )
}

export default OpenFile