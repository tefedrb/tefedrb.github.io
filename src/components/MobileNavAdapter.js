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
        background-color: rgba(79,79,79,0.73);
        height: auto;
        width: auto;
        padding: .2em;
        align-items: center;
        justify-content: space-around;
        // color: blue;
        // transform: translateY(-6px);
    }
`
const MobileNavWrapper = styled.div`
    // height: 100%;
    // width: 100%;
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
    // overflow: hidden;

    @media (max-width: 1245px){
        min-width: 135px;
    }

    @media (max-height: 700px) and (max-width: 948){
        min-width: 110px;
    }

    // MOBILE VIEW ALTERATION -> Adding "and" and value to try and remedy mobile
    // horizontal view -> testing "and min-height", removing (max-height: 745px)

    @media (max-width: 948px) and (min-height: 500px){
        // flex-direction: row;
        min-width: 95%;
        min-height: 14.5%;
        margin-top: 0px;
        margin-bottom: 20px;
        background-color: transparent;
        box-shadow: none;
    }

    @media(max-width: 650px){
        // min-height: 45px;
    }
`
const MobileNavAdapter = (props) => {
    const { globalState, updateRenderedFile } = useContext(Context);
    const { filesDisplayed, fileLoaded } = globalState;
    // When clicking on folder - get element 
    // and see if you can get the height / width

    // REMOVED CODE BECAUSE OF REACT ROUTER & GITHUB PAGES
    // <FileWrapper name={"FileWrap"} key={key}>
    //      <Link to={`/${file.link}`}>
    //            <MiniFile 
    //                data={file}
    //                mini={true}
    //            />
    //        </Link>
    //       <FileName>{file.name}</FileName>
    //  </FileWrapper>

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
        <MobileNavWrapper name={"MobileNavWrap"}>
            <MobileFilePopUp name={"Adapter"}> 
                {files()}
            </MobileFilePopUp>
            <NavigationPanel 
                changeFolder={props.changeFolder} 
                name={"navigation"}
            />
        </MobileNavWrapper>
    )
}

export default MobileNavAdapter;