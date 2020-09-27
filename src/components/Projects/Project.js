import React from 'react';
import styled from 'styled-components';
import { ProjNav, ProjLink } from './ProjectCSS';

const Display = styled.div`
    display: ${props => props.flexbox ? "flex" : "block"};
    flex-direction: ${props => props.flexbox ? "column" : "none"};
    justify-content: ${props => props.flexbox ? "center" : "none"};
    align-items: ${props => props.flexbox ? "center" : "none"};
   
    padding-top: ${props => props.flexbox ? "1%" : "none"};
    width: 90%;
    height: 90%;
    max-width: 800px;
    min-height: 452px;
    overflow: auto;

    @media(max-height: 825px){
        padding-top: 3%;
        display: block;
        margin: auto;
    }
`
const Project = (props) => {
    // const displayEl = useRef(452);
    console.log(props.file.flexbox, "FLEX")
    return (
        <Display flexbox={props.file.flexbox} name={"display project"}>
            {props.file.name}
            {props.file.data}
        </Display>
    )
}

export default Project;