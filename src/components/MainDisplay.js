import React, { useContext } from 'react';
import styled from 'styled-components';
import MiniFile from './File/MiniFile';
import OpenFile from './File/OpenFile';
import { Context } from '../context';
import Project from './Projects/Project';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
    const { fileOpen, files } = useContext(Context);

    const displayProject = () => {
        return <Project file={fileOpen}></Project>
    }

    return (
        <Screen name={"screen"}>
            <OpenFile
                color={"green"} 
                name={"file"}
                size={{width: "63%", height: "100%"}}
                content={displayProject()}
                source={fileOpen?.source}
                live={fileOpen?.live}
            />
        </Screen>
    )
}

export default MainDisplay;