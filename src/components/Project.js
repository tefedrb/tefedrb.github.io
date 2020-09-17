import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    border: 5px solid blue;
`

const Project = (props) => {
    console.log(props.fileName)
    return (
        <Display>
            <p>TESTING!</p>
            <p>{props.fileName}</p>
        </Display>
    )
}

export default Project;