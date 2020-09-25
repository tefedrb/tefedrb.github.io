import React, { useState } from 'react';

export const Context = React.createContext();

export const Provider = (props) => {
    // Here is our state that the rest of the app will share
    const [ globalState, setGlobalState ] = useState({folder: [100, 20]});
    const [ verticalDisplay, updateDisplay ] = useState(false);
    // Below are functions that our app state will hold
    const saveFolderLoc = (loc) => {
        console.log(loc, "LOC");
        setGlobalState(prev => {
            return {
                ...prev,
                folder: loc
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
            value={{ globalState,
                fileOpen, 
                files,
                projects,
                verticalDisplay,
                updateViewport,
                updateDisplay,
                openFile,
                saveFolderLoc,
             }}
        >
            { props.children }
        </Context.Provider>
    )
}

export const Consumer = Context.Consumer;