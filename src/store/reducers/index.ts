import app from './app';
import game from './game';
import playersInfo from './playersInfo';
import settings from './settings';

function combineReducers(reducers) {
    return (state, action) :any => {
        const newState = {};
        Object.keys(reducers).forEach((r) => {
            let reducerState = state === undefined ? undefined : state[r];
            reducerState = reducers[r](reducerState, action);
            newState[r] = reducerState;
        });
        return newState;
    };
}

export default combineReducers({
    app,
    game,
    playersInfo,
    settings,
});
