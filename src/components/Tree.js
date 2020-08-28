import React, { useState, useRef, useEffect } from 'react';
import p5 from 'p5';

const Tree = (props) => {
    const [ data, updateDate ] = useState({});
    const treeContainer = useRef();
    let myP5;

    const s = (sketch) => {
        let x = 100;
        let y = 100;

        sketch.setup = () => {
            sketch.createCanvas(200, 200);
        };

        sketch.draw = () => {
            sketch.background(0);
            sketch.fill(255);
            sketch.rect(x,y,50,75);
        };
    }

    useEffect(() => {
       myP5 = new p5(s, treeContainer.current);
    }, [myP5])

    return (
        <>
            <div>ARE WE HERE OR ARE WE HERE?</div>
            <div className="canvas" ref={treeContainer}></div>
        </>
    )
}

export default Tree;