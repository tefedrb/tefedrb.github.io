import React from 'react';
import styled from 'styled-components';
import File from './File';
import FileNav from './FileNav';

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 100%;
    width: 100%;
`
const MainDisplay = (props) => {
    return (
        <Screen name={"screen"}>
            <FileNav files={props?.allFiles} name={"fileNav"} />
            <File 
                color={"green"} 
                name={"file"}
                size={{width: "63%", height: "78%"}}
            />
        </Screen>
    )
}

export default MainDisplay;