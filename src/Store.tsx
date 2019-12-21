import React, { createContext, useReducer, Dispatch } from 'react';

export const SET_APP_STATE_TO_SETTINGS = 'SET_APP_STATE_TO_SETTINGS';
export const SET_APP_STATE_TO_GAME = 'SET_APP_STATE_TO_GAME';

export const SET_SETTINGS_STATE_TO_START_SCREEN = 'SET_SETTINGS_STATE_TO_START_SCREEN';
export const SET_SETTINGS_STATE_TO_PLAYERS = 'SET_SETTINGS_STATE_TO_PLAYERS';
export const SET_SETTINGS_STATE_TO_SPIES = 'SET_SETTINGS_STATE_TO_SPIES';
export const SET_SETTINGS_STATE_TO_LOCATIONS = 'SET_SETTINGS_STATE_TO_LOCATIONS';
export const SET_SETTINGS_STATE_TO_EXTRA_SETTINGS = 'SET_SETTINGS_STATE_TO_EXTRA_SETTINGS';

export const SET_GAME_STATE_TO_ROLES_DISTRIBUTIONS = 'SET_GAME_STATE_TO_ROLES_DISTRIBUTIONS';
export const SET_GAME_STATE_TO_PLAY = 'SET_GAME_STATE_TO_PLAY';
export const SET_GAME_STATE_TO_DISCUSSION = 'SET_GAME_STATE_TO_DISCUSSION';
export const SET_GAME_STATE_TO_RESULT = 'SET_GAME_STATE_TO_RESULT';

export const SET_BASIC_LOCATIONS_TYPE = 'SET_BASIC_LOCATIONS_TYPE';
export const SET_CUSTOM_LOCATIONS_TYPE = 'SET_CUSTOM_LOCATIONS_TYPE';

export const SET_ROUND_TIME = 'SET_ROUND_TIME';
export const SET_START_ROUND = 'SET_START_ROUND';

export const SET_DISCUSSION_TIME = 'SET_DISCUSSION_TIME';
export const SET_START_DISCUSSION = 'SET_START_DISCUSSION';

export const UPDATE_PLAYERS_NUMBER = 'UPDATE_PLAYERS_NUMBER';

export const APP_STATES = {
    SETTINGS: 0,
    GAME: 1,
};

export const SETTINGS_STATES = {
    START_SCREEN: 0,
    PLAYERS: 1,
    SPIES: 2,
    LOCATIONS: 3,
    EXTRA_SETTINGS: 4,
};

const GAME_STATES = {
    ROLES_DISTRIBUTION: 0,
    PLAY: 1,
    DISCUSSION: 2,
    IDENTIFY_SPIES: 3,
    RESULTS: 4,
};

const LOCATIONS_TYPES = {
    BASIC: 0,
    CUSTOM: 1,
};

const initialState = {
    appState: APP_STATES.SETTINGS,
    // appState: APP_STATES.GAME,
    settingsState: SETTINGS_STATES.START_SCREEN,
    gameState: GAME_STATES.ROLES_DISTRIBUTION,
    players: [],
    roundInfo: {
        roundTime: null,
        startRound: null,
    },
    discussion: {
        discussionTime: null,
        startDiscussion: null,
    },
    spies: {
        count: null,
        spyNames: [], // array of player indexes?
        spiesKnowEachOther: false,
    },
    locationType: LOCATIONS_TYPES.BASIC,
    customLocations: [],
};

export const StoreContext = createContext<{
    state: typeof initialState;
    dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

const reducer = (state, action) => {
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
        case SET_SETTINGS_STATE_TO_START_SCREEN:
            return {
                ...state,
                settingsState: SETTINGS_STATES.START_SCREEN,
            };
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
        case SET_GAME_STATE_TO_ROLES_DISTRIBUTIONS:
            return {
                ...state,
                gameState: GAME_STATES.ROLES_DISTRIBUTION,
            };
        case SET_ROUND_TIME:
            return {
                ...state,
                roundInfo: {
                    ...state.roundInfo,
                    roundTime: action.time,
                },
            };
        case UPDATE_PLAYERS_NUMBER:
            return {
                ...state,
                players: action.players,
            };

        default:
            return state;
    }
};

export const StoreContainer = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};
