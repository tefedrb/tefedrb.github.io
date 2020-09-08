import React from 'react';
import styled from 'styled-components';

const FileGraphic = styled.div`
    height: 90%;
    width: 100%;
    background-color: ${props => props.userColor};
`
const GraphicHead = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.userColor};
`
const Fold = styled.div`
    width: 0;
    height: 0;
    border-right: ${props => props?.foldSize || "75px"} solid transparent;
    border-bottom: ${props => props?.foldSize || "75px"} solid ${props => props.foldColor};
    box-shadow: ${props => props.boxShadow} rgba(00,00,00,0.40);
`
const GraphicWrapper = styled.div`
    width: ${props => props.size.width};
    height: ${props => props.size.height};
    margin-bottom: ${props => parseInt(props.size.height) <= 35 ? "0" : "40px"};
`
const HeadWrapper = styled.div`
    display: flex;
    height: ${props => props?.foldSize || "10%"};
`
const File = (props) => {

    const changeColor = () => {
        return props.color == "green" ? "rgba(42, 227, 42, 0.48)" : "rgba(255, 255, 255, 0.83)";
    }

    const changeFoldColor = () => {
        return props.color == "green" ? "rgb(42, 227, 42)" : "white";
    }

    const changeBoxShadow = () => {
        return props.mainDisplay === true ? "-7px 3px 7px -4px" : "-7px 3px 7px -4px";
    }

    console.log(props.foldSize || "75px", "FOLD")
    return (
        <GraphicWrapper name={"file GraphicWrapper"} size={props.size}>
            <HeadWrapper name={"file HeadWrapper"} foldSize={props.foldSize}>
                <GraphicHead userColor={changeColor} name={"head"} />
                <Fold 
                    name={"flap"}
                    foldSize={props.foldSize} 
                    foldColor={changeFoldColor}
                    boxShadow={changeBoxShadow}
                />
            </HeadWrapper>
            <FileGraphic userColor={changeColor} name={"FileGraphic"} />
        </GraphicWrapper>
    )
}

export default File;