import { createContext, useContext, useState, useEffect } from 'react'
import AuthContext from '../auth'
import { useNavigate } from 'react-router-dom';
import api from '../api'

// THIS IS THE CONTEXT WE'LL USE TO SHARE OUR STORE
export const GlobalStoreContext = createContext({});

export const GlobalStoreActionType = {
    CREATE_LOCATION: "CREATE_LOCATION",
    CREATE_TRIVIA_QUESTION: "CREATE_TRIVIA_QUESTION",
    GET_TRIVIA_QUESTION: "GET_TRIVIA_QUESTION"
}


function GlobalStoreContextProvider(props) {
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate()

    // THESE ARE ALL THE THINGS OUR DATA STORE WILL MANAGE
    const [store, setStore] = useState({
        locations: [],
        triviaQuestions: [],
        currentTriviaQuestion: []
    });

    const storeReducer = (action) => {
        const {type, payload} = action

        switch(type) {
            case GlobalStoreActionType.CREATE_LOCATION:
                setStore({
                    locations: payload.locations,
                    triviaQuestions: store.triviaQuestions,
                    currentTriviaQuestion: store.currentTriviaQuestion
                })
                break;

            case GlobalStoreActionType.CREATE_TRIVIA_QUESTION:
                setStore({
                    locations: store.locations,
                    triviaQuestions: payload.triviaQuestions,
                    currentTriviaQuestion: store.currentTriviaQuestion
                })
            
            case GlobalStoreActionType.GET_TRIVIA_QUESTION:
                setStore({
                    locations: store.locations,
                    triviaQuestions: store.triviaQuestions,
                    currentTriviaQuestion: payload.currentTriviaQuestion
                })

            default:
                return store;
        }
    }

    store.createLocation = async function (location) {
        try {
            let response = await api.createLocation(location)
            if(response.status == 200) {
                store.locations.push(response.data.location)

                storeReducer({
                    type: GlobalStoreActionType.CREATE_TRIVIA_QUESTION,
                    payload: {
                        locations: store.locations
                    }
                })
            }
        }
        catch (err) {
            console.log(err)
        }

    }

    store.createTriviaQuestion = async function (triviaQuestion) {
        try {
            let response = await api.createTriviaQuestion(triviaQuestion) 

            if(response.status == 200) {
                store.triviaQuestions.push(response.data.triviaQuestion)
                storeReducer({
                    type: GlobalStoreActionType.GET_LOGGED_IN,
                    payload: {
                        triviaQuestions: store.triviaQuestions
                    }
                })
            }
        }
        catch(err) {
            console.log(err)
        }
    }

    store.getTriviaQuestion = async function () {
        try {
            let response = await api.getTriviaQuestion() 

            if(response.status == 200) {
                console.log(response.data.triviaQuestion);
                storeReducer({
                    type: GlobalStoreActionType.GET_TRIVIA_QUESTION,
                    payload: {
                        currentTriviaQuestion: response.data.triviaQuestion
                    }
                })
            }
        }
        catch(err) {
            console.log(err)
        }
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