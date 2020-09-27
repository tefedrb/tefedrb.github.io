import React, { useContext, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useViewportListener from './hooks/useViewportListener';
import { Context } from '../context';

const GraphicWrapper = styled.div`
    width: ${props => props.mini ? "30px" : "90%"};
    max-width: 900px;
    height: ${props => props.mini ? "auto" : "95%"};
    margin-bottom: ${props => parseInt(props.mini ? "35px" : props.size.height) <= 35 ? "0" : "20px"};
    margin-top: ${props => props.mini ? "0" : "20px"};
    @media (max-width: 950px){
       width: ${props => props.mini ? "20px" : "90%"};
       margin-bottom: ${props => props.mini ? "0" : "10px"};
       margin-top: ${props => props.mini ? "0" : "25px"};
    }
    @media (max-width: 950px){
        height: ${props => props.mini ? "auto" : "93%"};
    }
    @media (max-width: 650px){
        width: ${props => props.mini ? "18px" : "90%"};
    }
`
const GraphicHeadWrapper = styled.div`
    display: flex;
    height: ${props => props.mini ? "10px" : props?.foldSize || "10%"};
`
const GraphicHead = styled.div`
    box-shadow: 1px -5px 27px -7px rgba(42,160,42,1);
    width: 100%;
    height: 100%;
    background-color: ${props => props.userColor};
`
const GraphicFold = styled.div`
    border-right: ${props => props.mini ? "10px" : props?.foldSize || "75px"} solid transparent;
    border-bottom: ${props => `${props?.dynamicHeight}px`} solid ${props => props.foldColor};
    box-shadow: ${props => props.boxShadow} rgba(00,00,00,0.40);
`

const GraphicBody = styled.div`
    cursor: ${props => props.mini ? "pointer" : ""};
    display: flex;
    justify-content: center;
    // position: relative;
    
    height: ${props => props.mini ? "35px" : "90%"};
    width: 100%;
    box-shadow: 1px -5px 27px -7px ${props => props.mini ? "transparent" : props.userColor};
    background-color: ${props => props.userColor};
    @media (max-width: 950px){
        height: ${props => props.mini ? "20px" : "90%"};
    }
    @media(max-height: 885px){
        overflow: auto;
    }
    @media(max-width: 650px){
        font-size: .75em;
        height: ${props => props.mini ? "15px" : "90%"};
    }
`
const File = (props) => {
    const context = useContext(Context);
    const { openFile, updateDisplay, verticalDisplay, updateViewport } = context;
    const [ loaded, confirmLoaded ] = useState(false);
    const [ contentLoaded, saveContent ] = useState("");
    // Might want to consider inserting an if/else statement to avoid running
    // useEffect more than needed.
    let viewport = props.mini ? null : useViewportListener();
    const headerEl = useRef("75");

    const getDynamicFoldHeight = () => {
        return headerEl.current.offsetHeight;
    }

    useEffect(() => {
        // If viewport width is less than 950
        // We want to check to see if the file name changed - then re-render
        // we want to re-render because our fold gets out of place otherwise
        
        if(viewport?.[0] > 950 && verticalDisplay){
            updateDisplay(false);
        }
        // Might actually want to use useLayouteffect here because of flash
        if(viewport?.[0] <= 950 && !verticalDisplay){
            updateDisplay(true);
            updateViewport(viewport);
        }
        if(!props.mini && contentLoaded !== props?.content?.props?.file?.name){
            saveContent(props?.content?.props?.file?.name);
        }
        if(!loaded){ 
            confirmLoaded(true);
        }
    }, [viewport, verticalDisplay, loaded, props.content, props?.content?.props?.file?.name]);

    
    const changeColor = () => {
        return props.color == "green" ? "rgba(42, 160, 42, 1)" : "rgba(255, 255, 255, 0.83)";
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
        console.log("clicked")
        if(props.mini){
            openFile(props.data);
        }
    }

    return (
        <GraphicWrapper 
            name={"file GraphicWrapper"} 
            size={props.size} 
            mini={props.mini}
        >
            <GraphicHeadWrapper 
                ref={headerEl} 
                name={"file HeadWrapper"}
                foldSize={props.foldSize} 
                mini={props.mini}
            >
                <GraphicHead 
                    userColor={changeColor} 
                    name={"head"} 
                />
                <GraphicFold 
                    name={"flap"}
                    foldSize={props.foldSize}
                    mini={props.mini}
                    dynamicHeight={getDynamicFoldHeight()}
                    foldColor={changeFoldColor}
                    boxShadow={changeBoxShadow}
                />
            </GraphicHeadWrapper>
            <GraphicBody
                onClick={clickOpen}
                userColor={changeColor} 
                name={"GraphicBody"} 
                size={props.size} 
                mini={props.mini}
            > 
                {props.content}
            </GraphicBody>
        </GraphicWrapper>
    )
}

export default File;