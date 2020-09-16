import React, { useState } from 'react';

export const Context = React.createContext();

export const Provider = (props) => {
    // Here is our state that the rest of the app will share
    const [ state, setState ] = useState({});
    const [ filePositions, updatePositions ] = useState({});
    // Below are functions that our app state will hold
    const saveSelectedFolderY = (yValue) => {
        setState(prev => {
            return {
                ...prev,
                folderY: yValue
            }
            
        })
    }

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