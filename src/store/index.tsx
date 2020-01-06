import React, { useEffect, useReducer, createContext, Dispatch, useContext } from 'react';
import rootReducer from 'store/reducers';

const DEV_MODE = process.env.NODE_ENV === 'development';

const { savedState = null } = process.browser ? window.localStorage : {};
const initialState = rootReducer(JSON.parse(savedState) || undefined, { type: '__INIT__' });

/* eslint-disable @typescript-eslint/no-explicit-any */
const storeContext = createContext<{
    state: typeof initialState;
    dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

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

type UseStoreType = {
    state: typeof initialState;
    dispatch(type: string, payload?: any): void;
};

const useStore = (): UseStoreType => {
    const { state, dispatch: dispatchWrapped } = useContext(storeContext);

    const dispatch = (type: string, payload?: any): void => {
        const action = { type, ...payload };
        if (DEV_MODE) {
            // eslint-disable-next-line no-console
            console.log('Action: ', action);
        }
        dispatchWrapped(action);
    };

    return { state, dispatch };
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export { StoreProvider, useStore };
