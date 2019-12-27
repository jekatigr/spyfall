import React, { useReducer, createContext, Dispatch } from 'react';
import rootReducer from 'store/reducers';

const initialState = rootReducer(undefined, { type: '__INIT__' });

const storeContext = createContext<{
    state: typeof initialState;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

const { Provider } = storeContext;

const StoreProvider = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { storeContext, StoreProvider };
