import React from 'react';
import styled from 'styled-components';

const FileGraphic = styled.div`
    position: relative;
    height: 85%;
    width: 100%;
    background-color: ${props => props.color};
`
const GraphicHead = styled.div`
    width: 100%;
    height: 100%%;
    background-color: rgba(42, 227, 42, 0.48);
`
const Fold = styled.div`
    width: 0;
    height: 0;
    border-right: 75px solid transparent;
    border-bottom: 75px solid rgb(42, 227, 42);
    box-shadow: -7px 3px 7px -4px rgba(00,00,00,0.40);
`
const GraphicWrapper = styled.div`
    width: 500px;
    height: 500px;
`
const HeadWrapper = styled.div`
    display: flex;
    height: 15%;
`
const File = (props) => {

    function changeColor(){
        return props.color == "green" ? "rgba(42, 227, 42, 0.48)" : "white"
    }

    return (
        <div style={
                {
                    height: "500px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center"
                }
            }
        >
            <GraphicWrapper>
                <HeadWrapper>
                    <GraphicHead name={"head"}/>
                    <Fold name={"flap"} />
                </HeadWrapper>
                <FileGraphic color={changeColor} name={"graphic"}/>
            </GraphicWrapper>
        </div>
    )
}

export default File;