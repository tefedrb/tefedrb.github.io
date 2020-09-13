import React, { useState } from 'react';

export const Context = React.createContext();

export const Provider = (props) => {
    // Here is our state that the rest of the app will share
    const [ state, setState ] = useState({});
    // Below are functions that our app state will hold
    const saveSelectedFolderY = (yValue) => {
        setState({
            folderY: yValue
        })
    }

    return (
        <Context.Provider value={{ state, saveSelectedFolderY }}>
            { props.children }
        </Context.Provider>
    )
}

export const Consumer = Context.Consumer;