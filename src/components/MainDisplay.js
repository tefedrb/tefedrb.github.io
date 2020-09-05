import React from 'react';
import styled from 'styled-components';
import File from './File';
import Folder from './Folder';

const Screen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 100%;
    width: 100%;
`

const MainDisplay = () => {
    return (
        <Screen name={"screen"}>
            <File name={"file"} />
        </Screen>
    )
}

export default MainDisplay;