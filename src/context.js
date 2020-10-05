import React, { useState } from 'react';

export const Context = React.createContext();

export const Provider = (props) => {
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
            // {
            //     name: "movie-db.js"
            // }
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

    const [ blueScreen, updateBlueScreen ] = useState(false);

    const [ globalState, setGlobalState ] = useState({
        folderLoc: [100, 20],
        filesDisplayed: [{name:"about.java"}]
    });

    const [ verticalDisplay, updateDisplay ] = useState(false);
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
                blueScreen,
                updateViewport,
                updateDisplay,
                saveFolderLoc,
                filesFromFolder,
                updateBlueScreen
             }}
        >
            { props.children }
        </Context.Provider>
    )
}

export const Consumer = Context.Consumer;