import React, { useContext, useState, useRef, useEffect } from 'react';
import { Context } from '../../context';
import useViewportListener from '../hooks/useViewportListener';
import Project from '../Projects/Project';
import Equipped from '../Projects/Equipped';
import Bookshop from '../Projects/Bookshop'
import About from '../Projects/About';
import Contact from '../Projects/Contact';
import { ProjLink } from '../Projects/ProjectCSS';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import { GraphicWrapper, GraphicHeadWrapper, GraphicHead, GraphicFold, GraphicBody }
    from './FileCss';

const OpenFile = (props) => {
    const { updateDisplay, verticalDisplay, updateViewport, files } = useContext(Context);
    const [ loaded, confirmLoaded ] = useState(false);
    const [ contentLoaded, saveContent ] = useState("");
       // Might want to consider inserting an if/else statement to avoid running
    // useEffect more than needed.
    let viewport = useViewportListener();
    const headerEl = useRef("75");

    const getDynamicFoldHeight = () => {
        return headerEl.current.offsetHeight;
    }

    useEffect(() => {
        // If viewport width is less than 950
        // We want to check to see if the file name changed - then re-render
        // we want to re-render because our fold gets out of place otherwise
        
        if(viewport?.[0] > 950 && verticalDisplay){
            updateDisplay(false);
        }
        // Might actually want to use useLayouteffect here because of flash
        if(viewport?.[0] <= 950 && !verticalDisplay){
            updateDisplay(true);
            updateViewport(viewport);
        }
        if(contentLoaded !== props?.content?.props?.file?.name){
            saveContent(props?.content?.props?.file?.name);
        }
        if(!loaded){ 
            confirmLoaded(true);
        }
    }, [viewport, verticalDisplay, loaded, props.content, props?.content?.props?.file?.name]);

    return (
        <GraphicWrapper 
            name={"file GraphicWrapper"} 
            size={props.size} 
        >
            <GraphicHeadWrapper 
                ref={headerEl} 
                name={"GraphicHeadWrapper"}
                foldSize={props.foldSize} 
            >
                <GraphicHead 
                    name={"head"}
                >
                    <Switch>
                        <Route path="/Bookshop-Crutch">
                            <ProjLink marginL={true}>[ View Source ]</ProjLink>
                            <ProjLink marginL={true}>[ View Live ]</ProjLink>
                        </Route>
                        <Route path="/Equipped">
                            <ProjLink marginL={true}>[ View Source ]</ProjLink>
                            <ProjLink marginL={true}>[ View Live ]</ProjLink>
                        </Route>
                    </Switch>
                </GraphicHead>
                <GraphicFold 
                    name={"flap"}
                    foldSize={props.foldSize}
                    dynamicHeight={getDynamicFoldHeight()}
                />
            </GraphicHeadWrapper>
            <GraphicBody
                name={"GraphicBody"} 
                size={props.size} 
            > 
                <Switch>
                    <Route path="/About">
                        <Project flexbox={true} component={<About/>}/>
                    </Route>
                    <Route path="/Bookshop-Crutch">
                        <Project component={<Bookshop/>}/>
                    </Route>
                    <Route path="/Equipped">
                        <Project component={<Equipped/>}/>
                    </Route>
                    <Route path="/Contact">
                        <Project flexbox={true} component={<Contact/>}/>
                    </Route>
                    <Route path="/">
                        <Project flexbox={true} component={<About/>}/>
                    </Route>
                </Switch>
            </GraphicBody>
        </GraphicWrapper>
    )
}

export default OpenFile