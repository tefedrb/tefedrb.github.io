import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FolderWrapper = styled.div`
    position: relative;
    width: 150px;
    height: 100px;
    &:hover {
        cursor: pointer;
    }
`
const FolderTab = styled.div`
    height: 10%;
    width: 25px;
    background-color: rgba(190, 186, 63, 1);
`
const FolderBack = styled.div`
    height: 90%;
    width: 100%;
    background-color: rgba(190, 186, 63, 1);
`
const Paper = styled.div`
    position: absolute;
    height: 75%;
    width: 90%;
    background-color: white;
    bottom: ${props => props?.toggle?.paper?.bottom || "14px"};
    left: 5px;
`
const FolderFront = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: solid 1px red;
    height: 80%;
    bottom: 0;
    // plus 8px (below)
    left: ${props => props?.toggle?.folderFront?.left || "15px"};
    width: 100%;
    // minus 10deg (below)
    transform: ${props => props?.toggle?.folderFront?.trans || "skew(-20deg)"};
    background-color: rgba(216, 212, 79, 1);
`
const Contents = styled.p`
    
`
const Folder = (props) => {
    const [openFolder, toggleState] = useState(false);
    const [styledCompProps, changeStyledProps] = useState();

    const handleClick = () => {
        toggleState(prevState => !prevState);
        props.changeOpenFolder(props.title);
    }

    function setFolderProp(){
            return {
            folderFront: {
               trans: `${openFolder ? "skew(-20deg)" : "skew(-10deg)"}`,
               left: `${openFolder ? "15px" : "8px"}`
            },
            paper: {
                bottom: `${openFolder ? "14px" : "0"}`,
            }
        }
    }

    useEffect(() => {
        if(props?.title === props?.openFolder){
            toggleState(true);
        } else { 
            toggleState(false);
        }
        changeStyledProps(setFolderProp());
    }, [props.openFolder, openFolder]);


    return (  
        <FolderWrapper name={"wrapper"} onClick={handleClick}>
            <FolderTab />
            <FolderBack />
            <Paper name={"paper"} toggle={styledCompProps} />
            <FolderFront name={"folder front"} toggle={styledCompProps}>
                <Contents>{props.title}</Contents>
            </FolderFront>
        </FolderWrapper>
    )
}

export default Folder;