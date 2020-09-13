import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PathWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100vh;
    width: 100vw;
`

// I can get the height and width of the window to adjust the size of the svg
// I also need to factor in max-height and max-width stopping points that correspond with
// the elasticity of the the folders and files.

// need num of files in folder
// need to get folder placement ONCE

const PathToFile = (props) => {

    const filePath = (
        <svg style={{height:"100vh", width:"100vw", position: "absolute"}}>
            <path d="M 30 20 H 210 V 190 H 30 Z" fill="transparent" stroke="red"/>
        </svg>
    )
    const square = (
        <svg style={{height:"100vh", width:"100vw", position: "absolute"}}>
            <path d="M 10 10 H 200 V 200 H 10 Z" fill="transparent" stroke="blue"/>
            <path d="M 30 20 H 210 V 190 H 30 Z" fill="transparent" stroke="red"/>
        </svg> 
    )

    return (
        <PathWrap name={"PathWrap"}>
            {square}
        </PathWrap>
    )
}

export default PathToFile;