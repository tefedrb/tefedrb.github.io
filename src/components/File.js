import React, { useContext, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useViewportHeight from './hooks/useViewportHeight';
import { Context } from '../context';

const GraphicWrapper = styled.div`
    width: ${props => props.mini ? "30px" : props.size.width};
    // height: ${props => props.mini ? "35px" : props.size.height};
    height: 100%;
    margin-bottom: ${props => parseInt(props.mini ? "35px" : props.size.height) <= 35 ? "0" : "40px"};
    margin-top: ${props => props.mini ? "0" : "40px"}
`
const HeadWrapper = styled.div`
    display: flex;
    height: ${props => props.mini ? "10px" : props?.foldSize || "10%"};
`
const GraphicHead = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.userColor};
`
const Fold = styled.div`
    border-right: ${props => props.mini ? "10px" : props?.foldSize || "75px"} solid transparent;
    border-bottom: ${props => `${props?.dynamicHeight}px`} solid ${props => props.foldColor};
    box-shadow: ${props => props.boxShadow} rgba(00,00,00,0.40);
`
const FileGraphic = styled.div`
    cursor: ${props => props.mini ? "pointer" : ""};
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.mini ? "35px" : "90%"};
    width: 100%;
    background-color: ${props => props.userColor};
`
const File = (props) => {
    const context = useContext(Context);
    const { saveFileX, fileOpen, openFile } = context;
    const [ loaded, confirmLoaded ] = useState(false);
    useViewportHeight();
    const headerEl = useRef("75");

    const getDynamicFoldHeight = () => {
        return headerEl.current.offsetHeight;
    }

    useEffect(() => {
        // I need to re-render the component because when I first mount I don't have a reference
        // to the node I need for the dynamicFoldHeight property...
        if(props.mini && loaded){
            
        }
        if(!loaded){ 
            confirmLoaded(true);
        }
    }, []);

    const changeColor = () => {
        return props.color == "green" ? "rgba(42, 227, 42, 0.48)" : "rgba(255, 255, 255, 0.83)";
    }

    const changeFoldColor = () => {
        return props.color == "green" ? "rgb(42, 227, 42)" : "white";
    }

    const changeBoxShadow = () => {
        return props.mainDisplay === true ? "-7px 3px 7px -4px" : "-7px 3px 7px -4px";
    }

    // If mini - use click handler that reaches into context and tells it
    // to change it's state as to what file is displayed on the main display

    const clickOpen = (e) => {
        e.preventDefault();
        console.log("clicked");
        if(props.mini){
            openFile(props.data.name);
        }
    }

    return (
        <GraphicWrapper 
            name={"file GraphicWrapper"} 
            size={props.size} 
            mini={props.mini}
        >
            <HeadWrapper 
                ref={headerEl} 
                name={"file HeadWrapper"}
                foldSize={props.foldSize} 
                mini={props.mini}
            >
                <GraphicHead 
                    userColor={changeColor} 
                    name={"head"} 
                />
                <Fold 
                    name={"flap"}
                    foldSize={props.foldSize}
                    mini={props.mini}
                    dynamicHeight={getDynamicFoldHeight()}
                    foldColor={changeFoldColor}
                    boxShadow={changeBoxShadow}
                />
            </HeadWrapper>
            <FileGraphic
                onClick={clickOpen}
                userColor={changeColor} 
                name={"FileGraphic"} 
                size={props.size} 
                mini={props.mini}
            > 
                {props.content}
            </FileGraphic>
        </GraphicWrapper>
    )
}

export default File;