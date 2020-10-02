import React, { useState } from 'react';
import About from './components/Projects/About';
import Equipped from './components/Projects/Equipped';
import Bookshop from './components/Projects/Bookshop';
import { ProjLink } from './components/Projects/ProjectCSS';

export const Context = React.createContext();

export const Provider = (props) => {
    // Here is our state that the rest of the app will share..
    const files = {
        "Projects": [
            {
                name:"equipped.js", 
                data: <Equipped />, 
                source: <ProjLink offset={true}>[ View Source ]</ProjLink>,
                live: <ProjLink offset={true}>[ View Live ]</ProjLink>
            },
            {
                name:"bookshop-crutch.js", 
                data: <Bookshop />, 
                source: <ProjLink offset={true}>[ View Source ]</ProjLink>,
                live: <ProjLink offset={true}>[ View Live ]</ProjLink>
            }, 
            {
                name:"movie-db.js"
            }
        ],
        "About": [
            {
                name:"about.java", 
                data: <About />, 
                flexbox: true
            }],
        "Contact": [
            {
                name:"contact.js"
            }
        ]
    }

    const [ globalState, setGlobalState ] = useState({
        folderLoc: [100, 20],
        filesDisplayed: [{name:"about.java"}]
    });

    const [ verticalDisplay, updateDisplay ] = useState(false);
    // Below are functions that our app state will hold
    const saveFolderLoc = (loc) => {
        console.log(loc, "LOC");
        setGlobalState(prev => {
            return {
                ...prev,
                folderLoc: loc
            }
        })
    }

    const filesFromFolder = (files) => {
        setGlobalState(prev => {
            return {
                ...prev,
                filesDisplayed: files
            }
        })
    }
    
    const updateViewport = (viewportXY) => {
        setGlobalState(prev => {
            return {
                ...prev,
                viewport: viewportXY 
            }
        })
    }

    const [ fileOpen, openFile ] = useState(files["About"][0]);

    return (
        <Context.Provider 
            value={{ 
                globalState,
                fileOpen, 
                files,
                verticalDisplay,
                updateViewport,
                updateDisplay,
                openFile,
                saveFolderLoc,
                filesFromFolder
             }}
        >
            { props.children }
        </Context.Provider>
    )
}

export const Consumer = Context.Consumer;