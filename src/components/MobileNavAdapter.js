import React, { useContext } from 'react';
import styled from 'styled-components';
import NavigationPanel from './NavigationPanel';
import { Context } from '../context';

const MobileFilePopUp = styled.div`
    display: none;
    @media (max-width: 950px){
        display: flex;
        background-color: rgba(79,79,79,0.73);
        height: 25px;
        width: auto;
        padding: .2em;
        align-items: center;
        justify-content: space-around;
        color: white;
    }
`

const MobileNavAdapter = (props) => {
    const { globalState } = useContext(Context);
    const { folderLoc, filesDisplayed } = globalState;

    
    // When clicking on folder - get element 
    // and see if you can get the height / width
    const files = () => {
        return filesDisplayed.map((file, key) => (
            <p style={{margin: "5px"}} key={key}>
                {file.name}
            </p>
        ))
    }

    return (
        <>
            <NavigationPanel 
                changeFolder={props.changeFolder} 
                name={"navigation"}
            />
            <MobileFilePopUp name={"Adapter"}> 
                {files()}
            </MobileFilePopUp>
        </>
    )
}

export default MobileNavAdapter;