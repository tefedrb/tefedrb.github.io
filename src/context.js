import React, { useState } from 'react';
import useViewPortListener from './components/hooks/useViewportListener';

export const Context = React.createContext();

export const Provider = (props) => {
    // Here is our state that the rest of the app will share
    const [ state, setState ] = useState({});
    const [ verticalDisplay, updateDisplay ] = useState(false);
    // Below are functions that our app state will hold
    const saveSelectedFolderY = (yValue) => {
        setState(prev => {
            return {
                ...prev,
                folderY: yValue
            }
            
        })
    }

    const updateViewport = (viewportXY) => {
        setState(prev => {
            return {
                ...prev,
                viewport: viewportXY 
            }
        })
    }

    const files = {
        "Projects": [
            {name:"equipped.js"},
            {name:"bookshop-crutch.js"}, 
            {name:"movie-db.js"}
        ],
        "About": [{name:"about.java"}],
        "Contact": [{name:"contact.js"}]
    }

    const [ fileOpen, openFile ] = useState(files["About"][0].name);

    const projects = {

    }

    return (
        <Context.Provider 
            value={{ state,
                fileOpen, 
                files,
                projects,
                verticalDisplay,
                updateViewport,
                updateDisplay,
                openFile,
                saveSelectedFolderY,
             }}
        >
            { props.children }
        </Context.Provider>
    )
}

export const Consumer = Context.Consumer;