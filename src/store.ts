import React, { useReducer } from 'react';

import StoreContext from 'reducers/storeContext';
import combineReducers from "./reducers/combineReducers";

export default function Store(props) {
    const initialState = props.rootReducer(props.initialValue, { type: '__INIT__' });
    const [state, dispatch] = useReducer(props.combineReducers, initialState);
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {props.children}
        </StoreContext.Provider>)
}
