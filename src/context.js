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
                link: "Equipped",
                name: "equipped.js"
            },
            {
                link: "Bookshop-Crutch",
                name: "bookshop-crutch.js" 
            }, 
            {
                name: "movie-db.js"
            }
        ],
        "About": [
            {   
                link: "About",
                name: "about.java"
            }],
        "Contact": [
            {   
                link: "Contact",
                name: "contact.js"
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

    return (
        <Context.Provider 
            value={{ 
                globalState, 
                files,
                verticalDisplay,
                updateViewport,
                updateDisplay,
                saveFolderLoc,
                filesFromFolder
             }}
        >
            { props.children }
        </Context.Provider>
    )
}

export const Consumer = Context.Consumer;