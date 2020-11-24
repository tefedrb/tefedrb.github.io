import React, { useContext } from 'react';
import { Context } from '../../context';
import { GraphicBody } from './FileCss';

const OpenFile = (props) => {
    const { files, globalState } = useContext(Context);
    return (
        <GraphicBody
            name={"GraphicBody"} 
            size={props.size} 
        > 
            {files[globalState.fileLoaded]?.content || ""}
        </GraphicBody>
    )
}

export default OpenFile;