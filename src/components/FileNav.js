import React from 'react';
import styled from 'styled-components';
import File from './File';

const FileNavWrapper = styled.nav`
    // position: fixed;
    // top: 0;
    display: flex;
    justify-content: center;
    color: green;
    font-size: 12px;
    align-self: flex-start;
    width: 100%;
    height: 62px;
    padding: 22px;
    background-color: blue;
`
const FileWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const FileNav = (props) => {
    console.log(props, "PROPS")
    const filesInFolder = props?.files.map((file, key) =>
        <FileWrapper key={key}>
            <File  
                size={{width: "30px", height: "35px"}}
                foldSize={"10px"}
            />  
            {file}
        </FileWrapper> 
    )

    return (
        <FileNavWrapper name={"fileNav"}>
            {filesInFolder}
        </FileNavWrapper>
    )
}

export default FileNav;