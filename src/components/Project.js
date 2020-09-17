import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    border: 5px solid blue;
`

const Project = () => {
    return (
        <Display>
            <p>TESTING!</p>
        </Display>
    )
}

export default Project;