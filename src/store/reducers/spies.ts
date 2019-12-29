export const SELECT_RANDOM_SPIES_COUNT = 'SELECT_RANDOM_SPIES_COUNT';
export const SELECT_SPECIFIC_SPIES_COUNT = 'SELECT_SPECIFIC_SPIES_COUNT';
export const UPDATE_SPIES_COUNT = 'UPDATE_SPIES_COUNT';
export const INCREASE_SPIES_COUNT = 'INCREASE_SPIES_COUNT';
export const REDUCE_SPIES_COUNT = 'REDUCE_SPIES_COUNT';
export const UPDATE_SPIES_FAMILIAR = 'UPDATE_SPIES_FAMILIAR';

const initialState = {
    spiesCount: 1,
    specificSpiesCount: true,
    spiesFamiliar: true,
};

export default (state = initialState, action): typeof initialState => {
    const newState = { ...state };
    switch (action.type) {
        case SELECT_RANDOM_SPIES_COUNT:
            return {
                ...state,
                specificSpiesCount: false,
            };
        case SELECT_SPECIFIC_SPIES_COUNT:
            return {
                ...state,
                specificSpiesCount: true,
            };
        case INCREASE_SPIES_COUNT:
            return {
                ...state,
                spiesCount: newState.spiesCount + 1,
            };

        case REDUCE_SPIES_COUNT:
            return {
                ...state,
                spiesCount: newState.spiesCount - 1,
            };
        case UPDATE_SPIES_FAMILIAR:
            return {
                ...state,
                spiesCount: action.count,
            };
        default:
            return state;
    }
};
