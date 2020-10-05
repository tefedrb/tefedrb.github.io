import React, { useContext } from 'react';
import MiniFile from './File/MiniFile';
import styled from 'styled-components';
import PathToFile from './svgs/PathToFile';
import { Link } from 'react-router-dom';

const FileDropDownWrap = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
`
const AllFilesWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (max-width: 950px){
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    @media (max-height: 700px){
        padding-left: 70%;
    }
`
export const FileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    width: 100%;
    color: green;
    font-size: 12px;
    @media (max-width: 950px){
        margin: 0;
        justify-content: center;
        padding: 2px;
    }
    @media (max-height: 700px){
        margin: 10px 0;
    }
`

export const FileName = styled.p`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2px;
    white-space: nowrap;
    font-size: 14px;
    @media (max-width: 950px){
        margin-right: 5px;
        margin-left: 5px;
    }
`
// Instead of using media queries, we can use the event listener info to switch
// from the vertical version of our nav to the horizontal version.
const FileDropDown = (props) => {
    const files = props?.files.map((fileData, key) => (
            <FileWrapper name={"fileWrapper"} key={key}>
                <Link to={`/${fileData.link}`}>
                    <MiniFile 
                        data={fileData}
                        mini={true}
                    />
                </Link>
                <FileName>{fileData.name}</FileName>
            </FileWrapper>
        )
    );

    return (
        <FileDropDownWrap name={"fileDropDown"}>
                {props.display ? <PathToFile numOfFiles={props?.files.length}/> : ""}
                <AllFilesWrap 
                    numOfFiles={props?.files.length} 
                    name={"AllFilesWrap"}
                >
                    {props.display ? files : ""}
                </AllFilesWrap>
        </FileDropDownWrap>
    )
}

export default FileDropDown;