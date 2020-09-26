import React, { useEffect, useReducer, createContext, Dispatch, useContext } from 'react';
import rootReducer from 'store/rootReducer';
import { CombinedActionsType, ContextType, StateType } from 'store/types';

const DEV_MODE = process.env.NODE_ENV === 'development';

const { savedState = null } = process.browser ? window.localStorage : {};
const initialState = rootReducer(JSON.parse(savedState) || undefined, { type: '__INIT__' });

const storeContext = createContext<{
    state: StateType;
    dispatch: Dispatch<CombinedActionsType>;
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

const useStore = (): ContextType => {
    const { state, dispatch: dispatchWrapped } = useContext(storeContext);

    const dispatch = (action: CombinedActionsType): void => {
        if (DEV_MODE) {
            // eslint-disable-next-line no-console
            console.log('Action: ', action);
        }
        dispatchWrapped(action);
    };

    return { state, dispatch };
};

export { StoreProvider, useStore };
