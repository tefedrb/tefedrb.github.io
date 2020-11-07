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

    // MOBILE VIEW ALTERATION -> Adjusted margin: 20px to margin-left: 20px;
    margin-left: 10px;
    margin-right: 10px;
    min-width: 150px;
    overflow: hidden;

    @media (max-width: 1245px){
        min-width: 135px;
    }

    @media (max-height: 700px){
        min-width: 110px;
    }

    // MOBILE VIEW ALTERATION -> Adding "and" and value to try and remedy mobile
    // horizontal view -> testing "and min-height", removing (max-height: 745px)

    @media (max-width: 948px) and (min-height: 500px){
        flex-direction: row;
        min-width: 95%;
        min-height: 10.5%;
        margin-top: 0px;
        margin-bottom: 10px;
        background-color: red;
    }

    @media(max-width: 650px){
        // min-height: 45px;
    }
`  
// The folder will hold it's own files, and will inform the NavigationPanel
// that it's open or closed.

const NavigationPanel = (props) => {
    const [ openFolder, changeOpenFolder ] = useState("About");
    const { folder, filesFromFolder } = useContext(Context);
    // We need to tell our folder components not to render dropdowns
    // if our global verticalDisplay is set to true

    useEffect(() => {
        props.changeFolder(openFolder);
        filesFromFolder(folder[openFolder]);
    }, [openFolder]);

    // create a mobile view
    return (
        <NavWrapper name={"navWrapper"}> 
            <Folder
                changeOpenFolder={changeOpenFolder} 
                openFolder={openFolder} 
                title={"Projects"}
                files={folder["Projects"]}
            />
            <Folder      
                changeOpenFolder={changeOpenFolder} 
                openFolder={openFolder} 
                title={"About"}
                files={folder["About"]}
            />
            <Folder 
                changeOpenFolder={changeOpenFolder} 
                openFolder={openFolder}
                title={"Contact"}
                files={folder["Contact"]}
            />
        </NavWrapper>
    )
}

export default NavigationPanel;