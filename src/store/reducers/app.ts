export const SET_APP_STATE_TO_START_SCREEN = 'SET_APP_STATE_TO_START_SCREEN';
export const SET_APP_STATE_TO_RULES = 'SET_APP_STATE_TO_RULES';
export const SET_APP_STATE_TO_SETTINGS = 'SET_APP_STATE_TO_SETTINGS';
export const SET_APP_STATE_TO_GAME = 'SET_APP_STATE_TO_GAME';

export const APP_STATES = {
    START_SCREEN: 'START_SCREEN',
    RULES: 'RULES',
    SETTINGS: 'SETTINGS',
    GAME: 'GAME',
};

const initialState = {
    appState: APP_STATES.START_SCREEN,
};

const appReducer = (state = initialState, action): typeof initialState => {
    switch (action.type) {
        case SET_APP_STATE_TO_START_SCREEN:
            return {
                ...state,
                appState: APP_STATES.START_SCREEN,
            };
        case SET_APP_STATE_TO_RULES:
            return {
                ...state,
                appState: APP_STATES.RULES,
            };
        case SET_APP_STATE_TO_SETTINGS:
            return {
                ...state,
                appState: APP_STATES.SETTINGS,
            };
        case SET_APP_STATE_TO_GAME:
            return {
                ...state,
                appState: APP_STATES.GAME,
            };
        default:
            return state;
    }
};

export default appReducer;
