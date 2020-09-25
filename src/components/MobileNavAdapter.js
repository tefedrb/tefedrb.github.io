import React, { useContext } from 'react';
import styled from 'styled-components';
import NavigationPanel from './NavigationPanel';
import { Context } from '../context';

const MobileFilePopUp = styled.div`
    display: none;
    @media (max-width: 950px){
        display: block;
        background-color: red;
        height: 50px;
        width: 25px;
    }
`

const MobileNavAdapter = (props) => {
    const { globalState } = useContext(Context);
    const { folder } = globalState;

    const getFolderLoc = (e) => {
        // find element with 
        const parentElement = e.target.parentElement;
        if(parentElement.id === "innerWrap"){
            const x = parentElement.offsetLeft;
            const y = parentElement.offsetTop;
            return [x, y];
        }
    }
    // When clicking on folder - get element 
    // and see if you can get the height / width
    return (
        <>
            <NavigationPanel 
                getFolderLoc={getFolderLoc}
                changeFolder={props.changeFolder} 
                name={"navigation"}
            />
            <MobileFilePopUp name={"Adapter"} />
        </>
    )
}

export default MobileNavAdapter;