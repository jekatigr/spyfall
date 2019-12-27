export const UPDATE_PLAYERS = 'UPDATE_PLAYERS';

const initialState = {
    players: [],
};

export default (state = initialState, action): typeof initialState => {
    switch (action.type) {
        case UPDATE_PLAYERS:
            return {
                ...state,
                players: action.players,
            };
        default:
            return state;
    }
};
