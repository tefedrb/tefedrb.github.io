import React from 'react';
import styled from 'styled-components';
import File from './File';
import FileNav from './FileNav';
import PathToFile from './svgs/PathToFile';

const Screen = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    height: 100%;
    width: 100%;
`

const MainDisplay = (props) => {
    console.log(props, "props!")
    return (
        <Screen name={"screen"}>
            <File 
                color={"green"} 
                name={"file"}
                size={{width: "63%", height: "100%"}}
            /> 
        </Screen>
    )
}

export default MainDisplay;