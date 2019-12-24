import React, { useReducer } from 'react';

import StoreContext from 'reducers/storeContext';
import rootReducer from './reducers/rootReducer';

export default function Store(props) {
    const initialState = combineReducers(props.initialValue, { type: '__INIT__' });
    const [state, dispatch] = useReducer(props.combineReducers, initialState);
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {props.children}
        </StoreContext.Provider>
    );
}
