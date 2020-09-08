import React, { useState, useEffect } from 'react';
import Folder from './Folder';
import styled from 'styled-components';

const NavWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(79, 79, 79, 0.73);
    height: 100%;
    width: 325px;
`
const NavigationPanel = (props) => {
    const [openFolder, changeOpenFolder] = useState("About");
    
    useEffect(() => {
        props.changeFolder(openFolder);
    }, [openFolder])

    return (
        <NavWrapper>
            <Folder 
                changeOpenFolder={changeOpenFolder} 
                openFolder={openFolder} 
                title={"Projects"}
            />
            <Folder 
                changeOpenFolder={changeOpenFolder} 
                openFolder={openFolder} 
                title={"About"} 
            />
            <Folder 
                changeOpenFolder={changeOpenFolder} 
                openFolder={openFolder} 
                title={"Contact"} 
            />
        </NavWrapper>
    )
}

export default NavigationPanel;