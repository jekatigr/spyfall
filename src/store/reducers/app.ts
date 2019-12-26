export const SET_APP_STATE_TO_SETTINGS = 'SET_APP_STATE_TO_SETTINGS';
export const SET_APP_STATE_TO_GAME = 'SET_APP_STATE_TO_GAME';

export const APP_STATES = {
    SETTINGS: 'SETTINGS',
    GAME: 'GAME',
};

const initialState = {
    appState: APP_STATES.SETTINGS,
};

export default (state = initialState, action): typeof initialState => {
    switch (action.type) {
        case SET_APP_STATE_TO_SETTINGS:
            return {
                ...state,
                appState: APP_STATES.SETTINGS,
            };
        case SET_APP_STATE_TO_GAME:
            return {
                ...state,
                appState: SET_APP_STATE_TO_GAME,
            };
        default: return state;
    }
};
