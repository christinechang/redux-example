import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';  // basic
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"; // middleware


export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools (crazy looking)
    return createStore(
        rootReducer,   
        initialState,  
        // middleware warns us if we accidentally mutate Redux state
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
        // needs parens ! - function to be executed
    );
}

// redux middleware enhances functionality