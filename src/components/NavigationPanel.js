import React, { useState, useEffect, useContext } from 'react';
import Folder from './Folder';
import styled from 'styled-components';
import { Context } from '../context';

const NavWrapper = styled.nav`
    pointer-events: auto;
    position: relative; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(79, 79, 79, 0.73);
    box-shadow: 1px -5px 27px -7px rgba(79,79,79,0.73);
    min-height: 95%;
    margin: 20px;
    width: 200px;
    overflow: hidden;
`

const ControlHeader = styled.section`
    position: absolute;
    top: 0;
    height: 25px;
    width: 100%;
    background: blue;
`
// The folder will hold it's own files, and will inform the NavigationPanel
// that it's open or closed.

const NavigationPanel = (props) => {
    const context = useContext(Context);
    const [ openFolder, changeOpenFolder ] = useState("About");
    const { files } = context;
    
    useEffect(() => {
        props.changeFolder(openFolder);
    }, [openFolder]);

    // We will pass files in here...
    return (
        <NavWrapper name={"navWrapper"}>
            <Folder 
                changeOpenFolder={changeOpenFolder} 
                openFolder={openFolder} 
                title={"Projects"}
                files={files["Projects"]}
            />
            <Folder 
                changeOpenFolder={changeOpenFolder} 
                openFolder={openFolder} 
                title={"About"}
                files={files["About"]}
            />
            <Folder 
                changeOpenFolder={changeOpenFolder} 
                openFolder={openFolder}
                title={"Contact"}
                files={files["Contact"]}
            />
        </NavWrapper>
    )
}

export default NavigationPanel;