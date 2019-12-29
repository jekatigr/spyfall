import { combineReducers } from 'redux';
import app from './app';
import game from './game';
import locations from './locations';
import playersInfo from './playersInfo';
import settings from './settings';

export default combineReducers({
    app,
    game,
    locations,
    playersInfo,
    settings,
});
