import React from 'react';
import styled from 'styled-components';

const FileNavWrapper = styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    align-self: flex-start;
    width: 100%;
    height: 100px;
    background-color: rgb(137, 137, 137);
`
const FileNav = () => {
    return (
        <FileNavWrapper name={"fileNav"}>
            
        </FileNavWrapper>
    )
}

export default FileNav;