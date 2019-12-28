export const SET_SETTINGS_STATE_TO_PLAYERS = 'SET_SETTINGS_STATE_TO_PLAYERS';
export const SET_SETTINGS_STATE_TO_SPIES = 'SET_SETTINGS_STATE_TO_SPIES';
export const SET_SETTINGS_STATE_TO_LOCATIONS = 'SET_SETTINGS_STATE_TO_LOCATIONS';
export const SET_SETTINGS_STATE_TO_EXTRA_SETTINGS = 'SET_SETTINGS_STATE_TO_EXTRA_SETTINGS';

export const SETTINGS_STATES = {
    PLAYERS: 'PLAYERS',
    SPIES: 'SPIES',
    LOCATIONS: 'LOCATIONS',
    EXTRA_SETTINGS: 'EXTRA_SETTINGS',
};

const initialState = {
    settingsState: SETTINGS_STATES.PLAYERS,
};

export default (state = initialState, action): typeof initialState => {
    switch (action.type) {
        case SET_SETTINGS_STATE_TO_PLAYERS:
            return {
                ...state,
                settingsState: SETTINGS_STATES.PLAYERS,
            };
        case SET_SETTINGS_STATE_TO_SPIES:
            return {
                ...state,
                settingsState: SETTINGS_STATES.SPIES,
            };
        case SET_SETTINGS_STATE_TO_LOCATIONS:
            return {
                ...state,
                settingsState: SETTINGS_STATES.LOCATIONS,
            };
        case SET_SETTINGS_STATE_TO_EXTRA_SETTINGS:
            return {
                ...state,
                settingsState: SETTINGS_STATES.EXTRA_SETTINGS,
            };
        default:
            return state;
    }
};
