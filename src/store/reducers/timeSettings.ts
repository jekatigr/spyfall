export const INCREASE_ROUND_TIME = 'INCREASE_ROUND_TIME';
export const REDUCE_ROUND_TIME = 'REDUCE_ROUND_TIME';

export const INCREASE_DISCUSSION_TIME = 'INCREASE_DISCUSSION_TIME';
export const REDUCE_DISCUSSION_TIME = 'REDUCE_DISCUSSION_TIME';

const initialState = {
    roundTime: 10,
    discussionTime: 10,
};

export default (state = initialState, action): typeof initialState => {
    const newState = { ...state };
    switch (action.type) {
        case INCREASE_ROUND_TIME:
            return {
                ...state,
                roundTime: newState.roundTime + 1,
            };
        case REDUCE_ROUND_TIME:
            return {
                ...state,
                roundTime: newState.roundTime - 1,
            };
        case INCREASE_DISCUSSION_TIME:
            return {
                ...state,
                discussionTime: newState.discussionTime + 1,
            };
        case REDUCE_DISCUSSION_TIME:
            return {
                ...state,
                discussionTime: newState.discussionTime - 1,
            };
        default:
            return state;
    }
};
