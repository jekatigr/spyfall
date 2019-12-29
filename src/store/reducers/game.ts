export const SET_GAME_STATE_TO_ROLES_DISTRIBUTIONS = 'SET_GAME_STATE_TO_ROLES_DISTRIBUTIONS';
export const SET_GAME_STATE_TO_ROUND = 'SET_GAME_STATE_TO_ROUND';
export const SET_GAME_STATE_TO_DISCUSSION = 'SET_GAME_STATE_TO_DISCUSSION';
export const SET_GAME_STATE_TO_RESULT = 'SET_GAME_STATE_TO_RESULT';

export const SET_ROUND_TIME = 'SET_ROUND_TIME';
export const SET_START_ROUND = 'SET_START_ROUND';

export const SET_DISCUSSION_TIME = 'SET_DISCUSSION_TIME';
export const SET_START_DISCUSSION = 'SET_START_DISCUSSION';

export const GAME_STATES = {
    ROLES_DISTRIBUTION: 'ROLES_DISTRIBUTION',
    ROUND: 'ROUND',
    DISCUSSION: 'DISCUSSION',
    IDENTIFY_SPIES: 'IDENTIFY_SPIES',
    RESULTS: 'RESULTS',
};

const initialState = {
    gameState: GAME_STATES.ROLES_DISTRIBUTION,
    roundInfo: {
        roundTime: null,
        startRound: null,
    },
    discussion: {
        discussionTime: null,
        startDiscussion: null,
    },
    spies: [],
    location: '',
};

export default (state = initialState, action): typeof initialState => {
    switch (action.type) {
        case SET_GAME_STATE_TO_ROLES_DISTRIBUTIONS:
            return {
                ...state,
                gameState: GAME_STATES.ROLES_DISTRIBUTION,
            };
        case SET_GAME_STATE_TO_ROUND:
            return {
                ...state,
                gameState: GAME_STATES.ROUND,
            };
        case SET_GAME_STATE_TO_DISCUSSION:
            return {
                ...state,
                gameState: GAME_STATES.DISCUSSION,
            };
        case SET_GAME_STATE_TO_RESULT:
            return {
                ...state,
                gameState: GAME_STATES.RESULTS,
            };
        default:
            return state;
    }
};
