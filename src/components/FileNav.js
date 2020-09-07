import React from 'react';
import styled from 'styled-components';
import File from './File';

const FileNavWrapper = styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    padding: 22px;
    background-color: transparent;
`
const FileNav = (props) => {
    const strings = props?.files.map((file, key) => 
        <File 
            key={key} 
            size={{width: "30px", height: "35px"}}
            foldSize={"10px"}
        >
            {file}
        </File>
    )
    return (
        <FileNavWrapper name={"fileNav"}>
            {strings}
        </FileNavWrapper>
    )
}

export default FileNav;