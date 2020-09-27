import React, { useState } from 'react';
import About from './components/Projects/About';
import Equipped from './components/Projects/Equipped';

export const Context = React.createContext();

export const Provider = (props) => {
    // Here is our state that the rest of the app will share
    const files = {
        "Projects": [
            {name:"equipped.js", data: <Equipped />},
            {name:"bookshop-crutch.js"}, 
            {name:"movie-db.js"}
        ],
        "About": [{name:"about.java", data: <About />, flexbox: true}],
        "Contact": [{name:"contact.js"}]
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

    const projects = {

    }

    return (
        <Context.Provider 
            value={{ 
                globalState,
                fileOpen, 
                files,
                projects,
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