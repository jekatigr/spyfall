import React, { createContext, useEffect, useReducer } from 'react';
import rootReducer, { SCHEMA_VERSION } from 'store/rootReducer';
import i18n from 'i18n';
import { ContextType } from 'store/types';
import prefixedAsset from 'utils/assetPrefix';
import AudioElement from 'utils/AudioElement';

const DEV_MODE = process.env.NODE_ENV === 'development';

const { savedState = null } = process.browser ? window.localStorage : {};
const savedStateParsed = JSON.parse(savedState);
const { schemaVersion, ...savedStatePure } = savedStateParsed || {};
const savedStateDefenced = savedStateParsed && schemaVersion === SCHEMA_VERSION ? savedStatePure : undefined;
const initialState = rootReducer(savedStateDefenced, { type: '__INIT__' });

const initialLocale = initialState.language;
i18n.locale(initialLocale);

const notification = new AudioElement(prefixedAsset('notification.aac'));

const storeContext = createContext<ContextType>({ state: initialState, i18n, notification, dispatch: () => {} });

const { Provider } = storeContext;

const StoreProvider = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    useEffect(() => {
        if (process.browser) {
            window.localStorage.savedState = JSON.stringify({ schemaVersion: SCHEMA_VERSION, ...state });
        }

        if (DEV_MODE) {
            // eslint-disable-next-line no-console
            console.log('State: ', state);
        }
    }, [state]);

    return <Provider value={{ state, dispatch, i18n, notification }}>{children}</Provider>;
};

export { StoreProvider, storeContext };
