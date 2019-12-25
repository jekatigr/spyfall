export const SET_GAME_STATE_TO_ROLES_DISTRIBUTIONS = 'SET_GAME_STATE_TO_ROLES_DISTRIBUTIONS';
export const SET_GAME_STATE_TO_ROUND = 'SET_GAME_STATE_TO_ROUND';
export const SET_GAME_STATE_TO_DISCUSSION = 'SET_GAME_STATE_TO_DISCUSSION';
export const SET_GAME_STATE_TO_RESULT = 'SET_GAME_STATE_TO_RESULT';

export const SET_ROUND_TIME = 'SET_ROUND_TIME';
export const SET_START_ROUND = 'SET_START_ROUND';

export const SET_DISCUSSION_TIME = 'SET_DISCUSSION_TIME';
export const SET_START_DISCUSSION = 'SET_START_DISCUSSION';

const GAME_STATES = {
    ROLES_DISTRIBUTION: 'ROLES_DISTRIBUTION',
    ROUND: 'ROUND',
    DISCUSSION: 'DISCUSSION',
    IDENTIFY_SPIES: 'IDENTIFY_SPIES',
    RESULTS: 'RESULTS',
    roundInfo: {
        roundTime: null,
        startRound: null,
    },
    discussion: {
        discussionTime: null,
        startDiscussion: null,
    },
};

const initialState = {
    game: GAME_STATES.ROLES_DISTRIBUTION,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_GAME_STATE_TO_ROLES_DISTRIBUTIONS:
            return {
                ...state,
                game: GAME_STATES.ROLES_DISTRIBUTION,
            };
        case SET_GAME_STATE_TO_ROUND:
            return {
                ...state,
                game: GAME_STATES.ROUND,
            };
        case SET_GAME_STATE_TO_DISCUSSION:
            return {
                ...state,
                game: GAME_STATES.DISCUSSION,
            };
        case SET_GAME_STATE_TO_RESULT:
            return {
                ...state,
                game: GAME_STATES.RESULTS,
            };
        default: return state;
    }
};
