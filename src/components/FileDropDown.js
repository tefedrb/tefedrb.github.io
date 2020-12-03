import React, { useContext } from 'react';
import MiniFile from './File/MiniFile';
import styled from 'styled-components';
import PathToFile from './svgs/PathToFile';
import { Context } from '../context';

const FileDropDownWrap = styled.div`
    display: flex;
    // Removed for mobile view testing....
    // height: 100%;
    @media (max-width: 948px) and (min-height: 500px){
        display: none;
    }
    width: 100%;
`
const AllFilesWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    // ADJUSTED FOR MOBILE VIEW
    @media (max-width: 948px) and (min-height: 500px){
        display: none;
    }
    // ADJUSTED FOR MOBILE VIEW
    @media (max-height: 700px) and (min-height: 500px){
        padding-left: 12%;
    }
    @media (max-height: 380px){
        margin-top: 12%;
    }
`
export const FileWrapper = styled.div`
    pointer-events: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    width: 100%;
    color: green;
    font-size: 12px;
    @media (max-width: 948px){
        margin: 0;
        justify-content: center;
        padding: 2px;
    }
`

export const FileName = styled.p`
    background-color: ${props => props.open ? "rgb(0,4,127)" : "none"}; 
    width: auto;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-text: center;
    margin: 2px;
    // white-space: ${props => props.open ? "wrap" : "nowrap" };
    white-space: nowrap;
    font-size: 17px;

    @media (max-width: 948px){
        margin-right: 5px;
        margin-left: 5px;
    }

    @media screen and (max-width: 651px), screen and (max-height: 757px){
        font-size: 14px;
        white-space: nowrap;
        // width: auto;
    }
`
// Instead of using media queries, we can use the event listener info to switch
// from the vertical version of our nav to the horizontal version.
const FileDropDown = (props) => {
    const { globalStateUpdater } = useContext(Context);
    const { verticalDisplay, globalState } = useContext(Context);
    const { fileLoaded } = globalState;

    const files = props?.files.map((fileData, key) => (
            <FileWrapper name={"fileWrapper"} key={key}>
                <span onClick={() => globalStateUpdater("fileLoaded", fileData.name)}>
                    <MiniFile 
                        data={fileData}
                        mini={true}
                        open={fileLoaded === fileData.name ? true : false}
                    />
                </span>
                <FileName open={fileLoaded === fileData.name ? true : false}>{fileData.name}</FileName>
            </FileWrapper>
        )
    );

    return (
        <FileDropDownWrap vertical={verticalDisplay} name={"fileDropDown"}>
                {props.display ? <PathToFile numOfFiles={props?.files.length}/> : ""}
                <AllFilesWrap 
                    numOfFiles={props?.files.length} 
                    name={"AllFilesWrap"}
                >
                    {props.display && !verticalDisplay ? files : ""}
                </AllFilesWrap>
        </FileDropDownWrap>
    )
}

export default FileDropDown;