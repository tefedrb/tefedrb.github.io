import React, { useState, useContext } from 'react';
import MainDisplay from './MainDisplay';
import MobileNavAdapter from './MobileNavAdapter';
import styled, { keyframes } from 'styled-components';
import paper from '../imgs/paper.png';
import { Context } from '../context';
import { BrowserRouter as Router } from "react-router-dom";

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
    height: 100%;
    z-index: -1;
    grid-area: centerA;
    @media (max-width: 948px){
        height: 100%;
    }
    background-color: rgb(5, 5, 5);
`

const InnerHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: rgb(10, 10, 10);
    border-radius: 28px;

    &:after {
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

    @media (max-width: 948px){
        flex-direction: column-reverse;
    }

    @media (max-height: 825px){
        // height: 35px;
        // height: calc(100% - 80px);
        // height: calc(100% - 3.2em);
    }

    @media (max-width: 650px){
        // width: calc(100% - 45px); 
        // width: calc(100% - 3.2em); 
    }

    @media (max-width: 305px), (max-height: 400px){
        display: none;
    }
`

const BlueScreen = styled.div`
    display: none;
    background-color: blue;
    width: 100%;
    height: 100%;
    @media (max-width: 305px), (max-height: 400px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
// Info needs to go from navigation through MainDisplay

const Home = () => {
    const { blueScreen } = useContext(Context);
    const [ openFolder, changeFolder ] = useState("About");

    return (
        <HomeWrapper name={"home wrapper"}>
            <BlueScreen>
                <p>Error!</p>
                <p>001359: C56</p>
            </BlueScreen>
            <InnerHome name={"inner home"}>
                {/* <Router> */}
                    <MobileNavAdapter 
                        changeFolder={changeFolder}
                        name={"mobileNav"}
                    />
                    <MainDisplay
                        openFolder={openFolder}
                        name={"main display"}
                    />
                {/* </Router> */}
            </InnerHome>
        </HomeWrapper>
    )
}

export default Home;