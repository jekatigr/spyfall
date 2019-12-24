import { createContext } from 'react';
import combineReducers from './rootReducer';

const storeContext = createContext<{
    state: typeof initialState;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

export default storeContext;
