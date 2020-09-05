import React from 'react';
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

const Home = () => {
    return (
        <HomeWrapper name={"home wrapper"}>
            <NavigationPanel name={"navigation"}/>
            <MainDisplay name={"main display"}/>
        </HomeWrapper>
    )
}

export default Home;