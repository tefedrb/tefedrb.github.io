import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
    display: ${props => props.flexbox ? "flex" : "block"};
    // display: flex;
    flex-direction: ${props => props.flexbox ? "column" : "none"};
    // flex-direction: column;
    justify-content: ${props => props.flexbox ? "center" : "none"};
    // justify-content: center;
    align-items: ${props => props.flexbox ? "center" : "none"};
    // align-items: center;
    margin: ${props => props.flexbox ? "0" : "auto"};
    text-align: center;
    // padding-top: ${props => props.flexbox ? "none" : "6%"};
    width: 90%;
    // height: 90%;
    max-width: 800px;
    // min-height: 485px;
    @media(max-height: 825px){
        // padding-top: ${props => props.flexbox ? "0" : "3%"};
        display: ${props => props.flexbox ? "flex" : "block"};
        margin: ${props => props.flexbox ? "none" : "auto"};
    }
    @media(max-width: 630px){
        // display: block;
    }
`
const Project = (props) => {
    return (
        <Display flexbox={props.flexbox} name={"display project"}>
            {/* <p style={{textAlign: "center"}}>{props.name}</p> */}
            {props.component}
        </Display>
    )
}

export default Project;