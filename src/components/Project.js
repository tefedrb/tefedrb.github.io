import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    border: 5px solid blue;
`

const Project = (props) => {
    return (
        <Display>
            <p>TESTING!</p>
            <p>{props.fileName}</p>
        </Display>
    )
}

export default Project;