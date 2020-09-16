import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context';
import { getViewportXY } from '../helperFunctions/helperFunctions';
import useViewportHeight from '../hooks/useViewportHeight';

const PathWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
`

const Lines = styled.svg`
    height: 100vh;
    width: 100vw;
    position: absolute;
`

// I can get the height and width of the window to adjust the size of the svg
// I also need to factor in max-height and max-width stopping points that correspond with
// the elasticity of the the folders and files.

// need num of files in folder
// need to get folder placement ONCE

// USE NODE REF TO GET REFERENCE TO EACH ELEMENT AND STORE COORDINATES IN CONTEXT

const PathToFile = (props) => {
    const context = useContext(Context);
    const { state } = context;
    const [ sizes, updateSizes ] = useState({});

   useEffect(() => {
        if(!sizes.loaded && state?.folderY){
            updateSizes({
                originalScrnSize: getViewportXY(),
                loaded: true,
                folderY: state?.folderY,
                xValue: state?.xValue
            });
        }
   }, [state]);
   
    // Add event listners here and adjust...
    const filePath = () => (
        sizes.folderY ? <svg style={{height:"100vh", width:"100vw", position: "absolute"}}>
            <path d={`M 20 ${sizes.folderY + 50} H 35 V 90 H ${sizes.xValue + 10} v -5`} fill="transparent" stroke="white"/>
        </svg> : ""
    )

    const newStuff = { height:"100vh", width:"100vw", position: "absolute" };

    const displayPath = (xyArr) => {
        
        const x = sizes?.xValue - (sizes?.originalScrnSize?.[0] - xyArr[0]) + 50;
        const y = sizes?.folderY - (sizes?.originalScrnSize?.[1] - xyArr[1]) + 10;
        
        const dString = `M 20 ${y} H 35 V 90 H ${x} v -5`;

        const linePath = ( sizes?.xValue ? 
            <Lines>
                <path d={dString} fill="transparent" stroke="white" />
            </Lines> : <p></p>
        )
        return linePath
    }

    const buildLine = () => {
        
    }

    const square = (
        <svg style={{height:"100vh", width:"100vw", position: "absolute"}}>
            <path d="M 10 10 H 200 V 200 H 10 Z" fill="transparent" stroke="blue"/>
            <path d="M 30 20 H 210 V 190 H 30 Z" fill="transparent" stroke="red"/>
        </svg>
    )

    return (
        <PathWrap name={"PathWrap"}>
            {useViewportHeight(displayPath)}
        </PathWrap>
    )
}

export default PathToFile;