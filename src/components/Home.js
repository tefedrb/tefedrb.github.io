import React, { useState } from 'react';
import MainDisplay from './MainDisplay';
import NavigationPanel from './NavigationPanel';
import styled from 'styled-components';
import Project from './Project';

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
    const [ openFolder, changeFolder ] = useState("About");
    // File information
    const [ openFile, changeFile ] = useState(null);
    // Home will know which file is open - will let MainDisplay know

    return (
        <HomeWrapper name={"home wrapper"}>
            <NavigationPanel 
                changeFolder={changeFolder} 
                name={"navigation"}
            />
            <MainDisplay
                openFolder={openFolder}
                openFile={openFile}
                name={"main display"}
                content={<Project></Project>}
            />
        </HomeWrapper>
    )
}

export default Home;