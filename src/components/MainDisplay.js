import React, { useContext } from 'react';
import styled from 'styled-components';
import File from './File';
import { Context } from '../context';
import Project from './Project';
import PathToFile from './svgs/PathToFile';

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    height: 100%;
    width: 100%;
`

const MainDisplay = (props) => {
    const context = useContext(Context);
    const { fileOpen } = context;

    const displayProject = () => {
        return <Project fileName={fileOpen}></Project>
    }

    return (
        <Screen name={"screen"}>
            <File 
                color={"green"} 
                name={"file"}
                size={{width: "63%", height: "100%"}}
                content={displayProject()}
            />
        </Screen>
    )
}

export default MainDisplay;