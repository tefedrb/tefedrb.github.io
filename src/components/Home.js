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
`
// Info needs to go from navigation through MainDisplay
// into files component
const Home = () => {
    const [ openFolder, changeFolder ] = useState("about");

    const allFiles = {
        projects: ["equipped.js","bookshop-crutch.js", "movie-db.js"],
        about: ["about.java"],
        contact: ["contact.js"]
    }

    return (
        <HomeWrapper name={"home wrapper"}>
            <NavigationPanel 
                changeFolder={changeFolder} 
                name={"navigation"}
            />
            <MainDisplay
                openFolder={openFolder} 
                allFiles={allFiles[openFolder]}
                name={"main display"}
            />
        </HomeWrapper>
    )
}

export default Home;