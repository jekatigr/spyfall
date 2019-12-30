export const UPDATE_PLAYERS = 'UPDATE_PLAYERS';
export const SET_CURRENT_PLAYER_PROFILE = 'SET_CURRENT_PLAYER_PROFILE';

const initialState = {
    players: [],
    currentProfile: -1,
};

export default (state = initialState, action): typeof initialState => {
    switch (action.type) {
        case UPDATE_PLAYERS:
            return {
                ...state,
                players: action.players,
            };
        case SET_CURRENT_PLAYER_PROFILE:
            return {
                ...state,
                currentProfile: action.currentProfile,
            };
        default:
            return state;
    }
};
