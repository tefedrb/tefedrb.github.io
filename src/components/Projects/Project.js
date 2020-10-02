import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
    display: ${props => props.flexbox ? "flex" : "block"};
    flex-direction: ${props => props.flexbox ? "column" : "none"};
    justify-content: ${props => props.flexbox ? "center" : "none"};
    align-items: ${props => props.flexbox ? "center" : "none"};
    padding-bottom: ${props => props.flexbox ? "10%" : "none"};
   
    padding-top: ${props => props.flexbox ? "none" : "1%"};
    width: 90%;
    // height: 90%;
    max-width: 800px;
    // min-height: 452px;
    overflow: auto;

    @media(max-height: 825px){
        padding-top: ${props => props.flexbox ? "0" : "3%"};
        display: ${props => props.flexbox ? "flex" : "block"};
        margin: ${props => props.flexbox ? "none" : "auto"};
    }
    @media(max-width: 630px){
        // display: block;
    }
`
const Project = (props) => {
    return (
        <Display flexbox={props.file.flexbox} name={"display project"}>
            <p style={{textAlign: "center"}}>{props.file.name}</p>
            {props.file.data}
        </Display>
    )
}

export default Project;