import React from 'react';
import styled from 'styled-components';

const MonitorEdge = styled.div` 
    background-color: transparent;
    pointer-events: none;
    height: 100vh;
    border: 20px solid rgb(227,219,188);
    box-sizing: border-box;
    // overflow: hidden;
`

const Monitor = (props) => {
    return (
        <MonitorEdge>
            {props.children}
        </MonitorEdge>
    )
}

export default Monitor;