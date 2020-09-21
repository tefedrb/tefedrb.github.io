import React, { useState } from 'react';
import Project from './components/Project';

export const Context = React.createContext();

export const Provider = (props) => {
    // Here is our state that the rest of the app will share
    const [ state, setState ] = useState({});
    const [ filePositions, updatePositions ] = useState({});
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

    const files = {
        "Projects": [{name:"equipped.js"},{name:"bookshop-crutch.js"}, {name:"movie-db.js"}],
        "About": [{name:"about.java"}],
        "Contact": [{name:"contact.js"}]
    }

    const projects = {

    }

    const [ fileOpen, openFile ] = useState(files["About"][0].name);

    const saveFileX = (xValue) => {
        setState(prev => {
            return {
                ...prev,
                xValue: xValue
            }
        })
    }

    const saveElementPosition = (elPos) => {
        // We need to store a new key value in the state here and return the key
        // for future reference in it's own state.
        updatePositions( prev => {
            return {
                ...prev,
                
            }
        })
    }

    const updateElementPosition = (elKey) => {
        // Using the key stored in the el, update the value of the el position
    }

    return (
        <Context.Provider 
            value={{ state,
                fileOpen, 
                files,
                projects,
                verticalDisplay,
                updateDisplay,
                openFile,
                saveSelectedFolderY, 
                saveFileX, 
                saveElementPosition, 
                updateElementPosition }}
        >
            { props.children }
        </Context.Provider>
    )
}

export const Consumer = Context.Consumer;