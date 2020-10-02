import React from 'react';
import { GraphicWrapper, GraphicHeadWrapper, GraphicHead, GraphicFold, GraphicBody }
    from './FileCss';

const MiniFile = (props) => {

    const clickOpen = (e) => {
        e.preventDefault();
        console.log("clicked")
        if(props.mini){
            openFile(props.data);
        }
    }

    return (
        <GraphicWrapper 
            name={"file GraphicWrapper"} 
            size={props.size} 
            mini={props.mini}
        >
            <GraphicHeadWrapper 
                name={"GraphicHeadWrapper"}
                foldSize={props.foldSize} 
                mini={props.mini}
            >
                <GraphicHead 
                    mini={props.mini}
                    name={"head"}
                >
                    {props.source}
                    {props.live}
                </GraphicHead>
                <GraphicFold 
                    name={"flap"}
                    foldSize={props.foldSize}
                    mini={props.mini}
                />
            </GraphicHeadWrapper>
            <GraphicBody
                onClick={clickOpen}
                name={"GraphicBody"} 
                size={props.size} 
                mini={props.mini}
            > 
                {props.content}
            </GraphicBody>
        </GraphicWrapper>
    )
}

export default MiniFile;