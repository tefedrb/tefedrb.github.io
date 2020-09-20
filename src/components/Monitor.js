import React from 'react';
import styled from 'styled-components';

const MonitorEdge = styled.div` 
    background-color: transparent;
    pointer-events: none;
    height: 100vh;
    border-top: 60px solid rgb(227,219,188);
    border-bottom: 60px solid rgb(227,219,188);
    border-left: 45px solid rgb(227,219,188);
    border-right: 45px solid rgb(227,219,188);
    box-sizing: border-box;
`
const MonitorWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    height: 100vh;
    width: 100vw;
    justify-content: space-between;
    z-index: 1;
`
const MonitorTop = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 1;
    height: 65px;
    width: 100vw;
    background: linear-gradient(to right, rgb(227,219,188), rgb(227,219,188));
    color: black;
    box-shadow: 15px 9px 5px -5px black;
`
const InnerTopWrap = styled.div`
    width: 100%;
    display: flex;
`
const InnerTop = styled.div`
    width: 100%;
    z-index: 1;
    border-left: 10px solid transparent;
    border-top: 10px solid rgb(127,119,88);
    border-right: 10px solid transparent;
    box-sizing: border-box;
`
const Bumper = styled.div`
    width: 37px;
`
const MonitorBottom = styled.div`
    display: flex;
    z-index: 0;
    height: 65px;
    width: 100vw;
    background: linear-gradient(to right, rgb(227,219,188), rgb(227,219,188));
    box-shadow: 15px 9px 5px 12px black;
`
const InnerBottom = styled.div` 
    align-self: flex-start;
    width: 100%;
    z-index: 1;
    border-left: 10px solid transparent;
    border-bottom: 10px solid rgb(267,259,228);
    border-right: 10px solid transparent;
    box-sizing: border-box;
`
const InnerMonitor = styled.div`
    z-index: 1;
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 100%;
`
const MonitorRight = styled.div`
    display: flex;
    z-index: 1;
    background: linear-gradient(to right, rgb(227,219,188), rgb(227,219,188));
    width: 45px;
    height: 100%;
    box-shadow: -9px 0px 8px -8px black;
`
const InnerRightWrap = styled.div`

`
const InnerRight = styled.div`
    height: 100%;
    z-index: 3;
    border-top: 10px solid transparent;
    border-right: 10px solid rgb(177,169,138);
    transform: translate(0px, -10px);
    border-bottom: 10px solid transparent;
`
const MonitorLeft = styled.div`
    display: flex;
    justify-content: flex-end;
    z-index: 1;
    background: linear-gradient(to right, rgb(227,219,188), rgb(227,219,188));
    width: 45px;
    height: 100%;
    box-shadow: 10px 0px 8px -8px black;
`
const InnerLeft = styled.div`
    width: 0;
    height: 100%;
    z-index: 3;
    border-top: 10px solid transparent;
    border-left: 10px solid rgb(177,169,138);;
    border-bottom: 10px solid transparent;
    transform: translate(0px, -10px);
`
const Monitor = (props) => {
    return (
        <MonitorWrapper name={"Monitor Wrap"}>
            <MonitorTop>
                <Bumper name={"Right Bumper"}/>
                <InnerTop/>
                <Bumper name={"Left Bumper"}/>
            </MonitorTop>
            <InnerMonitor>
                <MonitorLeft>
                    <InnerLeft name={"Inner Left"}/>
                </MonitorLeft>   
                <MonitorRight>
                    <InnerRight name={"Inner Right"}/>
                </MonitorRight>
            </InnerMonitor>
            <MonitorBottom>
                <Bumper name={"Right Bumper 2"}/>
                <InnerBottom />
                <Bumper name={"Left Bumper 2"}/>
            </MonitorBottom>
        </MonitorWrapper>
    )
}

export default Monitor;