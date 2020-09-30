import { useContext } from 'react';
import { storeContext } from 'store';
import { CombinedActionsType, ContextType } from 'store/types';

const DEV_MODE = process.env.NODE_ENV === 'development';

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

export default useStore;
