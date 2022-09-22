import { createContext, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import DBManager from '../db/DBManager';

// THIS IS THE CONTEXT WE'LL USE TO SHARE OUR STORE
export const GlobalStoreContext = createContext({});

function GlobalStoreContextProvider(props) {
    // THESE ARE ALL THE THINGS OUR DATA STORE WILL MANAGE
    const [store, setStore] = useState({
        
    });

    let db = new DBManager();
    let currentGame = "";

    store.saveGame = function(game) {
        db.mutationCreateGame(game);
    }

    store.getGames = function() {
        return db.mutationGetAllGames();
    }

    store.getGameByKey = function(key) {
        return db.queryGetGame(key);
    }

    store.getCurrentGame = function() {
        return currentGame;
    }

    store.setCurrentGame = function(newGame) {
        currentGame = newGame;
    }

    store.deleteGame = function(gameTitle) {
        return db.mutationDeleteGame(gameTitle);
    }


    
    return (
        <GlobalStoreContext.Provider value={{
            store
        }}>
            {props.children}
        </GlobalStoreContext.Provider>
    );

}

export default GlobalStoreContext;
export { GlobalStoreContextProvider };