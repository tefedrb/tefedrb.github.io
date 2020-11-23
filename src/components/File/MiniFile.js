import React from 'react';
import { GraphicWrapper, GraphicHeadWrapper, GraphicHead, GraphicFold, GraphicBody }
    from './FileCss';

const MiniFile = (props) => {
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
                </GraphicHead>
                <GraphicFold 
                    name={"flap"}
                    foldSize={props.foldSize}
                    mini={props.mini}
                />
            </GraphicHeadWrapper>
            <GraphicBody
                name={"GraphicBody"} 
                size={props.size} 
                mini={props.mini}
            > 
            </GraphicBody>
        </GraphicWrapper>  
    )
}

export default MiniFile;