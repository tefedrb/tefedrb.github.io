import React from 'react';
import styled from 'styled-components';
import OpenFile from './File/OpenFile';

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 100%;
    width: 100%;
    overflow: auto;
    pointer-events: auto;

    @media (max-width: 400px) and (max-height: 500px), (min-height: 650px){
        height: 80%;
    }
`

const MainDisplay = () => {
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