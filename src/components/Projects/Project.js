import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    align-text: center;
    // border: 5px solid blue;
`

const Project = (props) => {
    return (
        <Display>
            {props.file.data}
    
            <p>{props.file.name}</p>
        </Display>
    )
}

export default Project;