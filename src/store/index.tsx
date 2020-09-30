import React, { useEffect, useReducer, createContext } from 'react';
import rootReducer from 'store/rootReducer';
import { ContextType } from 'store/types';

const DEV_MODE = process.env.NODE_ENV === 'development';

const { savedState = null } = process.browser ? window.localStorage : {};
const initialState = rootReducer(JSON.parse(savedState) || undefined, { type: '__INIT__' });

const storeContext = createContext<ContextType>({ state: initialState, dispatch: () => {} });

const { Provider } = storeContext;

const StoreProvider = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    useEffect(() => {
        if (process.browser) {
            window.localStorage.savedState = JSON.stringify(state);
        }

        if (DEV_MODE) {
            // eslint-disable-next-line no-console
            console.log('State: ', state);
        }
    }, [state]);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StoreProvider, storeContext };
