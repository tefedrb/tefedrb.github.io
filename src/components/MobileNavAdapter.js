import React, { useContext } from 'react';
import styled from 'styled-components';
import NavigationPanel from './NavigationPanel';
import MiniFile from './File/MiniFile';
import { Context } from '../context';
import { FileName, FileWrapper } from './FileDropDown';

const MobileFilePopUp = styled.div`
    display: none;
    // MOBILE VIEW ALTERATION -> testing and min-height
    @media (max-width: 948px) and (min-height: 500px) {
        display: flex;
        // background-color: rgba(79,79,79,0.73);
        background-color: blue;

        height: auto;
        width: auto;
        padding: .2em;
        align-items: center;
        justify-content: space-around;
        // color: blue;
        // transform: translateY(-6px);
    }
`
const MobileNavAdapter = (props) => {
    const { globalState, updateRenderedFile } = useContext(Context);
    const { filesDisplayed, fileLoaded } = globalState;
    // When clicking on folder - get element 
    // and see if you can get the height / width

    // REMOVED CODE BECAUSE OF REACT ROUTER & GITHUB PAGES
    // <FileWrapper name={"FileWrap"} key={key}>
    //            <Link to={`/${file.link}`}>
    //                 <MiniFile 
    //                     data={file}
    //                     mini={true}
    //                 />
    //             </Link>
    //             <FileName>{file.name}</FileName>
    //         </FileWrapper>

    const files = () => {
        return filesDisplayed.map((file, key) => (
           <FileWrapper name={"FileWrap"} key={key}>
               <span onClick={() => updateRenderedFile(file.name)}>
                    <MiniFile
                        data={file}
                        mini={true}
                    />
                </span>
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