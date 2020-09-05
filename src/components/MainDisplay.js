import React from 'react';
import styled from 'styled-components';
import File from './File';
import Folder from './Folder';
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
            <FileNav name={"fileNav"}/>
            <File color={"green"} name={"file"} />
        </Screen>
    )
}

export default MainDisplay;