import React, { useContext } from 'react';
import styled from 'styled-components';
import NavigationPanel from './NavigationPanel';
import MiniFile from './File/MiniFile';
import { Context } from '../context';
import { FileName, FileWrapper } from './FileDropDown';

const MobileFilePopUp = styled.div`
    display: none;
    @media (max-width: 950px){
        display: flex;
        background-color: rgba(79,79,79,0.73);
        height: auto;
        width: auto;
        padding: .2em;
        align-items: center;
        justify-content: space-around;
        color: white;
        // transform: translateY(-6px);
    }
`
const MobileNavAdapter = (props) => {
    const { globalState } = useContext(Context);
    const { filesDisplayed } = globalState;
    // When clicking on folder - get element 
    // and see if you can get the height / width
    const files = () => {
        return filesDisplayed.map((file, key) => (
           <FileWrapper name={"FileWrap"} key={key}>
                <MiniFile 
                    data={file}
                    mini={true}
                />
                <FileName>{file.name}</FileName>
            </FileWrapper>
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