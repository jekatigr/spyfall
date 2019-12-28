import React, { useReducer, createContext, Dispatch, useContext } from 'react';
import rootReducer from 'store/reducers';

const initialState = rootReducer(undefined, { type: '__INIT__' });

/* eslint-disable @typescript-eslint/no-explicit-any */
const storeContext = createContext<{
    state: typeof initialState;
    dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

const { Provider } = storeContext;

const StoreProvider = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

type UseStoreType = {
    state: typeof initialState;
    dispatch(type: string, payload?: any): void;
};

const useStore = (): UseStoreType => {
    const { state, dispatch: dispatchWrapped } = useContext(storeContext);

    const dispatch = (type: string, payload?: any): void => {
        dispatchWrapped({ type, ...payload });
    };

    return { state, dispatch };
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export { StoreProvider, useStore };
