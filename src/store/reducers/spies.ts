export const SELECT_RANDOM_SPIES_COUNT = 'SELECT_RANDOM_SPIES_COUNT';
export const SELECT_SPECIFIC_SPIES_COUNT = 'SELECT_SPECIFIC_SPIES_COUNT';
export const UPDATE_SPIES_COUNT = 'UPDATE_SPIES_COUNT';
export const UPDATE_SPIES_FAMILIAR = 'UPDATE_SPIES_FAMILIAR';

const initialState = {
    spiesCount: 1,
    specificSpiesCount: true,
    spiesFamiliar: true,
};

export default (state = initialState, action): typeof initialState => {
    switch (action.type) {
        case SELECT_RANDOM_SPIES_COUNT:
            return {
                ...state,
                spiesCount: action.count,
            };
        case SELECT_SPECIFIC_SPIES_COUNT:
            return {
                ...state,
                spiesCount: action.count,
            };
        case UPDATE_SPIES_COUNT:
            return {
                ...state,
                spiesCount: action.count,
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
