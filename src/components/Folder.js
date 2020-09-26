import React, { useContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Context } from '../context';
import FileDropDown from '../components/FileDropDown';

const FolderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 100%;
    margin-right: 12%;
    @media (max-width: 950px){
        width: auto;
        height: 100%;
        margin-right:0;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`
const FolderInnerWrap = styled.div`
    position: relative;
    height: 100px;
    width: 75px;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 950px){
        height: 65px;
        width: 55px;
    }
    // @media (max-height: 695px){
    //     height: 40px;
    // }
`
const FolderTab = styled.div`
    height: 10%;
    width: 15%;
    background-color: rgba(190, 186, 63, 1);
`
const FolderBack = styled.div`
    height: 90%;
    width: 100%;
    background-color: rgba(190, 186, 63, 1);
    box-shadow: 1px -5px 16px -7px rgba(216,212,79,1);
`
const Paper = styled.div`
    position: absolute;
    height: 75%;
    width: 90%;
    background-color: white;
    bottom: ${props => props?.toggle?.paper?.bottom || "14px"};
    left: 5%;
`
const FolderFront = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    bottom: 0;
    box-shadow: 1px -5px 16px -7px rgba(216,212,79,1);
    // plus 8px (below)
    left: ${props => props?.toggle?.folderFront?.left || "10%"};
    width: 100%;
    transform: ${props => props?.toggle?.folderFront?.trans || "skew(-20deg)"};
    background-color: rgba(216, 212, 79, 1);
`
const Contents = styled.p`
    // width: 1032px;
`
const Folder = (props) => {
    const [ openFolder, toggleState ] = useState(false);
    const [ styledCompProps, changeStyledProps ] = useState();
    const folderNode = useRef(null);
    const { verticalDisplay, saveFolderLoc } = useContext(Context);
    
    const handleClick = () => {
        if(!openFolder){
        toggleState(prevState => !prevState);
            props.changeOpenFolder(props.title);
        }
    }

    const setFolderProp = () => {
        return {
            folderFront: {
               trans: `${openFolder ? "skew(-20deg)" : "skew(-10deg)"}`,
               left: `${openFolder ? "20%" : "10%"}`
            },
            paper: {
                bottom: `${openFolder ? "12%" : "0"}`,
            }
        }
    }

    useEffect(() => {
        if(props?.title === props?.openFolder){
            props.listFiles ? props.listFiles(props.files) : null;
            toggleState(true);
        } else { 
            toggleState(false);
        }
        changeStyledProps(setFolderProp());
    }, [props.openFolder, openFolder]);

    const displayDropDown = () => {
        return ( 
            openFolder && !verticalDisplay ? 
            <FileDropDown
                name={"drop down"} 
                files={props.files}
                display={openFolder}
            /> :
            ""
        )
    };

    return (  
        <FolderWrapper name={"folderWrap"}>
            <FolderInnerWrap id="innerWrap" ref={folderNode} name={"folderInnerWrap"} onClick={handleClick}>
                <FolderTab name={"tab"}/>
                <FolderBack name={"folder back"}/>
                <Paper name={"paper"} toggle={styledCompProps} />
                <FolderFront id="folderFront" name={"folder front"} toggle={styledCompProps}>
                    <Contents>{props.title}</Contents>
                </FolderFront>
            </FolderInnerWrap>
            {displayDropDown()}
        </FolderWrapper>
    )
}

export default Folder;