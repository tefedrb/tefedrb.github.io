import React, { useContext } from 'react';
import styled from 'styled-components';
import OpenFile from './File/OpenFile';
import { Context } from '../context';

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    height: 100%;
    width: 100%;
    overflow: auto;
`

const MainDisplay = () => {
    const { fileOpen } = useContext(Context);

    return (
        <Screen name={"screen"}>
            <OpenFile
                color={"green"} 
                name={"file"}
                size={{width: "63%", height: "100%"}}
            />
        </Screen>
    )
}

export default MainDisplay;