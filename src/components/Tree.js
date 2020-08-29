import React, { useState, useRef, useEffect } from 'react';
import p5 from 'p5';

const Tree = (props) => {
    const [ data, updateDate ] = useState({});
    const treeContainer = useRef();
    let myP5;

    const s = (sketch) => {
        let slider;
        let angle = 0;

        sketch.setup = () => {
            sketch.createCanvas(400, 400);
            slider = sketch.createSlider(0, sketch.TWO_PI, sketch.PI/4, 0.01);
        };

        sketch.draw = () => {
            sketch.background(51);
            angle = slider.value();
            sketch.stroke(255);
            sketch.translate(200, 400);
            branch(100);
        };

        function branch(len){
            sketch.line(0, 0, 0, - len);
            sketch.translate(0, -len);
            if(len > 5) {
                sketch.push();
                sketch.rotate(angle);
                branch(len * 0.67);
                sketch.pop();
                sketch.push();
                sketch.rotate(-angle);
                branch(len * 0.67);
                sketch.pop();
            }
        }
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