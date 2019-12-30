import { combineReducers } from 'redux';
import spies from 'store/reducers/settings/spies';
import locations from 'store/reducers/settings/locations';
import playersInfo from 'store/reducers/settings/playersInfo';
import timeSettings from 'store/reducers/settings/timeSettings';

export const SET_SETTINGS_PHASE_TO_PLAYERS = 'SET_SETTINGS_PHASE_TO_PLAYERS';
export const SET_SETTINGS_PHASE_TO_SPIES = 'SET_SETTINGS_PHASE_TO_SPIES';
export const SET_SETTINGS_PHASE_TO_LOCATIONS = 'SET_SETTINGS_PHASE_TO_LOCATIONS';
export const SET_SETTINGS_PHASE_TO_TIME_SETTINGS = 'SET_SETTINGS_PHASE_TO_TIME_SETTINGS';

export const SETTINGS_PHASES = {
    PLAYERS: 'PLAYERS',
    SPIES: 'SPIES',
    LOCATIONS: 'LOCATIONS',
    TIME_SETTINGS: 'TIME_SETTINGS',
};

const initialState = SETTINGS_PHASES.PLAYERS;

const settingsReducer = (state = initialState, action): typeof initialState => {
    switch (action.type) {
        case SET_SETTINGS_PHASE_TO_PLAYERS:
            return SETTINGS_PHASES.PLAYERS;
        case SET_SETTINGS_PHASE_TO_SPIES:
            return SETTINGS_PHASES.SPIES;
        case SET_SETTINGS_PHASE_TO_LOCATIONS:
            return SETTINGS_PHASES.LOCATIONS;
        case SET_SETTINGS_PHASE_TO_TIME_SETTINGS:
            return SETTINGS_PHASES.TIME_SETTINGS;
        default:
            return state;
    }
};

export default combineReducers({
    phase: settingsReducer,
    spies,
    locations,
    playersInfo,
    timeSettings,
});
