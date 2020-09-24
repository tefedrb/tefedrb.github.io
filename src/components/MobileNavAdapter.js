import React from 'react';
import styled from 'styled-components';
import NavigationPanel from './NavigationPanel';

const MobileNavAdapter = (props) => {
    const MobileFilePopUp = styled.div`
        display: none;
        @media (max-width: 950px){
            display: block;
            background-color: red;
            height: 50px;
            width: 25px;
        }
    `
    return (
        <>
            <NavigationPanel 
                changeFolder={props.changeFolder} 
                name={"navigation"}
            />
            <MobileFilePopUp name={"Adapter"} />
        </>
    )
}

export default MobileNavAdapter;