import React, { useState, useContext, useEffect } from 'react';
import MainDisplay from './MainDisplay';
import NavigationPanel from './NavigationPanel';
import styled from 'styled-components';
import Project from './Project';
import { Context } from '../context';

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    margin: 0;
    background-color: black;
`
const Body = styled.div` 
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    margin: 0 auto;
`

// Info needs to go from navigation through MainDisplay

const Home = () => {
    const context = useContext(Context);
    const { files, projects, fileOpen} = context;
    const [ openFolder, changeFolder ] = useState("About");
    // File information
    // Home will know which file is open - will let MainDisplay know

    return (
        <HomeWrapper name={"home wrapper"}>
            <NavigationPanel 
                changeFolder={changeFolder} 
                name={"navigation"}
            />
            <MainDisplay
                openFolder={openFolder}
                name={"main display"}
            />
        </HomeWrapper>
    )
}

export default Home;