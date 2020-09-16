import React from 'react';
import File from './File';
import styled from 'styled-components';
import PathToFile from './svgs/PathToFile';

const FileDropDownWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`
const FileWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    width: 100%;
    color: green;
    font-size: 12px;
`
const FileDropDown = (props) => {
    const files = props?.files.map((fileData, key) => (
        <FileWrapper key={key}>
            <File 
                data={fileData}
                mini={true} 
            />
            {fileData}
        </FileWrapper>
    ));

    // I can use the length of the files array and the height to determine
    // our file path svg.

    return (
        <FileDropDownWrap name={"fileDropDown"}>
            {props.display ? files : ""}
        </FileDropDownWrap>
    )
}

export default FileDropDown;