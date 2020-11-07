import React, { useContext, useState, useRef, useEffect } from 'react';
import { Context } from '../../context';
import useViewportListener from '../hooks/useViewportListener';
// import { ProjLink } from '../FolderContents/ProjectCSS';

import { GraphicBody } from './FileCss';

// const LinkWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-left: 75px;
// `

const OpenFile = (props) => {
    const { isVerticalDisplay, verticalDisplay, updateViewport, updateBlueScreen, blueScreen, files, globalState } = useContext(Context);
    
    const [ loaded, confirmLoaded ] = useState(false);
    const [ contentLoaded, saveContent ] = useState("");
       // Might want to consider inserting an if/else statement to avoid running
    // useEffect more than needed.
    let viewport = useViewportListener();
    // const headerEl = useRef("75");

    // const getDynamicFoldHeight = () => {
    //     return headerEl.current.offsetHeight;
    // }

    useEffect(() => {
        // If viewport width is less than 950
        // We want to check to see if the file name changed - then re-render
        // we want to re-render because our fold gets out of place otherwise
        console.log(viewport, "viewport")
        
        if((viewport?.[0] > 950 && verticalDisplay) || (viewport?.[0] <= 950 && viewport?.[1] <= 500 && verticalDisplay)){
            isVerticalDisplay(false);
        }
        // Might actually want to use useLayouteffect here because of flash
        if(viewport?.[0] <= 950 && viewport?.[1] >= 500 && !verticalDisplay){
            isVerticalDisplay(true);
            updateViewport(viewport);
        }
        // here I can use logic to give a blue screen.
        if(viewport?.[0] <= 305 && !blueScreen){
            // activate blue screen
            updateBlueScreen(true);
        }
        if(contentLoaded !== props?.content?.props?.file?.name){
            saveContent(props?.content?.props?.file?.name);
        }
        if(!loaded){ 
            confirmLoaded(true);
        }
    }, [viewport, verticalDisplay, loaded, props?.content, props?.content?.props?.file?.name]);

    return (
        // <GraphicWrapper 
        //     name={"file GraphicWrapper"} 
        //     size={props.size} 
        // >
        //     <GraphicHeadWrapper 
        //         ref={headerEl} 
        //         name={"GraphicHeadWrapper"}
        //         foldSize={props.foldSize} 
        //     >
        //         <GraphicHead 
        //             name={"head"}
        //         >
        //             <LinkWrap>
        //                 <Switch>
        //                     <Route path="/Bookshop-Crutch">
        //                         <ProjLink >[ View Source ]</ProjLink>
        //                         <ProjLink >[ View Live ]</ProjLink>
        //                     </Route>
        //                     <Route path="/Equipped">
        //                         <ProjLink >[ View Source ]</ProjLink>
        //                         <ProjLink >[ View Live ]</ProjLink>
        //                     </Route>
        //                 </Switch>
        //             </LinkWrap>
        //         </GraphicHead>
        //         <GraphicFold 
        //             name={"flap"}
        //             foldSize={props.foldSize}
        //             dynamicHeight={getDynamicFoldHeight()}
        //         />
        //     </GraphicHeadWrapper>
        // TOOK OUT THIS CODE BECAUSE REACT-ROUTER DOESN'T WORK PROPERLY
        // WITH GITHUB PAGES
        // <Switch>
        //             <Route path="/About">
        //                 <Project component={<About/>}/>
        //             </Route>
        //             <Route path="/Bookshop-Crutch">
        //                 <Project component={<Bookshop/>}/>
        //             </Route>
        //             <Route path="/Equipped">
        //                 <Project component={<Equipped/>}/>
        //             </Route>
        //             <Route path="/Contact">
        //                 <Project flexbox={true} component={<Contact/>}/>
        //             </Route>
        //             <Route path="/">
        //                 <Project component={<About/>}/>
        //             </Route>
        //         </Switch>
            <GraphicBody
                name={"GraphicBody"} 
                size={props.size} 
            > 
                {files[globalState.fileLoaded]?.content || ""}
            </GraphicBody>
        // </GraphicWrapper>
    )
}

export default OpenFile