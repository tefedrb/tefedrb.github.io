import React, { useState, useContext } from 'react';
import MainDisplay from './MainDisplay';
import NavigationPanel from './NavigationPanel';
import styled, { keyframes } from 'styled-components';
import { Context } from '../context';
import paper from '../imgs/paper.png';

const grain = keyframes` 
    0%, 100% { transform:translate(0, 0) }
    10% { transform:translate(-5%, -10%) }
    20% { transform:translate(-15%, 5%) }
    30% { transform:translate(7%, -25%) }
    40% { transform:translate(-5%, 25%) }
    50% { transform:translate(-15%, 10%) }
    60% { transform:translate(15%, 0%) }
    70% { transform:translate(0%, 15%) }
    80% { transform:translate(3%, 25%) }
    90% { transform:translate(-10%, 10%) }
`

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const InnerHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 118px);
    width: calc(100% - 90px);
    margin: 0;
    background-color: black;

    &:after {
        pointer-events: none;
        top: -100%;
        left: -50%;
        position: fixed;
        opacity: .2;
        content: "";
        height: 300%;
        width: 300%;
        background-image: url(${paper});
        animation: ${grain} 8s steps(10) infinite;
    }

    @media (max-width: 950px){
        flex-direction: column;
    }
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
            <InnerHome name={"inner home"}>
                <NavigationPanel 
                    changeFolder={changeFolder} 
                    name={"navigation"}
                />
                <MainDisplay
                    openFolder={openFolder}
                    name={"main display"}
                />
            </InnerHome>
        </HomeWrapper>
    )
}

export default Home;