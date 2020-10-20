import React, { useState } from 'react';

export const Context = React.createContext();
import Project from './components/FolderContents/Project';
import Equipped from './components/FolderContents/Equipped';
import Bookshop from './components/FolderContents/Bookshop';
import About from './components/FolderContents/About';
import Contact from './components/FolderContents/Contact';

export const Provider = (props) => {
    const files = {
        "equipped.js":
            {
                link: "Equipped",
                name: "equipped.js",
                content: <Project component={<Equipped/>}/>
            },
        "bookshop-crutch.js":
            {
                link: "Bookshop-Crutch",
                name: "bookshop-crutch.js",
                content: <Project component={<Bookshop/>}/> 
            }, 
            // {
            //     name: "movie-db.js"
            // }
        "about.java":
            {   
                link: "About",
                name: "about.java",
                content: <Project component={<About/>}/>
            },
        "contact.js": 
            {   
                link: "Contact",
                name: "contact.js",
                content: <Project flexbox={true} component={<Contact/>}/>
            } 
    }

    const folder = {
        "About": [files["about.java"]],
        "Projects": [files["equipped.js"], files["bookshop-crutch.js"]],
        "Contact": [files["contact.js"]],
    }

    const pages = {
        "About": <Project component={<About/>}/>,
        "Bookshop": <Project component={<Bookshop/>}/>,
        "Equipped": <Project component={<Equipped/>}/>,
        "Contact": <Project flexbox={true} component={<Contact/>}/>
    }

    const [ blueScreen, updateBlueScreen ] = useState(false);

    const [ globalState, setGlobalState ] = useState({
        folderLoc: [100, 20],
        filesDisplayed: [{name:"about.java"}],
        fileLoaded: "about.java"
    });

    const [ verticalDisplay, updateDisplay ] = useState(false);
    const saveFolderLoc = (loc) => {
        setGlobalState(prev => {
            return {
                ...prev,
                folderLoc: loc
            }
        })
    }

    const updateRenderedFile = (fileName) => {
        setGlobalState(prev => {
            return {
                ...prev,
                fileLoaded: fileName
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
                pages,
                globalState, 
                files,
                folder,
                verticalDisplay,
                blueScreen,
                updateRenderedFile,
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