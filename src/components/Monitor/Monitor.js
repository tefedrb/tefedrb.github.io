import React from 'react';
import './monitorCSS.css';

const Monitor = (props) => {
    return (
        <div className="monitorWrap">
            <div className="monitorTop">
                <div className="monitorInfo">
                    <p className="monitorName">
                        Minitron
                    </p>
                    <p className="monitorVersion">
                        Multiscan
                   </p>
                </div>
            </div>
            <div className="topEdgeWrap">
                <div className="topEdge"></div>
            </div>
            <div className="monitorLeft"></div>
            <div className="leftEdgeWrap">
                <div className="leftEdge"></div>
            </div>
                    {props.children}
            <div className="rightEdgeWrap">
                <div className="rightEdge"></div>
            </div>
            <div className="monitorRight"></div>
            <div className="bottomEdgeWrap">
                <div className="bottomEdge"></div>
            </div>
            <div className="monitorBottom">
                <p className="logo">Pony</p>
            </div>
        </div>
    )
}

export default Monitor;