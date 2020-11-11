import React, { useContext } from 'react';
import MiniFile from './File/MiniFile';
import styled from 'styled-components';
import PathToFile from './svgs/PathToFile';
import { Context } from '../context';

const FileDropDownWrap = styled.div`
    display: flex;
    // Removed for mobile view testing....
    // height: 100%;
    @media (max-width: 948px) and (min-height: 500px){
        display: none;
    }
    width: 100%;
`
const AllFilesWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    // ADJUSTED FOR MOBILE VIEW
    @media (max-width: 948px) and (min-height: 500px){
        display: none;
        // flex-direction: row;
        // justify-content: space-around;
        // align-items: center;
    }
    // ADJUSTED FOR MOBILE VIEW
    @media (max-height: 700px) and (min-height: 500px){
        padding-left: 12%;
    }
`
export const FileWrapper = styled.div`
    pointer-events: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    width: 100%;
    color: green;
    font-size: 12px;
    @media (max-width: 948px){
        margin: 0;
        justify-content: center;
        padding: 2px;
    }
    // @media (max-height: 700px){
    //     margin: 10px 0;
    // }
`

export const FileName = styled.p`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2px;
    white-space: nowrap;
    font-size: 14px;
    @media (max-width: 948px){
        margin-right: 5px;
        margin-left: 5px;
    }
`
// Instead of using media queries, we can use the event listener info to switch
// from the vertical version of our nav to the horizontal version.
const FileDropDown = (props) => {
    const { updateRenderedFile } = useContext(Context);
    const { verticalDisplay } = useContext(Context);
    // const [vertical, isVertical] = useState(verticalDisplay);
    const files = props?.files.map((fileData, key) => (
            <FileWrapper name={"fileWrapper"} key={key}>
                <span onClick={() => updateRenderedFile(fileData.name)}>
                    <MiniFile 
                        data={fileData}
                        mini={true}
                    />
                </span>
                <FileName>{fileData.name}</FileName>
            </FileWrapper>
        )
    );

    return (
        <FileDropDownWrap vertical={verticalDisplay} name={"fileDropDown"}>
                {props.display ? <PathToFile numOfFiles={props?.files.length}/> : ""}
                <AllFilesWrap 
                    numOfFiles={props?.files.length} 
                    name={"AllFilesWrap"}
                >
                    {props.display && !verticalDisplay ? files : ""}
                </AllFilesWrap>
        </FileDropDownWrap>
    )
}

export default FileDropDown;