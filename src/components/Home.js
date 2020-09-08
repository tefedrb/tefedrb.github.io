import React, { useState } from 'react';
import MainDisplay from './MainDisplay';
import NavigationPanel from './NavigationPanel';
import styled from 'styled-components';

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    // align-items: center;
    height: 100vh;
    width: 100vw;
    margin: 0;
    background-color: black;
    overflow: hidden;
`
// Info needs to go from navigation through MainDisplay
// into files component
const Home = () => {
    const [ openFolder, changeFolder ] = useState("About");

    const allFiles = {
        "Projects": ["equipped.js","bookshop-crutch.js", "movie-db.js"],
        "About": ["about.java"],
        "Contact": ["contact.js"]
    }

    return (
        <HomeWrapper name={"home wrapper"}>
            <NavigationPanel 
                changeFolder={changeFolder} 
                name={"navigation"}
            />
            <MainDisplay
                openFolder={openFolder} 
                fileNames={allFiles[openFolder]}
                name={"main display"}
            />
        </HomeWrapper>
    )
}

export default Home;