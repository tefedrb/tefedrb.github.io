import React, { useState } from 'react';

export const Context = React.createContext();
import Project from './components/FolderContents/Project';
import Equipped from './components/FolderContents/Equipped';
import Bookshop from './components/FolderContents/Bookshop';
import About from './components/FolderContents/About';
import Contact from './components/FolderContents/Contact';

export const Provider = (props) => {
    const files = {
        "equipped.java":
            {
                link: "Equipped",
                name: "equipped.java",
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
        "about.js":
            {   
                link: "About",
                name: "about.js",
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
        "About": [files["about.js"]],
        "Projects": [files["equipped.java"], files["bookshop-crutch.js"]],
        "Contact": [files["contact.js"]],
    }

    const [ blueScreen, updateBlueScreen ] = useState(false);

    const [ isMobileHack, signalMobileHack ] = useState(false);

    
    const [ globalState, setGlobalState ] = useState({
        folderLoc: [100, 20],
        filesDisplayed: [{name: "about.js"}],
        fileLoaded: "about.js",
        monitorPower: true
    });

    const [ verticalDisplay, isVerticalDisplay ] = useState(false);

    const globalStateUpdater = (prop, value, switcher) => {
        if(switcher){
            value = !globalState[prop];
        }
        setGlobalState(prev => {
            return {
                ...prev,
                [prop]: value
            }
        })
    }

    const saveStateForMobileHack = (item, value) => {
        localStorage.setItem(`${item}`, `${value}`);
    }

    const checkStorageForMobileHack = () => {
        let mobileHack = localStorage.getItem('isMobileHack');
        if(mobileHack === 'true'){
            return true;
        } else {
            return false;
        }
    }

    const rehydrateStateFromStorage = (item) => {
        return localStorage.getItem(item);
    }

    return (
        <Context.Provider 
            value={{ 
                globalState, 
                files,
                folder,
                verticalDisplay,
                blueScreen,
                isMobileHack,
                globalStateUpdater,
                rehydrateStateFromStorage,
                saveStateForMobileHack,
                checkStorageForMobileHack,
                signalMobileHack,
                isVerticalDisplay,
                updateBlueScreen
             }}
        >
            { props.children }
        </Context.Provider>
    )
}

export const Consumer = Context.Consumer;